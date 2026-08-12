import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { useGsapSingleReveal } from '../hooks/useGsapReveal';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioTeaserProps {
  onNavigatePortfolio: () => void;
}

export const PortfolioTeaser: React.FC<PortfolioTeaserProps> = ({ onNavigatePortfolio }) => {
  const { t } = useLanguage();
  const sectionRef = useGsapSingleReveal({ y: 50, scale: 0.97, duration: 1, ease: 'power3.out' });

  return (
    <section className="py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className="relative rounded-3xl glass-card p-8 sm:p-14 overflow-hidden group"
          style={{ opacity: 0 }}
        >
          {/* Inner glow top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-orange-500/8 to-transparent" />

          {/* Right ambient glow */}
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl group-hover:w-80 group-hover:opacity-90 transition-all duration-700 pointer-events-none" />

          {/* Faint UI Fragment Shapes */}
          <div className="absolute inset-0 pointer-events-none opacity-8 overflow-hidden">
            <div className="absolute top-6 right-16 w-40 h-24 rounded-xl border border-white/30" />
            <div className="absolute bottom-6 left-1/3 w-32 h-16 rounded-lg border border-orange-500/30">
              <div className="m-2 h-1.5 rounded bg-orange-500/20 mb-1" />
              <div className="mx-2 h-1.5 rounded bg-white/10 w-1/2" />
            </div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full border border-amber-400/20" />
            <div className="absolute -top-4 left-1/4 w-48 h-1 bg-gradient-to-r from-orange-500/30 to-transparent rounded" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="section-badge">
                <Sparkles className="w-3 h-3" />
                SELECTED WORK
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t.portfolioBanner.heading}
              </h2>
              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-md">
                {t.portfolioBanner.subtitle}
              </p>
            </div>

            <button
              onClick={onNavigatePortfolio}
              className="btn-shine shrink-0 inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold text-sm sm:text-base shadow-xl shadow-orange-500/25 hover:shadow-orange-500/45 hover:scale-[1.04] transition-all duration-300 whitespace-nowrap"
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
