import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';
import { Link, useCurrency } from './Router.jsx';

export default function PricingTabs({ onSelectPlan, onChatNow }) {
  const { pricing } = agencyData;
  const categories = Object.keys(pricing);
  const [activeCategory, setActiveCategory] = useState('web-dev');
  const { formatPrice, currency } = useCurrency();

  const currentCategoryData = pricing[activeCategory];

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  const SvgCheck = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
      <path d="M3 8.5l3.5 3.5 6.5-7"/>
    </svg>
  );

  return (
    <section id="pricing" className="section-spacing" style={{ backgroundColor: '#0A0A0A', position: 'relative', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="pulse-indicator"></span>
            <span>TRANSPARENT PACKAGES</span>
          </div>
          <h2>Our Flexible Pricing Plans & Packages</h2>
          <p>
            Transparent, fixed one-time investments designed to deliver maximum return without hidden surprises or ongoing retainer drag.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '50px'
          }}
        >
          {categories.map((catKey) => {
            const cat = pricing[catKey];
            const isActive = activeCategory === catKey;
            return (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className="btn"
                style={{
                  padding: '9px 20px',
                  fontSize: '0.86rem',
                  borderRadius: '0px',
                  backgroundColor: isActive ? '#D32525' : '#141414',
                  color: '#ffffff',
                  border: isActive ? '1px solid #D32525' : '1px solid #222222',
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Plan Cards Grid: Multi-Column Grid of Subtle 1px Border Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
            alignItems: 'stretch'
          }}
        >
          {currentCategoryData.plans.map((plan) => {
            const isRecommended = plan.recommended;
            return (
              <div
                key={plan.name}
                className="agency-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '36px 30px',
                  border: isRecommended ? '1px solid #D32525' : '1px solid #222222',
                  backgroundColor: isRecommended ? '#141414' : '#0E0E0E',
                  position: 'relative',
                  boxShadow: 'none'
                }}
              >
                {isRecommended && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '24px',
                      backgroundColor: '#D32525',
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      padding: '3px 10px',
                      borderRadius: '0px',
                      letterSpacing: '0.08em',
                      border: '1px solid #D32525'
                    }}
                  >
                    Recommended
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.45rem', lineHeight: 1.1, marginBottom: '8px', color: 'var(--text-white)' }}>
                    {plan.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '24px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2.8rem',
                        fontWeight: 800,
                        color: 'var(--text-white)',
                        lineHeight: 1
                      }}
                    >
                      {formatPrice(plan.price)}
                    </span>
                    <span style={{ color: 'var(--text-dim)', fontSize: '0.88rem' }}>
                      / {plan.billing}
                    </span>
                  </div>

                  <div
                    style={{
                      height: '1px',
                      backgroundColor: 'var(--border-subtle)',
                      marginBottom: '24px'
                    }}
                  />

                  {/* Feature Checklist */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.9rem' }}>
                        <SvgCheck />
                        <span style={{ color: 'var(--text-main)', lineHeight: 1.5 }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    onClick={() => onSelectPlan({
                      category: currentCategoryData.name,
                      name: plan.name,
                      price: formatPrice(plan.price),
                      originalUsd: plan.price,
                      currency: currency,
                      billing: plan.billing
                    })}
                    className={`btn ${isRecommended ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ width: '100%', padding: '13px' }}
                  >
                    <span>Get Started</span>
                    <SvgArrow />
                  </button>

                  <button
                    onClick={() => onChatNow(plan.name, currentCategoryData.name)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-dim)',
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      padding: '6px',
                      textDecoration: 'underline'
                    }}
                  >
                    Chat Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Scope Calculator Prompt */}
        <div
          style={{
            marginTop: '40px',
            padding: '28px 36px',
            backgroundColor: '#0E0E0E',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            borderRadius: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div>
            <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              NEED SOMETHING CUSTOM?
            </span>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--text-white)', marginTop: '4px' }}>
              Want to calculate your exact custom website, e-commerce, or portal investment?
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Use our real-time interactive scope calculator with page sliders, CMS, and payment addons.
            </p>
          </div>

          <Link
            to="/pricing"
            className="btn btn-secondary"
            style={{ padding: '12px 24px', fontSize: '0.88rem', whiteSpace: 'nowrap' }}
          >
            <span>Open Scope Calculator</span>
            <SvgArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
