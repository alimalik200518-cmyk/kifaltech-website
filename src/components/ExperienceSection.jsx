import React from 'react';
import { agencyData } from '../data/agencyData.js';

export default function ExperienceSection({ onStartProject }) {
  const pillars = [
    {
      title: 'Operational Productivity',
      desc: 'Optimizing digital workflows and customer interactions to save time and streamline execution.'
    },
    {
      title: 'Market Engagement',
      desc: 'Creating modern digital experiences that captivate target audiences and convert interest into action.'
    },
    {
      title: 'Scalable Architecture',
      desc: 'Engineering robust foundations that handle increasing users, transactions, and business demands.'
    },
    {
      title: 'Measurable Results',
      desc: 'Aligning design and software development directly with your strategic commercial growth targets.'
    }
  ];

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(32px, 5vw, 56px)',
            alignItems: 'center'
          }}
        >
          <div>
            <div className="eyebrow">
              <span className="pulse-indicator"></span>
              <span>GROWTH ORIENTED</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', lineHeight: 1.15, marginBottom: '20px', color: 'var(--text-white)' }}>
              Built For Businesses <span className="hero-stroked">That Want To Grow.</span>
            </h2>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '32px' }}>
              We partner with forward-thinking enterprises, founders, and modern brands to design, develop, and launch digital solutions that look great, work smoothly, and deliver real results.
            </p>

            <button
              onClick={onStartProject}
              className="btn btn-primary"
              style={{ padding: '14px 30px' }}
            >
              <span>Start Your Project</span>
              <SvgArrow />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '20px' }}>
            {pillars.map((p, idx) => (
              <div
                key={p.title}
                className="agency-card"
                style={{ padding: '28px 22px' }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--primary-light)',
                    marginBottom: '10px'
                  }}
                >
                  P_0{idx + 1}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-white)', marginBottom: '8px' }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
