import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  MessageSquare,
  CheckCircle2,
  Layers,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import type { ProjectDetail } from '../../data/projectsData';
import { ProjectVideoPlayer } from './project-video-player';
import { useLanguage } from '../../context/LanguageContext';

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

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const { language } = useLanguage();

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const whatsappMessage =
    language === 'en'
      ? `Hi Gustavo! I was looking at your project "${project.title}" and would like to build something similar.`
      : `Olá Gustavo! Estive olhando seu projeto "${project.title}" e gostaria de conversar sobre algo similar.`;

  const whatsappUrl = `https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop Blur Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl rounded-[32px] glass-panel border border-white/15 bg-[#09090c]/95 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden my-auto max-h-[92vh] flex flex-col z-10"
          >
            {/* ── STICKY TOP HEADER ─────────────────────────────── */}
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/60 backdrop-blur-xl shrink-0">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#FFC069]/15 border border-[#FFC069]/30 text-[#FFC069] text-xs font-mono font-bold uppercase tracking-wider">
                  {project.category}
                </span>

                {project.isOnline && (
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-semibold">
                    <span>{language === 'en' ? 'LIVE ON VERCEL' : 'ONLINE EM PRODUÇÃO'}</span>
                  </span>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2.5 rounded-full glass-card hover:bg-white/15 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ── SCROLLABLE BODY ───────────────────────────────── */}
            <div className="overflow-y-auto p-5 sm:p-8 md:p-10 space-y-8 flex-1">
              {/* Title & Quick Actions */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                  {project.subtitle}
                </span>
                <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
                  {project.desc}
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-[#7A1610] via-[#E8642F] to-[#FFC069] hover:scale-[1.02] text-white font-bold text-sm shadow-xl shadow-orange-500/20 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0" />
                      <span>{language === 'en' ? 'Visit Live Website' : 'Acessar Site no Ar'}</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-full glass-card hover:bg-white/10 text-white font-semibold text-sm border border-white/15 transition-all"
                    >
                      <GithubIcon className="w-4 h-4 text-[#FFC069] shrink-0" />
                      <span>{language === 'en' ? 'View Source on GitHub' : 'Ver Código no GitHub'}</span>
                    </a>
                  )}

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full glass-card hover:bg-white/10 text-zinc-300 hover:text-white text-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{language === 'en' ? 'Discuss Similar Project' : 'Quero um projeto similar'}</span>
                  </a>
                </div>
              </div>

              {/* ── VIDEO / MEDIA PRESENTATION ────────────────────── */}
              <div className="w-full">
                <ProjectVideoPlayer
                  poster={project.image}
                  videoSrc={project.videoSrc}
                  title={project.title}
                  category={project.category}
                />
              </div>

              {/* ── CONTENT GRID: DETAILS, METRICS, TECH ──────────── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                {/* Left Col (8 cols): Deep Description, Challenge & Solution, Features */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Detailed Description */}
                  <div className="p-8 sm:p-10 space-y-3">
                    <div className="flex items-center gap-2 text-[#FFC069]">
                      <h3 className="text-base font-mono font-bold uppercase tracking-wider">
                        {language === 'en' ? 'Project Overview' : 'Visão Geral do Projeto'}
                      </h3>
                    </div>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-8 sm:p-10 space-y-2">
                      <span className="text-xs font-mono font-bold text-[#E8642F] uppercase tracking-wider block">
                        {language === 'en' ? 'The Challenge' : 'O Desafio'}
                      </span>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="p-8 sm:p-10 space-y-2">
                      <span className="text-xs font-mono font-bold text-[#FFC069] uppercase tracking-wider block">
                        {language === 'en' ? 'The Engineering Solution' : 'A Solução de Engenharia'}
                      </span>
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Features Checklist */}
                  <div className="p-8 sm:p-10 space-y-4">
                    <div className="flex items-center gap-2 text-white">
                      <Layers className="w-4 h-4 text-[#FFC069]" />
                      <h3 className="text-base font-bold tracking-tight">
                        {language === 'en' ? 'Key Features & Capabilities' : 'Recursos Principais & Capacidades'}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {project.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Col (4 cols): Metrics, Stack, Links */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Metrics & Performance Box */}
                  <div className="p-8 sm:p-10 space-y-4">
                    <div className="flex items-center gap-2 text-white">
                      <BarChart3 className="w-4 h-4 text-[#FFC069]" />
                      <h3 className="text-sm font-mono font-bold uppercase tracking-wider">
                        {language === 'en' ? 'Key Metrics' : 'Métricas Principais'}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="p-4 space-y-1">
                          <span className="text-lg font-extrabold text-[#FFC069] font-mono block">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-zinc-400 font-mono leading-tight block">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="p-8 sm:p-10 space-y-3">
                    <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider block">
                      {language === 'en' ? 'Technologies Used' : 'Tecnologias Utilizadas'}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Direct CTA Card */}
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-[#7A1610]/40 via-[#E8642F]/20 to-black border border-[#FFC069]/30 text-center space-y-4">
                    <span className="text-xs font-mono text-[#FFC069] font-bold uppercase tracking-widest block">
                      {language === 'en' ? 'NEED A SIMILAR SYSTEM?' : 'PRECISA DE UM PROJETO ASSIM?'}
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {language === 'en'
                        ? 'Direct 1-on-1 collaboration with the engineer. Fast delivery, custom code, and zero agency overhead.'
                        : 'Desenvolvimento sob medida direto com o engenheiro. Entrega rápida, código limpo e sem intermediários.'}
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#FFC069] text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FFC069]/20 hover:scale-105 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Chat on WhatsApp' : 'Falar no WhatsApp'}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
