import React from 'react';
import { agencyData } from '../data/agencyData.js';
import SEOHead from './SEOHead.jsx';
import { useRouter, Link } from './Router.jsx';

export default function PortfolioDetailPage({ projectSlug, onStartSimilarProject }) {
  const { navigate } = useRouter();
  const project = agencyData.portfolio.find((p) => p.id === projectSlug);

  if (!project) {
    return (
      <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
        <h2>Case Study Not Found</h2>
        <p style={{ marginTop: '12px' }}>The requested portfolio case study does not exist or has moved.</p>
        <button onClick={() => navigate('/portfolio')} className="btn btn-primary" style={{ marginTop: '24px' }}>
          Back to Portfolio
        </button>
      </div>
    );
  }

  // Related Case Studies
  const relatedProjects = agencyData.portfolio
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  // CreativeWork Schema
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
    "publisher": {
      "@type": "Organization",
      "name": agencyData.company.legalName
    },
    "dateCreated": project.year,
    "genre": project.category,
    "keywords": project.services.join(", ")
  };

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Portfolio", url: "https://kifaltech.com/portfolio" },
    { name: project.title, url: project.seo.canonical }
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

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={project.seo.title}
        description={project.seo.metaDesc}
        canonical={project.seo.canonical}
        schema={caseStudySchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Header & Case Study Overview */}
      <section className="section-spacing" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/portfolio">Portfolio</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{project.title}</span>
          </nav>

          <div style={{ maxWidth: '860px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span className="eyebrow" style={{ marginBottom: 0 }}>
                {project.category}
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-dim)'
                }}
              >
                {project.year} • {project.timeline}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '20px', lineHeight: 1.12 }}>
              {project.heroHeadline}
            </h1>

            <p style={{ fontSize: '1.18rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              {project.desc}
            </p>
          </div>

          {/* Metadata Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px',
              padding: '28px 0',
              borderTop: '1px solid var(--border-subtle)',
              borderBottom: '1px solid var(--border-subtle)',
              marginBottom: '50px'
            }}
          >
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>CLIENT</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)', marginTop: '4px' }}>{project.client}</div>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>INDUSTRY</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)', marginTop: '4px' }}>{project.industry}</div>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>SERVICES PROVIDED</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                {project.services.map((s, i) => (
                  <span key={i} style={{ fontSize: '0.8rem', background: 'var(--bg-tag)', padding: '2px 8px', borderRadius: '4px', color: 'var(--text-main)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>TIMELINE</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-emerald)', marginTop: '4px' }}>{project.timeline}</div>
            </div>
          </div>

          {/* Bespoke Visual Mockup Frame (NO generic AI graphics) */}
          <div style={{ marginBottom: '60px' }}>
            {project.mockupType === 'mobile' ? (
              <div className="mockup-mobile">
                <div className="mockup-mobile-screen" style={{ padding: '24px 16px', minHeight: '440px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                      <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-white)' }}>{project.client}</span>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)' }}>● ONLINE</span>
                    </div>
                    <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--bg-card)', marginBottom: '16px', border: '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: '0.72rem', color: 'var(--primary-light)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>MOBILE EXPERIENCE</span>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', margin: '6px 0' }}>{project.title}</h4>
                      <p style={{ fontSize: '0.82rem', lineHeight: 1.5, color: 'var(--text-muted)' }}>{project.challenge}</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      {project.results.slice(0, 2).map((r, i) => (
                        <div key={i} style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                          <strong style={{ fontSize: '1.1rem', color: 'var(--primary-light)' }}>{r.value}</strong>
                          <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '2px' }}>{r.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', paddingTop: '16px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Native-grade UX Architecture</span>
                  </div>
                </div>
              </div>
            ) : project.mockupType === 'terminal' ? (
              <div className="mockup-terminal" style={{ maxWidth: '880px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                  <span style={{ marginLeft: '10px', color: '#94a3b8', fontSize: '0.78rem' }}>kifaltech-enterprise-deploy ~ {project.id}</span>
                </div>
                <div style={{ color: '#6ee7b7' }}>$ kifaltech deploy --project="{project.title}" --env=production</div>
                <div style={{ color: '#94a3b8', margin: '8px 0' }}>✔ Security audit passed: 0 vulnerabilities</div>
                <div style={{ color: '#94a3b8', margin: '4px 0' }}>✔ Latency benchmarks: &lt; 50ms average API response</div>
                <div style={{ color: '#94a3b8', margin: '4px 0' }}>✔ Database migrations: 100% schema integrity</div>
                <div style={{ color: '#a5b4fc', marginTop: '12px' }}>[SUCCESS] {project.title} deployed with 99.98% uptime SLA.</div>
              </div>
            ) : (
              <div className="mockup-browser">
                <div className="mockup-browser-header">
                  <div className="mockup-dots">
                    <div className="mockup-dot close" />
                    <div className="mockup-dot min" />
                    <div className="mockup-dot max" />
                  </div>
                  <div className="mockup-url-bar">
                    <span style={{ color: 'var(--accent-emerald)' }}>https://</span>
                    <span>case-studies.kifaltech.com/{project.id}</span>
                  </div>
                </div>
                <div className="mockup-browser-content" style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-light)' }}>
                        VERIFIED PRODUCTION CASE STUDY
                      </span>
                      <h3 style={{ fontSize: '1.8rem', color: 'var(--text-white)', marginTop: '4px' }}>
                        {project.title}
                      </h3>
                    </div>
                    <span style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 600 }}>
                      Live Production
                    </span>
                  </div>

                  {/* Highlight Results Cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    {project.results.map((res, i) => (
                      <div
                        key={i}
                        style={{
                          padding: '20px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--bg-main)',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        <span style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--primary-light)', display: 'block' }}>
                          {res.value}
                        </span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Challenge & Solution Narrative */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
            <div className="agency-card">
              <span className="eyebrow" style={{ color: 'var(--accent-amber)' }}>The Challenge</span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--text-white)' }}>
                Understanding the Problem
              </h3>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.72 }}>
                {project.challenge}
              </p>
            </div>

            <div className="agency-card">
              <span className="eyebrow" style={{ color: 'var(--accent-emerald)' }}>The Engineering Solution</span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--text-white)' }}>
                Architecture & Execution
              </h3>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.72 }}>
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="section-spacing">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="section-header">
            <span className="eyebrow">Project Deliverables</span>
            <h2>Systems & Solutions Engineered</h2>
            <p>Every phase delivered functional, documented, and production-tested assets.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {project.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="agency-card"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '20px' }}
              >
                <SvgCheck />
                <span style={{ fontSize: '0.96rem', fontWeight: 500, color: 'var(--text-white)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project FAQs */}
      {project.faqs && project.faqs.length > 0 && (
        <section className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="section-header">
              <span className="eyebrow">Project Insights</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-accordion">
              {project.faqs.map((faq, idx) => (
                <div key={idx} className="faq-item active">
                  <div className="faq-trigger" style={{ cursor: 'default' }}>
                    <span>{faq.q}</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="section-spacing">
        <div className="container">
          <div
            className="agency-card"
            style={{
              padding: 'clamp(40px, 6vw, 64px)',
              textAlign: 'center',
              border: '1px solid var(--border-medium)'
            }}
          >
            <span className="eyebrow" style={{ margin: '0 auto 16px auto' }}>
              Project Inquiries
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', marginBottom: '16px' }}>
              Need similar results for your business?
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 28px auto', fontSize: '1.05rem' }}>
              Let's discuss how KifalTech can design and engineer a digital solution tailored to your goals.
            </p>
            <button
              onClick={() => onStartSimilarProject(project)}
              className="btn btn-primary"
              style={{ padding: '15px 34px', fontSize: '1.02rem' }}
            >
              <span>Start a Project Like {project.title}</span>
              <SvgArrow />
            </button>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-spacing" style={{ paddingTop: 0 }}>
          <div className="container">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '24px', color: 'var(--text-white)' }}>
              More {project.category} Case Studies
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/portfolio/${rel.id}`}
                  className="agency-card"
                  style={{ display: 'block', padding: '24px' }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                    {rel.year} • {rel.category}
                  </span>
                  <h4 style={{ fontSize: '1.25rem', margin: '8px 0', color: 'var(--text-white)' }}>
                    {rel.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {rel.desc}
                  </p>
                  <span style={{ color: 'var(--primary-light)', fontSize: '0.88rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    View Case Study <SvgArrow />
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
