import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface ClientProjectItem {
  id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  tags: string[];
  year?: string;
}

interface SelectedWorkListProps {
  projects: ClientProjectItem[];
  images: Record<string, string>;
  onSelectProject: (id: string) => void;
  label?: string;
  language?: 'pt' | 'en';
}

export const SelectedWorkList: React.FC<SelectedWorkListProps> = ({
  projects,
  images,
  onSelectProject,
  label = 'SELECTED WORK',
  language = 'pt',
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for smooth cursor tracking within container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring smoothing for organic floating movement
  const springConfig = { stiffness: 300, damping: 26, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle dynamic rotation based on cursor horizontal position (-3deg to +3deg)
  const rotate = useTransform(smoothX, [0, 800], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const activeProject = projects.find((p) => p.id === hoveredId);
  const activeImage = activeProject ? images[activeProject.id] : null;

  // Clean title helper (removes period or subtitle suffix if formatted as "Name. Subtitle")
  const getCleanTitle = (title: string) => {
    const parts = title.split(/[.·]/);
    return parts[0]?.trim() || title;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredId(null)}
      className="w-full relative"
    >
      {/* Header Label */}
      <div className="flex items-center gap-2 mb-6 sm:mb-8">
        <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
          {label}
        </span>
      </div>

      {/* Project List */}
      <div className="w-full flex flex-col divide-y divide-zinc-800/60 relative z-10">
        {projects.map((project) => {
          const isHovered = hoveredId === project.id;
          const cleanTitle = getCleanTitle(project.title);
          const year = project.year || '2024';

          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onClick={() => onSelectProject(project.id)}
              className="group relative cursor-pointer py-6 sm:py-7 transition-all duration-300 outline-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project.id);
                }
              }}
            >
              {/* Background Hover Highlight Pill */}
              {isHovered && (
                <motion.div
                  layoutId="selectedWorkHoverBackground"
                  className="absolute inset-0 bg-[#161618]/90 border border-white/10 rounded-2xl shadow-xl shadow-black/50 pointer-events-none -mx-4 sm:-mx-6 px-4 sm:px-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}

              {/* Row Content */}
              <div className="relative z-10 flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between gap-4">
                  {/* Title + Arrow */}
                  <div className="flex items-center gap-2">
                    <h3
                      className={`text-xl sm:text-2xl font-bold tracking-tight transition-all duration-300 ${
                        isHovered
                          ? 'text-white underline decoration-white/30 decoration-2 underline-offset-4'
                          : 'text-zinc-200 group-hover:text-white'
                      }`}
                    >
                      {cleanTitle}
                    </h3>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        isHovered
                          ? 'text-[#FFC069] translate-x-1 -translate-y-1 opacity-100'
                          : 'text-zinc-400 opacity-0 group-hover:opacity-80'
                      }`}
                    />
                  </div>

                  {/* Year / Metadata */}
                  <span
                    className={`text-xs sm:text-sm font-mono transition-colors duration-300 shrink-0 ${
                      isHovered ? 'text-zinc-300 font-medium' : 'text-zinc-600'
                    }`}
                  >
                    {year}
                  </span>
                </div>

                {/* Subtitle / Short Description */}
                <p
                  className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 max-w-2xl ${
                    isHovered ? 'text-zinc-300' : 'text-zinc-400 group-hover:text-zinc-300'
                  }`}
                >
                  {project.solution || project.challenge}
                </p>

                {/* Tags Pill (Subtle on Hover) */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap gap-1.5 pt-2"
                  >
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#FFC069]"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Mobile In-line Preview (Only visible on touch / mobile screens) */}
              <div className="md:hidden mt-3 pt-2">
                {images[project.id] && (
                  <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden border border-white/10 bg-black/40 relative shadow-md">
                    <img
                      src={images[project.id]}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}
                {/* Tags row — always visible on mobile */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#FFC069]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── DESKTOP MOUSE-FOLLOWING FLOATING IMAGE PREVIEW ──── */}
      <div className="hidden md:block pointer-events-none absolute inset-0 overflow-visible z-40">
        <AnimatePresence>
          {hoveredId && activeProject && (
            <motion.div
              style={{
                left: smoothX,
                top: smoothY,
                rotate: rotate,
                translateX: 24,
                translateY: -110,
              }}
              initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-72 sm:w-80 lg:w-96 aspect-[16/10] rounded-2xl overflow-hidden border border-white/20 bg-zinc-950 shadow-[0_30px_90px_rgba(0,0,0,0.85)] pointer-events-none"
            >
              {/* Inner Image Container with Rich Blur Crossfade Transition */}
              <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="popLayout">
                  {activeImage && (
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.06 }}
                      animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                      exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.96 }}
                      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={activeImage}
                        alt={activeProject.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                      {/* Floating Meta inside the following card */}
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-widest text-[#FFC069] font-semibold">
                            {activeProject.client}
                          </div>
                          <div className="text-xs font-bold text-white tracking-tight">
                            {getCleanTitle(activeProject.title)}
                          </div>
                        </div>

                        <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-300 flex items-center gap-1">
                          <span>{language === 'en' ? 'View' : 'Ver'}</span>
                          <ArrowUpRight className="w-2.5 h-2.5 text-[#FFC069]" />
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Subtle gold glow around card */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#FFC069]/20 to-transparent blur-xl pointer-events-none -z-10" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
