import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';
import SEOHead from './SEOHead.jsx';
import { Link, useCurrency } from './Router.jsx';
import PricingCalculator from './PricingCalculator.jsx';

export default function PricingPage({ onSelectPlan, onOpenCustomQuote }) {
  const [activeCategoryKey, setActiveCategoryKey] = useState('web-dev');
  const { formatPrice, currency } = useCurrency();
  const pricingKeys = Object.keys(agencyData.pricing);

  const activeCategory = agencyData.pricing[activeCategoryKey];

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Pricing", url: "https://kifaltech.com/pricing" }
  ];

  const SvgCheck = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '3px' }}>
      <path d="M3 8.5l3.5 3.5 6.5-7"/>
    </svg>
  );

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={agencyData.pageSEO.pricing.title}
        description={agencyData.pageSEO.pricing.metaDesc}
        canonical={agencyData.pageSEO.pricing.canonical}
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Pricing</span>
          </nav>

          <div className="section-header">
            <span className="eyebrow">Transparent Investment</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
              Simple, Predictable Agency Packages
            </h1>
            <p>
              Truthful, milestone-based pricing with zero hidden fees. Full source code ownership and 30-day warranty included with every plan.
            </p>
          </div>

          {/* Pricing Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '50px'
            }}
          >
            {pricingKeys.map((key) => {
              const cat = agencyData.pricing[key];
              const isActive = activeCategoryKey === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategoryKey(key)}
                  style={{
                    padding: '11px 20px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--primary)' : 'var(--border-subtle)',
                    backgroundColor: isActive ? 'var(--primary)' : 'var(--bg-card)',
                    color: isActive ? '#ffffff' : 'var(--text-main)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Plan Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '28px', marginBottom: '70px', alignItems: 'stretch' }}>
            {activeCategory.plans.map((plan, idx) => (
              <div
                key={idx}
                className="agency-card"
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: plan.recommended ? '2px solid var(--primary-light)' : '1px solid var(--border-subtle)',
                  background: plan.recommended ? 'radial-gradient(ellipse at top, var(--bg-card-hover) 0%, var(--bg-card) 100%)' : 'var(--bg-card)',
                  transform: plan.recommended ? 'scale(1.02)' : 'none'
                }}
              >
                {plan.recommended && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--primary)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 14px',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '8px' }}>
                    {plan.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '2.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-white)' }}>
                      {formatPrice(plan.price)}
                    </span>
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-dim)' }}>
                      / {plan.billing}
                    </span>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                      INCLUDED IN THIS PLAN:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {plan.features.map((feat, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-main)', marginBottom: '10px' }}>
                          <SvgCheck />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan({ ...plan, category: activeCategory.name, price: formatPrice(plan.price), originalUsd: plan.price, currency })}
                  className={`btn ${plan.recommended ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', padding: '13px', marginTop: '16px' }}
                >
                  <span>Select {plan.name}</span>
                  <SvgArrow />
                </button>
              </div>
            ))}
          </div>

          {/* Interactive Custom Scope & Cost Estimator */}
          <div style={{ marginBottom: '70px' }}>
            <PricingCalculator onSelectPlanForProposal={onSelectPlan} />
          </div>

          {/* Need a Custom Enterprise Solution? */}
          <div
            className="agency-card"
            style={{
              padding: '40px',
              textAlign: 'center',
              border: '1px solid var(--border-medium)',
              background: 'var(--bg-secondary)'
            }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '12px', color: 'var(--text-white)' }}>
              Require a Custom Enterprise Scope?
            </h3>
            <p style={{ maxWidth: '640px', margin: '0 auto 24px auto' }}>
              For complex multi-tier platforms, enterprise databases, or high-volume integrations, our engineering leads provide tailored proposals with dedicated sprint milestones.
            </p>
            <button
              onClick={() => onOpenCustomQuote()}
              className="btn btn-primary"
              style={{ padding: '13px 30px' }}
            >
              <span>Build Custom Proposal</span>
              <SvgArrow />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
