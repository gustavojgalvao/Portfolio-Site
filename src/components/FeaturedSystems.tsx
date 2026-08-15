import React from 'react';
import { CircularCarousel } from './ui/circular-carousel';
import type { CarouselItem } from './ui/circular-carousel';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';

export const FeaturedSystems: React.FC = () => {
  const { language } = useLanguage();

  const itemsEn: CarouselItem[] = [
    {
      id: "1",
      title: "UI/UX Engine",
      description: "High-performance React landing pages and design systems.",
      tag: "Frontend",
    },
    {
      id: "2",
      title: "AI Lead Triage",
      description: "Autonomous lead scoring and qualification handled by AI agents.",
      tag: "AI Agents",
    },
    {
      id: "3",
      title: "Growth GEO Strategy",
      description: "Optimized visibility for AI search engines like Perplexity & ChatGPT.",
      tag: "Growth",
    },
    {
      id: "4",
      title: "Automated CRM",
      description: "Instant webhooks syncing leads directly to calendars and WhatsApp.",
      tag: "Automation",
    },
    {
      id: "5",
      title: "Conversion Tracking",
      description: "Data-driven analytics dashboards tracking real user actions.",
      tag: "Analytics",
    },
    {
      id: "6",
      title: "E-Commerce Checkout",
      description: "Frictionless international payment integration and funnels.",
      tag: "Checkout",
    },
  ];

  const itemsPt: CarouselItem[] = [
    {
      id: "1",
      title: "Motor de UI/UX",
      description: "Landing pages em React de alta performance e design systems.",
      tag: "Frontend",
    },
    {
      id: "2",
      title: "Triagem com IA",
      description: "Qualificação e pontuação autônoma de leads via agentes de IA.",
      tag: "Agentes IA",
    },
    {
      id: "3",
      title: "Estratégia GEO",
      description: "Otimização de visibilidade para motores de busca por IA.",
      tag: "Growth",
    },
    {
      id: "4",
      title: "CRM Automatizado",
      description: "Webhooks instantâneos sincronizando leads ao CRM e WhatsApp.",
      tag: "Automação",
    },
    {
      id: "5",
      title: "Métricas de Conversão",
      description: "Dashboards analíticos monitorando o comportamento real do usuário.",
      tag: "Analytics",
    },
    {
      id: "6",
      title: "Checkout E-Commerce",
      description: "Integração de pagamentos internacionais e funis sem atrito.",
      tag: "Checkout",
    },
  ];

  const items = language === 'en' ? itemsEn : itemsPt;

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-14">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {language === 'en' ? 'System Architecture Modules' : 'Módulos da Arquitetura'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {language === 'en'
              ? 'Explore the interactive core components powering Gustavo\'s digital solutions.'
              : 'Explore os componentes centrais interativos das soluções digitais do Gustavo.'}
          </p>
        </div>

        {/* Circular Carousel Component */}
        <div className="relative">
          <CircularCarousel items={items} autoPlayInterval={3500} />
        </div>

      </div>
    </section>
  );
};
