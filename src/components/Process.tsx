import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Process: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 88%', once: true }
        }
      );

      // Timeline line draw
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1, opacity: 1, duration: 1.5, ease: 'power2.inOut',
            scrollTrigger: { trigger: lineRef.current, start: 'top 80%', once: true }
          }
        );
      }

      // Individual step cards
      const cards = sectionRef.current?.querySelectorAll('.process-card');
      cards?.forEach((card, i) => {
        const isEven = i % 2 === 0;
        gsap.fromTo(card,
          { opacity: 0, x: isEven ? -50 : 50, y: 20 },
          {
            opacity: 1, x: 0, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
            delay: i * 0.1
          }
        );
      });

      // Nodes pop in
      const nodes = sectionRef.current?.querySelectorAll('.timeline-node');
      nodes?.forEach((node, i) => {
        gsap.fromTo(node,
          { scale: 0, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)',
            scrollTrigger: { trigger: node, start: 'top 88%', once: true },
            delay: i * 0.15 + 0.3
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative z-10 overflow-hidden">
      <div className="section-divider mb-20 mx-auto max-w-4xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto space-y-4 mb-20" style={{ opacity: 0 }}>
          <div className="section-badge mx-auto">
            <Sparkles className="w-3 h-3" />
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.process.title}
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg">{t.process.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Glowing Vertical Line */}
          <div
            ref={lineRef}
            className="timeline-line absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-amber-500/60 to-red-500/30 -translate-x-1/2"
            style={{ opacity: 0, transformOrigin: 'top center' }}
          />

          <div className="space-y-16 relative z-10">
            {t.process.steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-8 ${isEven ? 'sm:flex-row-reverse' : ''}`}
                >
                  {/* Card */}
                  <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${isEven ? 'sm:pr-12' : 'sm:pl-12'}`}>
                    <div
                      className="process-card glass-card p-7 rounded-3xl group"
                      style={{ opacity: 0 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-4xl font-black text-orange-500/20 font-mono leading-none">
                            {step.num}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-orange-400/60 tracking-widest uppercase">
                            PHASE
                          </span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-zinc-700 group-hover:text-orange-400 transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Glowing Node */}
                  <div className="timeline-node absolute left-8 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/40 z-20"
                    style={{ opacity: 0, transform: 'translateX(-50%) scale(0)' }}
                  >
                    <div className="w-3 h-3 rounded-full bg-orange-400 animate-pulse" />
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border border-orange-500/30 scale-150 animate-ping" style={{ animationDuration: '2.5s' }} />
                  </div>

                  {/* Spacer */}
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
