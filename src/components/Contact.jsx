import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';

export default function Contact() {
  const { company } = agencyData;
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Apps',
    budget: '$3k-$5k',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid work email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Please provide your project scope / message (at least 10 characters).');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 500);
  };

  return (
    <section id="contact" className="section-spacing bg-dark-slate-texture">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '56px' }}>
          {/* Left Column: Direct Agency Channels */}
          <div>
            <span className="section-tag">INITIATE CONVERSATION</span>
            <h2 style={{ fontSize: '2.6rem', marginBottom: '18px' }}>
              Let’s Build Something Remarkable Together.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '36px' }}>
              Whether you have an immediate RFP, a legacy system that needs complete modernization, or want to explore strategic engineering options, we’re ready to partner with you.
            </p>

            {/* Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              <div
                className="glass-card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}
                >
                  ✉
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${company.email}`}
                    style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600, fontSize: '1.05rem' }}
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    color: 'var(--secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}
                >
                  ☎
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Phone / Inquiries
                  </div>
                  <a
                    href={`tel:${company.phone}`}
                    style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600, fontSize: '1.05rem' }}
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--accent-emerald)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}
                >
                  📍
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Global Operations
                  </div>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.05rem' }}>
                    {company.headquarters}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Connections */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>CONNECT WITH US ON SOCIAL:</span>
              {company.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="glass-card" style={{ padding: '40px 36px' }}>
            {!sent ? (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.7rem', marginBottom: '8px', color: '#ffffff' }}>
                  Send a Direct Message
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
                  Tell us about your requirements. We respond within 24 business hours.
                </p>

                {errorMessage && (
                  <div
                    style={{
                      padding: '12px 16px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(239, 68, 68, 0.35)',
                      color: '#f87171',
                      fontSize: '0.88rem',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>⚠️</span>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Alex Taylor"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Service Required *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Web Apps">Web Apps</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Mobile">Mobile</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="UI/UX">UI/UX</option>
                      <option value="SEO">SEO</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Estimated Budget *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="$1k-$3k">$1k-$3k</option>
                      <option value="$3k-$5k">$3k-$5k</option>
                      <option value="$5k-$10k">$5k-$10k</option>
                      <option value="$10k+">$10k+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '22px' }}>
                  <label className="form-label">Message / Project Scope *</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Provide context regarding your website, software project, timeline expectations, or current bottlenecks..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-glow"
                  style={{ width: '100%', padding: '15px' }}
                >
                  {loading ? 'Submitting Inquiry...' : 'Send Inquiry to KifalTech'}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--accent-emerald)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    margin: '0 auto 20px auto'
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '10px' }}>
                  Inquiry Dispatched Successfully!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
                  Thank you for reaching out, {formData.name}. Our technical team is reviewing your requirements and will reach out to <strong style={{ color: '#ffffff' }}>{formData.email}</strong> promptly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn btn-secondary"
                  style={{ padding: '10px 24px' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
