import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { ARABIC_MAIN_CATEGORIES, ENGLISH_MAIN_CATEGORIES } from '@/lib/categories';
import { useGameStore } from '@/store/gameStore';
import { Users, FolderOpen, Trophy, Play } from 'lucide-react';

export default function LandingPage() {
  const language = useGameStore((s) => s.language);
  const isAr = language === 'ar';

  const displayCategories = isAr ? ARABIC_MAIN_CATEGORIES : ENGLISH_MAIN_CATEGORIES;

  return (
    <div id="home" style={{ minHeight: '100vh', paddingTop: 88 }}>
      <Navbar />

      {/* HERO */}
      <section style={{ padding: '60px 28px 80px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 60, alignItems: 'center',
        }} className="hero-grid">
          {/* Mini Board Preview */}
          <div className="glass anim-fade-in-up" style={{
            borderRadius: 28, padding: 24, aspectRatio: '4/3',
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(4, 1fr)',
            gap: 10,
          }}>
            {Array.from({ length: 16 }).map((_, i) => {
              const colors = ['#10B981', '#3B82F6', '#F59E0B'];
              const c = colors[i % 3];
              return (
                <div key={i} style={{
                  background: `linear-gradient(135deg, ${c}33, ${c}11)`,
                  border: `1px solid ${c}55`,
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: c, fontWeight: 900, fontSize: 18,
                  animation: `fadeIn 0.5s ease ${i * 0.04}s both`,
                }}>
                  {(i % 3 + 1) * 200}
                </div>
              );
            })}
          </div>

          {/* Headline */}
          <div className="anim-fade-in-up delay-100">
            {isAr ? (
              <>
                <h1 style={{
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  marginBottom: 20,
                  letterSpacing: '-1px',
                }}>
                  لعبة السهرة <br /> اللي كلهم <span style={{ color: '#16C784' }}>ينتظرونها</span>
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.6vw, 20px)',
                  color: 'var(--text-secondary)',
                  marginBottom: 32, lineHeight: 1.6,
                }}>
                  فئات متنوعة، أسئلة عربية، وتنافس حقيقي — اجمعوا الكل وابدأوا
                </p>
                <Link to="/play" className="btn-primary" style={{ fontSize: 18, padding: '16px 36px' }}>
                  <Play size={20} fill="white" />
                  ابدأ اللعب الآن
                </Link>
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: 24, marginTop: 40,
                  color: 'var(--text-secondary)', fontSize: 15, fontWeight: 700,
                }}>
                  <span>٥٠٠+ سؤال</span>
                  <span>·</span>
                  <span>٢٥+ فئة</span>
                  <span>·</span>
                  <span>٢ تلميح</span>
                  <span>·</span>
                  <span>∞ جولة ممكنة</span>
                </div>
              </>
            ) : (
              <>
                <h1 style={{
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  marginBottom: 20,
                  letterSpacing: '-1px',
                }}>
                  The Party Game <br /> Everyone&apos;s Been <span style={{ color: '#16C784' }}>Waiting For</span>
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.6vw, 20px)',
                  color: 'var(--text-secondary)',
                  marginBottom: 32, lineHeight: 1.6,
                }}>
                  Diverse categories, real trivia, and genuine competition — gather everyone and start playing
                </p>
                <Link to="/play" className="btn-primary" style={{ fontSize: 18, padding: '16px 36px' }}>
                  <Play size={20} fill="white" />
                  Start Playing Now
                </Link>
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: 24, marginTop: 40,
                  color: 'var(--text-secondary)', fontSize: 15, fontWeight: 700,
                }}>
                  <span>500+ Questions</span>
                  <span>·</span>
                  <span>25+ Categories</span>
                  <span>·</span>
                  <span>2 Hints</span>
                  <span>·</span>
                  <span>∞ Rounds</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* HOW TO PLAY */}
      <section id="how" style={{ padding: '80px 28px', maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 900, textAlign: 'center', marginBottom: 50 }}>
          {isAr ? (
            <>طريقة <span style={{ color: '#16C784' }}>اللعب</span></>
          ) : (
            <>How to <span style={{ color: '#16C784' }}>Play</span></>
          )}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {isAr ? [
            { n: 1, icon: <Users size={32} />, title: 'كوّن فريقين', desc: 'انقسموا على فريقين وسمّوهم' },
            { n: 2, icon: <FolderOpen size={32} />, title: 'اختار الفئات', desc: 'اختاروا ٦ فئات من أكثر من ٢٥ موضوع متنوع' },
            { n: 3, icon: <Trophy size={32} />, title: 'ابدأ التحدي', desc: 'أجيبوا على الأسئلة وحصّلوا النقاط — الأعلى يفوز' },
          ].map((s, i) => (
            <div key={s.n} className="glass anim-fade-in-up" style={{ padding: 32, borderRadius: 24, animationDelay: `${i * 0.1}s` }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #16C78422, #10B98111)', color: '#16C784', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontSize: 14, color: '#16C784', fontWeight: 900, marginBottom: 8 }}>الخطوة {s.n}</div>
              <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{s.desc}</p>
            </div>
          )) : [
            { n: 1, icon: <Users size={32} />, title: 'Form Two Teams', desc: 'Split into two teams and give them names' },
            { n: 2, icon: <FolderOpen size={32} />, title: 'Pick Categories', desc: 'Choose 6 categories from 25+ diverse topics' },
            { n: 3, icon: <Trophy size={32} />, title: 'Start the Challenge', desc: 'Answer questions, earn points — highest score wins' },
          ].map((s, i) => (
            <div key={s.n} className="glass anim-fade-in-up" style={{ padding: 32, borderRadius: 24, animationDelay: `${i * 0.1}s` }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #16C78422, #10B98111)', color: '#16C784', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontSize: 14, color: '#16C784', fontWeight: 900, marginBottom: 8 }}>Step {s.n}</div>
              <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" style={{ padding: '60px 28px 100px' }}>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 900, textAlign: 'center', marginBottom: 12, maxWidth: 1280, margin: '0 auto 12px' }}>
          {isAr ? (
            <>الفئات <span style={{ color: '#16C784' }}>المتاحة</span></>
          ) : (
            <>Available <span style={{ color: '#16C784' }}>Categories</span></>
          )}
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 40, fontSize: 17 }}>
          {isAr
            ? `١٨ مجموعة رئيسية، ١٠١ فئة فرعية`
            : `9 main categories, 38 subcategories`
          }
        </p>
        <div className="hide-scrollbar" style={{ overflowX: 'auto', padding: '4px 28px' }}>
          <div style={{ display: 'flex', gap: 16, width: 'max-content' }}>
            {displayCategories.map((c, i) => (
              <div key={c.id} className="glass anim-fade-in-up" style={{
                width: 220, padding: 24, borderRadius: 20,
                borderTop: `4px solid ${c.color}`,
                animationDelay: `${i * 0.04}s`,
              }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{c.emoji}</div>
                <div style={{ fontWeight: 900, fontSize: 17, marginBottom: 8 }}>{c.name}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
                  {isAr ? `${c.subcategories.length} فئة فرعية` : `${c.subcategories.length} subcategories`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{
        padding: '40px 28px', textAlign: 'center',
        borderTop: '1px solid var(--card-border)',
        color: 'var(--text-secondary)', fontSize: 14,
      }}>
        {isAr ? '© Jam3ah — لعبة السهرة' : '© Jam3ah — The Party Trivia Game'}
      </footer>
    </div>
  );
}
