import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GooeyLayerProps {
  dominantColor?: 'gold' | 'orange' | 'red';
  cursorChase?: boolean;
  className?: string;
  children?: React.ReactNode;
  blobCount?: number;
}

/**
 * GooeyLayer — reusable gooey glow backdrop.
 * Works via an SVG feGaussianBlur + feColorMatrix filter that fuses
 * radial gradient blobs into one organic, flame-like liquid shape.
 * mix-blend-mode: screen ensures it only brightens the black bg.
 *
 * Props:
 *   dominantColor — which palette tone leads (gold | orange | red)
 *   cursorChase   — one blob chases the cursor via GSAP quickTo
 *   className     — extra classes on the wrapper (use for sizing/positioning)
 */
const GooeyLayer: React.FC<GooeyLayerProps> = ({
  dominantColor = 'gold',
  cursorChase = false,
  className = '',
  children,
  blobCount = 3,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chaseBlobRef = useRef<HTMLDivElement>(null);
  const driftRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Blob size and initial positions by count
  const blobConfigs = [
    { size: 480, x: '25%', y: '30%' },
    { size: 420, x: '65%', y: '55%' },
    { size: 380, x: '45%', y: '70%' },
    { size: 350, x: '15%', y: '65%' },
  ].slice(0, blobCount);

  // Pick colors based on dominantColor
  const colorMap = {
    gold:   ['glow-blob-gold', 'glow-blob-orange', 'glow-blob-gold',   'glow-blob-orange'],
    orange: ['glow-blob-orange', 'glow-blob-gold',  'glow-blob-orange', 'glow-blob-red'],
    red:    ['glow-blob-red',    'glow-blob-orange', 'glow-blob-red',   'glow-blob-orange'],
  };
  const colors = colorMap[dominantColor];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(hover: none)').matches;

    const ctx = gsap.context(() => {
      // Autonomous drift for all non-chase blobs
      driftRefs.current.forEach((blob, i) => {
        if (!blob) return;
        if (prefersReduced) return;

        const duration = 8 + i * 3.5;
        const xRange = 80 + i * 30;
        const yRange = 60 + i * 20;

        gsap.to(blob, {
          x: `+=${xRange}`,
          y: `+=${yRange}`,
          duration,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: i * 1.2,
        });
        gsap.to(blob, {
          scale: 0.85 + Math.random() * 0.3,
          duration: duration * 0.7,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: i * 0.8,
        });
      });

      // Cursor-chase for first blob (only on pointer devices, only when cursorChase=true)
      if (cursorChase && chaseBlobRef.current && !isTouchDevice && !prefersReduced) {
        const chaseX = gsap.quickTo(chaseBlobRef.current, 'x', { duration: 1.0, ease: 'power3.out' });
        const chaseY = gsap.quickTo(chaseBlobRef.current, 'y', { duration: 1.0, ease: 'power3.out' });

        const onMove = (e: MouseEvent) => {
          const rect = container.getBoundingClientRect();
          const relX = e.clientX - rect.left - (chaseBlobRef.current?.offsetWidth ?? 0) / 2;
          const relY = e.clientY - rect.top - (chaseBlobRef.current?.offsetHeight ?? 0) / 2;
          chaseX(relX);
          chaseY(relY);
        };

        container.addEventListener('mousemove', onMove);
        return () => container.removeEventListener('mousemove', onMove);
      }
    }, container);

    return () => ctx.revert();
  }, [cursorChase]);

  const filterId = `gooey-${dominantColor}-${cursorChase ? 'chase' : 'drift'}`;

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ isolation: 'isolate' }}>
      {/* Hidden SVG filter definition */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
              result="gooey"
            />
            <feBlend in="SourceGraphic" in2="gooey" mode="normal" />
          </filter>
        </defs>
      </svg>

      {/* Gooey blob container */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ filter: `url(#${filterId})` }}
        aria-hidden="true"
      >
        {blobConfigs.map((cfg, i) => {
          const isChase = i === 0 && cursorChase;
          return (
            <div
              key={i}
              ref={(el) => {
                if (isChase) {
                  (chaseBlobRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
                } else {
                  driftRefs.current[i] = el;
                }
              }}
              className={`glow-blob ${colors[i] ?? 'glow-blob-gold'}`}
              style={{
                width: cfg.size,
                height: cfg.size,
                left: cfg.x,
                top: cfg.y,
                transform: 'translate(-50%, -50%)',
                opacity: 0.65,
              }}
            />
          );
        })}
      </div>

      {/* Section content sits above the glow */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GooeyLayer;
