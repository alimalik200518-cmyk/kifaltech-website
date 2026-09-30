import React from 'react';
import { agencyData } from '../data/agencyData.js';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';
import KifalTechLogo from './KifalTechLogo.jsx';

export default function AboutPage({ onStartProject }) {
  const { company } = agencyData;

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "About", url: "https://kifaltech.com/about" }
  ];

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

  const milestones = [
    { year: "2022", title: "Inception & Core Software Engineering", desc: "Founded with a mission to deliver reliable, enterprise-grade custom web and mobile software with zero vendor lock-in." },
    { year: "2023", title: "Global Expansion & E-Commerce Practice", desc: "Expanded service offerings into custom Shopify Online Store 2.0 storefronts and international client delivery across North America and Europe." },
    { year: "2024", title: "Full-Funnel Digital Growth & Modern Web Stacks", desc: "Integrated technical SEO, Google Ads PPC management, and modern JAMstack cloud architectures into our core service matrix." },
    { year: "Present", title: "Sustainable Scale & Digital Engineering", desc: "Trusted by founders and digital leads globally for scalable web applications, fast turnarounds, and 24/7 client care." }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={agencyData.pageSEO.about.title}
        description={agencyData.pageSEO.about.metaDesc}
        canonical={agencyData.pageSEO.about.canonical}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">About</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center', marginBottom: '60px' }}>
            <div>
              <span className="eyebrow">Our Story & Mission</span>
              <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '20px', lineHeight: 1.15 }}>
                Engineering Trust, Speed & Modern Digital Craftsmanship
              </h1>
              <p style={{ fontSize: '1.12rem', lineHeight: 1.72, marginBottom: '24px' }}>
                {company.story}
              </p>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.68, color: 'var(--text-muted)' }}>
                {company.whatMakesUsSpecial}
              </p>

              {/* Authentic Capability Pillars (NO fake stats) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginTop: '32px' }}>
                <div style={{ background: '#1c1717', padding: '16px', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>Bespoke Code</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '4px' }}>No locked templates</div>
                </div>
                <div style={{ background: '#1c1717', padding: '16px', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.94rem', fontWeight: 600, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>Direct Access</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '4px' }}>Senior developers</div>
                </div>
                <div style={{ background: '#1c1717', padding: '16px', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>100% IP Transfer</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '4px' }}>Full client ownership</div>
                </div>
              </div>
            </div>

            <div className="agency-card" style={{ padding: '36px', background: 'var(--bg-secondary)', border: '1px solid var(--border-medium)' }}>
              <div style={{ marginBottom: '24px' }}>
                <KifalTechLogo />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-light)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>OUR MISSION</span>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>{company.mission}</p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-emerald)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>OUR VISION</span>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>{company.vision}</p>
              </div>

              <div style={{ padding: '16px', borderRadius: 'var(--radius-xs)', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.2rem', color: 'var(--text-white)' }}>{company.rating.score} / {company.rating.max}</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Google & Clutch Rating</span>
                </div>
                <button
                  onClick={() => onStartProject()}
                  className="btn btn-primary"
                  style={{ padding: '10px 18px', fontSize: '0.86rem' }}
                >
                  Start Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Track Record</span>
            <h2>Our Journey from 2022 to Present</h2>
            <p>A consistent evolution dedicated to technical excellence and client satisfaction.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {milestones.map((m, idx) => (
              <div key={idx} className="agency-card" style={{ padding: '30px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: 'var(--primary-light)',
                    display: 'block',
                    marginBottom: '12px'
                  }}
                >
                  {m.year}
                </span>
                <h4 style={{ fontSize: '1.18rem', marginBottom: '10px', color: 'var(--text-white)' }}>
                  {m.title}
                </h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-spacing">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Operating Principles</span>
            <h2>The Principles Behind Every Solution</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {agencyData.whyUs.map((w, idx) => (
              <div key={idx} className="agency-card" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <SvgCheck />
                  <h4 style={{ fontSize: '1.18rem', color: 'var(--text-white)' }}>{w.title}</h4>
                </div>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="agency-card" style={{ padding: 'clamp(40px, 6vw, 64px)', textAlign: 'center', border: '1px solid var(--border-medium)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', marginBottom: '16px' }}>
              Partner with a reliable digital engineering firm.
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 28px auto', fontSize: '1.05rem' }}>
              Direct access to senior engineers and designers committed to your long-term success.
            </p>
            <button
              onClick={() => onStartProject()}
              className="btn btn-primary"
              style={{ padding: '15px 34px', fontSize: '1.02rem' }}
            >
              <span>Schedule an Engineering Consultation</span>
              <SvgArrow />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
