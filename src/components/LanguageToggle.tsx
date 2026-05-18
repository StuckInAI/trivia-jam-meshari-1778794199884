import { useGameStore } from '@/store/gameStore';
import type { Language } from '@/types';

interface LanguageToggleProps {
  disabled?: boolean;
}

export default function LanguageToggle({ disabled = false }: LanguageToggleProps) {
  const language = useGameStore((s) => s.language);
  const setLanguage = useGameStore((s) => s.setLanguage);
  const phase = useGameStore((s) => s.phase);

  // Never show during an active game
  if (phase !== 'setup') return null;

  const handleSelect = (lang: Language) => {
    if (disabled) return;
    setLanguage(lang);
  };

  const pillBase: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '7px 16px',
    borderRadius: 999,
    fontWeight: 800,
    fontSize: 14,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.18s ease',
    border: 'none',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,
  };

  const activeStyle: React.CSSProperties = {
    background: '#16C784',
    color: '#fff',
    boxShadow: '0 4px 14px rgba(22,199,132,0.35)',
  };

  const inactiveStyle: React.CSSProperties = {
    background: 'var(--input-bg)',
    color: 'var(--text-secondary)',
    border: '1px solid var(--input-border)',
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: 999,
        padding: 3,
        gap: 2,
      }}
    >
      <button
        onClick={() => handleSelect('ar')}
        style={{
          ...pillBase,
          ...(language === 'ar' ? activeStyle : inactiveStyle),
        }}
      >
        <span>🇸🇦</span>
        <span>العربية</span>
      </button>
      <button
        onClick={() => handleSelect('en')}
        style={{
          ...pillBase,
          ...(language === 'en' ? activeStyle : inactiveStyle),
        }}
      >
        <span>🇺🇸</span>
        <span>English</span>
      </button>
    </div>
  );
}
