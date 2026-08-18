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
    <div className="px-5 py-4 border-b border-white/8 flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.03)' }}>
      <span className="text-[11px] font-mono text-zinc-400 font-semibold">PERFORMANCE</span>
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#FFC069] animate-pulse" />
        <span className="text-[10px] font-mono text-zinc-500">LIVE</span>
      </div>
    </div>

    <div className="p-5 space-y-4">
      {/* Big metric */}
      <div>
        <div className="text-[28px] font-extrabold text-white" style={{ letterSpacing: '-0.03em' }}>
          <span style={{ background: 'linear-gradient(135deg,#FFC069,#E8642F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>+143%</span>
        </div>
        <div className="text-[11px] font-mono text-zinc-500 mt-0.5">Organic traffic · 30 days</div>
      </div>

      {/* Chart bars */}
      <div className="flex items-end gap-1 h-20">
        {[30, 45, 38, 55, 48, 70, 65, 80, 72, 90, 85, 100].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: i >= 9
                ? 'linear-gradient(180deg, #FFC069 0%, #E8642F 100%)'
                : 'rgba(255,255,255,0.08)',
              opacity: i >= 9 ? 1 : 0.6 + i * 0.04,
            }}
          />
        ))}
      </div>

      {/* Secondary metrics */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Leads', val: '48', color: '#FFC069' },
          { label: 'Conv. Rate', val: '8.4%', color: '#E8642F' },
        ].map(({ label, val, color }) => (
          <div key={label} className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-lg font-bold" style={{ color }}>{val}</div>
            <div className="text-[10px] font-mono text-zinc-500">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CRMMockup: React.FC = () => (
  <div
    className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
    style={{ background: 'rgba(255,255,255,0.05)' }}
    aria-hidden="true"
  >
    <div className="px-5 py-4 border-b border-white/8 flex items-center gap-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
      <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black" style={{ background: 'linear-gradient(135deg,#FFC069,#7A1610)', color: '#050505' }}>
        AI
      </div>
      <span className="text-[11px] font-mono text-zinc-400 font-semibold">CRM AGENT</span>
      <div className="ml-auto flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#FFC069] animate-pulse" />
        <span className="text-[10px] font-mono text-zinc-500">ACTIVE</span>
      </div>
    </div>

    {/* Chat flow */}
    <div className="p-5 space-y-3">
      {[
        { from: 'lead', text: 'Hi, I need help with my dental clinic website.' },
        { from: 'ai', text: "👋 Got it! What's your main goal: more patients or a complete rebrand?" },
        { from: 'lead', text: 'Both, ideally. What does the plan include?' },
        { from: 'ai', text: '✅ Booking you in for a 15-min call with Gustavo.' },
      ].map(({ from, text }, i) => (
        <div key={i} className={`flex ${from === 'lead' ? 'justify-end' : 'justify-start'}`}>
          <div
            className="max-w-[80%] rounded-2xl px-4 py-2.5 text-[12px] leading-relaxed"
            style={
              from === 'lead'
                ? { background: 'rgba(255,192,105,0.15)', border: '1px solid rgba(255,192,105,0.2)', color: '#fde8c0' }
                : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#d4d4d8' }
            }
          >
            {text}
          </div>
        </div>
      ))}

      {/* Status pill */}
      <div className="flex justify-center pt-2">
        <div className="px-4 py-1.5 rounded-full text-[10px] font-mono font-semibold" style={{ background: 'rgba(255,192,105,0.1)', border: '1px solid rgba(255,192,105,0.2)', color: '#FFC069' }}>
          CALL SCHEDULED · CRM UPDATED
        </div>
      </div>
    </div>
  </div>
);

/* ── Blocks config ──────────────────────────────────────────── */

const VISUAL_COMPONENTS = [BrowserMockup, AnalyticsMockup, CRMMockup];
const DOMINANT_COLORS: ('gold' | 'orange' | 'red')[] = ['gold', 'orange', 'red'];

/* ── Main Component ─────────────────────────────────────────── */

export const FeatureBlocks: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useGsapReveal({ y: 50, duration: 1, stagger: 0.15 });

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
                  <div className="glass-feature p-6 sm:p-8">
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
