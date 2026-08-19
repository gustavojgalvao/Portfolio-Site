import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

const testimonials: { pt: Testimonial[]; en: Testimonial[] } = {
  pt: [
    {
      name: 'Ariana Carla',
      role: 'Proprietária',
      company: 'AC Jóias',
      text: 'O Gustavo entregou exatamente o que prometeu: um site moderno, rápido e que transmite a identidade da minha marca. Clientes comentam o quanto o site é bonito. Recomendo demais.',
      rating: 5,
    },
    {
      name: 'Dr. Eduardo Souza',
      role: 'Cirurgião-Dentista',
      company: 'Sorriso Perfeito Clínica',
      text: 'Desde que o site foi lançado, o número de novos pacientes que chegam pelo Google aumentou visivelmente. A integração com o WhatsApp ficou perfeita para o nosso fluxo de atendimento.',
      rating: 5,
    },
    {
      name: 'Luciana Phellipo',
      role: 'Artista Visual',
      company: 'Lu Phellipo Art',
      text: 'Meu portfólio online ficou lindo e profissional. O Gustavo foi muito atencioso em entender o meu estilo e traduzir isso no design. Tive encomendas internacionais pela primeira vez!',
      rating: 5,
    },
  ],
  en: [
    {
      name: 'Ariana Carla',
      role: 'Owner',
      company: 'AC Jóias',
      text: 'Gustavo delivered exactly what he promised: a modern, fast website that conveys my brand identity perfectly. Clients constantly comment on how beautiful it looks.',
      rating: 5,
    },
    {
      name: 'Dr. Eduardo Souza',
      role: 'Dental Surgeon',
      company: 'Sorriso Perfeito Clinic',
      text: 'Since the site launched, the number of new patients coming through Google has visibly increased. The WhatsApp integration fits perfectly into our intake workflow.',
      rating: 5,
    },
    {
      name: 'Luciana Phellipo',
      role: 'Visual Artist',
      company: 'Lu Phellipo Art',
      text: 'My online portfolio looks stunning and professional. Gustavo was very attentive in understanding my style and translating it into the design. I got international commissions for the first time!',
      rating: 5,
    },
  ],
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-3.5 h-3.5 ${i < rating ? 'text-[#FFC069]' : 'text-zinc-700'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const items = testimonials[language];

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,192,105,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="section-badge inline-flex">
            {language === 'en' ? 'Client Reviews' : 'Avaliações de Clientes'}
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            style={{ letterSpacing: '-0.025em' }}
          >
            {language === 'en' ? 'Real words from real clients' : 'Palavras reais de clientes reais'}
          </h2>
          <p className="text-base text-zinc-400 max-w-lg mx-auto">
            {language === 'en'
              ? 'Every project is a direct partnership. Here is what they say.'
              : 'Cada projeto é uma parceria direta. Veja o que eles dizem.'}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((t, idx) => (
            <article
              key={idx}
              className="rounded-3xl p-6 sm:p-7 bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-white/12 transition-all duration-300 space-y-5 flex flex-col"
            >
              <StarRating rating={t.rating} />

              <blockquote className="flex-1 text-sm sm:text-base text-zinc-300 leading-relaxed">
                "{t.text}"
              </blockquote>

              <div className="flex items-center gap-3 pt-3 border-t border-white/6">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFC069]/20 to-[#E8642F]/10 border border-white/10 flex items-center justify-center text-sm font-bold text-[#FFC069]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
