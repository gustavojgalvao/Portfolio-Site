import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGsapReveal } from '../hooks/useGsapReveal';
import {
  MessageSquare,
  Check,
  Globe,
  Bot,
  TrendingUp,
  Zap,
  ShieldCheck,
} from 'lucide-react';

export const PlanOverview: React.FC = () => {
  const { language, t } = useLanguage();
  const containerRef = useGsapReveal({ y: 35, duration: 0.85, stagger: 0.1 });

  const whatsappUrl =
    'https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=' +
    encodeURIComponent(
      language === 'en'
        ? "Hi Gustavo! I'd like to talk about getting started with the monthly plan."
        : 'Olá Gustavo! Gostaria de conversar sobre o plano mensal.'
    );

  const heroCard = t.planOverview.heroCard;
  const bentoCards = t.planOverview.bentoCards;

  const bentoIcons = [Globe, Bot, TrendingUp];
  const bentoGradients = [
    { text: '#FFC069', border: 'rgba(255, 192, 105, 0.25)', bg: 'rgba(255, 192, 105, 0.06)' },
    { text: '#E8642F', border: 'rgba(232, 100, 47, 0.25)', bg: 'rgba(232, 100, 47, 0.06)' },
    { text: '#c9a05a', border: 'rgba(201, 160, 90, 0.25)', bg: 'rgba(201, 160, 90, 0.06)' },
  ];

  return (
    <section
      id="plan"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]"
    >
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(232,100,47,0.05) 0%, rgba(255,192,105,0.03) 40%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 gsap-child">
          <div className="section-badge inline-flex mb-4">
            {t.planOverview.eyebrow}
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mx-auto tracking-tight leading-[1.15]"
            style={{ letterSpacing: '-0.025em' }}
          >
            {t.planOverview.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 max-w-xl mx-auto">
            {t.planOverview.subtitle}
          </p>
        </div>

        {/* ─── ASYMMETRIC BENTO GRID ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 gsap-child">
          
          {/* ── TOP HERO CARD (Spans full 3 columns) ───────────── */}
          <div className="lg:col-span-3 rounded-3xl p-6 sm:p-10 glass-feature border border-white/10 relative overflow-hidden group">
            {/* Ambient inner rim glow */}
            <div
              className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-700"
              style={{
                background: 'radial-gradient(circle, rgba(255,192,105,0.2) 0%, rgba(232,100,47,0.1) 60%, transparent 80%)',
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#FFC069]/10 border border-[#FFC069]/25 text-[#FFC069]">
                  <Zap className="w-3 h-3" />
                  <span>{heroCard.tag}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {heroCard.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  {heroCard.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {heroCard.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-[#FFC069]/15 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#FFC069]" />
                      </span>
                      <span className="text-xs sm:text-sm text-zinc-400 leading-snug">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual Highlight Metric */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-xs rounded-2xl p-5 glass-card border border-white/12 space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                      {heroCard.statLabel}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {heroCard.statValue}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                      Instant Load
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/8 text-[11px] font-mono text-zinc-400">
                    <div className="flex justify-between">
                      <span>Time to Interactive</span>
                      <span className="text-white font-semibold">0.4s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Core Web Vitals</span>
                      <span className="text-emerald-400 font-semibold">Passed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Architecture</span>
                      <span className="text-[#FFC069] font-semibold">React + TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM 3 ASYMMETRIC BENTO CARDS ───────────────── */}
          {bentoCards.map((card, idx) => {
            const Icon = bentoIcons[idx] || Check;
            const style = bentoGradients[idx] || bentoGradients[0];

            return (
              <div
                key={idx}
                className="rounded-3xl p-6 sm:p-7 glass-card border border-white/8 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300 text-left group"
              >
                <div className="space-y-4">
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: style.bg, border: `1px solid ${style.border}` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: style.text }} />
                    </div>

                    <span
                      className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ background: style.bg, color: style.text }}
                    >
                      {card.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 pt-2 border-t border-white/6">
                    {card.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                        <span
                          className="mt-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: style.bg }}
                        >
                          <Check className="w-2.5 h-2.5" style={{ color: style.text }} />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card subtle bottom badge */}
                <div className="pt-2 border-t border-white/6 flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Incluso no plano mensal</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote & Primary Plan CTA */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-white/8 flex flex-col sm:flex-row items-center justify-between gap-5 gsap-child">
          <p className="text-xs sm:text-sm text-zinc-400 text-center sm:text-left max-w-lg">
            {t.planOverview.footnote}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm py-2.5 px-6 shrink-0 shadow-lg shadow-orange-500/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.planOverview.cta}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlanOverview;
