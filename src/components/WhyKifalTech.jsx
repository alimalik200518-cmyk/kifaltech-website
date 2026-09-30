import React from 'react';
import { agencyData } from '../data/agencyData.js';

export default function WhyKifalTech() {
  const { whyUs } = agencyData;

  const SvgCheck = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }}>
      <path d="M3 8.5l3.5 3.5 6.5-7"/>
    </svg>
  );

  return (
    <section id="why-us" className="section-spacing" style={{ backgroundColor: '#1a1414', position: 'relative' }}>
      <div className="container">
        {/* Asymmetric 2-Column Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: 'clamp(36px, 5vw, 64px)',
            alignItems: 'start'
          }}
        >
          {/* Left Anchor Column: Agency Philosophy & Business Thesis */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              <span className="pulse-indicator"></span>
              <span>ENGINEERING ADVANTAGE</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
                lineHeight: 1.15,
                color: '#ffffff',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                marginBottom: '20px'
              }}
            >
              Why Businesses Partner With KifalTech
            </h2>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '24px' }}>
              Most web projects fail not from technical complexity, but from poor communication, misaligned incentives, and bloated codebases. We built KifalTech around simple engineering principles: listen closely to business requirements, build cleanly, communicate proactively, and deliver on schedule.
            </p>

            <div
              style={{
                backgroundColor: '#201919',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '24px',
                marginTop: '32px'
              }}
            >
              <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.08em' }}>
                THE KIFALTECH GUARANTEE
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.6 }}>
                100% intellectual property ownership from day one. You receive full GitHub repository access, deployment credentials, Figma artboards, and production documentation upon milestone sign-off.
              </p>
            </div>
          </div>

          {/* Right Column: 7 Concrete Business Benefits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {whyUs.map((item, idx) => (
              <div
                key={item.title}
                style={{
                  padding: '24px 28px',
                  backgroundColor: '#201919',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '6px',
                  transition: 'border-color 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <SvgCheck />
                  <h3 style={{ fontSize: '1.2rem', color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0, paddingLeft: '27px' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
