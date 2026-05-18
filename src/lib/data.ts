import type { Question } from '@/types';
import { ALL_ARABIC_SUBCATEGORIES } from '@/lib/categories';
import { ENGLISH_QUESTIONS } from '@/lib/englishQuestions';

const POINTS: Array<200 | 400 | 600> = [200, 400, 600];

function generateQuestionsForSub(subId: string): Question[] {
  const list: Question[] = [];
  for (const p of POINTS) {
    for (let row = 1; row <= 2; row++) {
      list.push({
        id: `q-${subId}-${p}-${row}`,
        subcategoryId: subId,
        text: `🔧 سؤال تجريبي للفئة ${subId} بقيمة ${p} نقطة (#${row})`,
        answer: `🔧 الإجابة التجريبية ${subId}-${p}-${row}`,
        hint: `🔧 تلميح للفئة ${subId} - ${p} - ${row}`,
        points: p,
      });
    }
  }
  return list;
}

export const ARABIC_QUESTIONS: Question[] = ALL_ARABIC_SUBCATEGORIES.flatMap((s) =>
  generateQuestionsForSub(s.id)
);

export const QUESTIONS: Question[] = [...ARABIC_QUESTIONS, ...ENGLISH_QUESTIONS];

export function findQuestion(id: string): Question | undefined {
  return QUESTIONS.find((q) => q.id === id);
}

export function pointColor(p: 200 | 400 | 600): string {
  if (p === 200) return '#10B981';
  if (p === 400) return '#3B82F6';
  return '#F59E0B';
}

// Named exports for separated category question sets
export { ENGLISH_QUESTIONS };
export const arabicCategories = ALL_ARABIC_SUBCATEGORIES;
export const mainCategories = ALL_ARABIC_SUBCATEGORIES;
