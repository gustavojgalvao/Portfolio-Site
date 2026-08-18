import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ReactLenis } from "lenis/react";
import React, { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export interface ScrollingProjectItem {
  id?: string;
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
}

export const StickyCard: React.FC<StickyCardProps> = ({
  i,
  total,
  project,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-20 sm:top-24 flex items-center justify-center px-4 sm:px-6 w-full"
      style={{
        marginBottom: i === total - 1 ? '0px' : '40px',
      }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(${i * 24}px)`,
        }}
        className="group relative origin-top overflow-hidden rounded-3xl border border-white/15 bg-[#0a0a0d] shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 hover:border-[#FFC069]/40 hover:shadow-[0_20px_60px_rgba(255,192,105,0.15)] w-full max-w-2xl sm:max-w-3xl h-[340px] sm:h-[420px] md:h-[460px]"
      >
        <a
          href={project.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFC069]"
          aria-label={`Ver projeto ${project.title}`}
        >
          {/* Main project image - becomes frosted/blurred on hover */}
          <img
            src={project.src || "/placeholder.svg"}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[8px] group-hover:brightness-[0.45]"
          />

          {/* Ambient gradient vignette (always visible for contrast) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Permanent bottom bar (visible when not hovered) */}
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFC069] uppercase">
                {project.subtitle || `PROJETO 0${i + 1}`}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
            <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Frosted Glass Overlay (appears with blur & reveal on hover) */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 md:p-10 opacity-0 group-hover:opacity-100 backdrop-blur-md bg-black/40 transition-all duration-500 ease-out pointer-events-none">
            {/* Top row of tags */}
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

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-zinc-300">
                <span>VISITAR</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FFC069]" />
              </div>
            </div>

            {/* Bottom info: Title, Desc, and CTA */}
            <div className="space-y-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-normal">
                {project.desc}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FFC069] tracking-wide">
                <span>Clique para abrir a demonstração interativa</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export interface ImagesScrollingAnimationProps {
  items: ScrollingProjectItem[];
}

export const ImagesScrollingAnimation: React.FC<ImagesScrollingAnimationProps> = ({ items }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <div
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[20vh] pt-[4vh]"
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
            />
          );
        })}
      </div>
    </ReactLenis>
  );
};

export default ImagesScrollingAnimation;
