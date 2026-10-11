import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';

export default function PortfolioPage({ onStartSimilarProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web Development', 'App Development', 'E-Commerce', 'Design & Branding', 'Digital Growth', 'Web & Software'];

  const projectImages = {
    'rise-2-studio': '/images/portfolio/rise-2-studio-macbook.jpg',
    'cuts-clothing': '/images/portfolio/cuts-clothing-iphone.jpg',
    'winkler-hotels': '/images/portfolio/winkler-hotels.jpg',
    'flow-trix': '/images/portfolio/flow-trix-dashboard.jpg',
    'def-projetos': '/images/portfolio/def-projetos-blueprint.jpg',
    'black-mango-production': '/images/portfolio/black-mango-film.jpg',
    'pranav-suresh': '/images/culture/remote-cafe-workspace.jpg',
    'noomo-agency': '/images/culture/coworking-collaboration.jpg',
    'wonderkin-tattoos': '/images/portfolio/rise-2-studio-macbook.jpg',
    'fitonist-fitness': '/images/portfolio/cuts-clothing-iphone.jpg',
    'zentry-gaming': '/images/hero/developer-dark-code.jpg',
    'fd-front-desk': '/images/portfolio/flow-trix-dashboard.jpg'
  };

  const filteredProjects = activeCategory === 'All'
    ? agencyData.portfolio
    : agencyData.portfolio.filter((p) => p.category === activeCategory);

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Portfolio", url: "https://kifaltech.com/portfolio" }
  ];

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={agencyData.pageSEO.portfolio.title}
        description={agencyData.pageSEO.portfolio.metaDesc}
        canonical={agencyData.pageSEO.portfolio.canonical}
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Portfolio</span>
          </nav>

          <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', margin: '0 0 40px 0' }}>
            <span className="eyebrow">Case Studies & Production Work</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
              Selected Projects Engineered for Measurable Business Growth
            </h1>
            <p style={{ fontSize: '1.12rem' }}>
              Explore authentic client platforms across enterprise web apps, high-converting Shopify stores, mobile apps, and brand design systems.
            </p>
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

          {/* Projects Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px', marginBottom: '80px' }}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="agency-card"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}
              >
                <div>
                  {/* Browser Mockup Preview with Authentic Photography */}
                  <div
                    style={{
                      width: '100%',
                      height: '210px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-main)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      marginBottom: '18px',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-card)'
                    }}
                  >
                    <div
                      style={{
                        height: '28px',
                        background: 'var(--bg-card)',
                        borderBottom: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 10px',
                        gap: '6px',
                        justifyContent: 'space-between',
                        flexShrink: 0
                      }}
                    >
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff5f56' }}></span>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#27c93f' }}></span>
                      </div>
                      <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                        kifaltech.com/portfolio/{project.id}
                      </span>
                      <span style={{ fontSize: '0.64rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>● LIVE</span>
                    </div>

                    <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
                      <img
                        src={projectImages[project.id] || '/images/portfolio/rise-2-studio-macbook.jpg'}
                        alt={`${project.title} - ${project.industry} client project mockup`}
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
                          background: 'linear-gradient(180deg, transparent 0%, rgba(18, 14, 14, 0.94) 75%, #120e0e 100%)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                          {project.industry}
                        </span>
                        {project.results && project.results[0] && (
                          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', background: 'rgba(16,185,129,0.15)', padding: '2px 8px', borderRadius: 'var(--radius-full)' }}>
                            {project.results[0].label}: {project.results[0].value}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span className="eyebrow" style={{ marginBottom: 0, fontSize: '0.72rem', padding: '4px 10px' }}>
                      {project.category}
                    </span>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      {project.year}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--text-white)' }}>
                    {project.title}
                  </h3>

                  <div style={{ fontSize: '0.85rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                    Client: {project.client} • {project.industry}
                  </div>

                  <p style={{ fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '20px' }}>
                    {project.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {project.services.map((s, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-xs)',
                          background: 'var(--bg-tag)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.76rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: '11px 16px', fontSize: '0.88rem' }}
                  >
                    <span>Read Case Study</span>
                    <SvgArrow />
                  </Link>
                  <button
                    onClick={() => onStartSimilarProject(project)}
                    className="btn btn-primary"
                    style={{ padding: '11px 18px', fontSize: '0.88rem' }}
                  >
                    Similar Project
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
