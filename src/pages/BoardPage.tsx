import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';
import { useHydrated } from '@/hooks/useHydrated';
import { pointColor } from '@/lib/data';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import Confetti from '@/components/Confetti';
import { Lightbulb, RotateCcw, LogOut, Trophy } from 'lucide-react';
import type { BoardCell } from '@/types';

const TOTAL_POINTS_PER_SUB = 200 + 200 + 400 + 400 + 600 + 600;
const MAX_POINTS = TOTAL_POINTS_PER_SUB * 6;

export default function BoardPage() {
  const hydrated = useHydrated();
  const navigate = useNavigate();
  const phase = useGameStore((s) => s.phase);
  const language = useGameStore((s) => s.language);
  const teamA = useGameStore((s) => s.teamA);
  const teamB = useGameStore((s) => s.teamB);
  const board = useGameStore((s) => s.board);
  const subs = useGameStore((s) => s.selectedSubcategories);
  const currentTurn = useGameStore((s) => s.currentTurn);
  const hintsUsed = useGameStore((s) => s.hintsUsed);
  const selectCell = useGameStore((s) => s.selectCell);
  const resetGame = useGameStore((s) => s.resetGame);

  const isAr = language === 'ar';

  useEffect(() => {
    if (!hydrated) return;
    if (phase === 'setup' || board.length === 0) {
      navigate('/play', { replace: true });
    }
  }, [hydrated, phase, board.length, navigate]);

  // If phase is question/steal, redirect to the question page
  useEffect(() => {
    if (!hydrated) return;
    if ((phase === 'question' || phase === 'steal')) {
      // find the active cell from the store
      const activeCell = useGameStore.getState().activeCell;
      if (activeCell) {
        navigate(`/play/board/question/${activeCell.questionId}`, { replace: true });
      }
    }
  }, [hydrated, phase, navigate]);

  if (!hydrated) return null;
  if (board.length === 0) return null;

  const usedCount = board.filter((c) => c.used).length;
  const wonPoints = board
    .filter((c) => c.used && c.wonBy)
    .reduce((acc, c) => acc + c.points, 0);
  const remaining = MAX_POINTS - wonPoints;

  const handleQuit = () => {
    resetGame();
    navigate('/play');
  };

  const handleCellClick = (cell: BoardCell) => {
    if (cell.used) return;
    selectCell(cell);
    navigate(`/play/board/question/${cell.questionId}`);
  };

  const handlePlayAgain = () => {
    resetGame();
    navigate('/play');
  };

  // RESULTS SCREEN
  if (phase === 'results') {
    const winner =
      teamA.score > teamB.score
        ? teamA
        : teamB.score > teamA.score
        ? teamB
        : null;
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          position: 'relative',
        }}
      >
        <Confetti />
        <div
          className="glass anim-scale-in"
          style={{
            maxWidth: 600,
            width: '100%',
            borderRadius: 28,
            padding: 48,
            textAlign: 'center',
            position: 'relative',
            zIndex: 5,
          }}
        >
          <div style={{ fontSize: 80, marginBottom: 16 }}>🎉</div>
          <Trophy size={56} color="#F59E0B" style={{ marginBottom: 16 }} />
          <h1 style={{ fontSize: 42, fontWeight: 900, marginBottom: 8 }}>
            {winner
              ? isAr
                ? `فاز ${winner.name}!`
                : `${winner.name} Wins!`
              : isAr
              ? 'تعادل!'
              : "It's a Tie!"}
          </h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              marginBottom: 32,
              fontSize: 17,
            }}
          >
            {isAr
              ? 'انتهت اللعبة — هذي النتائج النهائية'
              : 'Game over — final results'}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                padding: 20,
                borderRadius: 16,
                background: '#10B98122',
                border: '1px solid #10B98155',
              }}
            >
              <div
                style={{
                  color: '#10B981',
                  fontWeight: 700,
                  marginBottom: 6,
                  fontSize: 14,
                }}
              >
                {teamA.name}
              </div>
              <div
                style={{ fontSize: 44, fontWeight: 900, color: '#10B981' }}
              >
                {teamA.score}
              </div>
            </div>
            <div
              style={{
                padding: 20,
                borderRadius: 16,
                background: '#F59E0B22',
                border: '1px solid #F59E0B55',
              }}
            >
              <div
                style={{
                  color: '#F59E0B',
                  fontWeight: 700,
                  marginBottom: 6,
                  fontSize: 14,
                }}
              >
                {teamB.name}
              </div>
              <div
                style={{ fontSize: 44, fontWeight: 900, color: '#F59E0B' }}
              >
                {teamB.score}
              </div>
            </div>
          </div>
          <button
            className="btn-primary"
            onClick={handlePlayAgain}
            style={{ fontSize: 17, padding: '14px 36px' }}
          >
            <RotateCcw size={18} />
            {isAr ? 'العب مجدداً' : 'Play Again'}
          </button>
        </div>
      </div>
    );
  }

  // BOARD SCREEN — only render when phase is 'board'
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar */}
      <nav
        className="navbar-glass"
        style={{
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <button className="btn-ghost" onClick={handleQuit}>
          <LogOut size={14} /> {isAr ? 'انسحاب' : 'Quit'}
        </button>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <ScorePill
            name={teamA.name}
            score={teamA.score}
            color="#10B981"
            active={currentTurn === 'a'}
          />
          <span style={{ color: 'var(--text-secondary)', fontWeight: 900 }}>VS</span>
          <ScorePill
            name={teamB.name}
            score={teamB.score}
            color="#F59E0B"
            active={currentTurn === 'b'}
          />
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Logo size={22} />
          <ThemeToggle />
        </div>
      </nav>

      {/* Main */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '180px 1fr 180px',
          gap: 16,
          padding: 16,
          minHeight: 0,
        }}
        className="board-layout"
      >
        {/* Team B */}
        <TeamPanel
          name={teamB.name}
          score={teamB.score}
          color="#F59E0B"
          active={currentTurn === 'b'}
          hintsLeft={2 - hintsUsed.b}
          isAr={isAr}
        />

        {/* Board */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            overflowX: 'auto',
          }}
          className="hide-scrollbar anim-board-reveal"
        >
          <div
            style={{
              minWidth: 700,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `40px repeat(${subs.length}, 1fr)`,
                gap: 8,
                marginBottom: 8,
              }}
            >
              <div></div>
              {subs.map((s) => (
                <div
                  key={s.id}
                  className="glass"
                  style={{
                    padding: '10px 8px',
                    borderRadius: 12,
                    textAlign: 'center',
                    fontWeight: 900,
                    fontSize: 13,
                  }}
                >
                  <div style={{ fontSize: 22 }}>{s.icon}</div>
                  <div style={{ marginTop: 4 }}>{s.name}</div>
                </div>
              ))}
            </div>

            {/* Cells grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `40px repeat(${subs.length}, 1fr)`,
                gridAutoRows: '1fr',
                gap: 8,
                flex: 1,
                minHeight: 0,
              }}
            >
              {([200, 200, 400, 400, 600, 600] as Array<200 | 400 | 600>).map(
                (points, rowIdx) => (
                  <RowFragment
                    key={rowIdx}
                    rowIdx={rowIdx}
                    points={points}
                    subs={subs.map((s) => s.id)}
                    board={board}
                    onCellClick={handleCellClick}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Team A */}
        <TeamPanel
          name={teamA.name}
          score={teamA.score}
          color="#10B981"
          active={currentTurn === 'a'}
          hintsLeft={2 - hintsUsed.a}
          isAr={isAr}
        />
      </div>

      {/* Bottom bar */}
      <div
        className="navbar-glass"
        style={{
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          borderTop: '1px solid var(--navbar-border)',
          borderBottom: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: currentTurn === 'a' ? '#10B981' : '#F59E0B',
            }}
            className="anim-subtle-pulse"
          />
          <span style={{ fontWeight: 700, fontSize: 14 }}>
            {isAr ? 'دور ' : 'Turn: '}
            <span
              style={{ color: currentTurn === 'a' ? '#10B981' : '#F59E0B' }}
            >
              {currentTurn === 'a' ? teamA.name : teamB.name}
            </span>
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 16,
            color: 'var(--text-secondary)',
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          <span dir="ltr">
            {usedCount}/36 {isAr ? 'سؤال' : 'questions'}
          </span>
          <span>·</span>
          <span dir="ltr">
            {remaining} {isAr ? 'نقطة متبقية' : 'pts left'}
          </span>
        </div>
      </div>
    </div>
  );
}

type RowFragmentProps = {
  rowIdx: number;
  points: 200 | 400 | 600;
  subs: string[];
  board: BoardCell[];
  onCellClick: (cell: BoardCell) => void;
};

function RowFragment({
  rowIdx,
  points,
  subs,
  board,
  onCellClick,
}: RowFragmentProps) {
  const rowNumber = (rowIdx % 2) + 1;
  const pc = pointColor(points);
  return (
    <>
      <div
        style={{
          background: `${pc}33`,
          border: `1px solid ${pc}55`,
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: pc,
          fontWeight: 900,
          fontSize: 13,
        }}
      >
        {points}
      </div>
      {subs.map((subId) => {
        const cell = board.find(
          (c) =>
            c.subcategoryId === subId &&
            c.points === points &&
            c.questionId.endsWith(`-${rowNumber}`)
        );
        if (!cell) return <div key={subId} />;
        return (
          <Cell
            key={cell.questionId}
            cell={cell}
            onClick={() => onCellClick(cell)}
          />
        );
      })}
    </>
  );
}

function Cell({
  cell,
  onClick,
}: {
  cell: BoardCell;
  onClick: () => void;
}) {
  const pc = pointColor(cell.points);
  if (cell.used) {
    const wonColor =
      cell.wonBy === 'a'
        ? '#10B981'
        : cell.wonBy === 'b'
        ? '#F59E0B'
        : '#64748B';
    return (
      <div
        style={{
          background: cell.wonBy ? `${wonColor}1A` : 'var(--card-bg)',
          border: `1px solid ${
            cell.wonBy ? `${wonColor}66` : 'var(--card-border)'
          }`,
          borderRadius: 12,
          opacity: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: cell.wonBy ? wonColor : 'var(--text-secondary)',
          fontWeight: 900,
          fontSize: 18,
        }}
      >
        {cell.wonBy ? '✓' : '✗'}
      </div>
    );
  }
  return (
    <button
      onClick={onClick}
      style={{
        background: `linear-gradient(135deg, ${pc}33, ${pc}11)`,
        border: `1px solid ${pc}66`,
        borderRadius: 12,
        color: pc,
        fontWeight: 900,
        fontSize: 22,
        transition: 'all 0.15s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 8px 24px ${pc}44`;
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {cell.points}
    </button>
  );
}

type TeamPanelProps = {
  name: string;
  score: number;
  color: string;
  active: boolean;
  hintsLeft: number;
  isAr: boolean;
};

function TeamPanel({
  name,
  score,
  color,
  active,
  hintsLeft,
  isAr,
}: TeamPanelProps) {
  return (
    <div
      className="glass"
      style={{
        borderRadius: 20,
        padding: 16,
        borderTop: `3px solid ${color}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: active ? `0 0 30px ${color}44` : 'none',
        transition: 'box-shadow 0.3s ease',
        animation: active ? 'pulseGlow 2s ease-in-out infinite' : undefined,
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          color,
          marginBottom: 8,
          textAlign: 'center',
          wordBreak: 'break-word',
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontSize: 48,
          fontWeight: 900,
          color,
          lineHeight: 1,
          marginBottom: 14,
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {score}
      </div>
      <div
        style={{
          width: '100%',
          height: 1,
          background: 'var(--card-border)',
          marginBottom: 12,
        }}
      />
      <div
        style={{
          fontSize: 11,
          color: 'var(--text-secondary)',
          fontWeight: 700,
          marginBottom: 6,
        }}
      >
        {isAr ? 'تلميحات' : 'Hints'}
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 28,
              height: 28,
              borderRadius: 999,
              background: i < hintsLeft ? `${color}33` : 'var(--input-bg)',
              border: `1px solid ${
                i < hintsLeft ? color : 'var(--input-border)'
              }`,
              color: i < hintsLeft ? color : 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: i < hintsLeft ? 1 : 0.4,
            }}
          >
            <Lightbulb size={13} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ScorePill({
  name,
  score,
  color,
  active,
}: {
  name: string;
  score: number;
  color: string;
  active: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '6px 14px',
        borderRadius: 999,
        background: active ? `${color}1A` : 'var(--card-bg)',
        border: `1px solid ${active ? color : 'var(--card-border)'}`,
        transition: 'all 0.2s ease',
      }}
    >
      <span
        style={{
          color,
          fontWeight: 700,
          fontSize: 13,
          maxWidth: 100,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </span>
      <span
        style={{
          color,
          fontWeight: 900,
          fontSize: 18,
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {score}
      </span>
    </div>
  );
}
