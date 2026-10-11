import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';

export default function QuickFixPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: '',
    urgency: 'Normal (24-48 hrs)',
    issueType: 'Broken Layout / Mobile Responsiveness',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Quick Fix Support", url: "https://kifaltech.com/quick-fix" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.websiteUrl.trim()) {
      setErrorMessage('Please provide the affected website address.');
      return;
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      setErrorMessage('Please enter a description of the bug or issue (at least 10 characters).');
      return;
    }

    setLoading(true);
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
    } catch (err) {}

    setTimeout(() => {
      setTicketId(newTicket);
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  const handleCopyTicket = () => {
    if (ticketId && navigator.clipboard) {
      navigator.clipboard.writeText(ticketId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const commonIssues = [
    { title: "Layout & CSS Breakages", desc: "Fixing distorted header bars, broken mobile viewports, overlapping fonts, and flexbox/grid glitches." },
    { title: "Checkout & Payment Failures", desc: "Restoring broken Stripe, PayPal, or Shopify checkouts that prevent customers from completing orders." },
    { title: "500 Server Errors & White Screens", desc: "Debugging fatal PHP memory errors, corrupted plugins, database timeouts, and server crashes." },
    { title: "Malware & Security Cleanup", desc: "Clearing hacked code injections, malicious redirects, spam backlinks, and lifting Google blacklist flags." },
    { title: "Speed Bottlenecks", desc: "Remediating bloated uncompressed scripts, heavy imagery, and database query bottlenecks." },
    { title: "Form & Email Delivery Issues", desc: "Fixing contact form submit errors, broken SMTP configurations, and spam folder deliverability." }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={agencyData.pageSEO.quickFix.title}
        description={agencyData.pageSEO.quickFix.metaDesc}
        canonical={agencyData.pageSEO.quickFix.canonical}
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Quick Fix Support</span>
          </nav>

          <div className="section-header" style={{ maxWidth: '820px', margin: '0 auto 50px auto' }}>
            <span className="eyebrow" style={{ color: 'var(--accent-rose)' }}>
              Emergency Technical Support
            </span>
            <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', marginBottom: '16px' }}>
              Rapid Website Repair & Emergency Bug Resolution
            </h1>
            <p style={{ fontSize: '1.12rem' }}>
              Having a critical website issue costing you customers? Our senior engineers triage, diagnose, and resolve technical emergencies within 24 to 48 hours.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'flex-start', marginBottom: '80px' }}>
            {/* Triage Form */}
            <div className="agency-card" style={{ padding: '36px', border: '1px solid var(--border-medium)' }}>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '8px', color: 'var(--text-white)' }}>
                Submit Emergency Triage Request
              </h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '24px' }}>
                We review technical submissions within 60 minutes during business hours.
              </p>

              {submitted ? (
                <div style={{ padding: '32px 20px', textAlign: 'center', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.5rem' }}>
                    ✔
                  </div>
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '8px' }}>
                    Triage Ticket Received & Dispatched
                  </h4>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '20px' }}>
                    Our on-call technical engineer has received your report for <strong>{formData.websiteUrl || 'your website'}</strong>. We will email you at <strong>{formData.email}</strong> with an immediate diagnostic assessment.
                  </p>

                  <div
                    style={{
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-xs)',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px',
                      maxWidth: '380px',
                      margin: '0 auto 20px auto'
                    }}
                  >
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                        TRACKING CODE
                      </div>
                      <div style={{ fontSize: '1.15rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-rose)' }}>
                        {ticketId}
                      </div>
                    </div>
                    <button
                      onClick={handleCopyTicket}
                      className="btn btn-secondary"
                      style={{ padding: '5px 12px', fontSize: '0.78rem' }}
                    >
                      {copied ? '✔ Copied' : 'Copy Code'}
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', websiteUrl: '', urgency: 'Normal (24-48 hrs)', issueType: 'Broken Layout / Mobile Responsiveness', description: '' });
                    }}
                    className="btn btn-secondary"
                    style={{ padding: '8px 20px', fontSize: '0.86rem' }}
                  >
                    Submit Another Ticket
                  </button>
                </div>
              ) : (
                <div>
                  {errorMessage && (
                    <div
                      style={{
                        padding: '12px 16px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(239, 68, 68, 0.12)',
                        border: '1px solid rgba(239, 68, 68, 0.35)',
                        color: '#f87171',
                        fontSize: '0.88rem',
                        marginBottom: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <span>⚠️</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div>
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errorMessage) setErrorMessage('');
                        }}
                      />
                    </div>

                    <div>
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errorMessage) setErrorMessage('');
                        }}
                      />
                    </div>

                    <div>
                      <label className="form-label">Affected Website URL</label>
                      <input
                        type="url"
                        required
                        placeholder="https://yourwebsite.com"
                        className="form-input"
                        value={formData.websiteUrl}
                        onChange={(e) => {
                          setFormData({ ...formData, websiteUrl: e.target.value });
                          if (errorMessage) setErrorMessage('');
                        }}
                      />
                    </div>

                    <div>
                      <label className="form-label">Category of Issue</label>
                      <select
                        className="form-select"
                        value={formData.issueType}
                        onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
                      >
                        <option>Broken Layout / Mobile Responsiveness</option>
                        <option>Checkout / Payment Gateway Error</option>
                        <option>500 Internal Server Error / White Screen</option>
                        <option>Hacked / Malware / Blacklist Flag</option>
                        <option>Extremely Slow Loading Speed</option>
                        <option>Other Urgent Bug</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label">Urgency Level</label>
                      <select
                        className="form-select"
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      >
                        <option>Normal (24-48 hrs)</option>
                        <option>High Priority (Under 24 hrs)</option>
                        <option>Critical Outage (Immediate Triage)</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label">Describe the Issue</label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Please explain what is happening, error messages seen, and when it started..."
                        className="form-textarea"
                        value={formData.description}
                        onChange={(e) => {
                          setFormData({ ...formData, description: e.target.value });
                          if (errorMessage) setErrorMessage('');
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary"
                      style={{ padding: '14px', marginTop: '6px' }}
                    >
                      {loading ? 'Submitting Triage Ticket...' : 'Submit Triage Ticket'}
                    </button>

                    <a
                      href={`https://wa.me/18282223848?text=${encodeURIComponent("Urgent Support Request: Hello KifalTech, I need immediate diagnostic support for my website.")}`}
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
                        textDecoration: 'none',
                        width: '100%'
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                      </svg>
                      <span>Emergency Live Chat on WhatsApp</span>
                    </a>
                  </form>
                </div>
              )}
            </div>

            {/* Common Issues & Guarantees */}
            <div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '18px', color: 'var(--text-white)' }}>
                Frequent Technical Emergencies We Resolve
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {commonIssues.map((iss, i) => (
                  <div key={i} className="agency-card" style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-white)', marginBottom: '6px' }}>
                      {iss.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                      {iss.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
