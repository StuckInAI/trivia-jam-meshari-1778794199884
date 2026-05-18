import { useNavigate, Link } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';
import { useHydrated } from '@/hooks/useHydrated';
import { ARABIC_MAIN_CATEGORIES, ENGLISH_MAIN_CATEGORIES } from '@/lib/categories';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { Check, ArrowLeft, Play } from 'lucide-react';

export default function SetupPage() {
  const hydrated = useHydrated();
  const navigate = useNavigate();
  const language = useGameStore((s) => s.language);
  const teamA = useGameStore((s) => s.teamA);
  const teamB = useGameStore((s) => s.teamB);
  const selected = useGameStore((s) => s.selectedSubcategories);
  const setTeamName = useGameStore((s) => s.setTeamName);
  const toggleSub = useGameStore((s) => s.toggleSubcategory);
  const startGame = useGameStore((s) => s.startGame);

  const isAr = language === 'ar';
  const displayCategories = isAr ? ARABIC_MAIN_CATEGORIES : ENGLISH_MAIN_CATEGORIES;

  const isSelected = (id: string) => selected.some((s) => s.id === id);
  const canStart = hydrated && selected.length === 6 && teamA.name.trim().length > 0 && teamB.name.trim().length > 0;

  const handleStart = () => {
    if (!canStart) return;
    startGame();
    navigate('/play/board');
  };

  return (
    <div style={{ minHeight: '100vh', paddingBottom: 120 }}>
      <nav className="navbar-glass" style={{
        position: 'sticky', top: 0, zIndex: 40,
        padding: '14px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link to="/" className="btn-ghost">
          <ArrowLeft size={16} />
          {isAr ? 'العودة' : 'Back'}
        </Link>
        <Logo size={24} />
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <ThemeToggle />
        </div>
      </nav>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
        {/* Language Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <LanguageToggle />
        </div>

        <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 900, marginBottom: 8, textAlign: 'center' }}>
          {isAr ? (
            <>جهّز <span style={{ color: '#16C784' }}>اللعبة</span></>
          ) : (
            <>Setup <span style={{ color: '#16C784' }}>the Game</span></>
          )}
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 40, fontSize: 17 }}>
          {isAr ? 'سمّوا الفرق واختاروا ٦ فئات' : 'Name your teams and choose 6 categories'}
        </p>

        {/* TEAMS */}
        <div className="glass anim-fade-in-up" style={{ borderRadius: 24, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 20 }}>
            {isAr ? '١ — أسماء الفرق' : '1 — Team Names'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 8, color: '#10B981', fontWeight: 700 }}>
                {isAr ? 'الفريق الأول' : 'Team One'}
              </label>
              <input
                className="team-input"
                placeholder={isAr ? 'اسم الفريق الأول' : 'Team One name'}
                value={hydrated ? teamA.name : ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTeamName('a', e.target.value)}
                style={{ borderColor: hydrated && teamA.name ? '#10B981' : undefined }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 8, color: '#F59E0B', fontWeight: 700 }}>
                {isAr ? 'الفريق الثاني' : 'Team Two'}
              </label>
              <input
                className="team-input"
                placeholder={isAr ? 'اسم الفريق الثاني' : 'Team Two name'}
                value={hydrated ? teamB.name : ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTeamName('b', e.target.value)}
                style={{ borderColor: hydrated && teamB.name ? '#F59E0B' : undefined }}
              />
            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="glass anim-fade-in-up delay-100" style={{ borderRadius: 24, padding: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
            <h2 style={{ fontSize: 22, fontWeight: 900 }}>
              {isAr ? '٢ — اختار ٦ فئات' : '2 — Choose 6 Categories'}
            </h2>
            <div style={{
              padding: '8px 16px', borderRadius: 999,
              background: selected.length === 6 ? '#16C78422' : 'var(--card-bg)',
              border: `1px solid ${selected.length === 6 ? '#16C784' : 'var(--card-border)'}`,
              color: selected.length === 6 ? '#16C784' : 'var(--text-secondary)',
              fontWeight: 900, fontSize: 15,
            }}>
              {isAr ? `${selected.length}/6 فئات مختارة` : `${selected.length}/6 selected`}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {displayCategories.map((cat) => (
              <div key={cat.id} style={{
                background: 'var(--card-bg)',
                border: `1px solid var(--card-border)`,
                borderTop: `3px solid ${cat.color}`,
                borderRadius: 16, padding: 16,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 24 }}>{cat.emoji}</span>
                  <span style={{ fontWeight: 900, fontSize: 16 }}>{cat.name}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {cat.subcategories.map((sub) => {
                    const sel = isSelected(sub.id);
                    const disabled = !sel && selected.length >= 6;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => toggleSub(sub)}
                        disabled={disabled}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 4,
                          padding: '6px 12px', borderRadius: 999,
                          fontSize: 13, fontWeight: 700,
                          background: sel ? '#16C78422' : 'var(--input-bg)',
                          border: `1px solid ${sel ? '#16C784' : 'var(--input-border)'}`,
                          color: sel ? '#16C784' : 'var(--text-primary)',
                          opacity: disabled ? 0.4 : 1,
                          cursor: disabled ? 'not-allowed' : 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <span>{sub.icon}</span>
                        <span>{sub.name}</span>
                        {sel && <Check size={12} strokeWidth={3} />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STICKY START BAR */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        padding: 16,
        background: 'var(--navbar-bg)',
        borderTop: '1px solid var(--navbar-border)',
        backdropFilter: 'blur(18px)',
        display: 'flex', justifyContent: 'center', zIndex: 30,
      }}>
        <button className="btn-primary" onClick={handleStart} disabled={!canStart} style={{ fontSize: 17, padding: '14px 40px' }}>
          <Play size={18} fill="white" />
          {isAr ? 'ابدأ اللعبة' : 'Start Game'}
        </button>
      </div>
    </div>
  );
}
