import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';
import { useCurrency } from './Router.jsx';

export default function PricingCalculator({ onSelectPlanForProposal }) {
  const { formatPrice, currency } = useCurrency();
  const [calcPages, setCalcPages] = useState(5);
  const [calcType, setCalcType] = useState('corporate'); // landing, corporate, ecommerce, custom-web, enterprise
  const [calcHasEcommerce, setCalcHasEcommerce] = useState(false);
  const [calcHasSeo, setCalcHasSeo] = useState(true);
  const [calcHasCms, setCalcHasCms] = useState(true);
  const [calcHasApi, setCalcHasApi] = useState(false);
  const [calcTimeline, setCalcTimeline] = useState('standard'); // standard, rush

  const calculateCustomEstimate = () => {
    let base = 250;
    if (calcType === 'landing') base = 149;
    if (calcType === 'corporate') base = 399;
    if (calcType === 'ecommerce') base = 499;
    if (calcType === 'custom-web') base = 799;
    if (calcType === 'enterprise') base = 1299;

    let pageCost = (calcPages > 1 ? (calcPages - 1) * 35 : 0);
    let ecomCost = calcHasEcommerce ? 200 : 0;
    let seoCost = calcHasSeo ? 150 : 0;
    let cmsCost = calcHasCms ? 120 : 0;
    let apiCost = calcHasApi ? 250 : 0;

    let subtotal = base + pageCost + ecomCost + seoCost + cmsCost + apiCost;

    if (calcTimeline === 'rush') {
      subtotal *= 1.25;
    }
    return Math.round(subtotal);
  };

  const getEstimatedTimeline = () => {
    if (calcType === 'landing') return calcTimeline === 'rush' ? '3 – 5 Days' : '1 – 2 Weeks';
    if (calcType === 'corporate') return calcTimeline === 'rush' ? '1 – 2 Weeks' : '2 – 4 Weeks';
    if (calcType === 'ecommerce') return calcTimeline === 'rush' ? '2 – 3 Weeks' : '3 – 5 Weeks';
    if (calcType === 'custom-web') return calcTimeline === 'rush' ? '3 – 4 Weeks' : '4 – 8 Weeks';
    return calcTimeline === 'rush' ? '4 – 6 Weeks' : '6 – 10 Weeks';
  };

  const currentEstimate = calculateCustomEstimate();
  const timeline = getEstimatedTimeline();

  const handleApplyToProposal = () => {
    const typeLabel = {
      landing: 'Single-Page Landing Experience',
      corporate: 'Corporate Multi-Page Website',
      ecommerce: 'E-Commerce / Shopify Storefront',
      'custom-web': 'Custom Web Application / Portal',
      enterprise: 'Enterprise Scalable Digital Platform'
    }[calcType];

    const addons = [];
    if (calcHasEcommerce) addons.push('E-Commerce & Payment Gateway');
    if (calcHasSeo) addons.push('Technical SEO & Core Web Vitals');
    if (calcHasCms) addons.push('Headless / Structured CMS');
    if (calcHasApi) addons.push('Custom Third-Party API Integrations');

    const details = `Estimated Scope: ${typeLabel} with ${calcPages} page(s). Speed: ${calcTimeline === 'rush' ? 'Rush Accelerated (+25%)' : 'Standard Delivery'}. Add-ons: ${addons.length ? addons.join(', ') : 'None'}. Projected Timeline: ${timeline}.`;

    if (onSelectPlanForProposal) {
      onSelectPlanForProposal({
        category: 'Custom Scope Calculation',
        name: typeLabel,
        price: formatPrice(currentEstimate),
        originalUsd: currentEstimate,
        currency,
        title: `Custom Scope: ${typeLabel} (${formatPrice(currentEstimate)})`,
        details
      });
    }
  };

  return (
    <div
      className="agency-card"
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: 'clamp(32px, 5vw, 48px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: '#141010'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
        <div>
          <span className="eyebrow" style={{ marginBottom: '8px' }}>
            SCOPE ENGINE
          </span>
          <h3 style={{ fontSize: '1.85rem', color: '#ffffff', marginTop: '4px' }}>
            Interactive Scope &amp; Investment Calculator
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
            Configure your technical scope parameters below for a transparent, milestone-guaranteed cost estimate.
          </p>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
          TRANSMISSION DESTINATION: <span style={{ color: 'var(--primary-light)' }}>forms@kifaltech.com</span>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          {/* Project Platform Type */}
          <div className="agency-field-group">
            <label className="floating-label active">
              Platform Architecture <span className="required-asterisk">*</span>
            </label>
            <select
              className="agency-select-minimal"
              value={calcType}
              onChange={(e) => setCalcType(e.target.value)}
            >
              <option value="landing">Single-Page Landing Experience ($149 base)</option>
              <option value="corporate">Corporate Multi-Page Website ($399 base)</option>
              <option value="ecommerce">E-Commerce / Shopify Storefront ($499 base)</option>
              <option value="custom-web">Custom Web App / Portal ($799 base)</option>
              <option value="enterprise">Enterprise Scalable Platform ($1,299 base)</option>
            </select>
          </div>

          {/* Page Count Slider */}
          <div className="agency-field-group" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label className="floating-label active" style={{ position: 'static' }}>
                Unique Views / Screens <span className="required-asterisk">*</span>
              </label>
              <span style={{ color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.95rem' }}>
                {calcPages} {calcPages === 1 ? 'Screen' : 'Screens'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="25"
              value={calcPages}
              onChange={(e) => setCalcPages(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--primary-light)', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: '6px' }}>
              <span>1 View</span>
              <span>10 Views</span>
              <span>25+ Views</span>
            </div>
          </div>

          {/* Delivery Timeline */}
          <div className="agency-field-group">
            <label className="floating-label active">
              Sprint Velocity <span className="required-asterisk">*</span>
            </label>
            <select
              className="agency-select-minimal"
              value={calcTimeline}
              onChange={(e) => setCalcTimeline(e.target.value)}
            >
              <option value="standard">Standard Agile Sprint Pace</option>
              <option value="rush">Accelerated Fast-Track (+25% Rush)</option>
            </select>
          </div>
        </div>

        {/* Feature Addons */}
        <div style={{ marginBottom: '32px' }}>
          <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '14px', fontWeight: 600 }}>
            OPTIONAL ARCHITECTURAL MODULES:
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', background: 'rgba(255, 255, 255, 0.02)', padding: '12px 14px', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255, 255, 255, 0.08)', transition: 'border-color 0.2s' }}>
              <input
                type="checkbox"
                checked={calcHasEcommerce}
                onChange={(e) => setCalcHasEcommerce(e.target.checked)}
                style={{ accentColor: 'var(--primary-light)', width: '16px', height: '16px' }}
              />
              <span style={{ fontSize: '0.86rem', color: '#ffffff' }}>E-Commerce &amp; Payments (+ $200)</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', background: 'rgba(255, 255, 255, 0.02)', padding: '12px 14px', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255, 255, 255, 0.08)', transition: 'border-color 0.2s' }}>
              <input
                type="checkbox"
                checked={calcHasSeo}
                onChange={(e) => setCalcHasSeo(e.target.checked)}
                style={{ accentColor: 'var(--primary-light)', width: '16px', height: '16px' }}
              />
              <span style={{ fontSize: '0.86rem', color: '#ffffff' }}>Technical SEO Audit (+ $150)</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', background: 'rgba(255, 255, 255, 0.02)', padding: '12px 14px', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255, 255, 255, 0.08)', transition: 'border-color 0.2s' }}>
              <input
                type="checkbox"
                checked={calcHasCms}
                onChange={(e) => setCalcHasCms(e.target.checked)}
                style={{ accentColor: 'var(--primary-light)', width: '16px', height: '16px' }}
              />
              <span style={{ fontSize: '0.86rem', color: '#ffffff' }}>Headless CMS Setup (+ $120)</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', background: 'rgba(255, 255, 255, 0.02)', padding: '12px 14px', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255, 255, 255, 0.08)', transition: 'border-color 0.2s' }}>
              <input
                type="checkbox"
                checked={calcHasApi}
                onChange={(e) => setCalcHasApi(e.target.checked)}
                style={{ accentColor: 'var(--primary-light)', width: '16px', height: '16px' }}
              />
              <span style={{ fontSize: '0.86rem', color: '#ffffff' }}>Custom API Integrations (+ $250)</span>
            </label>
          </div>
        </div>

        {/* Calculation Outcome Summary */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            background: '#181313',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: 'var(--radius-sm)',
            padding: '24px 28px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                ESTIMATED INVESTMENT
              </span>
              <span style={{ fontSize: '0.74rem', padding: '2px 8px', borderRadius: 'var(--radius-full)', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                Timeline: ~{timeline}
              </span>
            </div>
            <div style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
              {formatPrice(currentEstimate)}
              <span style={{ fontSize: '0.84rem', fontWeight: 400, color: 'var(--text-dim)', marginLeft: '10px' }}>
                {currency} • 100% Code Ownership
              </span>
            </div>
          </div>

          <button
            onClick={handleApplyToProposal}
            className="btn btn-primary"
            style={{ padding: '14px 28px', fontSize: '0.94rem' }}
          >
            <span>Request Proposal with this Scope</span>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
