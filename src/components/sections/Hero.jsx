import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles, Code2, Brain, MapPin, CheckCircle2 } from 'lucide-react';
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
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Signature Navy Hero Container inspired by Elina template */}
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden bg-navy-900 text-slate-100 rounded-3xl sm:rounded-4xl lg:rounded-5xl shadow-2xl p-6 sm:p-10 lg:p-14 border border-navy-800/80"
      >
        {/* Ambient Multi-Hue Lighting & Cosmic Glow Orbs */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl" />

        {/* Decorative Grid Matrix Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Modern UI/UX Portrait Canvas with Layered Glass Overlays */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] group"
            >
              {/* Ambient Multi-Layer Aura Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-teal-400/25 rounded-4xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-80" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-sky-400/20 rounded-full blur-xl pointer-events-none" />

              {/* High-Tech Editorial Corner Registration Crosshairs */}
              <span className="absolute -top-3 -left-3 text-sky-400/70 font-mono text-sm select-none pointer-events-none z-20">
                +
              </span>
              <span className="absolute -top-3 -right-3 text-sky-400/70 font-mono text-sm select-none pointer-events-none z-20">
                +
              </span>
              <span className="absolute -bottom-3 -left-3 text-sky-400/70 font-mono text-sm select-none pointer-events-none z-20">
                +
              </span>
              <span className="absolute -bottom-3 -right-3 text-sky-400/70 font-mono text-sm select-none pointer-events-none z-20">
                +
              </span>

              {/* Main Portrait Frame with Glass Border */}
              <div className="relative rounded-3xl sm:rounded-4xl p-2 bg-gradient-to-b from-white/20 via-sky-500/10 to-indigo-500/20 shadow-2xl backdrop-blur-xl border border-white/20">
                <div className="relative overflow-hidden rounded-[22px] sm:rounded-[28px] bg-navy-950 aspect-[4/5] flex items-center justify-center">
                  
                  {/* Portrait Image */}
                  <img
                    src={personalData.portraitImage}
                    alt={`${personalData.name} - Portrait`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />

                  {/* UI/UX Smooth Gradient Vignette & Edge Blend */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[22px] sm:rounded-[28px]" />

                  {/* Micro Tech Grid Overlay hint */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Top Floating Glass Badge: AI Engineer */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none z-10">
                    <div className="px-3 py-1.5 rounded-full bg-navy-950/80 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                      <span className="text-[11px] font-semibold text-white tracking-wide">
                        AI Specialist
                      </span>
                    </div>

                    <div className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-mono text-sky-300 font-bold uppercase tracking-widest">
                      KTU S2
                    </div>
                  </div>

                  {/* Bottom Floating Glass HUD Panel */}
                  <div className="absolute bottom-3.5 inset-x-3.5 p-3.5 rounded-2xl bg-navy-950/85 backdrop-blur-xl border border-white/15 shadow-2xl z-10">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-xs font-bold text-white tracking-wide">
                          Open to Internships
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-950/70 border border-sky-400/30 px-2 py-0.5 rounded-full">
                        CSE (AI)
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-slate-300">
                      <span className="truncate max-w-[170px] text-slate-300 font-medium">
                        Thejus Engg College
                      </span>
                      <span className="text-sky-300 font-mono text-[10px] flex items-center gap-1">
                        Thrissur 📍
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Satellite Glass Chip: Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="hidden sm:flex absolute -right-6 top-1/4 -translate-y-1/2 p-2.5 rounded-2xl bg-navy-900/90 backdrop-blur-xl border border-white/20 shadow-2xl items-center gap-2.5 text-xs font-semibold text-white z-20 animate-float-slow"
              >
                <div className="p-1.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Specialization</div>
                  <div className="text-xs font-bold text-sky-200">Neural Networks &amp; ML</div>
                </div>
              </motion.div>

              {/* Floating Satellite Glass Chip: Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75, duration: 0.7 }}
                className="hidden sm:flex absolute -left-6 bottom-16 p-2.5 rounded-2xl bg-navy-900/90 backdrop-blur-xl border border-white/20 shadow-2xl items-center gap-2.5 text-xs font-semibold text-white z-20"
              >
                <div className="p-1.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Core Stack</div>
                  <div className="text-xs font-bold text-indigo-200">Python • C++</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Modern Pill Badge above Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-sky-200 mb-4 sm:mb-5 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>{personalData.tagline}</span>
            </motion.div>

            {/* Small Italic Subtitle (inspired by Elina reference) */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 mb-4 sm:mb-6"
            >
              <span className="font-serif italic text-base sm:text-lg lg:text-xl text-sky-300 tracking-wide">
                {personalData.roleItalic}
              </span>
              <span className="w-10 h-[1px] bg-sky-400/40 hidden sm:inline-block"></span>
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
                  className={`inline-block mr-[0.25em] ${
                    word.toLowerCase() === 'curiosity' || word.toLowerCase() === 'code'
                      ? 'bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent'
                      : ''
                  }`}
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

            {/* Call-to-action buttons */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {/* Primary Pill Button: "Explore Portfolio" */}
              <MagneticButton strength={0.3}>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-ice-200 hover:bg-white text-navy-900 font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg hover:shadow-cyan-400/30 active:scale-95"
                >
                  <span>Explore Portfolio</span>
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
                <span>Python • C++</span>
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
