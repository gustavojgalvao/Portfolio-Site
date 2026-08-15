import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useLoading } from '../context/LoadingContext';
import { MessageSquare, Globe, ExternalLink } from 'lucide-react';

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
  const { triggerLoading } = useLoading();
  const [scrolled, setScrolled] = useState(false);

  const handleToggleLanguage = () => {
    triggerLoading(() => {
      toggleLanguage();
    }, 3000);
  };

  const whatsappUrl =
    'https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=' +
    encodeURIComponent(
      language === 'en'
        ? "Hi Gustavo! I'd like to discuss starting a project."
        : 'Olá Gustavo! Gostaria de conversar sobre iniciar um projeto.'
    );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (currentRoute === 'portfolio' && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-black/60 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Empty / Clean spacing as requested */}
        <div className="flex items-center">
          {currentRoute === 'portfolio' && onNavigateHome && (
            <button
              onClick={onNavigateHome}
              className="text-xs font-mono text-zinc-400 hover:text-orange-400 transition-colors"
            >
              ← {language === 'en' ? 'Back to Landing Page' : 'Voltar para Início'}
            </button>
          )}
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-orange-400 transition-colors"
          >
            {language === 'en' ? 'Home' : 'Início'}
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-orange-400 transition-colors"
          >
            {t.nav.services}
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="hover:text-orange-400 transition-colors"
          >
            {t.nav.work}
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="hover:text-orange-400 transition-colors"
          >
            {t.nav.pricing}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-orange-400 transition-colors"
          >
            {t.nav.about}
          </button>

          {/* Full Portfolio Button */}
          <button
            onClick={onNavigatePortfolio}
            className="text-orange-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-1"
          >
            <span>{language === 'en' ? 'Full Portfolio' : 'Portfólio Completo'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Right: Language Switcher & WhatsApp CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={handleToggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-orange-400" />
            <span className="font-bold text-orange-400">{language.toUpperCase()}</span>
            <span className="text-zinc-600">|</span>
            <span>{language === 'en' ? 'PT' : 'EN'}</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/20 hover:scale-105 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>{t.nav.cta}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
