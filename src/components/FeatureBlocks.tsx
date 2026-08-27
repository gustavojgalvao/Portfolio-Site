import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import GooeyLayer from './ui/GooeyLayer';
import { useGsapReveal } from '../hooks/useGsapReveal';

/* ── Custom SVG Animations & Keyframes ───────────────────────── */
const styles = `
  @keyframes floatUp {
    0% { transform: translateY(10px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  @keyframes pulseGlow {
    0% { opacity: 0.4; filter: drop-shadow(0 0 10px rgba(255, 192, 105, 0.2)); }
    50% { opacity: 1; filter: drop-shadow(0 0 25px rgba(255, 192, 105, 0.6)); }
    100% { opacity: 0.4; filter: drop-shadow(0 0 10px rgba(255, 192, 105, 0.2)); }
  }
  @keyframes slideInRight {
    0% { transform: translateX(20px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideInLeft {
    0% { transform: translateX(-20px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  @keyframes starPulse {
    0%, 100% { transform: scale(1); fill: #FFC069; }
    50% { transform: scale(1.2); fill: #fff; }
  }
`;

/* ── Block 1: Digital Presence (Detailed Desktop & Mobile Wireframes) ─── */
const PresenceGraphic: React.FC = () => (
  <div className="w-full h-[350px] sm:h-[450px] flex justify-center items-center relative overflow-visible">
    <style>{styles}</style>
    <svg viewBox="0 0 600 450" className="w-full h-full max-w-[550px] overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Desktop Window (Muted Gray) */}
      <g style={{ animation: 'floatUp 1.5s ease-out forwards', transformOrigin: 'center' }}>
        <rect x="50" y="40" width="450" height="280" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" style={{ backdropFilter: 'blur(10px)' }} />
        {/* Browser Top Bar */}
        <path d="M 50 64 L 500 64" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <circle cx="70" cy="52" r="4" fill="rgba(255,255,255,0.05)" />
        <circle cx="85" cy="52" r="4" fill="rgba(255,255,255,0.05)" />
        <circle cx="100" cy="52" r="4" fill="rgba(255,255,255,0.05)" />
        {/* Desktop Content Blocks */}
        <rect x="80" y="85" width="200" height="120" rx="8" fill="rgba(255,255,255,0.02)" />
        <rect x="300" y="85" width="160" height="50" rx="8" fill="rgba(255,255,255,0.02)" />
        <rect x="300" y="145" width="160" height="60" rx="8" fill="rgba(255,255,255,0.02)" />
        <rect x="80" y="220" width="120" height="40" rx="8" fill="rgba(255,255,255,0.02)" />
        <rect x="210" y="220" width="120" height="40" rx="8" fill="rgba(255,255,255,0.02)" />
        <rect x="340" y="220" width="120" height="40" rx="8" fill="rgba(255,255,255,0.02)" />
      </g>

      {/* Foreground Mobile Phone */}
      <g style={{ animation: 'floatUp 1.2s ease-out 0.2s forwards', opacity: 0, transformOrigin: 'center' }}>
        {/* Phone Body */}
        <rect x="340" y="80" width="180" height="340" rx="28" fill="#09090b" stroke="rgba(255,255,255,0.1)" strokeWidth="2" style={{ filter: 'drop-shadow(-10px 20px 30px rgba(0,0,0,0.8))' }} />
        {/* Notch */}
        <rect x="400" y="90" width="60" height="12" rx="6" fill="#000" />
        
        {/* Mobile Header / Hero */}
        <rect x="355" y="110" width="150" height="100" rx="12" fill="rgba(255,255,255,0.03)" />
        <circle cx="430" cy="160" r="24" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M425 152 L438 160 L425 168 Z" fill="rgba(255,255,255,0.2)" />

        {/* 5-Star Profile Section (HIGHLIGHTED) */}
        <rect x="355" y="225" width="150" height="70" rx="12" fill="rgba(255,192,105,0.05)" stroke="rgba(255,192,105,0.2)" />
        <rect x="370" y="240" width="60" height="8" rx="4" fill="#FFC069" />
        <g transform="translate(370, 255)">
          {/* Detailed Stars (Fixed Position) */}
          {[0, 16, 32, 48, 64].map((offset, i) => (
             <path 
               key={i} 
               d="M6 0L7.8 3.8L12 4.4L8.9 7.3L9.7 11.4L6 9.4L2.3 11.4L3.1 7.3L0 4.4L4.2 3.8L6 0Z" 
               fill="#FFC069" 
               style={i === 4 ? { animation: 'starPulse 2s infinite' } : {}}
               transform={`translate(${offset}, 0)`}
             />
          ))}
        </g>
        <rect x="370" y="270" width="120" height="4" rx="2" fill="rgba(255,192,105,0.4)" />
        <rect x="370" y="280" width="90" height="4" rx="2" fill="rgba(255,192,105,0.2)" />

        {/* UI Cards on Mobile */}
        <rect x="355" y="310" width="70" height="80" rx="12" fill="rgba(255,255,255,0.03)" />
        <rect x="435" y="310" width="70" height="80" rx="12" fill="rgba(255,255,255,0.03)" />
      </g>

      {/* Floating Badges */}
      <g style={{ animation: 'slideInRight 1.2s ease-out 0.8s forwards', opacity: 0 }}>
        <rect x="180" y="180" width="130" height="40" rx="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" style={{ backdropFilter: 'blur(12px)' }} />
        <circle cx="205" cy="200" r="8" fill="rgba(255,255,255,0.2)" />
        <rect x="225" y="197" width="60" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
      </g>
    </svg>
  </div>
);

/* ── Block 2: Search & AI Citations (Detailed Browser & AI UI) ────── */
const SearchGraphic: React.FC = () => (
  <div className="w-full h-[350px] sm:h-[450px] flex justify-center items-center relative overflow-visible">
    <svg viewBox="0 0 600 450" className="w-full h-full max-w-[550px] overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      {/* Background Search Engine Window (Grayed Out) */}
      <rect x="40" y="60" width="400" height="320" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" style={{ animation: 'floatUp 1.2s ease-out forwards', backdropFilter: 'blur(8px)' }} />
      <path d="M 40 90 L 440 90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" style={{ animation: 'floatUp 1.2s ease-out forwards' }} />
      
      {/* Detailed Search Bar */}
      <rect x="70" y="120" width="340" height="44" rx="22" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" style={{ animation: 'floatUp 1s ease-out 0.2s forwards', opacity: 0 }} />
      <circle cx="100" cy="142" r="8" stroke="rgba(255,255,255,0.2)" strokeWidth="2" style={{ animation: 'floatUp 1s ease-out 0.3s forwards', opacity: 0 }} />
      <line x1="106" y1="148" x2="114" y2="156" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" style={{ animation: 'floatUp 1s ease-out 0.3s forwards', opacity: 0 }} />
      
      {/* Search Text (Simulated typing) - HIGHLIGHTED */}
      <rect x="135" y="138" width="120" height="8" rx="4" fill="#FFC069" style={{ animation: 'floatUp 1s ease-out 0.5s forwards', opacity: 0 }} />
      <line x1="265" y1="132" x2="265" y2="152" stroke="#FFC069" strokeWidth="2" style={{ animation: 'pulseGlow 1s infinite 0.5s', opacity: 0 }} />

      {/* Traditional Search Results (Muted) */}
      <g style={{ animation: 'floatUp 1s ease-out 0.6s forwards', opacity: 0 }}>
        <rect x="70" y="200" width="80" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect x="70" y="215" width="220" height="12" rx="6" fill="rgba(255,255,255,0.08)" />
        <rect x="70" y="235" width="300" height="4" rx="2" fill="rgba(255,255,255,0.03)" />
        <rect x="70" y="245" width="260" height="4" rx="2" fill="rgba(255,255,255,0.03)" />
      </g>

      {/* Foreground Overlapping AI Chat/Overview Panel (HIGHLIGHTED) */}
      <g style={{ animation: 'slideInRight 1.2s ease-out 0.8s forwards', opacity: 0 }}>
        <rect x="220" y="170" width="340" height="200" rx="16" fill="#09090b" stroke="rgba(255,192,105,0.2)" strokeWidth="2" style={{ filter: 'drop-shadow(-15px 25px 35px rgba(0,0,0,0.6))' }} />
        
        {/* AI Header */}
        <path d="M 220 220 L 560 220" stroke="rgba(255,192,105,0.1)" strokeWidth="1" />
        
        <rect x="245" y="192" width="100" height="10" rx="5" fill="rgba(255,255,255,0.2)" />

        {/* AI Generated Text Blocks */}
        <rect x="245" y="240" width="280" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="245" y="260" width="260" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="245" y="280" width="290" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="245" y="300" width="180" height="6" rx="3" fill="rgba(255,255,255,0.1)" />

        {/* AI Citation Chip (HIGHLIGHTED) */}
        <rect x="245" y="325" width="160" height="28" rx="14" fill="rgba(255,192,105,0.1)" stroke="#FFC069" strokeWidth="1" />
        <circle cx="265" cy="339" r="6" fill="#FFC069" />
        <path d="M262 342 L268 336 M264 336 L268 336 L268 340" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="280" y="336" width="90" height="6" rx="3" fill="rgba(255,192,105,0.8)" />
      </g>
    </svg>
  </div>
);

/* ── Block 3: AI CRM (Detailed WhatsApp & AI Neural Processing) ───────── */
const CRMChatGraphic: React.FC = () => (
  <div className="w-full h-[350px] sm:h-[450px] flex justify-center items-center relative overflow-visible">
    <svg viewBox="0 0 600 450" className="w-full h-full max-w-[550px] overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      {/* Background Neural AI Nodes (Muted Gray) */}
      <g style={{ animation: 'pulseGlow 4s infinite', opacity: 0.3 }}>
        <path d="M100 200 L 250 250 L 150 350 Z" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
        <path d="M250 250 L 400 150 L 500 250 Z" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
        <circle cx="250" cy="250" r="40" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
        <circle cx="250" cy="250" r="10" fill="rgba(255,255,255,0.1)" />
        <circle cx="400" cy="150" r="8" fill="rgba(255,255,255,0.1)" />
        <circle cx="100" cy="200" r="6" fill="rgba(255,255,255,0.1)" />
      </g>

      {/* Mobile Chat Interface (Muted Gray) */}
      <rect x="280" y="40" width="240" height="380" rx="32" fill="#09090b" stroke="rgba(255,255,255,0.1)" strokeWidth="2" style={{ animation: 'floatUp 1s ease-out forwards', backdropFilter: 'blur(15px)', filter: 'drop-shadow(0px 20px 40px rgba(0,0,0,0.6))' }} />
      
      {/* Chat Header */}
      <rect x="280" y="40" width="240" height="70" rx="32" fill="rgba(255,255,255,0.02)" />
      <rect x="280" y="90" width="240" height="20" fill="rgba(255,255,255,0.02)" />
      <circle cx="325" cy="75" r="18" fill="rgba(255,255,255,0.05)" />
      <path d="M320 75 Q325 65 330 75 Q325 85 320 75" fill="rgba(255,255,255,0.2)" />
      <rect x="355" y="65" width="80" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
      <rect x="355" y="80" width="50" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <path d="M280 110 L520 110" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

      {/* Chat Bubbles */}
      <g style={{ animation: 'slideInLeft 0.8s ease-out 0.4s forwards', opacity: 0 }}>
        {/* Incoming */}
        <rect x="300" y="130" width="160" height="50" rx="12" fill="rgba(255,255,255,0.05)" />
        <path d="M295 140 L305 135 L305 145 Z" fill="rgba(255,255,255,0.05)" />
        <rect x="315" y="145" width="120" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="315" y="157" width="90" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      </g>

      {/* Floating AI Qualification Badge (HIGHLIGHTED) */}
      <g style={{ animation: 'slideInRight 0.8s ease-out 0.8s forwards', opacity: 0 }}>
        <rect x="180" y="180" width="180" height="44" rx="22" fill="rgba(255,192,105,0.1)" stroke="#FFC069" strokeWidth="1.5" style={{ backdropFilter: 'blur(10px)', filter: 'drop-shadow(-10px 10px 20px rgba(0,0,0,0.5))' }} />
        <circle cx="210" cy="202" r="10" fill="#FFC069" style={{ animation: 'pulseGlow 2s infinite' }} />
        <path d="M206 202 L209 206 L215 198" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="230" y="195" width="80" height="6" rx="3" fill="#FFC069" />
        <rect x="230" y="207" width="110" height="4" rx="2" fill="rgba(255,192,105,0.7)" />
      </g>

      <g style={{ animation: 'slideInRight 0.8s ease-out 1.2s forwards', opacity: 0 }}>
        {/* Outgoing (AI Response - Gray) */}
        <rect x="340" y="240" width="160" height="70" rx="12" fill="rgba(255,255,255,0.05)" />
        <path d="M505 250 L495 245 L495 255 Z" fill="rgba(255,255,255,0.05)" />
        <rect x="355" y="255" width="130" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="355" y="270" width="100" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="355" y="285" width="115" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      </g>

      {/* Typing Indicator */}
      <g style={{ animation: 'floatUp 0.8s ease-out 1.6s forwards', opacity: 0 }}>
        <rect x="300" y="330" width="60" height="30" rx="15" fill="rgba(255,255,255,0.05)" />
        <circle cx="315" cy="345" r="3" fill="rgba(255,255,255,0.2)" style={{ animation: 'pulseGlow 1s infinite' }} />
        <circle cx="330" cy="345" r="3" fill="rgba(255,255,255,0.2)" style={{ animation: 'pulseGlow 1s infinite 0.2s' }} />
        <circle cx="345" cy="345" r="3" fill="rgba(255,255,255,0.2)" style={{ animation: 'pulseGlow 1s infinite 0.4s' }} />
      </g>
    </svg>
  </div>
);

/* ── Blocks config ──────────────────────────────────────────── */

const VISUAL_COMPONENTS = [PresenceGraphic, SearchGraphic, CRMChatGraphic];
const DOMINANT_COLORS: ('gold' | 'orange' | 'red')[] = ['gold', 'orange', 'red'];

/* ── Main Component ─────────────────────────────────────────── */

export const FeatureBlocks: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useGsapReveal({ y: 50, duration: 0.9, stagger: 0.2 });

  return (
    <section
      id="features"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="bg-[#050505]"
    >
      {/* Eyebrow centered above all blocks */}
      <div className="text-center pt-24 pb-2 px-4">
        <div className="section-badge inline-flex gsap-child">
          {t.featureBlocks.eyebrow}
        </div>
      </div>

      {t.featureBlocks.blocks.map((block, i) => {
        const Visual = VISUAL_COMPONENTS[i];
        const color = DOMINANT_COLORS[i];
        const isReversed = i % 2 === 1;

        return (
          <div key={i} className="relative overflow-hidden py-20 sm:py-28">
            <GooeyLayer
              dominantColor={color}
              cursorChase={false}
              className="absolute inset-0"
              blobCount={3}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div
                className={`flex flex-col-reverse ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
              >
                {/* Text side */}
                <div className="flex-1 space-y-6 gsap-child">
                  <div className="inline-flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: color === 'gold' ? '#FFC069' : color === 'orange' ? '#E8642F' : '#7A1610' }}
                    />
                    <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">
                      {['Presence', 'Visibility', 'Intelligence'][i]}
                    </span>
                  </div>

                  <h2
                    className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.1]"
                    style={{ letterSpacing: '-0.025em' }}
                  >
                    {block.title}
                  </h2>

                  <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-md">
                    {block.copy}
                  </p>
                </div>

                {/* Visual side */}
                <div className="flex-1 w-full gsap-child flex justify-center items-center">
                  <Visual />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
