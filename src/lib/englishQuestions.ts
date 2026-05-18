import type { Question } from '@/types';

export const ENGLISH_QUESTIONS: Question[] = [
  // ─── en-geo-capitals ───
  { id: 'q-en-geo-capitals-200-1', subcategoryId: 'en-geo-capitals', points: 200, text: 'What is the capital of France?', answer: 'Paris', hint: 'Think of the Eiffel Tower' },
  { id: 'q-en-geo-capitals-200-2', subcategoryId: 'en-geo-capitals', points: 200, text: 'What is the capital of Japan?', answer: 'Tokyo', hint: 'Home of the Rising Sun flag' },
  { id: 'q-en-geo-capitals-400-1', subcategoryId: 'en-geo-capitals', points: 400, text: 'What is the capital of Australia?', answer: 'Canberra', hint: 'Not Sydney or Melbourne' },
  { id: 'q-en-geo-capitals-400-2', subcategoryId: 'en-geo-capitals', points: 400, text: 'What is the capital of Canada?', answer: 'Ottawa', hint: 'Not Toronto or Vancouver' },
  { id: 'q-en-geo-capitals-600-1', subcategoryId: 'en-geo-capitals', points: 600, text: 'What is the capital of Kazakhstan?', answer: 'Astana', hint: 'It was renamed from Nur-Sultan in 2022' },
  { id: 'q-en-geo-capitals-600-2', subcategoryId: 'en-geo-capitals', points: 600, text: 'What is the capital of Myanmar?', answer: 'Naypyidaw', hint: 'Built as a planned city in 2005' },

  // ─── en-geo-landmarks ───
  { id: 'q-en-geo-landmarks-200-1', subcategoryId: 'en-geo-landmarks', points: 200, text: 'In which country is the Colosseum located?', answer: 'Italy', hint: 'Think gladiators and ancient Rome' },
  { id: 'q-en-geo-landmarks-200-2', subcategoryId: 'en-geo-landmarks', points: 200, text: 'In which country is the Great Wall located?', answer: 'China', hint: 'Visible from space — or so they say' },
  { id: 'q-en-geo-landmarks-400-1', subcategoryId: 'en-geo-landmarks', points: 400, text: 'In which country is Machu Picchu located?', answer: 'Peru', hint: 'High in the Andes mountains' },
  { id: 'q-en-geo-landmarks-400-2', subcategoryId: 'en-geo-landmarks', points: 400, text: 'In which country is Angkor Wat located?', answer: 'Cambodia', hint: 'The world\'s largest religious monument' },
  { id: 'q-en-geo-landmarks-600-1', subcategoryId: 'en-geo-landmarks', points: 600, text: 'In which city is the Sagrada Família cathedral?', answer: 'Barcelona', hint: 'Designed by Antoni Gaudí, still under construction' },
  { id: 'q-en-geo-landmarks-600-2', subcategoryId: 'en-geo-landmarks', points: 600, text: 'In which country is Petra, the Rose City, located?', answer: 'Jordan', hint: 'One of the New Seven Wonders of the World' },

  // ─── en-geo-countries ───
  { id: 'q-en-geo-countries-200-1', subcategoryId: 'en-geo-countries', points: 200, text: 'Which is the largest country in the world by area?', answer: 'Russia', hint: 'It spans 11 time zones' },
  { id: 'q-en-geo-countries-200-2', subcategoryId: 'en-geo-countries', points: 200, text: 'Which country has the most people in the world?', answer: 'India', hint: 'It overtook China in 2023' },
  { id: 'q-en-geo-countries-400-1', subcategoryId: 'en-geo-countries', points: 400, text: 'Which country has the most natural lakes?', answer: 'Canada', hint: 'It has more than 2 million lakes' },
  { id: 'q-en-geo-countries-400-2', subcategoryId: 'en-geo-countries', points: 400, text: 'Which is the smallest country in the world?', answer: 'Vatican City', hint: 'Located inside Rome' },
  { id: 'q-en-geo-countries-600-1', subcategoryId: 'en-geo-countries', points: 600, text: 'Which country has the longest coastline in the world?', answer: 'Canada', hint: 'Over 200,000 km of coastline' },
  { id: 'q-en-geo-countries-600-2', subcategoryId: 'en-geo-countries', points: 600, text: 'Which two countries share the longest international border?', answer: 'Canada and the USA', hint: 'North American neighbors' },

  // ─── en-geo-flags ───
  { id: 'q-en-geo-flags-200-1', subcategoryId: 'en-geo-flags', points: 200, text: 'Which country\'s flag features a maple leaf?', answer: 'Canada', hint: 'North American country, red and white' },
  { id: 'q-en-geo-flags-200-2', subcategoryId: 'en-geo-flags', points: 200, text: 'Which country\'s flag has a rising sun?', answer: 'Japan', hint: 'Red circle on white background' },
  { id: 'q-en-geo-flags-400-1', subcategoryId: 'en-geo-flags', points: 400, text: 'Which country\'s flag features a cedar tree?', answer: 'Lebanon', hint: 'Middle Eastern country' },
  { id: 'q-en-geo-flags-400-2', subcategoryId: 'en-geo-flags', points: 400, text: 'Which is the only country with a non-rectangular flag?', answer: 'Nepal', hint: 'Two stacked triangles in the Himalayas' },
  { id: 'q-en-geo-flags-600-1', subcategoryId: 'en-geo-flags', points: 600, text: 'Which country\'s flag has a dragon on it?', answer: 'Bhutan', hint: 'Small Himalayan kingdom' },
  { id: 'q-en-geo-flags-600-2', subcategoryId: 'en-geo-flags', points: 600, text: 'Which African country\'s flag features an AK-47?', answer: 'Mozambique', hint: 'Southeast African nation' },

  // ─── en-hw-movies ───
  { id: 'q-en-hw-movies-200-1', subcategoryId: 'en-hw-movies', points: 200, text: 'Which movie features the line "I\'ll be back"?', answer: 'The Terminator', hint: 'Arnold Schwarzenegger, 1984' },
  { id: 'q-en-hw-movies-200-2', subcategoryId: 'en-hw-movies', points: 200, text: 'In which movie does a character say "May the Force be with you"?', answer: 'Star Wars', hint: 'George Lucas\'s space saga' },
  { id: 'q-en-hw-movies-400-1', subcategoryId: 'en-hw-movies', points: 400, text: 'Which movie holds the record for the most Academy Awards ever (11 Oscars)?', answer: 'Ben-Hur / Titanic / The Lord of the Rings: The Return of the King', hint: 'Three films share this record' },
  { id: 'q-en-hw-movies-400-2', subcategoryId: 'en-hw-movies', points: 400, text: 'What is the name of the fictional African country in Black Panther?', answer: 'Wakanda', hint: 'Rich in vibranium' },
  { id: 'q-en-hw-movies-600-1', subcategoryId: 'en-hw-movies', points: 600, text: 'Who directed the 2001 film Mulholland Drive?', answer: 'David Lynch', hint: 'Known for surrealist, dreamlike films' },
  { id: 'q-en-hw-movies-600-2', subcategoryId: 'en-hw-movies', points: 600, text: 'Which 1994 film features the fictional restaurant "Big Kahuna Burger"?', answer: 'Pulp Fiction', hint: 'Directed by Quentin Tarantino' },

  // ─── en-hw-actors ───
  { id: 'q-en-hw-actors-200-1', subcategoryId: 'en-hw-actors', points: 200, text: 'Who played Iron Man in the MCU?', answer: 'Robert Downey Jr.', hint: 'He said "I am Iron Man"' },
  { id: 'q-en-hw-actors-200-2', subcategoryId: 'en-hw-actors', points: 200, text: 'Who played Jack in the 1997 film Titanic?', answer: 'Leonardo DiCaprio', hint: 'He won his first Oscar for The Revenant' },
  { id: 'q-en-hw-actors-400-1', subcategoryId: 'en-hw-actors', points: 400, text: 'Which actor has won the most Academy Awards for acting?', answer: 'Meryl Streep', hint: 'Three acting Oscars' },
  { id: 'q-en-hw-actors-400-2', subcategoryId: 'en-hw-actors', points: 400, text: 'Who played Forrest Gump in the 1994 film?', answer: 'Tom Hanks', hint: 'Life is like a box of chocolates' },
  { id: 'q-en-hw-actors-600-1', subcategoryId: 'en-hw-actors', points: 600, text: 'Who is the only person to win an Oscar for acting in a film they also directed and scored?', answer: 'Clint Eastwood', hint: 'Million Dollar Baby, 2004' },
  { id: 'q-en-hw-actors-600-2', subcategoryId: 'en-hw-actors', points: 600, text: 'Which actor was paid $1 for his role in Reservoir Dogs (1992)?', answer: 'Tim Roth', hint: 'He played Mr. Orange' },

  // ─── en-hw-oscars ───
  { id: 'q-en-hw-oscars-200-1', subcategoryId: 'en-hw-oscars', points: 200, text: 'Which film won Best Picture at the 2020 Oscars, making history as the first non-English film to do so?', answer: 'Parasite', hint: 'South Korean thriller by Bong Joon-ho' },
  { id: 'q-en-hw-oscars-200-2', subcategoryId: 'en-hw-oscars', points: 200, text: 'In what city is the Academy Awards ceremony usually held?', answer: 'Los Angeles', hint: 'Hollywood, California' },
  { id: 'q-en-hw-oscars-400-1', subcategoryId: 'en-hw-oscars', points: 400, text: 'Who slapped Chris Rock at the 2022 Oscars ceremony?', answer: 'Will Smith', hint: 'He also won Best Actor that night for King Richard' },
  { id: 'q-en-hw-oscars-400-2', subcategoryId: 'en-hw-oscars', points: 400, text: 'Which film had a famous Best Picture mix-up at the 2017 Oscars?', answer: 'La La Land (the winner announced by mistake; the actual winner was Moonlight)', hint: 'Warren Beatty presented the wrong envelope' },
  { id: 'q-en-hw-oscars-600-1', subcategoryId: 'en-hw-oscars', points: 600, text: 'Who has hosted the Academy Awards the most times?', answer: 'Bob Hope', hint: 'He hosted 19 times between 1940 and 1978' },
  { id: 'q-en-hw-oscars-600-2', subcategoryId: 'en-hw-oscars', points: 600, text: 'Which film received the most Oscar nominations without winning any?', answer: 'The Turning Point (1977) and The Color Purple (1985)', hint: 'Both received 11 nominations and zero wins' },

  // ─── en-hw-blockbusters ───
  { id: 'q-en-hw-blockbusters-200-1', subcategoryId: 'en-hw-blockbusters', points: 200, text: 'Which movie is the highest-grossing film of all time (unadjusted)?', answer: 'Avatar (2009)', hint: 'James Cameron\'s sci-fi epic' },
  { id: 'q-en-hw-blockbusters-200-2', subcategoryId: 'en-hw-blockbusters', points: 200, text: 'Which MCU film grossed over $2 billion worldwide?', answer: 'Avengers: Endgame', hint: 'The grand finale of the Infinity Saga' },
  { id: 'q-en-hw-blockbusters-400-1', subcategoryId: 'en-hw-blockbusters', points: 400, text: 'Which 1975 Steven Spielberg film is considered the first modern blockbuster?', answer: 'Jaws', hint: 'You\'ll need a bigger boat' },
  { id: 'q-en-hw-blockbusters-400-2', subcategoryId: 'en-hw-blockbusters', points: 400, text: 'Which film franchise has earned the most total box office revenue?', answer: 'Marvel Cinematic Universe (MCU)', hint: 'Over $29 billion globally' },
  { id: 'q-en-hw-blockbusters-600-1', subcategoryId: 'en-hw-blockbusters', points: 600, text: 'What was the production budget of the 1963 film Cleopatra, making it the most expensive film ever made (adjusted for inflation)?', answer: 'Around $44 million ($400M+ adjusted)', hint: 'Starred Elizabeth Taylor' },
  { id: 'q-en-hw-blockbusters-600-2', subcategoryId: 'en-hw-blockbusters', points: 600, text: 'Which film was banned in several countries for depicting a fictional president being assassinated?', answer: 'The Interview (2014)', hint: 'Seth Rogen and James Franco film about North Korea' },

  // ─── en-sp-football ───
  { id: 'q-en-sp-football-200-1', subcategoryId: 'en-sp-football', points: 200, text: 'Which country won the FIFA World Cup in 2022?', answer: 'Argentina', hint: 'Lionel Messi finally lifted the trophy' },
  { id: 'q-en-sp-football-200-2', subcategoryId: 'en-sp-football', points: 200, text: 'Which club has won the most UEFA Champions League titles?', answer: 'Real Madrid', hint: 'Spanish giants with 15 titles' },
  { id: 'q-en-sp-football-400-1', subcategoryId: 'en-sp-football', points: 400, text: 'Who is the all-time top scorer in FIFA World Cup history?', answer: 'Miroslav Klose', hint: 'German striker with 16 goals' },
  { id: 'q-en-sp-football-400-2', subcategoryId: 'en-sp-football', points: 400, text: 'In which year was the first FIFA World Cup held?', answer: '1930', hint: 'Hosted by Uruguay' },
  { id: 'q-en-sp-football-600-1', subcategoryId: 'en-sp-football', points: 600, text: 'Which player has won the most Ballon d\'Or awards?', answer: 'Lionel Messi', hint: 'He has won it 8 times' },
  { id: 'q-en-sp-football-600-2', subcategoryId: 'en-sp-football', points: 600, text: 'Which team suffered the famous 7-1 defeat to Germany in the 2014 World Cup semi-final?', answer: 'Brazil', hint: 'Known as the "Mineirazo"' },

  // ─── en-sp-nba ───
  { id: 'q-en-sp-nba-200-1', subcategoryId: 'en-sp-nba', points: 200, text: 'Which team has won the most NBA championships?', answer: 'Boston Celtics', hint: 'Green jerseys, 18 titles' },
  { id: 'q-en-sp-nba-200-2', subcategoryId: 'en-sp-nba', points: 200, text: 'Who is known as "King James" in the NBA?', answer: 'LeBron James', hint: 'Plays for the LA Lakers' },
  { id: 'q-en-sp-nba-400-1', subcategoryId: 'en-sp-nba', points: 400, text: 'Who holds the NBA record for most points in a single game?', answer: 'Wilt Chamberlain', hint: 'He scored 100 points in 1962' },
  { id: 'q-en-sp-nba-400-2', subcategoryId: 'en-sp-nba', points: 400, text: 'Which player was nicknamed "The Black Mamba"?', answer: 'Kobe Bryant', hint: 'LA Lakers legend' },
  { id: 'q-en-sp-nba-600-1', subcategoryId: 'en-sp-nba', points: 600, text: 'Who was the first overall pick in the 2003 NBA Draft?', answer: 'LeBron James', hint: 'Selected by the Cleveland Cavaliers' },
  { id: 'q-en-sp-nba-600-2', subcategoryId: 'en-sp-nba', points: 600, text: 'Which NBA player is known for the "Dream Shake" move?', answer: 'Hakeem Olajuwon', hint: 'Nigerian-American center, Houston Rockets legend' },

  // ─── en-sp-olympics ───
  { id: 'q-en-sp-olympics-200-1', subcategoryId: 'en-sp-olympics', points: 200, text: 'In which city were the 2024 Summer Olympics held?', answer: 'Paris', hint: 'The City of Light' },
  { id: 'q-en-sp-olympics-200-2', subcategoryId: 'en-sp-olympics', points: 200, text: 'How many rings are on the Olympic flag?', answer: '5', hint: 'Each represents a continent' },
  { id: 'q-en-sp-olympics-400-1', subcategoryId: 'en-sp-olympics', points: 400, text: 'Which athlete has won the most Olympic gold medals ever?', answer: 'Michael Phelps', hint: '23 gold medals in swimming' },
  { id: 'q-en-sp-olympics-400-2', subcategoryId: 'en-sp-olympics', points: 400, text: 'In which country were the first modern Olympic Games held in 1896?', answer: 'Greece', hint: 'Athens was the host city' },
  { id: 'q-en-sp-olympics-600-1', subcategoryId: 'en-sp-olympics', points: 600, text: 'Who lit the Olympic cauldron at the 1996 Atlanta Games opening ceremony?', answer: 'Muhammad Ali', hint: 'Boxing legend, trembling but triumphant' },
  { id: 'q-en-sp-olympics-600-2', subcategoryId: 'en-sp-olympics', points: 600, text: 'Which country boycotted the 1980 Moscow Olympics?', answer: 'The United States (and ~65 other nations)', hint: 'Protest over the Soviet invasion of Afghanistan' },

  // ─── en-sp-tennis ───
  { id: 'q-en-sp-tennis-200-1', subcategoryId: 'en-sp-tennis', points: 200, text: 'Which Grand Slam tournament is played on clay?', answer: 'Roland Garros (French Open)', hint: 'Held in Paris' },
  { id: 'q-en-sp-tennis-200-2', subcategoryId: 'en-sp-tennis', points: 200, text: 'Who has won the most Grand Slam singles titles in tennis history (men\'s)?', answer: 'Novak Djokovic', hint: '24 Grand Slam titles' },
  { id: 'q-en-sp-tennis-400-1', subcategoryId: 'en-sp-tennis', points: 400, text: 'Which surface is Wimbledon played on?', answer: 'Grass', hint: 'The oldest and most prestigious Grand Slam' },
  { id: 'q-en-sp-tennis-400-2', subcategoryId: 'en-sp-tennis', points: 400, text: 'Who was the first woman to win all four Grand Slams in a calendar year (twice)?', answer: 'Steffi Graf', hint: 'German legend who won the "Golden Slam" in 1988' },
  { id: 'q-en-sp-tennis-600-1', subcategoryId: 'en-sp-tennis', points: 600, text: 'What does the tennis term "bagel" mean?', answer: 'Winning a set 6-0', hint: 'The zero looks like a bagel' },
  { id: 'q-en-sp-tennis-600-2', subcategoryId: 'en-sp-tennis', points: 600, text: 'Which player was disqualified from the 2020 US Open for accidentally hitting a line judge with a ball?', answer: 'Novak Djokovic', hint: 'He was seeded #1 at the time' },

  // ─── en-st-space ───
  { id: 'q-en-st-space-200-1', subcategoryId: 'en-st-space', points: 200, text: 'Which planet is known as the Red Planet?', answer: 'Mars', hint: 'Iron oxide gives it a reddish appearance' },
  { id: 'q-en-st-space-200-2', subcategoryId: 'en-st-space', points: 200, text: 'Who was the first human to walk on the Moon?', answer: 'Neil Armstrong', hint: 'Apollo 11, July 1969' },
  { id: 'q-en-st-space-400-1', subcategoryId: 'en-st-space', points: 400, text: 'What is the name of the galaxy that contains our Solar System?', answer: 'The Milky Way', hint: 'A barred spiral galaxy' },
  { id: 'q-en-st-space-400-2', subcategoryId: 'en-st-space', points: 400, text: 'What is the hottest planet in our Solar System?', answer: 'Venus', hint: 'Not the closest to the Sun, but the hottest due to greenhouse effect' },
  { id: 'q-en-st-space-600-1', subcategoryId: 'en-st-space', points: 600, text: 'What is the name of the first artificial satellite launched into space?', answer: 'Sputnik 1', hint: 'Launched by the Soviet Union in 1957' },
  { id: 'q-en-st-space-600-2', subcategoryId: 'en-st-space', points: 600, text: 'What is the Chandrasekhar Limit?', answer: 'The maximum mass of a white dwarf star (~1.4 solar masses)', hint: 'Named after Indian-American astrophysicist Subrahmanyan Chandrasekhar' },

  // ─── en-st-inventions ───
  { id: 'q-en-st-inventions-200-1', subcategoryId: 'en-st-inventions', points: 200, text: 'Who invented the telephone?', answer: 'Alexander Graham Bell', hint: 'Patented in 1876' },
  { id: 'q-en-st-inventions-200-2', subcategoryId: 'en-st-inventions', points: 200, text: 'Who invented the World Wide Web?', answer: 'Tim Berners-Lee', hint: 'British scientist, 1989' },
  { id: 'q-en-st-inventions-400-1', subcategoryId: 'en-st-inventions', points: 400, text: 'What did Alexander Fleming discover in 1928?', answer: 'Penicillin', hint: 'The first antibiotic' },
  { id: 'q-en-st-inventions-400-2', subcategoryId: 'en-st-inventions', points: 400, text: 'Who invented the printing press around 1440?', answer: 'Johannes Gutenberg', hint: 'German craftsman who revolutionized book production' },
  { id: 'q-en-st-inventions-600-1', subcategoryId: 'en-st-inventions', points: 600, text: 'Which company developed the first commercially available touchscreen smartphone?', answer: 'Apple (iPhone, 2007)', hint: 'Steve Jobs called it a "revolutionary product"' },
  { id: 'q-en-st-inventions-600-2', subcategoryId: 'en-st-inventions', points: 600, text: 'Who is credited with inventing the steam engine?', answer: 'James Watt', hint: 'Scottish engineer who improved Newcomen\'s design' },

  // ─── en-st-biology ───
  { id: 'q-en-st-biology-200-1', subcategoryId: 'en-st-biology', points: 200, text: 'What is the powerhouse of the cell?', answer: 'The mitochondria', hint: 'Every meme agrees' },
  { id: 'q-en-st-biology-200-2', subcategoryId: 'en-st-biology', points: 200, text: 'How many chromosomes does a typical human cell contain?', answer: '46 (23 pairs)', hint: 'Half come from each parent' },
  { id: 'q-en-st-biology-400-1', subcategoryId: 'en-st-biology', points: 400, text: 'What is the longest bone in the human body?', answer: 'The femur (thigh bone)', hint: 'Located in the upper leg' },
  { id: 'q-en-st-biology-400-2', subcategoryId: 'en-st-biology', points: 400, text: 'What does DNA stand for?', answer: 'Deoxyribonucleic Acid', hint: 'Carries genetic instructions for all living organisms' },
  { id: 'q-en-st-biology-600-1', subcategoryId: 'en-st-biology', points: 600, text: 'What is the name of the process by which plants make food using sunlight?', answer: 'Photosynthesis', hint: 'CO₂ + water + light → glucose + oxygen' },
  { id: 'q-en-st-biology-600-2', subcategoryId: 'en-st-biology', points: 600, text: 'What type of blood cells are primarily responsible for immune defense?', answer: 'White blood cells (leukocytes)', hint: 'They fight infections and foreign invaders' },

  // ─── en-st-ai ───
  { id: 'q-en-st-ai-200-1', subcategoryId: 'en-st-ai', points: 200, text: 'What company created ChatGPT?', answer: 'OpenAI', hint: 'Founded by Sam Altman and others' },
  { id: 'q-en-st-ai-200-2', subcategoryId: 'en-st-ai', points: 200, text: 'What does AI stand for?', answer: 'Artificial Intelligence', hint: 'Machines simulating human thinking' },
  { id: 'q-en-st-ai-400-1', subcategoryId: 'en-st-ai', points: 400, text: 'What is the name of Google\'s AI assistant integrated into Android?', answer: 'Google Assistant (now Gemini)', hint: 'Competes with Siri and Alexa' },
  { id: 'q-en-st-ai-400-2', subcategoryId: 'en-st-ai', points: 400, text: 'What is machine learning?', answer: 'A subset of AI where systems learn from data to improve performance', hint: 'Think training models on examples' },
  { id: 'q-en-st-ai-600-1', subcategoryId: 'en-st-ai', points: 600, text: 'What is the "Turing Test"?', answer: 'A test of a machine\'s ability to exhibit intelligent behavior indistinguishable from a human', hint: 'Proposed by Alan Turing in 1950' },
  { id: 'q-en-st-ai-600-2', subcategoryId: 'en-st-ai', points: 600, text: 'What does "GPT" stand for in GPT-4?', answer: 'Generative Pre-trained Transformer', hint: 'It\'s an architecture for language models' },

  // ─── en-pm-artists ───
  { id: 'q-en-pm-artists-200-1', subcategoryId: 'en-pm-artists', points: 200, text: 'Which artist is known as the "Queen of Pop"?', answer: 'Madonna', hint: 'Known for reinventing herself over decades' },
  { id: 'q-en-pm-artists-200-2', subcategoryId: 'en-pm-artists', points: 200, text: 'Which artist released the album "Thriller" in 1982?', answer: 'Michael Jackson', hint: 'Best-selling album of all time' },
  { id: 'q-en-pm-artists-400-1', subcategoryId: 'en-pm-artists', points: 400, text: 'Which female artist broke Spotify\'s record for most streams in a single day in 2023?', answer: 'Taylor Swift', hint: '"1989 (Taylor\'s Version)" release' },
  { id: 'q-en-pm-artists-400-2', subcategoryId: 'en-pm-artists', points: 400, text: 'What is the real name of the rapper Eminem?', answer: 'Marshall Bruce Mathers III', hint: 'His initials inspired his stage name (M&M → Eminem)' },
  { id: 'q-en-pm-artists-600-1', subcategoryId: 'en-pm-artists', points: 600, text: 'Which British band has sold the most albums worldwide?', answer: 'The Beatles', hint: 'Over 600 million albums sold' },
  { id: 'q-en-pm-artists-600-2', subcategoryId: 'en-pm-artists', points: 600, text: 'Who was the lead vocalist of the band Queen?', answer: 'Freddie Mercury', hint: 'Born Farrokh Bulsara in Zanzibar' },

  // ─── en-pm-albums ───
  { id: 'q-en-pm-albums-200-1', subcategoryId: 'en-pm-albums', points: 200, text: 'Which album contains the song "Bohemian Rhapsody"?', answer: 'A Night at the Opera (Queen, 1975)', hint: 'A night at the...' },
  { id: 'q-en-pm-albums-200-2', subcategoryId: 'en-pm-albums', points: 200, text: 'What is the name of Beyoncé\'s visual album released in 2016?', answer: 'Lemonade', hint: 'Named after a citrus drink' },
  { id: 'q-en-pm-albums-400-1', subcategoryId: 'en-pm-albums', points: 400, text: 'Which album is the best-selling of all time?', answer: 'Thriller by Michael Jackson', hint: 'Over 66–100 million copies sold' },
  { id: 'q-en-pm-albums-400-2', subcategoryId: 'en-pm-albums', points: 400, text: 'Taylor Swift\'s album "Fearless" won Album of the Year at the Grammys in which year?', answer: '2010', hint: 'She became the youngest artist to win AOTY' },
  { id: 'q-en-pm-albums-600-1', subcategoryId: 'en-pm-albums', points: 600, text: 'Which Kendrick Lamar album won the 2016 Pulitzer Prize for Music?', answer: 'DAMN.', hint: 'First non-classical, non-jazz album to win' },
  { id: 'q-en-pm-albums-600-2', subcategoryId: 'en-pm-albums', points: 600, text: 'What was the debut album of the band Radiohead, released in 1993?', answer: 'Pablo Honey', hint: 'Contains the song "Creep"' },

  // ─── en-pm-lyrics ───
  { id: 'q-en-pm-lyrics-200-1', subcategoryId: 'en-pm-lyrics', points: 200, text: 'Complete the lyric: "Hello from the ___, I must have called a thousand times"', answer: 'Other side', hint: 'Adele, 2015' },
  { id: 'q-en-pm-lyrics-200-2', subcategoryId: 'en-pm-lyrics', points: 200, text: 'Who sings: "I wanna dance with somebody, I wanna feel the heat with somebody"?', answer: 'Whitney Houston', hint: '1987 classic' },
  { id: 'q-en-pm-lyrics-400-1', subcategoryId: 'en-pm-lyrics', points: 400, text: 'Complete the lyric: "Is this the real life? Is this just ___?"', answer: 'Fantasy', hint: 'Bohemian Rhapsody — Queen' },
  { id: 'q-en-pm-lyrics-400-2', subcategoryId: 'en-pm-lyrics', points: 400, text: 'Which artist sang: "We found love in a hopeless place"?', answer: 'Rihanna', hint: 'Produced by Calvin Harris, 2011' },
  { id: 'q-en-pm-lyrics-600-1', subcategoryId: 'en-pm-lyrics', points: 600, text: 'What song contains the lyric: "I\'m just a poor boy, nobody loves me"?', answer: 'Bohemian Rhapsody — Queen', hint: 'He\'s just a poor boy from a poor family' },
  { id: 'q-en-pm-lyrics-600-2', subcategoryId: 'en-pm-lyrics', points: 600, text: 'Which Bob Dylan song contains the lyric: "How does it feel, to be on your own, with no direction home"?', answer: 'Like a Rolling Stone', hint: 'Often voted the greatest rock song ever' },

  // ─── en-pm-concerts ───
  { id: 'q-en-pm-concerts-200-1', subcategoryId: 'en-pm-concerts', points: 200, text: 'Which music festival is held annually in Glastonbury, England?', answer: 'Glastonbury Festival', hint: 'One of the world\'s largest music festivals' },
  { id: 'q-en-pm-concerts-200-2', subcategoryId: 'en-pm-concerts', points: 200, text: 'Taylor Swift\'s "Eras Tour" became the highest-grossing concert tour ever — approximately how much did it earn?', answer: 'Over $1 billion', hint: 'First tour to cross the billion-dollar mark' },
  { id: 'q-en-pm-concerts-400-1', subcategoryId: 'en-pm-concerts', points: 400, text: 'Which 1985 benefit concert, broadcast worldwide, raised money for African famine relief?', answer: 'Live Aid', hint: 'Organized by Bob Geldof, held at Wembley and JFK stadiums' },
  { id: 'q-en-pm-concerts-400-2', subcategoryId: 'en-pm-concerts', points: 400, text: 'Which US music festival, held in 1969, became a symbol of the counterculture movement?', answer: 'Woodstock', hint: 'Half a million people attended' },
  { id: 'q-en-pm-concerts-600-1', subcategoryId: 'en-pm-concerts', points: 600, text: 'What is the name of the famous Coachella music and arts festival\'s home city?', answer: 'Indio, California', hint: 'In the Colorado Desert' },
  { id: 'q-en-pm-concerts-600-2', subcategoryId: 'en-pm-concerts', points: 600, text: 'Beyoncé\'s 2018 Coachella performance was nicknamed what?', answer: 'Beychella', hint: 'First Black woman to headline Coachella' },

  // ─── en-wh-empires ───
  { id: 'q-en-wh-empires-200-1', subcategoryId: 'en-wh-empires', points: 200, text: 'Which empire was the largest in history by land area?', answer: 'The British Empire', hint: 'The sun never set on it' },
  { id: 'q-en-wh-empires-200-2', subcategoryId: 'en-wh-empires', points: 200, text: 'Who founded the Mongol Empire?', answer: 'Genghis Khan', hint: 'Born Temüjin in 1162' },
  { id: 'q-en-wh-empires-400-1', subcategoryId: 'en-wh-empires', points: 400, text: 'In what year did the Western Roman Empire fall?', answer: '476 AD', hint: 'Romulus Augustulus was the last emperor' },
  { id: 'q-en-wh-empires-400-2', subcategoryId: 'en-wh-empires', points: 400, text: 'Which empire built Machu Picchu?', answer: 'The Inca Empire', hint: 'Located in modern-day Peru' },
  { id: 'q-en-wh-empires-600-1', subcategoryId: 'en-wh-empires', points: 600, text: 'What was the capital of the Ottoman Empire?', answer: 'Constantinople (modern Istanbul)', hint: 'Renamed after 1453' },
  { id: 'q-en-wh-empires-600-2', subcategoryId: 'en-wh-empires', points: 600, text: 'Which dynasty ruled China for the longest period?', answer: 'The Zhou Dynasty (~800 years)', hint: '1046 BC – 256 BC' },

  // ─── en-wh-wars ───
  { id: 'q-en-wh-wars-200-1', subcategoryId: 'en-wh-wars', points: 200, text: 'In which year did World War II end?', answer: '1945', hint: 'VE Day (May) and VJ Day (August/September)' },
  { id: 'q-en-wh-wars-200-2', subcategoryId: 'en-wh-wars', points: 200, text: 'Which event triggered the start of World War I?', answer: 'The assassination of Archduke Franz Ferdinand', hint: 'Killed in Sarajevo in 1914' },
  { id: 'q-en-wh-wars-400-1', subcategoryId: 'en-wh-wars', points: 400, text: 'What was the name of the Allied invasion of Normandy in June 1944?', answer: 'Operation Overlord (D-Day)', hint: 'June 6, 1944' },
  { id: 'q-en-wh-wars-400-2', subcategoryId: 'en-wh-wars', points: 400, text: 'Which two countries fought in the Falklands War of 1982?', answer: 'Argentina and the United Kingdom', hint: 'Over islands in the South Atlantic' },
  { id: 'q-en-wh-wars-600-1', subcategoryId: 'en-wh-wars', points: 600, text: 'How many years did the Hundred Years\' War actually last?', answer: '116 years (1337–1453)', hint: 'Between England and France' },
  { id: 'q-en-wh-wars-600-2', subcategoryId: 'en-wh-wars', points: 600, text: 'Which battle is considered Napoleon Bonaparte\'s final defeat?', answer: 'The Battle of Waterloo (1815)', hint: 'Near Brussels, Belgium' },

  // ─── en-wh-revolutions ───
  { id: 'q-en-wh-revolutions-200-1', subcategoryId: 'en-wh-revolutions', points: 200, text: 'In which year did the French Revolution begin?', answer: '1789', hint: 'Storming of the Bastille' },
  { id: 'q-en-wh-revolutions-200-2', subcategoryId: 'en-wh-revolutions', points: 200, text: 'Which revolution in 1917 overthrew the Russian Tsar?', answer: 'The Russian Revolution (Bolshevik Revolution)', hint: 'Led by Vladimir Lenin' },
  { id: 'q-en-wh-revolutions-400-1', subcategoryId: 'en-wh-revolutions', points: 400, text: 'Who was the leader of the Cuban Revolution?', answer: 'Fidel Castro', hint: 'Came to power in 1959' },
  { id: 'q-en-wh-revolutions-400-2', subcategoryId: 'en-wh-revolutions', points: 400, text: 'The American Revolution resulted in independence from which country?', answer: 'Great Britain', hint: '1776 Declaration of Independence' },
  { id: 'q-en-wh-revolutions-600-1', subcategoryId: 'en-wh-revolutions', points: 600, text: 'What was the name of the 1979 revolution that established the Islamic Republic of Iran?', answer: 'The Iranian Revolution', hint: 'Led by Ayatollah Khomeini' },
  { id: 'q-en-wh-revolutions-600-2', subcategoryId: 'en-wh-revolutions', points: 600, text: 'In which year did the Berlin Wall fall, symbolizing the end of the Cold War?', answer: '1989', hint: 'November 9, 1989' },

  // ─── en-wh-leaders ───
  { id: 'q-en-wh-leaders-200-1', subcategoryId: 'en-wh-leaders', points: 200, text: 'Who was the first President of the United States?', answer: 'George Washington', hint: 'Took office in 1789' },
  { id: 'q-en-wh-leaders-200-2', subcategoryId: 'en-wh-leaders', points: 200, text: 'Who was the leader of Nazi Germany during World War II?', answer: 'Adolf Hitler', hint: 'Chancellor from 1933, Führer from 1934' },
  { id: 'q-en-wh-leaders-400-1', subcategoryId: 'en-wh-leaders', points: 400, text: 'Who was the first female Prime Minister of the United Kingdom?', answer: 'Margaret Thatcher', hint: 'In office from 1979 to 1990, "The Iron Lady"' },
  { id: 'q-en-wh-leaders-400-2', subcategoryId: 'en-wh-leaders', points: 400, text: 'Who led the Indian independence movement against British rule?', answer: 'Mahatma Gandhi', hint: 'Known for non-violent resistance' },
  { id: 'q-en-wh-leaders-600-1', subcategoryId: 'en-wh-leaders', points: 600, text: 'Who was the first person to lead the Republic of South Africa after apartheid ended?', answer: 'Nelson Mandela', hint: 'Served as president from 1994 to 1999' },
  { id: 'q-en-wh-leaders-600-2', subcategoryId: 'en-wh-leaders', points: 600, text: 'Who was the first Chancellor of the Federal Republic of Germany (West Germany)?', answer: 'Konrad Adenauer', hint: 'In office from 1949 to 1963' },

  // ─── en-fc-cuisines ───
  { id: 'q-en-fc-cuisines-200-1', subcategoryId: 'en-fc-cuisines', points: 200, text: 'Which country is known for inventing sushi?', answer: 'Japan', hint: 'Raw fish on vinegared rice' },
  { id: 'q-en-fc-cuisines-200-2', subcategoryId: 'en-fc-cuisines', points: 200, text: 'Which country is pasta traditionally from?', answer: 'Italy', hint: 'Think spaghetti, penne, fettuccine' },
  { id: 'q-en-fc-cuisines-400-1', subcategoryId: 'en-fc-cuisines', points: 400, text: 'Which country is famous for the dish "Pad Thai"?', answer: 'Thailand', hint: 'Stir-fried rice noodles' },
  { id: 'q-en-fc-cuisines-400-2', subcategoryId: 'en-fc-cuisines', points: 400, text: 'From which country does the dish "Kimchi" originate?', answer: 'South Korea', hint: 'Fermented vegetables, usually cabbage' },
  { id: 'q-en-fc-cuisines-600-1', subcategoryId: 'en-fc-cuisines', points: 600, text: 'What is "Mole" in Mexican cuisine?', answer: 'A complex sauce made with chili peppers, spices, and often chocolate', hint: 'Typically served over chicken or turkey' },
  { id: 'q-en-fc-cuisines-600-2', subcategoryId: 'en-fc-cuisines', points: 600, text: 'Which country\'s cuisine prominently features injera, a sourdough flatbread?', answer: 'Ethiopia (and Eritrea)', hint: 'East African cuisine' },

  // ─── en-fc-dishes ───
  { id: 'q-en-fc-dishes-200-1', subcategoryId: 'en-fc-dishes', points: 200, text: 'What are the two main ingredients in a traditional Caesar salad?', answer: 'Romaine lettuce and Caesar dressing (with croutons)', hint: 'Not invented by Julius Caesar' },
  { id: 'q-en-fc-dishes-200-2', subcategoryId: 'en-fc-dishes', points: 200, text: 'What type of bread is used to make a traditional bruschetta?', answer: 'Toasted Italian bread (typically ciabatta or baguette)', hint: 'Topped with tomatoes and basil' },
  { id: 'q-en-fc-dishes-400-1', subcategoryId: 'en-fc-dishes', points: 400, text: 'What is the main ingredient in traditional hummus?', answer: 'Chickpeas (garbanzo beans)', hint: 'Blended with tahini and lemon' },
  { id: 'q-en-fc-dishes-400-2', subcategoryId: 'en-fc-dishes', points: 400, text: 'What is "Wagyu"?', answer: 'A premium Japanese breed of cattle known for intensely marbled beef', hint: 'Can cost hundreds of dollars per pound' },
  { id: 'q-en-fc-dishes-600-1', subcategoryId: 'en-fc-dishes', points: 600, text: 'What is "Foie Gras" and from which country does it originate?', answer: 'The liver of a fattened duck or goose, from France', hint: 'Considered a luxury food' },
  { id: 'q-en-fc-dishes-600-2', subcategoryId: 'en-fc-dishes', points: 600, text: 'What is "Hakarl"?', answer: 'Fermented Greenlandic shark, a traditional Icelandic dish', hint: 'Known for its extremely pungent smell' },

  // ─── en-fc-drinks ───
  { id: 'q-en-fc-drinks-200-1', subcategoryId: 'en-fc-drinks', points: 200, text: 'Which country is Coca-Cola originally from?', answer: 'United States', hint: 'Invented in Atlanta, Georgia in 1886' },
  { id: 'q-en-fc-drinks-200-2', subcategoryId: 'en-fc-drinks', points: 200, text: 'What type of drink is Espresso?', answer: 'A concentrated form of coffee', hint: 'Originated in Italy' },
  { id: 'q-en-fc-drinks-400-1', subcategoryId: 'en-fc-drinks', points: 400, text: 'Which country produces the most coffee in the world?', answer: 'Brazil', hint: 'The world\'s largest coffee exporter' },
  { id: 'q-en-fc-drinks-400-2', subcategoryId: 'en-fc-drinks', points: 400, text: 'What is "Matcha"?', answer: 'A type of finely ground green tea powder from Japan', hint: 'Used in tea ceremonies and now in lattes' },
  { id: 'q-en-fc-drinks-600-1', subcategoryId: 'en-fc-drinks', points: 600, text: 'What is "Kvass"?', answer: 'A fermented beverage made from bread, popular in Eastern Europe and Russia', hint: 'Low alcohol content' },
  { id: 'q-en-fc-drinks-600-2', subcategoryId: 'en-fc-drinks', points: 600, text: 'Which country is credited with inventing Champagne?', answer: 'France', hint: 'From the Champagne wine region' },

  // ─── en-fc-restaurants ───
  { id: 'q-en-fc-restaurants-200-1', subcategoryId: 'en-fc-restaurants', points: 200, text: 'Which fast food chain is known for the "Big Mac"?', answer: 'McDonald\'s', hint: 'Two all-beef patties...' },
  { id: 'q-en-fc-restaurants-200-2', subcategoryId: 'en-fc-restaurants', points: 200, text: 'What do the Michelin Stars in fine dining rate?', answer: 'Restaurant quality', hint: 'Originally published by the Michelin tire company' },
  { id: 'q-en-fc-restaurants-400-1', subcategoryId: 'en-fc-restaurants', points: 400, text: 'Which restaurant was named "The World\'s Best Restaurant" most often in the 2010s?', answer: 'Noma (Copenhagen, Denmark)', hint: 'Known for New Nordic cuisine' },
  { id: 'q-en-fc-restaurants-400-2', subcategoryId: 'en-fc-restaurants', points: 400, text: 'How many Michelin Stars can a restaurant receive at maximum?', answer: '3', hint: 'Three stars = exceptional cuisine, worth a special journey' },
  { id: 'q-en-fc-restaurants-600-1', subcategoryId: 'en-fc-restaurants', points: 600, text: 'In which country was the first McDonald\'s restaurant opened outside the US?', answer: 'Canada', hint: 'Richmond, British Columbia, 1967' },
  { id: 'q-en-fc-restaurants-600-2', subcategoryId: 'en-fc-restaurants', points: 600, text: 'Which chef has the most total Michelin Stars across their restaurants?', answer: 'Joël Robuchon', hint: 'French chef with 32 Michelin Stars at peak' },

  // ─── en-ti-social ───
  { id: 'q-en-ti-social-200-1', subcategoryId: 'en-ti-social', points: 200, text: 'In what year was Facebook (now Meta) founded?', answer: '2004', hint: 'Mark Zuckerberg launched it from Harvard' },
  { id: 'q-en-ti-social-200-2', subcategoryId: 'en-ti-social', points: 200, text: 'What does the term "viral" mean in social media?', answer: 'Content that spreads rapidly and widely', hint: 'Like a virus spreading from person to person' },
  { id: 'q-en-ti-social-400-1', subcategoryId: 'en-ti-social', points: 400, text: 'Which social media platform uses the term "tweet"?', answer: 'X (formerly Twitter)', hint: 'Rebranded by Elon Musk in 2023' },
  { id: 'q-en-ti-social-400-2', subcategoryId: 'en-ti-social', points: 400, text: 'Which country developed TikTok?', answer: 'China', hint: 'Created by ByteDance' },
  { id: 'q-en-ti-social-600-1', subcategoryId: 'en-ti-social', points: 600, text: 'What is the most followed account on Instagram as of 2024?', answer: 'Instagram\'s own official account (@instagram)', hint: 'Not a celebrity — it\'s the platform itself' },
  { id: 'q-en-ti-social-600-2', subcategoryId: 'en-ti-social', points: 600, text: 'Which social network was acquired by Microsoft for $26.2 billion in 2016?', answer: 'LinkedIn', hint: 'Professional networking platform' },

  // ─── en-ti-apps ───
  { id: 'q-en-ti-apps-200-1', subcategoryId: 'en-ti-apps', points: 200, text: 'What does the app "Duolingo" teach?', answer: 'Languages', hint: 'Green owl mascot' },
  { id: 'q-en-ti-apps-200-2', subcategoryId: 'en-ti-apps', points: 200, text: 'Which app is used for video calls and was popular during COVID-19 lockdowns?', answer: 'Zoom', hint: 'Also Skype, Teams, FaceTime — but Zoom was most associated' },
  { id: 'q-en-ti-apps-400-1', subcategoryId: 'en-ti-apps', points: 400, text: 'What is the name of Apple\'s mobile operating system?', answer: 'iOS', hint: 'Runs on iPhone and iPad' },
  { id: 'q-en-ti-apps-400-2', subcategoryId: 'en-ti-apps', points: 400, text: 'Which streaming app surpassed Netflix in total subscribers in 2022?', answer: 'Amazon Prime Video / Disney+ (both surpassed Netflix at various points)', hint: 'The streaming wars intensified' },
  { id: 'q-en-ti-apps-600-1', subcategoryId: 'en-ti-apps', points: 600, text: 'What programming language is used to develop native Android apps?', answer: 'Kotlin (also Java)', hint: 'Google\'s preferred language since 2017' },
  { id: 'q-en-ti-apps-600-2', subcategoryId: 'en-ti-apps', points: 600, text: 'Which app has the highest number of monthly active users as of 2024?', answer: 'WhatsApp (or YouTube/Facebook depending on source)', hint: 'Over 2 billion monthly active users' },

  // ─── en-ti-companies ───
  { id: 'q-en-ti-companies-200-1', subcategoryId: 'en-ti-companies', points: 200, text: 'Which company makes the iPhone?', answer: 'Apple', hint: 'Founded by Steve Jobs' },
  { id: 'q-en-ti-companies-200-2', subcategoryId: 'en-ti-companies', points: 200, text: 'What does the company Tesla primarily manufacture?', answer: 'Electric vehicles', hint: 'Founded by Elon Musk (and others)' },
  { id: 'q-en-ti-companies-400-1', subcategoryId: 'en-ti-companies', points: 400, text: 'What is Amazon\'s cloud computing service called?', answer: 'Amazon Web Services (AWS)', hint: 'The backbone of much of the internet' },
  { id: 'q-en-ti-companies-400-2', subcategoryId: 'en-ti-companies', points: 400, text: 'Which company developed the Windows operating system?', answer: 'Microsoft', hint: 'Founded by Bill Gates and Paul Allen' },
  { id: 'q-en-ti-companies-600-1', subcategoryId: 'en-ti-companies', points: 600, text: 'What was Google\'s original name before it became Google?', answer: 'BackRub', hint: 'Named for its analysis of back links on the web' },
  { id: 'q-en-ti-companies-600-2', subcategoryId: 'en-ti-companies', points: 600, text: 'Which company owns the brands Oculus VR and WhatsApp?', answer: 'Meta (formerly Facebook)', hint: 'Mark Zuckerberg\'s parent company' },

  // ─── en-ti-gaming ───
  { id: 'q-en-ti-gaming-200-1', subcategoryId: 'en-ti-gaming', points: 200, text: 'Which game features the character "Master Chief"?', answer: 'Halo', hint: 'Xbox exclusive franchise' },
  { id: 'q-en-ti-gaming-200-2', subcategoryId: 'en-ti-gaming', points: 200, text: 'What is the best-selling video game of all time?', answer: 'Minecraft', hint: 'Block-building sandbox game by Mojang' },
  { id: 'q-en-ti-gaming-400-1', subcategoryId: 'en-ti-gaming', points: 400, text: 'Which company created the Super Mario franchise?', answer: 'Nintendo', hint: 'Japanese gaming giant' },
  { id: 'q-en-ti-gaming-400-2', subcategoryId: 'en-ti-gaming', points: 400, text: 'What year was the first iPhone-compatible App Store launched?', answer: '2008', hint: 'iOS 2.0 update' },
  { id: 'q-en-ti-gaming-600-1', subcategoryId: 'en-ti-gaming', points: 600, text: 'What was the first commercially successful video game arcade cabinet?', answer: 'Pong (Atari, 1972)', hint: 'A simple tennis-like game' },
  { id: 'q-en-ti-gaming-600-2', subcategoryId: 'en-ti-gaming', points: 600, text: 'Which battle royale game set the record for most concurrent players on Steam?', answer: 'PUBG: Battlegrounds', hint: 'Over 3 million concurrent players at peak' },
];
