import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-300 origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}

