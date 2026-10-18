import React from 'react';
import { agencyData } from '../data/agencyData.js';
import { Link } from './Router.jsx';

export default function PortfolioGrid({ onStartSimilarProject }) {
  const { portfolio } = agencyData;

  // Curate 4 featured projects for structured multi-column presentation
  const p1 = portfolio.find((p) => p.id === 'rise-2-studio') || portfolio[0];
  const p2 = portfolio.find((p) => p.id === 'cuts-clothing') || portfolio[1];
  const p3 = portfolio.find((p) => p.id === 'winkler-hotels') || portfolio[2];
  const p4 = portfolio.find((p) => p.id === 'flow-trix') || portfolio[5];

  const featuredProjects = [
    {
      ...p1,
      mockupImage: '/images/portfolio/rise-2-studio-macbook.jpg',
      url: 'rise2studio.com/creative-production',
      badge: '● 60 FPS STREAM',
      metric: '98/100 LCP'
    },
    {
      ...p2,
      mockupImage: '/images/portfolio/cuts-clothing-iphone.jpg',
      url: 'cutsclothing.com/storefront',
      badge: '● +38% CVR',
      metric: 'Shopify OS 2.0'
    },
    {
      ...p3,
      mockupImage: '/images/portfolio/winkler-hotels.jpg',
      url: 'winklerhotels.com/luxury-booking',
      badge: '● DIRECT PMS',
      metric: '+46% Direct Bookings'
    },
    {
      ...p4,
      mockupImage: '/images/portfolio/flow-trix-dashboard.jpg',
      url: 'flow-trix.com/pipelines',
      badge: '● REST API v2',
      metric: 'Sub-40ms P99'
    }
  ];

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section id="portfolio" className="section-spacing" style={{ backgroundColor: 'var(--bg-main)', position: 'relative', borderTop: '1px solid #222222' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ maxWidth: '720px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              <span className="pulse-indicator"></span>
              <span>SELECTED WORK // COMMERCIAL CASE STUDIES</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.3rem, 4.2vw, 3.5rem)',
                lineHeight: 1.1,
                color: '#ffffff',
                fontWeight: 800,
                letterSpacing: '-0.01em',
                marginBottom: '16px',
                textTransform: 'uppercase'
              }}
            >
              Curated Client Case Studies
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.5, letterSpacing: 'normal', color: 'var(--text-muted)' }}>
              A selection of digital platforms, e-commerce storefronts, and web software engineered for verified reliability and performance.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="btn btn-secondary"
            style={{ padding: '0 24px' }}
          >
            <span>View All Case Studies ({portfolio.length})</span>
            <SvgArrow />
          </Link>
        </div>

        {/* Structured Multi-Column Grid of Subtle 1px Border Card Containers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
            gap: '28px'
          }}
        >
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="agency-card"
              style={{
                backgroundColor: '#0E0E0E',
                border: '1px solid #222222',
                borderRadius: '0px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.15s ease, background-color 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D32525';
                e.currentTarget.style.backgroundColor = '#141414';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#222222';
                e.currentTarget.style.backgroundColor = '#0E0E0E';
              }}
            >
              <div>
                {/* Mockup Frame Header */}
                <div
                  style={{
                    backgroundColor: '#111111',
                    border: '1px solid #222222',
                    borderRadius: '0px',
                    overflow: 'hidden',
                    marginBottom: '24px'
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#161616',
                      padding: '8px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid #222222'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                    </div>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      {project.url}
                    </span>
                    <span style={{ fontSize: '0.65rem', color: '#10b981', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      {project.badge}
                    </span>
                  </div>

                  <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                    <img
                      src={project.mockupImage}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      loading="lazy"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '10px 14px',
                        background: 'linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.95) 100%)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                        {project.client || project.title.toUpperCase()}
                      </span>
                      <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '2px 8px', borderRadius: '0px' }}>
                        ✦ {project.metric}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Meta Tags */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#D32525',
                      background: 'rgba(211, 37, 37, 0.12)',
                      border: '1px solid #D32525',
                      padding: '2px 8px',
                      textTransform: 'uppercase',
                      fontWeight: 700
                    }}
                  >
                    {project.category}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {project.industry}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.6rem',
                    color: '#ffffff',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.1,
                    textTransform: 'uppercase'
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.5,
                    letterSpacing: 'normal',
                    color: 'var(--text-muted)',
                    marginBottom: '20px'
                  }}
                >
                  {project.desc}
                </p>

                {/* Outcome Statement */}
                <div
                  style={{
                    backgroundColor: '#111111',
                    borderLeft: '2px solid #D32525',
                    padding: '12px 16px',
                    marginBottom: '24px'
                  }}
                >
                  <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#D32525', textTransform: 'uppercase', marginBottom: '3px', letterSpacing: '0.06em', fontWeight: 700 }}>
                    DELIVERED OUTCOME
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-main)', lineHeight: 1.45 }}>
                    {project.outcome || project.metrics}
                  </div>
                </div>

                {/* Services & Tech */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {project.services.slice(0, 4).map((svc) => (
                    <span
                      key={svc}
                      style={{
                        fontSize: '0.74rem',
                        color: 'var(--text-muted)',
                        background: '#161616',
                        border: '1px solid #222222',
                        padding: '2px 8px'
                      }}
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Timeline & View Case Study CTA */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid #222222'
                }}
              >
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  {project.timeline}
                </span>
                <Link
                  to={`/portfolio/${project.id}`}
                  className="btn btn-secondary"
                  style={{ padding: '0 20px', height: '40px', fontSize: '0.82rem' }}
                >
                  <span>View Case Study</span>
                  <SvgArrow />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
