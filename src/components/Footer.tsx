import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowUp,
  FileText,
} from 'lucide-react';

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
  const instagramUrl = 'https://instagram.com/jezlercodes';
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

  return (
    <footer className="relative bg-[#050505] text-zinc-400 border-t border-white/10 pt-16 pb-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,192,105,0.03) 0%, transparent 70%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-[#FFC069] font-mono text-xl font-bold leading-none tracking-tighter">
                //
              </span>
              <h3 className="text-xl font-extrabold text-white tracking-tight">Gustavo</h3>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              {language === 'en'
                ? 'High-performance web systems and AI automations. Direct partnership with no agency middlemen.'
                : 'Sistemas web de alta performance e automações com IA. Parceria direta sem intermediários de agência.'}
            </p>
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-mono">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>Salvador / BA · Brasil (GMT-3)</span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-5">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              {language === 'en' ? 'Navigation' : 'Navegação'}
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.slice(0, 5).map((link, idx) => (
                <li key={idx}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 lg:col-span-3 space-y-5">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              {language === 'en' ? 'Connect' : 'Contato'}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <span>WhatsApp</span>
                  <ArrowUp className="w-3 h-3 rotate-45 opacity-50" />
                </a>
              </li>
              <li>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <span>LinkedIn</span>
                  <ArrowUp className="w-3 h-3 rotate-45 opacity-50" />
                </a>
              </li>
              <li>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <span>Instagram</span>
                  <ArrowUp className="w-3 h-3 rotate-45 opacity-50" />
                </a>
              </li>
              <li>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <span>GitHub</span>
                  <ArrowUp className="w-3 h-3 rotate-45 opacity-50" />
                </a>
              </li>
              <li>
                <a href={emailUrl} className="hover:text-white transition-colors flex items-center gap-2">
                  <span>E-mail</span>
                  <ArrowUp className="w-3 h-3 rotate-45 opacity-50" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Downloads Column */}
          <div className="md:col-span-12 lg:col-span-2 space-y-5">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              {language === 'en' ? 'Resources' : 'Recursos'}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={cvUrl} download className="hover:text-white transition-colors flex items-center gap-2 text-[#FFC069]">
                  <FileText className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Resume (PDF)' : 'Currículo (PDF)'}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <p>
            © {new Date().getFullYear()} Gustavo Galvão. {language === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'}
          </p>

          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-zinc-400 transition-colors">
              {language === 'en' ? 'Privacy Policy' : 'Privacidade'}
            </a>
            <a href="/terms" className="hover:text-zinc-400 transition-colors">
              {language === 'en' ? 'Terms' : 'Termos'}
            </a>
            
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors ml-2"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
