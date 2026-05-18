import type { Question } from '@/types';

const POINTS: Array<200 | 400 | 600> = [200, 400, 600];

const ENGLISH_SUB_IDS = [
  'en-geo-capitals', 'en-geo-landmarks', 'en-geo-countries', 'en-geo-flags',
  'en-hw-movies', 'en-hw-actors', 'en-hw-oscars', 'en-hw-blockbusters',
  'en-sp-football', 'en-sp-nba', 'en-sp-olympics', 'en-sp-tennis',
  'en-st-space', 'en-st-inventions', 'en-st-biology', 'en-st-ai',
  'en-pm-artists', 'en-pm-albums', 'en-pm-lyrics', 'en-pm-concerts',
  'en-wh-empires', 'en-wh-wars', 'en-wh-revolutions', 'en-wh-leaders',
  'en-fc-cuisines', 'en-fc-dishes', 'en-fc-drinks', 'en-fc-restaurants',
  'en-ti-social', 'en-ti-apps', 'en-ti-companies', 'en-ti-gaming',
];

function generateEnglishQuestionsForSub(subId: string): Question[] {
  const list: Question[] = [];
  for (const p of POINTS) {
    for (let row = 1; row <= 2; row++) {
      list.push({
        id: `q-${subId}-${p}-${row}`,
        subcategoryId: subId,
        text: `Sample question for category ${subId} worth ${p} points (#${row})`,
        answer: `Sample answer for ${subId}-${p}-${row}`,
        hint: `Hint for ${subId} - ${p} - ${row}`,
        points: p,
      });
    }
  }
  return list;
}

export const ENGLISH_QUESTIONS: Question[] = ENGLISH_SUB_IDS.flatMap(
  generateEnglishQuestionsForSub
);
