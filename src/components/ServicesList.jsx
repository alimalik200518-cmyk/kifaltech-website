import React from 'react';
import { agencyData } from '../data/agencyData.js';
import { Link } from './Router.jsx';
import { getServiceIcon } from './ServiceIcons.jsx';
import HalloweenBats from './HalloweenBats.jsx';

export default function ServicesList({ onSelectService }) {
  const { services } = agencyData;

  const SvgArrow = () => (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section id="services" className="section-spacing" style={{ backgroundColor: 'var(--bg-main)', position: 'relative', borderTop: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
      {/* Subtle Atmospheric Flying Bats in Negative Space */}
      <HalloweenBats variant="services" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header: Brutalist Editorial */}
        <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            <span className="pulse-indicator"></span>
            <span>CAPABILITIES MATRIX // CORE DISCIPLINES</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              lineHeight: 1.1,
              color: '#FFFFFF',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            Engineering & Design Capabilities
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.5, letterSpacing: 'normal', color: '#888888', maxWidth: '720px' }}>
            A rigorous engineering collective delivering high-throughput web software, modern React/Next.js architectures, bespoke headless CMS platforms, and precision user interfaces with zero bloated abstractions.
          </p>
        </div>

        {/* Structured Multi-Column Grid of Subtle 1px Border Card Containers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '24px'
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="agency-card"
              style={{
                backgroundColor: '#0E0E0E',
                border: '1px solid #222222',
                borderRadius: '0px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.15s ease, background-color 0.15s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D32525';
                e.currentTarget.style.backgroundColor = '#141414';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#222222';
                e.currentTarget.style.backgroundColor = '#0E0E0E';
              }}
            >
              {/* Card Header Telemetry */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '12px',
                    borderBottom: '1px solid #222222',
                    marginBottom: '18px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        backgroundColor: '#161616',
                        border: '1px solid #222222',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#D32525'
                      }}
                    >
                      {getServiceIcon(service.id, service.category, 15, "#D32525")}
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: '#D32525',
                        fontWeight: 700,
                        letterSpacing: '0.06em'
                      }}
                    >
                      {service.number} // {service.category.toUpperCase()}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.66rem',
                      color: '#888888',
                      border: '1px solid #222222',
                      padding: '2px 6px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {service.turnaround}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    lineHeight: 1.1,
                    color: '#FFFFFF',
                    fontWeight: 800,
                    marginBottom: '10px',
                    letterSpacing: '-0.01em',
                    textTransform: 'uppercase'
                  }}
                >
                  {service.title}
                </h3>

                {/* Short Description */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    lineHeight: 1.5,
                    letterSpacing: 'normal',
                    color: '#888888',
                    marginBottom: '16px'
                  }}
                >
                  {service.shortDesc}
                </p>

                {/* Architecture Spec Bar */}
                <div
                  style={{
                    backgroundColor: '#111111',
                    borderLeft: '2px solid #D32525',
                    padding: '8px 12px',
                    marginBottom: '16px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.64rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#D32525',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      fontWeight: 700
                    }}
                  >
                    ARCHITECTURE SPEC
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: '#CCCCCC',
                      lineHeight: 1.45,
                      marginTop: '2px',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {service.architecture}
                  </div>
                </div>

                {/* Core Deliverables */}
                <div style={{ marginBottom: '18px' }}>
                  <div
                    style={{
                      fontSize: '0.66rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#666666',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginBottom: '8px'
                    }}
                  >
                    DELIVERABLE BENCHMARKS
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {service.deliverables.slice(0, 3).map((deliv, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '6px',
                          fontSize: '0.8rem',
                          color: '#A0A0A0',
                          lineHeight: 1.4
                        }}
                      >
                        <span style={{ color: '#D32525', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>■</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tech Stack & Rectangular CTA */}
              <div>
                {service.techStack && (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '4px',
                      paddingTop: '12px',
                      borderTop: '1px solid #222222',
                      marginBottom: '14px'
                    }}
                  >
                    {service.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.68rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#888888',
                          backgroundColor: '#141414',
                          border: '1px solid #222222',
                          padding: '2px 6px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <Link
                    to={`/services/${service.id}`}
                    className="btn btn-secondary"
                    style={{
                      height: '38px',
                      padding: '0 10px',
                      fontSize: '0.74rem',
                      letterSpacing: '0.04em'
                    }}
                  >
                    <span>Spec Page</span>
                    <SvgArrow />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="btn btn-primary"
                    style={{
                      height: '38px',
                      padding: '0 10px',
                      fontSize: '0.74rem',
                      letterSpacing: '0.04em'
                    }}
                  >
                    <span>Request Scope</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Architectural Workspace Banner: Real Team Photography */}
        <div
          style={{
            marginTop: '32px',
            backgroundColor: '#0E0E0E',
            border: '1px solid #222222',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Left: High-Contrast Black & White Team Photography */}
          <div style={{ position: 'relative', minHeight: '260px', overflow: 'hidden' }}>
            <img
              src="/images/team/team-architecture-sprint.jpg"
              alt="KifalTech engineers reviewing system architecture specs under focused lamp light"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'grayscale(100%) contrast(1.25) brightness(0.85)'
              }}
              loading="lazy"
            />
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.64rem',
                backgroundColor: '#0A0A0A',
                color: '#FFFFFF',
                border: '1px solid #222222',
                padding: '2px 8px',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}
            >
              ARCHITECTURAL SPRINT // ZERO TECH DEBT
            </div>
          </div>

          {/* Right: Technical Guarantee Manifesto */}
          <div style={{ padding: '32px 36px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: '#D32525',
                letterSpacing: '0.08em',
                fontWeight: 700,
                marginBottom: '8px'
              }}
            >
              ENGINEERING GUARANTEE
            </div>
            <h4
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                lineHeight: 1.15
              }}
            >
              100% IP Ownership & Clean Code Transfer
            </h4>
            <p
              style={{
                fontSize: '0.92rem',
                color: '#888888',
                lineHeight: 1.6,
                marginBottom: '20px'
              }}
            >
              Every line of code, design component, and deployment manifest belongs entirely to you upon completion. No proprietary lock-in, no hidden recurring agency fees, and fully documented repositories.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: '#CCCCCC',
                flexWrap: 'wrap'
              }}
            >
              <span>✓ Git Repository Transfer</span>
              <span>✓ Docker / CI-CD Specs</span>
              <span>✓ Figma Tokens Included</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
