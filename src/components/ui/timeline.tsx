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
    offset: ['start 15%', 'end 50%'],
  });

  // Maps scroll progress → animated line height / opacity
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  const gradientText: React.CSSProperties = {
    letterSpacing: '-0.03em',
    background: 'linear-gradient(135deg, #FFC069 0%, #E8642F 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  return (
    <div className="w-full font-sans md:px-8" ref={containerRef}>
      {/* Items list — ref measures full height */}
      <div ref={ref} className="relative max-w-5xl mx-auto pb-16">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-8 md:pt-24 md:gap-10">
            {/* ── Sticky step column ─────────────────────── */}
            <div className="sticky top-40 z-40 flex flex-col md:flex-row items-center self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Dot marker */}
              <div
                className="absolute left-3 md:left-3 h-10 w-10 rounded-full flex items-center justify-center backdrop-blur-md"
                style={{
                  background: 'rgba(10, 10, 15, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    background: '#FFC069',
                    boxShadow: '0 0 10px #FFC069, 0 0 20px #E8642F',
                  }}
                />
              </div>

              {/* Step indicator — desktop */}
              <h3
                className="hidden md:block md:pl-20 md:text-5xl font-black"
                style={gradientText}
              >
                {item.title}
              </h3>
            </div>

            {/* ── Content column ──────────────────────────── */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Step indicator — mobile only */}
              <h3
                className="md:hidden block text-2xl mb-3 font-extrabold"
                style={{ ...gradientText, letterSpacing: '-0.025em' }}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* ── Subtle Vertical Track Line ──────────────────── */}
        <div
          className="absolute left-8 top-0 w-[1.5px] bg-white/[0.06]"
          style={{ height: height + 'px' }}
        >
          {/* Animated fill (grows with scroll) */}
          <motion.div
            className="absolute top-0 left-0 w-[1.5px] rounded-full"
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              background: 'linear-gradient(to bottom, #FFC069 0%, #E8642F 60%, rgba(232,100,47,0) 100%)',
              boxShadow: '0 0 10px rgba(255, 192, 105, 0.5)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
