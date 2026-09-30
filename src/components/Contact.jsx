import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';

export default function Contact() {
  const { company } = agencyData;
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full-Stack Web Development',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-spacing">
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>CONNECT:</span>
              {['LinkedIn', 'Twitter / X', 'GitHub', 'Instagram', 'YouTube'].map((net) => (
                <a
                  key={net}
                  href="#"
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
                  {net}
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
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '28px' }}>
                  Tell us about your requirements. We respond within 24 business hours.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
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
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@brand.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Primary Service Area</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                      <option value="E-Commerce & Shopify Plus">E-Commerce & Shopify Plus</option>
                      <option value="Custom Web Applications">Custom Web Applications</option>
                      <option value="UI/UX & Product Design">UI/UX & Product Design</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="SEO & Search Engine Growth">SEO & Search Engine Growth</option>
                      <option value="Google Ads (PPC) Management">Google Ads (PPC) Management</option>
                      <option value="Branding & Creative Identity">Branding & Creative Identity</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Project Overview & Target Goals *</label>
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
                  className="btn btn-primary btn-glow"
                  style={{ width: '100%', padding: '15px' }}
                >
                  Send Inquiry to Kifal Tech
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
