import React, { useState } from 'react';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';

export default function FaqsPage({ onOpenInquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);

  const categories = ['All', 'Technical & Stacks', 'Pricing & Billing', 'Code Ownership & IP', 'Support & Maintenance'];

  const masterFaqs = [
    {
      category: 'Technical & Stacks',
      q: "Which modern web and mobile tech stacks does KifalTech specialize in?",
      a: "We specialize in modern, high-performance ecosystems including React 18, Next.js, TypeScript, Node.js, PHP/Laravel, React Native, Flutter, and Shopify Online Store 2.0. We architect our applications for speed, zero vendor lock-in, and 95+ Google Lighthouse benchmarks."
    },
    {
      category: 'Technical & Stacks',
      q: "How do you optimize for Google Core Web Vitals (LCP, CLS, INP)?",
      a: "We build with clean component architectures, automated image transcoding (WebP/AVIF), code-splitting, lazy-loading below-the-fold assets, CDN edge caching, and server-side rendering to ensure sub-second Largest Contentful Paint and zero layout shift."
    },
    {
      category: 'Technical & Stacks',
      q: "Can you integrate our website with third-party CRMs, ERPs, or payment gateways?",
      a: "Yes. We have deep experience integrating REST, GraphQL, and webhook-driven systems including Stripe, PayPal, HubSpot, Salesforce, Klaviyo, ShipStation, and custom internal SQL/NoSQL databases."
    },
    {
      category: 'Pricing & Billing',
      q: "How are project fees structured and billed?",
      a: "Our engagements are fixed-quote and milestone-based. A standard project is typically billed with a 50% kickoff deposit and 50% upon completed staging QA and deployment approval. For ongoing SEO or marketing campaigns, transparent monthly retainers apply."
    },
    {
      category: 'Pricing & Billing',
      q: "Are there any hidden recurring fees or mandatory software licenses?",
      a: "Zero. KifalTech never charges hidden licensing markups. All third-party hosting, domain registrations, and payment processor accounts are set up directly in your company's name for complete transparency."
    },
    {
      category: 'Code Ownership & IP',
      q: "Who owns the source code and design assets upon project launch?",
      a: "You do. 100%. Upon settlement of final milestone invoices, complete intellectual property ownership, Git source code repositories, Figma designs, and domain assets are transferred unconditionally to your organization."
    },
    {
      category: 'Code Ownership & IP',
      q: "Do you sign Non-Disclosure Agreements (NDAs) prior to scoping?",
      a: "Yes. We regularly execute mutual NDAs with enterprise clients and startup founders before reviewing proprietary concepts, technical documentation, or customer data."
    },
    {
      category: 'Support & Maintenance',
      q: "What warranty or guarantee is included after website launch?",
      a: "Every custom build includes a complimentary 30-day post-launch warranty covering bug fixes, responsive CSS alignments, and technical verification within the agreed scope at no charge."
    },
    {
      category: 'Support & Maintenance',
      q: "Do you offer ongoing SLA maintenance and security monitoring?",
      a: "Yes. We provide dedicated monthly maintenance SLAs covering daily cloud backups, uptime monitoring, security patching, Core Web Vitals checks, and prioritized feature sprints."
    }
  ];

  const filteredFaqs = masterFaqs.filter((f) => {
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
    { name: "FAQs", url: "https://kifaltech.com/faqs" }
  ];

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title="Frequently Asked Questions (FAQs) | KifalTech"
        description="Find clear answers to common questions about KifalTech's software engineering process, pricing tiers, source code ownership, and post-launch SLAs."
        canonical="https://kifaltech.com/faqs"
        schema={faqSchema}
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">FAQs</span>
          </nav>

          <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', margin: '0 0 36px 0' }}>
            <span className="eyebrow">Knowledge & Answers</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '16px' }}>
              Frequently Asked Questions
            </h1>
            <p style={{ fontSize: '1.12rem' }}>
              Everything you need to know about partnering with KifalTech: engineering standards, IP ownership, milestone pricing, and maintenance SLAs.
            </p>
          </div>

          {/* Search Filter Bar */}
          <div style={{ marginBottom: '32px' }}>
            <input
              type="text"
              placeholder="Search questions (e.g. source code, pricing, react, maintenance)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ padding: '14px 20px', fontSize: '1rem', borderRadius: 'var(--radius-sm)' }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '9px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--primary)' : 'var(--border-subtle)',
                  background: activeCategory === cat ? 'var(--primary)' : 'var(--bg-card)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-main)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div className="faq-accordion" style={{ marginBottom: '60px' }}>
            {filteredFaqs.length === 0 ? (
              <div className="agency-card" style={{ padding: '30px', textAlign: 'center' }}>
                <p>No questions matched your search. Try another keyword or contact our engineering team directly.</p>
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className={`faq-item ${activeIdx === idx ? 'active' : ''}`}>
                  <button
                    onClick={() => setActiveIdx(activeIdx === idx ? -1 : idx)}
                    className="faq-trigger"
                    aria-expanded={activeIdx === idx}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon">↓</span>
                  </button>
                  {activeIdx === idx && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Still Have Questions Banner */}
          <div className="agency-card" style={{ padding: '40px', textAlign: 'center', border: '1px solid var(--border-medium)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '10px', color: 'var(--text-white)' }}>
              Have a Specific Technical Question?
            </h3>
            <p style={{ maxWidth: '580px', margin: '0 auto 24px auto', fontSize: '0.98rem' }}>
              Our senior engineering leads are available to discuss architecture feasibility and project timelines directly.
            </p>
            <button onClick={onOpenInquiry} className="btn btn-primary" style={{ padding: '13px 28px' }}>
              <span>Ask an Engineering Lead</span>
              <SvgArrow />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
