import React from 'react';
import { agencyData } from '../data/agencyData.js';

export default function ProcessSection() {
  const { processSteps } = agencyData;

  return (
    <section id="process" className="section-spacing" style={{ backgroundColor: '#181313', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '60px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>
            <span className="pulse-indicator"></span>
            <span>ENGINEERING TIMELINE</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.5rem)',
              lineHeight: 1.15,
              color: '#ffffff',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              marginBottom: '16px'
            }}
          >
            How We Work — From Requirements to Production
          </h2>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
            A disciplined six-phase delivery framework ensuring absolute clarity, predictable milestones, and reliable software outcomes from kickoff to long-term operations.
          </p>
        </div>

        {/* Connected Editorial Timeline (NO 6 identical cards) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', position: 'relative' }}>
          {/* Vertical connecting line indicator for desktop */}
          <div
            style={{
              position: 'absolute',
              left: '28px',
              top: '20px',
              bottom: '20px',
              width: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              zIndex: 0
            }}
          ></div>

          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              style={{
                display: 'grid',
                gridTemplateColumns: '56px 1fr',
                gap: 'clamp(20px, 3vw, 36px)',
                padding: '24px 0',
                borderBottom: idx < processSteps.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                position: 'relative',
                zIndex: 1,
                alignItems: 'start'
              }}
            >
              {/* Step Monogram Circle */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#201a1a',
                  border: '1px solid rgba(41, 217, 197, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)'
                }}
              >
                {step.step}
              </div>

              {/* Step Content */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                  gap: '16px',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.08em' }}>
                    PHASE {step.step}
                  </div>
                  <h3 style={{ fontSize: '1.45rem', color: '#ffffff', letterSpacing: '-0.015em', margin: 0 }}>
                    {step.title}
                  </h3>
                </div>

                <div>
                  <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
