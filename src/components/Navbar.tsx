import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Globe } from 'lucide-react';

interface NavbarProps {
  currentRoute?: string;
  onNavigatePortfolio?: () => void;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateHome,
}) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

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
    if (onNavigateHome) onNavigateHome();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
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
        {/* Left: Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
            G
          </div>
          <div>
            <span className="block text-base font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
              Gustavo Galvão
            </span>
            <span className="block text-[11px] font-mono text-zinc-400">
              {t.nav.role}
            </span>
          </div>
        </button>

        {/* Center: Anchor Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
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
          <button
            onClick={() => scrollToSection('faq')}
            className="hover:text-orange-400 transition-colors"
          >
            {t.nav.faq}
          </button>
        </nav>

        {/* Right: Language Switcher & WhatsApp CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={toggleLanguage}
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
            className="btn-shine flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/20 hover:scale-105 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.nav.cta}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
