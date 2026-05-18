import { useEffect, useState } from 'react';

/**
 * Returns true once the Zustand persisted store has rehydrated from sessionStorage.
 * We wait one tick after mount to let zustand's persist middleware restore state.
 */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // One RAF ensures the store has rehydrated before we read from it
    const raf = requestAnimationFrame(() => {
      setHydrated(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return hydrated;
}
