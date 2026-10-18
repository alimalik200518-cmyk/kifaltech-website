import React from 'react';
import { HALLOWEEN_CONFIG } from '../config/halloweenConfig.js';

/**
 * HalloweenBats
 * Layered, subtle silhouettes of dark swooping bats flying across negative space
 * and section breaks (behind "Meet Our Founders", "Specialized Digital Services", etc.).
 * Includes natural wing-flapping, curved swooping paths, and faint electric cyan rim glow.
 */
export default function HalloweenBats({ variant = 'founders', style = {} }) {
  if (!HALLOWEEN_CONFIG.enabled || !HALLOWEEN_CONFIG.animations?.bats) {
    return null;
  }

  // Realistic bat SVG silhouette path
  const BatSvg = ({ size = 38, glow = false }) => (
    <svg
      width={size}
      height={Math.round(size * 0.52)}
      viewBox="0 0 100 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: glow
          ? 'drop-shadow(0 0 8px rgba(211, 37, 37, 0.35)) drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
          : 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.9))',
        opacity: 0.75
      }}
    >
      <path
        d="M50 20C48 14 44 8 41 2C40 6 38 10 35 12C31 6 24 3 17 5C19 12 18 19 15 25C10 21 4 21 0 24C3 31 10 36 18 37C22 43 28 47 36 46C41 40 45 32 50 27C55 32 59 40 64 46C72 47 78 43 82 37C90 36 97 31 100 24C96 21 90 21 85 25C82 19 81 12 83 5C76 3 69 6 65 12C62 10 60 6 59 2C56 8 52 14 50 20Z"
        fill="#070D18"
        stroke="rgba(211, 37, 37, 0.3)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Bat Eyes Glowing Cyan */}
      <circle cx="48" cy="18" r="1.1" fill="#D32525" opacity="0.85" />
      <circle cx="52" cy="18" r="1.1" fill="#D32525" opacity="0.85" />
    </svg>
  );

  return (
    <div
      className={`halloween-bats-layer bats-${variant}`}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        ...style
      }}
      aria-hidden="true"
    >
      {/* Bat 1: Swooping High Left to Right */}
      <div
        className="bat-item bat-swoop-left"
        style={{
          position: 'absolute',
          top: variant === 'services' ? '12%' : '8%',
          left: '4%',
          animation: 'batFlightCurve1 18s cubic-bezier(0.4, 0, 0.2, 1) infinite'
        }}
      >
        <div style={{ animation: 'batWingFlap 0.38s ease-in-out infinite alternate' }}>
          <BatSvg size={44} glow />
        </div>
      </div>

      {/* Bat 2: Distance Silhouette (Small, high altitude) */}
      <div
        className="bat-item bat-distance"
        style={{
          position: 'absolute',
          top: variant === 'services' ? '30%' : '18%',
          right: '8%',
          animation: 'batFlightCurve2 22s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          animationDelay: '3s'
        }}
      >
        <div style={{ animation: 'batWingFlap 0.28s ease-in-out infinite alternate' }}>
          <BatSvg size={26} />
        </div>
      </div>

      {/* Bat 3: Diagonal Glider across negative space */}
      <div
        className="bat-item bat-glider"
        style={{
          position: 'absolute',
          top: variant === 'services' ? '65%' : '48%',
          left: '18%',
          animation: 'batFlightCurve3 24s ease-in-out infinite',
          animationDelay: '7s'
        }}
      >
        <div style={{ animation: 'batWingFlap 0.44s ease-in-out infinite alternate' }}>
          <BatSvg size={34} glow />
        </div>
      </div>

      {/* Bat 4: Deep Right Swoop */}
      <div
        className="bat-item bat-swoop-right"
        style={{
          position: 'absolute',
          top: variant === 'services' ? '82%' : '72%',
          right: '15%',
          animation: 'batFlightCurve4 20s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
          animationDelay: '11s'
        }}
      >
        <div style={{ animation: 'batWingFlap 0.34s ease-in-out infinite alternate' }}>
          <BatSvg size={30} />
        </div>
      </div>
    </div>
  );
}
