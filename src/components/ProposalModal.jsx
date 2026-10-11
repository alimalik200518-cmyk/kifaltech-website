import React, { useState, useEffect } from 'react';
import { agencyData } from '../data/agencyData.js';
import CustomSelect from './CustomSelect.jsx';

const SERVICE_OPTIONS = [
  { value: 'Web Apps', label: 'Web Apps & SaaS' },
  { value: 'E-Commerce', label: 'E-Commerce Architecture' },
  { value: 'Mobile', label: 'Mobile Applications' },
  { value: 'AI Automation', label: 'AI & Workflow Automation' },
  { value: 'UI/UX', label: 'UI/UX Design Systems' },
  { value: 'SEO', label: 'Technical SEO & Performance' }
];

const BUDGET_OPTIONS = [
  { value: '$1k-$3k', label: '$1,000 – $3,000 (MVP / Audit)' },
  { value: '$3k-$5k', label: '$3,000 – $5,000 (Custom Build)' },
  { value: '$5k-$10k', label: '$5,000 – $10,000 (Advanced Platform)' },
  { value: '$10k+', label: '$10,000+ (Enterprise Scope)' }
];

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
          maxWidth: '720px',
          width: '92%',
          padding: '38px 36px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0E0E0E',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          borderRadius: '0px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.95)'
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
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#00D8FF', fontWeight: 700, letterSpacing: '0.08em' }}>
                  2-HOUR RESPONSE SLA
                </span>
              </div>
              <h3 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '6px', letterSpacing: '-0.025em' }}>
                Request Engineering Proposal
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Direct consultation with our technical leads. Transparent milestone budgets and zero vendor lock-in.
              </p>
            </div>

            {errorMsg && (
              <div style={{ padding: '10px 14px', backgroundColor: 'rgba(0, 216, 255, 0.15)', border: '1px solid #00D8FF', borderRadius: '0px', color: '#ff8a80', fontSize: '0.84rem', marginBottom: '18px' }}>
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="agency-form">
              <div className="agency-form-grid" style={{ marginBottom: '24px' }}>
                {/* Full Name */}
                <div className="agency-field-group col-span-6">
                  <label htmlFor="proposal-fullName" className="agency-field-label">
                    Full Name <span className="required-asterisk">*</span>
                  </label>
                  <input
                    id="proposal-fullName"
                    type="text"
                    name="fullName"
                    required
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="agency-input-minimal"
                    autoComplete="name"
                  />
                  <div className="field-underline-bar" />
                </div>

                {/* Work Email */}
                <div className="agency-field-group col-span-6">
                  <label htmlFor="proposal-email" className="agency-field-label">
                    Work Email <span className="required-asterisk">*</span>
                  </label>
                  <input
                    id="proposal-email"
                    type="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="agency-input-minimal"
                    autoComplete="email"
                  />
                  <div className="field-underline-bar" />
                </div>

                {/* Service Required */}
                <div className="agency-field-group col-span-6">
                  <label id="label-service" className="agency-field-label">
                    Service Domain <span className="required-asterisk">*</span>
                  </label>
                  <CustomSelect
                    id="proposal-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    options={SERVICE_OPTIONS}
                  />
                </div>

                {/* Estimated Budget */}
                <div className="agency-field-group col-span-6">
                  <label id="label-budget" className="agency-field-label">
                    Estimated Budget <span className="required-asterisk">*</span>
                  </label>
                  <CustomSelect
                    id="proposal-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    options={BUDGET_OPTIONS}
                  />
                </div>

                {/* Phone Number */}
                <div className="agency-field-group col-span-12">
                  <label htmlFor="proposal-phone" className="agency-field-label">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="proposal-phone"
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 123-4567 or WhatsApp"
                    value={formData.phone}
                    onChange={handleChange}
                    className="agency-input-minimal"
                    autoComplete="tel"
                  />
                  <div className="field-underline-bar" />
                </div>

                {/* Message / Project Scope */}
                <div className="agency-field-group col-span-12">
                  <label htmlFor="proposal-message" className="agency-field-label">
                    Project Scope &amp; Deliverables <span className="required-asterisk">*</span>
                  </label>
                  <textarea
                    id="proposal-message"
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

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  DIRECT CORRESPONDENCE:{' '}
                  <a
                    href="mailto:info@kifaltech.com"
                    className="email-mailto-link"
                    style={{ fontWeight: 600 }}
                  >
                    info@kifaltech.com
                  </a>
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
                borderRadius: '0px',
                backgroundColor: 'rgba(0, 216, 255, 0.15)',
                border: '1px solid #00D8FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                fontSize: '1.6rem',
                color: '#00D8FF'
              }}
            >
              ✓
            </div>
            <h4 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '10px' }}>
              Transmission successful. Our technical leads will be in touch within 2 business hours.
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px auto' }}>
              Thank you, <strong>{formData.fullName}</strong>. Your specification brief has been logged and routed directly to our engineering desk.
            </p>

            {/* Reference ID Card */}
            <div
              style={{
                padding: '14px 18px',
                borderRadius: '0px',
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                marginBottom: '24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                TICKET REF:
              </span>
              <strong style={{ fontSize: '1.05rem', fontFamily: 'var(--font-mono)', color: '#00D8FF' }}>
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
