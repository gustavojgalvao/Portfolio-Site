import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import GooeyLayer from './ui/GooeyLayer';
import { useGsapReveal } from '../hooks/useGsapReveal';

/* ── Site Speed / Core Web Vitals mockup ────────────────────── */
const BrowserMockup: React.FC = () => (
  <div
    className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl font-mono text-[11px]"
    style={{ background: 'rgba(8,8,12,0.95)' }}
    aria-hidden="true"
  >
    {/* Header bar */}
    <div className="px-4 py-3 border-b border-white/8 flex items-center gap-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#7A1610]/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#E8642F]/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
      </div>
      <div className="flex-1 h-5 rounded-full flex items-center px-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <span className="text-zinc-500 text-[10px] truncate">gustavogalvao.dev</span>
      </div>
    </div>

    {/* Lighthouse scores */}
    <div className="p-5 space-y-4">
      <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-3">Lighthouse · Production</div>
      {[
        { label: 'Performance', score: 99, color: '#4ade80' },
        { label: 'Accessibility', score: 97, color: '#4ade80' },
        { label: 'Best Practices', score: 100, color: '#4ade80' },
        { label: 'SEO', score: 100, color: '#4ade80' },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
            style={{ border: `2px solid ${item.color}`, color: item.color }}
          >
            {item.score}
          </div>
          <div className="flex-1 space-y-1">
            <div className="text-zinc-400 text-[10px]">{item.label}</div>
            <div className="h-1 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${item.score}%`, background: item.color, opacity: 0.4 }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── SEO / GEO metrics mockup ───────────────────────────────── */
const AnalyticsMockup: React.FC = () => (
  <div
    className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
    style={{ background: 'rgba(8,8,12,0.95)' }}
    aria-hidden="true"
  >
    <div className="p-4 border-b border-white/8 flex items-center justify-between bg-black/40">
      <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFC069] uppercase">Search Console · 90d</span>
      <span className="text-[10px] font-mono text-emerald-400">● Live</span>
    </div>

    <div className="p-5 space-y-5">
      {/* KPIs */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Impressões', value: '28.4k', delta: '+312%', up: true },
          { label: 'Cliques', value: '1.9k', delta: '+204%', up: true },
          { label: 'Posição Média', value: '#3.2', delta: '-5.8', up: true },
          { label: 'CTR', value: '6.7%', delta: '+2.1pp', up: true },
        ].map((m) => (
          <div key={m.label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider mb-1">{m.label}</div>
            <div className="text-base font-bold text-white font-mono">{m.value}</div>
            <div className="text-[9px] font-mono text-emerald-400 mt-0.5">{m.delta} vs anterior</div>
          </div>
        ))}
      </div>

      {/* Top keyword */}
      <div className="rounded-xl p-3 space-y-1.5" style={{ background: 'rgba(255,192,105,0.04)', border: '1px solid rgba(255,192,105,0.12)' }}>
        <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Top Keyword</div>
        <div className="text-xs text-white font-mono">"dentista salvador centro"</div>
        <div className="flex items-center gap-2 text-[10px] font-mono">
          <span className="text-[#FFC069]">Pos. #1</span>
          <span className="text-zinc-700">·</span>
          <span className="text-zinc-400">AI Overview citado</span>
        </div>
      </div>
    </div>
  </div>
);

/* ── CRM Agent terminal mockup ──────────────────────────────── */
const TerminalMockup: React.FC = () => (
  <div
    className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl font-mono text-[11px]"
    style={{ background: 'rgba(8,8,12,0.95)' }}
    aria-hidden="true"
  >
    <div className="px-4 py-3 border-b border-white/8 flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.03)' }}>
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#7A1610]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8642F]/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <span className="text-zinc-600 text-[10px] ml-1">crm-agent.ts</span>
      </div>
      <span className="text-[9px] text-[#FFC069] px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,192,105,0.08)', border: '1px solid rgba(255,192,105,0.2)' }}>
        AI ENGINE
      </span>
    </div>

    <div className="p-4 space-y-2 text-zinc-400 leading-relaxed">
      <div className="text-zinc-700">{'// lead via WhatsApp · Δ 0.4s'}</div>
      <div>
        <span className="text-[#FFC069]">lead</span>
        <span className="text-zinc-600">.</span>
        <span className="text-white">source</span>
        <span className="text-zinc-600"> = </span>
        <span className="text-emerald-400">'Google Maps'</span>
      </div>
      <div>
        <span className="text-[#FFC069]">lead</span>
        <span className="text-zinc-600">.</span>
        <span className="text-white">intent</span>
        <span className="text-zinc-600"> = </span>
        <span className="text-emerald-400">'High Ticket Procedure'</span>
      </div>
      <div>
        <span className="text-[#FFC069]">lead</span>
        <span className="text-zinc-600">.</span>
        <span className="text-white">budget</span>
        <span className="text-zinc-600"> = </span>
        <span className="text-emerald-400">'R$3.200+'</span>
      </div>

      <div className="pt-2 border-t border-white/5 text-zinc-700">{'// score calculado pelo modelo'}</div>

      <div className="rounded-xl p-3 space-y-2" style={{ background: 'rgba(255,192,105,0.05)', border: '1px solid rgba(255,192,105,0.15)' }}>
        <div className="flex items-center justify-between">
          <span className="text-[#FFC069] font-bold">SCORE 9.4 / 10</span>
          <span className="text-emerald-400 text-[10px] font-bold">QUALIFIED ✓</span>
        </div>
        <div className="text-[10px] text-zinc-400">
          Draft enviado ao WhatsApp em 0.8s.<br />
          Aguardando confirmação humana.
        </div>
      </div>
    </div>
  </div>
);

/* ── Blocks config ──────────────────────────────────────────── */

const VISUAL_COMPONENTS = [BrowserMockup, AnalyticsMockup, TerminalMockup];
const DOMINANT_COLORS: ('gold' | 'orange' | 'red')[] = ['gold', 'orange', 'red'];

/* ── Main Component ─────────────────────────────────────────── */

export const FeatureBlocks: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useGsapReveal({ y: 50, duration: 0.9, stagger: 0.2 });

  return (
    <section
      id="features"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="bg-[#050505]"
    >
      {/* Eyebrow centered above all blocks */}
      <div className="text-center pt-24 pb-2 px-4">
        <div className="section-badge inline-flex gsap-child">
          {t.featureBlocks.eyebrow}
        </div>
      </div>

      {t.featureBlocks.blocks.map((block, i) => {
        const Visual = VISUAL_COMPONENTS[i];
        const color = DOMINANT_COLORS[i];
        const isReversed = i % 2 === 1;

        return (
          <div key={i} className="relative overflow-hidden py-20 sm:py-28">
            <GooeyLayer
              dominantColor={color}
              cursorChase={false}
              className="absolute inset-0"
              blobCount={3}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
              >
                {/* Text side */}
                <div className="flex-1 space-y-6 gsap-child">
                  <div className="inline-flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: color === 'gold' ? '#FFC069' : color === 'orange' ? '#E8642F' : '#7A1610' }}
                    />
                    <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500">
                      {['Presence', 'Visibility', 'Intelligence'][i]}
                    </span>
                  </div>

                  <h2
                    className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.1]"
                    style={{ letterSpacing: '-0.025em' }}
                  >
                    {block.title}
                  </h2>

                  <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-md">
                    {block.copy}
                  </p>
                </div>

                {/* Visual side */}
                <div className="flex-1 w-full gsap-child">
                  <div className="glass-feature p-6 sm:p-8 rounded-3xl relative">
                    <Visual />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
