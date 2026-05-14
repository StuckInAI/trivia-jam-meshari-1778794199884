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

  // Rehydrate active question from URL param if state was lost
  useEffect(() => {
    if (!hydrated) return;
    if (!questionId) {
      navigate('/play/board', { replace: true });
      return;
    }
    if (!activeCell || activeCell.questionId !== questionId) {
      const cell = board.find((c) => c.questionId === questionId);
      if (!cell || cell.used) {
        navigate('/play/board', { replace: true });
        return;
      }
      selectCell(cell);
    }
  }, [hydrated, questionId, activeCell, board, selectCell, navigate]);

  // When phase returns to board/results, navigate away
  useEffect(() => {
    if (!hydrated) return;
    if (phase === 'board') {
      navigate('/play/board', { replace: true });
    } else if (phase === 'results') {
      navigate('/play/board', { replace: true });
    } else if (phase === 'setup') {
      navigate('/play', { replace: true });
    }
  }, [hydrated, phase, navigate]);

  const sub = useMemo(() => activeCell ? findSubcategory(activeCell.subcategoryId) : undefined, [activeCell]);
  const mainCat = useMemo(() => activeCell ? findMainCategoryForSub(activeCell.subcategoryId) : undefined, [activeCell]);

  if (!hydrated) return null;
  if (!activeCell || !activeQuestion) {
    // Try to lookup question by id for initial render
    const q = questionId ? findQuestion(questionId) : undefined;
    if (!q) return null;
  }

  const question = activeQuestion || (questionId ? findQuestion(questionId) : undefined);
  if (!question || !activeCell) return null;

  const isSteal = phase === 'steal';
  const turnTeam = currentTurn === 'a' ? teamA : teamB;
  const stealTeam = currentTurn === 'a' ? teamB : teamA;
  const turnColor = currentTurn === 'a' ? '#10B981' : '#F59E0B';
  const stealColor = currentTurn === 'a' ? '#F59E0B' : '#10B981';

  const pc = pointColor(activeCell.points);
  const canUseHint = !isSteal && !hintRevealed && hintsUsed[currentTurn] < MAX_HINTS_PER_TEAM;

  const handleClose = () => {
    closeQuestion();
  };

  return (
    <div className="modal-overlay" style={{
      position: 'fixed', inset: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20,
    }}>
      <div className="glass anim-scale-in" style={{
        maxWidth: 800, width: '100%',
        borderRadius: 28, padding: 36,
        position: 'relative',
        borderTop: `4px solid ${isSteal ? stealColor : turnColor}`,
        animation: isSteal ? 'stealPulse 1.6s ease-in-out infinite, scaleIn 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards' : undefined,
      }}>
        {/* Close */}
        <button
          onClick={handleClose}
          aria-label="إغلاق"
          style={{
            position: 'absolute', top: 16, left: 16,
            width: 36, height: 36, borderRadius: 999,
            background: 'var(--input-bg)', border: '1px solid var(--input-border)',
            color: 'var(--text-secondary)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <ArrowLeft size={16} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {mainCat && <span style={{ fontSize: 28 }}>{mainCat.emoji}</span>}
            <div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 700 }}>
                {mainCat?.name}
              </div>
              <div style={{ fontSize: 18, fontWeight: 900 }}>
                {sub?.icon} {sub?.name}
              </div>
            </div>
          </div>
          <div style={{
            padding: '8px 16px', borderRadius: 999,
            background: `${pc}22`, border: `1px solid ${pc}66`,
            color: pc, fontWeight: 900, fontSize: 18,
          }}>
            {activeCell.points} نقطة
          </div>
        </div>

        {/* Turn banner */}
        <div style={{
          padding: '10px 16px', borderRadius: 12,
          background: isSteal ? `${stealColor}1A` : `${turnColor}1A`,
          border: `1px solid ${isSteal ? stealColor : turnColor}55`,
          color: isSteal ? stealColor : turnColor,
          fontWeight: 800, fontSize: 14,
          marginBottom: 24, textAlign: 'center',
        }}>
          {isSteal
            ? `🔥 فرصة السرقة — دور ${stealTeam.name}`
            : `دور ${turnTeam.name}`}
        </div>

        {/* Question */}
        <div style={{
          padding: 24, borderRadius: 16,
          background: 'var(--input-bg)', border: '1px solid var(--input-border)',
          marginBottom: 20,
        }}>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 700, marginBottom: 8 }}>السؤال</div>
          <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.6 }}>{question.text}</div>
        </div>

        {/* Hint */}
        {hintRevealed && (
          <div className="anim-slide-up" style={{
            padding: 16, borderRadius: 12,
            background: '#F59E0B1A', border: '1px solid #F59E0B55',
            color: '#F59E0B', marginBottom: 20,
            display: 'flex', gap: 10, alignItems: 'flex-start',
          }}>
            <Lightbulb size={18} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontWeight: 900, fontSize: 13, marginBottom: 4 }}>تلميح</div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{question.hint}</div>
            </div>
          </div>
        )}

        {/* Answer */}
        {showAnswer && (
          <div className="anim-slide-up" style={{
            padding: 20, borderRadius: 12,
            background: '#10B9811A', border: '1px solid #10B98155',
            color: '#10B981', marginBottom: 20,
          }}>
            <div style={{ fontSize: 13, fontWeight: 900, marginBottom: 6 }}>الإجابة الصحيحة</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>{question.answer}</div>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          {!showAnswer && (
            <button className="btn-ghost" onClick={revealAnswer}>
              <Eye size={14} /> أظهر الإجابة
            </button>
          )}
          {canUseHint && (
            <button
              className="btn-ghost"
              onClick={revealHint}
              style={{ color: '#F59E0B', borderColor: '#F59E0B55' }}
            >
              <Lightbulb size={14} /> استخدم تلميح ({MAX_HINTS_PER_TEAM - hintsUsed[currentTurn]} متبقي)
            </button>
          )}
        </div>

        <div style={{ height: 1, background: 'var(--card-border)', margin: '24px 0' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <button
            onClick={isSteal ? markStealCorrect : markCorrect}
            style={{
              padding: '16px 20px', borderRadius: 14,
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              color: 'white', fontWeight: 900, fontSize: 16,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              boxShadow: '0 8px 24px rgba(16,185,129,0.3)',
              transition: 'all 0.2s ease',
            }}
          >
            <Check size={18} strokeWidth={3} />
            {isSteal ? `${stealTeam.name} أجاب صح` : 'إجابة صحيحة'}
          </button>
          <button
            onClick={isSteal ? markStealWrong : markWrong}
            style={{
              padding: '16px 20px', borderRadius: 14,
              background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
              color: 'white', fontWeight: 900, fontSize: 16,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              boxShadow: '0 8px 24px rgba(239,68,68,0.3)',
              transition: 'all 0.2s ease',
            }}
          >
            <X size={18} strokeWidth={3} />
            {isSteal ? 'فشلت السرقة' : 'إجابة خاطئة'}
          </button>
        </div>
      </div>
    </div>
  );
}
