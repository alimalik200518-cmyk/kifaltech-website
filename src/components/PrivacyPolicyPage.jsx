import React from 'react';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Privacy Policy", url: "https://kifaltech.com/privacy-policy" }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title="Privacy Policy | KifalTech Digital Solutions"
        description="Learn how KifalTech collects, safeguards, and handles personal data and client information in accordance with GDPR, CCPA, and international data privacy regulations."
        canonical="https://kifaltech.com/privacy-policy"
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Privacy Policy</span>
          </nav>

          <div style={{ marginBottom: '40px' }}>
            <span className="eyebrow">Legal & Compliance</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '16px' }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              Last Updated: September 3, 2026 • Effective Date: January 1, 2022
            </p>
          </div>

          <div className="agency-card" style={{ padding: '40px', lineHeight: 1.8 }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>
              1. Overview & Commitment
            </h2>
            <p style={{ marginBottom: '24px' }}>
              At Kifal Tech Digital Solutions ("KifalTech", "we", "our", or "us"), we prioritize the security, confidentiality, and integrity of your personal and commercial data. This Privacy Policy details how we collect, store, process, and protect information collected through our website (https://kifaltech.com) and during our client engineering engagements.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>
              2. Information We Collect
            </h2>
            <p style={{ marginBottom: '14px' }}>
              We only collect data necessary to deliver high-quality digital engineering services, including:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
              <li style={{ marginBottom: '8px' }}><strong>Contact Details:</strong> Name, work email address, telephone number, and company name provided via consultation and inquiry forms.</li>
              <li style={{ marginBottom: '8px' }}><strong>Project Specifications:</strong> Technical briefs, existing website URLs, API documentation, and architecture requirements.</li>
              <li style={{ marginBottom: '8px' }}><strong>Technical Telemetry:</strong> Anonymized browser version, device viewport, IP address, and interaction timing to optimize website performance and Core Web Vitals.</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>
              3. Purpose of Data Processing
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We process your information exclusively to: (a) evaluate project feasibility and deliver milestone-based software proposals; (b) execute authorized design, development, and maintenance contracts; (c) communicate project status updates; and (d) comply with statutory legal and accounting obligations. We do not sell, rent, or trade your personal or business data to any third-party advertisers.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>
              4. Data Protection & Security Controls
            </h2>
            <p style={{ marginBottom: '24px' }}>
              All network communication between your browser and our infrastructure is encrypted via TLS 1.3 with 256-bit SSL encryption. We implement strict role-based access control (RBAC), multi-factor authentication, and secure cloud storage adhering to ISO/IEC 27001 and SOC 2 Type II security principles.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>
              5. Your Legal Rights (GDPR & CCPA)
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Regardless of your geographical location, you maintain the right to: request access to your stored records; rectify inaccuracies; request total data erasure ("Right to be Forgotten"); or withdraw marketing consent at any time without penalty.
            </p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>
              6. Privacy Inquiries & Data Protection Officer
            </h2>
            <p>
              To exercise any data rights or submit security inquiries, contact our Data Privacy Team directly at <a href="mailto:info@kifaltech.com" style={{ color: 'var(--primary-light)', fontWeight: 600 }}>info@kifaltech.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
