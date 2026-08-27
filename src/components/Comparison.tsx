import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { X, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

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

        {/* ─── SIDE-BY-SIDE BENTO CARDS ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 gsap-child">
          
          {/* ── Card 1: Traditional Agency ───────────────────────────── */}
          <Card className="relative overflow-hidden border-white/5 bg-white/[0.01] backdrop-blur-xl opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
            <CardHeader className="border-b border-white/5 pb-6">
              <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                {t.comparison.agencyTitle}
              </span>
              <CardTitle className="text-2xl text-zinc-400 mt-2">
                Agência Tradicional
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-6">
                {t.comparison.rows.map((row, i) => (
                  <li key={i} className="space-y-2">
                    <span className="text-[10px] font-mono font-semibold text-zinc-500 uppercase tracking-widest">
                      {row.feature}
                    </span>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                        <X className="w-3 h-3 text-red-500/70" />
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {row.agency}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* ── Card 2: Gustavo ─────────────────────────────────── */}
          <Card className="relative overflow-hidden glass-card shadow-[0_0_40px_rgba(232,100,47,0.1)] group">
            {/* Ambient inner glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-700" style={{ background: 'radial-gradient(circle, rgba(255,192,105,0.2) 0%, rgba(232,100,47,0.1) 60%, transparent 80%)' }} />
            
            <CardHeader className="border-b border-white/10 pb-6 relative z-10">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFC069] uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E8642F] animate-pulse" />
                {t.comparison.gustavoTitle}
              </span>
              <CardTitle className="text-2xl text-white mt-2">
                Gustavo
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 relative z-10">
              <ul className="space-y-6">
                {t.comparison.rows.map((row, i) => (
                  <li key={i} className="space-y-2">
                    <span className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-widest">
                      {row.feature}
                    </span>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#FFC069]/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#FFC069]" />
                      </div>
                      <p className="text-sm text-white font-medium leading-relaxed">
                        {row.gustavo}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
