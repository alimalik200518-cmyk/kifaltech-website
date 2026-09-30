import React from 'react';
import { agencyData } from '../data/agencyData.js';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';

export default function NotFoundPage() {
  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <SEOHead
        title={agencyData.pageSEO.notFound.title}
        description={agencyData.pageSEO.notFound.metaDesc}
        canonical={agencyData.pageSEO.notFound.canonical}
        noIndex={true}
      />

      <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '5rem',
            fontWeight: 800,
            color: 'var(--primary-light)',
            display: 'block',
            lineHeight: 1,
            marginBottom: '16px',
            opacity: 0.9
          }}
        >
          404
        </span>

        <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', marginBottom: '16px' }}>
          Page Not Found
        </h1>

        <p style={{ fontSize: '1.08rem', lineHeight: 1.68, color: 'var(--text-muted)', marginBottom: '36px' }}>
          The page you requested may have been moved, renamed, or is temporarily unavailable. Let us guide you back to the right destination.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <Link to="/" className="btn btn-primary" style={{ padding: '13px 26px' }}>
            <span>Return to Home</span>
            <SvgArrow />
          </Link>
          <Link to="/services" className="btn btn-secondary" style={{ padding: '13px 24px' }}>
            Explore Services
          </Link>
          <Link to="/portfolio" className="btn btn-secondary" style={{ padding: '13px 24px' }}>
            View Portfolio
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '24px' }}>
          <span style={{ fontSize: '0.86rem', color: 'var(--text-dim)' }}>
            Looking for urgent technical support? <Link to="/quick-fix" style={{ color: 'var(--primary-light)', fontWeight: 600 }}>Emergency Quick Fix</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
