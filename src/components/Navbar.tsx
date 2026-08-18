import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Globe, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentRoute?: 'home' | 'portfolio';
  onNavigatePortfolio?: () => void;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute = 'home',
  onNavigatePortfolio,
  onNavigateHome,
}) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl =
    'https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=' +
    encodeURIComponent(
      language === 'en'
        ? "Hi Gustavo! I'd like to book a call to talk about your plan."
        : 'Olá Gustavo! Gostaria de agendar uma conversa sobre o plano.'
    );

  // Scroll detection with hysteresis to prevent rapid flickering
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const top = window.scrollY;
          // Hysteresis window: triggers down at 45px, resets up at 15px
          if (top > 45) {
            setScrolled(true);
          } else if (top < 15) {
            setScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavHome = () => {
    if (currentRoute === 'portfolio' && onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleNavPortfolio = () => {
    if (onNavigatePortfolio) onNavigatePortfolio();
    setMenuOpen(false);
  };

  const scrollTo = (id: string) => {
    if (currentRoute === 'portfolio' && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none flex justify-center w-full">
      {/* 
        Dynamic Island Morph Container:
        Uses GPU-accelerated cubic-bezier transitions for silky smooth 60-120fps morphing 
        between full-width docked navbar and detached floating rounded pill.
      */}
      <div
        className={`pointer-events-auto flex items-center justify-between w-full backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'mt-3 sm:mt-4 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-5xl lg:max-w-6xl rounded-full py-2 px-4 sm:px-6 bg-[#08080c]/85 border border-white/16 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(255,192,105,0.06),inset_0_1px_1px_rgba(255,255,255,0.15)]'
            : 'mt-0 w-full max-w-none rounded-none py-4 px-5 sm:px-8 lg:px-12 bg-[#050505]/75 border-b border-white/8 border-t-0 border-x-0 shadow-none'
        }`}
      >
        <div className={`w-full flex items-center justify-between gap-3 sm:gap-6 ${!scrolled ? 'max-w-7xl mx-auto' : ''}`}>
          
          {/* Left: Dynamic Island Brand + Active Sensor Indicator */}
          <button
            onClick={handleNavHome}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none shrink-0"
            aria-label="Voltar para início"
          >
            {/* Dynamic Island Indicator Dot */}
            <div className="relative flex items-center justify-center w-5 h-5">
              <span className="absolute w-3 h-3 rounded-full bg-[#FFC069]/35 animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-[#FFC069] shadow-[0_0_8px_#FFC069]" />
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

          {/* Center Navigation Links (desktop) */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {currentRoute === 'home' ? (
              <>
                <button
                  onClick={() => scrollTo('plan')}
                  className="text-xs xl:text-[13px] font-medium text-zinc-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'The Plan' : 'O Plano'}
                </button>
                <button
                  onClick={() => scrollTo('features')}
                  className="text-xs xl:text-[13px] font-medium text-zinc-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'Features' : 'Recursos'}
                </button>
                <button
                  onClick={() => scrollTo('process')}
                  className="text-xs xl:text-[13px] font-medium text-zinc-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'How it Works' : 'Como Funciona'}
                </button>
                <button
                  onClick={() => scrollTo('about')}
                  className="text-xs xl:text-[13px] font-medium text-zinc-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'About' : 'Sobre'}
                </button>
                <button
                  onClick={() => scrollTo('faq')}
                  className="text-xs xl:text-[13px] font-medium text-zinc-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </>
            ) : (
              <button
                onClick={handleNavHome}
                className="text-xs xl:text-[13px] font-mono text-zinc-400 hover:text-[#FFC069] px-3.5 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
              >
                ← {language === 'en' ? 'Back to Landing Page' : 'Voltar para Início'}
              </button>
            )}
          </nav>

          {/* Right: Actions (Portfolio, Language, CTA) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Portfolio Link Button */}
            <button
              onClick={handleNavPortfolio}
              className={`hidden sm:inline-flex items-center gap-1 text-xs xl:text-[13px] font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                currentRoute === 'portfolio'
                  ? 'bg-[#FFC069]/15 border border-[#FFC069]/30 text-[#FFC069]'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{t.nav.portfolio}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FFC069]" />
            </button>

            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 text-[11px] xl:text-xs font-mono font-semibold px-2.5 sm:px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all duration-200 cursor-pointer"
              aria-label="Alterar idioma"
            >
              <Globe className="w-3.5 h-3.5 text-[#FFC069]" />
              <span>{t.nav.langToggle}</span>
            </button>

            {/* Primary CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs xl:text-[13px] py-2 px-3.5 sm:px-5 gap-1.5 rounded-full shadow-lg shadow-orange-500/15 hover:shadow-orange-500/30"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.nav.cta}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="lg:hidden flex flex-col items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-zinc-300 p-1.5 cursor-pointer"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Abrir menu"
            >
              <div className="flex flex-col gap-1 w-4">
                <span
                  className={`block h-0.5 w-full bg-zinc-300 rounded-full transition-all duration-300 ${
                    menuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-zinc-300 rounded-full transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-zinc-300 rounded-full transition-all duration-300 ${
                    menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dynamic Island Expansion Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:hidden overflow-hidden pt-3 mt-2 border-t border-white/10 flex flex-col gap-2 w-full ${!scrolled ? 'max-w-7xl mx-auto' : ''}`}
            >
              {currentRoute === 'home' ? (
                <>
                  <button
                    onClick={() => scrollTo('plan')}
                    className="text-left text-xs font-medium text-zinc-300 hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/5"
                  >
                    {language === 'en' ? 'The Plan' : 'O Plano'}
                  </button>
                  <button
                    onClick={() => scrollTo('features')}
                    className="text-left text-xs font-medium text-zinc-300 hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/5"
                  >
                    {language === 'en' ? 'Features' : 'Recursos'}
                  </button>
                  <button
                    onClick={() => scrollTo('process')}
                    className="text-left text-xs font-medium text-zinc-300 hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/5"
                  >
                    {language === 'en' ? 'How it Works' : 'Como Funciona'}
                  </button>
                  <button
                    onClick={() => scrollTo('about')}
                    className="text-left text-xs font-medium text-zinc-300 hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/5"
                  >
                    {language === 'en' ? 'About' : 'Sobre'}
                  </button>
                  <button
                    onClick={() => scrollTo('faq')}
                    className="text-left text-xs font-medium text-zinc-300 hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/5"
                  >
                    FAQ
                  </button>
                </>
              ) : (
                <button
                  onClick={handleNavHome}
                  className="text-left text-xs font-mono text-zinc-300 hover:text-[#FFC069] py-1.5 px-2 rounded-lg hover:bg-white/5"
                >
                  ← {language === 'en' ? 'Back to Landing Page' : 'Voltar para Início'}
                </button>
              )}

              <button
                onClick={handleNavPortfolio}
                className="text-left text-xs font-semibold text-[#FFC069] py-1.5 px-2 rounded-lg hover:bg-white/5 flex items-center justify-between"
              >
                <span>{t.nav.portfolio}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
