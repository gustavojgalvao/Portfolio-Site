import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { Timeline } from './ui/timeline';
import {
  Search,
  FileCheck,
  Code2,
  Rocket,
  RefreshCw,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

/* ── Icon + color per step ─────────────────────────────── */
const STEP_ICONS = [Search, FileCheck, Code2, Rocket, RefreshCw];
const STEP_ACCENTS = [
  { border: 'rgba(255,192,105,0.3)', bg: 'rgba(255,192,105,0.08)', text: '#FFC069' },
  { border: 'rgba(232,160,64,0.3)', bg: 'rgba(232,160,64,0.08)', text: '#E8A040' },
  { border: 'rgba(232,100,47,0.3)', bg: 'rgba(232,100,47,0.08)', text: '#E8642F' },
  { border: 'rgba(204,74,26,0.3)', bg: 'rgba(204,74,26,0.08)', text: '#CC4A1A' },
  { border: 'rgba(255,192,105,0.35)', bg: 'rgba(255,192,105,0.1)', text: '#FFC069' },
];

/* ── Step card used as Timeline content ───────────────── */
interface StepCardProps {
  step: {
    num: string;
    timeframe: string;
    title: string;
    bullets: string[];
  };
  index: number;
  isLast: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, index, isLast }) => {
  const Icon = STEP_ICONS[index] || Sparkles;
  const accent = STEP_ACCENTS[index] || STEP_ACCENTS[0];

  return (
    <div className="pb-10 md:pb-4">
      {/* Glass card container */}
      <div className="rounded-3xl p-6 sm:p-7 space-y-5 max-w-2xl glass-card border border-white/8 hover:border-white/18 transition-all duration-300 text-left group">
        
        {/* Top bar: Icon + Timeframe badge */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-2xl"
              style={{
                background: accent.bg,
                border: `1px solid ${accent.border}`,
              }}
            >
              <Icon className="w-4 h-4" style={{ color: accent.text }} />
            </div>
            <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
              ETAPA {step.num}
            </span>
          </div>

          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold"
            style={{
              background: accent.bg,
              border: `1px solid ${accent.border}`,
              color: accent.text,
            }}
          >
            {isLast && (
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: accent.text }}
              />
            )}
            {step.timeframe}
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-xl sm:text-2xl font-extrabold text-white tracking-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          {step.title}
        </h3>

        {/* Bullets */}
        <div className="space-y-2.5 pt-1 border-t border-white/6">
          {step.bullets.map((item, dIdx) => (
            <div
              key={dIdx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-snug"
            >
              <CheckCircle2
                className="w-4 h-4 shrink-0 mt-0.5"
                style={{ color: accent.text }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Process: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useGsapReveal({ y: 35, duration: 0.85, stagger: 0.1 });

  // Map process steps to Timeline format
  const timelineData = t.process.steps.map((step, idx) => ({
    title: step.num,
    content: (
      <StepCard
        step={step}
        index={idx}
        isLast={idx === t.process.steps.length - 1}
      />
    ),
  }));

  return (
    <section
      id="process"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Ambient glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,192,105,0.04) 0%, rgba(232,100,47,0.02) 40%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-14 gsap-child">
          <div className="section-badge inline-flex mb-4">
            {t.process.eyebrow}
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            style={{ letterSpacing: '-0.025em' }}
          >
            {t.process.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        {/* Aceternity UI Timeline Component with rich step cards */}
        <div className="gsap-child">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};

export default Process;
