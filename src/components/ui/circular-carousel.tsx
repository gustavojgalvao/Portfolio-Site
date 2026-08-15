"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  tag?: string;
}

export interface CircularCarouselProps {
  items: CarouselItem[];
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

// Arc positions — 5 visible cards spread in a wide arc
const CARD_W = 340;
const CARD_H = 200;

const ARC_OFFSETS: { x: number; y: number; scale: number; opacity: number; z: number }[] = [
  { x: -620, y:  55, scale: 0.72, opacity: 0.35, z: 1 },
  { x: -330, y: -18, scale: 0.86, opacity: 0.65, z: 2 },
  { x:    0, y: -60, scale: 1.00, opacity: 1.00, z: 5 },
  { x:  330, y: -18, scale: 0.86, opacity: 0.65, z: 2 },
  { x:  620, y:  55, scale: 0.72, opacity: 0.35, z: 1 },
];

function getSlot(index: number, active: number, total: number): number | null {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  const slot = offset + 2; // center slot = 2
  if (slot < 0 || slot > 4) return null;
  return slot;
}

export function CircularCarousel({
  items,
  activeIndex: controlledIndex,
  onActiveChange,
  autoPlay = true,
  autoPlayInterval = 4000,
  className,
}: CircularCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeIndex = controlledIndex ?? internalIndex;
  const total = items.length;

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % total) + total) % total;
      if (controlledIndex === undefined) setInternalIndex(next);
      onActiveChange?.(next);
    },
    [total, controlledIndex, onActiveChange],
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // autoplay
  useEffect(() => {
    if (!autoPlay || isHovered) return;
    intervalRef.current = setInterval(next, autoPlayInterval);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [autoPlay, autoPlayInterval, isHovered, next]);

  // keyboard
  useEffect(() => {
    const el = containerRef.current;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    el?.addEventListener("keydown", handler);
    return () => el?.removeEventListener("keydown", handler);
  }, [next, prev]);

  const activeItem = items[activeIndex];

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="System Architecture Carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative flex flex-col items-center gap-10 outline-none select-none", className)}
    >
      {/* ── ARC TRACK ─────────────────────────────────────────────────────── */}
      <div
        className="relative w-full"
        style={{ height: CARD_H + 160 }}
      >
        {items.map((item, i) => {
          const slot = getSlot(i, activeIndex, total);
          if (slot === null) return null;

          const pos = ARC_OFFSETS[slot];
          const isActive = i === activeIndex;

          return (
            <motion.button
              key={item.id}
              onClick={() => goTo(i)}
              aria-label={item.title}
              aria-selected={isActive}
              role="option"
              animate={{
                x: pos.x,
                y: pos.y,
                scale: pos.scale,
                opacity: pos.opacity,
                zIndex: pos.z,
              }}
              transition={{
                duration: 0.30,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={cn(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer",
                "flex flex-col items-start justify-between rounded-3xl p-7 text-left",
                "border transition-colors will-change-transform",
                isActive
                  ? "border-orange-500/50 shadow-[0_32px_64px_-12px_rgba(255,85,0,0.30)]"
                  : "border-white/12 hover:border-white/25",
              )}
              style={{
                width: CARD_W,
                height: CARD_H,
                background: isActive
                  ? "rgba(20, 18, 24, 0.82)"
                  : "rgba(14, 14, 18, 0.62)",
                backdropFilter: "blur(32px) saturate(200%)",
                WebkitBackdropFilter: "blur(32px) saturate(200%)",
                boxShadow: isActive
                  ? "0 32px 64px -12px rgba(255,85,0,0.25), inset 0 1px 1px rgba(255,255,255,0.18)"
                  : "0 12px 32px -8px rgba(0,0,0,0.55), inset 0 1px 1px rgba(255,255,255,0.08)",
              }}
            >
              {/* Tag */}
              {item.tag && (
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider border",
                    isActive
                      ? "bg-orange-500/20 text-orange-300 border-orange-500/40"
                      : "bg-white/8 text-zinc-400 border-white/12",
                  )}
                >
                  {item.tag}
                </span>
              )}

              {/* Body */}
              <div className="space-y-2 w-full">
                <h3
                  className={cn(
                    "font-bold leading-tight transition-colors",
                    isActive ? "text-white text-xl" : "text-white/70 text-base",
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed line-clamp-2 transition-colors",
                    isActive ? "text-zinc-300" : "text-zinc-500",
                  )}
                >
                  {item.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* ── ACTIVE DETAIL CARD ─────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem?.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="w-full max-w-xl rounded-3xl p-8 text-center border border-white/10"
          style={{
            background: "rgba(16, 14, 20, 0.75)",
            backdropFilter: "blur(32px) saturate(200%)",
            WebkitBackdropFilter: "blur(32px) saturate(200%)",
            boxShadow: "0 20px 50px -10px rgba(0,0,0,0.5), inset 0 1px 1.5px rgba(255,255,255,0.15)",
          }}
        >
          <p className="text-zinc-300 text-base leading-relaxed">{activeItem?.description}</p>
        </motion.div>
      </AnimatePresence>

      {/* ── CONTROLS ──────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-5">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={prev}
          aria-label="Previous"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white hover:border-orange-500/50 transition-colors"
          style={{
            background: "rgba(20, 20, 26, 0.65)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          <ChevronLeft className="size-5" />
        </motion.button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-200",
                i === activeIndex ? "w-7 bg-orange-500" : "w-2 bg-white/20 hover:bg-white/40",
              )}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={next}
          aria-label="Next"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white hover:border-orange-500/50 transition-colors"
          style={{
            background: "rgba(20, 20, 26, 0.65)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          <ChevronRight className="size-5" />
        </motion.button>
      </div>
    </div>
  );
}

export default CircularCarousel;
