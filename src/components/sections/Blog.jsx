import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Calendar, ArrowRight, X } from 'lucide-react';
import { blogData } from '../../data';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="blog" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <span className="text-xs uppercase font-bold tracking-widest text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/60 px-4 py-1.5 rounded-full inline-block mb-3">
          Insights &amp; Notes
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
          Learning Reflections
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Notes on mathematical foundations, machine learning breakthroughs, and engineering practices.
        </p>
      </div>

      {/* Blog Cards Container */}
      <div className="max-w-2xl mx-auto">
        {blogData.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            onClick={() => setActiveArticle(post)}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5"
          >
            <div>
              {/* Category & Read Time */}
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span className="font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-3 py-1 rounded-full border border-sky-200/60 dark:border-sky-800/60">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-3 leading-snug">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer Meta */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="text-sky-600 dark:text-sky-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read article
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[85vh] overflow-y-auto relative"
            >
              <button
                onClick={() => setActiveArticle(null)}
                aria-label="Close modal"
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                <span className="font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-3 py-1 rounded-full">
                  {activeArticle.category}
                </span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white mb-4">
                {activeArticle.title}
              </h3>

              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-base leading-relaxed space-y-4">
                <p className="font-medium text-lg text-slate-800 dark:text-slate-200">
                  {activeArticle.excerpt}
                </p>
                <p>
                  As an engineering student at Thejus Engineering College (KTU), exploring the bridge between theoretical mathematics and practical algorithms is one of the most rewarding pursuits. Whether calculating gradients or analyzing big-O complexity, every concept builds an essential layer for understanding modern intelligence.
                </p>
                <p>
                  In this piece, we explore practical takeaways from implementing these ideas from scratch in Python, examining both the analytical reasoning and the engineering trade-offs required for performant systems.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-navy-900 text-white dark:bg-sky-500 dark:text-slate-950 font-semibold text-sm hover:opacity-90"
                >
                  Done reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

