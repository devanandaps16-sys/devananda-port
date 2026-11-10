import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, personalData } from '../../data';
import MagneticButton from '../common/MagneticButton';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo matching "Elina" clean typography */}
        <a
          href="#"
          className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg py-1 px-1"
          aria-label="Devananda Portfolio Home"
        >
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-navy-900 dark:text-white transition-colors duration-200">
            {personalData.name}
          </span>
          <span className="w-2 h-2 rounded-full bg-sky-500 group-hover:scale-150 transition-transform duration-300"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <MagneticButton key={link.name} strength={0.2}>
              <a
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-navy-900 dark:text-slate-300 dark:hover:text-white rounded-full transition-colors relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            </MagneticButton>
          ))}

          <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2" />

          {/* Theme Toggle Button */}
          <MagneticButton strength={0.3}>
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-full text-slate-700 hover:text-navy-900 dark:text-slate-300 dark:hover:text-white bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4 text-slate-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </MagneticButton>

          {/* Quick CTA */}
          <a
            href="#contact"
            className="ml-2 hidden lg:inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy-900 bg-ice-200 hover:bg-sky-200 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 rounded-full transition-all shadow-sm hover:shadow"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-full text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden fixed inset-x-0 top-[65px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl px-6 py-8"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-xl font-semibold text-slate-800 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 py-1 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </motion.a>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full bg-navy-900 text-white dark:bg-sky-400 dark:text-slate-950 font-semibold text-sm shadow-md"
                >
                  Get in touch
                </a>
                <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                  {personalData.college}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

