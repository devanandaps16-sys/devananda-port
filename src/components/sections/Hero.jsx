import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles, Code2, ExternalLink } from 'lucide-react';
import { personalData } from '../../data';
import MagneticButton from '../common/MagneticButton';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  // Words for staggered headline animation
  const headlineWords = personalData.heroHeadline.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 120,
      },
    },
  };

  return (
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Signature Navy Hero Container inspired by Elina template */}
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden bg-navy-900 text-slate-100 rounded-3xl sm:rounded-4xl lg:rounded-5xl shadow-2xl p-6 sm:p-10 lg:p-14 border border-navy-800/80"
      >
        {/* Subtle Ambient Background Lighting & Orbs */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />

        {/* Decorative Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Portrait image with rounded corners */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] group"
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-400/20 via-indigo-500/20 to-transparent rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-70" />

              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl bg-navy-950 aspect-[4/5] flex items-center justify-center">
                <img
                  src={personalData.portraitImage}
                  alt={`${personalData.name} - Portrait`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Glass Tag at bottom of portrait */}
                <div className="absolute bottom-4 inset-x-4 p-3 bg-navy-950/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-semibold text-slate-200">
                      Open to Tech Internships
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-sky-400">
                    KTU S2
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small Italic Subtitle (like "12+ years of experience" in screenshot) */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 mb-4 sm:mb-6"
            >
              <span className="font-serif italic text-base sm:text-lg lg:text-xl text-sky-200 tracking-wide">
                {personalData.roleItalic}
              </span>
              <span className="w-8 h-[1px] bg-sky-300/40 hidden sm:inline-block"></span>
            </motion.div>

            {/* Large Bold Headline (Staggered Word Reveal) */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.1] mb-6"
            >
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl mb-8 sm:mb-10"
            >
              {personalData.heroDescription}
            </motion.p>

            {/* Call-to-action buttons (matching "Book now" pill button in screenshot) */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {/* Primary Pill Button: "View my work" (powder ice-blue like Book now) */}
              <MagneticButton strength={0.3}>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-ice-200 hover:bg-white text-navy-900 font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg hover:shadow-cyan-500/20 active:scale-95"
                >
                  <span>View my work</span>
                  <ArrowDown className="w-4 h-4 ml-2 animate-bounce" />
                </a>
              </MagneticButton>

              {/* Secondary Pill Button: "Download CV" */}
              <MagneticButton strength={0.25}>
                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm sm:text-base border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all active:scale-95"
                >
                  <Download className="w-4 h-4 mr-2 text-sky-400" />
                  <span>Download CV</span>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Quick Micro Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-sky-400" />
                <span>Python • C • React</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>AI &amp; Machine Learning</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="text-slate-300 hidden sm:inline">
                KTU Affiliated
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

