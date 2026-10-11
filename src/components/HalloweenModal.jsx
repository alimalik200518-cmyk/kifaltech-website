import React, { useState, useEffect } from 'react';
import HalloweenCountdown from './HalloweenCountdown.jsx';
import { HALLOWEEN_CONFIG } from '../config/halloweenConfig.js';

export default function HalloweenModal({
  isOpen,
  onClose,
  onOpenProposal
}) {
  const { promoCode, targetDate, modal } = HALLOWEEN_CONFIG;

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: 'Web Development',
    notes: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [referenceId, setReferenceId] = useState('');

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMsg('Please enter your full name and work email.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const refId = 'KT-HAL-' + Math.floor(100000 + Math.random() * 900000);
    const newProposal = {
      id: refId,
      campaign: 'Halloween 2026 Seasonal Sprint',
      promoCode: promoCode,
      destination: 'forms@kifaltech.com',
      timestamp: new Date().toISOString(),
      fullName: formData.fullName,
      email: formData.email,
      service: formData.service,
      notes: formData.notes,
      perk: 'Complimentary Core Web Vitals & Security Audit + Priority Q4 Slot'
    };

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_proposals') || '[]');
      existing.unshift(newProposal);
      localStorage.setItem('kifaltech_proposals', JSON.stringify(existing.slice(0, 50)));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setTimeout(() => {
      setReferenceId(refId);
      setStatus('success');
      // Mark as engaged so modal doesn't pop up again
      sessionStorage.setItem('kifaltech_halloween_dismissed_2026', 'true');
    }, 700);
  };

  const handleOpenFullProposal = () => {
    onClose();
    if (onOpenProposal) {
      onOpenProposal({
        title: 'Halloween 2026 Seasonal Sprint',
        name: `Halloween Sprint Reservation (Code: ${promoCode})`,
        category: formData.service || 'Web Apps',
        details: `Halloween 2026 campaign reservation with code ${promoCode}. Includes complimentary Core Web Vitals audit & priority sprint scheduling.`
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="halloween-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="halloween-modal-title"
    >
      <div className="halloween-modal-container">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="halloween-modal-close"
          title="Close dialog"
          aria-label="Close Halloween offer dialog"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Ambient Top Glow / Art */}
        <div className="halloween-modal-glow-bar"></div>

        {status === 'success' ? (
          <div className="halloween-modal-success">
            <div className="halloween-modal-success-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <span className="halloween-modal-success-badge">Q4 SPRINT RESERVED</span>
            <h3>Halloween Sprint Perk Claimed!</h3>
            <p>
              Your reservation reference is <strong style={{ color: 'var(--halloween-orange, #ff6b2b)' }}>{referenceId}</strong>. A confirmation and discovery briefing request has been registered for <strong>{formData.email}</strong>.
            </p>
            <div className="halloween-modal-success-details">
              <div className="detail-row">
                <span>Applied Campaign:</span>
                <strong>Halloween 2026 Exclusive</strong>
              </div>
              <div className="detail-row">
                <span>Promo Code:</span>
                <strong style={{ color: 'var(--halloween-orange, #ff6b2b)' }}>{promoCode}</strong>
              </div>
              <div className="detail-row">
                <span>Included Perk:</span>
                <strong>Free Lighthouse 95+ Audit &amp; OWASP Check</strong>
              </div>
              <div className="detail-row">
                <span>Founder Review:</span>
                <strong>Ali Muhammad &amp; Henry (Within 2 Hours)</strong>
              </div>
            </div>
            <button
              onClick={onClose}
              className="halloween-modal-btn halloween-modal-btn-primary"
              style={{ marginTop: '20px', width: '100%' }}
            >
              Done &amp; Return to Website
            </button>
          </div>
        ) : (
          <div className="halloween-modal-body">
            {/* Header */}
            <div className="halloween-modal-header">
              <div className="halloween-modal-eyebrow">
                <span className="halloween-pulse-indicator"></span>
                <span>🎃 LIMITED-TIME Q4 SPRINT INITIATIVE</span>
              </div>
              <h2 id="halloween-modal-title" className="halloween-modal-title">
                {modal.title}
              </h2>
              <p className="halloween-modal-subtitle">
                {modal.subtitle}
              </p>
            </div>

            {/* Countdown Banner */}
            <div className="halloween-modal-countdown-wrap">
              <span className="modal-countdown-label">Offer expires October 31, 2026:</span>
              <HalloweenCountdown targetDate={targetDate} variant="card" />
            </div>

            {/* Promo Code Box */}
            <div className="halloween-modal-promo-banner">
              <div className="promo-text-wrap">
                <span className="promo-label">Exclusive Code</span>
                <span className="promo-code-val">{promoCode}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyCode}
                className="halloween-copy-btn"
                title="Copy Promo Code"
              >
                {copied ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            {errorMsg && (
              <div className="halloween-modal-error">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Fast Claim Form */}
            <form onSubmit={handleSubmit} className="halloween-modal-form">
              <div className="modal-form-grid">
                <div className="modal-form-field">
                  <label htmlFor="hal-name">Full Name *</label>
                  <input
                    id="hal-name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Miller"
                    required
                  />
                </div>
                <div className="modal-form-field">
                  <label htmlFor="hal-email">Work Email *</label>
                  <input
                    id="hal-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="modal-form-field">
                <label htmlFor="hal-service">Primary Service Interest</label>
                <select
                  id="hal-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Web Development">Web Development (React / Next.js / Full-Stack)</option>
                  <option value="Ecommerce Solution">Ecommerce Solution (Shopify / Headless)</option>
                  <option value="Web Design">Web Design &amp; UI/UX Systems</option>
                  <option value="App Development">Mobile &amp; App Development</option>
                  <option value="Code & Performance Audit">Core Web Vitals &amp; Security Audit</option>
                </select>
              </div>

              <div className="modal-form-field">
                <label htmlFor="hal-notes">Project Vision / Target Launch Date</label>
                <input
                  id="hal-notes"
                  type="text"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Need Q4 e-commerce launch or web app overhaul"
                />
              </div>

              <div className="modal-actions-wrap">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="halloween-modal-btn halloween-modal-btn-primary"
                >
                  {status === 'loading' ? (
                    <span>Registering Reservation...</span>
                  ) : (
                    <>
                      <span>Lock In Halloween Perk</span>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10M9 4l4 4-4 4"/>
                      </svg>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleOpenFullProposal}
                  className="halloween-modal-btn halloween-modal-btn-secondary"
                >
                  Configure Full Scope &amp; Budget
                </button>
              </div>
            </form>

            <div className="halloween-modal-footer">
              <span>Direct communication with founders Ali Muhammad &amp; Henry • 2-hour response guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
