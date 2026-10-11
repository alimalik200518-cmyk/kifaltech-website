import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';
import { Link } from './Router.jsx';
import { getServiceIcon } from './ServiceIcons.jsx';

export default function ServicesList({ onSelectService }) {
  const { services } = agencyData;
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);

  const activeService = services.find((s) => s.id === activeServiceId) || services[0];

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  const SvgCheck = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-light)', flexShrink: 0, marginTop: '3px' }}>
      <path d="M3 8.5l3.5 3.5 6.5-7"/>
    </svg>
  );

  return (
    <section id="services" className="section-spacing" style={{ backgroundColor: '#1a1515', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '52px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>
            <span className="pulse-indicator"></span>
            <span>CORE CAPABILITIES</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.5rem)',
              lineHeight: 1.15,
              color: '#ffffff',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              marginBottom: '18px'
            }}
          >
            Engineering & Design Capabilities
          </h2>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
            We deliver focused digital services spanning modern full-stack web development, custom WordPress engineering, intuitive UI/UX design, e-commerce systems, and performance optimization.
          </p>
        </div>

        {/* Editorial Layout: Left List + Right Sticky Dossier */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(32px, 4vw, 52px)',
            alignItems: 'flex-start'
          }}
        >
          {/* Left: Editorial Service Roster */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {services.map((s) => {
              const isActive = s.id === activeServiceId;
              return (
                <div
                  key={s.id}
                  onClick={() => setActiveServiceId(s.id)}
                  onMouseEnter={() => setActiveServiceId(s.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? 'rgba(124, 58, 237, 0.08)' : 'transparent',
                    border: isActive ? '1px solid rgba(124, 58, 237, 0.4)' : '1px solid rgba(255, 255, 255, 0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isActive ? 'translateX(6px)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '6px',
                        backgroundColor: isActive ? 'rgba(124, 58, 237, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid',
                        borderColor: isActive ? 'rgba(124, 58, 237, 0.4)' : 'rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isActive ? 'var(--primary-light)' : 'var(--text-dim)',
                        flexShrink: 0
                      }}
                    >
                      {getServiceIcon(s.id, s.category, 18, isActive ? "var(--primary-light)" : "var(--text-dim)")}
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        color: isActive ? 'var(--primary-light)' : 'var(--text-dim)',
                        fontWeight: 600
                      }}
                    >
                      {s.number}
                    </span>
                    <span
                      style={{
                        fontSize: '1.1rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        color: isActive ? '#ffffff' : 'var(--text-main)',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {s.title}
                    </span>
                  </div>

                  <div
                    style={{
                      color: isActive ? 'var(--primary-light)' : 'var(--text-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'transform 0.2s ease',
                      transform: isActive ? 'translateX(4px)' : 'none'
                    }}
                  >
                    <SvgArrow />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Service Dossier (Sticky) */}
          <div style={{ position: 'sticky', top: '96px' }}>
            <div
              style={{
                padding: 'clamp(28px, 4vw, 40px)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                backgroundColor: '#1f1919',
                borderRadius: '8px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)'
              }}
            >
              {/* Header Badges */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(124, 58, 237, 0.15)',
                      border: '1px solid rgba(124, 58, 237, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-light)'
                    }}
                  >
                    {getServiceIcon(activeService.id, activeService.category, 20, "var(--primary-light)")}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      color: 'var(--primary-light)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontWeight: 600
                    }}
                  >
                    SERVICE {activeService.number}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {activeService.category}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--primary-light)',
                    background: 'rgba(124, 58, 237, 0.1)',
                    border: '1px solid rgba(124, 58, 237, 0.25)',
                    padding: '3px 9px',
                    borderRadius: '4px'
                  }}
                >
                  {activeService.turnaround}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.9rem', marginBottom: '14px', color: '#ffffff', letterSpacing: '-0.02em' }}>
                {activeService.title}
              </h3>

              {/* Short Description */}
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '24px' }}>
                {activeService.shortDesc}
              </p>

              {/* Technical Architecture Statement */}
              <div
                style={{
                  padding: '16px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderLeft: '2px solid var(--primary)',
                  marginBottom: '26px'
                }}
              >
                <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.06em' }}>
                  TECHNICAL SPECIFICATION & STACK
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                  {activeService.architecture}
                </div>
              </div>

              {/* Key Deliverables */}
              <div style={{ marginBottom: '26px' }}>
                <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.08em' }}>
                  CORE DELIVERABLES
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeService.deliverables.slice(0, 4).map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem' }}>
                      <SvgCheck />
                      <span style={{ color: 'var(--text-main)', lineHeight: 1.55 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              {activeService.techStack && (
                <div style={{ marginBottom: '28px', paddingTop: '18px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      textTransform: 'uppercase',
                      color: 'var(--text-dim)',
                      marginBottom: '10px',
                      letterSpacing: '0.08em'
                    }}
                  >
                    TECHNOLOGY STACK
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {activeService.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.76rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#ffffff',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          padding: '3px 8px',
                          borderRadius: '4px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  to={`/services/${activeService.id}`}
                  className="btn btn-primary"
                  style={{ flex: 1, minWidth: '160px' }}
                >
                  <span>View Dedicated Service Page</span>
                  <SvgArrow />
                </Link>
                <button
                  type="button"
                  onClick={() => onSelectService(activeService)}
                  className="btn btn-secondary"
                  style={{ padding: '0 20px' }}
                >
                  Request Scope
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
