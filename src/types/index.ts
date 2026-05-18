export type TeamId = 'a' | 'b';
export type Language = 'ar' | 'en';

export interface Team {
  id: TeamId;
  name: string;
  score: number;
}

export interface SubCategory {
  id: string;
  mainCategoryId: string;
  name: string;
  icon: string;
  imagePrompt?: string;
}

export interface MainCategory {
  id: string;
  name: string;
  emoji: string;
  color: string;
  subcategories: SubCategory[];
}

export interface Question {
  id: string;
  subcategoryId: string;
  text: string;
  answer: string;
  hint: string;
  points: 200 | 400 | 600;
  image?: string;
}

export interface BoardCell {
  subcategoryId: string;
  subcategoryName: string;
  questionId: string;
  points: 200 | 400 | 600;
  used: boolean;
  wonBy?: TeamId;
}

export type GamePhase = 'setup' | 'board' | 'question' | 'steal' | 'results';

export type Theme = 'dark' | 'light';
