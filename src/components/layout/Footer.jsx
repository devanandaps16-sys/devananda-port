import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalData, navLinks } from '../../data';
import MagneticButton from '../common/MagneticButton';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between">
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">
                {personalData.name}
              </span>
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {personalData.tagline}. Studying Computer Science & Engineering (AI) at {personalData.college} (KTU).
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to top */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <MagneticButton strength={0.25}>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors inline-flex"
              >
                <Github className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors inline-flex"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href={`mailto:${personalData.email}`}
                aria-label="Send email"
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors inline-flex"
              >
                <Mail className="w-4 h-4" />
              </a>
            </MagneticButton>

            <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-800 mx-1" />

            {/* Back to top button */}
            <MagneticButton strength={0.35}>
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="p-2.5 rounded-full bg-navy-900 text-white dark:bg-sky-500 dark:text-slate-950 hover:opacity-90 transition-all shadow-sm"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> & curiosity
          </p>
        </div>
      </div>
    </footer>
  );
}

