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
    budget: '$3k – $5k',
    timeline: 'Standard (2 – 4 Weeks)',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Contact", url: "https://kifaltech.com/contact" }
  ];

  const servicesList = [
    'Web Development',
    'Custom Software & Web Apps',
    'Shopify E-Commerce',
    'UI/UX Design Systems',
    'Mobile Application',
    'Technical SEO & Core Web Vitals'
  ];

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Business email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address (e.g. name@company.com).';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please provide a brief description of your project.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Please enter at least 10 characters describing your project goals.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const refCode = `KT-REC-${Math.floor(100000 + Math.random() * 900000)}`;

    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('kifaltech_messages') || '[]');
        existing.unshift({
          id: refCode,
          destination: 'forms@kifaltech.com',
          timestamp: new Date().toISOString(),
          ...formData
        });
        localStorage.setItem('kifaltech_messages', JSON.stringify(existing.slice(0, 50)));
      } catch (err) {
        console.warn('Could not persist message to localStorage:', err);
      }

      setInquiryRef(refCode);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const copyRefCode = () => {
    if (inquiryRef && navigator.clipboard) {
      navigator.clipboard.writeText(inquiryRef);
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
    <div className="bg-dark-slate-texture" style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title="Contact KifalTech | 100% Remote Global Digital Agency"
        description="Schedule a technical consultation with KifalTech's founders. Direct dual-presence operations in North America (+1 555-123-4567) and Pakistan (+92 317 670 4325)."
        canonical="https://kifaltech.com/contact"
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Contact</span>
          </nav>

          {/* Remote Agency Headline Pill */}
          <div style={{ marginBottom: '32px' }}>
            <span className="eyebrow">
              <span className="pulse-indicator"></span>
              <span>100% REMOTE GLOBAL DIGITAL AGENCY</span>
            </span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', marginBottom: '16px', lineHeight: 1.15 }}>
              Let's Engineer Something Exceptional.
            </h1>
            <p style={{ fontSize: '1.14rem', lineHeight: 1.72, color: 'var(--text-muted)', maxWidth: '780px' }}>
              We operate as a 100% remote global digital agency, bridging strategic product leadership in North America with senior full-stack engineering in Karachi, Pakistan. Zero account managers, direct founder access.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '48px', alignItems: 'flex-start', marginBottom: '80px' }}>
            {/* Left Column: Dual Presence & Channels */}
            <div>
              {/* Dual Presence Blocks */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', fontWeight: 600 }}>
                  OUR PRESENCE • NORTH AMERICA & SOUTH ASIA
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* USA Office */}
                  <div className="agency-card" style={{ padding: '22px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--primary-light)', textTransform: 'uppercase', fontWeight: 600 }}>
                        USA OPERATIONS 🇺🇸
                      </span>
                      <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', background: 'rgba(255, 255, 255, 0.05)', padding: '2px 8px', borderRadius: '4px' }}>
                        9:00 AM – 6:00 PM EST
                      </span>
                    </div>
                    <div style={{ fontSize: '1.12rem', fontWeight: 700, color: 'var(--text-white)' }}>
                      Henry
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                      Head of Product & Co-Founder
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '8px', lineHeight: 1.5 }}>
                      Focus: Product Strategy, UX Architecture & Commercial Scoping
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '10px', marginTop: '10px' }}>
                      <a href="tel:+15551234567" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92rem', color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>
                        📞 +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  {/* Pakistan Office */}
                  <div className="agency-card" style={{ padding: '22px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#10b981', textTransform: 'uppercase', fontWeight: 600 }}>
                        PAKISTAN OFFICE 🇵🇰
                      </span>
                      <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', background: 'rgba(255, 255, 255, 0.05)', padding: '2px 8px', borderRadius: '4px' }}>
                        9:00 AM – 7:00 PM PKT
                      </span>
                    </div>
                    <div style={{ fontSize: '1.12rem', fontWeight: 700, color: 'var(--text-white)' }}>
                      Muhammad Ali
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                      Technical Lead & Co-Founder
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '8px' }}>
                      Location: <strong>Karachi, Pakistan</strong> (Core Engineering Hub)
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '10px', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                      <a href="tel:+923176704325" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92rem', color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>
                        📞 +92 317 670 4325
                      </a>
                      <a
                        href={`https://wa.me/923176704325?text=${encodeURIComponent("Hello Muhammad Ali, I'd like to discuss a project with KifalTech.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#10b981', fontSize: '0.78rem', textDecoration: 'none', fontWeight: 600, background: 'rgba(16, 185, 129, 0.1)', padding: '3px 8px', borderRadius: '4px' }}
                      >
                        💬 WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Email Channel */}
              <div className="agency-card" style={{ padding: '22px', marginBottom: '24px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--primary-light)', textTransform: 'uppercase', fontWeight: 600 }}>
                  PRIMARY INQUIRY EMAIL
                </span>
                <div style={{ marginTop: '8px' }}>
                  <a href="mailto:info@kifaltech.com" style={{ display: 'block', fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-light)', textDecoration: 'none' }}>
                    info@kifaltech.com
                  </a>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                    Direct engineering review & NDA available upon request.
                  </span>
                </div>
              </div>

              {/* Operational SLA Card */}
              <div className="agency-card" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                  <span>●</span>
                  <span>Guaranteed SLA Response &lt; 2 Hours</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                  Our dual-presence coverage across EST and PKT ensures that international client inquiries receive synchronous attention across the entire business day.
                </p>
              </div>
            </div>

            {/* Right Column: Redesigned Minimalist Form with Floating Labels & Bottom Borders */}
            <div className="agency-card" style={{ padding: 'clamp(28px, 4vw, 42px)', border: '1px solid rgba(255, 255, 255, 0.15)', background: '#0E0E0E', borderRadius: '0px' }}>
              <div style={{ marginBottom: '28px' }}>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '6px', color: 'var(--text-white)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                  Send a Detailed Scope Transmission
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#888888', margin: 0 }}>
                  Forms strictly processed through <code style={{ color: '#D32525', background: 'rgba(211, 37, 37, 0.12)', border: '1px solid #D32525', padding: '2px 6px', fontFamily: 'var(--font-mono)' }}>forms@kifaltech.com</code>
                </p>
              </div>

              {submitted ? (
                <div className="transmission-success-card">
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.6rem' }}>
                    ✓
                  </div>
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '10px' }}>
                    Transmission received.
                  </h4>
                  <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '20px' }}>
                    Transmission received. We'll be in touch within 2 business hours.
                  </p>

                  {inquiryRef && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-medium)', padding: '10px 18px', borderRadius: 'var(--radius-sm)', marginBottom: '24px' }}>
                      <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Ticket ID:</span>
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
                        setFormData({ name: '', email: '', company: '', service: 'Web Development', budget: '$3k – $5k', timeline: 'Standard (2 – 4 Weeks)', message: '' });
                      }}
                      className="btn btn-secondary"
                      style={{ padding: '8px 24px', fontSize: '0.88rem' }}
                    >
                      Submit Another Scope
                    </button>
                  </div>
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
                          id="contact-page-name"
                          type="text"
                          required
                          placeholder="Full Name"
                          className={`agency-input-minimal ${formData.name ? 'field-has-value' : ''}`}
                          style={formErrors.name ? { borderBottomColor: '#ef4444' } : {}}
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                        />
                        <label htmlFor="contact-page-name" className="floating-label">
                          <span>Full Name</span>
                          <span className="required-asterisk">*</span>
                        </label>
                        <div className="field-underline-bar" />
                      </div>
                      {formErrors.name && (
                        <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '4px' }}>{formErrors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="field-group col-span-6">
                      <div className="field-underline-wrapper">
                        <input
                          id="contact-page-email"
                          type="email"
                          required
                          placeholder="Business Email"
                          className={`agency-input-minimal ${formData.email ? 'field-has-value' : ''}`}
                          style={formErrors.email ? { borderBottomColor: '#ef4444' } : {}}
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                        <label htmlFor="contact-page-email" className="floating-label">
                          <span>Work Email</span>
                          <span className="required-asterisk">*</span>
                        </label>
                        <div className="field-underline-bar" />
                      </div>
                      {formErrors.email && (
                        <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '4px' }}>{formErrors.email}</span>
                      )}
                    </div>

                    {/* Company */}
                    <div className="field-group col-span-12">
                      <div className="field-underline-wrapper">
                        <input
                          id="contact-page-company"
                          type="text"
                          placeholder="Company or Brand"
                          className={`agency-input-minimal ${formData.company ? 'field-has-value' : ''}`}
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                        />
                        <label htmlFor="contact-page-company" className="floating-label">
                          <span>Company Name / Website (Optional)</span>
                        </label>
                        <div className="field-underline-bar" />
                      </div>
                    </div>

                    {/* Service Selection with Custom Dropdown Arrow */}
                    <div className="field-group col-span-6">
                      <div className="select-wrapper">
                        <select
                          id="contact-page-service"
                          className="agency-select-minimal"
                          value={formData.service}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                        >
                          {servicesList.map((svc) => (
                            <option key={svc} value={svc}>{svc}</option>
                          ))}
                        </select>
                        <label htmlFor="contact-page-service" className="floating-label" style={{ top: '-8px', fontSize: '0.7rem', color: 'var(--primary-light)', textTransform: 'uppercase' }}>
                          <span>Target Discipline</span>
                          <span className="required-asterisk">*</span>
                        </label>
                        <svg className="select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <div className="field-underline-bar" />
                      </div>
                    </div>

                    {/* Estimated Budget with Custom Dropdown Arrow */}
                    <div className="field-group col-span-6">
                      <div className="select-wrapper">
                        <select
                          id="contact-page-budget"
                          className="agency-select-minimal"
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                        >
                          <option value="$1k – $3k">$1,000 – $3,000 (MVP / Audit)</option>
                          <option value="$3k – $5k">$3,000 – $5,000 (Custom Build)</option>
                          <option value="$5k – $10k">$5,000 – $10,000 (Advanced Platform)</option>
                          <option value="$10k+">$10,000+ (Enterprise Scope)</option>
                        </select>
                        <label htmlFor="contact-page-budget" className="floating-label" style={{ top: '-8px', fontSize: '0.7rem', color: 'var(--primary-light)', textTransform: 'uppercase' }}>
                          <span>Budget Allocation</span>
                          <span className="required-asterisk">*</span>
                        </label>
                        <svg className="select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <div className="field-underline-bar" />
                      </div>
                    </div>

                    {/* Message / Brief */}
                    <div className="field-group col-span-12">
                      <div className="field-underline-wrapper">
                        <textarea
                          id="contact-page-message"
                          rows="4"
                          required
                          placeholder="Project Scope"
                          className={`agency-textarea-minimal ${formData.message ? 'field-has-value' : ''}`}
                          style={formErrors.message ? { borderBottomColor: '#ef4444' } : {}}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                        />
                        <label htmlFor="contact-page-message" className="floating-label">
                          <span>Brief Description of Requirements & Key Deliverables</span>
                          <span className="required-asterisk">*</span>
                        </label>
                        <div className="field-underline-bar" />
                      </div>
                      {formErrors.message && (
                        <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '4px' }}>{formErrors.message}</span>
                      )}
                    </div>
                  </div>

                  <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      Transmission Endpoint: <span style={{ color: '#ffffff' }}>forms@kifaltech.com</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ padding: '0 32px', height: '48px', fontSize: '0.94rem' }}
                    >
                      <span>{isSubmitting ? 'Transmitting Scope...' : 'Submit Inquiry'}</span>
                      <SvgArrow />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
