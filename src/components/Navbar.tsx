import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Globe } from 'lucide-react';

interface NavbarProps {
  onNavigatePortfolio: () => void;
  onNavigateHome: () => void;
  currentRoute: 'home' | 'portfolio';
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigatePortfolio,
  onNavigateHome,
  currentRoute,
}) => {
  const { language, toggleLanguage, t } = useLanguage();

  const whatsappUrl =
    'https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=' +
    encodeURIComponent(
      language === 'en'
        ? "Hi Gustavo! I'd like to start a project with you."
        : 'Olá Gustavo! Gostaria de iniciar um projeto com você.'
    );

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 backdrop-blur-md bg-black/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform">
            G
          </div>
          <div>
            <span className="block text-lg font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
              Gustavo
            </span>
            <span className="block text-xs font-mono text-zinc-400 tracking-wide">
              {t.nav.role}
            </span>
          </div>
        </button>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* EN/PT Toggle Pill */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/50 text-xs font-mono text-zinc-300 hover:text-white transition-all"
            title="Switch Language / Alternar Idioma"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-orange-400" />
            <span className="font-bold text-orange-400">{language.toUpperCase()}</span>
            <span className="text-zinc-500">|</span>
            <span>{language === 'en' ? 'PT' : 'EN'}</span>
          </button>

          {/* Portfolio Link */}
          <button
            onClick={currentRoute === 'portfolio' ? onNavigateHome : onNavigatePortfolio}
            className={`text-sm font-medium transition-colors hover:text-orange-400 ${
              currentRoute === 'portfolio' ? 'text-orange-400 font-semibold' : 'text-zinc-300'
            }`}
          >
            {t.nav.portfolio}
          </button>

          {/* Solid CTA Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-black font-semibold text-xs sm:text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.nav.cta}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
