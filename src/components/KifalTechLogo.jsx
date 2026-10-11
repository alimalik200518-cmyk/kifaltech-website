import React from 'react';
import { Link } from './Router.jsx';

export default function KifalTechLogo({ compact = false, showTagline = true, style = {} }) {
  return (
    <Link
      to="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: compact ? '9px' : '11px',
        textDecoration: 'none',
        userSelect: 'none',
        ...style
      }}
      aria-label="KifalTech - 100% Remote Global Digital Agency"
    >
      {/* Flat Monochrome Minimalist Geometric Accent Mark */}
      <div
        style={{
          width: compact ? '30px' : '34px',
          height: compact ? '30px' : '34px',
          borderRadius: '0px',
          border: '1px solid rgba(255, 255, 255, 0.22)',
          backgroundColor: '#111111',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'border-color 0.15s ease'
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width={compact ? "18" : "20"}
          height={compact ? "18" : "20"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flat Minimalist Architectural 'K' with subtle precision geometric cut */}
          <line
            x1="6"
            y1="4.5"
            x2="6"
            y2="19.5"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="square"
          />
          <path
            d="M6 12L16 4.5"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="square"
          />
          <path
            d="M10.5 9.5L17.5 19.5"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="square"
          />
          {/* Subtle Geometric Point Accent in Bold Red */}
          <rect
            x="17"
            y="4.5"
            width="2.5"
            height="2.5"
            fill="#D32525"
          />
        </svg>
      </div>

      {/* Flat Monochrome Typography */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: compact ? '1.18rem' : '1.34rem',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.025em',
              lineHeight: 1
            }}
          >
            KIFALTECH
          </span>
          {/* Subtle Geometric Slash Accent in Bold Red */}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: compact ? '0.95rem' : '1.05rem',
              color: '#D32525',
              fontWeight: 800,
              marginLeft: '2px',
              userSelect: 'none'
            }}
          >
            /
          </span>
        </div>

        {showTagline && !compact && (
          <span
            style={{
              fontSize: '0.62rem',
              fontFamily: 'var(--font-mono)',
              color: 'rgba(255, 255, 255, 0.45)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginTop: '4px',
              fontWeight: 500
            }}
          >
            GLOBAL DIGITAL AGENCY
          </span>
        )}
      </div>
    </Link>
  );
}
