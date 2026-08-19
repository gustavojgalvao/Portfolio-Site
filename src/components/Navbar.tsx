import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Globe, ArrowUpRight, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ContactOptions } from './ui/ContactOptions';

interface NavbarProps {
  currentRoute?: 'home' | 'portfolio';
  onNavigatePortfolio?: () => void;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigatePortfolio,
  onNavigateHome,
}) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname === '/portfolio' ? 'portfolio' : 'home';

  // Lock body scroll when menu is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Scroll listener with hysteresis to avoid threshold bouncing
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const top = window.scrollY;
          if (top > 40) {
            setScrolled(true);
          } else if (top < 10) {
            setScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigatePortfolio = () => {
    setMenuOpen(false);
    if (onNavigatePortfolio) onNavigatePortfolio();
    navigate('/portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setMenuOpen(false);
    if (onNavigateHome) onNavigateHome();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (currentRoute !== 'home') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: t.nav.plan, id: 'plan' },
    { label: t.nav.services, id: 'features' },
    { label: t.nav.process, id: 'process' },
    { label: t.nav.about, id: 'about' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-2xl border-b border-white/8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[70px]">

            {/* Brand / Logo */}
            <button
              onClick={handleNavigateHome}
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none shrink-0"
              aria-label="Voltar para início"
            >
              <div className="flex items-center justify-center pt-0.5">
                <span className="text-[#FFC069] font-mono text-lg font-bold leading-none tracking-tighter">
                  //
                </span>
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-[14px] sm:text-[15px] font-extrabold tracking-tight text-white group-hover:text-[#FFC069] transition-colors duration-200">
                  Gustavo
                </span>
                <span className="text-[9px] font-mono text-zinc-500 tracking-widest uppercase leading-none hidden sm:block">
                  {t.nav.tagline}
                </span>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {currentRoute === 'portfolio' ? (
                <button
                  onClick={handleNavigateHome}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium text-zinc-400 hover:text-white hover:bg-white/6 transition-all duration-200"
                >
                  ← {t.nav.backHome}
                </button>
              ) : (
                navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-4 py-2 rounded-full text-[13px] font-medium text-zinc-400 hover:text-white hover:bg-white/6 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                ))
              )}
              <button
                onClick={handleNavigatePortfolio}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${
                  currentRoute === 'portfolio'
                    ? 'text-white bg-white/10'
                    : 'text-zinc-400 hover:text-white hover:bg-white/6'
                }`}
              >
                {t.nav.portfolio}
              </button>
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-mono font-bold text-zinc-500 hover:text-white border border-white/10 hover:border-white/25 bg-white/4 hover:bg-white/8 transition-all duration-200"
                aria-label="Toggle language"
              >
                <Globe className="w-3 h-3" />
                {language === 'en' ? 'PT' : 'EN'}
              </button>

              {/* CTA */}
              <ContactOptions variant="compact" />
            </div>

            {/* Mobile: Language + Hamburger */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-mono font-bold text-zinc-500 hover:text-white border border-white/10 bg-white/4 transition-all duration-200"
                aria-label="Toggle language"
              >
                <Globe className="w-3 h-3" />
                {language === 'en' ? 'PT' : 'EN'}
              </button>

              <button
                onClick={() => setMenuOpen(true)}
                className="relative flex flex-col items-center justify-center w-9 h-9 gap-1.5 rounded-lg text-zinc-300 hover:text-white transition-colors"
                aria-label="Open menu"
                aria-expanded={menuOpen}
              >
                <span className="block w-5 h-[1.5px] bg-current rounded-full" />
                <span className="block w-4 h-[1.5px] bg-current rounded-full ml-auto" />
                <span className="block w-5 h-[1.5px] bg-current rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99] md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#0a0a0d]/95 border-l border-white/8 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/8">
                <span className="text-sm font-mono text-zinc-400 tracking-widest uppercase">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/8 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 flex flex-col justify-center px-8 space-y-1">
                {currentRoute === 'portfolio' && (
                  <button
                    onClick={handleNavigateHome}
                    className="w-full text-left py-4 text-2xl font-bold text-zinc-400 hover:text-white transition-colors border-b border-white/6"
                  >
                    ← {t.nav.backHome}
                  </button>
                )}
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left py-4 text-2xl font-bold text-zinc-300 hover:text-white transition-colors border-b border-white/6"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={handleNavigatePortfolio}
                  className="w-full text-left py-4 text-2xl font-bold text-zinc-300 hover:text-white transition-colors border-b border-white/6"
                >
                  {t.nav.portfolio}
                </button>
                <Link
                  to="/privacy-policy"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-left py-4 text-xl font-medium text-zinc-500 hover:text-zinc-300 transition-colors border-b border-white/6"
                >
                  {language === 'en' ? 'Privacy Policy' : 'Política de Privacidade'}
                </Link>
              </div>

              {/* Bottom CTA */}
              <div className="p-6 border-t border-white/8 space-y-3">
                <ContactOptions variant="compact" className="w-full [&>div]:w-full [&_a]:w-full" />
                <a
                  href="https://www.linkedin.com/in/gustavogalvaoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-sm text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
