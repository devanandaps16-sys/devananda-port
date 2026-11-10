import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Cpu,
  Coffee,
  FileCode,
  Database,
  Binary,
  Sheet,
  Brain,
  BarChart3,
  Network,
  Atom,
  Palette,
  Layout,
  Sparkles,
  Zap,
  GitBranch,
  Terminal,
  BookOpen,
  Shield,
  PenTool,
  Layers,
} from 'lucide-react';
import { skillsData } from '../../data';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Icon mapper for dynamic icons
const iconMap = {
  Code2,
  Cpu,
  Coffee,
  FileCode,
  Database,
  Binary,
  Sheet,
  Brain,
  BarChart3,
  Network,
  Atom,
  Palette,
  Layout,
  Sparkles,
  Zap,
  GitBranch,
  Terminal,
  BookOpen,
  Shield,
  PenTool,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const prefersReducedMotion = useReducedMotion();

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredCategories =
    activeTab === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/60 px-4 py-1.5 rounded-full inline-block mb-3">
          Technical Toolkit
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
          Skills &amp; Competencies
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
          A balance of low-level algorithms, machine learning workflows, and reactive frontend engineering.
        </p>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-navy-900 text-white dark:bg-sky-500 dark:text-slate-950 shadow-md scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grouped Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredCategories.map((group) => (
            <motion.div
              layout
              key={group.category}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white">
                  {group.category}
                </h3>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  {group.skills.length} skills
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                {group.description}
              </p>

              {/* Skills Items */}
              <div className="space-y-4">
                {group.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-sky-50/50 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-xs border border-slate-100 dark:border-slate-800">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-slate-700/60">
                          {skill.tag}
                        </span>
                      </div>

                      {/* Proficiency bar */}
                      <div className="w-full bg-slate-200/70 dark:bg-slate-700/60 h-1.5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-navy-900 via-sky-600 to-sky-400 dark:from-sky-500 dark:to-cyan-400 rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

