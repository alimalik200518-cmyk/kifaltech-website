import React, { useState, useEffect } from 'react';
import { agencyData } from '../data/agencyData.js';

export default function ProposalBuilder({ isOpen, onClose, initialData, onProposalSubmitted }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [budgetTier, setBudgetTier] = useState('$500 - $1,500');
  const [timeline, setTimeline] = useState('2-4 weeks');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync initial prefill if user clicked from Pricing or Services
  useEffect(() => {
    if (initialData) {
      if (initialData.category) {
        setSelectedServices([initialData.category]);
      }
      if (initialData.price) {
        setBudgetTier(`Approx $${initialData.price}`);
      }
      if (initialData.tier) {
        setFormData(prev => ({
          ...prev,
          details: `Interested in package: ${initialData.tier} (${initialData.category})`
        }));
      }
    }
  }, [initialData]);

  const toggleService = (title) => {
    if (selectedServices.includes(title)) {
      setSelectedServices(selectedServices.filter(s => s !== title));
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onProposalSubmitted) {
        onProposalSubmitted({
          services: selectedServices,
          budget: budgetTier,
          timeline,
          ...formData
        });
      }
    }, 800);
  };

  const allAvailableServices = [
    'Full-Stack Web Development',
    'E-Commerce & Shopify Plus',
    'Custom Web Applications',
    'UI/UX & Product Design',
    'Mobile App Development',
    'SEO & Organic Growth',
    'Google Ads (PPC) Management',
    'Brand Identity & Social Marketing'
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem'
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div style={{ marginBottom: '24px' }}>
              <span className="badge-pill" style={{ marginBottom: '8px' }}>
                Step {step} of 3 · Project Blueprint
              </span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '6px', color: '#ffffff' }}>
                {step === 1 && 'What capabilities do you require?'}
                {step === 2 && 'Timeline & Estimated Budget Range'}
                {step === 3 && 'Where should we send your Proposal?'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                We provide guaranteed fixed timelines, itemized deliverables, and transparent estimates.
              </p>
            </div>

            {/* Step 1: Select Services */}
            {step === 1 && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '28px' }}>
                  {allAvailableServices.map((svc) => {
                    const isChecked = selectedServices.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => toggleService(svc)}
                        style={{
                          padding: '14px 16px',
                          borderRadius: 'var(--radius-sm)',
                          textAlign: 'left',
                          background: isChecked ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                          border: isChecked ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                          color: isChecked ? '#ffffff' : 'var(--text-muted)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          transition: 'all 0.2s ease',
                          fontSize: '0.88rem',
                          fontWeight: isChecked ? 600 : 400
                        }}
                      >
                        <span
                          style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '4px',
                            border: isChecked ? 'none' : '1px solid var(--border-subtle)',
                            backgroundColor: isChecked ? 'var(--primary)' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.7rem',
                            color: '#ffffff',
                            flexShrink: 0
                          }}
                        >
                          {isChecked ? '✓' : ''}
                        </span>
                        <span>{svc}</span>
                      </button>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => setStep(2)}
                    disabled={selectedServices.length === 0}
                    className="btn btn-primary"
                    style={{ padding: '12px 28px', opacity: selectedServices.length === 0 ? 0.5 : 1 }}
                  >
                    Continue to Timeline
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Timeline & Budget */}
            {step === 2 && (
              <div>
                <div className="form-group">
                  <label className="form-label">Desired Target Timeline</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                    {['1–2 Weeks (Sprint)', '2–4 Weeks (Standard)', '1–2 Months', 'Flexible'].map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setTimeline(time)}
                        style={{
                          padding: '12px',
                          borderRadius: 'var(--radius-sm)',
                          background: timeline === time ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                          border: timeline === time ? '1px solid var(--secondary)' : '1px solid var(--border-subtle)',
                          color: timeline === time ? '#ffffff' : 'var(--text-muted)',
                          fontSize: '0.85rem',
                          cursor: 'pointer'
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '24px' }}>
                  <label className="form-label">Estimated Budget Comfort Level</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                    {['$150 – $500', '$500 – $1,500', '$1,500 – $3,500', '$3,500+ / Custom'].map((bg) => (
                      <button
                        type="button"
                        key={bg}
                        onClick={() => setBudgetTier(bg)}
                        style={{
                          padding: '12px',
                          borderRadius: 'var(--radius-sm)',
                          background: budgetTier === bg ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                          border: budgetTier === bg ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                          color: budgetTier === bg ? '#ffffff' : 'var(--text-muted)',
                          fontSize: '0.85rem',
                          cursor: 'pointer'
                        }}
                      >
                        {bg}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
                  <button onClick={() => setStep(1)} className="btn btn-secondary" style={{ padding: '12px 24px' }}>
                    Back
                  </button>
                  <button onClick={() => setStep(3)} className="btn btn-primary" style={{ padding: '12px 28px' }}>
                    Continue to Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info & Submission */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Work Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Company / Brand Name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Inc."
                      value={formData.company}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone or WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Briefly describe your objectives & requirements</label>
                  <textarea
                    name="details"
                    rows="3"
                    placeholder="Tell us about your brand, current challenges, inspiration links, or key feature requirements..."
                    value={formData.details}
                    onChange={handleInputChange}
                    className="form-textarea"
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '28px' }}>
                  <button type="button" onClick={() => setStep(2)} className="btn btn-secondary" style={{ padding: '12px 24px' }}>
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-glow"
                    style={{ padding: '12px 32px' }}
                  >
                    {isSubmitting ? 'Generating Proposal...' : 'Generate Project Proposal'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Submission Success State */
          <div style={{ textAlign: 'center', padding: '24px 10px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                color: 'var(--accent-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 20px auto',
                boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)'
              }}
            >
              ✓
            </div>

            <h3 style={{ fontSize: '2rem', marginBottom: '12px', color: '#ffffff' }}>
              Proposal Request Confirmed!
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', maxWidth: '520px', margin: '0 auto 28px auto', lineHeight: 1.65 }}>
              Thank you, <strong style={{ color: '#ffffff' }}>{formData.name || 'Partner'}</strong>. Our senior technical director is preparing your custom scope, milestone breakdown, and itemized quote for <strong style={{ color: 'var(--secondary)' }}>{formData.email || 'your email'}</strong>.
            </p>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '18px 24px',
                textAlign: 'left',
                maxWidth: '480px',
                margin: '0 auto 32px auto'
              }}
            >
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                SUMMARY SPECIFICATION:
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                • <strong>Services:</strong> {selectedServices.join(', ')}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                • <strong>Target Timeline:</strong> {timeline}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>
                • <strong>Target Budget:</strong> {budgetTier}
              </div>
            </div>

            <button onClick={onClose} className="btn btn-primary" style={{ padding: '12px 32px' }}>
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
