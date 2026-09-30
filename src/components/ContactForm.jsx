import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';

export default function ContactForm() {
  const { company } = agencyData;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: 'Web Development',
    budget: '$1,000–$2,500',
    details: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [refCode, setRefCode] = useState('');

  const servicesList = [
    'Web Development',
    'WordPress Development',
    'UI/UX Design',
    'Custom Software & Web Apps',
    'Shopify & E-Commerce',
    'SEO & Search Visibility',
    'Digital Marketing & Social',
    'Website Maintenance & SLA'
  ];

  const budgetTiers = [
    'Under $500',
    '$500–$1,000',
    '$1,000–$2,500',
    '$2,500–$5,000',
    '$5,000+',
    'Custom Budget'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.details.trim()) {
      setStatus('error');
      setErrorMessage('Please complete your name, email address, and project details.');
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
    <section id="contact" className="section-spacing" style={{ backgroundColor: '#171313', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(36px, 5vw, 64px)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Communication Details */}
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
              We review every inquiry within 2 business hours. Share your goals, technical constraints, or timeline, and we’ll prepare a transparent, structured scope proposal.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              <div style={{ padding: '18px 22px', backgroundColor: '#1e1818', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  DIRECT INQUIRY EMAIL
                </div>
                <a href={`mailto:${company.email}`} style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>
                  {company.email}
                </a>
              </div>

              <div style={{ padding: '18px 22px', backgroundColor: '#1e1818', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  INTERNATIONAL DIRECT LINE
                </div>
                <a href={`tel:${company.inquiryPhone}`} style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>
                  {company.inquiryPhone}
                </a>
              </div>

              <div style={{ padding: '16px 22px', backgroundColor: 'rgba(41, 217, 197, 0.05)', border: '1px solid rgba(41, 217, 197, 0.2)', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span>
                  <span><strong>SLA Guarantee:</strong> Response within 2 business hours for international inquiries.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Structured Form */}
          <div
            style={{
              padding: 'clamp(28px, 4vw, 40px)',
              backgroundColor: '#1d1717',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(41, 217, 197, 0.15)',
                    border: '1px solid var(--primary)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                    fontSize: '1.4rem'
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '10px' }}>Inquiry Received</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 20px auto' }}>
                  Thank you, <strong>{formData.fullName}</strong>. Your project scope reference is <strong>{refCode}</strong>. A senior engineer will review your specifications and contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ fullName: '', email: '', company: '', service: 'Web Development', budget: '$1,000–$2,500', details: '' });
                  }}
                  className="btn btn-secondary"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {status === 'error' && (
                  <div style={{ padding: '12px 16px', backgroundColor: 'rgba(235, 87, 87, 0.12)', border: '1px solid #eb5757', borderRadius: '4px', color: '#ff8080', fontSize: '0.88rem' }}>
                    {errorMessage}
                  </div>
                )}

                {/* Name & Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alexander Vance"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Company & Service Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label className="form-label">Company / Brand</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Vance Media Ltd."
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Primary Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget Selection (Section 25) */}
                <div>
                  <label className="form-label">Estimated Budget (USD)</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {budgetTiers.map((tier) => (
                      <option key={tier} value={tier}>{tier}</option>
                    ))}
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label className="form-label">Tell us about your project *</label>
                  <textarea
                    name="details"
                    required
                    value={formData.details}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe your project requirements, goals, target audience, and preferred launch timeline..."
                    className="form-textarea"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary"
                  style={{ height: '48px', fontSize: '0.94rem', width: '100%', marginTop: '6px' }}
                >
                  <span>{status === 'loading' ? 'Preparing Submission...' : 'Request a Free Quote'}</span>
                  <SvgArrow />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
