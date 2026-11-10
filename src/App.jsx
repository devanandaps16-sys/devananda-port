import { useLenis } from './hooks/useLenis';
import { useTheme } from './hooks/useTheme';
import CustomCursor from './components/common/CustomCursor';
import ScrollProgress from './components/common/ScrollProgress';
import BackgroundGlow from './components/common/BackgroundGlow';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Journey from './components/sections/Journey';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

export default function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  // Dark/Light theme manager
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-ice-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative selection:bg-sky-500 selection:text-white">
      {/* Desktop Magnetic Follower Cursor */}
      <CustomCursor />

      {/* Atmospheric Cursor Glow & Mesh */}
      <BackgroundGlow />

      {/* Top Fixed Scroll Progress */}
      <ScrollProgress />

      {/* Sticky Blur Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Layout */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Blog />
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}

