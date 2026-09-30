import React from 'react';
import { agencyData } from '../data/agencyData.js';

export default function Process() {
  const { processSteps } = agencyData;

  return (
    <section id="process" className="section-spacing" style={{ background: 'rgba(10, 14, 24, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">METHODOLOGY & SPRINT FLOW</span>
          <h2>How We Build & Launch With Zero Guesswork</h2>
          <p>
            From our kickoff discovery workshop to your global deployment, our streamlined sprint cadence ensures transparent milestones, complete IP ownership, and zero surprises.
          </p>
        </div>

        {/* 4 Step Process Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            position: 'relative'
          }}
        >
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="glass-card"
              style={{
                padding: '36px 28px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Step Number with Glowing Gradient */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '2.4rem',
                    fontWeight: 800,
                    color: 'rgba(99, 102, 241, 0.4)',
                    lineHeight: 1,
                    marginBottom: '16px'
                  }}
                >
                  {step.step}
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '14px' }}>
                  {step.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>

              {/* Step Footer Indicator */}
              <div
                style={{
                  marginTop: '28px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--secondary)' }}></span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  Phase {idx + 1} of 4
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Commitments Guarantee Card */}
        <div
          className="glass-card"
          style={{
            marginTop: '48px',
            padding: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(15, 23, 42, 0.6) 100%)'
          }}
        >
          <div>
            <span className="badge-pill" style={{ borderColor: 'rgba(16, 185, 129, 0.4)', color: 'var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.1)', marginBottom: '8px' }}>
              ✦ The Kifal Tech Guarantee
            </span>
            <h3 style={{ fontSize: '1.4rem', marginTop: '6px', marginBottom: '4px' }}>
              100% Fixed Scope, Milestone Approvals & 30-Day Post-Launch Warranty
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '680px' }}>
              We release deliverables in staging environments for your review at every sprint. Final payments are only triggered once you are 100% satisfied with the production build.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary" style={{ padding: '12px 26px', fontSize: '0.9rem' }}>
            Discuss Your Roadmap
          </a>
        </div>
      </div>
    </section>
  );
}
