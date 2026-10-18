import React from 'react';
import { Link } from './Router.jsx';

export default function CTASection({ onStartProject }) {
  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section className="section-spacing" style={{ backgroundColor: '#0A0A0A', position: 'relative', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
      <div className="container">
        <div
          style={{
            padding: 'clamp(44px, 6vw, 72px) clamp(28px, 5vw, 60px)',
            backgroundColor: '#0E0E0E',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            borderRadius: '0px',
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
              <span>DIRECT INITIATION // LET'S COLLABORATE</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                lineHeight: 1.1,
                color: '#ffffff',
                fontWeight: 800,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}
            >
              Your Digital Growth Starts Here.
            </h2>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.5, letterSpacing: 'normal', color: '#888888', margin: 0 }}>
              Have a project in mind? Whether you need a modern web application, custom Shopify storefront, or ongoing software engineering, our team is ready to deliver.
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
