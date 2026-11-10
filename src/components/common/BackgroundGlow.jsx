import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function BackgroundGlow() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const prefersReducedMotion = useReducedMotion();

  const smoothX = useSpring(-1000, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(-1000, { damping: 30, stiffness: 200 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [smoothX, smoothY, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Interactive Cursor Spotlight Glow */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-sky-400/8 via-indigo-500/6 to-cyan-300/8 blur-3xl pointer-events-none dark:from-sky-500/10 dark:via-indigo-500/8 dark:to-cyan-400/10"
      />

      {/* Static Atmospheric Gradient Blobs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sky-300/10 dark:bg-sky-600/10 rounded-full blur-[100px]" />
      <div className="absolute top-2/3 -right-48 w-96 h-96 bg-indigo-300/10 dark:bg-indigo-600/10 rounded-full blur-[100px]" />
    </div>
  );
}
