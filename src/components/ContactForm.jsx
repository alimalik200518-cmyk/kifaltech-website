import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';

export default function ContactForm() {
  const { company } = agencyData;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: 'Web Apps',
    budget: '$3k-$5k',
    details: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [refCode, setRefCode] = useState('');

  const servicesList = [
    'Web Apps',
    'Shopify / E-Com',
    'Mobile Apps',
    'AI & Automation',
    'UI/UX Architecture',
    'Technical SEO'
  ];

  const budgetTiers = [
    '$1k – $3k',
    '$3k – $5k',
    '$5k – $10k',
    '$10k+'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSelectService = (svc) => {
    setFormData((prev) => ({ ...prev, service: svc }));
  };

  const handleSelectBudget = (b) => {
    setFormData((prev) => ({ ...prev, budget: b }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.details.trim()) {
      setStatus('error');
      setErrorMessage('Please complete your full name, business email, and project scope.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid business email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const generatedRef = `KT-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(generatedRef);

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_inquiries') || '[]');
      existing.unshift({
        id: generatedRef,
        destination: 'forms@kifaltech.com',
        timestamp: new Date().toISOString(),
        ...formData
      });
      localStorage.setItem('kifaltech_inquiries', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setTimeout(() => {
      setStatus('success');
    }, 700);
  };

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section id="contact" className="section-spacing" style={{ backgroundColor: '#141010', position: 'relative', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        {/* Remote Global Agency Eyebrow Banner */}
        <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.07)', paddingBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="pulse-indicator"></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.08em', color: 'var(--primary-light)', textTransform: 'uppercase', fontWeight: 600 }}>
              100% REMOTE GLOBAL DIGITAL AGENCY
            </span>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-dim)' }}>
            DIRECT TRANSMISSION TO: <span style={{ color: '#ffffff' }}>forms@kifaltech.com</span>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(40px, 5vw, 68px)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Dual-Presence & Direct Communication */}
          <div>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              <span className="pulse-indicator"></span>
              <span>START A CONVERSATION</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
                lineHeight: 1.15,
                color: '#ffffff',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                marginBottom: '18px'
              }}
            >
              Tell us about your project.
            </h2>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '32px' }}>
              As a 100% remote global digital agency, we review every inquiry within 2 business hours. Share your goals, technical constraints, or timeline, and our engineering leads will prepare a structured, transparent scope proposal.
            </p>

            {/* Dual Location Blocks */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px', fontWeight: 600 }}>
                OUR PRESENCE • STRATEGY & ENGINEERING HUBS
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px' }}>
                {/* USA Office */}
                <div style={{ padding: '16px 18px', backgroundColor: '#1a1616', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', textTransform: 'uppercase', fontWeight: 600 }}>
                      USA OFFICE 🇺🇸
                    </span>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>EST Hub</span>
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                    Henry
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                    Head of Product & Co-Founder
                  </div>
                  <a
                    href="tel:+15551234567"
                    style={{ fontSize: '0.86rem', color: '#ffffff', fontFamily: 'var(--font-mono)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>📞</span>
                    <span>+1 (555) 123-4567</span>
                  </a>
                </div>

                {/* Pakistan Office */}
                <div style={{ padding: '16px 18px', backgroundColor: '#1a1616', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#10b981', textTransform: 'uppercase', fontWeight: 600 }}>
                      PAKISTAN OFFICE 🇵🇰
                    </span>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>PKT Hub</span>
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                    Muhammad Ali
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    Technical Lead & Co-Founder
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '6px' }}>
                    Karachi, Pakistan
                  </div>
                  <a
                    href="tel:+923176704325"
                    style={{ fontSize: '0.86rem', color: '#ffffff', fontFamily: 'var(--font-mono)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>📞</span>
                    <span>+92 317 670 4325</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email CTA */}
            <div style={{ padding: '18px 22px', backgroundColor: '#1a1616', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '6px', marginBottom: '24px' }}>
              <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 600 }}>
                PRIMARY EMAIL INQUIRIES
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <a href="mailto:info@kifaltech.com" style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>
                  info@kifaltech.com
                </a>
                <a
                  href={`https://wa.me/923176704325?text=${encodeURIComponent("Hello KifalTech, I'd like to get a quote for a new project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#10b981',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    border: '1px solid rgba(16, 185, 129, 0.25)'
                  }}
                >
                  <span>💬 WhatsApp (+92 317 670 4325)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Redesigned Minimalist Form */}
          <div
            style={{
              backgroundColor: '#1a1616',
              border: '1px solid rgba(255, 255, 255, 0.09)',
              borderRadius: '8px',
              padding: 'clamp(28px, 4vw, 40px)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                Project Discovery Brief
              </h3>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--primary-light)', background: 'rgba(124, 58, 237, 0.12)', padding: '2px 8px', borderRadius: '4px' }}>
                &lt; 2 Hr SLA
              </span>
            </div>

            {status === 'success' ? (
              <div className="transmission-success-card">
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.4rem' }}>
                  ✓
                </div>
                <h4 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '10px' }}>
                  Transmission received.
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '20px' }}>
                  Transmission received. We'll be in touch within 2 business hours.
                </p>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '20px' }}>
                  Inquiry Ticket: <strong style={{ color: 'var(--primary-light)' }}>{refCode}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ fullName: '', email: '', company: '', service: 'Web Apps', budget: '$3k-$5k', details: '' });
                  }}
                  className="btn btn-secondary"
                  style={{ padding: '8px 20px', fontSize: '0.84rem' }}
                >
                  Submit Another Scope
                </button>
              </div>
            ) : (
              <form
                action="mailto:forms@kifaltech.com"
                method="POST"
                onSubmit={handleSubmit}
                noValidate
                className="agency-form"
              >
                <div className="agency-form-grid">
                  {/* Full Name */}
                  <div className="field-group col-span-6">
                    <div className="field-underline-wrapper">
                      <input
                        id="contact-fullName"
                        type="text"
                        name="fullName"
                        required
                        placeholder="Full Name"
                        className={`agency-input-minimal ${formData.fullName ? 'field-has-value' : ''}`}
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      <label htmlFor="contact-fullName" className="floating-label">
                        <span>Full Name</span>
                        <span className="required-asterisk">*</span>
                      </label>
                      <div className="field-underline-bar" />
                    </div>
                  </div>

                  {/* Work Email */}
                  <div className="field-group col-span-6">
                    <div className="field-underline-wrapper">
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        placeholder="Work Email"
                        className={`agency-input-minimal ${formData.email ? 'field-has-value' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label htmlFor="contact-email" className="floating-label">
                        <span>Work Email</span>
                        <span className="required-asterisk">*</span>
                      </label>
                      <div className="field-underline-bar" />
                    </div>
                  </div>

                  {/* Company / Brand Name */}
                  <div className="field-group col-span-12">
                    <div className="field-underline-wrapper">
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        placeholder="Company or Organization"
                        className={`agency-input-minimal ${formData.company ? 'field-has-value' : ''}`}
                        value={formData.company}
                        onChange={handleChange}
                      />
                      <label htmlFor="contact-company" className="floating-label">
                        <span>Company or Brand (Optional)</span>
                      </label>
                      <div className="field-underline-bar" />
                    </div>
                  </div>

                  {/* Service Pillar Selection */}
                  <div className="field-group col-span-12">
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Primary Requirement <span className="required-asterisk">*</span>
                    </label>
                    <div className="pill-selector-group">
                      {servicesList.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleSelectService(svc)}
                          className={`pill-option-btn ${formData.service === svc ? 'selected' : ''}`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Bracket */}
                  <div className="field-group col-span-12">
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Estimated Budget <span className="required-asterisk">*</span>
                    </label>
                    <div className="pill-selector-group">
                      {budgetTiers.map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => handleSelectBudget(tier)}
                          className={`pill-option-btn ${formData.budget === tier ? 'selected' : ''}`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="field-group col-span-12">
                    <div className="field-underline-wrapper">
                      <textarea
                        id="contact-details"
                        name="details"
                        rows="3"
                        required
                        placeholder="Project Scope & Goals"
                        className={`agency-textarea-minimal ${formData.details ? 'field-has-value' : ''}`}
                        value={formData.details}
                        onChange={handleChange}
                      />
                      <label htmlFor="contact-details" className="floating-label">
                        <span>Project Scope, Tech Constraints & Objectives</span>
                        <span className="required-asterisk">*</span>
                      </label>
                      <div className="field-underline-bar" />
                    </div>
                  </div>
                </div>

                {errorMessage && (
                  <div style={{ marginTop: '16px', padding: '10px 14px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '4px', color: '#f87171', fontSize: '0.84rem' }}>
                    {errorMessage}
                  </div>
                )}

                <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    Endpoints strictly dispatched to: <strong>forms@kifaltech.com</strong>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn-primary"
                    style={{ padding: '0 28px', height: '46px' }}
                  >
                    <span>{status === 'loading' ? 'Encrypting & Transmitting...' : 'Send Transmission'}</span>
                    <SvgArrow />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
