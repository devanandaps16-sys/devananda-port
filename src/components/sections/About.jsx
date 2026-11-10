import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { aboutData, statsData, personalData } from '../../data';
import StatCounter from '../common/StatCounter';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeIn}
        className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
      >
        <span className="text-xs uppercase font-bold tracking-widest text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/60 px-4 py-1.5 rounded-full inline-block mb-3">
          {aboutData.subheading}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
          {aboutData.heading}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {aboutData.intro}
        </p>
      </motion.div>

      {/* 4 Animated Stat Counters Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
        {statsData.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-sky-400 mb-2">
              <StatCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm sm:text-base">
              {stat.label}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Main Narrative & Education Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
        {/* Left Column: Personal Narrative */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeIn}
          className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm"
        >
          <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sky-500" />
              <span>Passion for Intelligent Systems</span>
            </h3>
            {aboutData.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {aboutData.highlights.map((h, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-navy-900 dark:text-sky-300 uppercase tracking-wide">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                  <span>{h.title}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: College & Education Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeIn}
          className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-850 text-white shadow-xl relative overflow-hidden"
        >
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-sky-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                  Current Degree Program
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  {aboutData.education.degree}
                </h4>
              </div>
            </div>

            <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">
                    {aboutData.education.college}
                  </div>
                  <div className="text-xs text-slate-300">
                    {aboutData.education.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300 pt-2 border-t border-white/10">
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Affiliated with {aboutData.education.university}</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                <span>Key Coursework &amp; Labs</span>
              </span>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {aboutData.education.coursework.map((course, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <span>Status: {aboutData.education.status}</span>
            <span className="font-mono text-sky-300">{aboutData.education.duration}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

