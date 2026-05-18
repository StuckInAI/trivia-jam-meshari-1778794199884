import type { Question } from '@/types';

const POINTS: Array<200 | 400 | 600> = [200, 400, 600];

// ─── World Geography subcategory IDs ───
const GEO_SUB_IDS = [
  'en-geo-capitals', 'en-geo-landmarks', 'en-geo-countries', 'en-geo-flags',
];

// ─── Hollywood subcategory IDs ───
const HW_SUB_IDS = [
  'en-hw-movies', 'en-hw-actors', 'en-hw-oscars', 'en-hw-blockbusters',
];

// ─── Global Sports subcategory IDs ───
const SP_SUB_IDS = [
  'en-sp-football', 'en-sp-nba', 'en-sp-olympics', 'en-sp-tennis',
];

// ─── Science & Tech subcategory IDs ───
const ST_SUB_IDS = [
  'en-st-space', 'en-st-inventions', 'en-st-biology', 'en-st-ai',
];

// ─── Pop Music subcategory IDs ───
const PM_SUB_IDS = [
  'en-pm-artists', 'en-pm-albums', 'en-pm-lyrics', 'en-pm-concerts',
];

// ─── World History subcategory IDs ───
const WH_SUB_IDS = [
  'en-wh-empires', 'en-wh-wars', 'en-wh-revolutions', 'en-wh-leaders',
];

// ─── Food & Culture subcategory IDs ───
const FC_SUB_IDS = [
  'en-fc-cuisines', 'en-fc-dishes', 'en-fc-drinks', 'en-fc-restaurants',
];

// ─── Tech & Internet subcategory IDs ───
const TI_SUB_IDS = [
  'en-ti-social', 'en-ti-apps', 'en-ti-companies', 'en-ti-gaming',
];

// All non-vibe-coding English sub IDs — 2 questions per level
const GENERIC_ENGLISH_SUB_IDS = [
  ...GEO_SUB_IDS,
  ...HW_SUB_IDS,
  ...SP_SUB_IDS,
  ...ST_SUB_IDS,
  ...PM_SUB_IDS,
  ...WH_SUB_IDS,
  ...FC_SUB_IDS,
  ...TI_SUB_IDS,
];

// ─────────────────────────────────────────────
// Real question banks per subcategory
// 2 questions per point level (200, 400, 600)
// ─────────────────────────────────────────────

const REAL_QUESTIONS: Record<string, Question[]> = {
  // ── World Geography: Capitals ──
  'en-geo-capitals': [
    { id: 'q-en-geo-capitals-200-1', subcategoryId: 'en-geo-capitals', points: 200, text: 'What is the capital of France?', answer: 'Paris', hint: 'City of Light.' },
    { id: 'q-en-geo-capitals-200-2', subcategoryId: 'en-geo-capitals', points: 200, text: 'What is the capital of Japan?', answer: 'Tokyo', hint: 'Most populous city in the world.' },
    { id: 'q-en-geo-capitals-400-1', subcategoryId: 'en-geo-capitals', points: 400, text: 'What is the capital of Australia?', answer: 'Canberra', hint: 'Not Sydney or Melbourne.' },
    { id: 'q-en-geo-capitals-400-2', subcategoryId: 'en-geo-capitals', points: 400, text: 'What is the capital of Brazil?', answer: 'Brasília', hint: 'Built in the 1950s as a planned city.' },
    { id: 'q-en-geo-capitals-600-1', subcategoryId: 'en-geo-capitals', points: 600, text: 'What is the capital of Kazakhstan?', answer: 'Astana', hint: 'Recently renamed from Nur-Sultan.' },
    { id: 'q-en-geo-capitals-600-2', subcategoryId: 'en-geo-capitals', points: 600, text: 'What is the capital of Myanmar?', answer: 'Naypyidaw', hint: 'A purpose-built city, not Yangon.' },
  ],

  // ── World Geography: Landmarks ──
  'en-geo-landmarks': [
    { id: 'q-en-geo-landmarks-200-1', subcategoryId: 'en-geo-landmarks', points: 200, text: 'In which country is the Eiffel Tower located?', answer: 'France', hint: 'Built for the 1889 World Fair.' },
    { id: 'q-en-geo-landmarks-200-2', subcategoryId: 'en-geo-landmarks', points: 200, text: 'In which country is the Great Wall located?', answer: 'China', hint: 'Stretches thousands of miles.' },
    { id: 'q-en-geo-landmarks-400-1', subcategoryId: 'en-geo-landmarks', points: 400, text: 'In which country is Machu Picchu located?', answer: 'Peru', hint: 'An ancient Incan citadel high in the Andes.' },
    { id: 'q-en-geo-landmarks-400-2', subcategoryId: 'en-geo-landmarks', points: 400, text: 'In which city is the Colosseum located?', answer: 'Rome', hint: 'The Eternal City.' },
    { id: 'q-en-geo-landmarks-600-1', subcategoryId: 'en-geo-landmarks', points: 600, text: 'In which country is the ancient city of Petra?', answer: 'Jordan', hint: 'The Rose-Red city carved in rock.' },
    { id: 'q-en-geo-landmarks-600-2', subcategoryId: 'en-geo-landmarks', points: 600, text: 'In which country is Angkor Wat located?', answer: 'Cambodia', hint: 'The largest religious monument in the world.' },
  ],

  // ── World Geography: Countries ──
  'en-geo-countries': [
    { id: 'q-en-geo-countries-200-1', subcategoryId: 'en-geo-countries', points: 200, text: 'Which country has the largest population in the world?', answer: 'India', hint: 'Surpassed China in 2023.' },
    { id: 'q-en-geo-countries-200-2', subcategoryId: 'en-geo-countries', points: 200, text: 'Which is the largest country by area?', answer: 'Russia', hint: 'Spans 11 time zones.' },
    { id: 'q-en-geo-countries-400-1', subcategoryId: 'en-geo-countries', points: 400, text: 'Which country has the most official languages?', answer: 'Zimbabwe', hint: '16 official languages.' },
    { id: 'q-en-geo-countries-400-2', subcategoryId: 'en-geo-countries', points: 400, text: 'Which country is known as the Land of the Rising Sun?', answer: 'Japan', hint: 'Its name in Japanese means this.' },
    { id: 'q-en-geo-countries-600-1', subcategoryId: 'en-geo-countries', points: 600, text: 'Which country has the most natural lakes in the world?', answer: 'Canada', hint: 'Over 60% of the world\'s lakes.' },
    { id: 'q-en-geo-countries-600-2', subcategoryId: 'en-geo-countries', points: 600, text: 'Which is the only country that borders both the Atlantic and Indian Oceans?', answer: 'South Africa', hint: 'At the southern tip of Africa.' },
  ],

  // ── World Geography: Flags ──
  'en-geo-flags': [
    { id: 'q-en-geo-flags-200-1', subcategoryId: 'en-geo-flags', points: 200, text: 'Which country\'s flag features a red circle on a white background?', answer: 'Japan', hint: 'Represents the rising sun.' },
    { id: 'q-en-geo-flags-200-2', subcategoryId: 'en-geo-flags', points: 200, text: 'Which country\'s flag has a maple leaf?', answer: 'Canada', hint: 'Red and white national colors.' },
    { id: 'q-en-geo-flags-400-1', subcategoryId: 'en-geo-flags', points: 400, text: 'Which country has a dragon on its flag?', answer: 'Bhutan', hint: 'A small Himalayan kingdom.' },
    { id: 'q-en-geo-flags-400-2', subcategoryId: 'en-geo-flags', points: 400, text: 'Which country\'s flag is the only one that is not rectangular?', answer: 'Nepal', hint: 'Two stacked triangles.' },
    { id: 'q-en-geo-flags-600-1', subcategoryId: 'en-geo-flags', points: 600, text: 'Which country\'s flag features the Southern Cross constellation and a Union Jack?', answer: 'Australia', hint: 'Down Under.' },
    { id: 'q-en-geo-flags-600-2', subcategoryId: 'en-geo-flags', points: 600, text: 'Which country has a cedar tree on its flag?', answer: 'Lebanon', hint: 'Famous for its ancient cedar forests.' },
  ],

  // ── Hollywood: Movies ──
  'en-hw-movies': [
    { id: 'q-en-hw-movies-200-1', subcategoryId: 'en-hw-movies', points: 200, text: 'Which movie features the line "May the Force be with you"?', answer: 'Star Wars', hint: 'A galaxy far, far away.' },
    { id: 'q-en-hw-movies-200-2', subcategoryId: 'en-hw-movies', points: 200, text: 'Which 1994 movie features a box of chocolates?', answer: 'Forrest Gump', hint: 'Life is like a box of chocolates.' },
    { id: 'q-en-hw-movies-400-1', subcategoryId: 'en-hw-movies', points: 400, text: 'Which film holds the record for most Oscars won — 11?', answer: 'Titanic', hint: 'Or Ben-Hur, or The Return of the King.' },
    { id: 'q-en-hw-movies-400-2', subcategoryId: 'en-hw-movies', points: 400, text: 'In which movie does a clownfish search for his son?', answer: 'Finding Nemo', hint: 'A Pixar underwater adventure.' },
    { id: 'q-en-hw-movies-600-1', subcategoryId: 'en-hw-movies', points: 600, text: 'Which director made Schindler\'s List?', answer: 'Spielberg', hint: 'Steven ___.' },
    { id: 'q-en-hw-movies-600-2', subcategoryId: 'en-hw-movies', points: 600, text: 'What 1999 film introduced "bullet time" visual effects?', answer: 'The Matrix', hint: 'Red pill or blue pill.' },
  ],

  // ── Hollywood: Actors ──
  'en-hw-actors': [
    { id: 'q-en-hw-actors-200-1', subcategoryId: 'en-hw-actors', points: 200, text: 'Which actor plays Iron Man in the MCU?', answer: 'Robert Downey Jr.', hint: 'I am Iron Man.' },
    { id: 'q-en-hw-actors-200-2', subcategoryId: 'en-hw-actors', points: 200, text: 'Which actress played Katniss Everdeen in The Hunger Games?', answer: 'Jennifer Lawrence', hint: 'Won an Oscar for Silver Linings Playbook.' },
    { id: 'q-en-hw-actors-400-1', subcategoryId: 'en-hw-actors', points: 400, text: 'Which actor has won the most Academy Awards for Best Actor?', answer: 'Daniel Day-Lewis', hint: 'Won three times.' },
    { id: 'q-en-hw-actors-400-2', subcategoryId: 'en-hw-actors', points: 400, text: 'Who played the Joker in The Dark Knight?', answer: 'Heath Ledger', hint: 'Won a posthumous Oscar.' },
    { id: 'q-en-hw-actors-600-1', subcategoryId: 'en-hw-actors', points: 600, text: 'Which actor starred in both Philadelphia and Forrest Gump?', answer: 'Tom Hanks', hint: 'Won back-to-back Best Actor Oscars.' },
    { id: 'q-en-hw-actors-600-2', subcategoryId: 'en-hw-actors', points: 600, text: 'Who played Hannibal Lecter in Silence of the Lambs?', answer: 'Anthony Hopkins', hint: 'Won the Oscar despite only 16 minutes of screen time.' },
  ],

  // ── Hollywood: Oscars ──
  'en-hw-oscars': [
    { id: 'q-en-hw-oscars-200-1', subcategoryId: 'en-hw-oscars', points: 200, text: 'What color is the Oscar statuette?', answer: 'Gold', hint: 'Plated in 24-karat gold.' },
    { id: 'q-en-hw-oscars-200-2', subcategoryId: 'en-hw-oscars', points: 200, text: 'The Oscars are officially known as the Academy Awards for what?', answer: 'Motion Pictures', hint: 'Academy of ___ Arts and Sciences.' },
    { id: 'q-en-hw-oscars-400-1', subcategoryId: 'en-hw-oscars', points: 400, text: 'Which film won Best Picture at the 2020 Oscars?', answer: 'Parasite', hint: 'First non-English film to win Best Picture.' },
    { id: 'q-en-hw-oscars-400-2', subcategoryId: 'en-hw-oscars', points: 400, text: 'Who was the youngest person to win a Best Actress Oscar?', answer: 'Marlee Matlin', hint: 'Won at age 21 for Children of a Lesser God.' },
    { id: 'q-en-hw-oscars-600-1', subcategoryId: 'en-hw-oscars', points: 600, text: 'Which film won the first ever Best Picture Oscar in 1929?', answer: 'Wings', hint: 'A silent war film.' },
    { id: 'q-en-hw-oscars-600-2', subcategoryId: 'en-hw-oscars', points: 600, text: 'Who slapped Chris Rock at the 2022 Oscars ceremony?', answer: 'Will Smith', hint: 'Won Best Actor that same night.' },
  ],

  // ── Hollywood: Blockbusters ──
  'en-hw-blockbusters': [
    { id: 'q-en-hw-blockbusters-200-1', subcategoryId: 'en-hw-blockbusters', points: 200, text: 'Which MCU film is the highest-grossing of all time?', answer: 'Avengers: Endgame', hint: 'Whatever it takes.' },
    { id: 'q-en-hw-blockbusters-200-2', subcategoryId: 'en-hw-blockbusters', points: 200, text: 'Which animated film features the song "Let It Go"?', answer: 'Frozen', hint: 'Elsa and Anna.' },
    { id: 'q-en-hw-blockbusters-400-1', subcategoryId: 'en-hw-blockbusters', points: 400, text: 'Which film was the first to gross over $1 billion?', answer: 'Titanic', hint: '1997 James Cameron epic.' },
    { id: 'q-en-hw-blockbusters-400-2', subcategoryId: 'en-hw-blockbusters', points: 400, text: 'What is the highest-grossing film of all time?', answer: 'Avatar', hint: 'Pandora and the Na\'vi.' },
    { id: 'q-en-hw-blockbusters-600-1', subcategoryId: 'en-hw-blockbusters', points: 600, text: 'Which 1975 Spielberg film is often called the first modern summer blockbuster?', answer: 'Jaws', hint: 'You\'re gonna need a bigger boat.' },
    { id: 'q-en-hw-blockbusters-600-2', subcategoryId: 'en-hw-blockbusters', points: 600, text: 'Which franchise includes films called "The Philosopher\'s Stone" and "The Deathly Hallows"?', answer: 'Harry Potter', hint: 'Hogwarts.' },
  ],

  // ── Global Sports: Football ──
  'en-sp-football': [
    { id: 'q-en-sp-football-200-1', subcategoryId: 'en-sp-football', points: 200, text: 'Which country won the 2022 FIFA World Cup?', answer: 'Argentina', hint: 'Messi finally lifted the trophy.' },
    { id: 'q-en-sp-football-200-2', subcategoryId: 'en-sp-football', points: 200, text: 'Which club has won the most UEFA Champions League titles?', answer: 'Real Madrid', hint: 'Los Blancos.' },
    { id: 'q-en-sp-football-400-1', subcategoryId: 'en-sp-football', points: 400, text: 'How many players are on a football (soccer) field per team?', answer: '11', hint: 'Including the goalkeeper.' },
    { id: 'q-en-sp-football-400-2', subcategoryId: 'en-sp-football', points: 400, text: 'Which player is known as "CR7"?', answer: 'Cristiano Ronaldo', hint: 'Portuguese superstar.' },
    { id: 'q-en-sp-football-600-1', subcategoryId: 'en-sp-football', points: 600, text: 'Which country hosted the first FIFA World Cup in 1930?', answer: 'Uruguay', hint: 'South American nation, also the first champions.' },
    { id: 'q-en-sp-football-600-2', subcategoryId: 'en-sp-football', points: 600, text: 'Which goalkeeper holds the record for most World Cup appearances?', answer: 'Essam El-Hadary', hint: 'Egyptian legend, played at age 45.' },
  ],

  // ── Global Sports: NBA ──
  'en-sp-nba': [
    { id: 'q-en-sp-nba-200-1', subcategoryId: 'en-sp-nba', points: 200, text: 'Which player is known as "The King" in the NBA?', answer: 'LeBron James', hint: 'LBJ.' },
    { id: 'q-en-sp-nba-200-2', subcategoryId: 'en-sp-nba', points: 200, text: 'Which NBA team plays in Los Angeles?', answer: 'Lakers', hint: 'Purple and gold.' },
    { id: 'q-en-sp-nba-400-1', subcategoryId: 'en-sp-nba', points: 400, text: 'How many rings did Michael Jordan win?', answer: '6', hint: 'All with the Chicago Bulls.' },
    { id: 'q-en-sp-nba-400-2', subcategoryId: 'en-sp-nba', points: 400, text: 'Which player is the NBA\'s all-time scoring leader?', answer: 'LeBron James', hint: 'Surpassed Kareem in 2023.' },
    { id: 'q-en-sp-nba-600-1', subcategoryId: 'en-sp-nba', points: 600, text: 'Which team won the most consecutive NBA championships?', answer: 'Boston Celtics', hint: 'Won 8 straight titles in the 1960s.' },
    { id: 'q-en-sp-nba-600-2', subcategoryId: 'en-sp-nba', points: 600, text: 'Who scored 100 points in a single NBA game?', answer: 'Wilt Chamberlain', hint: 'March 2, 1962.' },
  ],

  // ── Global Sports: Olympics ──
  'en-sp-olympics': [
    { id: 'q-en-sp-olympics-200-1', subcategoryId: 'en-sp-olympics', points: 200, text: 'How many rings are on the Olympic flag?', answer: '5', hint: 'Each represents a continent.' },
    { id: 'q-en-sp-olympics-200-2', subcategoryId: 'en-sp-olympics', points: 200, text: 'Which city hosted the 2024 Summer Olympics?', answer: 'Paris', hint: 'France\'s capital.' },
    { id: 'q-en-sp-olympics-400-1', subcategoryId: 'en-sp-olympics', points: 400, text: 'Which athlete has won the most Olympic gold medals?', answer: 'Michael Phelps', hint: '23 gold medals in swimming.' },
    { id: 'q-en-sp-olympics-400-2', subcategoryId: 'en-sp-olympics', points: 400, text: 'In which year were the first modern Olympic Games held?', answer: '1896', hint: 'Athens, Greece.' },
    { id: 'q-en-sp-olympics-600-1', subcategoryId: 'en-sp-olympics', points: 600, text: 'Which country boycotted the 1980 Moscow Olympics?', answer: 'USA', hint: 'Over the Soviet invasion of Afghanistan.' },
    { id: 'q-en-sp-olympics-600-2', subcategoryId: 'en-sp-olympics', points: 600, text: 'Who lit the cauldron at the 1996 Atlanta Olympics opening ceremony?', answer: 'Muhammad Ali', hint: 'The Greatest.' },
  ],

  // ── Global Sports: Tennis ──
  'en-sp-tennis': [
    { id: 'q-en-sp-tennis-200-1', subcategoryId: 'en-sp-tennis', points: 200, text: 'Which Grand Slam is played on clay courts?', answer: 'French Open', hint: 'Roland Garros in Paris.' },
    { id: 'q-en-sp-tennis-200-2', subcategoryId: 'en-sp-tennis', points: 200, text: 'Which player has won the most Grand Slam singles titles in men\'s tennis?', answer: 'Novak Djokovic', hint: '24 Grand Slam titles.' },
    { id: 'q-en-sp-tennis-400-1', subcategoryId: 'en-sp-tennis', points: 400, text: 'Which Grand Slam is played on grass?', answer: 'Wimbledon', hint: 'In London, England.' },
    { id: 'q-en-sp-tennis-400-2', subcategoryId: 'en-sp-tennis', points: 400, text: 'Who is known as the "Serena" of the court — the dominant women\'s player of the 2010s?', answer: 'Serena Williams', hint: 'Her first name is the answer.' },
    { id: 'q-en-sp-tennis-600-1', subcategoryId: 'en-sp-tennis', points: 600, text: 'What is the term for winning a Grand Slam in a single year without losing a set?', answer: 'Golden Slam', hint: 'Also requires the Olympic gold.' },
    { id: 'q-en-sp-tennis-600-2', subcategoryId: 'en-sp-tennis', points: 600, text: 'In what year did Roger Federer win his first Wimbledon title?', answer: '2003', hint: 'His first of eight Wimbledon victories.' },
  ],

  // ── Science & Tech: Space ──
  'en-st-space': [
    { id: 'q-en-st-space-200-1', subcategoryId: 'en-st-space', points: 200, text: 'Which planet is known as the Red Planet?', answer: 'Mars', hint: 'Named after the Roman god of war.' },
    { id: 'q-en-st-space-200-2', subcategoryId: 'en-st-space', points: 200, text: 'Which was the first country to send a human to space?', answer: 'Soviet Union', hint: 'Yuri Gagarin, 1961.' },
    { id: 'q-en-st-space-400-1', subcategoryId: 'en-st-space', points: 400, text: 'What is the name of the first space station?', answer: 'Salyut 1', hint: 'Soviet, launched 1971.' },
    { id: 'q-en-st-space-400-2', subcategoryId: 'en-st-space', points: 400, text: 'How many moons does Mars have?', answer: '2', hint: 'Phobos and Deimos.' },
    { id: 'q-en-st-space-600-1', subcategoryId: 'en-st-space', points: 600, text: 'What is the name of NASA\'s most powerful rocket, used for the Artemis program?', answer: 'SLS', hint: 'Space Launch System.' },
    { id: 'q-en-st-space-600-2', subcategoryId: 'en-st-space', points: 600, text: 'What is the approximate distance from the Earth to the Moon in kilometers?', answer: '384,000 km', hint: 'About 238,000 miles.' },
  ],

  // ── Science & Tech: Inventions ──
  'en-st-inventions': [
    { id: 'q-en-st-inventions-200-1', subcategoryId: 'en-st-inventions', points: 200, text: 'Who invented the telephone?', answer: 'Alexander Graham Bell', hint: 'Scottish-American inventor, 1876.' },
    { id: 'q-en-st-inventions-200-2', subcategoryId: 'en-st-inventions', points: 200, text: 'Who invented the light bulb?', answer: 'Thomas Edison', hint: 'American inventor, 1879.' },
    { id: 'q-en-st-inventions-400-1', subcategoryId: 'en-st-inventions', points: 400, text: 'What did Tim Berners-Lee invent?', answer: 'World Wide Web', hint: 'www.' },
    { id: 'q-en-st-inventions-400-2', subcategoryId: 'en-st-inventions', points: 400, text: 'In which country was gunpowder invented?', answer: 'China', hint: 'Ancient Chinese dynasty.' },
    { id: 'q-en-st-inventions-600-1', subcategoryId: 'en-st-inventions', points: 600, text: 'Who invented the printing press?', answer: 'Gutenberg', hint: 'Johannes ___, around 1440.' },
    { id: 'q-en-st-inventions-600-2', subcategoryId: 'en-st-inventions', points: 600, text: 'What was the first commercially successful antibiotic?', answer: 'Penicillin', hint: 'Discovered by Alexander Fleming.' },
  ],

  // ── Science & Tech: Biology ──
  'en-st-biology': [
    { id: 'q-en-st-biology-200-1', subcategoryId: 'en-st-biology', points: 200, text: 'What is the powerhouse of the cell?', answer: 'Mitochondria', hint: 'Produces ATP energy.' },
    { id: 'q-en-st-biology-200-2', subcategoryId: 'en-st-biology', points: 200, text: 'How many chromosomes does a human cell have?', answer: '46', hint: '23 pairs.' },
    { id: 'q-en-st-biology-400-1', subcategoryId: 'en-st-biology', points: 400, text: 'What molecule carries genetic information?', answer: 'DNA', hint: 'Deoxyribonucleic acid.' },
    { id: 'q-en-st-biology-400-2', subcategoryId: 'en-st-biology', points: 400, text: 'What process do plants use to convert sunlight into food?', answer: 'Photosynthesis', hint: 'Requires sunlight, water, and CO2.' },
    { id: 'q-en-st-biology-600-1', subcategoryId: 'en-st-biology', points: 600, text: 'What is the name of the protein that carries oxygen in red blood cells?', answer: 'Hemoglobin', hint: 'Makes blood red.' },
    { id: 'q-en-st-biology-600-2', subcategoryId: 'en-st-biology', points: 600, text: 'How many bones are in the adult human body?', answer: '206', hint: 'Babies have more.' },
  ],

  // ── Science & Tech: AI ──
  'en-st-ai': [
    { id: 'q-en-st-ai-200-1', subcategoryId: 'en-st-ai', points: 200, text: 'What company created ChatGPT?', answer: 'OpenAI', hint: 'Founded in San Francisco.' },
    { id: 'q-en-st-ai-200-2', subcategoryId: 'en-st-ai', points: 200, text: 'What does GPT stand for in ChatGPT?', answer: 'Generative Pre-trained Transformer', hint: 'A type of large language model.' },
    { id: 'q-en-st-ai-400-1', subcategoryId: 'en-st-ai', points: 400, text: 'What is the name of Google\'s AI chatbot?', answer: 'Gemini', hint: 'Formerly known as Bard.' },
    { id: 'q-en-st-ai-400-2', subcategoryId: 'en-st-ai', points: 400, text: 'Which AI defeated the world chess champion in 1997?', answer: 'Deep Blue', hint: 'IBM\'s chess computer.' },
    { id: 'q-en-st-ai-600-1', subcategoryId: 'en-st-ai', points: 600, text: 'What is the name of the test to determine if a machine can exhibit intelligent behavior?', answer: 'Turing Test', hint: 'Named after Alan ___.' },
    { id: 'q-en-st-ai-600-2', subcategoryId: 'en-st-ai', points: 600, text: 'Which type of neural network is primarily used for image recognition?', answer: 'CNN', hint: 'Convolutional Neural Network.' },
  ],

  // ── Pop Music: Artists ──
  'en-pm-artists': [
    { id: 'q-en-pm-artists-200-1', subcategoryId: 'en-pm-artists', points: 200, text: 'Which artist is known as the "Queen of Pop"?', answer: 'Madonna', hint: 'Material Girl.' },
    { id: 'q-en-pm-artists-200-2', subcategoryId: 'en-pm-artists', points: 200, text: 'Which artist sang "Shape of You"?', answer: 'Ed Sheeran', hint: 'British singer-songwriter.' },
    { id: 'q-en-pm-artists-400-1', subcategoryId: 'en-pm-artists', points: 400, text: 'Which artist has the most Grammy wins of all time?', answer: 'Beyoncé', hint: 'Holds the record with 32 wins.' },
    { id: 'q-en-pm-artists-400-2', subcategoryId: 'en-pm-artists', points: 400, text: 'Which band sang "Bohemian Rhapsody"?', answer: 'Queen', hint: 'Freddie Mercury\'s band.' },
    { id: 'q-en-pm-artists-600-1', subcategoryId: 'en-pm-artists', points: 600, text: 'Which artist released the best-selling album of all time, "Thriller"?', answer: 'Michael Jackson', hint: 'King of Pop.' },
    { id: 'q-en-pm-artists-600-2', subcategoryId: 'en-pm-artists', points: 600, text: 'Which artist has the most streams on Spotify of all time?', answer: 'The Weeknd', hint: 'Canadian R&B artist.' },
  ],

  // ── Pop Music: Albums ──
  'en-pm-albums': [
    { id: 'q-en-pm-albums-200-1', subcategoryId: 'en-pm-albums', points: 200, text: 'Which Taylor Swift album features the song "Shake It Off"?', answer: '1989', hint: 'Named after her birth year.' },
    { id: 'q-en-pm-albums-200-2', subcategoryId: 'en-pm-albums', points: 200, text: 'Which Adele album includes "Hello" and "Rolling in the Deep"?', answer: '21', hint: 'Her age when she recorded it... wait, actually 21 is correct.' },
    { id: 'q-en-pm-albums-400-1', subcategoryId: 'en-pm-albums', points: 400, text: 'Which Beatles album features the iconic zebra crossing on its cover?', answer: 'Abbey Road', hint: 'Their final recorded album.' },
    { id: 'q-en-pm-albums-400-2', subcategoryId: 'en-pm-albums', points: 400, text: 'What is the name of Kendrick Lamar\'s Pulitzer Prize-winning album?', answer: 'DAMN.', hint: 'Released in 2017.' },
    { id: 'q-en-pm-albums-600-1', subcategoryId: 'en-pm-albums', points: 600, text: 'Which Pink Floyd album features a prism on its cover?', answer: 'The Dark Side of the Moon', hint: 'Released in 1973.' },
    { id: 'q-en-pm-albums-600-2', subcategoryId: 'en-pm-albums', points: 600, text: 'Which Beyoncé album was released surprise with no prior announcement in 2013?', answer: 'Beyoncé', hint: 'Self-titled.' },
  ],

  // ── Pop Music: Lyrics ──
  'en-pm-lyrics': [
    { id: 'q-en-pm-lyrics-200-1', subcategoryId: 'en-pm-lyrics', points: 200, text: 'Complete the lyric: "Is this the real life? Is this just ___?"', answer: 'Fantasy', hint: 'Bohemian Rhapsody by Queen.' },
    { id: 'q-en-pm-lyrics-200-2', subcategoryId: 'en-pm-lyrics', points: 200, text: 'Which singer asks "Baby, are you down down down down down?" in a hit song?', answer: 'Jay Sean', hint: 'The song is called "Down".' },
    { id: 'q-en-pm-lyrics-400-1', subcategoryId: 'en-pm-lyrics', points: 400, text: 'Complete the lyric: "I kissed a girl and I ___"', answer: 'Liked it', hint: 'Katy Perry song.' },
    { id: 'q-en-pm-lyrics-400-2', subcategoryId: 'en-pm-lyrics', points: 400, text: 'Which song starts with "Never gonna give you up"?', answer: 'Never Gonna Give You Up', hint: 'Rick Astley — Rickrolled!' },
    { id: 'q-en-pm-lyrics-600-1', subcategoryId: 'en-pm-lyrics', points: 600, text: 'Complete: "I got 99 problems but a ___ ain\'t one"', answer: 'Bitch', hint: 'Jay-Z classic.' },
    { id: 'q-en-pm-lyrics-600-2', subcategoryId: 'en-pm-lyrics', points: 600, text: 'Which Eminem song features the lyric "His palms are sweaty, knees weak, arms are heavy"?', answer: 'Lose Yourself', hint: '8 Mile soundtrack.' },
  ],

  // ── Pop Music: Concerts ──
  'en-pm-concerts': [
    { id: 'q-en-pm-concerts-200-1', subcategoryId: 'en-pm-concerts', points: 200, text: 'What is the name of Taylor Swift\'s 2023-2024 global tour?', answer: 'Eras Tour', hint: 'Celebrating every era of her music.' },
    { id: 'q-en-pm-concerts-200-2', subcategoryId: 'en-pm-concerts', points: 200, text: 'Which music festival is held annually in Glastonbury, England?', answer: 'Glastonbury', hint: 'The name is the answer.' },
    { id: 'q-en-pm-concerts-400-1', subcategoryId: 'en-pm-concerts', points: 400, text: 'Which legendary 1969 music festival featured Jimi Hendrix and Janis Joplin?', answer: 'Woodstock', hint: 'Three days of peace and music.' },
    { id: 'q-en-pm-concerts-400-2', subcategoryId: 'en-pm-concerts', points: 400, text: 'What US music festival is held in Indio, California every April?', answer: 'Coachella', hint: 'Famous for celebrity outfits.' },
    { id: 'q-en-pm-concerts-600-1', subcategoryId: 'en-pm-concerts', points: 600, text: 'Which concert in 1985 was broadcast globally to raise money for African famine relief?', answer: 'Live Aid', hint: 'Organized by Bob Geldof.' },
    { id: 'q-en-pm-concerts-600-2', subcategoryId: 'en-pm-concerts', points: 600, text: 'Which artist\'s 1987 "Bad" tour remains one of the highest-attended concert tours ever?', answer: 'Michael Jackson', hint: 'King of Pop.' },
  ],

  // ── World History: Empires ──
  'en-wh-empires': [
    { id: 'q-en-wh-empires-200-1', subcategoryId: 'en-wh-empires', points: 200, text: 'Which empire was ruled by Julius Caesar?', answer: 'Roman Empire', hint: 'Veni, vidi, vici.' },
    { id: 'q-en-wh-empires-200-2', subcategoryId: 'en-wh-empires', points: 200, text: 'Which was the largest land empire in history?', answer: 'Mongol Empire', hint: 'Founded by Genghis Khan.' },
    { id: 'q-en-wh-empires-400-1', subcategoryId: 'en-wh-empires', points: 400, text: 'Which empire built the Taj Mahal?', answer: 'Mughal Empire', hint: 'Shah Jahan ordered its construction.' },
    { id: 'q-en-wh-empires-400-2', subcategoryId: 'en-wh-empires', points: 400, text: 'Which empire was known for its bureaucratic system and the Silk Road?', answer: 'Han Dynasty', hint: 'Ancient Chinese empire.' },
    { id: 'q-en-wh-empires-600-1', subcategoryId: 'en-wh-empires', points: 600, text: 'At its peak, the British Empire covered what percentage of Earth\'s land area?', answer: '25%', hint: 'About a quarter of the globe.' },
    { id: 'q-en-wh-empires-600-2', subcategoryId: 'en-wh-empires', points: 600, text: 'Which Byzantine emperor codified Roman law into the Corpus Juris Civilis?', answer: 'Justinian I', hint: 'Ruled from Constantinople in the 6th century.' },
  ],

  // ── World History: Wars ──
  'en-wh-wars': [
    { id: 'q-en-wh-wars-200-1', subcategoryId: 'en-wh-wars', points: 200, text: 'In which year did World War II end?', answer: '1945', hint: 'VE Day and VJ Day.' },
    { id: 'q-en-wh-wars-200-2', subcategoryId: 'en-wh-wars', points: 200, text: 'Which event triggered World War I?', answer: 'Assassination of Franz Ferdinand', hint: 'Archduke of Austria-Hungary.' },
    { id: 'q-en-wh-wars-400-1', subcategoryId: 'en-wh-wars', points: 400, text: 'Which battle is considered Napoleon\'s final defeat?', answer: 'Waterloo', hint: '1815, in Belgium.' },
    { id: 'q-en-wh-wars-400-2', subcategoryId: 'en-wh-wars', points: 400, text: 'Which war was fought between North and South Korea?', answer: 'Korean War', hint: '1950–1953.' },
    { id: 'q-en-wh-wars-600-1', subcategoryId: 'en-wh-wars', points: 600, text: 'What was the name of the Allied invasion of Normandy in 1944?', answer: 'Operation Overlord', hint: 'D-Day was part of this.' },
    { id: 'q-en-wh-wars-600-2', subcategoryId: 'en-wh-wars', points: 600, text: 'Which war lasted 100 years between England and France?', answer: 'Hundred Years\' War', hint: '1337–1453.' },
  ],

  // ── World History: Revolutions ──
  'en-wh-revolutions': [
    { id: 'q-en-wh-revolutions-200-1', subcategoryId: 'en-wh-revolutions', points: 200, text: 'In which country did the 1789 revolution take place?', answer: 'France', hint: 'Liberty, Equality, Fraternity.' },
    { id: 'q-en-wh-revolutions-200-2', subcategoryId: 'en-wh-revolutions', points: 200, text: 'Which revolution brought the Bolsheviks to power?', answer: 'Russian Revolution', hint: '1917, led by Lenin.' },
    { id: 'q-en-wh-revolutions-400-1', subcategoryId: 'en-wh-revolutions', points: 400, text: 'What sparked the American Revolution?', answer: 'Taxation without representation', hint: 'British taxes on the colonies.' },
    { id: 'q-en-wh-revolutions-400-2', subcategoryId: 'en-wh-revolutions', points: 400, text: 'Which Cuban revolutionary leader overthrew Batista in 1959?', answer: 'Fidel Castro', hint: 'Ruled Cuba for decades.' },
    { id: 'q-en-wh-revolutions-600-1', subcategoryId: 'en-wh-revolutions', points: 600, text: 'What was the name of the 1979 revolution in Iran?', answer: 'Islamic Revolution', hint: 'Led by Ayatollah Khomeini.' },
    { id: 'q-en-wh-revolutions-600-2', subcategoryId: 'en-wh-revolutions', points: 600, text: 'Which Chinese revolution established the People\'s Republic of China in 1949?', answer: 'Communist Revolution', hint: 'Led by Mao Zedong.' },
  ],

  // ── World History: Leaders ──
  'en-wh-leaders': [
    { id: 'q-en-wh-leaders-200-1', subcategoryId: 'en-wh-leaders', points: 200, text: 'Who was the first President of the United States?', answer: 'George Washington', hint: 'On the dollar bill.' },
    { id: 'q-en-wh-leaders-200-2', subcategoryId: 'en-wh-leaders', points: 200, text: 'Who led India\'s independence movement through non-violence?', answer: 'Mahatma Gandhi', hint: 'Father of the Nation.' },
    { id: 'q-en-wh-leaders-400-1', subcategoryId: 'en-wh-leaders', points: 400, text: 'Which British Prime Minister led the country during World War II?', answer: 'Winston Churchill', hint: 'Famous for his speeches.' },
    { id: 'q-en-wh-leaders-400-2', subcategoryId: 'en-wh-leaders', points: 400, text: 'Who was the first female Prime Minister of the UK?', answer: 'Margaret Thatcher', hint: 'The Iron Lady.' },
    { id: 'q-en-wh-leaders-600-1', subcategoryId: 'en-wh-leaders', points: 600, text: 'Who was the first democratically elected President of South Africa?', answer: 'Nelson Mandela', hint: 'After 27 years in prison.' },
    { id: 'q-en-wh-leaders-600-2', subcategoryId: 'en-wh-leaders', points: 600, text: 'Which ancient Macedonian king conquered Persia and Egypt?', answer: 'Alexander the Great', hint: 'Died at age 32.' },
  ],

  // ── Food & Culture: Cuisines ──
  'en-fc-cuisines': [
    { id: 'q-en-fc-cuisines-200-1', subcategoryId: 'en-fc-cuisines', points: 200, text: 'Which country is the origin of sushi?', answer: 'Japan', hint: 'Land of the rising sun.' },
    { id: 'q-en-fc-cuisines-200-2', subcategoryId: 'en-fc-cuisines', points: 200, text: 'Which country is known for inventing pizza?', answer: 'Italy', hint: 'Specifically Naples.' },
    { id: 'q-en-fc-cuisines-400-1', subcategoryId: 'en-fc-cuisines', points: 400, text: 'What spice gives paella its yellow color?', answer: 'Saffron', hint: 'The world\'s most expensive spice.' },
    { id: 'q-en-fc-cuisines-400-2', subcategoryId: 'en-fc-cuisines', points: 400, text: 'Which country is the origin of croissants?', answer: 'Austria', hint: 'Not France — brought there from Vienna.' },
    { id: 'q-en-fc-cuisines-600-1', subcategoryId: 'en-fc-cuisines', points: 600, text: 'What is the Japanese art of cutting fish for sushi called?', answer: 'Ikejime', hint: 'The fish preparation technique.' },
    { id: 'q-en-fc-cuisines-600-2', subcategoryId: 'en-fc-cuisines', points: 600, text: 'Which Indian region is famous for its Biryani dish?', answer: 'Hyderabad', hint: 'City in Telangana, India.' },
  ],

  // ── Food & Culture: Dishes ──
  'en-fc-dishes': [
    { id: 'q-en-fc-dishes-200-1', subcategoryId: 'en-fc-dishes', points: 200, text: 'What is the main ingredient in guacamole?', answer: 'Avocado', hint: 'Green and creamy.' },
    { id: 'q-en-fc-dishes-200-2', subcategoryId: 'en-fc-dishes', points: 200, text: 'Which country invented the hamburger?', answer: 'Germany', hint: 'From the city of Hamburg.' },
    { id: 'q-en-fc-dishes-400-1', subcategoryId: 'en-fc-dishes', points: 400, text: 'What is the traditional Japanese dish of raw fish slices?', answer: 'Sashimi', hint: 'No rice, just fish.' },
    { id: 'q-en-fc-dishes-400-2', subcategoryId: 'en-fc-dishes', points: 400, text: 'What pasta dish name means "angry" in Italian?', answer: 'Arrabbiata', hint: 'A spicy tomato sauce.' },
    { id: 'q-en-fc-dishes-600-1', subcategoryId: 'en-fc-dishes', points: 600, text: 'What Peruvian dish is raw fish cured in citrus juice?', answer: 'Ceviche', hint: 'National dish of Peru.' },
    { id: 'q-en-fc-dishes-600-2', subcategoryId: 'en-fc-dishes', points: 600, text: 'What is the name of the Scottish dish made from sheep offal in a stomach casing?', answer: 'Haggis', hint: 'Scotland\'s national dish.' },
  ],

  // ── Food & Culture: Drinks ──
  'en-fc-drinks': [
    { id: 'q-en-fc-drinks-200-1', subcategoryId: 'en-fc-drinks', points: 200, text: 'Which country is the largest producer of coffee in the world?', answer: 'Brazil', hint: 'South American giant.' },
    { id: 'q-en-fc-drinks-200-2', subcategoryId: 'en-fc-drinks', points: 200, text: 'What drink is Champagne named after?', answer: 'Champagne region', hint: 'A region in France.' },
    { id: 'q-en-fc-drinks-400-1', subcategoryId: 'en-fc-drinks', points: 400, text: 'What is the base spirit in a Margarita?', answer: 'Tequila', hint: 'Made from agave.' },
    { id: 'q-en-fc-drinks-400-2', subcategoryId: 'en-fc-drinks', points: 400, text: 'Which country is the biggest consumer of tea per capita?', answer: 'Turkey', hint: 'Chai is a staple here.' },
    { id: 'q-en-fc-drinks-600-1', subcategoryId: 'en-fc-drinks', points: 600, text: 'What Japanese rice wine is traditionally served warm or cold?', answer: 'Sake', hint: 'Brewed from fermented rice.' },
    { id: 'q-en-fc-drinks-600-2', subcategoryId: 'en-fc-drinks', points: 600, text: 'What Ethiopian ceremony involves roasting and brewing fresh coffee beans?', answer: 'Coffee ceremony', hint: 'A cultural ritual in Ethiopia.' },
  ],

  // ── Food & Culture: Restaurants ──
  'en-fc-restaurants': [
    { id: 'q-en-fc-restaurants-200-1', subcategoryId: 'en-fc-restaurants', points: 200, text: 'Which fast food chain has the golden arches logo?', answer: 'McDonald\'s', hint: 'Billions served.' },
    { id: 'q-en-fc-restaurants-200-2', subcategoryId: 'en-fc-restaurants', points: 200, text: 'Which country has the most Michelin-starred restaurants?', answer: 'Japan', hint: 'Tokyo has more than Paris.' },
    { id: 'q-en-fc-restaurants-400-1', subcategoryId: 'en-fc-restaurants', points: 400, text: 'What is the name of the restaurant rating system used globally?', answer: 'Michelin stars', hint: 'Published by a French tire company.' },
    { id: 'q-en-fc-restaurants-400-2', subcategoryId: 'en-fc-restaurants', points: 400, text: 'Which chef has the most Michelin stars in the world?', answer: 'Joël Robuchon', hint: 'French chef, 32 stars at his peak.' },
    { id: 'q-en-fc-restaurants-600-1', subcategoryId: 'en-fc-restaurants', points: 600, text: 'What is the name of the Copenhagen restaurant that was named the world\'s best 4 times?', answer: 'Noma', hint: 'Known for Nordic cuisine.' },
    { id: 'q-en-fc-restaurants-600-2', subcategoryId: 'en-fc-restaurants', points: 600, text: 'Which French chef popularized "nouvelle cuisine" in the 1970s?', answer: 'Paul Bocuse', hint: 'Known as the pope of gastronomy.' },
  ],

  // ── Tech & Internet: Social Media ──
  'en-ti-social': [
    { id: 'q-en-ti-social-200-1', subcategoryId: 'en-ti-social', points: 200, text: 'Which social media platform is known for short video content and dances?', answer: 'TikTok', hint: 'Owned by ByteDance.' },
    { id: 'q-en-ti-social-200-2', subcategoryId: 'en-ti-social', points: 200, text: 'Which platform uses hashtags and is limited to short text posts?', answer: 'Twitter / X', hint: 'Now rebranded to X.' },
    { id: 'q-en-ti-social-400-1', subcategoryId: 'en-ti-social', points: 400, text: 'Who founded Facebook?', answer: 'Mark Zuckerberg', hint: 'CEO of Meta.' },
    { id: 'q-en-ti-social-400-2', subcategoryId: 'en-ti-social', points: 400, text: 'Which platform is owned by Microsoft and focused on professional networking?', answer: 'LinkedIn', hint: 'For resumes and job hunting.' },
    { id: 'q-en-ti-social-600-1', subcategoryId: 'en-ti-social', points: 600, text: 'In what year was Instagram founded?', answer: '2010', hint: 'Launched on October 6, 2010.' },
    { id: 'q-en-ti-social-600-2', subcategoryId: 'en-ti-social', points: 600, text: 'What was the original name of Snapchat during its development?', answer: 'Picaboo', hint: 'Before it launched publicly.' },
  ],

  // ── Tech & Internet: Apps ──
  'en-ti-apps': [
    { id: 'q-en-ti-apps-200-1', subcategoryId: 'en-ti-apps', points: 200, text: 'Which app uses a flame icon and is known for streaks?', answer: 'Snapchat', hint: 'Or Duolingo — but flame + streaks = Snapchat.' },
    { id: 'q-en-ti-apps-200-2', subcategoryId: 'en-ti-apps', points: 200, text: 'Which app lets you send disappearing photos and messages?', answer: 'Snapchat', hint: 'The ghost logo.' },
    { id: 'q-en-ti-apps-400-1', subcategoryId: 'en-ti-apps', points: 400, text: 'Which ride-sharing app was founded first — Uber or Lyft?', answer: 'Uber', hint: 'Founded in 2009.' },
    { id: 'q-en-ti-apps-400-2', subcategoryId: 'en-ti-apps', points: 400, text: 'Which app is used for music streaming and has a green logo?', answer: 'Spotify', hint: 'Swedish music platform.' },
    { id: 'q-en-ti-apps-600-1', subcategoryId: 'en-ti-apps', points: 600, text: 'Which app pioneered the "Stories" format first?', answer: 'Snapchat', hint: 'Before Instagram copied it.' },
    { id: 'q-en-ti-apps-600-2', subcategoryId: 'en-ti-apps', points: 600, text: 'What programming language was Swift designed for?', answer: 'iOS apps', hint: 'Apple\'s developer ecosystem.' },
  ],

  // ── Tech & Internet: Companies ──
  'en-ti-companies': [
    { id: 'q-en-ti-companies-200-1', subcategoryId: 'en-ti-companies', points: 200, text: 'Which company makes the iPhone?', answer: 'Apple', hint: 'Bitten apple logo.' },
    { id: 'q-en-ti-companies-200-2', subcategoryId: 'en-ti-companies', points: 200, text: 'Which company owns YouTube?', answer: 'Google', hint: 'Part of Alphabet Inc.' },
    { id: 'q-en-ti-companies-400-1', subcategoryId: 'en-ti-companies', points: 400, text: 'Which company was the first to reach a $1 trillion market cap?', answer: 'Apple', hint: 'August 2018.' },
    { id: 'q-en-ti-companies-400-2', subcategoryId: 'en-ti-companies', points: 400, text: 'What does the S in Tesla CEO\'s name stand for? (Elon ___ Musk)', answer: 'Reeve', hint: 'Elon Reeve Musk.' },
    { id: 'q-en-ti-companies-600-1', subcategoryId: 'en-ti-companies', points: 600, text: 'In which year was Amazon founded?', answer: '1994', hint: 'Jeff Bezos started it in a garage.' },
    { id: 'q-en-ti-companies-600-2', subcategoryId: 'en-ti-companies', points: 600, text: 'What was Google\'s original name during its development at Stanford?', answer: 'BackRub', hint: 'Before it became Google.' },
  ],

  // ── Tech & Internet: Gaming ──
  'en-ti-gaming': [
    { id: 'q-en-ti-gaming-200-1', subcategoryId: 'en-ti-gaming', points: 200, text: 'Which game features a plumber named Mario?', answer: 'Super Mario', hint: 'Nintendo\'s mascot.' },
    { id: 'q-en-ti-gaming-200-2', subcategoryId: 'en-ti-gaming', points: 200, text: 'Which battle royale game features a storm and building mechanics?', answer: 'Fortnite', hint: 'Epic Games.' },
    { id: 'q-en-ti-gaming-400-1', subcategoryId: 'en-ti-gaming', points: 400, text: 'Which game console is made by Sony?', answer: 'PlayStation', hint: 'PS5 is its latest version.' },
    { id: 'q-en-ti-gaming-400-2', subcategoryId: 'en-ti-gaming', points: 400, text: 'Which game has the most players of all time?', answer: 'Minecraft', hint: 'Blocks and survival.' },
    { id: 'q-en-ti-gaming-600-1', subcategoryId: 'en-ti-gaming', points: 600, text: 'Which esport game is known for the "International" championship with the biggest prize pool?', answer: 'Dota 2', hint: 'Valve\'s MOBA game.' },
    { id: 'q-en-ti-gaming-600-2', subcategoryId: 'en-ti-gaming', points: 600, text: 'In what year was the first commercially released video game, Pong, launched?', answer: '1972', hint: 'Atari.' },
  ],
};

// ─────────────────────────────────────────────────────
// For subcategories that don't have real questions yet,
// fall back to generated placeholder questions
// ─────────────────────────────────────────────────────
function generateEnglishQuestionsForSub(subId: string): Question[] {
  if (REAL_QUESTIONS[subId]) {
    return REAL_QUESTIONS[subId];
  }
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

export const ENGLISH_QUESTIONS: Question[] = GENERIC_ENGLISH_SUB_IDS.flatMap(
  generateEnglishQuestionsForSub
);
