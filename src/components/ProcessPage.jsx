import React from 'react';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';

export default function ProcessPage({ onStartProject }) {
  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Methodology & Process", url: "https://kifaltech.com/process" }
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery & Architecture Scoping",
      tag: "Phase 1 • Days 1 – 5",
      headline: "De-risking technical decisions before writing the first line of code.",
      desc: "Every successful platform begins with absolute clarity. We dissect your business model, target audience personas, infrastructure constraints, and competitive landscape to establish concrete success criteria.",
      activities: [
        "Business model & commercial objective mapping",
        "Technical stack feasibility & database schema modeling",
        "Third-party API & authentication requirements definition",
        "Target performance KPI benchmarks (e.g. <1s LCP, 95+ Lighthouse)"
      ],
      deliverable: "Comprehensive Technical Specification & Milestone Roadmap"
    },
    {
      number: "02",
      title: "UI/UX Strategy & Design Systems",
      tag: "Phase 2 • Weeks 1 – 2",
      headline: "Human-crafted interfaces engineered for intuitive conversion and visual dignity.",
      desc: "We build interactive Figma prototypes grounded in atomic design principles. Every layout is optimized for touch ergonomics on mobile before expanding to desktop, ensuring effortless user flow.",
      activities: [
        "Low-fidelity wireframing & information architecture",
        "Custom design tokens (typography, color contrast, micro-states)",
        "WCAG 2.1 AA accessibility audit & touch-target calibration",
        "Clickable desktop & mobile Figma prototypes"
      ],
      deliverable: "Complete Figma Design System & Approved Interactive Prototype"
    },
    {
      number: "03",
      title: "Full-Stack Agile Engineering",
      tag: "Phase 3 • Weeks 2 – 5",
      headline: "Writing clean, scalable code with automated testing and continuous integration.",
      desc: "Our engineers build using modern component architectures (React, Next.js, Node.js, TypeScript, Shopify OS 2.0). We adhere to strict code-quality linting, security best practices, and bi-weekly milestone demonstrations.",
      activities: [
        "Component-driven frontend development with responsive CSS",
        "Secure REST/GraphQL API integration & database optimization",
        "Automated CI/CD staging deployment pipelines",
        "Cross-browser testing across Chrome, Safari, Firefox, and Edge"
      ],
      deliverable: "Fully Functional Staging Environment with Live Review Link"
    },
    {
      number: "04",
      title: "QA, Cloud Launch & 30-Day Warranty",
      tag: "Phase 4 • Week 6 & Beyond",
      headline: "Zero-downtime production deployment backed by dedicated post-launch care.",
      desc: "We perform end-to-end regression testing, Core Web Vitals verification, SSL certificate hardening, and DNS switchover. Every launch includes 30 days of complimentary support to guarantee complete operational stability.",
      activities: [
        "Comprehensive QA regression & form submission testing",
        "Core Web Vitals performance audit (LCP, CLS, INP)",
        "Production DNS switchover & 256-bit SSL hardening",
        "30-day post-launch warranty with priority defect resolution"
      ],
      deliverable: "Live Production Platform, 100% IP Code Transfer & Documentation"
    }
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
        title="Our Engineering Process & Methodology | KifalTech"
        description="Discover KifalTech's 4-phase agile delivery framework: Discovery, UI/UX Strategy, Full-Stack Engineering, and Zero-Downtime Launch with a 30-day warranty."
        canonical="https://kifaltech.com/process"
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Process</span>
          </nav>

          <div className="section-header" style={{ maxWidth: '840px', textAlign: 'left', margin: '0 0 50px 0' }}>
            <span className="eyebrow">Methodology & Rigor</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
              How We Engineer Digital Platforms That Win
            </h1>
            <p style={{ fontSize: '1.12rem' }}>
              A disciplined, transparent 4-step framework designed to eliminate guesswork, keep budgets predictable, and deliver high-performance digital platforms on schedule.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', marginBottom: '80px' }}>
            {steps.map((step, idx) => (
              <div key={idx} className="agency-card" style={{ padding: 'clamp(28px, 4vw, 44px)', border: '1px solid var(--border-medium)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '20px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', fontWeight: 800, color: 'var(--primary-light)' }}>
                      {step.number}
                    </span>
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--text-white)' }}>
                      {step.title}
                    </h3>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', background: 'var(--bg-subtle)', color: 'var(--primary-light)', padding: '6px 14px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)' }}>
                    {step.tag}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '12px' }}>
                  {step.headline}
                </h4>

                <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px', color: 'var(--text-muted)' }}>
                  {step.desc}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                  {step.activities.map((act, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                      <SvgCheck />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>

                <div style={{ padding: '12px 18px', borderRadius: 'var(--radius-xs)', background: 'var(--bg-tag)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>PHASE DELIVERABLE:</span>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--accent-emerald)' }}>{step.deliverable}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="agency-card" style={{ padding: '48px', textAlign: 'center', border: '1px solid var(--border-medium)', background: 'radial-gradient(ellipse at top, var(--bg-card-hover) 0%, var(--bg-card) 100%)' }}>
            <span className="eyebrow" style={{ margin: '0 auto 16px auto' }}>Ready to Begin?</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', marginBottom: '16px' }}>
              Put our engineering framework to work on your project.
            </h2>
            <p style={{ maxWidth: '620px', margin: '0 auto 28px auto', fontSize: '1.05rem' }}>
              Schedule a scoping call with an engineering lead and receive an actionable milestone plan within 24 hours.
            </p>
            <button onClick={onStartProject} className="btn btn-primary" style={{ padding: '14px 32px' }}>
              <span>Start Phase 1 Discovery</span>
              <SvgArrow />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
