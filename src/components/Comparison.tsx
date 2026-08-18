import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { X, Check } from 'lucide-react';

export const Comparison: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useGsapReveal({ y: 40, duration: 0.9, stagger: 0.1 });

  return (
    <section
      id="comparison"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 80% 50%, rgba(232,100,47,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 gsap-child">
          <div className="section-badge inline-flex mb-5">
            {t.comparison.eyebrow}
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ letterSpacing: '-0.025em' }}
          >
            {t.comparison.title}
          </h2>
        </div>

        {/* Comparison table inside glass panel */}
        <div className="glass-feature overflow-hidden gsap-child">
          {/* Column headers */}
          <div className="grid grid-cols-3 border-b border-white/8">
            <div className="col-span-1 px-6 py-5" />
            <div className="col-span-1 px-6 py-5 border-l border-white/8">
              <span className="text-xs font-mono font-semibold tracking-widest text-zinc-500 uppercase">
                {t.comparison.agencyTitle}
              </span>
            </div>
            <div className="col-span-1 px-6 py-5 border-l border-white/8 bg-[#FFC069]/5">
              <span className="text-xs font-mono font-semibold tracking-widest text-[#FFC069] uppercase">
                {t.comparison.gustavoTitle}
              </span>
            </div>
          </div>

          {/* Rows */}
          {t.comparison.rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-b border-white/6 last:border-0 transition-colors hover:bg-white/[0.02]`}
            >
              {/* Feature label */}
              <div className="col-span-1 px-6 py-5 flex items-start">
                <span className="text-xs font-mono font-semibold tracking-wider text-zinc-500 uppercase">
                  {row.feature}
                </span>
              </div>

              {/* Agency cell */}
              <div className="col-span-1 px-6 py-5 border-l border-white/6 flex items-start gap-3">
                <X className="w-3.5 h-3.5 text-zinc-600 mt-0.5 shrink-0" />
                <span className="text-sm text-zinc-500 leading-relaxed">{row.agency}</span>
              </div>

              {/* Gustavo cell */}
              <div className="col-span-1 px-6 py-5 border-l border-white/6 bg-[#FFC069]/[0.03] flex items-start gap-3">
                <Check className="w-3.5 h-3.5 text-[#FFC069] mt-0.5 shrink-0" />
                <span className="text-sm text-white leading-relaxed font-medium">{row.gustavo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
