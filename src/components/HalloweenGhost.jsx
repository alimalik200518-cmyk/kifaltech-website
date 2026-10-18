import React, { useState, useEffect, useRef } from 'react';

/**
 * Professional Interactive Ethereal Halloween Ghost Companion
 * - Sleek, high-end SVG vector ghost with luminous cyan spectral gradient
 * - Sine-wave floating & swaying keyframes
 * - Interactive eyes that track cursor movement
 * - Interactive dialog speech bubble with Halloween promo code & CTA
 * - Minimize / expand toggle for non-intrusive luxury UX
 */
export default function HalloweenGhost({ onClaimOffer }) {
  const [minimized, setMinimized] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const ghostRef = useRef(null);

  // Track cursor position to orient the ghost's eyes
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ghostRef.current) return;
      const rect = ghostRef.current.getBoundingClientRect();
      const ghostCenterX = rect.left + rect.width / 2;
      const ghostCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - ghostCenterX;
      const deltaY = e.clientY - ghostCenterY;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(3.5, Math.hypot(deltaX, deltaY) / 60);

      setPupilPos({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClickGhost = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 800);
  };

  return (
    <div
      ref={ghostRef}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9998,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        pointerEvents: 'auto',
        fontFamily: 'var(--font-sans)'
      }}
      className="halloween-ghost-container"
    >
      {/* Interactive Speech Dialogue Bubble */}
      {!minimized && (
        <div
          style={{
            marginBottom: '12px',
            backgroundColor: 'rgba(10, 16, 26, 0.94)',
            border: '1px solid rgba(211, 37, 37, 0.4)',
            borderRadius: '12px',
            padding: '12px 16px',
            maxWidth: '280px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(211, 37, 37, 0.2)',
            backdropFilter: 'blur(12px)',
            color: '#FFFFFF',
            position: 'relative',
            animation: 'ghostBubblePop 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            transition: 'all 0.25s ease'
          }}
        >
          {/* Close / Minimize Pill */}
          <button
            onClick={() => setMinimized(true)}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: 'transparent',
              border: 'none',
              color: '#8FAEC2',
              fontSize: '14px',
              cursor: 'pointer',
              padding: '2px 6px',
              lineHeight: 1
            }}
            aria-label="Minimize Halloween companion"
            title="Minimize"
          >
            ✕
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <span style={{ fontSize: '1rem' }}>👻</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                color: '#D32525',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              KifalTech Spooky Sprint
            </span>
          </div>

          <p
            style={{
              fontSize: '0.82rem',
              color: '#DCEBF5',
              lineHeight: 1.45,
              margin: '0 0 10px 0'
            }}
          >
            Complimentary Security &amp; Lighthouse 98+ audit with code{' '}
            <strong style={{ color: '#D32525', fontFamily: 'var(--font-mono)' }}>SPOOKY26</strong>!
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => onClaimOffer && onClaimOffer({ title: 'Halloween Sprint Offer' })}
              className="btn btn-primary"
              style={{
                height: '32px',
                padding: '0 14px',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}
            >
              Claim Offer
            </button>
            <span
              style={{
                fontSize: '0.7rem',
                fontFamily: 'var(--font-mono)',
                color: '#8FAEC2'
              }}
            >
              Ends Oct 31
            </span>
          </div>

          {/* Little speech arrow pointing down to ghost */}
          <div
            style={{
              position: 'absolute',
              bottom: '-6px',
              right: '34px',
              width: '12px',
              height: '12px',
              backgroundColor: 'rgba(10, 16, 26, 0.94)',
              borderRight: '1px solid rgba(211, 37, 37, 0.4)',
              borderBottom: '1px solid rgba(211, 37, 37, 0.4)',
              transform: 'rotate(45deg)'
            }}
          />
        </div>
      )}

      {/* Floating Ghost Avatar */}
      <div
        onClick={handleClickGhost}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          cursor: 'pointer',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: clicked
            ? 'ghostTrick 0.8s ease-in-out'
            : 'ghostFloating 3.6s ease-in-out infinite',
          transition: 'transform 0.2s ease',
          transform: hovered ? 'scale(1.08)' : 'scale(1)'
        }}
        title={minimized ? "Click to view Halloween Special" : "Click for a spooky trick!"}
      >
        {/* Soft Ambient Ethereal Glow */}
        <div
          style={{
            position: 'absolute',
            inset: '-10px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(211, 37, 37, 0.35) 0%, rgba(14, 116, 144, 0.15) 50%, transparent 70%)',
            filter: 'blur(8px)',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        {/* Ethereal SVG Ghost Illustration */}
        <svg
          width={minimized ? "54" : "72"}
          height={minimized ? "64" : "84"}
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 4px 16px rgba(211, 37, 37, 0.4))' }}
        >
          <defs>
            {/* Spectral Body Gradient matching Cyan/Teal brand */}
            <linearGradient id="ghostBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98"/>
              <stop offset="45%" stopColor="#E2F7FD" stopOpacity="0.94"/>
              <stop offset="85%" stopColor="#8BE4F8" stopOpacity="0.88"/>
              <stop offset="100%" stopColor="#D32525" stopOpacity="0.82"/>
            </linearGradient>

            <linearGradient id="ghostEyeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#070C14"/>
              <stop offset="100%" stopColor="#0E1E2E"/>
            </linearGradient>

            <filter id="ghostAura" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#D32525" floodOpacity="0.6"/>
            </filter>
          </defs>

          {/* Ethereal Ghost Spectral Body */}
          <path
            d="M 50 10 
               C 22 10, 16 35, 16 55 
               C 16 75, 12 95, 20 106 
               C 24 112, 30 104, 35 106 
               C 40 108, 44 115, 50 115 
               C 56 115, 60 108, 65 106 
               C 70 104, 76 112, 80 106 
               C 88 95, 84 75, 84 55 
               C 84 35, 78 10, 50 10 Z"
            fill="url(#ghostBodyGrad)"
            stroke="rgba(211, 37, 37, 0.65)"
            strokeWidth="1.8"
          />

          {/* Left Friendly Arm */}
          <path
            d="M 20 54 C 10 50, 4 60, 14 68 C 18 64, 20 60, 20 54 Z"
            fill="url(#ghostBodyGrad)"
            opacity="0.9"
          />

          {/* Right Friendly Arm waving */}
          <path
            d="M 80 52 C 92 42, 98 55, 88 64 C 84 60, 81 56, 80 52 Z"
            fill="url(#ghostBodyGrad)"
            opacity="0.9"
          />

          {/* Glowing Rosy Cheeks in Electric Cyan */}
          <circle cx="34" cy="54" r="5" fill="#D32525" opacity="0.45" filter="blur(2px)"/>
          <circle cx="66" cy="54" r="5" fill="#D32525" opacity="0.45" filter="blur(2px)"/>

          {/* Left Eye & Tracking Pupil */}
          <ellipse cx="38" cy="44" rx="5" ry="6.5" fill="url(#ghostEyeGrad)"/>
          <ellipse
            cx={38 + pupilPos.x}
            cy={44 + pupilPos.y}
            rx="2.2"
            ry="2.6"
            fill="#D32525"
          />
          {/* Eye Sparkle Catchlight */}
          <circle cx={36.5 + pupilPos.x * 0.5} cy={42 + pupilPos.y * 0.5} r="1.2" fill="#FFFFFF"/>

          {/* Right Eye & Tracking Pupil */}
          <ellipse cx="62" cy="44" rx="5" ry="6.5" fill="url(#ghostEyeGrad)"/>
          <ellipse
            cx={62 + pupilPos.x}
            cy={44 + pupilPos.y}
            rx="2.2"
            ry="2.6"
            fill="#D32525"
          />
          {/* Eye Sparkle Catchlight */}
          <circle cx={60.5 + pupilPos.x * 0.5} cy={42 + pupilPos.y * 0.5} r="1.2" fill="#FFFFFF"/>

          {/* Cute Little Smile */}
          <path
            d="M 46 54 Q 50 60 54 54"
            stroke="#070C14"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Mini Pumpkin Emblem on Chest */}
          <g transform="translate(42, 70) scale(0.42)">
            <ellipse cx="20" cy="20" rx="14" ry="12" fill="#FF7A00"/>
            <path d="M 20 8 Q 23 2 26 4" stroke="#D32525" strokeWidth="2.5" fill="none"/>
            <path d="M 14 17 L 18 17 L 16 13 Z M 22 17 L 26 17 L 24 13 Z" fill="#070C14"/>
            <path d="M 15 23 Q 20 28 25 23 Z" fill="#070C14"/>
          </g>
        </svg>

        {/* Minimized Pill to reopen */}
        {minimized && (
          <span
            style={{
              fontSize: '0.62rem',
              fontFamily: 'var(--font-mono)',
              color: '#D32525',
              backgroundColor: '#070C14',
              border: '1px solid rgba(211, 37, 37, 0.4)',
              padding: '2px 8px',
              borderRadius: '999px',
              marginTop: '4px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => {
              e.stopPropagation();
              setMinimized(false);
            }}
          >
            Spooky Offer
          </span>
        )}
      </div>

      <style>{`
        @keyframes ghostFloating {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(2deg);
          }
        }
        @keyframes ghostTrick {
          0% {
            transform: rotate(0deg) scale(1);
          }
          40% {
            transform: rotate(-18deg) scale(1.18);
          }
          70% {
            transform: rotate(370deg) scale(1.12);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
        @keyframes ghostBubblePop {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
