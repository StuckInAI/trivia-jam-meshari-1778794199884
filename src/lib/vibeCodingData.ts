import type { Question } from '@/types';
import type { MainCategory } from '@/types';

export const VIBE_CODING_CATEGORY: MainCategory = {
  id: 'vibe-coding',
  name: 'Vibe Coding',
  emoji: '💻',
  color: '#16C784',
  subcategories: [
    { id: 'vc-tech-skills', mainCategoryId: 'vibe-coding', name: 'Technical Skills & Coding Fundamentals', icon: '🧑‍💻' },
    { id: 'vc-ai-tech', mainCategoryId: 'vibe-coding', name: 'AI & Emerging Technology', icon: '🤖' },
    { id: 'vc-product', mainCategoryId: 'vibe-coding', name: 'Product Development & Entrepreneurship', icon: '🚀' },
    { id: 'vc-team', mainCategoryId: 'vibe-coding', name: 'Team Collaboration & Project Management', icon: '👥' },
    { id: 'vc-gov', mainCategoryId: 'vibe-coding', name: 'Government & Enterprise Solutions', icon: '🏛️' },
    { id: 'vc-community', mainCategoryId: 'vibe-coding', name: 'Community Impact & Social Innovation', icon: '🌍' },
  ],
};

export const VIBE_CODING_QUESTIONS: Question[] = [
  // ─── vc-tech-skills ───
  {
    id: 'q-vc-tech-skills-200-1',
    subcategoryId: 'vc-tech-skills',
    points: 200,
    text: 'What do we call a named storage location that holds a value in code?',
    answer: 'A variable',
    hint: 'Think of it like a labelled box that holds something you want to remember.',
  },
  {
    id: 'q-vc-tech-skills-400-1',
    subcategoryId: 'vc-tech-skills',
    points: 400,
    text: 'What do we call a function that calls itself?',
    answer: 'Recursion',
    hint: 'Think of mirrors facing each other, or nesting dolls.',
  },
  {
    id: 'q-vc-tech-skills-600-1',
    subcategoryId: 'vc-tech-skills',
    points: 600,
    text: 'Which time complexity is faster for large inputs — O(n log n) or O(n²)?',
    answer: 'O(n log n)',
    hint: 'Think about how many operations each needs for a million items.',
  },

  // ─── vc-ai-tech ───
  {
    id: 'q-vc-ai-tech-200-1',
    subcategoryId: 'vc-ai-tech',
    points: 200,
    text: 'What does "AI" stand for?',
    answer: 'Artificial Intelligence',
    hint: 'Two words — machines acting smart.',
  },
  {
    id: 'q-vc-ai-tech-400-1',
    subcategoryId: 'vc-ai-tech',
    points: 400,
    text: 'Which type of machine learning uses labeled data to train a model?',
    answer: 'Supervised learning',
    hint: 'One has the answer key, the other discovers patterns on its own.',
  },
  {
    id: 'q-vc-ai-tech-600-1',
    subcategoryId: 'vc-ai-tech',
    points: 600,
    text: 'What do we call it when an AI confidently gives a wrong or made-up answer?',
    answer: 'Hallucination',
    hint: 'The AI makes things up — what is that called?',
  },

  // ─── vc-product ───
  {
    id: 'q-vc-product-200-1',
    subcategoryId: 'vc-product',
    points: 200,
    text: 'What are the three letters that stand for the simplest version of a product you can launch?',
    answer: 'MVP',
    hint: 'Minimum Viable ___.',
  },
  {
    id: 'q-vc-product-400-1',
    subcategoryId: 'vc-product',
    points: 400,
    text: 'What experiment shows two versions of a page to different users to see which performs better?',
    answer: 'A/B test',
    hint: 'Split your users, test two versions, measure which wins.',
  },
  {
    id: 'q-vc-product-600-1',
    subcategoryId: 'vc-product',
    points: 600,
    text: 'What metric measures the percentage of users who keep coming back after their first visit?',
    answer: 'Retention rate',
    hint: 'It measures whether users stick around after day one.',
  },

  // ─── vc-team ───
  {
    id: 'q-vc-team-200-1',
    subcategoryId: 'vc-team',
    points: 200,
    text: 'What tool lets multiple developers track and manage changes to their code?',
    answer: 'Version control',
    hint: 'Think of it as a time machine and collaborative workspace for your code.',
  },
  {
    id: 'q-vc-team-400-1',
    subcategoryId: 'vc-team',
    points: 400,
    text: 'What Git operation combines two branches by rewriting commit history in a linear way?',
    answer: 'Rebase',
    hint: 'Merge preserves history with a join point. This rewrites it to look linear.',
  },
  {
    id: 'q-vc-team-600-1',
    subcategoryId: 'vc-team',
    points: 600,
    text: 'What is the automated process of testing and deploying code every time a developer pushes a change?',
    answer: 'CI/CD',
    hint: 'Continuous Integration / Continuous ___.',
  },

  // ─── vc-gov ───
  {
    id: 'q-vc-gov-200-1',
    subcategoryId: 'vc-gov',
    points: 200,
    text: 'True or false — enterprise software is built for individual consumers?',
    answer: 'False',
    hint: 'Enterprise means businesses and organizations, not individuals.',
  },
  {
    id: 'q-vc-gov-400-1',
    subcategoryId: 'vc-gov',
    points: 400,
    text: 'What US compliance program must cloud software pass to be sold to federal government agencies?',
    answer: 'FedRAMP',
    hint: 'Federal Risk and Authorization Management ___.',
  },
  {
    id: 'q-vc-gov-600-1',
    subcategoryId: 'vc-gov',
    points: 600,
    text: 'What security standard is required for encryption used in US government software systems?',
    answer: 'FIPS 140-2',
    hint: 'Federal Information Processing Standard — a number follows.',
  },

  // ─── vc-community ───
  {
    id: 'q-vc-community-200-1',
    subcategoryId: 'vc-community',
    points: 200,
    text: 'What two-word term describes using technology to solve social or humanitarian problems?',
    answer: 'Tech for good',
    hint: 'Technology used for a positive purpose.',
  },
  {
    id: 'q-vc-community-400-1',
    subcategoryId: 'vc-community',
    points: 400,
    text: "What term describes the gap between people who have access to technology and those who don't?",
    answer: 'Digital divide',
    hint: 'Not everyone has a fast phone and WiFi — what is that gap called?',
  },
  {
    id: 'q-vc-community-600-1',
    subcategoryId: 'vc-community',
    points: 600,
    text: 'What field studies whether AI systems treat all groups of people fairly?',
    answer: 'AI ethics',
    hint: 'It is about fairness, bias, and accountability in artificial intelligence.',
  },
];
