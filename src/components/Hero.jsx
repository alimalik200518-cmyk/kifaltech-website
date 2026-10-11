import React from 'react';
import { agencyData } from '../data/agencyData.js';
import { Link } from './Router.jsx';
import { HALLOWEEN_CONFIG } from '../config/halloweenConfig.js';
import HalloweenPumpkin from './HalloweenPumpkin.jsx';
import WireframePumpkin from './WireframePumpkin.jsx';

import HeroTechCanvas from './HeroTechCanvas.jsx';

export default function Hero({ onStartProject }) {
  const SvgArrow = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  const telemetryMetrics = [
    {
      code: "01 // SYSTEM RUNTIME",
      label: "99.98% SLA UPTIME",
      sub: "Sub-40ms Edge Latency",
      badge: "ACTIVE"
    },
    {
      code: "02 // AUDIT BENCHMARK",
      label: "LIGHTHOUSE 98+",
      sub: "Zero Layout Shift (CLS 0.00)",
      badge: "VERIFIED"
    },
    {
      code: "03 // GLOBAL ENGINEERING",
      label: "USA • PAKISTAN",
      sub: "100% Remote Asynchronous Core",
      badge: "DEPLOYED"
    },
    {
      code: "04 // CODE GOVERNANCE",
      label: "100% IP TRANSFER",
      sub: "Strict TypeScript • Zero Vendor Lock",
      badge: "CLEAN"
    }
  ];

  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 104px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '24px',
        paddingBottom: '28px',
        backgroundColor: '#0A0A0A',
        overflow: 'hidden'
      }}
    >
      {/* 1. Underlying Cinematic Architectural Blueprint Image (12% low-opacity) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/images/hero/hero-architectural-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.12,
          filter: 'grayscale(100%) contrast(1.15) brightness(0.4)',
          zIndex: 0
        }}
      />

      {/* 2. Slow-Moving Cinematic Architectural Wireframe & Data Grid Loop */}
      <HeroTechCanvas />

      {/* 3D Wireframe Pumpkin Parallax Canvas for Halloween (if active) */}
      {HALLOWEEN_CONFIG.enabled && HALLOWEEN_CONFIG.animations?.wireframePumpkin && (
        <WireframePumpkin />
      )}

      {/* 3. Heavy Dark Overlay (#0A0A0A) for Extreme Contrast & Readability */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 45%, rgba(10, 10, 10, 0.72) 0%, rgba(10, 10, 10, 0.92) 65%, #0A0A0A 100%)',
          zIndex: 1
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.8) 0%, transparent 25%, transparent 75%, #0A0A0A 100%)',
          zIndex: 1
        }}
      />

      {/* Center-Stage Editorial Typography Layout */}
      <div className="container" style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', width: '100%' }}>
          
          {/* Eyebrow Metadata Tag */}
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '6px 14px',
                backgroundColor: '#111111',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                borderRadius: '0px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '0px',
                  backgroundColor: '#00D8FF',
                  display: 'inline-block'
                }}
              />
              SYSTEM SPEC // BESPOKE DIGITAL ENGINEERING STUDIO
            </span>
          </div>

          {/* Massive, Edge-to-Edge Editorial Heading */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 4.4rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              margin: '0 auto 20px auto',
              maxWidth: '960px'
            }}
          >
            We Build{' '}
            <span
              style={{
                color: '#00D8FF'
              }}
            >
              Smart Digital
            </span>{' '}
            Solutions for Modern Businesses.
          </h1>

          {/* Editorial Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.18rem)',
              lineHeight: 1.6,
              color: '#9E9E9E',
              maxWidth: '720px',
              margin: '0 auto 30px auto',
              fontWeight: 400
            }}
          >
            We design, engineer, and deploy high-throughput digital platforms, custom web applications, and mission-critical software with ruthless attention to architectural performance.
          </p>

          {/* Action Block CTA Group */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '36px'
            }}
          >
            <button
              onClick={onStartProject}
              className="btn btn-primary"
              style={{
                height: '52px',
                padding: '0 36px',
                fontSize: '0.88rem',
                letterSpacing: '0.08em',
                fontWeight: 800
              }}
            >
              <span>Start a Project</span>
              <SvgArrow />
            </button>

            <Link
              to="/portfolio"
              className="btn btn-secondary"
              style={{
                height: '52px',
                padding: '0 32px',
                fontSize: '0.88rem',
                letterSpacing: '0.08em',
                fontWeight: 700
              }}
            >
              <span>Explore Portfolio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Strict 4-Column Engineering Telemetry Dashboard Bar */}
      <div className="container" style={{ position: 'relative', zIndex: 2, marginTop: '20px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            backgroundColor: '#0E0E0E',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            borderRadius: '0px',
            overflow: 'hidden'
          }}
        >
          {telemetryMetrics.map((item, idx) => (
            <div
              key={item.code}
              style={{
                padding: '18px 22px',
                borderRight: idx < telemetryMetrics.length - 1 ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '8px',
                backgroundColor: '#0E0E0E'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: '#777777',
                    letterSpacing: '0.06em'
                  }}
                >
                  {item.code}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: '#00D8FF',
                    border: '1px solid rgba(0, 216, 255, 0.4)',
                    backgroundColor: 'rgba(0, 216, 255, 0.08)',
                    padding: '1px 6px',
                    fontWeight: 700,
                    borderRadius: '0px'
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#888888',
                    marginTop: '2px'
                  }}
                >
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glowing 3D Cyber-Carved Jack-o'-Lantern at Hero Base Margin */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '28px',
          zIndex: 4,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
        title="Interactive Cyber Jack-o'-Lantern"
      >
        <HalloweenPumpkin size={48} />
      </div>
    </section>
  );
}
