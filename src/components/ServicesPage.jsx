import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';
import { getServiceIcon } from './ServiceIcons.jsx';

export default function ServicesPage({ onStartProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web & Software', 'Design & Branding', 'E-Commerce', 'Digital Growth'];

  const filteredServices = activeCategory === 'All'
    ? agencyData.services
    : agencyData.services.filter((s) => s.category === activeCategory);

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Services", url: "https://kifaltech.com/services" }
  ];

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={agencyData.pageSEO.services.title}
        description={agencyData.pageSEO.services.metaDesc}
        canonical={agencyData.pageSEO.services.canonical}
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Services</span>
          </nav>

          <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', margin: '0 0 36px 0' }}>
            <span className="eyebrow">Capabilities Directory</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
              Specialized Digital Engineering & Creative Services
            </h1>
            <p style={{ fontSize: '1.12rem' }}>
              Explore our 11 core competencies spanning full-stack development, brand identity, custom e-commerce, and high-ROI digital growth campaigns.
            </p>
          </div>

          {/* Architectural Whiteboard Discovery Banner */}
          <div
            style={{
              marginBottom: '40px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: '#1c1717',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              alignItems: 'stretch'
            }}
          >
            <div style={{ position: 'relative', minHeight: '260px' }}>
              <img
                src="/images/services/whiteboard-architecture.jpg"
                alt="KifalTech team whiteboard architectural planning session with hand-drawn system diagrams and database models"
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
                  top: '14px',
                  left: '14px',
                  backgroundColor: 'rgba(18, 14, 14, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-emerald)' }}></span>
                <span>Discovery &amp; System Design</span>
              </div>
            </div>

            <div
              style={{
                padding: 'clamp(28px, 4vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#191414'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  color: 'var(--primary-light)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '10px'
                }}
              >
                ARCHITECTURAL INTEGRITY FIRST
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                From Whiteboard Architecture to Production Microservices
              </h3>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.68, color: 'var(--text-muted)', marginBottom: '20px' }}>
                Every engagement begins with systematic architectural discovery. We diagram database entities, API contracts, edge caching topologies, and CI/CD automation before writing a single line of production code.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                <span>✓ Zero Bloatware</span>
                <span>✓ Microservices &amp; Edge</span>
                <span>✓ 100% IP Handover</span>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--primary)' : 'var(--border-subtle)',
                  background: activeCategory === cat ? 'var(--primary)' : 'var(--bg-card)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-main)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px', marginBottom: '80px' }}>
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="agency-card"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '0px',
                          backgroundColor: '#111111',
                          border: '1px solid #D32525',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#D32525'
                        }}
                      >
                        {getServiceIcon(service.id, service.category, 20, "#D32525")}
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-light)', fontWeight: 600 }}>
                        SERVICE {service.number}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', padding: '3px 8px', borderRadius: '4px', background: 'var(--bg-subtle)', color: 'var(--text-dim)' }}>
                      {service.turnaround}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', marginBottom: '10px', color: 'var(--text-white)' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '20px' }}>
                    {service.shortDesc}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      KEY DELIVERABLES:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {service.deliverables.slice(0, 3).map((del, i) => (
                        <li key={i} style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary-light)' }} />
                          {del}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Link
                    to={`/services/${service.id}`}
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: '11px 16px', fontSize: '0.88rem' }}
                  >
                    <span>View Service Page</span>
                    <SvgArrow />
                  </Link>
                  <button
                    onClick={() => onStartProject({ title: service.title, category: service.category })}
                    className="btn btn-primary"
                    style={{ padding: '11px 18px', fontSize: '0.88rem' }}
                  >
                    Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
