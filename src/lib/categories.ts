import type { MainCategory } from '@/types';

export const MAIN_CATEGORIES: MainCategory[] = [
  {
    id: 'unstuck-labs', name: 'Unstuck Labs', emoji: '🚀', color: '#E85D04',
    subcategories: [
      { id: 'ul-unstuck', mainCategoryId: 'unstuck-labs', name: 'Unstuck', icon: '🔓' },
      { id: 'ul-team', mainCategoryId: 'unstuck-labs', name: 'الفريق', icon: '👥' },
      { id: 'ul-projects', mainCategoryId: 'unstuck-labs', name: 'المشاريع', icon: '💼' },
      { id: 'ul-culture', mainCategoryId: 'unstuck-labs', name: 'الثقافة', icon: '🎯' },
      { id: 'ul-tech', mainCategoryId: 'unstuck-labs', name: 'التقنية', icon: '⚙️' },
    ],
  },
  {
    id: 'saudi-culture', name: 'الثقافة السعودية', emoji: '🇸🇦', color: '#10B981',
    subcategories: [
      { id: 'sc-tradition', mainCategoryId: 'saudi-culture', name: 'التقاليد', icon: '🕌' },
      { id: 'sc-food', mainCategoryId: 'saudi-culture', name: 'الأكل السعودي', icon: '🍛' },
      { id: 'sc-poetry', mainCategoryId: 'saudi-culture', name: 'الشعر', icon: '📜' },
      { id: 'sc-cities', mainCategoryId: 'saudi-culture', name: 'المدن', icon: '🏙️' },
      { id: 'sc-history', mainCategoryId: 'saudi-culture', name: 'التاريخ السعودي', icon: '📚' },
      { id: 'sc-customs', mainCategoryId: 'saudi-culture', name: 'العادات', icon: '☕' },
    ],
  },
  {
    id: 'sports', name: 'رياضة', emoji: '⚽', color: '#3B82F6',
    subcategories: [
      { id: 'sp-f1', mainCategoryId: 'sports', name: 'الفورمولا', icon: '🏎️' },
      { id: 'sp-tennis', mainCategoryId: 'sports', name: 'التنس', icon: '🎾' },
      { id: 'sp-basketball', mainCategoryId: 'sports', name: 'كرة السلة', icon: '🏀' },
      { id: 'sp-olympics', mainCategoryId: 'sports', name: 'الأولمبياد', icon: '🥇' },
      { id: 'sp-boxing', mainCategoryId: 'sports', name: 'الملاكمة', icon: '🥊' },
    ],
  },
  {
    id: 'movies', name: 'أفلام ومسلسلات', emoji: '🎬', color: '#8B5CF6',
    subcategories: [
      { id: 'mv-arab', mainCategoryId: 'movies', name: 'أفلام عربية', icon: '🎞️' },
      { id: 'mv-hollywood', mainCategoryId: 'movies', name: 'هوليوود', icon: '⭐' },
      { id: 'mv-series', mainCategoryId: 'movies', name: 'مسلسلات', icon: '📺' },
      { id: 'mv-anime', mainCategoryId: 'movies', name: 'أنمي', icon: '🎌' },
      { id: 'mv-disney', mainCategoryId: 'movies', name: 'ديزني', icon: '🏰' },
    ],
  },
  {
    id: 'general', name: 'معلومات عامة', emoji: '🧠', color: '#F59E0B',
    subcategories: [
      { id: 'gn-trivia', mainCategoryId: 'general', name: 'منوعات', icon: '💡' },
      { id: 'gn-flags', mainCategoryId: 'general', name: 'أعلام الدول', icon: '🚩' },
      { id: 'gn-capitals', mainCategoryId: 'general', name: 'العواصم', icon: '🏛️' },
      { id: 'gn-numbers', mainCategoryId: 'general', name: 'أرقام', icon: '🔢' },
      { id: 'gn-firsts', mainCategoryId: 'general', name: 'أوائل', icon: '🥇' },
    ],
  },
  {
    id: 'history', name: 'تاريخ', emoji: '📖', color: '#F97316',
    subcategories: [
      { id: 'hs-ancient', mainCategoryId: 'history', name: 'حضارات قديمة', icon: '🏺' },
      { id: 'hs-islamic', mainCategoryId: 'history', name: 'التاريخ الإسلامي', icon: '☪️' },
      { id: 'hs-wars', mainCategoryId: 'history', name: 'حروب', icon: '⚔️' },
      { id: 'hs-leaders', mainCategoryId: 'history', name: 'قادة', icon: '👑' },
      { id: 'hs-events', mainCategoryId: 'history', name: 'أحداث', icon: '📅' },
    ],
  },
  {
    id: 'music-arts', name: 'موسيقى وفنون', emoji: '🎵', color: '#EC4899',
    subcategories: [
      { id: 'ma-arab', mainCategoryId: 'music-arts', name: 'الطرب العربي', icon: '🎤' },
      { id: 'ma-pop', mainCategoryId: 'music-arts', name: 'بوب عالمي', icon: '🎧' },
      { id: 'ma-instruments', mainCategoryId: 'music-arts', name: 'آلات موسيقية', icon: '🎹' },
      { id: 'ma-paintings', mainCategoryId: 'music-arts', name: 'لوحات', icon: '🖼️' },
      { id: 'ma-artists', mainCategoryId: 'music-arts', name: 'فنانون', icon: '🎨' },
    ],
  },
  {
    id: 'food-kitchen', name: 'طعام ومطبخ', emoji: '🍽️', color: '#EF4444',
    subcategories: [
      { id: 'fk-arab', mainCategoryId: 'food-kitchen', name: 'مطبخ عربي', icon: '🥘' },
      { id: 'fk-world', mainCategoryId: 'food-kitchen', name: 'مطابخ العالم', icon: '🌍' },
      { id: 'fk-desserts', mainCategoryId: 'food-kitchen', name: 'حلويات', icon: '🍰' },
      { id: 'fk-drinks', mainCategoryId: 'food-kitchen', name: 'مشروبات', icon: '🥤' },
      { id: 'fk-spices', mainCategoryId: 'food-kitchen', name: 'بهارات', icon: '🌶️' },
    ],
  },
  {
    id: 'tech-digital', name: 'تقنية وعالم رقمي', emoji: '💻', color: '#6366F1',
    subcategories: [
      { id: 'td-companies', mainCategoryId: 'tech-digital', name: 'شركات تقنية', icon: '🏢' },
      { id: 'td-internet', mainCategoryId: 'tech-digital', name: 'الإنترنت', icon: '🌐' },
      { id: 'td-ai', mainCategoryId: 'tech-digital', name: 'الذكاء الاصطناعي', icon: '🤖' },
      { id: 'td-gaming', mainCategoryId: 'tech-digital', name: 'الألعاب', icon: '🎮' },
      { id: 'td-social', mainCategoryId: 'tech-digital', name: 'سوشيال ميديا', icon: '📱' },
    ],
  },
  {
    id: 'nature-animals', name: 'الطبيعة والحيوانات', emoji: '🌿', color: '#22C55E',
    subcategories: [
      { id: 'na-mammals', mainCategoryId: 'nature-animals', name: 'الثدييات', icon: '🦁' },
      { id: 'na-birds', mainCategoryId: 'nature-animals', name: 'الطيور', icon: '🦅' },
      { id: 'na-sea', mainCategoryId: 'nature-animals', name: 'كائنات بحرية', icon: '🐋' },
      { id: 'na-plants', mainCategoryId: 'nature-animals', name: 'النباتات', icon: '🌱' },
      { id: 'na-weather', mainCategoryId: 'nature-animals', name: 'الطقس', icon: '🌦️' },
    ],
  },
  {
    id: 'arab-world', name: 'العالم العربي', emoji: '🌙', color: '#14B8A6',
    subcategories: [
      { id: 'aw-capitals', mainCategoryId: 'arab-world', name: 'عواصم عربية', icon: '🕌' },
      { id: 'aw-dialects', mainCategoryId: 'arab-world', name: 'لهجات', icon: '🗣️' },
      { id: 'aw-landmarks', mainCategoryId: 'arab-world', name: 'معالم', icon: '🏛️' },
      { id: 'aw-rivers', mainCategoryId: 'arab-world', name: 'الأنهار', icon: '🌊' },
      { id: 'aw-deserts', mainCategoryId: 'arab-world', name: 'الصحاري', icon: '🏜️' },
    ],
  },
  {
    id: 'celebrities', name: 'مشاهير وشخصيات', emoji: '⭐', color: '#F59E0B',
    subcategories: [
      { id: 'cl-actors', mainCategoryId: 'celebrities', name: 'ممثلون', icon: '🎭' },
      { id: 'cl-singers', mainCategoryId: 'celebrities', name: 'مطربون', icon: '🎤' },
      { id: 'cl-athletes', mainCategoryId: 'celebrities', name: 'رياضيون', icon: '🏅' },
      { id: 'cl-business', mainCategoryId: 'celebrities', name: 'رجال أعمال', icon: '💼' },
      { id: 'cl-influencers', mainCategoryId: 'celebrities', name: 'مؤثرون', icon: '📸' },
    ],
  },
  {
    id: 'football-deep', name: 'كرة القدم', emoji: '⚽', color: '#10B981',
    subcategories: [
      { id: 'fb-saudi', mainCategoryId: 'football-deep', name: 'الدوري السعودي', icon: '🟢' },
      { id: 'fb-europe', mainCategoryId: 'football-deep', name: 'دوريات أوروبا', icon: '🏆' },
      { id: 'fb-worldcup', mainCategoryId: 'football-deep', name: 'كأس العالم', icon: '🌍' },
      { id: 'fb-legends', mainCategoryId: 'football-deep', name: 'أساطير', icon: '👑' },
      { id: 'fb-coaches', mainCategoryId: 'football-deep', name: 'مدربون', icon: '📋' },
    ],
  },
  {
    id: 'world-history', name: 'تاريخ عالمي', emoji: '🗺️', color: '#EF4444',
    subcategories: [
      { id: 'wh-empires', mainCategoryId: 'world-history', name: 'إمبراطوريات', icon: '🏰' },
      { id: 'wh-revolutions', mainCategoryId: 'world-history', name: 'ثورات', icon: '🔥' },
      { id: 'wh-discoveries', mainCategoryId: 'world-history', name: 'اكتشافات', icon: '🧭' },
      { id: 'wh-wars', mainCategoryId: 'world-history', name: 'حروب عالمية', icon: '💥' },
      { id: 'wh-monarchs', mainCategoryId: 'world-history', name: 'ملوك', icon: '👑' },
    ],
  },
  {
    id: 'around-world', name: 'حول العالم', emoji: '🌐', color: '#8B5CF6',
    subcategories: [
      { id: 'aw2-asia', mainCategoryId: 'around-world', name: 'آسيا', icon: '🌏' },
      { id: 'aw2-europe', mainCategoryId: 'around-world', name: 'أوروبا', icon: '🇪🇺' },
      { id: 'aw2-africa', mainCategoryId: 'around-world', name: 'أفريقيا', icon: '🦒' },
      { id: 'aw2-americas', mainCategoryId: 'around-world', name: 'الأمريكتان', icon: '🗽' },
      { id: 'aw2-oceania', mainCategoryId: 'around-world', name: 'أوقيانوسيا', icon: '🏝️' },
    ],
  },
  {
    id: 'words-puzzles', name: 'كلمات وألغاز', emoji: '🧩', color: '#EC4899',
    subcategories: [
      { id: 'wp-riddles', mainCategoryId: 'words-puzzles', name: 'ألغاز', icon: '❓' },
      { id: 'wp-proverbs', mainCategoryId: 'words-puzzles', name: 'أمثال', icon: '💬' },
      { id: 'wp-synonyms', mainCategoryId: 'words-puzzles', name: 'مرادفات', icon: '🔤' },
      { id: 'wp-meanings', mainCategoryId: 'words-puzzles', name: 'معاني', icon: '📖' },
      { id: 'wp-quotes', mainCategoryId: 'words-puzzles', name: 'اقتباسات', icon: '🗯️' },
    ],
  },
  {
    id: 'saudi-modern', name: 'السعودية الحديثة', emoji: '🚀', color: '#14B8A6',
    subcategories: [
      { id: 'sm-vision', mainCategoryId: 'saudi-modern', name: 'رؤية 2030', icon: '🎯' },
      { id: 'sm-neom', mainCategoryId: 'saudi-modern', name: 'نيوم', icon: '🌆' },
      { id: 'sm-events', mainCategoryId: 'saudi-modern', name: 'فعاليات', icon: '🎉' },
      { id: 'sm-economy', mainCategoryId: 'saudi-modern', name: 'الاقتصاد', icon: '💰' },
      { id: 'sm-tourism', mainCategoryId: 'saudi-modern', name: 'السياحة', icon: '🏞️' },
    ],
  },
  {
    id: 'science-space', name: 'علوم وفضاء', emoji: '🚀', color: '#6366F1',
    subcategories: [
      { id: 'ss-planets', mainCategoryId: 'science-space', name: 'الكواكب', icon: '🪐' },
      { id: 'ss-physics', mainCategoryId: 'science-space', name: 'فيزياء', icon: '⚛️' },
      { id: 'ss-chemistry', mainCategoryId: 'science-space', name: 'كيمياء', icon: '🧪' },
      { id: 'ss-biology', mainCategoryId: 'science-space', name: 'أحياء', icon: '🧬' },
      { id: 'ss-inventions', mainCategoryId: 'science-space', name: 'اختراعات', icon: '💡' },
    ],
  },
];

export const ALL_SUBCATEGORIES = MAIN_CATEGORIES.flatMap((c) => c.subcategories);

export function findSubcategory(id: string) {
  return ALL_SUBCATEGORIES.find((s) => s.id === id);
}

export function findMainCategoryForSub(subId: string) {
  return MAIN_CATEGORIES.find((c) => c.subcategories.some((s) => s.id === subId));
}
