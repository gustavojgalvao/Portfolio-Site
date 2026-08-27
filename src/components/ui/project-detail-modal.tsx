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

  const whatsappUrl = `https://wa.me/5571992550509?text=${encodeURIComponent(
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
            className="relative w-full max-w-6xl rounded-[32px] glass-card bg-[#050505]/95 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col z-10"
          >
            {/* ── STICKY TOP HEADER ─────────────────────────────── */}
            <div className="p-5 sm:p-6 border-b border-white/5 flex items-center justify-between bg-[#050505]/80 backdrop-blur-2xl shrink-0">
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
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                  {project.subtitle}
                </span>
                <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
                  {project.desc}
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full sm:w-auto !px-6 !py-3 !text-sm"
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
                      className="btn-ghost w-full sm:w-auto !px-6 !py-3 !text-sm"
                    >
                      <GithubIcon className="w-4 h-4 text-[#FFC069] shrink-0" />
                      <span>{language === 'en' ? 'View Source on GitHub' : 'Ver Código no GitHub'}</span>
                    </a>
                  )}

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost w-full sm:w-auto !px-6 !py-3 !text-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{language === 'en' ? 'Discuss Similar Project' : 'Quero um projeto similar'}</span>
                  </a>
                </div>
              </div>

              {/* ── VIDEO / MEDIA PRESENTATION ────────────────────── */}
              {project.videoSrc && (
                <div className="w-full">
                  <ProjectVideoPlayer
                    poster={project.image}
                    videoSrc={project.videoSrc}
                    title={project.title}
                    category={project.category}
                  />
                </div>
              )}

              {/* ── CONTENT GRID: DETAILS, METRICS, TECH (BENTO GRID) ──────────── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 pt-4">
                {/* Left Col (8 cols): Deep Description, Challenge & Solution, Features */}
                <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6">
                  {/* Detailed Description */}
                  <div className="glass-card rounded-[24px] p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-2 text-[#FFC069]">
                      <h3 className="text-sm font-mono font-bold uppercase tracking-wider">
                        {language === 'en' ? 'Project Overview' : 'Visão Geral do Projeto'}
                      </h3>
                    </div>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="glass-card rounded-[24px] p-6 sm:p-8 space-y-3">
                      <span className="text-xs font-mono font-bold text-[#E8642F] uppercase tracking-wider block">
                        {language === 'en' ? 'The Challenge' : 'O Desafio'}
                      </span>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="glass-card rounded-[24px] p-6 sm:p-8 space-y-3">
                      <span className="text-xs font-mono font-bold text-[#FFC069] uppercase tracking-wider block">
                        {language === 'en' ? 'The Engineering Solution' : 'A Solução de Engenharia'}
                      </span>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Features Checklist */}
                  <div className="glass-card rounded-[24px] p-6 sm:p-8 space-y-5">
                    <div className="flex items-center gap-2 text-white border-b border-white/5 pb-4">
                      <Layers className="w-5 h-5 text-[#FFC069]" />
                      <h3 className="text-lg font-bold tracking-tight">
                        {language === 'en' ? 'Key Features & Capabilities' : 'Recursos Principais & Capacidades'}
                      </h3>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {project.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Col (4 cols): Metrics, Stack, Links */}
                <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6">
                  {/* Metrics & Performance Box */}
                  <div className="glass-card rounded-[24px] p-6 sm:p-8 space-y-6">
                    <div className="flex items-center gap-2 text-white">
                      <BarChart3 className="w-5 h-5 text-[#FFC069]" />
                      <h3 className="text-sm font-mono font-bold uppercase tracking-wider">
                        {language === 'en' ? 'Key Metrics' : 'Métricas Principais'}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="space-y-1 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                          <span className="text-xl sm:text-2xl font-extrabold text-[#FFC069] block leading-none">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider block mt-1">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="glass-card rounded-[24px] p-6 sm:p-8 space-y-4">
                    <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider block">
                      {language === 'en' ? 'Technologies Used' : 'Tecnologias Utilizadas'}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl text-xs font-mono bg-[#FFC069]/10 border border-[#FFC069]/20 text-[#FFC069]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Direct CTA Card */}
                  <div className="glass-card rounded-[24px] p-6 sm:p-8 border-[#FFC069]/30 bg-gradient-to-br from-[#050505] to-[#FFC069]/5 text-center flex flex-col justify-center h-full min-h-[220px]">
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono text-[#FFC069] font-bold uppercase tracking-widest block">
                        {language === 'en' ? 'NEED A SIMILAR SYSTEM?' : 'PRECISA DE UM PROJETO ASSIM?'}
                      </span>
                      <p className="text-xs text-zinc-300 leading-relaxed max-w-[200px] mx-auto">
                        {language === 'en'
                          ? 'Direct collaboration. Custom code. Zero agency overhead.'
                          : 'Desenvolvimento sob medida. Entrega rápida, sem intermediários.'}
                      </p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full !px-4 !py-3 !text-xs mt-2"
                      >
                        <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                        <span className="whitespace-nowrap">{language === 'en' ? 'Chat on WhatsApp' : 'Falar no WhatsApp'}</span>
                      </a>
                    </div>
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
