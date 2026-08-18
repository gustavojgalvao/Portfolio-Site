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
    subtitle: string;
    desc: string;
    deliverables: string[];
    highlight: string;
    tags: string[];
  };
  index: number;
  isLast: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, index, isLast }) => {
  const Icon = STEP_ICONS[index] || Sparkles;
  const accent = STEP_ACCENTS[index] || STEP_ACCENTS[0];

  return (
    <div className="pb-12 md:pb-6">
      {/* Glass card container */}
      <div
        className="rounded-3xl p-6 sm:p-8 lg:p-9 space-y-6 max-w-2xl transition-all duration-300 hover:border-white/20"
        style={{
          background: 'rgba(255, 255, 255, 0.025)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        }}
      >
        {/* Top bar: Icon + Timeframe badge */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div
              className="inline-flex items-center justify-center w-11 h-11 rounded-2xl"
              style={{
                background: accent.bg,
                border: `1px solid ${accent.border}`,
              }}
            >
              <Icon className="w-5 h-5" style={{ color: accent.text }} />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
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

        {/* Title & Subtitle */}
        <div className="space-y-1.5">
          <h3
            className="text-2xl sm:text-3xl font-extrabold text-white leading-tight"
            style={{ letterSpacing: '-0.025em' }}
          >
            {step.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-[#FFC069] tracking-wide">
            {step.subtitle}
          </p>
        </div>

        {/* Main description */}
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
          {step.desc}
        </p>

        {/* Deliverables Checklist */}
        <div className="space-y-2.5 pt-2 border-t border-white/6">
          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-3">
            O que acontece nesta etapa:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {step.deliverables.map((item, dIdx) => (
              <div
                key={dIdx}
                className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400 leading-snug"
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

        {/* Highlight Banner */}
        <div
          className="rounded-xl px-4 py-3 flex items-center gap-2.5 text-xs sm:text-sm font-medium"
          style={{
            background: 'rgba(255, 192, 105, 0.05)',
            border: '1px solid rgba(255, 192, 105, 0.15)',
            color: '#fde8c0',
          }}
        >
          <Sparkles className="w-4 h-4 text-[#FFC069] shrink-0" />
          <span>{step.highlight}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {step.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full text-zinc-400"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Section ───────────────────────────────────────────── */
export const Process: React.FC = () => {
  const { t } = useLanguage();
  const headerRef = useGsapReveal({ y: 40, duration: 0.9, stagger: 0.12 });

  /* Map translation steps → Timeline entries */
  const timelineData = t.process.steps.map((step, i) => ({
    title: step.num, // "01" "02" … shown as the sticky number label on the left
    content: (
      <StepCard
        key={i}
        step={step}
        index={i}
        isLast={i === t.process.steps.length - 1}
      />
    ),
  }));

  return (
    <section
      id="process"
      ref={headerRef as React.RefObject<HTMLElement>}
      className="relative bg-[#050505] overflow-hidden py-8"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 65% 45% at 15% 45%, rgba(122,22,16,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Section header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative z-10">
        <div className="gsap-child max-w-2xl">
          <div className="section-badge inline-flex mb-5">
            {t.process.eyebrow}
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
            style={{ letterSpacing: '-0.025em', lineHeight: 1.15 }}
          >
            {t.process.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            {t.process.subtitle}
          </p>
        </div>
      </div>

      {/* Timeline — scroll-animated vertical line */}
      <div className="relative z-10">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};
