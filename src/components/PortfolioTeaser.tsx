import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Layers, Layout, Sparkles } from 'lucide-react';

interface PortfolioTeaserProps {
  onNavigatePortfolio: () => void;
}

export const PortfolioTeaser: React.FC<PortfolioTeaserProps> = ({ onNavigatePortfolio }) => {
  const { t } = useLanguage();

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 overflow-hidden group shadow-2xl">
          
          {/* Subtle Inner & Border Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Faint Floating UI Fragment Overlay Shapes */}
          <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden">
            <div className="absolute top-4 right-12 w-48 h-32 rounded-xl border border-white/40 flex items-center justify-center">
              <Layout className="w-12 h-12 text-white/50" />
            </div>
            <div className="absolute bottom-4 left-1/3 w-40 h-24 rounded-lg border border-orange-500/40 p-2">
              <div className="w-full h-2 rounded bg-orange-500/30 mb-2" />
              <div className="w-2/3 h-2 rounded bg-white/20" />
            </div>
            <div className="absolute -bottom-6 right-1/4 w-32 h-32 rounded-full border border-amber-400/30" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SELECTED WORK</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {t.portfolioBanner.heading}
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {t.portfolioBanner.subtitle}
              </p>
            </div>

            <button
              onClick={onNavigatePortfolio}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold text-sm sm:text-base shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all whitespace-nowrap"
            >
              <Layers className="w-4 h-4" />
              <span>{t.portfolioBanner.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
