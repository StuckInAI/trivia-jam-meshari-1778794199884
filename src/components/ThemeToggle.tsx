import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';
import { useHydrated } from '@/hooks/useHydrated';

export default function ThemeToggle() {
  const hydrated = useHydrated();
  const theme = useThemeStore((s) => s.theme);
  const toggle = useThemeStore((s) => s.toggleTheme);

  const isDark = hydrated ? theme === 'dark' : true;

  return (
    <button
      onClick={toggle}
      aria-label="تبديل المظهر"
      style={{
        width: 40, height: 40, borderRadius: 999,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--card-bg)', border: '1px solid var(--card-border)',
        color: 'var(--text-primary)', transition: 'all 0.2s ease',
      }}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
