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
    <div
      style={{
        paddingTop: '140px',
        paddingBottom: '120px',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-main)',
        position: 'relative'
      }}
    >
      <SEOHead
        title="404 - Broken Link | KifalTech Digital Agency"
        description="404 - Broken Link. Unlike our code, this page doesn't exist. Return to the KifalTech homepage."
        canonical="https://kifaltech.com/404"
        noIndex={true}
      />

      <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
        {/* Minimal Terminal Tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px', padding: '6px 14px', borderRadius: '0px', background: 'rgba(0, 216, 255, 0.1)', border: '1px solid rgba(0, 216, 255, 0.35)', color: '#00D8FF', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
          <span>●</span>
          <span>HTTP STATUS 404: RESOURCE_NOT_FOUND</span>
        </div>

        {/* Big Monospace 404 */}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(5rem, 12vw, 8.5rem)',
            fontWeight: 800,
            color: 'var(--primary-light)',
            display: 'block',
            lineHeight: 1,
            marginBottom: '20px',
            letterSpacing: '-0.04em',
            textShadow: '0 0 40px rgba(0, 216, 255, 0.25)'
          }}
        >
          404
        </span>

        {/* Agency Copy */}
        <h1 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', marginBottom: '18px', color: '#ffffff', lineHeight: 1.25 }}>
          Broken Link. Unlike our code, this page doesn't exist.
        </h1>

        <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '580px', margin: '0 auto 40px auto' }}>
          The URL you navigated to might have been refactored, moved, or never existed in the repository. Let's redirect you back to active platforms.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <Link
            to="/"
            className="btn btn-primary"
            style={{ padding: '14px 32px', fontSize: '1rem' }}
          >
            <span>Return to Home</span>
            <SvgArrow />
          </Link>
          <Link
            to="/portfolio"
            className="btn btn-secondary"
            style={{ padding: '14px 26px', fontSize: '1rem' }}
          >
            Explore Case Studies
          </Link>
          <Link
            to="/contact"
            className="btn btn-secondary"
            style={{ padding: '14px 26px', fontSize: '1rem' }}
          >
            Contact Engineering
          </Link>
        </div>

        {/* Code Snippet Box */}
        <div
          style={{
            background: '#130f0f',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-sm)',
            padding: '16px 20px',
            maxWidth: '480px',
            margin: '0 auto',
            textAlign: 'left',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--text-dim)'
          }}
        >
          <div><span style={{ color: 'var(--primary-light)' }}>const</span> <span style={{ color: '#ffffff' }}>page</span> = router.resolve(window.location.pathname);</div>
          <div style={{ color: '#00D8FF' }}>// Error: page === undefined</div>
          <div><span style={{ color: '#10b981' }}>window</span>.location.href = <span style={{ color: '#f59e0b' }}>'/'</span>;</div>
        </div>
      </div>
    </div>
  );
}
