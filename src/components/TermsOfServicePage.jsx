import React from 'react';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';

export default function TermsOfServicePage() {
  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Terms of Service", url: "https://kifaltech.com/terms" }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      <SEOHead
        title="Terms of Service | KifalTech Digital Agency"
        description="Review KifalTech's standard master services agreement, 100% intellectual property ownership transfer, 30-day warranty, and milestone-based project policies."
        canonical="https://kifaltech.com/terms"
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '65ch', margin: '0 auto' }}>
          <nav className="breadcrumb-nav" aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Terms of Service</span>
          </nav>

          <div style={{ marginBottom: '40px' }}>
            <span className="eyebrow">Client Service Agreement</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '14px', lineHeight: 1.15 }}>
              Terms of Service
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              Last Updated: October 2026 • Governing Terms for All Client Engagements
            </p>
          </div>

          {/* Narrow Reading Column (max-width: 65ch) */}
          <article
            style={{
              lineHeight: 1.85,
              fontSize: '1.02rem',
              color: 'var(--text-muted)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '32px'
            }}
          >
            <h2 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '0', marginBottom: '16px' }}>
              1. Acceptance &amp; Scope of Agreement
            </h2>
            <p style={{ marginBottom: '28px' }}>
              These Terms of Service ("Agreement") govern all software engineering, web application development, UI/UX design, Shopify development, and digital consulting services provided by KifalTech Digital Solutions ("KifalTech") to the client ("Client"). By authorizing a project proposal, statement of work (SOW), or paying an initial kickoff milestone, the Client acknowledges and agrees to these terms.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '36px', marginBottom: '16px' }}>
              2. 100% Intellectual Property Ownership Transfer
            </h2>
            <p style={{ marginBottom: '28px' }}>
              We believe in total client freedom and <strong>zero vendor lock-in</strong>. Upon receipt of full and final milestone payment, KifalTech automatically and irrevocably transfers 100% of all intellectual property rights, customized source code repositories, visual design assets, Figma files, and database schemas directly to the Client.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '36px', marginBottom: '16px' }}>
              3. Milestone-Based Payments &amp; Transparent Invoicing
            </h2>
            <p style={{ marginBottom: '28px' }}>
              All project pricing is clearly stated in writing prior to work commencement. Standard development contracts are invoiced on transparent milestones (e.g. 50% deposit upon kickoff, 50% upon completed staging QA and deployment approval). KifalTech never charges hidden licensing fees or unauthorized recurring fees.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '36px', marginBottom: '16px' }}>
              4. 30-Day Quality Warranty &amp; Post-Launch Support
            </h2>
            <p style={{ marginBottom: '28px' }}>
              Every custom software and web build launched by KifalTech includes a <strong>complimentary 30-day post-launch warranty period</strong>. During this window, any software defects, responsive CSS anomalies, or functional bugs identified within the agreed project scope are resolved promptly at zero additional cost to the Client.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '36px', marginBottom: '16px' }}>
              5. Confidentiality &amp; Non-Disclosure (NDA)
            </h2>
            <p style={{ marginBottom: '28px' }}>
              KifalTech treats all client proprietary information, business data, customer lists, and strategic plans with strict confidentiality. A signed Mutual Non-Disclosure Agreement (NDA) is executed prior to reviewing sensitive technical specifications upon request.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '36px', marginBottom: '16px' }}>
              6. Limitation of Liability
            </h2>
            <p style={{ marginBottom: '28px' }}>
              To the maximum extent permitted by applicable law, KifalTech's aggregate liability arising out of any engagement shall not exceed the total fees paid by the Client for the specific service under dispute during the preceding three-month period.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '36px', marginBottom: '16px' }}>
              7. Legal Inquiries &amp; Master Service Agreements
            </h2>
            <p style={{ marginBottom: '40px' }}>
              For custom enterprise MSAs or legal questions regarding terms, contact our executive team at <a href="mailto:info@kifaltech.com" className="email-mailto-link" style={{ fontWeight: 600 }}>info@kifaltech.com</a>.
            </p>

            <div style={{ padding: '24px', borderRadius: 'var(--radius-sm)', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
              <div>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.94rem' }}>Need a signed bilateral NDA or custom contract?</strong>
                <span style={{ fontSize: '0.84rem', color: 'var(--text-dim)' }}>Reach our legal and leadership team directly</span>
              </div>
              <a href="mailto:info@kifaltech.com?subject=NDA%20/%20Contract%20Inquiry" className="btn btn-secondary" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>
                Request Mutual NDA
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
