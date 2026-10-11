import React from 'react';
import { agencyData } from '../data/agencyData.js';
import SEOHead from './SEOHead.jsx';
import { useRouter, Link } from './Router.jsx';

export default function PortfolioDetailPage({ projectSlug, onStartSimilarProject }) {
  const { navigate } = useRouter();
  const project = agencyData.portfolio.find((p) => p.id === projectSlug);

  if (!project) {
    return (
      <div style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '3rem', color: 'var(--primary-light)', display: 'block', marginBottom: '16px' }}>404</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Case Study Not Found</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '28px' }}>The requested case study "{projectSlug}" is unavailable or has moved.</p>
          <button onClick={() => navigate('/portfolio')} className="btn btn-primary">
            Back to All Work
          </button>
        </div>
      </div>
    );
  }

  // Related Case Studies
  const relatedProjects = agencyData.portfolio
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  const projectDesktopImages = {
    'rise-2-studio': '/images/portfolio/rise-2-studio-macbook.jpg',
    'cuts-clothing': '/images/portfolio/rise-2-studio-macbook.jpg',
    'winkler-hotels': '/images/portfolio/winkler-hotels.jpg',
    'flow-trix': '/images/portfolio/flow-trix-dashboard.jpg',
    'def-projetos': '/images/portfolio/def-projetos-blueprint.jpg',
    'black-mango-production': '/images/portfolio/black-mango-film.jpg',
    'pranav-suresh': '/images/culture/remote-cafe-workspace.jpg',
    'noomo-agency': '/images/culture/coworking-collaboration.jpg',
    'wonderkin-tattoos': '/images/portfolio/rise-2-studio-macbook.jpg',
    'fitonist-fitness': '/images/portfolio/flow-trix-dashboard.jpg',
    'zentry-gaming': '/images/hero/developer-dark-code.jpg',
    'fd-front-desk': '/images/portfolio/flow-trix-dashboard.jpg'
  };

  const projectMobileImages = {
    'cuts-clothing': '/images/portfolio/cuts-clothing-iphone.jpg',
    'rise-2-studio': '/images/portfolio/cuts-clothing-iphone.jpg',
    'fitonist-fitness': '/images/portfolio/cuts-clothing-iphone.jpg',
    'winkler-hotels': '/images/portfolio/cuts-clothing-iphone.jpg',
    'flow-trix': '/images/portfolio/cuts-clothing-iphone.jpg',
    'def-projetos': '/images/portfolio/cuts-clothing-iphone.jpg',
    'black-mango-production': '/images/portfolio/cuts-clothing-iphone.jpg',
    'pranav-suresh': '/images/portfolio/cuts-clothing-iphone.jpg',
    'noomo-agency': '/images/portfolio/cuts-clothing-iphone.jpg',
    'wonderkin-tattoos': '/images/portfolio/cuts-clothing-iphone.jpg',
    'zentry-gaming': '/images/portfolio/cuts-clothing-iphone.jpg',
    'fd-front-desk': '/images/portfolio/cuts-clothing-iphone.jpg'
  };

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Work", url: "https://kifaltech.com/portfolio" },
    { name: project.title, url: `https://kifaltech.com/work/${project.id}` }
  ];

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "headline": project.heroHeadline,
    "description": project.desc,
    "creator": {
      "@type": "Organization",
      "name": agencyData.company.legalName,
      "url": agencyData.company.siteUrl
    },
    "dateCreated": project.year,
    "genre": project.category,
    "keywords": project.services.join(", ")
  };

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  const SvgCheck = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '3px' }}>
      <path d="M3 8.5l3.5 3.5 6.5-7"/>
    </svg>
  );

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      <SEOHead
        title={project.seo.title}
        description={project.seo.metaDesc}
        canonical={`https://kifaltech.com/work/${project.id}`}
        schema={caseStudySchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Case Study Hero */}
      <section className="section-spacing" style={{ paddingTop: '20px', paddingBottom: '36px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/portfolio">Work</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{project.title}</span>
          </nav>

          <div style={{ maxWidth: '940px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <span className="eyebrow" style={{ marginBottom: 0 }}>
                {project.category}
              </span>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', padding: '3px 10px', borderRadius: 'var(--radius-full)', background: 'rgba(255, 255, 255, 0.04)', color: 'var(--text-dim)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {project.year} • {project.timeline}
              </span>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', padding: '3px 10px', borderRadius: 'var(--radius-full)', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                Verified Production Case Study
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', marginBottom: '22px', lineHeight: 1.12, letterSpacing: '-0.02em' }}>
              {project.heroHeadline || project.title}
            </h1>

            <p style={{ fontSize: '1.24rem', lineHeight: 1.68, color: 'var(--text-muted)' }}>
              {project.desc}
            </p>
          </div>

          {/* Project Metadata Ribbon */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px',
              padding: '28px 0',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '56px'
            }}
          >
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>CLIENT</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>{project.client}</div>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>INDUSTRY</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>{project.industry}</div>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>TECH STACK</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                {project.services.map((s, i) => (
                  <span key={i} style={{ fontSize: '0.78rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '2px 8px', borderRadius: '4px', color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>PROJECT TIMELINE</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-emerald)', marginTop: '4px' }}>{project.timeline}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase: Large Edge-to-Edge Device Mockup Sections (MacBook & iPhone) */}
      <section style={{ marginBottom: '80px', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              DEVICE MOCKUP ARCHITECTURE • EDGE-TO-EDGE CANVAS
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-dim)' }}>
              1440PX DESKTOP + 390PX MOBILE VIEWPORTS
            </span>
          </div>

          {/* Asymmetrical 2-Column Device Mockup Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '32px',
              alignItems: 'stretch'
            }}
          >
            {/* 1. MacBook Pro 16" Browser Mockup */}
            <div
              className="mockup-browser"
              style={{
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                background: '#161212',
                overflow: 'hidden',
                boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.8)'
              }}
            >
              <div
                style={{
                  padding: '12px 18px',
                  background: '#1f1a1a',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                </div>
                <div
                  style={{
                    flex: 1,
                    background: '#130f0f',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span style={{ color: 'var(--accent-emerald)' }}>🔒 https://</span>
                  <span style={{ color: '#ffffff' }}>{project.id === 'cuts-clothing' ? 'cutsclothing.com' : 'rise2studio.com'}</span>
                </div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', padding: '2px 6px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '3px' }}>
                  98/100
                </span>
              </div>

              {/* Internal Mockup Content with Authentic Photographic Canvas */}
              <div>
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <img
                    src={projectDesktopImages[project.id] || '/images/portfolio/rise-2-studio-macbook.jpg'}
                    alt={`${project.title} desktop architecture viewport on MacBook Pro in natural daylight`}
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
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(18, 14, 14, 0.88)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      padding: '3px 10px',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--primary-light)'
                    }}
                  >
                    {project.mockups?.desktop?.tag || 'DESKTOP ARCHITECTURE VIEWPORT'}
                  </div>
                </div>

                <div style={{ padding: 'clamp(20px, 3vw, 28px)', background: '#171313' }}>
                  <h3 style={{ fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', color: '#ffffff', marginBottom: '8px' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '18px' }}>
                    {project.solution}
                  </p>

                  {/* Live Verified Results Ribbon */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    {project.results?.slice(0, 2).map((r, i) => (
                      <div key={i} style={{ padding: '10px 12px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <strong style={{ fontSize: '1.15rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', display: 'block' }}>
                          {r.value}
                        </strong>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. iPhone 15 Pro Mobile Mockup */}
            <div
              style={{
                borderRadius: '24px',
                border: '2px solid rgba(255, 255, 255, 0.14)',
                background: '#151111',
                overflow: 'hidden',
                boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.8)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Dynamic Island Header */}
              <div
                style={{
                  padding: '14px 20px 10px 20px',
                  background: '#1c1717',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>9:41</span>
                <div style={{ width: '70px', height: '14px', borderRadius: '10px', background: '#000000', border: '1px solid rgba(255,255,255,0.06)' }} />
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)' }}>5G ●</span>
              </div>

              {/* Mobile Viewport Screen Content with Real Mobile Mockup */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#141010' }}>
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <img
                    src={projectMobileImages[project.id] || '/images/portfolio/cuts-clothing-iphone.jpg'}
                    alt={`${project.title} touch-responsive mobile interface viewport on iPhone in natural lighting`}
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
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(18, 14, 14, 0.88)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      padding: '3px 10px',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-emerald)'
                    }}
                  >
                    {project.mockups?.mobile?.tag || 'MOBILE EXPERIENCE CANVAS'}
                  </div>
                </div>

                <div style={{ padding: 'clamp(20px, 3vw, 26px)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '8px' }}>
                      Sub-Second Touch Interaction
                    </h4>
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '16px' }}>
                      Optimized for rapid viewport interaction, gesture pacing, zero layout shifts, and instantaneous drawer navigation.
                    </p>

                    <div style={{ padding: '12px 14px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>CORE WEB VITALS:</span>
                        <span style={{ fontSize: '0.74rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>PASS (99/100)</span>
                      </div>
                      <div style={{ height: '3px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: '99%', height: '100%', background: 'var(--accent-emerald)' }} />
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', marginTop: '12px' }}>
                    <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      {project.mockups?.mobile?.stats || 'Touch-Optimized Responsive Layout'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-PART IN-DEPTH CASE STUDY BREAKDOWN */}
      
      {/* 1. THE BRIEF (PROBLEM) */}
      <section
        style={{
          padding: '80px 0',
          backgroundColor: '#130f0f',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(36px, 5vw, 64px)',
              alignItems: 'start'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent-amber)', fontWeight: 700 }}>
                  01 / THE BRIEF
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 2.8rem)', marginBottom: '20px', lineHeight: 1.2 }}>
                The Problem &amp; Client Objectives
              </h2>
              <p style={{ fontSize: '1.08rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '24px' }}>
                {project.brief || project.challenge}
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.72, color: 'var(--text-dim)' }}>
                Without an overhaul, sluggish response times degraded user trust, lowered brand perception, and directly impacted commercial performance.
              </p>
            </div>

            <div
              className="agency-card"
              style={{
                padding: '36px',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                background: '#171212'
              }}
            >
              <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-amber)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                INITIAL BOTTLENECKS IDENTIFIED
              </span>
              <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.94rem', color: 'var(--text-main)', lineHeight: 1.75 }}>
                <li style={{ marginBottom: '10px' }}>Unoptimized assets causing heavy cumulative layout shifts (CLS) on mobile screens.</li>
                <li style={{ marginBottom: '10px' }}>Third-party script bloat blocking the main thread during checkout or initial discovery.</li>
                <li style={{ marginBottom: '10px' }}>Friction in user flows resulting in elevated abandonment rates and reduced engagement.</li>
                <li>Lack of scalable design token structures making brand updates cumbersome.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURE & DESIGN (SOLUTION) */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(36px, 5vw, 64px)',
              alignItems: 'start',
              marginBottom: '56px'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--primary-light)', fontWeight: 700 }}>
                  02 / ARCHITECTURE &amp; DESIGN
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 2.8rem)', marginBottom: '20px', lineHeight: 1.2 }}>
                Engineering Strategy &amp; Design Decisions
              </h2>
              <p style={{ fontSize: '1.08rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '24px' }}>
                {project.architecture || project.solution}
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.72, color: 'var(--text-dim)' }}>
                Every decision focused on radical performance, clean code governance, and an intentional dark minimalist aesthetic that elevates the brand.
              </p>
            </div>

            <div
              className="agency-card"
              style={{
                padding: '36px',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                background: '#171212'
              }}
            >
              <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '14px' }}>
                DELIVERED SYSTEMS &amp; CAPABILITIES
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {project.deliverables?.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <SvgCheck />
                    <span style={{ fontSize: '0.94rem', color: '#ffffff', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE OUTCOME (METRICS GRID) */}
      <section
        style={{
          padding: '80px 0',
          backgroundColor: '#120e0e',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                03 / THE OUTCOME
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 2.8rem)', marginBottom: '16px', lineHeight: 1.2 }}>
              Quantifiable Business Metrics &amp; Impact
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              {project.outcome || "Verified production metrics demonstrating accelerated performance, enhanced user engagement, and measurable commercial lift."}
            </p>
          </div>

          {/* Metrics Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              marginBottom: '52px'
            }}
          >
            {(project.metrics || project.results || []).map((m, idx) => (
              <div
                key={idx}
                className="agency-card"
                style={{
                  padding: '28px 24px',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  background: '#161212'
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-emerald)',
                    display: 'block',
                    marginBottom: '8px',
                    lineHeight: 1
                  }}
                >
                  {m.value}
                </span>
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff', display: 'block', marginBottom: '4px' }}>
                  {m.label}
                </span>
                {m.detail && (
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.4, display: 'block' }}>
                    {m.detail}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Technical FAQs */}
          {project.faqs && project.faqs.length > 0 && (
            <div style={{ maxWidth: '820px' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '20px' }}>
                Case Study Technical Notes
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {project.faqs.map((faq, i) => (
                  <div key={i} style={{ padding: '20px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--primary-light)', marginBottom: '8px' }}>
                      {faq.q}
                    </div>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Start a Similar Project CTA */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div
            className="agency-card"
            style={{
              padding: 'clamp(44px, 6vw, 68px)',
              textAlign: 'center',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              backgroundColor: '#151111'
            }}
          >
            <span className="eyebrow" style={{ margin: '0 auto 16px auto' }}>
              ENGINEERING CONSULTATION
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', marginBottom: '18px' }}>
              Engineer a Similar Solution for Your Brand
            </h2>
            <p style={{ maxWidth: '640px', margin: '0 auto 32px auto', fontSize: '1.08rem', color: 'var(--text-muted)' }}>
              Direct access to Muhammad Ali (Technical Lead) and Henry (Head of Product). Transparent milestone pricing, 100% code ownership, and 30-day post-launch warranty.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onStartSimilarProject(project)}
                className="btn btn-primary"
                style={{ padding: '15px 36px', fontSize: '1rem' }}
              >
                <span>Request Scope for {project.title}</span>
                <SvgArrow />
              </button>
              <a
                href="mailto:info@kifaltech.com?subject=Project%20Inquiry%20Referencing%20Case%20Study"
                className="btn btn-secondary"
                style={{ padding: '15px 30px', fontSize: '1rem' }}
              >
                Email Technical Leads
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies Navigation */}
      {relatedProjects.length > 0 && (
        <section style={{ paddingBottom: '80px' }}>
          <div className="container">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '24px', color: '#ffffff' }}>
              Explore More Verified Case Studies
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '24px' }}>
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/work/${rel.id}`}
                  className="agency-card"
                  style={{ display: 'block', padding: '32px', textDecoration: 'none' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-light)', textTransform: 'uppercase' }}>
                      {rel.category}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-dim)' }}>
                      {rel.year}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.4rem', color: '#ffffff', margin: '0 0 10px 0' }}>
                    {rel.title}
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {rel.desc}
                  </p>
                  <span style={{ color: 'var(--primary-light)', fontSize: '0.88rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Read Case Study <SvgArrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
