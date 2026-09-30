import React, { useState, useEffect } from 'react';
import { agencyData } from '../data/agencyData.js';

export default function ProposalModal({ isOpen, onClose, prefillData }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceOrPlan: '',
    details: ''
  });
  const [status, setStatus] = useState('idle');
  const [submittedRefId, setSubmittedRefId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefillData) {
      if (prefillData.name && prefillData.price) {
        setFormData((prev) => ({
          ...prev,
          serviceOrPlan: `${prefillData.category ? prefillData.category + ' - ' : ''}${prefillData.name} (${prefillData.price})`,
          details: prefillData.details || prev.details
        }));
      } else if (prefillData.title) {
        setFormData((prev) => ({
          ...prev,
          serviceOrPlan: prefillData.title,
          details: prefillData.details || prev.details
        }));
      }
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    const refId = 'KT-REQ-' + Math.floor(100000 + Math.random() * 900000);
    const newProposal = {
      id: refId,
      timestamp: new Date().toISOString(),
      ...formData
    };

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_proposals') || '[]');
      existing.unshift(newProposal);
      localStorage.setItem('kifaltech_proposals', JSON.stringify(existing.slice(0, 50)));
    } catch (err) {
      // safe fallback
    }

    setSubmittedRefId(refId);
    setTimeout(() => {
      setStatus('success');
    }, 500);
  };

  const handleCopyRef = () => {
    if (submittedRefId && navigator.clipboard) {
      navigator.clipboard.writeText(submittedRefId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClose = () => {
    setFormData({ fullName: '', email: '', phone: '', serviceOrPlan: '', details: '' });
    setStatus('idle');
    setSubmittedRefId('');
    setCopied(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-dim)',
            fontSize: '1.3rem',
            cursor: 'pointer',
            padding: '4px'
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {status !== 'success' ? (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span className="eyebrow" style={{ marginBottom: '10px' }}>
                GET A FREE QUOTE
              </span>
              <h3 style={{ fontSize: '2rem', color: 'var(--text-white)', marginBottom: '8px' }}>
                Start Your Project with KifalTech
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)' }}>
                Tell us about your requirements and we will review your project goals with clear scope, transparent pricing, and next steps within 12 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (000) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Service or Package</label>
                  <input
                    type="text"
                    name="serviceOrPlan"
                    placeholder="e.g. Web Development or Standard Plan"
                    value={formData.serviceOrPlan}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label className="form-label">Project Details & Requirements</label>
                <textarea
                  name="details"
                  rows="3"
                  placeholder="Describe your project, timeline, or current goals..."
                  value={formData.details}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary btn-glow"
                style={{ width: '100%', padding: '14px', fontSize: '0.96rem' }}
              >
                {status === 'loading' ? 'Submitting Quote Request...' : 'REQUEST FREE QUOTE'}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '32px 12px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}
            >
              <svg width="26" height="26" viewBox="0 0 16 16" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8.5l3.5 3.5 6.5-7"/>
              </svg>
            </div>
            <h4 style={{ fontSize: '1.8rem', color: 'var(--text-white)', marginBottom: '8px' }}>
              Quote Request Confirmed
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Thank you, <strong style={{ color: 'var(--text-white)' }}>{formData.fullName}</strong>. We have received your project details and will prepare a tailored proposal for <strong style={{ color: 'var(--primary-light)' }}>{formData.email}</strong> within 12 business hours.
            </p>

            {/* Reference ID Card */}
            <div
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  YOUR INQUIRY TRACKING ID
                </div>
                <div style={{ fontSize: '1.15rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--primary-light)' }}>
                  {submittedRefId}
                </div>
              </div>

              <button
                onClick={handleCopyRef}
                className="btn btn-secondary"
                style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              >
                {copied ? '✔ Copied!' : 'Copy Reference'}
              </button>
            </div>

            <button onClick={handleClose} className="btn btn-primary" style={{ padding: '10px 26px' }}>
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
