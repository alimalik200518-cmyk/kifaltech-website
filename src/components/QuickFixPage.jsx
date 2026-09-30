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
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Quick Fix Support", url: "https://kifaltech.com/quick-fix" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
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

    setTicketId(newTicket);
    setSubmitted(true);
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
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ padding: '14px', marginTop: '6px' }}>
                    Submit Triage Ticket
                  </button>
                </form>
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
