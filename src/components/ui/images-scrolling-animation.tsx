import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";

export interface ScrollingProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  desc: string;
  src: string;
  tags: string[];
  url?: string;
}

interface StickyCardProps {
  i: number;
  total: number;
  project: ScrollingProjectItem;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onSelect?: (id: string) => void;
}

export const StickyCard: React.FC<StickyCardProps> = ({
  i,
  total,
  project,
  progress,
  range,
  targetScale,
  onSelect,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-20 sm:top-24 flex items-center justify-center px-2 sm:px-6 w-full"
      style={{
        marginBottom: i === total - 1 ? '0px' : '28px',
        zIndex: i + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(${i * 20}px)`,
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onSelect?.(project.id);
        }}
        className="group relative origin-top overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/15 bg-[#0a0a0d] shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 hover:border-[#FFC069]/50 hover:shadow-[0_25px_60px_rgba(255,192,105,0.2)] w-full max-w-2xl sm:max-w-3xl h-[270px] sm:h-[380px] md:h-[460px] cursor-pointer select-none active:scale-[0.98]"
      >
        <div
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onSelect?.(project.id);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelect?.(project.id);
            }
          }}
          className="relative block w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFC069] rounded-[24px] sm:rounded-[32px]"
          aria-label={`Ver detalhes e vídeo do projeto ${project.title}`}
        >
          {/* Main project image */}
          <img
            src={project.src || "/placeholder.svg"}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-700 ease-out md:group-hover:scale-105 md:group-hover:blur-[8px] md:group-hover:brightness-[0.4] pointer-events-none"
          />

          {/* Gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          {/* Bottom bar — always visible, hidden on desktop hover */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex items-end justify-between transition-opacity duration-300 md:group-hover:opacity-0 pointer-events-none">
            <div className="space-y-1 sm:space-y-1.5 flex-1 min-w-0 pr-3">
              <div className="flex items-center gap-2">
                <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-[#FFC069] uppercase">
                  {project.subtitle || `PROJETO 0${i + 1}`}
                </span>
              </div>
              <h3 className="text-base sm:text-2xl font-bold text-white tracking-tight truncate">
                {project.title}
              </h3>
              {/* Mobile-only description */}
              <p className="text-[11px] text-zinc-400 line-clamp-1 md:hidden leading-relaxed">
                {project.desc}
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl transition-colors">
                <Play className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" />
              </div>
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider md:hidden">Abrir</span>
            </div>
          </div>

          {/* Frosted Glass Overlay — desktop hover only */}
          <div className="absolute inset-0 flex-col justify-between p-6 sm:p-8 md:p-10 opacity-0 md:group-hover:opacity-100 backdrop-blur-md bg-black/45 transition-all duration-500 ease-out pointer-events-none hidden md:flex">
            {/* Top row of tags & Video Badge */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-[#FFC069]/15 border border-[#FFC069]/30 text-[#FFC069] tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC069]/20 border border-[#FFC069]/40 text-xs font-mono font-bold text-[#FFC069] shrink-0">
                <Play className="w-3.5 h-3.5 fill-[#FFC069]" />
                <span>VER DETALHES & VÍDEO</span>
              </div>
            </div>

            {/* Bottom info: Title, Desc, and CTA */}
            <div className="space-y-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-normal">
                {project.desc}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FFC069] tracking-wide">
                <span>Clique para abrir vídeo, código no GitHub e detalhes</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export interface ImagesScrollingAnimationProps {
  items: ScrollingProjectItem[];
  onSelectProject?: (projectId: string) => void;
}

export const ImagesScrollingAnimation: React.FC<ImagesScrollingAnimationProps> = ({
  items,
  onSelectProject,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={container}
      className="relative flex w-full flex-col items-center justify-center pb-[10vh] pt-[2vh]"
    >
      {items.map((project, i) => {
        const targetScale = Math.max(0.75, 1 - (items.length - i - 1) * 0.05);
        const rangeStart = (i / items.length) * 0.8;
        return (
          <StickyCard
            key={project.id || `p_${i}`}
            i={i}
            total={items.length}
            project={project}
            progress={scrollYProgress}
            range={[rangeStart, 1]}
            targetScale={targetScale}
            onSelect={onSelectProject}
          />
        );
      })}
    </div>
  );
};

export default ImagesScrollingAnimation;
