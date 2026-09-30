import React, { useState, useEffect, useRef } from 'react';
import { useCurrency } from './Router.jsx';
import { agencyData } from '../data/agencyData.js';

export default function CurrencySelector({ style = {}, isMobile = false }) {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const currencies = Object.values(agencyData.currencies);
  const activeCurrency = agencyData.currencies[currency] || agencyData.currencies.USD;

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [open]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  if (isMobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...style }}>
        <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
          Select Display Currency
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
          {currencies.map((curr) => {
            const isActive = curr.code === currency;
            return (
              <button
                key={curr.code}
                onClick={() => setCurrency(curr.code)}
                style={{
                  padding: '7px 10px',
                  borderRadius: 'var(--radius-xs)',
                  background: isActive ? 'var(--primary-subtle)' : 'var(--bg-card)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--primary-light)' : 'var(--border-subtle)',
                  color: isActive ? 'var(--primary-light)' : 'var(--text-main)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}
              >
                <span>{curr.flag}</span>
                <span>{curr.code}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="currency-select-wrap" style={style}>
      <button
        onClick={() => setOpen(!open)}
        className="currency-btn"
        title="Change Currency (Real-Time Rates)"
        aria-expanded={open}
        aria-label="Select Currency"
      >
        <span>{activeCurrency.flag}</span>
        <span>{activeCurrency.code} ({activeCurrency.symbol.trim()})</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <div className="currency-dropdown" role="menu">
          <div style={{ padding: '4px 8px', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', borderBottom: '1px solid var(--border-subtle)', marginBottom: '4px' }}>
            International Currencies
          </div>
          {currencies.map((curr) => {
            const isActive = curr.code === currency;
            return (
              <button
                key={curr.code}
                onClick={() => {
                  setCurrency(curr.code);
                  setOpen(false);
                }}
                className={`currency-option ${isActive ? 'active' : ''}`}
                role="menuitem"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>{curr.flag}</span>
                  <span style={{ fontWeight: isActive ? 700 : 500 }}>{curr.code}</span>
                </div>
                <span style={{ color: 'var(--text-dim)', fontSize: '0.74rem' }}>{curr.symbol}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
