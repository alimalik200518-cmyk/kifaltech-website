import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';

export default function ContactPage() {
  const { company } = agencyData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Web Development',
    budget: '$500 – $2,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Contact", url: "https://kifaltech.com/contact" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const refCode = `KT-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryRef(refCode);

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_messages') || '[]');
      existing.unshift({
        id: refCode,
        timestamp: new Date().toISOString(),
        ...formData
      });
      localStorage.setItem('kifaltech_messages', JSON.stringify(existing));
    } catch (err) {
      console.warn('Could not persist message to localStorage:', err);
    }

    setSubmitted(true);
  };

  const copyRefCode = () => {
    if (inquiryRef) {
      navigator.clipboard?.writeText(inquiryRef);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  };

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={agencyData.pageSEO.contact.title}
        description={agencyData.pageSEO.contact.metaDesc}
        canonical={agencyData.pageSEO.contact.canonical}
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Contact</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'flex-start', marginBottom: '80px' }}>
            {/* Contact Overview */}
            <div>
              <span className="eyebrow">Direct Consultation</span>
              <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '20px', lineHeight: 1.15 }}>
                Let's Build Something Remarkable Together
              </h1>
              <p style={{ fontSize: '1.12rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Schedule a consultation with our engineering and design leads. We review your requirements and provide an actionable architectural plan within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <div className="agency-card" style={{ padding: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>INTERNATIONAL HEADQUARTERS</span>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-white)', marginTop: '4px' }}>
                    {company.headquarters || '151 Haywood St, Asheville, NC 28801, USA'}
                  </div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>North America Operations & Global Delivery</span>
                </div>

                <div className="agency-card" style={{ padding: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>DIRECT PHONE & WHATSAPP</span>
                  <a href={`tel:${company.inquiryPhone}`} style={{ display: 'block', fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-light)', marginTop: '4px' }}>
                    {company.inquiryPhone}
                  </a>
                  <span style={{ fontSize: '0.82rem', color: 'var(--accent-emerald)' }}>● Live SLA Response: &lt; 2 hours for international founders</span>
                </div>

                <div className="agency-card" style={{ padding: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>EMAIL INQUIRIES</span>
                  <a href={`mailto:${company.email}`} style={{ display: 'block', fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-light)', marginTop: '4px' }}>
                    {company.email}
                  </a>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Direct engineering review & non-disclosure agreement (NDA)</span>
                </div>

                <div className="agency-card" style={{ padding: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>CLIENT SATISFACTION</span>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-white)', marginTop: '4px' }}>
                    {company.rating.score} / {company.rating.max} Verified Score
                  </div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Google Reviews & Clutch Verified Feedback</span>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="agency-card" style={{ padding: '36px', border: '1px solid var(--border-medium)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--text-white)' }}>
                Start a Project Inquiry
              </h3>
              <p style={{ fontSize: '0.92rem', marginBottom: '24px' }}>
                Share a few details about your vision and goals.
              </p>

              {submitted ? (
                <div style={{ padding: '40px 20px', textAlign: 'center', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.6rem' }}>
                    ✔
                  </div>
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '8px' }}>
                    Inquiry Successfully Received
                  </h4>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '20px' }}>
                    Thank you, <strong>{formData.name}</strong>! An engineering lead will review your project requirements for <strong>{formData.service}</strong> and email you at <strong>{formData.email}</strong> shortly.
                  </p>

                  {inquiryRef && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', padding: '10px 18px', borderRadius: 'var(--radius-sm)', marginBottom: '24px' }}>
                      <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Inquiry Ref:</span>
                      <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', fontSize: '0.95rem' }}>{inquiryRef}</strong>
                      <button
                        type="button"
                        onClick={copyRefCode}
                        className="btn"
                        style={{ padding: '4px 10px', fontSize: '0.75rem', background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)' }}
                      >
                        {copiedRef ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  )}

                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', company: '', service: 'Web Development', budget: '$500 – $2,000', message: '' });
                      }}
                      className="btn btn-outline"
                      style={{ padding: '8px 22px', fontSize: '0.88rem' }}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">Company / Organization (Optional)</label>
                    <input
                      type="text"
                      placeholder="Acme Corporation"
                      className="form-input"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">Service of Interest</label>
                    <select
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      {agencyData.services.map((s) => (
                        <option key={s.id} value={s.title}>{s.title} ({s.category})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Estimated Budget (USD)</label>
                    <select
                      className="form-select"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option>&lt; $500 (Basic Fix / Small Task)</option>
                      <option>$500 – $2,000 (Standard Website / Storefront)</option>
                      <option>$2,000 – $5,000 (Custom Application / Platform)</option>
                      <option>$5,000+ (Enterprise Multi-Sprint Scope)</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Project Objectives & Timeline</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please tell us about your project, desired features, reference sites, and target launch date..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ padding: '14px', marginTop: '8px' }}>
                    <span>Send Project Inquiry</span>
                    <SvgArrow />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Authentic What's Next 3-Step Onboarding Process from kifaltech.com/contact-us/ */}
          <div style={{ marginTop: '40px', paddingTop: '60px', borderTop: '1px solid var(--border-subtle)' }}>
            <div className="section-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
              <div className="eyebrow" style={{ margin: '0 auto 14px auto' }}>
                <span className="pulse-indicator"></span>
                <span>PROJECT ONBOARDING</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-white)' }}>
                What’s Next?
              </h2>
              <p style={{ maxWidth: '640px', margin: '0 auto' }}>
                A structured, transparent three-step transition from your initial inquiry to active production deployment.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {(company.onboardingWorkflow || [
                { step: "01", title: "Prepare Proposal", desc: "We analyze your business goals and project requirements to create a clear, customized proposal with the right solutions, timelines, and transparent pricing—so everything is aligned from day one." },
                { step: "02", title: "Discussion", desc: "We discuss your project in detail to refine requirements, answer your questions, and finalize expectations. This step ensures clarity, smooth communication, and a strong foundation for success." },
                { step: "03", title: "Starting Work", desc: "Once everything is approved, we kickstart the project using our expertise and resources to deliver high-quality results—turning your ideas into powerful digital solutions." }
              ]).map((wf) => (
                <div
                  key={wf.step}
                  className="agency-card"
                  style={{
                    padding: '32px 28px',
                    position: 'relative',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--primary-light)',
                      marginBottom: '14px',
                      opacity: 0.85
                    }}
                  >
                    {wf.step}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '10px' }}>
                    {wf.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                    {wf.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Fix Emergency Banner */}
            <div
              className="agency-card glass-card"
              style={{
                marginTop: '40px',
                padding: '28px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
                border: '1px solid rgba(244, 63, 94, 0.3)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-rose)' }}></span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-rose)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Emergency Bug / Crash?
                  </span>
                </div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--text-white)' }}>
                  Need an Immediate Website Fix?
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                  Submit your broken URL and issue details to our rapid triage desk for immediate 2-hour response.
                </p>
              </div>

              <Link
                to="/quick-fix"
                className="btn btn-secondary"
                style={{ borderColor: 'var(--accent-rose)', color: 'var(--accent-rose)', padding: '12px 24px' }}
              >
                <span>Fix Your Website Issue</span>
                <SvgArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
