import { Link, useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { Play } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar-glass"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '14px 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 16,
      }}
    >
      <Link to="/"><Logo /></Link>

      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }} className="hide-on-mobile">
        <a href="#home" style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>الرئيسية</a>
        <a href="#how" style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>طريقة اللعب</a>
        <a href="#categories" style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>الفئات</a>
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <ThemeToggle />
        <button className="btn-primary" onClick={() => navigate('/play')}>
          <Play size={16} fill="white" />
          ابدأ اللعب
        </button>
      </div>
    </nav>
  );
}
