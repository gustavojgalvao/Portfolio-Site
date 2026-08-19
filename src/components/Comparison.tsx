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
      className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
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

        {/* ── MOBILE: stacked cards per row ──────────────────── */}
        <div className="md:hidden glass-feature overflow-hidden rounded-3xl border border-white/10 gsap-child divide-y divide-white/6">
          {t.comparison.rows.map((row, i) => (
            <div key={i} className="p-4 space-y-3">
              {/* Criterion label */}
              <span className="text-[11px] font-mono font-semibold text-zinc-400 uppercase tracking-widest block">
                {row.feature}
              </span>
              {/* Two comparison blocks */}
              <div className="grid grid-cols-2 gap-2">
                {/* Agency */}
                <div className="p-3 rounded-xl bg-white/3 border border-white/6 opacity-60 space-y-1.5">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 uppercase block">
                    {t.comparison.agencyTitle}
                  </span>
                  <div className="flex items-start gap-1.5">
                    <X className="w-3.5 h-3.5 text-zinc-600 mt-0.5 shrink-0" />
                    <span className="text-[11px] text-zinc-500 leading-relaxed">{row.agency}</span>
                  </div>
                </div>
                {/* Gustavo */}
                <div className="p-3 rounded-xl bg-[#FFC069]/5 border-[1px] border-solid border-[#E8642F] drop-shadow-[0_0_10px_rgba(232,100,47,0.3)] space-y-1.5">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#FFC069] uppercase block">
                    {t.comparison.gustavoTitle}
                  </span>
                  <div className="flex items-start gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FFC069]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2 h-2 text-[#FFC069]" />
                    </span>
                    <span className="text-[11px] text-white leading-relaxed font-medium">{row.gustavo}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP: 3-column grid ──────────────────────────── */}
        <div className="hidden md:block glass-feature overflow-hidden rounded-3xl border border-white/10 gsap-child">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 border-b border-white/8">
            <div className="col-span-4 p-5 sm:p-6 flex items-center">
              <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                Critério
              </span>
            </div>
            <div className="col-span-4 p-5 sm:p-6 border-l border-white/6 opacity-40 hover:opacity-75 transition-opacity flex items-center gap-2">
              <span className="text-[11px] font-mono font-semibold tracking-wider text-zinc-500 uppercase">
                {t.comparison.agencyTitle}
              </span>
            </div>
            <div className="col-span-4 p-5 sm:p-6 border-l-[1px] border-solid border-[#E8642F] drop-shadow-[0_0_15px_rgba(232,100,47,0.3)] bg-gradient-to-b from-[#FFC069]/10 to-[#E8642F]/[0.04] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#FFC069] uppercase">
                  {t.comparison.gustavoTitle}
                </span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-[#FFC069]" />
            </div>
          </div>

          {/* Table Rows */}
          {t.comparison.rows.map((row, i) => (
            <div key={i} className="grid grid-cols-12 border-b border-white/6 last:border-0 transition-colors">
              <div className="col-span-4 p-5 sm:p-6 flex items-center">
                <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                  {row.feature}
                </span>
              </div>
              <div className="col-span-4 p-5 sm:p-6 border-l border-white/6 opacity-40 hover:opacity-75 transition-opacity flex items-start gap-2">
                <span className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
                  {row.agency}
                </span>
              </div>
              <div className="col-span-4 p-5 sm:p-6 border-l-[1px] border-solid border-[#E8642F] drop-shadow-[0_0_15px_rgba(232,100,47,0.3)] bg-gradient-to-r from-[#FFC069]/[0.05] via-[#E8642F]/[0.02] to-transparent flex items-start gap-2.5">
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
