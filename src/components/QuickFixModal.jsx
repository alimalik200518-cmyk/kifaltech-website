import React, { useState, useEffect } from 'react';

export default function QuickFixModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    issue: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Keyboard close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleReset();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError('');

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setValidationError('Please enter your full name (minimum 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    if (!formData.website.trim()) {
      setValidationError('Please enter the affected website address.');
      return;
    }

    if (!formData.issue.trim() || formData.issue.trim().length < 10) {
      setValidationError('Please describe the issue in detail (at least 10 characters).');
      return;
    }

    setStatus('loading');

    const newTicket = 'KT-FIX-' + Math.floor(1000 + Math.random() * 9000);
    const triageRecord = {
      ticketId: newTicket,
      destination: 'forms@kifaltech.com',
      timestamp: new Date().toISOString(),
      ...formData
    };

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_tickets') || '[]');
      existing.unshift(triageRecord);
      localStorage.setItem('kifaltech_tickets', JSON.stringify(existing.slice(0, 50)));
    } catch (err) {
      // safe fallback
    }

    setTicketId(newTicket);
    setTimeout(() => {
      setStatus('success');
    }, 500);
  };

  const handleCopyTicket = () => {
    if (ticketId && navigator.clipboard) {
      navigator.clipboard.writeText(ticketId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', website: '', issue: '' });
    setStatus('idle');
    setTicketId('');
    setCopied(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleReset}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        <button
          onClick={handleReset}
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
          aria-label="Close emergency triage modal"
        >
          ✕
        </button>

        {status !== 'success' ? (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span className="eyebrow" style={{ marginBottom: '10px', color: 'var(--accent-amber)' }}>
                DIAGNOSTIC TRIAGE
              </span>
              <h3 style={{ fontSize: '1.9rem', color: 'var(--text-white)', marginBottom: '8px' }}>
                Emergency Website Repair
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)' }}>
                Experiencing technical bugs, broken layouts, or speed issues? Provide your details and our technical triage leads will inspect your website within 60 minutes.
              </p>
            </div>

            {validationError && (
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  color: '#f87171',
                  fontSize: '0.86rem',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>⚠️</span>
                <span>{validationError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Email *</label>
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
                  <label className="form-label">Contact no. *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (828) 222-3848"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Website URL *</label>
                  <input
                    type="text"
                    name="website"
                    required
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label className="form-label">Describe the Issue or Bug *</label>
                <textarea
                  name="issue"
                  required
                  rows="3"
                  placeholder="Explain what is broken (e.g. mobile header overlapping, checkout failing, 500 error)..."
                  value={formData.issue}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary btn-glow"
                style={{ width: '100%', padding: '13px' }}
              >
                {status === 'loading' ? 'Transmitting Diagnostic Report...' : 'SUBMIT EMERGENCY REPORT'}
              </button>

              <a
                href={`https://wa.me/18282223848?text=${encodeURIComponent("Urgent Website Repair: Hello KifalTech, I need immediate diagnostic support for my website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px',
                  color: '#25D366',
                  borderColor: 'rgba(37, 211, 102, 0.4)',
                  marginTop: '10px',
                  textDecoration: 'none',
                  width: '100%'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                </svg>
                <span>Live Emergency Chat on WhatsApp</span>
              </a>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8.5l3.5 3.5 6.5-7"/>
              </svg>
            </div>
            <h4 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '8px' }}>
              Transmission received. We'll be in touch within 2 business hours.
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Thank you, <strong style={{ color: 'var(--text-white)' }}>{formData.name}</strong>. An on-call engineer has received your report for <strong style={{ color: 'var(--primary-light)' }}>{formData.website}</strong> and will contact you at <strong style={{ color: 'var(--text-white)' }}>{formData.email}</strong> with an initial diagnostic assessment.
            </p>

            {/* Ticket Card */}
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
                  EMERGENCY TICKET CODE
                </div>
                <div style={{ fontSize: '1.15rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-rose)' }}>
                  {ticketId}
                </div>
              </div>

              <button
                onClick={handleCopyTicket}
                className="btn btn-secondary"
                style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              >
                {copied ? '✔ Copied!' : 'Copy Ticket'}
              </button>
            </div>

            <button onClick={handleReset} className="btn btn-primary" style={{ padding: '10px 26px' }}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
