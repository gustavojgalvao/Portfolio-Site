import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import GooeyLayer from './ui/GooeyLayer';
import { Clock } from 'lucide-react';
import { ContactOptions } from './ui/ContactOptions';

export const FinalCTA: React.FC = () => {
  const { language, t } = useLanguage();


  return (
    <section
      id="contact"
      className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      <GooeyLayer
        dominantColor="gold"
        cursorChase={false}
        className="absolute inset-0"
        blobCount={4}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto py-24 space-y-8">
        {/* Tagline */}
        <p className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#FFC069]">
          {t.finalCta.tagline}
        </p>

        {/* Headline — two lines with whitespace-pre-wrap */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white whitespace-pre-line"
          style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}
        >
          {t.finalCta.title}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-lg mx-auto leading-relaxed">
          {t.finalCta.subtitle}
        </p>

        {/* CTA */}
        <div className="pt-2">
          <ContactOptions variant="full" />
        </div>

        {/* Response promise */}
        <p className="text-xs font-mono text-zinc-600 tracking-wider flex items-center justify-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-zinc-500" />
          <span>
            {language === 'en'
              ? 'Direct response in under 2 hours during business hours'
              : 'Resposta direta em até 2 horas em horário comercial'}
          </span>
        </p>
      </div>
    </section>
  );
};
