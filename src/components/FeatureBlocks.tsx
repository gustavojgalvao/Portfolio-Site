import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import GooeyLayer from './ui/GooeyLayer';
import { useGsapReveal } from '../hooks/useGsapReveal';

/* ── Abstract UI Mockups ────────────────────────────────────── */

const BrowserMockup: React.FC = () => (
  <div
    className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/12 shadow-2xl"
    style={{ background: 'rgba(255,255,255,0.05)' }}
    aria-hidden="true"
  >
    {/* Browser chrome */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <div className="flex gap-1.5">
        {['#7A1610', '#E8642F', '#FFC069'].map((c) => (
          <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <div className="flex-1 mx-3 h-5 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
    </div>

    {/* Page body */}
    <div className="p-5 space-y-4">
      {/* Hero hero area */}
      <div className="rounded-xl h-28 relative overflow-hidden" style={{ background: 'rgba(255,192,105,0.08)', border: '1px solid rgba(255,192,105,0.15)' }}>
        <div className="absolute inset-0 flex flex-col justify-end p-4 space-y-2">
          <div className="w-2/3 h-3 rounded-full" style={{ background: 'rgba(255,192,105,0.5)' }} />
          <div className="w-1/2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
          <div className="flex gap-2 mt-1">
            <div className="w-16 h-5 rounded-full" style={{ background: 'rgba(255,192,105,0.4)' }} />
            <div className="w-12 h-5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }} />
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-3 gap-2">
        {[0.7, 0.5, 0.6].map((o, i) => (
          <div key={i} className="rounded-lg p-3 space-y-1.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-5 h-5 rounded-md" style={{ background: `rgba(255,192,105,${o * 0.3})` }} />
            <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
            <div className="w-3/4 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
          </div>
        ))}
      </div>

      {/* Nav links */}
      <div className="flex gap-3 pt-1">
        {[60, 40, 55, 45].map((w, i) => (
          <div key={i} className="h-1.5 rounded-full" style={{ width: w, background: 'rgba(255,255,255,0.1)' }} />
        ))}
      </div>
    </div>
  </div>
);

const AnalyticsMockup: React.FC = () => (
  <div
    className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
    style={{ background: 'rgba(255,255,255,0.05)' }}
    aria-hidden="true"
  >
    <div className="p-3 sm:p-5 flex items-center justify-between border-b border-white/8 shrink-0 bg-black/40 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <span className="text-xs font-mono font-bold tracking-widest text-[#FFC069] uppercase">
          Live Metrics
        </span>
      </div>
    </div>

    <div className="p-5 space-y-4">
      {/* Metric row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl p-3.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="text-[10px] font-mono text-zinc-500 mb-1">LOCAL RANK</div>
          <div className="text-xl font-bold font-mono text-white">#1 Top 3</div>
          <div className="text-[10px] text-emerald-400 font-mono mt-0.5">+4 positions</div>
        </div>
        <div className="rounded-xl p-3.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="text-[10px] font-mono text-zinc-500 mb-1">GEO CITATIONS</div>
          <div className="text-xl font-bold font-mono text-[#FFC069]">94%</div>
          <div className="text-[10px] text-[#FFC069] font-mono mt-0.5">AI engine match</div>
        </div>
      </div>

      {/* Mini bar chart */}
      <div className="space-y-2 pt-1">
        <div className="text-[10px] font-mono text-zinc-500">TRAFFIC / CHANNEL</div>
        {[
          { label: 'Google Search', w: '85%', color: '#FFC069' },
          { label: 'AI Overviews / GEO', w: '68%', color: '#E8642F' },
          { label: 'Instagram / Paid', w: '52%', color: '#7A1610' },
        ].map((item, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-[10px] font-mono text-zinc-400">
              <span>{item.label}</span>
              <span style={{ color: item.color }}>{item.w}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: item.w, background: item.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TerminalMockup: React.FC = () => (
  <div
    className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl font-mono text-[11px]"
    style={{ background: 'rgba(8,8,12,0.95)' }}
    aria-hidden="true"
  >
    {/* Terminal titlebar */}
    <div className="px-4 py-3 border-b border-white/8 flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.03)' }}>
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <span className="text-zinc-500 text-[10px]">crm-agent.ts</span>
      </div>
      <span className="text-[9px] text-[#FFC069] px-2 py-0.5 rounded-full bg-[#FFC069]/10 border border-[#FFC069]/20">
        AI ENGINE
      </span>
    </div>

    {/* Terminal body */}
    <div className="p-4 space-y-2.5 text-zinc-400">
      <div className="text-zinc-600">// WhatsApp lead arrived · 0.4s ago</div>
      <div>
        <span className="text-[#FFC069]">lead</span>
        <span className="text-zinc-500">.</span>
        <span className="text-white">source</span>
        <span className="text-zinc-500"> = </span>
        <span className="text-emerald-400">&apos;Google Maps (Local)&apos;</span>
      </div>
      <div>
        <span className="text-[#FFC069]">lead</span>
        <span className="text-zinc-500">.</span>
        <span className="text-white">intent</span>
        <span className="text-zinc-500"> = </span>
        <span className="text-emerald-400">&apos;High Ticket Procedure&apos;</span>
      </div>
      <div className="pt-1 border-t border-white/5">
        <span className="text-zinc-600">// AI score calculated</span>
      </div>
      <div className="rounded-lg p-2.5 space-y-1" style={{ background: 'rgba(255,192,105,0.06)', border: '1px solid rgba(255,192,105,0.15)' }}>
        <div className="flex justify-between text-[10px]">
          <span className="text-[#FFC069]">SCORE: 9.4 / 10</span>
          <span className="text-emerald-400">QUALIFIED</span>
        </div>
        <div className="text-[10px] text-zinc-300">
          Auto-routed to WhatsApp with draft response ready.
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
