import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Code, Rocket, BrainCircuit } from 'lucide-react';
import { journeyData } from '../../data';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Journey() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="journey" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
        <span className="text-xs uppercase font-bold tracking-widest text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/60 px-4 py-1.5 rounded-full inline-block mb-3">
          Evolution
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
          My Learning Journey
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
          From enrolling in KTU Computer Science &amp; Engineering (AI) to building intelligent autonomous applications.
        </p>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative pl-6 sm:pl-0">
        {/* Central glowing vertical track line on desktop, left on mobile */}
        <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-sky-400 via-indigo-500 to-sky-300/20" />

        <div className="space-y-12 sm:space-y-16">
          {journeyData.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Central Timeline Dot Marker */}
                <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 top-4 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-4 border-navy-900 dark:border-sky-400 flex items-center justify-center shadow-lg z-10">
                  <div className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
                </div>

                {/* Content Box */}
                <div
                  className={`w-full sm:w-[calc(50%-2.5rem)] ml-6 sm:ml-0 ${
                    isEven ? 'sm:text-right sm:pr-4' : 'sm:text-left sm:pl-4'
                  }`}
                >
                  <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                    <div
                      className={`flex items-center gap-2 mb-2 flex-wrap ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}
                    >
                      <span className="text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-3 py-1 rounded-full border border-sky-200/60 dark:border-sky-800/60">
                        {item.period}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                      {item.institution}
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

