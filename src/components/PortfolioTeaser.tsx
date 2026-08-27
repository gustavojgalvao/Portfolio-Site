import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { ArrowRight, FolderGit2 } from 'lucide-react';

export const PortfolioTeaser: React.FC<{ onNavigatePortfolio: () => void }> = ({
  onNavigatePortfolio,
}) => {
  const { language, t } = useLanguage();
  const containerRef = useGsapReveal({ y: 40, duration: 0.9, stagger: 0.12 });

  return (
    <section
      id="portfolio-teaser"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,192,105,0.07) 0%, transparent 70%)
          `,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 gsap-child">
        {/* Main Glass Banner inviting the user to the dedicated Portfolio */}
        <div className="glass-feature px-5 sm:px-10 md:px-14 py-10 sm:py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.04] via-black/60 to-black/90 shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
          <div className="text-center md:text-left space-y-3 max-w-xl">
            <div className="section-badge inline-flex">

              <span>{language === 'en' ? 'PORTFOLIO & LAB' : 'PORTFÓLIO & LABORATÓRIO'}</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
              style={{ letterSpacing: '-0.025em' }}
            >
              {t.portfolioTeaser.heading}
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
              {t.portfolioTeaser.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onNavigatePortfolio}
              className="btn-primary"
            >
              <FolderGit2 className="w-5 h-5" />
              <span>{t.portfolioTeaser.cta}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTeaser;
