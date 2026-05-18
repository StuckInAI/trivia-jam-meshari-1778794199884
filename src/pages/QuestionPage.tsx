import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGameStore, MAX_HINTS_PER_TEAM } from '@/store/gameStore';
import { useHydrated } from '@/hooks/useHydrated';
import { findQuestion, pointColor } from '@/lib/data';
import { findSubcategory, findMainCategoryForSub } from '@/lib/categories';
import { Check, X, Lightbulb, Eye, ArrowLeft } from 'lucide-react';

export default function QuestionPage() {
  const hydrated = useHydrated();
  const navigate = useNavigate();
  const { questionId } = useParams<{ questionId: string }>();

  const phase = useGameStore((s) => s.phase);
  const language = useGameStore((s) => s.language);
  const activeCell = useGameStore((s) => s.activeCell);
  const activeQuestion = useGameStore((s) => s.activeQuestion);
  const currentTurn = useGameStore((s) => s.currentTurn);
  const teamA = useGameStore((s) => s.teamA);
  const teamB = useGameStore((s) => s.teamB);
  const showAnswer = useGameStore((s) => s.showAnswer);
  const hintRevealed = useGameStore((s) => s.hintRevealed);
  const hintsUsed = useGameStore((s) => s.hintsUsed);
  const selectCell = useGameStore((s) => s.selectCell);
  const revealAnswer = useGameStore((s) => s.revealAnswer);
  const revealHint = useGameStore((s) => s.revealHint);
  const markCorrect = useGameStore((s) => s.markCorrect);
  const markWrong = useGameStore((s) => s.markWrong);
  const markStealCorrect = useGameStore((s) => s.markStealCorrect);
  const markStealWrong = useGameStore((s) => s.markStealWrong);
  const closeQuestion = useGameStore((s) => s.closeQuestion);
  const board = useGameStore((s) => s.board);

  const isAr = language === 'ar';

  // Bootstrap: if we land here directly (e.g. refresh), try to rehydrate from board
  useEffect(() => {
    if (!hydrated) return;
    if (!questionId) {
      navigate('/play/board', { replace: true });
      return;
    }
    // If store already has the right active cell, we're good
    if (
      activeCell &&
      activeCell.questionId === questionId &&
      (phase === 'question' || phase === 'steal')
    ) {
      return;
    }
    // Try to find the cell in the board and select it
    const cell = board.find((c) => c.questionId === questionId);
    if (!cell || cell.used) {
      navigate('/play/board', { replace: true });
      return;
    }
    selectCell(cell);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, questionId]);

  // Phase-watch: navigate away when question is resolved
  useEffect(() => {
    if (!hydrated) return;
    if (phase === 'board' || phase === 'results') {
      navigate('/play/board', { replace: true });
    } else if (phase === 'setup') {
      navigate('/play', { replace: true });
    }
    // phase === 'question' or 'steal' → stay here
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, phase]);

  const sub = useMemo(
    () => (activeCell ? findSubcategory(activeCell.subcategoryId) : undefined),
    [activeCell]
  );
  const mainCat = useMemo(
    () => (activeCell ? findMainCategoryForSub(activeCell.subcategoryId) : undefined),
    [activeCell]
  );

  if (!hydrated) return null;

  const question = activeQuestion || (questionId ? findQuestion(questionId) : undefined);
  if (!question || !activeCell) return null;

  // Don't render during phase transitions
  if (phase === 'board' || phase === 'results' || phase === 'setup') return null;

  const isSteal = phase === 'steal';
  const turnTeam = currentTurn === 'a' ? teamA : teamB;
  const stealTeam = currentTurn === 'a' ? teamB : teamA;
  const turnColor = currentTurn === 'a' ? '#10B981' : '#F59E0B';
  const stealColor = currentTurn === 'a' ? '#F59E0B' : '#10B981';

  const pc = pointColor(activeCell.points);
  const canUseHint =
    !isSteal && !hintRevealed && hintsUsed[currentTurn] < MAX_HINTS_PER_TEAM;

  // Close button: reset state, phase-watch will navigate back
  const handleClose = () => {
    closeQuestion();
  };

  const labelPoints = isAr ? 'نقطة' : 'pts';
  const labelQuestion = isAr ? 'السؤال' : 'Question';
  const labelHint = isAr ? 'تلميح' : 'Hint';
  const labelAnswer = isAr ? 'الإجابة الصحيحة' : 'Correct Answer';
  const labelShowAnswer = isAr ? 'أظهر الإجابة' : 'Show Answer';
  const labelUseHint = isAr
    ? `استخدم تلميح (${MAX_HINTS_PER_TEAM - hintsUsed[currentTurn]} متبقي)`
    : `Use Hint (${MAX_HINTS_PER_TEAM - hintsUsed[currentTurn]} left)`;
  const labelTurn = isAr ? `دور ${turnTeam.name}` : `${turnTeam.name}'s Turn`;
  const labelSteal = isAr
    ? `🔥 فرصة السرقة — دور ${stealTeam.name}`
    : `🔥 Steal Chance — ${stealTeam.name}'s Turn`;
  const labelCorrect = isAr ? 'إجابة صحيحة' : 'Correct';
  const labelWrong = isAr ? 'إجابة خاطئة' : 'Wrong';
  const labelStealCorrect = isAr
    ? `${stealTeam.name} أجاب صح`
    : `${stealTeam.name} Got It`;
  const labelStealWrong = isAr ? 'فشلت السرقة' : 'Steal Failed';

  const activeColor = isSteal ? stealColor : turnColor;

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        background: 'var(--bg-gradient)',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: `radial-gradient(ellipse at 50% 30%, ${activeColor}18 0%, transparent 65%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="glass anim-scale-in"
        style={{
          maxWidth: 800,
          width: '100%',
          borderRadius: 28,
          padding: 36,
          position: 'relative',
          zIndex: 1,
          borderTop: `4px solid ${activeColor}`,
        }}
      >
        {/* Back button */}
        <button
          onClick={handleClose}
          aria-label={isAr ? 'رجوع' : 'Back'}
          style={{
            position: 'absolute',
            top: 16,
            ...(isAr ? { right: 16 } : { left: 16 }),
            width: 40,
            height: 40,
            borderRadius: 999,
            background: 'var(--input-bg)',
            border: '1px solid var(--input-border)',
            color: 'var(--text-secondary)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--card-bg)';
            e.currentTarget.style.color = 'var(--text)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--input-bg)';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          <ArrowLeft size={16} style={{ transform: isAr ? 'scaleX(-1)' : 'none' }} />
        </button>

        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            flexWrap: 'wrap',
            gap: 12,
            paddingInlineStart: 52,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {mainCat && <span style={{ fontSize: 28 }}>{mainCat.emoji}</span>}
            <div>
              <div
                style={{
                  fontSize: 12,
                  color: 'var(--text-secondary)',
                  fontWeight: 700,
                }}
              >
                {mainCat?.name}
              </div>
              <div style={{ fontSize: 18, fontWeight: 900 }}>
                {sub?.icon} {sub?.name}
              </div>
            </div>
          </div>
          <div
            style={{
              padding: '8px 16px',
              borderRadius: 999,
              background: `${pc}22`,
              border: `1px solid ${pc}66`,
              color: pc,
              fontWeight: 900,
              fontSize: 18,
            }}
            dir="ltr"
          >
            {activeCell.points} {labelPoints}
          </div>
        </div>

        {/* Turn banner */}
        <div
          style={{
            padding: '10px 16px',
            borderRadius: 12,
            background: `${activeColor}1A`,
            border: `1px solid ${activeColor}55`,
            color: activeColor,
            fontWeight: 800,
            fontSize: 14,
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          {isSteal ? labelSteal : labelTurn}
        </div>

        {/* Question */}
        <div
          style={{
            padding: 24,
            borderRadius: 16,
            background: 'var(--input-bg)',
            border: '1px solid var(--input-border)',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: 'var(--text-secondary)',
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            {labelQuestion}
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.6 }}>
            {question.text}
          </div>
        </div>

        {/* Hint */}
        {hintRevealed && (
          <div
            className="anim-slide-up"
            style={{
              padding: 16,
              borderRadius: 12,
              background: '#F59E0B1A',
              border: '1px solid #F59E0B55',
              color: '#F59E0B',
              marginBottom: 20,
              display: 'flex',
              gap: 10,
              alignItems: 'flex-start',
            }}
          >
            <Lightbulb size={18} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontWeight: 900, fontSize: 13, marginBottom: 4 }}>
                {labelHint}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{question.hint}</div>
            </div>
          </div>
        )}

        {/* Answer */}
        {showAnswer && (
          <div
            className="anim-slide-up"
            style={{
              padding: 20,
              borderRadius: 12,
              background: '#10B9811A',
              border: '1px solid #10B98155',
              color: '#10B981',
              marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 900, marginBottom: 6 }}>
              {labelAnswer}
            </div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>{question.answer}</div>
          </div>
        )}

        {/* Secondary actions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'center',
            marginBottom: 8,
          }}
        >
          {!showAnswer && (
            <button className="btn-ghost" onClick={revealAnswer}>
              <Eye size={14} /> {labelShowAnswer}
            </button>
          )}
          {canUseHint && (
            <button
              className="btn-ghost"
              onClick={revealHint}
              style={{ color: '#F59E0B', borderColor: '#F59E0B55' }}
            >
              <Lightbulb size={14} /> {labelUseHint}
            </button>
          )}
        </div>

        <div
          style={{
            height: 1,
            background: 'var(--card-border)',
            margin: '20px 0',
          }}
        />

        {/* Primary actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <button
            onClick={isSteal ? markStealCorrect : markCorrect}
            style={{
              padding: '16px 20px',
              borderRadius: 14,
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              color: 'white',
              fontWeight: 900,
              fontSize: 16,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              boxShadow: '0 8px 24px rgba(16,185,129,0.3)',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(16,185,129,0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(16,185,129,0.3)';
            }}
          >
            <Check size={18} strokeWidth={3} />
            {isSteal ? labelStealCorrect : labelCorrect}
          </button>
          <button
            onClick={isSteal ? markStealWrong : markWrong}
            style={{
              padding: '16px 20px',
              borderRadius: 14,
              background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
              color: 'white',
              fontWeight: 900,
              fontSize: 16,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              boxShadow: '0 8px 24px rgba(239,68,68,0.3)',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(239,68,68,0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(239,68,68,0.3)';
            }}
          >
            <X size={18} strokeWidth={3} />
            {isSteal ? labelStealWrong : labelWrong}
          </button>
        </div>
      </div>
    </div>
  );
}
