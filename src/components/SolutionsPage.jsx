import React from 'react';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';
import agencyData from '../data/agencyData.js';

export default function SolutionsPage({ onStartProject }) {
  const { solutions } = agencyData;

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Solutions", url: "https://kifaltech.com/solutions" }
  ];

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  const SvgCheck = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '3px' }}>
      <path d="M3 8.5l3.5 3.5 6.5-7"/>
    </svg>
  );

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title="Enterprise & Digital Solutions Frameworks | KifalTech"
        description="Explore KifalTech's integrated solutions: Web & Software Platforms, Brand Identity Systems, E-Commerce Storefronts, and Data-Driven Digital Growth."
        canonical="https://kifaltech.com/solutions"
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Solutions</span>
          </nav>

          <div className="section-header" style={{ maxWidth: '840px', textAlign: 'left', margin: '0 0 50px 0' }}>
            <span className="eyebrow">Enterprise Frameworks</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
              Integrated Digital Solutions Engineered for Scale
            </h1>
            <p style={{ fontSize: '1.12rem' }}>
              We combine specialized software engineering, design systems, and marketing capabilities into full-funnel digital solutions that optimize operations and accelerate revenue.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', marginBottom: '80px' }}>
            {solutions.map((sol) => (
              <div key={sol.id} className="agency-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '36px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span className="eyebrow" style={{ marginBottom: 0, fontSize: '0.74rem' }}>FRAMEWORK</span>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)' }}>Production Ready</span>
                  </div>

                  <h3 style={{ fontSize: '1.6rem', color: 'var(--text-white)', marginBottom: '12px' }}>
                    {sol.title}
                  </h3>

                  <p style={{ fontSize: '0.96rem', lineHeight: 1.68, color: 'var(--text-muted)', marginBottom: '24px' }}>
                    {sol.desc}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', marginBottom: '28px' }}>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                      INCLUDED CAPABILITIES:
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {sol.servicesIncluded.map((svc, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-white)' }}>
                          <SvgCheck />
                          <span>{svc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => onStartProject({ title: sol.title, category: 'Integrated Solution' })} className="btn btn-primary" style={{ flex: 1, padding: '12px' }}>
                    <span>Inquire About Framework</span>
                    <SvgArrow />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="agency-card" style={{ padding: '48px', textAlign: 'center', border: '1px solid var(--border-medium)', background: 'var(--bg-secondary)' }}>
            <span className="eyebrow" style={{ margin: '0 auto 16px auto' }}>Tailored Scoping</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', marginBottom: '14px' }}>
              Need a Custom Cross-Discipline Solution?
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 28px auto', fontSize: '1.05rem' }}>
              From replatforming multi-brand e-commerce to full-stack cloud SaaS development, our team structures bespoke engagements.
            </p>
            <button onClick={() => onStartProject({ title: 'Bespoke Cross-Discipline Solution' })} className="btn btn-primary" style={{ padding: '14px 32px' }}>
              <span>Consult with an Engineering Lead</span>
              <SvgArrow />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
