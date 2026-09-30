import React from 'react';
import { Link } from './Router.jsx';

export default function KifalTechLogo({ compact = false, showTagline = true, style = {} }) {
  return (
    <Link
      to="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
        userSelect: 'none',
        ...style
      }}
      aria-label="KifalTech Home"
    >
      {/* Precision Technical Geometric Mark */}
      <div
        style={{
          position: 'relative',
          width: compact ? '32px' : '36px',
          height: compact ? '32px' : '36px',
          borderRadius: '6px',
          backgroundColor: '#221d1d',
          border: '1px solid rgba(41, 217, 197, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="#29D9C5"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Architectural 'K' geometry */}
          <line x1="5" y1="4" x2="5" y2="20" />
          <line x1="17" y1="4" x2="5" y2="12" />
          <line x1="7.5" y1="10.5" x2="18" y2="20" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: compact ? '1.2rem' : '1.35rem',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              lineHeight: 1
            }}
          >
            KIFAL
          </span>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: compact ? '1.2rem' : '1.35rem',
              fontWeight: 800,
              color: '#29D9C5',
              letterSpacing: '-0.025em',
              lineHeight: 1
            }}
          >
            TECH
          </span>
        </div>

        {showTagline && !compact && (
          <span
            style={{
              fontSize: '0.62rem',
              fontFamily: 'var(--font-mono)',
              color: '#a0a0a0',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginTop: '3px',
              fontWeight: 600
            }}
          >
            DIGITAL SOFTWARE AGENCY
          </span>
        )}
      </div>
    </Link>
  );
}
