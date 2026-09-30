import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';
import SEOHead from './SEOHead.jsx';
import { useRouter, Link } from './Router.jsx';

export default function ServiceDetailPage({ serviceSlug, onStartProject }) {
  const { navigate } = useRouter();
  const service = agencyData.services.find((s) => s.id === serviceSlug);

  // Active FAQ state
  const [activeFaq, setActiveFaq] = useState(0);

  if (!service) {
    return (
      <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
        <h2>Service Not Found</h2>
        <p style={{ marginTop: '12px' }}>The requested service does not exist or has moved.</p>
        <button onClick={() => navigate('/services')} className="btn btn-primary" style={{ marginTop: '24px' }}>
          Back to Services
        </button>
      </div>
    );
  }

  // Related Services
  const relatedServices = agencyData.services
    .filter((s) => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.category,
    "description": service.shortDesc,
    "provider": {
      "@type": "Organization",
      "name": agencyData.company.legalName,
      "url": agencyData.company.siteUrl
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.title} Deliverables`,
      "itemListElement": service.deliverables.map((d, i) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": d
        }
      }))
    }
  };

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Services", url: "https://kifaltech.com/services" },
    { name: service.title, url: service.seo.canonical }
  ];

  const SvgCheck = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '3px' }}>
      <path d="M3 8.5l3.5 3.5 6.5-7"/>
    </svg>
  );

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={service.seo.title}
        description={service.seo.metaDesc}
        canonical={service.seo.canonical}
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="section-spacing" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{service.title}</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span className="eyebrow" style={{ marginBottom: 0 }}>
                  <span className="pulse-indicator" />
                  Service {service.number} • {service.category}
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--primary-subtle)',
                    color: 'var(--primary-light)',
                    fontWeight: 600
                  }}
                >
                  {service.turnaround}
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', marginBottom: '20px', lineHeight: 1.12 }}>
                {service.heroHeadline}
              </h1>

              <p style={{ fontSize: '1.12rem', lineHeight: 1.7, marginBottom: '32px' }}>
                {service.heroSubheadline}
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onStartProject({ title: service.title, category: service.category })}
                  className="btn btn-primary"
                  style={{ padding: '14px 28px', fontSize: '0.98rem' }}
                >
                  <span>Request {service.title} Proposal</span>
                  <SvgArrow />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('faqs');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-secondary"
                  style={{ padding: '14px 24px' }}
                >
                  View FAQs & Pricing
                </button>
              </div>
            </div>

            {/* Human-Crafted Architecture Preview Mockup */}
            <div>
              <div className="mockup-browser">
                <div className="mockup-browser-header">
                  <div className="mockup-dots">
                    <div className="mockup-dot close" />
                    <div className="mockup-dot min" />
                    <div className="mockup-dot max" />
                  </div>
                  <div className="mockup-url-bar">
                    <span style={{ color: 'var(--accent-emerald)' }}>https://</span>
                    <span>kifaltech.com/api/v2/{service.id}</span>
                  </div>
                </div>
                <div className="mockup-browser-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)' }}>ARCHITECTURE SPEC</span>
                      <h4 style={{ fontSize: '1.15rem', color: 'var(--text-white)', marginTop: '4px' }}>{service.title} Stack</h4>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.1)', padding: '4px 10px', borderRadius: '4px' }}>
                      Status: Production
                    </span>
                  </div>

                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '20px' }}>
                    {service.architecture}
                  </p>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '10px' }}>CORE TECHNOLOGIES</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {service.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '6px 12px',
                            borderRadius: 'var(--radius-xs)',
                            background: 'var(--bg-subtle)',
                            border: '1px solid var(--border-subtle)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.8rem',
                            color: 'var(--text-white)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '14px 16px', borderRadius: 'var(--radius-xs)', background: 'var(--bg-tag)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Estimated Turnaround:</span>
                    <strong style={{ fontSize: '0.88rem', color: 'var(--text-white)' }}>{service.turnaround}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Deliverables & Scope</span>
            <h2>What We Engineer & Deliver</h2>
            <p>Every engagement includes concrete, measurable milestones with complete code and asset ownership.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="agency-card"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px' }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'var(--primary-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <SvgCheck />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.02rem', marginBottom: '6px', color: 'var(--text-white)' }}>
                    {item}
                  </h4>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.55 }}>
                    Adheres strictly to industry engineering standards and performance benchmarks.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Phase Service Execution Process */}
      <section className="section-spacing">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Execution Methodology</span>
            <h2>How We Deliver {service.title}</h2>
            <p>Structured agile sprints designed for transparency, fast delivery, and predictable milestones.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {service.process.map((step, idx) => (
              <div key={idx} className="agency-card" style={{ position: 'relative' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: 'var(--primary-light)',
                    display: 'block',
                    marginBottom: '16px',
                    opacity: 0.85
                  }}
                >
                  {step.phase}
                </span>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text-white)' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated FAQ Section */}
      <section id="faqs" className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="section-header">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2>Everything You Need to Know</h2>
            <p>Transparent answers regarding timeline, engineering standards, ownership, and maintenance.</p>
          </div>

          <div className="faq-accordion">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="faq-trigger"
                  aria-expanded={activeFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 6l4 4 4-4"/>
                    </svg>
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Impact Service CTA Banner */}
      <section className="section-spacing">
        <div className="container">
          <div
            className="agency-card"
            style={{
              padding: 'clamp(40px, 6vw, 70px)',
              textAlign: 'center',
              background: 'radial-gradient(ellipse at top, var(--bg-card-hover) 0%, var(--bg-card) 100%)',
              border: '1px solid var(--border-medium)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <span className="eyebrow" style={{ margin: '0 auto 16px auto' }}>
              Direct Engineering Consultation
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
              Ready to execute your {service.title} project?
            </h2>
            <p style={{ maxWidth: '640px', margin: '0 auto 32px auto', fontSize: '1.08rem' }}>
              Get a tailored technical proposal, milestone schedule, and fixed quote within 24 business hours.
            </p>
            <button
              onClick={() => onStartProject({ title: service.title, category: service.category })}
              className="btn btn-primary"
              style={{ padding: '15px 36px', fontSize: '1.02rem' }}
            >
              <span>Get Started with {service.title}</span>
              <SvgArrow />
            </button>
          </div>
        </div>
      </section>

      {/* Cross-Linking to Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-spacing" style={{ paddingTop: 0 }}>
          <div className="container">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '24px', color: 'var(--text-white)' }}>
              Related {service.category} Capabilities
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/services/${rel.id}`}
                  className="agency-card"
                  style={{ display: 'block', padding: '24px' }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-light)' }}>
                    SERVICE {rel.number}
                  </span>
                  <h4 style={{ fontSize: '1.2rem', margin: '8px 0', color: 'var(--text-white)' }}>
                    {rel.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {rel.shortDesc}
                  </p>
                  <span style={{ color: 'var(--primary-light)', fontSize: '0.88rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Explore Service <SvgArrow />
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
