import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';

export default function Services({ onSelectServiceForProposal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Engineering', 'Commerce', 'SaaS & Enterprise', 'Design', 'Growth', 'Paid Media', 'Brand'];

  const filteredServices = activeCategory === 'All'
    ? agencyData.services
    : agencyData.services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">CAPABILITIES & SPECIALIZATIONS</span>
          <h2>Tailored Digital Engineering for Forward-Thinking Enterprises</h2>
          <p>
            Whether you need a full-scale web application, high-converting digital storefront, or comprehensive search domination, our senior team executes with surgical precision.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '48px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="btn"
              style={{
                padding: '8px 18px',
                fontSize: '0.85rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: activeCategory === cat ? 'var(--primary)' : 'rgba(255, 255, 255, 0.04)',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-muted)',
                borderColor: activeCategory === cat ? 'var(--primary)' : 'var(--border-subtle)',
                boxShadow: activeCategory === cat ? '0 0 20px var(--primary-glow)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px'
              }}
            >
              <div>
                {/* Card Top Meta */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}
                  >
                    {service.category}
                  </span>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    From <strong style={{ color: '#ffffff' }}>{service.startingPrice}</strong>
                  </span>
                </div>

                {/* Service Title */}
                <h3 style={{ fontSize: '1.45rem', marginBottom: '12px' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {service.shortDesc}
                </p>

                {/* Deliverables Checklist */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '12px', textTransform: 'uppercase' }}>
                    Key Deliverables:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                    {service.deliverables.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                        <span style={{ color: 'var(--secondary)', marginTop: '2px' }}>✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectServiceForProposal(service.id)}
                className="btn btn-secondary"
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  padding: '12px 20px',
                  fontSize: '0.9rem',
                  borderColor: 'rgba(99, 102, 241, 0.3)'
                }}
              >
                <span>Customize & Get Quote</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
