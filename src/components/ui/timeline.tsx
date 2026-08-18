import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Measure total scrollable height of the items container
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  // Maps scroll progress → animated line height / opacity
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const gradientText: React.CSSProperties = {
    letterSpacing: '-0.03em',
    background: 'linear-gradient(135deg, #FFC069 0%, #E8642F 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      {/* Items list — ref measures full height */}
      <div ref={ref} className="relative max-w-5xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-32 md:gap-10">
            {/* ── Sticky year column ─────────────────────── */}
            <div className="sticky top-40 z-40 flex flex-col md:flex-row items-center self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Dot marker */}
              <div
                className="absolute left-3 md:left-3 h-10 w-10 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(255,192,105,0.08)',
                  border: '1px solid rgba(255,192,105,0.25)',
                }}
              >
                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #FFC069 0%, #E8642F 100%)',
                    boxShadow: '0 0 10px rgba(255,192,105,0.6), 0 0 24px rgba(232,100,47,0.3)',
                  }}
                />
              </div>

              {/* Year — desktop */}
              <h3
                className="hidden md:block md:pl-20 md:text-5xl font-extrabold"
                style={gradientText}
              >
                {item.title}
              </h3>
            </div>

            {/* ── Content column ──────────────────────────── */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Year — mobile only */}
              <h3
                className="md:hidden block text-2xl mb-4 font-extrabold"
                style={{ ...gradientText, letterSpacing: '-0.025em' }}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* ── Vertical track ──────────────────────────────── */}
        {/*
          This wrapper sits absolutely behind everything.
          It shows a faint grey track; overflow:hidden is NOT set here
          so the animated fill can be positioned absolutely within it.
        */}
        <div
          className="absolute left-8 top-0 w-[2px]"
          style={{
            height: height + 'px',
            // Faint gold track
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(255,192,105,0.15) 8%, rgba(232,100,47,0.12) 92%, transparent 100%)',
          }}
        >
          {/* ── Animated fill (grows with scroll) ─────────── */}
          <motion.div
            className="absolute top-0 left-0 w-[2px] rounded-full"
            style={{
              height: heightTransform,   // MotionValue — grows 0 → height px
              opacity: opacityTransform, // MotionValue — fades in 0→1
              background:
                'linear-gradient(to bottom, #FFC069 0%, #E8642F 55%, rgba(122,22,16,0.6) 100%)',
              boxShadow: '0 0 8px rgba(255,192,105,0.4)',
            }}
          />
        </div>
      </div>
    </div>
  );
};
