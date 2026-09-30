import React from 'react';
import { Link } from './Router.jsx';

export default function CTASection({ onStartProject }) {
  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section className="section-spacing" style={{ backgroundColor: '#141010', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            padding: 'clamp(44px, 6vw, 72px) clamp(28px, 5vw, 60px)',
            backgroundColor: '#1b1616',
            border: '1px solid rgba(41, 217, 197, 0.25)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              <span className="pulse-indicator"></span>
              <span>LET'S COLLABORATE</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                lineHeight: 1.15,
                color: '#ffffff',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                marginBottom: '14px'
              }}
            >
              Have a project in mind? Let's build something useful for your business.
            </h2>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
              Whether you need a new web platform, a custom Shopify storefront, or ongoing software engineering, our team is ready to deliver.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={onStartProject}
              className="btn btn-primary"
              style={{ height: '48px', padding: '0 28px', fontSize: '0.94rem' }}
            >
              <span>Start a Project</span>
              <SvgArrow />
            </button>

            <Link
              to="/portfolio"
              className="btn btn-secondary"
              style={{ height: '48px', padding: '0 24px', fontSize: '0.94rem' }}
            >
              <span>View Our Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
