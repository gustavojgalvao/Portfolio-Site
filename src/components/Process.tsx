import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.process.title}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {t.process.subtitle}
          </p>
        </div>

        {/* Timeline Container (Centered max-w ~800px) */}
        <div className="max-w-3xl mx-auto relative px-4">
          {/* Vertical Connecting Glow Line */}
          <div className="absolute left-8 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-orange-500 via-amber-500 to-red-500 opacity-40 -translate-x-1/2" />

          <div className="space-y-12 relative z-10">
            {t.process.steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card Content */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-orange-500/40 transition-all duration-300 shadow-xl group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-orange-400 tracking-widest uppercase">
                          PHASE {step.num}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-orange-400/60 group-hover:text-orange-400 transition-colors" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Glowing Node in Center */}
                  <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/50 z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse" />
                  </div>

                  {/* Empty Spacer Column for Desktop Alternating Alignment */}
                  <div className="hidden sm:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
