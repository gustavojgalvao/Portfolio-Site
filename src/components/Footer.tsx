import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  MessageSquare,
  Mail,
  ArrowUp,
  FileText,
  MapPin,
  Clock,
  ShieldCheck,
  Code2,
  Layers,
  Send,
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface FooterProps {
  onNavigatePortfolio?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePortfolio }) => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage =
    language === 'en'
      ? 'Hi Gustavo! I was viewing your website footer and would like to talk about a project.'
      : 'Olá Gustavo! Estive vendo seu site e gostaria de conversar sobre um projeto.';

  const whatsappUrl = `https://wa.me/5571992550509?text=${encodeURIComponent(whatsappMessage)}`;
  const emailUrl = 'mailto:gustavojezler@gmail.com';
  const githubUrl = 'https://github.com/gustavojgalvao';
  const linkedinUrl = 'https://www.linkedin.com/in/gustavogalvaoo';
  const cvUrl =
    language === 'en'
      ? '/assets/resume-gustavogalvao.pdf'
      : '/assets/curriculo-gustavogalvao.pdf';

  const navLinks = [
    { label: language === 'en' ? 'Home' : 'Início', href: '#hero' },
    { label: language === 'en' ? 'Plan Overview' : 'O que está incluso', href: '#plan' },
    {
      label: language === 'en' ? 'Portfolio & Projects' : 'Portfólio de Projetos',
      onClick: onNavigatePortfolio,
    },
    { label: language === 'en' ? 'Direct vs Agency' : 'Comparativo Direto', href: '#comparison' },
    { label: language === 'en' ? 'System Features' : 'Recursos & IA', href: '#features' },
    { label: language === 'en' ? 'Process & Steps' : 'Como Funciona', href: '#process' },
    { label: language === 'en' ? 'About Gustavo' : 'Sobre Mim', href: '#about' },
    { label: language === 'en' ? 'FAQ' : 'Dúvidas Frequentes', href: '#faq' },
  ];

  const solutions = [
    language === 'en' ? 'High-Performance Web Apps' : 'Aplicações Web de Alta Performance',
    language === 'en' ? 'Autonomous AI Agents & Triage' : 'Agentes de IA & Triagem Autônoma',
    language === 'en' ? 'Proprietary Custom CRM' : 'CRM Próprio Integrado',
    language === 'en' ? 'Generative Engine SEO (GEO)' : 'SEO & Otimização para IA (GEO)',
    language === 'en' ? 'E-Commerce & WhatsApp Funnels' : 'E-Commerce & Funis de Conversão',
    language === 'en' ? 'API Integrations & Webhooks' : 'Integrações de APIs & Webhooks',
  ];

  return (
    <footer className="relative bg-[#050505] text-zinc-300 border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,192,105,0.05) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 10% 90%, rgba(232,100,47,0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* ── TOP CALLOUT BANNER ────────────────────────────────── */}
      <div className="border-b border-white/8 py-10 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h3 className="text-xl font-bold text-white tracking-tight">Gustavo Galvão</h3>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                {language === 'en'
                  ? 'Full-Stack Developer · AI Automations · Flat Monthly Growth'
                  : 'Desenvolvedor Full-Stack · Automação com IA · Crescimento Digital'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7A1610] via-[#E8642F] to-[#FFC069] text-white font-bold text-xs shadow-lg shadow-orange-500/20 hover:scale-105 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'en' ? 'Chat on WhatsApp' : 'Falar no WhatsApp'}</span>
            </a>

            <a
              href={cvUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card hover:bg-white/10 text-zinc-200 hover:text-white border border-white/15 text-xs font-mono transition-all"
            >
              <FileText className="w-4 h-4 text-[#FFC069]" />
              <span>{language === 'en' ? 'Download CV (PDF)' : 'Baixar Currículo'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN 4-COLUMN FOOTER GRID ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1 (4 cols): Bio & Status */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#FFC069] uppercase tracking-widest block">
                {language === 'en' ? 'ABOUT THE OPERATION' : 'ENGENHARIA DIRETA'}
              </span>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                {language === 'en'
                  ? 'I build and manage modern web platforms, intelligent AI lead qualification pipelines, and continuous digital growth for ambitious companies with zero agency intermediaries.'
                  : 'Desenvolvo e gerencio plataformas web modernas, pipelines de triagem com IA e crescimento digital contínuo para empresas, com comunicação 100% direta e sem intermediários de agência.'}
              </p>
            </div>

            {/* Quick Status Cards */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-400">
                <MapPin className="w-4 h-4 text-[#FFC069] shrink-0" />
                <span>Salvador / BA · Brasil (Global Remote)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-400">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fuso Horário: GMT-3 (Brasília) · Online</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{language === 'en' ? '100% Code Ownership & Security' : '100% Propriedade do Código & Segurança'}</span>
              </div>
            </div>
          </div>

          {/* Column 2 (2.5 cols): Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#FFC069]" />
              <span>{language === 'en' ? 'Navigation' : 'Navegação'}</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="text-zinc-400 hover:text-[#FFC069] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <span className="text-zinc-600 text-xs">›</span>
                      <span>{link.label}</span>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-zinc-400 hover:text-[#FFC069] transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-zinc-600 text-xs">›</span>
                      <span>{link.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (3 cols): Core Solutions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-[#FFC069]" />
              <span>{language === 'en' ? 'Core Capabilities' : 'Especialidades'}</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono text-zinc-400">
              {solutions.map((sol, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#FFC069] mt-0.5">•</span>
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 (2 cols): Direct Connect */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <Send className="w-3.5 h-3.5 text-[#FFC069]" />
              <span>{language === 'en' ? 'Connect' : 'Contato'}</span>
            </h4>

            <div className="space-y-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl glass-card hover:border-[#FFC069]/40 text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl glass-card hover:border-[#FFC069]/40 text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[#FFC069] shrink-0" />
                <span>GitHub</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl glass-card hover:border-[#FFC069]/40 text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>LinkedIn</span>
              </a>

              <a
                href={emailUrl}
                className="flex items-center gap-2.5 p-2.5 rounded-xl glass-card hover:border-[#FFC069]/40 text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>E-mail</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM COPYRIGHT & ATTRIBUTION BAR ───────────────── */}
      <div className="border-t border-white/8 py-6 px-4 sm:px-6 lg:px-8 bg-black/60 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p className="text-center sm:text-left">
            © 2026 Gustavo Galvão. {language === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'}
          </p>

          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-zinc-400 transition-colors">
              {language === 'en' ? 'Privacy Policy' : 'Privacidade'}
            </a>
            <a href="/terms" className="hover:text-zinc-400 transition-colors">
              {language === 'en' ? 'Terms' : 'Termos'}
            </a>
            <span className="text-zinc-700 hidden md:inline">
              React 19 · TypeScript · Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card hover:bg-white/10 text-zinc-300 hover:text-[#FFC069] border border-white/10 transition-all text-[11px]"
              aria-label="Voltar ao topo"
            >
              <span>{language === 'en' ? 'Back to top' : 'Voltar ao topo'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
