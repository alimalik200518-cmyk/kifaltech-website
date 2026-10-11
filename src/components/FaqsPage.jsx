import React, { useState } from 'react';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';

export default function FaqsPage({ onOpenInquiry }) {
  const [activeIdx, setActiveIdx] = useState(0); // first item expanded by default
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Operations & Timezones', 'Code & IP Ownership', 'Project Timelines', 'Billing & SLAs'];

  const b2bFaqs = [
    {
      category: 'Code & IP Ownership',
      q: "Who owns the code and intellectual property upon project launch?",
      a: "You do — 100% unconditionally. Upon settlement of final milestone invoices, complete intellectual property ownership, Git source code repositories, database schemas, and Figma design files are transferred directly to your organization. KifalTech enforces zero vendor lock-in and zero proprietary licensing fees."
    },
    {
      category: 'Operations & Timezones',
      q: "How do you handle timezones between the US and Pakistan?",
      a: "Our leadership is strategically distributed between North America (Henry - Head of Product) and South Asia (Muhammad Ali - Technical Lead). We maintain dedicated overlapping hours across US Eastern/Central time and Pakistan Standard Time (PKT, UTC+5). This creates a round-the-clock velocity advantage: product definitions and client alignments during US daytime feed directly into engineering sprints in Pakistan, delivering results roughly 2x faster than single-timezone agencies."
    },
    {
      category: 'Project Timelines',
      q: "What is your typical project timeline from kickoff to launch?",
      a: "High-impact landing experiences typically launch in 1 to 2 weeks. Custom corporate web platforms and Shopify storefronts launch in 3 to 5 weeks. Complex web applications and headless portals take 6 to 10 weeks. Every project is scoped into transparent, 2-week milestone sprints with verifiable staging links."
    },
    {
      category: 'Billing & SLAs',
      q: "Do you offer post-launch SLA maintenance and security support?",
      a: "Yes. Every custom build includes a complimentary 30-day post-launch warranty covering any bugs or CSS anomalies. Thereafter, we offer dedicated monthly SLAs covering daily cloud backups, 24/7 uptime monitoring, security updates, Core Web Vitals maintenance, and prioritized monthly feature hours."
    },
    {
      category: 'Billing & SLAs',
      q: "How are project fees structured, and do you require upfront payment?",
      a: "All engagements operate on transparent, fixed-scope milestone billing. A typical project is structured with a 50% deposit upon kickoff and 50% upon completed staging QA and deployment approval. We never bill surprise hourly overages or unauthorized scope changes."
    },
    {
      category: 'Code & IP Ownership',
      q: "Do you sign Non-Disclosure Agreements (NDAs) prior to scoping?",
      a: "Yes, standard protocol. We routinely execute bilateral NDAs with startup founders and enterprise leads before discussing proprietary business logic, architectures, or customer data."
    },
    {
      category: 'Operations & Timezones',
      q: "Which tech stacks do you specialize in, and why?",
      a: "We specialize in React 18, Next.js (App Router), TypeScript, Node.js, and bespoke Shopify Online Store 2.0 (Liquid / Storefront API). We deliberately avoid heavy website builders in favor of clean, performant code architectures that deliver sub-second Largest Contentful Paint (LCP) and zero layout shift."
    },
    {
      category: 'Project Timelines',
      q: "How does your team maintain code quality and prevent technical debt?",
      a: "Every pull request is reviewed directly by Technical Lead Muhammad Ali. We maintain automated TypeScript verification, ESLint rules, and semantic component boundaries. We write clean, self-documenting code so your internal engineering team can easily take over whenever desired."
    }
  ];

  const filteredFaqs = b2bFaqs.filter((f) => {
    const matchesCategory = activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch = f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": filteredFaqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "FAQs", url: "https://kifaltech.com/faq" }
  ];

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      <SEOHead
        title="Client FAQs | Code Ownership, Timezones & SLAs | KifalTech"
        description="Clear, honest answers to common B2B questions about KifalTech: code ownership, US & Pakistan timezone collaboration, project timelines, and post-launch SLAs."
        canonical="https://kifaltech.com/faq"
        schema={faqSchema}
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Client FAQs</span>
          </nav>

          <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="pulse-indicator"></span>
              <span className="eyebrow" style={{ marginBottom: 0 }}>
                100% REMOTE GLOBAL DIGITAL AGENCY
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '18px', lineHeight: 1.15 }}>
              Client FAQs &amp; Operational Standards
            </h1>
            <p style={{ fontSize: '1.16rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              Transparent answers regarding source code ownership, our dual US/Pakistan timezone model, sprint milestones, and production SLAs.
            </p>
          </div>

          {/* Search Filter Input */}
          <div style={{ marginBottom: '28px' }}>
            <div className="agency-field-group">
              <input
                type="text"
                placeholder="Search questions (e.g. code ownership, timezones, timeline, SLA, pricing)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="agency-input-minimal"
                style={{ fontSize: '1rem', padding: '14px 4px' }}
                aria-label="Search FAQs"
              />
              <div className="field-underline-bar" />
            </div>
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--primary-light)' : 'rgba(255, 255, 255, 0.12)',
                  background: activeCategory === cat ? 'rgba(139, 92, 246, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Elegant Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '60px' }}>
            {filteredFaqs.length === 0 ? (
              <div className="agency-card" style={{ padding: '36px', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>No questions matched your search query. Feel free to contact our engineering leads directly.</p>
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = activeIdx === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      borderRadius: 'var(--radius-sm)',
                      background: isOpen ? '#181313' : 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid',
                      borderColor: isOpen ? 'rgba(139, 92, 246, 0.35)' : 'rgba(255, 255, 255, 0.06)',
                      transition: 'all 0.25s ease',
                      overflow: 'hidden'
                    }}
                  >
                    <button
                      onClick={() => setActiveIdx(isOpen ? -1 : idx)}
                      style={{
                        width: '100%',
                        padding: '22px 24px',
                        background: 'transparent',
                        border: 'none',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                      aria-expanded={isOpen}
                    >
                      <div>
                        <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '4px' }}>
                          {faq.category}
                        </span>
                        <span style={{ fontSize: '1.08rem', fontWeight: 600, color: isOpen ? 'var(--primary-light)' : '#ffffff', lineHeight: 1.4 }}>
                          {faq.q}
                        </span>
                      </div>
                      <span
                        style={{
                          flexShrink: 0,
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: isOpen ? 'var(--primary)' : 'rgba(255, 255, 255, 0.06)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '1.1rem',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease, background 0.2s ease'
                        }}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: '0 24px 24px 24px',
                          color: 'var(--text-muted)',
                          fontSize: '0.98rem',
                          lineHeight: 1.75,
                          borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                          paddingTop: '16px'
                        }}
                      >
                        <p style={{ margin: 0 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Direct Technical Inquiry Card */}
          <div
            className="agency-card"
            style={{
              padding: 'clamp(36px, 5vw, 48px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px'
            }}
          >
            <div style={{ maxWidth: '520px' }}>
              <span className="eyebrow" style={{ marginBottom: '8px' }}>Direct Engineering Access</span>
              <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '8px' }}>
                Have an architecture question not listed here?
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                Connect directly with Muhammad Ali (Technical Lead) or Henry (Head of Product) via <a href="mailto:info@kifaltech.com" style={{ color: 'var(--primary-light)', fontWeight: 600 }}>info@kifaltech.com</a>.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="mailto:info@kifaltech.com?subject=Technical%20Question%20for%20Engineering%20Leads"
                className="btn btn-secondary"
                style={{ padding: '12px 22px', fontSize: '0.88rem' }}
              >
                Email Question
              </a>
              <button
                onClick={onOpenInquiry}
                className="btn btn-primary"
                style={{ padding: '12px 24px', fontSize: '0.88rem' }}
              >
                <span>Request Scope Consultation</span>
                <SvgArrow />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
