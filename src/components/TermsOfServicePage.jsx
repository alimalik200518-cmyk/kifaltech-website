import React from 'react';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';

export default function TermsOfServicePage() {
  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Terms of Service", url: "https://kifaltech.com/terms-of-service" }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title="Terms of Service | KifalTech Digital Solutions"
        description="Review KifalTech's standard master services agreement, intellectual property ownership terms, 30-day warranty, and milestone-based project policies."
        canonical="https://kifaltech.com/terms-of-service"
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Terms of Service</span>
          </nav>

          <div style={{ marginBottom: '40px' }}>
            <span className="eyebrow">Client Service Agreement</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '16px' }}>
              Terms of Service
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              Last Updated: September 3, 2026 • Governing Agreement for All Engagements
            </p>
          </div>

          <div className="agency-card" style={{ padding: '40px', lineHeight: 1.8 }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>
              1. Acceptance & Scope of Agreement
            </h2>
            <p style={{ marginBottom: '24px' }}>
              These Terms of Service ("Agreement") govern all software engineering, web application development, UI/UX design, Shopify development, and digital marketing services provided by Kifal Tech Digital Solutions ("KifalTech") to the client ("Client"). By authorizing a project proposal, statement of work (SOW), or paying an initial deposit, the Client acknowledges and agrees to these terms.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>
              2. 100% Intellectual Property Ownership Transfer
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We believe in total client freedom and <strong>zero vendor lock-in</strong>. Upon receipt of full and final milestone payment, KifalTech automatically and irrevocably transfers 100% of all intellectual property rights, customized source code repositories, visual design assets, Figma files, and database schemas directly to the Client.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>
              3. Milestone-Based Payments & Transparent Invoicing
            </h2>
            <p style={{ marginBottom: '24px' }}>
              All project pricing is clearly stated in writing prior to work commencement. Standard development contracts are invoiced on transparent milestones (e.g. 50% deposit upon kickoff, 50% upon completed staging QA and deployment approval). KifalTech never charges hidden licensing fees or unauthorized recurring fees.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>
              4. 30-Day Quality Warranty & Post-Launch Support
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Every custom software and web build launched by KifalTech includes a <strong>complimentary 30-day post-launch warranty period</strong>. During this window, any software defects, responsive CSS anomalies, or functional bugs identified within the agreed project scope are resolved promptly at zero additional cost to the Client.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>
              5. Confidentiality & Non-Disclosure (NDA)
            </h2>
            <p style={{ marginBottom: '24px' }}>
              KifalTech treats all client proprietary information, business data, customer lists, and strategic plans with strict confidentiality. A signed Mutual Non-Disclosure Agreement (NDA) is executed prior to reviewing sensitive technical specifications upon request.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>
              6. Limitation of Liability
            </h2>
            <p style={{ marginBottom: '24px' }}>
              To the maximum extent permitted by applicable law, KifalTech's aggregate liability arising out of any engagement shall not exceed the total fees paid by the Client for the specific service under dispute during the preceding three-month period.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>
              7. Questions & Legal Inquiries
            </h2>
            <p>
              For legal inquiries regarding terms, contracts, or master service agreements, contact our executive team at <a href="mailto:info@kifaltech.com" style={{ color: 'var(--primary-light)', fontWeight: 600 }}>info@kifaltech.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
