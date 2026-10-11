import React from 'react';
import { agencyData } from '../data/agencyData.js';

export default function SolutionsSection({ onSelectSolution }) {
  const { solutions } = agencyData;

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section id="solutions" className="section-spacing" style={{ backgroundColor: '#0A0A0A', position: 'relative', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '56px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>
            <span className="pulse-indicator"></span>
            <span>END-TO-END SOLUTIONS // CAPABILITY TRACKS</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.5rem)',
              lineHeight: 1.05,
              color: '#ffffff',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            Structured Solutions by Business Objective
          </h2>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: '#888888' }}>
            We package cross-functional engineering, UX design, and search optimization into focused business outcomes.
          </p>
        </div>

        {/* 2x2 Architectural Grid with Horizontal Dividing Lines */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '24px'
          }}
        >
          {solutions.map((sol, index) => (
            <div
              key={sol.id}
              style={{
                backgroundColor: '#0E0E0E',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '0px',
                padding: 'clamp(28px, 4vw, 38px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.12s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00D8FF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)'; }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      color: 'var(--primary)',
                      fontWeight: 600,
                      letterSpacing: '0.08em'
                    }}
                  >
                    CAPABILITY TRACK 0{index + 1}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    Bespoke Scope
                  </span>
                </div>

                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                  {sol.title}
                </h3>

                <p style={{ fontSize: '0.96rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '24px' }}>
                  {sol.desc}
                </p>

                <div style={{ marginBottom: '28px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-dim)',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                      letterSpacing: '0.06em'
                    }}
                  >
                    Services Orchestrated:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {sol.servicesIncluded.map((s, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.78rem',
                          color: '#ffffff',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          padding: '4px 10px',
                          borderRadius: '4px'
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onSelectSolution(sol)}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.88rem', height: '42px' }}
                >
                  <span>Discuss This Solution</span>
                  <SvgArrow />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
