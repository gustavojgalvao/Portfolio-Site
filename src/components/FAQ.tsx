import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useGsapReveal({ y: 40, duration: 0.9, stagger: 0.1 });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(232,100,47,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 gsap-child">
          <div className="section-badge inline-flex mb-5">
            {t.faq.eyebrow}
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ letterSpacing: '-0.025em' }}
          >
            {t.faq.title}
          </h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-3 gsap-child">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className="glass-feature overflow-hidden"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span
                  className="text-[15px] font-semibold text-white leading-snug"
                  style={{ letterSpacing: '-0.01em' }}
                  itemProp="name"
                >
                  {item.question}
                </span>
                <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full border border-white/15 flex items-center justify-center">
                  {open === i ? (
                    <Minus className="w-3 h-3 text-[#FFC069]" />
                  ) : (
                    <Plus className="w-3 h-3 text-zinc-400" />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? 'max-h-60' : 'max-h-0'
                }`}
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <p
                  className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed"
                  itemProp="text"
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
