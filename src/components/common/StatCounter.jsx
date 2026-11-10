import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function StatCounter({ value, suffix = '', duration = 2 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, value, {
      duration: duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {displayValue}
      {suffix}
    </span>
  );
}

