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
    text: 'What is a variable and why do we use it in programming?',
    answer: 'A variable is a named storage location in memory that holds a value. We use variables to store, reuse, and manipulate data throughout a program — so we don't have to repeat the same value over and over.',
    hint: 'Think of it like a labelled box that holds something you want to remember.',
  },
  {
    id: 'q-vc-tech-skills-200-2',
    subcategoryId: 'vc-tech-skills',
    points: 200,
    text: 'What is the difference between a for loop and a while loop?',
    answer: 'A for loop is used when you know in advance how many times you want to iterate. A while loop is used when you want to keep looping as long as a condition is true, and you may not know the exact number of iterations upfront.',
    hint: 'One is for a known count, the other is for an unknown condition.',
  },
  {
    id: 'q-vc-tech-skills-400-1',
    subcategoryId: 'vc-tech-skills',
    points: 400,
    text: 'Explain what recursion is and give a simple real-world example of it.',
    answer: 'Recursion is when a function calls itself to solve a smaller version of the same problem. A real-world example: Russian nesting dolls — each doll contains a smaller doll, until you reach the smallest one (the base case).',
    hint: 'A function that calls itself — think of mirrors facing each other, or nesting dolls.',
  },
  {
    id: 'q-vc-tech-skills-400-2',
    subcategoryId: 'vc-tech-skills',
    points: 400,
    text: 'What is the difference between a stack and a queue? When would you use each one?',
    answer: 'A stack is Last In First Out (LIFO) — the last item added is the first removed. A queue is First In First Out (FIFO) — the first item added is the first removed. Use a stack for undo functionality or call stacks. Use a queue for task scheduling or print jobs.',
    hint: 'Stack = a pile of plates. Queue = a line of people waiting.',
  },
  {
    id: 'q-vc-tech-skills-600-1',
    subcategoryId: 'vc-tech-skills',
    points: 600,
    text: 'What is time complexity and how would you compare O(n log n) vs O(n²) for a sorting problem with a million items?',
    answer: 'Time complexity measures how the runtime of an algorithm grows as input size increases. For 1 million items: O(n log n) ≈ 20 million operations (fast — used by merge sort, quicksort). O(n²) ≈ 1 trillion operations (very slow — used by bubble sort). O(n log n) is dramatically more efficient at scale.',
    hint: 'Think about how many operations each would need for 1,000,000 items.',
  },
  {
    id: 'q-vc-tech-skills-600-2',
    subcategoryId: 'vc-tech-skills',
    points: 600,
    text: 'Explain the concept of memoization and how it differs from dynamic programming.',
    answer: 'Memoization is a top-down technique where you cache the results of expensive function calls so you don't recompute them. Dynamic programming is a broader bottom-up approach that builds solutions from smaller subproblems. Memoization is a specific implementation strategy often used within DP.',
    hint: 'Memoization = remember what you calculated. DP = build up the solution from scratch.',
  },

  // ─── vc-ai-tech ───
  {
    id: 'q-vc-ai-tech-200-1',
    subcategoryId: 'vc-ai-tech',
    points: 200,
    text: 'What does AI stand for and can you name one AI tool you use in your everyday life?',
    answer: 'AI stands for Artificial Intelligence. Everyday examples include: ChatGPT, Siri, Google Assistant, Netflix recommendations, spam filters, or facial recognition on your phone.',
    hint: 'Two words — machines acting smart.',
  },
  {
    id: 'q-vc-ai-tech-200-2',
    subcategoryId: 'vc-ai-tech',
    points: 200,
    text: 'What is the difference between AI and a regular computer program?',
    answer: 'A regular computer program follows explicit instructions written by a programmer — it does exactly what it's told. AI learns from data and can make decisions or predictions without being explicitly programmed for every scenario.',
    hint: 'One follows rules, the other learns them.',
  },
  {
    id: 'q-vc-ai-tech-400-1',
    subcategoryId: 'vc-ai-tech',
    points: 400,
    text: 'What is the difference between supervised and unsupervised machine learning? Give one example of each.',
    answer: 'Supervised learning trains on labeled data (input + correct output). Example: spam email detection. Unsupervised learning finds patterns in unlabeled data. Example: customer segmentation — grouping shoppers by behavior without predefined categories.',
    hint: 'One has the answer key, the other discovers patterns on its own.',
  },
  {
    id: 'q-vc-ai-tech-400-2',
    subcategoryId: 'vc-ai-tech',
    points: 400,
    text: 'What is a large language model (LLM) and how does it generate text?',
    answer: 'An LLM is a type of AI trained on massive amounts of text data using a transformer architecture. It generates text by predicting the most likely next token (word or word fragment) given the context of previous tokens, based on patterns learned during training.',
    hint: 'It predicts the next word — over and over — based on billions of examples.',
  },
  {
    id: 'q-vc-ai-tech-600-1',
    subcategoryId: 'vc-ai-tech',
    points: 600,
    text: 'What are hallucinations in AI models and what technical strategies exist to reduce them in production systems?',
    answer: 'Hallucinations are when an AI confidently generates false or fabricated information. Strategies to reduce them include: RAG (Retrieval-Augmented Generation), fine-tuning on domain-specific data, grounding outputs with citations, using smaller temperature values, chain-of-thought prompting, and output validation layers.',
    hint: 'The AI makes things up — how do you stop it?',
  },
  {
    id: 'q-vc-ai-tech-600-2',
    subcategoryId: 'vc-ai-tech',
    points: 600,
    text: 'Explain the tradeoffs between a fine-tuned model vs a RAG (Retrieval-Augmented Generation) system for a company\'s internal chatbot.',
    answer: 'Fine-tuning bakes knowledge into model weights — fast inference, but expensive to update and risks forgetting. RAG retrieves fresh documents at query time — easier to update, more transparent, but slower and dependent on retrieval quality. Fine-tuning suits stable knowledge; RAG suits frequently changing data.',
    hint: 'One bakes knowledge in, the other looks it up in real time.',
  },

  // ─── vc-product ───
  {
    id: 'q-vc-product-200-1',
    subcategoryId: 'vc-product',
    points: 200,
    text: 'What is an MVP and why do startups build one instead of a full product?',
    answer: 'MVP stands for Minimum Viable Product — the simplest version of a product that delivers core value and can be tested with real users. Startups build MVPs to validate assumptions, gather feedback, and avoid wasting resources building features nobody wants.',
    hint: 'Minimum Viable Product — the smallest thing that tests your idea.',
  },
  {
    id: 'q-vc-product-200-2',
    subcategoryId: 'vc-product',
    points: 200,
    text: 'What does 