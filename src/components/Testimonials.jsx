import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';

export default function Testimonials() {
  const { testimonials, faqs } = agencyData;
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="section-spacing" style={{ background: 'rgba(10, 14, 24, 0.4)' }}>
      <div className="container">
        {/* Testimonials Header */}
        <div className="section-header">
          <span className="section-tag">VERIFIED CLIENT RESULTS</span>
          <h2>Trusted by Founders, CTOs & Growth Leaders</h2>
          <p>
            Real feedback from high-growth companies that partnered with Kifal Tech to engineer their software and accelerate revenue.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '90px'
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '36px 30px'
              }}
            >
              <div>
                {/* 5-Star Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24', marginBottom: '16px', fontSize: '1.1rem' }}>
                  {'★'.repeat(t.rating)}
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginLeft: '8px' }}>
                    {t.platform}
                  </span>
                </div>

                <p style={{ color: 'var(--text-main)', fontSize: '0.96rem', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '28px' }}>
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--border-subtle)', paddingTop: '18px' }}>
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--primary)'
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                    {t.role} · <strong style={{ color: 'var(--text-muted)' }}>{t.company}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frequently Asked Questions */}
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">COMMON QUESTIONS</span>
            <h3 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Frequently Asked Questions</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Everything you need to know about working with Kifal Tech, timelines, and deliverables.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="glass-card"
                  style={{
                    padding: '24px 28px',
                    cursor: 'pointer',
                    border: isOpen ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                    transition: 'all 0.25s ease'
                  }}
                  onClick={() => toggleFaq(index)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    <h4 style={{ fontSize: '1.08rem', fontWeight: 600, color: '#ffffff' }}>
                      {faq.q}
                    </h4>
                    <span
                      style={{
                        fontSize: '1.2rem',
                        color: isOpen ? 'var(--primary)' : 'var(--text-dim)',
                        transition: 'transform 0.2s ease',
                        transform: isOpen ? 'rotate(45deg)' : 'none'
                      }}
                    >
                      +
                    </span>
                  </div>

                  {isOpen && (
                    <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)', color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
