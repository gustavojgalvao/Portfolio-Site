import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { Timeline } from './ui/timeline';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Search,
  FileCheck,
  Code2,
  Rocket,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react';

/* ── Icon + color per step ─────────────────────────────── */
const STEP_ICONS = [Search, FileCheck, Code2, Rocket, RefreshCw];
const STEP_ACCENTS = [
  { border: 'rgba(255,192,105,0.3)', bg: 'rgba(255,192,105,0.08)', text: '#FFC069' },
  { border: 'rgba(255,192,105,0.3)', bg: 'rgba(255,192,105,0.08)', text: '#FFC069' },
  { border: 'rgba(255,192,105,0.3)', bg: 'rgba(255,192,105,0.08)', text: '#FFC069' },
  { border: 'rgba(255,192,105,0.3)', bg: 'rgba(255,192,105,0.08)', text: '#FFC069' },
  { border: 'rgba(255,192,105,0.3)', bg: 'rgba(255,192,105,0.08)', text: '#FFC069' },
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
}

const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  const Icon = STEP_ICONS[index] || CheckCircle2;
  const accent = STEP_ACCENTS[index] || STEP_ACCENTS[0];

  return (
    <Card className="relative overflow-hidden border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03] group">
      {/* Ambient glow on hover */}
      <div 
        className="absolute -right-20 -top-20 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-700"
        style={{ background: `radial-gradient(circle, ${accent.text}40 0%, transparent 70%)` }} 
      />

      <CardHeader className="border-b border-white/5 pb-6">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl"
            style={{
              background: accent.bg,
              border: `1px solid ${accent.border}`,
            }}
          >
            <Icon className="w-5 h-5" style={{ color: accent.text }} />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
            ETAPA {step.num}
          </span>
        </div>
        
        <CardTitle className="text-xl sm:text-2xl font-extrabold text-white tracking-tight" style={{ letterSpacing: '-0.02em' }}>
          {step.title}
        </CardTitle>
        <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold mt-3 w-fit"
            style={{
              background: accent.bg,
              border: `1px solid ${accent.border}`,
              color: accent.text,
            }}
          >
            {step.timeframe}
          </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="space-y-3">
          {step.bullets.map((item, dIdx) => (
            <div
              key={dIdx}
              className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed"
            >
              <CheckCircle2
                className="w-4 h-4 shrink-0 mt-0.5"
                style={{ color: accent.text }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
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
