import React from 'react';
import { agencyData } from '../data/agencyData.js';
import { Link } from './Router.jsx';

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
      {/* Full-Bleed Cinematic Grainy Architectural Background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/images/hero/hero-architectural-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.22,
          filter: 'grayscale(100%) contrast(1.3) brightness(0.7)',
          zIndex: 0
        }}
      />

      {/* Vignette Overlay & Subtle 1px Architectural Grid Line Accents */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.88) 60%, #0A0A0A 100%)',
          zIndex: 0
        }}
      />
      <div className="hero-ambient-mesh" aria-hidden="true" />

      {/* Center-Stage Editorial Typography Layout */}
      <div className="container" style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', width: '100%' }}>
          
          {/* Brutalist Eyebrow Metadata Tag */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
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
                border: '1px solid rgba(255, 255, 255, 0.18)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#D32525',
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
            We Build <span style={{ color: '#D32525' }}>Smart Digital</span> Solutions for Modern Businesses.
          </h1>

          {/* Editorial Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.18rem)',
              lineHeight: 1.6,
              color: '#A0A0A0',
              maxWidth: '720px',
              margin: '0 auto 30px auto',
              fontWeight: 400
            }}
          >
            We design, engineer, and deploy high-throughput digital platforms, custom web applications, and mission-critical software with ruthless attention to architectural performance.
          </p>

          {/* Rectangular Action Block CTA Group */}
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
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)'
          }}
        >
          {telemetryMetrics.map((item, idx) => (
            <div
              key={item.code}
              style={{
                padding: '18px 22px',
                borderRight: idx < telemetryMetrics.length - 1 ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
                borderBottom: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.015)'
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
                    color: '#D32525',
                    border: '1px solid #D32525',
                    padding: '1px 5px',
                    fontWeight: 700
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
    </section>
  );
}
