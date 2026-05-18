import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Team, SubCategory, BoardCell, Question, GamePhase, TeamId, Language } from '@/types';
import { findQuestion } from '@/lib/data';

export const MAX_HINTS_PER_TEAM = 2;

interface GameState {
  language: Language;
  teamA: Team;
  teamB: Team;
  selectedSubcategories: SubCategory[];
  board: BoardCell[];
  currentTurn: TeamId;
  activeCell: BoardCell | null;
  activeQuestion: Question | null;
  phase: GamePhase;
  showAnswer: boolean;
  hintRevealed: boolean;
  hintsUsed: { a: number; b: number };

  setLanguage: (lang: Language) => void;
  setTeamName: (id: TeamId, name: string) => void;
  toggleSubcategory: (sub: SubCategory) => void;
  startGame: () => void;
  selectCell: (cell: BoardCell) => void;
  revealAnswer: () => void;
  revealHint: () => void;
  closeQuestion: () => void;
  markCorrect: () => void;
  markWrong: () => void;
  markStealCorrect: () => void;
  markStealWrong: () => void;
  resetGame: () => void;
}

const initialTeamA: Team = { id: 'a', name: 'الفريق الأول', score: 0 };
const initialTeamB: Team = { id: 'b', name: 'الفريق الثاني', score: 0 };

/**
 * Build board with 2 questions per point level per subcategory for ALL categories.
 * Each cell's questionId follows the pattern: q-{subId}-{points}-{row}
 * Total cells = 6 subs × 3 point levels × 2 rows = 36 cells.
 */
function buildBoard(subs: SubCategory[]): BoardCell[] {
  const cells: BoardCell[] = [];
  for (const s of subs) {
    for (const p of [200, 400, 600] as Array<200 | 400 | 600>) {
      for (let row = 1; row <= 2; row++) {
        cells.push({
          subcategoryId: s.id,
          subcategoryName: s.name,
          questionId: `q-${s.id}-${p}-${row}`,
          points: p,
          used: false,
        });
      }
    }
  }
  return cells;
}

function other(t: TeamId): TeamId {
  return t === 'a' ? 'b' : 'a';
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      language: 'ar',
      teamA: { ...initialTeamA },
      teamB: { ...initialTeamB },
      selectedSubcategories: [],
      board: [],
      currentTurn: 'a',
      activeCell: null,
      activeQuestion: null,
      phase: 'setup',
      showAnswer: false,
      hintRevealed: false,
      hintsUsed: { a: 0, b: 0 },

      setLanguage: (lang) => {
        if (get().phase !== 'setup') return;
        set({ language: lang, selectedSubcategories: [] });
      },

      setTeamName: (id, name) => {
        if (id === 'a') set({ teamA: { ...get().teamA, name } });
        else set({ teamB: { ...get().teamB, name } });
      },

      toggleSubcategory: (sub) => {
        const list = get().selectedSubcategories;
        const exists = list.find((s) => s.id === sub.id);
        if (exists) {
          set({ selectedSubcategories: list.filter((s) => s.id !== sub.id) });
        } else if (list.length < 6) {
          set({ selectedSubcategories: [...list, sub] });
        }
      },

      startGame: () => {
        const subs = get().selectedSubcategories;
        if (subs.length !== 6) return;
        set({
          board: buildBoard(subs),
          phase: 'board',
          currentTurn: 'a',
          teamA: { ...get().teamA, score: 0 },
          teamB: { ...get().teamB, score: 0 },
          hintsUsed: { a: 0, b: 0 },
          activeCell: null,
          activeQuestion: null,
          showAnswer: false,
          hintRevealed: false,
        });
      },

      selectCell: (cell) => {
        if (cell.used) return;
        const question = findQuestion(cell.questionId);
        if (!question) return;
        set({
          activeCell: cell,
          activeQuestion: question,
          phase: 'question',
          showAnswer: false,
          hintRevealed: false,
        });
      },

      revealAnswer: () => set({ showAnswer: true }),

      revealHint: () => {
        const turn = get().currentTurn;
        const used = get().hintsUsed;
        if (used[turn] >= MAX_HINTS_PER_TEAM) return;
        set({ hintRevealed: true, hintsUsed: { ...used, [turn]: used[turn] + 1 } });
      },

      closeQuestion: () => {
        set({
          activeCell: null,
          activeQuestion: null,
          phase: 'board',
          showAnswer: false,
          hintRevealed: false,
        });
      },

      markCorrect: () => {
        const { activeCell, currentTurn, board, teamA, teamB } = get();
        if (!activeCell) return;
        const points = activeCell.points;
        const newBoard = board.map((c) =>
          c.questionId === activeCell.questionId
            ? { ...c, used: true, wonBy: currentTurn }
            : c
        );
        const newA =
          currentTurn === 'a'
            ? { ...teamA, score: teamA.score + points }
            : teamA;
        const newB =
          currentTurn === 'b'
            ? { ...teamB, score: teamB.score + points }
            : teamB;
        const allDone = newBoard.every((c) => c.used);
        set({
          board: newBoard,
          teamA: newA,
          teamB: newB,
          currentTurn: other(currentTurn),
          activeCell: null,
          activeQuestion: null,
          phase: allDone ? 'results' : 'board',
          showAnswer: false,
          hintRevealed: false,
        });
      },

      markWrong: () => {
        const { phase, activeCell, currentTurn, board } = get();
        if (!activeCell) return;
        if (phase === 'question') {
          set({ phase: 'steal', showAnswer: false, hintRevealed: false });
          return;
        }
        // phase === 'steal'
        const newBoard = board.map((c) =>
          c.questionId === activeCell.questionId ? { ...c, used: true } : c
        );
        const allDone = newBoard.every((c) => c.used);
        set({
          board: newBoard,
          currentTurn: other(currentTurn),
          activeCell: null,
          activeQuestion: null,
          phase: allDone ? 'results' : 'board',
          showAnswer: false,
          hintRevealed: false,
        });
      },

      markStealCorrect: () => {
        const { activeCell, currentTurn, board, teamA, teamB } = get();
        if (!activeCell) return;
        const stealer = other(currentTurn);
        const points = activeCell.points;
        const newBoard = board.map((c) =>
          c.questionId === activeCell.questionId
            ? { ...c, used: true, wonBy: stealer }
            : c
        );
        const newA =
          stealer === 'a'
            ? { ...teamA, score: teamA.score + points }
            : teamA;
        const newB =
          stealer === 'b'
            ? { ...teamB, score: teamB.score + points }
            : teamB;
        const allDone = newBoard.every((c) => c.used);
        set({
          board: newBoard,
          teamA: newA,
          teamB: newB,
          currentTurn: other(stealer),
          activeCell: null,
          activeQuestion: null,
          phase: allDone ? 'results' : 'board',
          showAnswer: false,
          hintRevealed: false,
        });
      },

      markStealWrong: () => {
        const { activeCell, currentTurn, board } = get();
        if (!activeCell) return;
        const stealer = other(currentTurn);
        const newBoard = board.map((c) =>
          c.questionId === activeCell.questionId ? { ...c, used: true } : c
        );
        const allDone = newBoard.every((c) => c.used);
        set({
          board: newBoard,
          currentTurn: stealer,
          activeCell: null,
          activeQuestion: null,
          phase: allDone ? 'results' : 'board',
          showAnswer: false,
          hintRevealed: false,
        });
      },

      resetGame: () => {
        set({
          teamA: { ...initialTeamA },
          teamB: { ...initialTeamB },
          selectedSubcategories: [],
          board: [],
          currentTurn: 'a',
          activeCell: null,
          activeQuestion: null,
          phase: 'setup',
          showAnswer: false,
          hintRevealed: false,
          hintsUsed: { a: 0, b: 0 },
        });
      },
    }),
    {
      name: 'jam3ah-game',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
