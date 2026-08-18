import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { ArrowRight } from 'lucide-react';

interface PortfolioTeaserProps {
  onNavigatePortfolio: () => void;
}

export const PortfolioTeaser: React.FC<PortfolioTeaserProps> = ({ onNavigatePortfolio }) => {
  const { t } = useLanguage();
  const containerRef = useGsapReveal({ y: 40, duration: 0.9, stagger: 0.12 });

  return (
    <section
      id="portfolio-teaser"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Faint gooey glow peeking from edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 40% 60% at -5% 50%, rgba(232,100,47,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 105% 50%, rgba(255,192,105,0.07) 0%, transparent 70%)
          `,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 gsap-child">
        <div className="glass-feature px-8 sm:px-12 py-12 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="text-center sm:text-left space-y-3">
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white"
              style={{ letterSpacing: '-0.025em' }}
            >
              {t.portfolioTeaser.heading}
            </h2>
            <p className="text-base text-zinc-400 max-w-md">{t.portfolioTeaser.subtitle}</p>
          </div>

          <button
            onClick={onNavigatePortfolio}
            className="btn-primary shrink-0 text-sm sm:text-base group"
          >
            {t.portfolioTeaser.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
