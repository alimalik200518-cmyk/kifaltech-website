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
      className="agency-card glass-card"
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: 'clamp(24px, 4vw, 42px)',
        border: '1px solid var(--border-medium)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
        <div>
          <span className="section-tag" style={{ marginBottom: '8px' }}>
            ✦ Interactive Scope Calculator
          </span>
          <h3 style={{ fontSize: '1.7rem', color: 'var(--text-white)', marginTop: '4px' }}>
            Configure Your Custom Scope & Estimate
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
            Select your architecture parameters to calculate transparent, one-time investment with guaranteed milestones.
          </p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '22px', marginBottom: '24px' }}>
          {/* Project Platform Type */}
          <div className="form-group">
            <label className="form-label">Project Platform / Solution</label>
            <select
              className="form-select"
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
          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label className="form-label" style={{ margin: 0 }}>Unique Pages / Screens</label>
              <span style={{ color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                {calcPages} {calcPages === 1 ? 'Page' : 'Pages'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="25"
              value={calcPages}
              onChange={(e) => setCalcPages(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--primary)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-dim)', marginTop: '4px' }}>
              <span>1 Page</span>
              <span>10 Pages</span>
              <span>25+ Pages</span>
            </div>
          </div>

          {/* Delivery Timeline */}
          <div className="form-group">
            <label className="form-label">Delivery Timeline Sprint</label>
            <select
              className="form-select"
              value={calcTimeline}
              onChange={(e) => setCalcTimeline(e.target.value)}
            >
              <option value="standard">Standard Agile Sprint</option>
              <option value="rush">Accelerated Fast-Track (+25% Rush)</option>
            </select>
          </div>
        </div>

        {/* Feature Addons */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '12px' }}>
            ENGINEERING CAPABILITIES & MODULES
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', background: 'var(--bg-card)', padding: '10px 14px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
              <input
                type="checkbox"
                checked={calcHasEcommerce}
                onChange={(e) => setCalcHasEcommerce(e.target.checked)}
                style={{ accentColor: 'var(--primary)', width: '16px', height: '16px' }}
              />
              <span style={{ fontSize: '0.86rem', color: 'var(--text-white)' }}>E-Commerce & Payments (+ $200)</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', background: 'var(--bg-card)', padding: '10px 14px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
              <input
                type="checkbox"
                checked={calcHasSeo}
                onChange={(e) => setCalcHasSeo(e.target.checked)}
                style={{ accentColor: 'var(--primary)', width: '16px', height: '16px' }}
              />
              <span style={{ fontSize: '0.86rem', color: 'var(--text-white)' }}>Advanced Technical SEO (+ $150)</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', background: 'var(--bg-card)', padding: '10px 14px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
              <input
                type="checkbox"
                checked={calcHasCms}
                onChange={(e) => setCalcHasCms(e.target.checked)}
                style={{ accentColor: 'var(--primary)', width: '16px', height: '16px' }}
              />
              <span style={{ fontSize: '0.86rem', color: 'var(--text-white)' }}>Headless CMS Setup (+ $120)</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', background: 'var(--bg-card)', padding: '10px 14px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
              <input
                type="checkbox"
                checked={calcHasApi}
                onChange={(e) => setCalcHasApi(e.target.checked)}
                style={{ accentColor: 'var(--primary)', width: '16px', height: '16px' }}
              />
              <span style={{ fontSize: '0.86rem', color: 'var(--text-white)' }}>Custom API Integrations (+ $250)</span>
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
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            padding: '24px 28px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', textTransform: 'uppercase' }}>
                ESTIMATED ONE-TIME INVESTMENT
              </span>
              <span style={{ fontSize: '0.74rem', padding: '2px 8px', borderRadius: 'var(--radius-full)', background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                Timeline: ~{timeline}
              </span>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-white)', fontFamily: 'var(--font-heading)' }}>
              {formatPrice(currentEstimate)}
              <span style={{ fontSize: '0.88rem', fontWeight: 400, color: 'var(--text-dim)', marginLeft: '10px' }}>
                {currency} • 100% Code Ownership
              </span>
            </div>
          </div>

          <button
            onClick={handleApplyToProposal}
            className="btn btn-primary btn-glow"
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
