import React from 'react';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Privacy Policy", url: "https://kifaltech.com/privacy" }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      <SEOHead
        title="Privacy Policy | KifalTech Digital Agency"
        description="Learn how KifalTech collects, safeguards, and handles personal data and client information in accordance with GDPR, CCPA, and international data privacy regulations."
        canonical="https://kifaltech.com/privacy"
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '65ch', margin: '0 auto' }}>
          <nav className="breadcrumb-nav" aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Privacy Policy</span>
          </nav>

          <div style={{ marginBottom: '40px' }}>
            <span className="eyebrow">Legal &amp; Compliance</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '14px', lineHeight: 1.15 }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              Last Updated: October 2026 • 100% Remote Global Digital Agency
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
              1. Overview &amp; Commitment
            </h2>
            <p style={{ marginBottom: '28px' }}>
              At KifalTech Digital Solutions ("KifalTech", "we", "our", or "us"), we prioritize the security, confidentiality, and integrity of your personal and commercial data. As a 100% remote global digital agency operating across North America and South Asia, this Privacy Policy details how we collect, store, process, and protect information collected through our website (<a href="https://kifaltech.com" style={{ color: 'var(--primary-light)' }}>https://kifaltech.com</a>) and during our client engineering engagements.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '36px', marginBottom: '16px' }}>
              2. Information We Collect
            </h2>
            <p style={{ marginBottom: '16px' }}>
              We only collect data necessary to evaluate, scope, and deliver high-quality digital engineering and design services, including:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '28px' }}>
              <li style={{ marginBottom: '10px' }}><strong>Contact Details:</strong> Full name, corporate email address, phone number, and company name provided via our inquiry forms.</li>
              <li style={{ marginBottom: '10px' }}><strong>Project Specifications:</strong> Technical briefs, repository links, design guidelines, and scope requirements submitted to our engineering leads.</li>
              <li style={{ marginBottom: '10px' }}><strong>Technical Telemetry:</strong> Anonymized browser version, device viewport, and interaction timing to optimize website performance and Google Core Web Vitals.</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '36px', marginBottom: '16px' }}>
              3. Purpose of Data Processing
            </h2>
            <p style={{ marginBottom: '28px' }}>
              We process your information exclusively to: (a) evaluate project feasibility and deliver milestone-based software proposals; (b) execute authorized design, development, and maintenance contracts; (c) communicate project status updates; and (d) comply with statutory legal and accounting obligations. <strong>We do not sell, rent, or trade your personal or business data to any third-party advertisers.</strong>
            </p>

            <h2 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '36px', marginBottom: '16px' }}>
              4. Data Protection &amp; Security Controls
            </h2>
            <p style={{ marginBottom: '28px' }}>
              All network communication between your browser and our infrastructure is encrypted via TLS 1.3 with 256-bit SSL encryption. We implement strict role-based access control (RBAC), multi-factor authentication, and secure cloud storage adhering to ISO/IEC 27001 and SOC 2 Type II security principles.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '36px', marginBottom: '16px' }}>
              5. Your Legal Rights (GDPR &amp; CCPA)
            </h2>
            <p style={{ marginBottom: '28px' }}>
              Regardless of your geographical location, you maintain the right to: request access to your stored records; rectify inaccuracies; request total data erasure ("Right to be Forgotten"); or withdraw marketing consent at any time without penalty.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '36px', marginBottom: '16px' }}>
              6. Privacy Inquiries &amp; Data Protection Officer
            </h2>
            <p style={{ marginBottom: '40px' }}>
              To exercise any data rights or submit security inquiries, contact our Data Privacy Team directly at <a href="mailto:info@kifaltech.com" style={{ color: 'var(--primary-light)', fontWeight: 600 }}>info@kifaltech.com</a>.
            </p>

            <div style={{ padding: '24px', borderRadius: 'var(--radius-sm)', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
              <div>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.94rem' }}>Have questions about our data policies?</strong>
                <span style={{ fontSize: '0.84rem', color: 'var(--text-dim)' }}>Direct email to info@kifaltech.com</span>
              </div>
              <a href="mailto:info@kifaltech.com" className="btn btn-secondary" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>
                Contact Privacy Team
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
