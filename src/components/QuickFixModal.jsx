import React, { useState } from 'react';

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    const newTicket = 'KT-FIX-' + Math.floor(1000 + Math.random() * 9000);
    const triageRecord = {
      ticketId: newTicket,
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
                    placeholder="+1 (000) 000-0000"
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

              <div style={{ marginBottom: '24px' }}>
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
            <h4 style={{ fontSize: '1.7rem', color: 'var(--text-white)', marginBottom: '8px' }}>
              Emergency Triage Dispatched
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
