import React, { useState } from 'react';

/**
 * Professional Interactive Halloween Pumpkin (Jack-o'-Lantern)
 * - Sleek cyber-metallic obsidian body with Electric Cyan & Amber inner flame
 * - Realistic flame flicker and breathing glow animation
 * - Interactive mouse hover & click animation with glowing ember burst
 */
export default function HalloweenPumpkin({ size = 56, style = {}, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [ignited, setIgnited] = useState(false);

  const handleClick = (e) => {
    setIgnited(true);
    setTimeout(() => setIgnited(false), 700);
    if (onClick) onClick(e);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        userSelect: 'none',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: ignited
          ? 'scale(1.22) rotate(-6deg)'
          : hovered
          ? 'scale(1.12) translateY(-2px)'
          : 'scale(1)',
        ...style
      }}
      title="Interactive Jack-o'-Lantern — Click to ignite!"
    >
      {/* Dynamic Ambient Flame Glow */}
      <div
        style={{
          position: 'absolute',
          inset: '-6px',
          borderRadius: '50%',
          background: hovered || ignited
            ? 'radial-gradient(circle, rgba(211, 37, 37, 0.45) 0%, rgba(255, 122, 0, 0.35) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(211, 37, 37, 0.2) 0%, rgba(255, 122, 0, 0.15) 50%, transparent 70%)',
          filter: 'blur(6px)',
          transition: 'all 0.3s ease',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* High-End Vector Jack-o'-Lantern */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'relative',
          zIndex: 1,
          filter: hovered
            ? 'drop-shadow(0 0 12px rgba(211, 37, 37, 0.75))'
            : 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6))'
        }}
      >
        <defs>
          {/* Cyber-Obsidian Pumpkin Rib Body Gradient */}
          <linearGradient id="pumpkinShell" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E2A38"/>
            <stop offset="40%" stopColor="#0F1722"/>
            <stop offset="100%" stopColor="#070B12"/>
          </linearGradient>

          {/* Glowing Inner Flame (Electric Cyan + Warm Amber) */}
          <linearGradient id="flameInner" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={ignited ? "#FFFFFF" : "#D32525"}/>
            <stop offset="40%" stopColor="#D32525"/>
            <stop offset="85%" stopColor="#FF7A00"/>
            <stop offset="100%" stopColor="#FF4D00"/>
          </linearGradient>

          {/* Stem Metallic Gradient */}
          <linearGradient id="pumpkinStem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D32525"/>
            <stop offset="60%" stopColor="#165B72"/>
            <stop offset="100%" stopColor="#0E3542"/>
          </linearGradient>

          <filter id="flameGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#D32525" floodOpacity="0.8"/>
          </filter>
        </defs>

        {/* Stem (stalk with subtle cyber curve) */}
        <path
          d="M 48 24 C 47 14, 53 10, 56 6 C 59 10, 54 18, 52 24 Z"
          fill="url(#pumpkinStem)"
          stroke="rgba(211, 37, 37, 0.5)"
          strokeWidth="1.2"
        />

        {/* Outer Left Lobe */}
        <ellipse cx="32" cy="56" rx="20" ry="26" fill="url(#pumpkinShell)" stroke="rgba(211, 37, 37, 0.35)" strokeWidth="1.5"/>

        {/* Outer Right Lobe */}
        <ellipse cx="68" cy="56" rx="20" ry="26" fill="url(#pumpkinShell)" stroke="rgba(211, 37, 37, 0.35)" strokeWidth="1.5"/>

        {/* Mid Left Lobe */}
        <ellipse cx="40" cy="58" rx="19" ry="28" fill="url(#pumpkinShell)" stroke="rgba(211, 37, 37, 0.45)" strokeWidth="1.5"/>

        {/* Mid Right Lobe */}
        <ellipse cx="60" cy="58" rx="19" ry="28" fill="url(#pumpkinShell)" stroke="rgba(211, 37, 37, 0.45)" strokeWidth="1.5"/>

        {/* Central Lobe */}
        <ellipse cx="50" cy="59" rx="18" ry="29" fill="url(#pumpkinShell)" stroke="rgba(211, 37, 37, 0.6)" strokeWidth="1.8"/>

        {/* Carved Glowing Left Eye (Triangular with sharp cyber angles) */}
        <polygon
          points="35,46 44,54 32,54"
          fill="url(#flameInner)"
          filter="url(#flameGlow)"
          className="pumpkin-eye"
        />

        {/* Carved Glowing Right Eye */}
        <polygon
          points="65,46 68,54 56,54"
          fill="url(#flameInner)"
          filter="url(#flameGlow)"
          className="pumpkin-eye"
        />

        {/* Carved Glowing Nose */}
        <polygon
          points="50,56 46,62 54,62"
          fill="url(#flameInner)"
          filter="url(#flameGlow)"
        />

        {/* Carved Grinning Mouth with Jagged Teeth */}
        <path
          d="M 30 68 
             L 36 71 L 38 67 L 42 71 L 46 66 L 50 71 L 54 66 L 58 71 L 62 67 L 64 71 L 70 68 
             Q 50 84 30 68 Z"
          fill="url(#flameInner)"
          filter="url(#flameGlow)"
          className="pumpkin-mouth"
        />
      </svg>

      <style>{`
        .pumpkin-eye, .pumpkin-mouth {
          animation: pumpkinFlicker 3s ease-in-out infinite alternate;
        }
        @keyframes pumpkinFlicker {
          0% {
            opacity: 0.9;
            filter: drop-shadow(0 0 2px #D32525);
          }
          30% {
            opacity: 1;
            filter: drop-shadow(0 0 7px #D32525) drop-shadow(0 0 12px #FF7A00);
          }
          60% {
            opacity: 0.82;
            filter: drop-shadow(0 0 3px #D32525);
          }
          100% {
            opacity: 1;
            filter: drop-shadow(0 0 9px #D32525) drop-shadow(0 0 16px #FF7A00);
          }
        }
      `}</style>
    </div>
  );
}
