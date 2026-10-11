import React, { useState, useEffect } from 'react';
import { agencyData } from '../data/agencyData.js';

export default function ProposalModal({ isOpen, onClose, prefillData }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Web Apps',
    budget: '$3k-$5k',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [submittedRefId, setSubmittedRefId] = useState('');
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefillData) {
      let mappedService = 'Web Apps';
      const cat = (prefillData.category || prefillData.title || '').toLowerCase();
      if (cat.includes('mobile') || cat.includes('app')) {
        mappedService = 'Mobile';
      } else if (cat.includes('commerce') || cat.includes('shopify') || cat.includes('store')) {
        mappedService = 'E-Commerce';
      } else if (cat.includes('ai') || cat.includes('automation') || cat.includes('agent')) {
        mappedService = 'AI Automation';
      } else if (cat.includes('ui') || cat.includes('ux') || cat.includes('design')) {
        mappedService = 'UI/UX';
      } else if (cat.includes('seo') || cat.includes('marketing')) {
        mappedService = 'SEO';
      } else if (cat.includes('web')) {
        mappedService = 'Web Apps';
      }

      let mappedBudget = '$3k-$5k';
      const rawPrice = prefillData.originalUsd || (typeof prefillData.price === 'number' ? prefillData.price : parseInt(String(prefillData.price || '').replace(/[^0-9]/g, '')) || 0);
      if (rawPrice > 0) {
        if (rawPrice < 3000) mappedBudget = '$1k-$3k';
        else if (rawPrice <= 5000) mappedBudget = '$3k-$5k';
        else if (rawPrice <= 10000) mappedBudget = '$5k-$10k';
        else mappedBudget = '$10k+';
      }

      setFormData((prev) => ({
        ...prev,
        service: mappedService,
        budget: mappedBudget,
        message: prefillData.name ? `Inquiry for ${prefillData.name} package. ${prev.message || ''}`.trim() : (prefillData.details || prev.message)
      }));
    }
  }, [prefillData]);

  // Keyboard close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete your Full Name, Work Email, and Message / Project Scope.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMsg('Please provide a valid business email address.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const refId = 'KT-REQ-' + Math.floor(100000 + Math.random() * 900000);
    const newProposal = {
      id: refId,
      destination: 'forms@kifaltech.com',
      timestamp: new Date().toISOString(),
      ...formData
    };

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_proposals') || '[]');
      existing.unshift(newProposal);
      localStorage.setItem('kifaltech_proposals', JSON.stringify(existing.slice(0, 50)));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setSubmittedRefId(refId);
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleCopyRef = () => {
    if (submittedRefId && navigator.clipboard) {
      navigator.clipboard.writeText(submittedRefId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClose = () => {
    setFormData({ fullName: '', email: '', phone: '', service: 'Web Apps', budget: '$3k-$5k', message: '' });
    setStatus('idle');
    setSubmittedRefId('');
    setCopied(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-body"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '640px',
          padding: '36px 32px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#151111',
          border: '1px solid rgba(139, 92, 246, 0.25)',
          borderRadius: '12px'
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-dim)',
            fontSize: '1.25rem',
            cursor: 'pointer',
            padding: '4px'
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {status !== 'success' ? (
          <div>
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="eyebrow" style={{ marginBottom: 0, fontSize: '0.72rem' }}>
                  PROPOSAL DISCOVERY
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-dim)' }}>
                  DESTINATION: <strong style={{ color: 'var(--primary-light)' }}>forms@kifaltech.com</strong>
                </span>
              </div>
              <h3 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '6px' }}>
                Request Engineering Proposal
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Direct consultation with our technical leads. Transparent milestone budgets and zero vendor lock-in.
              </p>
            </div>

            {errorMsg && (
              <div style={{ padding: '10px 14px', backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', borderRadius: '4px', color: '#fca5a5', fontSize: '0.84rem', marginBottom: '18px' }}>
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="agency-form">
              <div className="agency-form-grid" style={{ marginBottom: '20px' }}>
                {/* Full Name */}
                <div className="agency-form-col-6">
                  <div className="agency-field-group">
                    <label className="floating-label active">
                      Full Name <span className="required-asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="agency-input-minimal"
                    />
                    <div className="field-underline-bar" />
                  </div>
                </div>

                {/* Work Email */}
                <div className="agency-form-col-6">
                  <div className="agency-field-group">
                    <label className="floating-label active">
                      Work Email <span className="required-asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="agency-input-minimal"
                    />
                    <div className="field-underline-bar" />
                  </div>
                </div>

                {/* Service Required */}
                <div className="agency-form-col-6">
                  <div className="agency-field-group">
                    <label className="floating-label active">
                      Service Domain <span className="required-asterisk">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="agency-select-minimal"
                    >
                      <option value="Web Apps">Web Apps</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Mobile">Mobile Apps</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="UI/UX">UI/UX Design</option>
                      <option value="SEO">Technical SEO</option>
                    </select>
                  </div>
                </div>

                {/* Estimated Budget */}
                <div className="agency-form-col-6">
                  <div className="agency-field-group">
                    <label className="floating-label active">
                      Estimated Budget <span className="required-asterisk">*</span>
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="agency-select-minimal"
                    >
                      <option value="$1k-$3k">$1k – $3k</option>
                      <option value="$3k-$5k">$3k – $5k</option>
                      <option value="$5k-$10k">$5k – $10k</option>
                      <option value="$10k+">$10k+</option>
                    </select>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="agency-form-col-12">
                  <div className="agency-field-group">
                    <label className="floating-label active">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 123-4567 or WhatsApp"
                      value={formData.phone}
                      onChange={handleChange}
                      className="agency-input-minimal"
                    />
                    <div className="field-underline-bar" />
                  </div>
                </div>

                {/* Message / Project Scope */}
                <div className="agency-form-col-12">
                  <div className="agency-field-group">
                    <label className="floating-label active">
                      Project Scope &amp; Deliverables <span className="required-asterisk">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="3"
                      placeholder="Describe target features, user stories, timeline requirements, or existing links..."
                      value={formData.message}
                      onChange={handleChange}
                      className="agency-textarea-minimal"
                    />
                    <div className="field-underline-bar" />
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  SUBMISSION DESTINATION: forms@kifaltech.com
                </span>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary"
                  style={{ padding: '12px 28px', fontSize: '0.92rem' }}
                >
                  {status === 'loading' ? 'Transmitting Scope...' : 'Transmit Proposal Request'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="transmission-success-card" style={{ padding: '36px 20px', textAlign: 'center' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                fontSize: '1.6rem',
                color: 'var(--accent-emerald)'
              }}
            >
              ✓
            </div>
            <h4 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '8px' }}>
              Transmission received. We'll be in touch within 2 business hours.
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px auto' }}>
              Thank you, <strong>{formData.fullName}</strong>. Your project inquiry has been logged and routed to our technical leadership at forms@kifaltech.com.
            </p>

            {/* Reference ID Card */}
            <div
              style={{
                padding: '14px 18px',
                borderRadius: 'var(--radius-xs)',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                marginBottom: '24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                TICKET REF:
              </span>
              <strong style={{ fontSize: '1.05rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)' }}>
                {submittedRefId}
              </strong>
              <button
                onClick={handleCopyRef}
                className="btn"
                style={{ padding: '4px 10px', fontSize: '0.74rem', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.12)', color: '#ffffff' }}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <div>
              <button onClick={handleClose} className="btn btn-primary" style={{ padding: '10px 26px', fontSize: '0.88rem' }}>
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
