import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import SetupPage from '@/pages/SetupPage';
import BoardPage from '@/pages/BoardPage';
import QuestionPage from '@/pages/QuestionPage';
import { useThemeStore } from '@/store/themeStore';

export default function App() {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/play" element={<SetupPage />} />
      <Route path="/play/board" element={<BoardPage />} />
      <Route path="/play/board/question/:questionId" element={<QuestionPage />} />
    </Routes>
  );
}
