import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';

interface PortfolioPageProps {
  onBackHome: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBackHome }) => {
  const { t } = useLanguage();

  return (
    <div className="py-12 relative z-10 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={onBackHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-mono mb-8 transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-orange-400" />
          <span>{t.portfolioPage.backToHome}</span>
        </button>

        {/* Page Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            {t.portfolioPage.title}
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl">
            {t.portfolioPage.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.portfolioPage.projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              {/* Project Image Container */}
              <div className="relative aspect-video overflow-hidden bg-zinc-950">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-orange-300">
                  {proj.category}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {proj.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-orange-400 group-hover:text-amber-300 transition-colors"
                  >
                    <span>{proj.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
