import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { X, Check, Sparkles } from 'lucide-react';

export const Comparison: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useGsapReveal({ y: 35, duration: 0.85, stagger: 0.1 });

  return (
    <section
      id="comparison"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 75% 50%, rgba(232,100,47,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14 gsap-child">
          <div className="section-badge inline-flex mb-4">
            {t.comparison.eyebrow}
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            style={{ letterSpacing: '-0.025em' }}
          >
            {t.comparison.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-lg mx-auto">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* ─── FOCAL CONTRAST TABLE ───────────────────────────── */}
        <div className="glass-feature overflow-hidden rounded-3xl border border-white/10 gsap-child">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 border-b border-white/8">
            <div className="col-span-4 sm:col-span-4 p-5 sm:p-6 flex items-center">
              <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                Critério
              </span>
            </div>

            {/* Traditional Agency (Dimmed Ghost Header) */}
            <div className="col-span-4 sm:col-span-4 p-5 sm:p-6 border-l border-white/6 opacity-40 hover:opacity-75 transition-opacity flex items-center gap-2">
              <span className="text-[11px] font-mono font-semibold tracking-wider text-zinc-500 uppercase">
                {t.comparison.agencyTitle}
              </span>
            </div>

            {/* Gustavo Direct (Elevated Spotlight Header) */}
            <div className="col-span-4 sm:col-span-4 p-5 sm:p-6 border-l border-[#FFC069]/30 bg-gradient-to-b from-[#FFC069]/10 to-[#E8642F]/[0.04] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#FFC069] uppercase">
                  {t.comparison.gustavoTitle}
                </span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-[#FFC069] hidden sm:block" />
            </div>
          </div>

          {/* Table Rows */}
          {t.comparison.rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-12 border-b border-white/6 last:border-0 transition-colors"
            >
              {/* Feature Label */}
              <div className="col-span-4 sm:col-span-4 p-5 sm:p-6 flex items-center">
                <span className="text-xs sm:text-sm font-mono font-semibold text-zinc-400">
                  {row.feature}
                </span>
              </div>

              {/* Agency Column (Dimmed Ghost Cell) */}
              <div className="col-span-4 sm:col-span-4 p-5 sm:p-6 border-l border-white/6 opacity-35 hover:opacity-70 transition-opacity flex items-start gap-2.5">
                <X className="w-4 h-4 text-zinc-600 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
                  {row.agency}
                </span>
              </div>

              {/* Gustavo Column (Spotlight Elevated Cell) */}
              <div className="col-span-4 sm:col-span-4 p-5 sm:p-6 border-l border-[#FFC069]/25 bg-gradient-to-r from-[#FFC069]/[0.05] via-[#E8642F]/[0.02] to-transparent flex items-start gap-2.5">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-[#FFC069]/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#FFC069] drop-shadow-[0_0_6px_#FFC069]" />
                </span>
                <span className="text-xs sm:text-sm text-white leading-relaxed font-medium">
                  {row.gustavo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
