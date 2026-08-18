import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { MessageSquare, Check } from 'lucide-react';

export const PlanOverview: React.FC = () => {
  const { language, t } = useLanguage();
  const containerRef = useGsapReveal({ y: 40, duration: 0.9, stagger: 0.12 });

  const whatsappUrl =
    'https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=' +
    encodeURIComponent(
      language === 'en'
        ? "Hi Gustavo! I'd like to book a call to learn about the plan."
        : 'Olá Gustavo! Gostaria de agendar uma conversa sobre o plano.'
    );

  return (
    <section
      id="plan"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]"
    >
      {/* Subtle ambient glow behind the section */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(255,192,105,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Eyebrow + heading */}
        <div className="text-center mb-14 gsap-child">
          <div className="section-badge inline-flex mb-5">
            {t.planOverview.eyebrow}
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mx-auto"
            style={{ letterSpacing: '-0.025em', lineHeight: 1.15 }}
          >
            {t.planOverview.title}
          </h2>
        </div>

        {/* Single glass panel containing 3 groups */}
        <div className="glass-feature p-8 sm:p-10 lg:p-12 gsap-child">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {t.planOverview.groups.map((group, gi) => (
              <div key={gi} className="space-y-5">
                {/* Group name */}
                <h3
                  className="text-[11px] font-mono font-semibold tracking-[0.12em] uppercase"
                  style={{ color: gi === 0 ? '#FFC069' : gi === 1 ? '#E8642F' : '#c9a05a' }}
                >
                  {group.name}
                </h3>

                {/* Divider */}
                <div className="h-px bg-white/8" />

                {/* Items */}
                <ul className="space-y-4">
                  {group.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#FFC069]/15 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-[#FFC069]" />
                      </span>
                      <div>
                        <span className="block text-sm font-semibold text-white">
                          {item.title}
                        </span>
                        <span className="block text-xs text-zinc-500 leading-relaxed mt-0.5">
                          {item.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer line + CTA */}
          <div className="mt-10 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-sm text-zinc-500 text-center sm:text-left max-w-md">
              {t.planOverview.footnote}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              {t.planOverview.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
