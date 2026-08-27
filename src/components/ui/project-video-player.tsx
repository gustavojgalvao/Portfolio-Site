import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectVideoPlayerProps {
  poster: string;
  videoSrc?: string;
  title: string;
  category: string;
}

export const ProjectVideoPlayer: React.FC<ProjectVideoPlayerProps> = ({
  poster,
  videoSrc,
  title,
  category,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative w-full rounded-[24px] overflow-hidden glass-card shadow-xl">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#FFC069]/10 to-transparent pointer-events-none z-10" />

      {/* Main Video or Animated Mockup Screen */}
      <div className="relative aspect-video w-full bg-black/90 flex items-center justify-center overflow-hidden">
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover bg-[#060608]"
          />
        ) : (
          <div className="relative w-full h-full">
            {/* High-res image with ambient pan & zoom animation */}
            <motion.img
              src={poster}
              alt={title}
              animate={{
                scale: isPlaying ? [1, 1.04, 1] : 1,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full h-full object-cover"
            />
            {/* Scanlines / subtle sheen */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Simulation HUD Overlay */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono font-bold text-zinc-300">
                LIVE DEMO PREVIEW
              </span>
            </div>
          </div>
        )}

        {/* Big Center Play/Pause button (Visible only when paused) */}
        <button
          onClick={togglePlay}
          className={`absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:border-[#FFC069]/60 hover:text-[#FFC069] z-20 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
        </button>
      </div>

      {/* Glass Video Controls Bar */}
      <div className="p-4 sm:p-5 bg-[#050505]/80 backdrop-blur-xl border-t border-white/5 flex flex-col gap-3 relative z-20">
        {/* Progress Scrubber Bar */}
        <div
          onClick={(e) => {
            if (videoRef.current) {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              videoRef.current.currentTime = pos * (videoRef.current.duration || 1);
            }
          }}
          className="w-full h-1.5 bg-white/10 hover:h-2 rounded-full overflow-hidden cursor-pointer transition-all relative"
        >
          <motion.div
            className="h-full bg-[#FFC069]"
            style={{ width: `${progress || (isPlaying ? 65 : 0)}%` }}
          />
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label={isPlaying ? 'Pausar' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleMute}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
              aria-label={isMuted ? 'Desmutar' : 'Mutar'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <div className="hidden sm:flex items-center gap-2 text-[11px] text-zinc-400">

              <span>{category}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-[#FFC069] font-bold">
              1080P · 60FPS
            </span>

            <button
              onClick={handleFullscreen}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
              aria-label="Tela cheia"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectVideoPlayer;
