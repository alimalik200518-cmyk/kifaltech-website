import React from 'react';
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
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '36px',
        paddingBottom: '36px',
        backgroundColor: '#0A0A0A',
        overflow: 'hidden'
      }}
    >
      {/* 1. Full-Bleed Desaturated Engineering Workspace Photograph with 85% #0A0A0A Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url('/images/hero/real-engineering-workspace.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(100%) contrast(1.15) brightness(0.95)',
          zIndex: 0
        }}
      />

      {/* 2. Subtle Film Grain (Noise) Texture Over Background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.045,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
          zIndex: 1
        }}
      />

      {/* Center-Stage Editorial Typography Layout */}
      <div className="container" style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center', width: '100%' }}>
          
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
                border: '1px solid #222222',
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
                  backgroundColor: '#D32525',
                  display: 'inline-block'
                }}
              />
              SYSTEM SPEC // BESPOKE DIGITAL ENGINEERING STUDIO
            </span>
          </div>

          {/* Clean, Non-Squished Editorial Heading (Strict line-height: 1.1) */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 4.4rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
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
                color: '#D32525'
              }}
            >
              Smart Digital
            </span>{' '}
            Solutions for Modern Businesses.
          </h1>

          {/* Subtitle with line-height: 1.5 & standard letter-spacing */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              lineHeight: 1.5,
              letterSpacing: 'normal',
              color: '#A0A0A0',
              maxWidth: '720px',
              margin: '0 auto 32px auto',
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
                fontSize: '0.86rem',
                letterSpacing: '0.08em',
                fontWeight: 700,
                boxShadow: 'none'
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
                fontSize: '0.86rem',
                letterSpacing: '0.08em',
                fontWeight: 600,
                backgroundColor: '#111111',
                color: '#FFFFFF',
                border: '1px solid #222222',
                boxShadow: 'none'
              }}
            >
              <span>Explore Portfolio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Strict 4-Column Engineering Telemetry Dashboard Bar with Sharp 1px #222 Borders */}
      <div className="container" style={{ position: 'relative', zIndex: 3, marginTop: '20px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            backgroundColor: '#0C0C0C',
            border: '1px solid #222222',
            borderRadius: '0px',
            overflow: 'hidden'
          }}
        >
          {telemetryMetrics.map((item, idx) => (
            <div
              key={item.code}
              style={{
                padding: '18px 22px',
                borderRight: idx < telemetryMetrics.length - 1 ? '1px solid #222222' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '8px',
                backgroundColor: '#0C0C0C'
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
                    color: '#FFFFFF',
                    border: '1px solid #333333',
                    backgroundColor: '#161616',
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
    </section>
  );
}
