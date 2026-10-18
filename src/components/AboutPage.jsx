import React from 'react';
import { agencyData } from '../data/agencyData.js';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';
import KifalTechLogo from './KifalTechLogo.jsx';
import TeamSection from './TeamSection.jsx';

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
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span className="pulse-indicator"></span>
                <span className="eyebrow" style={{ marginBottom: 0 }}>
                  100% REMOTE GLOBAL DIGITAL AGENCY
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '20px', lineHeight: 1.15 }}>
                Engineering Trust, Speed &amp; Modern Digital Craftsmanship
              </h1>
              <p style={{ fontSize: '1.12rem', lineHeight: 1.72, marginBottom: '24px' }}>
                {company.story}
              </p>
              <div style={{ marginBottom: '8px' }}>
                <span className="eyebrow" style={{ color: 'var(--primary-light)', fontSize: '0.75rem', marginBottom: '8px', display: 'inline-block' }}>
                  WHAT MAKES US SPECIAL
                </span>
              </div>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.68, color: 'var(--text-muted)' }}>
                {company.whatMakesUsSpecial}
              </p>

              {/* Authentic Capability Pillars (Solid Standards) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginTop: '32px' }}>
                <div style={{ background: '#111111', padding: '14px', borderRadius: '0px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#00D8FF', fontFamily: 'var(--font-heading)' }}>100% Remote Global</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', marginTop: '4px' }}>US &amp; South Asia Hubs</div>
                </div>
                <div style={{ background: '#111111', padding: '14px', borderRadius: '0px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>Modern Tech Stack</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', marginTop: '4px' }}>React, Node &amp; Edge</div>
                </div>
                <div style={{ background: '#111111', padding: '14px', borderRadius: '0px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#00D8FF', fontFamily: 'var(--font-heading)' }}>Production-Grade Code</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', marginTop: '4px' }}>Strict architectures</div>
                </div>
                <div style={{ background: '#111111', padding: '14px', borderRadius: '0px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>Dedicated Support &amp; SLA</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', marginTop: '4px' }}>Guaranteed uptime</div>
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
                  <strong style={{ display: 'block', fontSize: '1.2rem', color: 'var(--text-white)' }}>{company.rating?.score || '4.6'} / {company.rating?.max || '5.0'}</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Google &amp; Clutch Rating</span>
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

      {/* Meet Our Founders & Team Section */}
      <TeamSection />

      {/* Our Presence: Dual-Presence Architecture (USA & Pakistan) */}
      <section className="section-spacing" style={{ backgroundColor: '#130f0f', borderTop: '1px solid rgba(255, 255, 255, 0.06)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div className="section-header" style={{ maxWidth: '820px' }}>
            <span className="eyebrow">Our Presence</span>
            <h2>100% Remote Global Agency With Strategic Hubs</h2>
            <p>
              Operating seamlessly across North American and South Asian time zones to guarantee continuous velocity, architectural excellence, and uninterrupted engineering coverage.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '36px' }}>
            {/* USA Office Block */}
            <div className="agency-card" style={{ padding: '36px', border: '1px solid rgba(139, 92, 246, 0.25)', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  USA OFFICE
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', padding: '3px 10px', borderRadius: 'var(--radius-full)', background: 'rgba(139, 92, 246, 0.12)', color: 'var(--primary-light)' }}>
                  EST / CST Coverage
                </span>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '4px' }}>Henry</h3>
              <div style={{ fontSize: '0.88rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
                Head of Product &amp; Commercial Strategy
              </div>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '22px' }}>
                Leading product discovery, design token systems, client stakeholder alignments, and North American delivery pipelines.
              </p>
              <div style={{ borderTop: '1px solid #222222', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>DIRECT INQUIRY:</div>
                <a
                  href={`https://wa.me/923176704325?text=${encodeURIComponent("Hello Henry, I'd like to discuss a project with KifalTech.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.88rem', color: '#25D366', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>💬</span>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Pakistan Office Block */}
            <div className="agency-card" style={{ padding: '36px', border: '1px solid #222222', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  PAKISTAN ENGINEERING HUB
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', padding: '3px 10px', borderRadius: '0px', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--accent-emerald)', border: '1px solid #222222' }}>
                  PKT (UTC+5) Technical Hub
                </span>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '4px' }}>Muhammad Ali</h3>
              <div style={{ fontSize: '0.88rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
                Technical Lead &amp; Systems Architect
              </div>
              <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 500, marginBottom: '8px' }}>
                Karachi, Pakistan
              </div>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '22px' }}>
                Directing core full-stack engineering, cloud infrastructure, automated QA, and high-performance React &amp; Shopify builds.
              </p>
              <div style={{ borderTop: '1px solid #222222', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>DIRECT INQUIRY:</div>
                <a
                  href={`https://wa.me/923176704325?text=${encodeURIComponent("Hello Muhammad Ali, I'd like to discuss engineering with KifalTech.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.88rem', color: '#25D366', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>💬</span>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Authentic Global Collaboration & Culture Banner */}
          <div
            style={{
              marginBottom: '36px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backgroundColor: '#1a1515',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))'
            }}
          >
            <div style={{ position: 'relative', minHeight: '220px' }}>
              <img
                src="/images/culture/coworking-collaboration.jpg"
                alt="Engineers collaborating with laptops in modern industrial co-working space without looking directly at camera"
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
                  padding: '3px 8px',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#ffffff'
                }}
              >
                ● Cross-Timezone Architectural Synchronization
              </div>
            </div>

            <div style={{ padding: 'clamp(24px, 3.5vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                DISTRIBUTED VELOCITY
              </span>
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '10px' }}>
                Continuous Engineering Across Time Zones
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                By aligning our US product leadership (Henry) with our Pakistan engineering hub (Muhammad Ali), client feedback and architecture requirements are reviewed, refined, and deployed in accelerated sprint cycles without geographic bottlenecks.
              </p>
            </div>
          </div>

          {/* Central Email Link */}
          <div style={{ padding: '24px 30px', borderRadius: 'var(--radius-sm)', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '4px' }}>
                GENERAL CLIENT &amp; PARTNERSHIP INQUIRIES
              </span>
              <a
                href="mailto:info@kifaltech.com"
                className="email-mailto-link"
                style={{ fontSize: '1.1rem', fontWeight: 600, display: 'inline-block' }}
              >
                info@kifaltech.com
              </a>
            </div>
            <a href="mailto:info@kifaltech.com" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
              <span>Send Direct Email</span>
              <SvgArrow />
            </a>
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
              Direct access to senior engineers and designers committed to your long-term success. Contact us anytime at <a href="mailto:info@kifaltech.com" className="email-mailto-link" style={{ fontWeight: 600 }}>info@kifaltech.com</a>.
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
