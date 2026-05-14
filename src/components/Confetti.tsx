import { useMemo } from 'react';

const COLORS = ['#16C784', '#10B981', '#F59E0B', '#3B82F6', '#EC4899', '#8B5CF6'];

export default function Confetti({ count = 80 }: { count?: number }) {
  const pieces = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      color: COLORS[i % COLORS.length],
      size: 6 + Math.random() * 8,
    }));
  }, [count]);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 60 }}>
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            top: -20,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: 2,
            animation: `confettiFall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
