import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";

export interface ScrollingProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  desc: string;
  src: string;
  videoSrc?: string;
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
        className="group relative origin-top overflow-hidden rounded-[24px] sm:rounded-[32px] glass-card shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-[#FFC069]/50 hover:shadow-[0_25px_60px_rgba(255,192,105,0.2)] w-full max-w-2xl sm:max-w-3xl h-[270px] sm:h-[380px] md:h-[460px] cursor-pointer select-none active:scale-[0.98]"
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
            className="h-full w-full object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:scale-105 md:group-hover:brightness-[0.7] pointer-events-none"
          />

          {/* Stronger gradient for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent opacity-80 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 md:p-10 pointer-events-none overflow-hidden">
            
            {/* Wrapper that translates up on hover */}
            <div className="transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:translate-y-[130px] md:group-hover:translate-y-0">
              
              {/* HEADER ROW (Always visible) */}
              <div className="flex items-end justify-between">
                <div className="space-y-1 sm:space-y-2 flex-1 min-w-0 pr-4">
                  <div className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#FFC069] uppercase transition-transform duration-500">
                    {project.subtitle || `PROJETO 0${i + 1}`}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight truncate md:whitespace-normal">
                    {project.title}
                  </h3>
                </div>
                
                {/* Action Button */}
                <div className="shrink-0 transition-transform duration-500">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full glass-card border-white/20 flex items-center justify-center text-white shadow-xl md:group-hover:bg-[#FFC069] md:group-hover:text-[#050505] md:group-hover:border-[#FFC069] transition-all duration-300">
                    {project.videoSrc ? (
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-1 fill-current" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </div>

              {/* REVEAL AREA (Desktop) */}
              <div className="opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-5 hidden md:flex flex-col gap-5">
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-normal line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex items-center justify-between gap-3 pt-5 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FFC069] tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-bold text-[#FFC069] tracking-wide flex items-center gap-2">
                    <span>{project.videoSrc ? 'Ver Vídeo & Detalhes' : 'Ver Detalhes'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* MOBILE REVEAL AREA (Always visible, simplified) */}
              <div className="md:hidden mt-4 space-y-3">
                <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0,3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#FFC069]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
