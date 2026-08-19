import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Marquee } from './ui/marquee';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  profile: string;
}

const testimonials: { pt: Testimonial[]; en: Testimonial[] } = {
  pt: [
    {
      name: 'Ariana Carla',
      role: 'Proprietária',
      company: 'AC Jóias',
      text: 'O Gustavo entregou exatamente o que prometeu: um site moderno, rápido e que transmite a identidade da minha marca. Clientes comentam o quanto o site é bonito. Recomendo demais.',
      rating: 5,
      profile: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Dr. Eduardo Souza',
      role: 'Cirurgião-Dentista',
      company: 'Sorriso Perfeito Clínica',
      text: 'Desde que o site foi lançado, o número de novos pacientes que chegam pelo Google aumentou visivelmente. A integração com o WhatsApp ficou perfeita para o nosso fluxo de atendimento.',
      rating: 5,
      profile: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Luciana Phellipo',
      role: 'Artista Visual',
      company: 'Lu Phellipo Art',
      text: 'Meu portfólio online ficou lindo e profissional. O Gustavo foi muito atencioso em entender o meu estilo e traduzir isso no design. Tive encomendas internacionais pela primeira vez!',
      rating: 5,
      profile: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Rafael Costa',
      role: 'Sócio-Diretor',
      company: 'RC Advocacia',
      text: 'A automação de atendimento via WhatsApp que ele criou economiza horas da nossa equipe todos os dias. A triagem de clientes ficou muito mais rápida e eficiente.',
      rating: 5,
      profile: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Mariana Silva',
      role: 'Gerente de E-commerce',
      company: 'Bella Store',
      text: 'O redesign do nosso e-commerce não só ficou visualmente incrível, mas também melhorou muito a conversão. O carregamento ultra-rápido fez toda a diferença.',
      rating: 5,
      profile: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Roberto Mendes',
      role: 'Fundador',
      company: 'TechSolutions BR',
      text: 'Profissionalismo ímpar. O foco dele em SEO técnico nos colocou na primeira página do Google para nossas principais palavras-chave em menos de 3 meses.',
      rating: 5,
      profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
  ],
  en: [
    {
      name: 'Ariana Carla',
      role: 'Owner',
      company: 'AC Jóias',
      text: 'Gustavo delivered exactly what he promised: a modern, fast website that conveys my brand identity perfectly. Clients constantly comment on how beautiful it looks.',
      rating: 5,
      profile: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Dr. Eduardo Souza',
      role: 'Dental Surgeon',
      company: 'Sorriso Perfeito Clinic',
      text: 'Since the site launched, the number of new patients coming through Google has visibly increased. The WhatsApp integration fits perfectly into our intake workflow.',
      rating: 5,
      profile: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Luciana Phellipo',
      role: 'Visual Artist',
      company: 'Lu Phellipo Art',
      text: 'My online portfolio looks stunning and professional. Gustavo was very attentive in understanding my style and translating it into the design. I got international commissions for the first time!',
      rating: 5,
      profile: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Rafael Costa',
      role: 'Managing Partner',
      company: 'RC Advocacia',
      text: 'The WhatsApp automation he built saves our team hours every day. Lead triage is now incredibly fast and efficient.',
      rating: 5,
      profile: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Mariana Silva',
      role: 'E-commerce Manager',
      company: 'Bella Store',
      text: 'The redesign of our e-commerce site not only looks visually amazing but also significantly improved our conversion rate. The ultra-fast loading made all the difference.',
      rating: 5,
      profile: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Roberto Mendes',
      role: 'Founder',
      company: 'TechSolutions BR',
      text: 'Unmatched professionalism. His focus on technical SEO put us on the first page of Google for our main keywords in less than 3 months.',
      rating: 5,
      profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
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

const ReviewCard = ({
  profile,
  name,
  role,
  company,
  text,
  rating,
}: Testimonial) => {
  return (
    <Card className="relative h-full w-80 cursor-pointer overflow-hidden border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-none p-5 hover:border-white/12 transition-all duration-300">
      <CardContent className="p-0 flex flex-col gap-4">
        <StarRating rating={rating} />
        
        <p className="text-sm leading-relaxed text-zinc-300">"{text}"</p>
        
        <div className="flex flex-row items-center gap-3 pt-2 mt-auto border-t border-white/5">
          <img
            className="rounded-full object-cover w-10 h-10 border border-white/10"
            alt={name}
            src={profile}
          />
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs font-medium text-zinc-500">
              {role} · {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const items = testimonials[language];
  
  const firstRow = items.slice(0, Math.ceil(items.length / 2));
  const secondRow = items.slice(Math.ceil(items.length / 2));

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-24 lg:py-28 bg-[#050505] overflow-hidden"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 md:mb-16">
        {/* Heading */}
        <div className="text-center space-y-4">
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
      </div>

      {/* Marquee component */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        
        {/* Gradients for fading effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#050505] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#050505] to-transparent"></div>
      </div>
    </section>
  );
};

