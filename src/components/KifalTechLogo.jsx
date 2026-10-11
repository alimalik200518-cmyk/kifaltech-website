import React from 'react';
import { Link } from './Router.jsx';

/**
 * KifalTech Official Brand Logo Lockup
 * Exact 3D Metallic "K" Emblem (blue-cyan and steel tones) from official design assets
 * Accompanied by metallic silver "KIFAL TECH" typography & "DIGITAL SOFTWARE AGENCY" subtitle.
 */
export default function KifalTechLogo({ compact = false, showTagline = true, style = {} }) {
  const iconSize = compact ? '40px' : '46px';

  return (
    <Link
      to="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: compact ? '12px' : '14px',
        textDecoration: 'none',
        userSelect: 'none',
        transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        ...style
      }}
      aria-label="KifalTech - Digital Software Agency"
      className="kifaltech-brand-lockup"
    >
      {/* 3D Metallic "K" Emblem Container */}
      <div
        style={{
          width: iconSize,
          height: iconSize,
          borderRadius: '4px',
          overflow: 'hidden',
          background: 'linear-gradient(145deg, #15202E 0%, #0A111A 100%)',
          border: '1px solid rgba(0, 216, 255, 0.35)',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.75), 0 0 12px rgba(0, 216, 255, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          position: 'relative',
          transition: 'all 0.25s ease'
        }}
        className="brand-logo-container"
      >
        <img
          src="/images/logo/k-mark-3d.png"
          alt="KifalTech 3D K Mark"
          className="brand-logo"
          style={{
            width: '90%',
            height: '90%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))',
            display: 'block'
          }}
        />
        {/* Subtle ambient cyan gleam on the top edge */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0, 216, 255, 0.6), transparent)'
          }}
        />
      </div>

      {/* Brand Typography matching official logo lettering */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', lineHeight: 1 }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: compact ? '1.24rem' : '1.38rem',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.015em',
              lineHeight: 1,
              textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 0 1px rgba(255, 255, 255, 0.3)'
            }}
          >
            KIFAL
          </span>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: compact ? '1.24rem' : '1.38rem',
              fontWeight: 800,
              color: '#00D8FF',
              letterSpacing: '-0.015em',
              lineHeight: 1,
              textShadow: '0 0 14px rgba(0, 216, 255, 0.45)'
            }}
          >
            TECH
          </span>
        </div>

        {showTagline && (
          <span
            style={{
              fontSize: compact ? '0.58rem' : '0.64rem',
              fontFamily: 'var(--font-mono)',
              color: '#8EA2B8',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginTop: '4px',
              fontWeight: 600,
              lineHeight: 1
            }}
          >
            DIGITAL SOFTWARE AGENCY
          </span>
        )}
      </div>
    </Link>
  );
}
