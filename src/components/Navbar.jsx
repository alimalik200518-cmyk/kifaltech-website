import React, { useState, useEffect } from 'react';
import { useRouter, Link } from './Router.jsx';
import KifalTechLogo from './KifalTechLogo.jsx';
import CurrencySelector from './CurrencySelector.jsx';
import { agencyData } from '../data/agencyData.js';

export default function Navbar({ onOpenQuote, onOpenQuickFix }) {
  const { currentPath, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { company } = agencyData;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Solutions', to: '/solutions' },
    { label: 'Work', to: '/portfolio' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ];

  const handleStartProject = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      navigate('/contact');
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(23, 19, 19, 0.95)' : '#171313',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.04)',
        transition: 'background-color 0.2s ease, border-color 0.2s ease'
      }}
    >
      {/* Subtle Top Utility Bar — International Direct Communication */}
      <div
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '6px 0',
          fontSize: '0.74rem',
          color: 'var(--text-dim)',
          fontFamily: 'var(--font-mono)'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#29D9C5', fontWeight: 600 }}>
              <span className="pulse-indicator" style={{ width: '5px', height: '5px' }}></span>
              <span>Accepting New Client Projects</span>
            </span>
            <span className="hide-mobile" style={{ color: 'rgba(255, 255, 255, 0.15)' }}>|</span>
            <span className="hide-mobile" style={{ color: 'var(--text-muted)' }}>
              Direct: <a href={`tel:${company.inquiryPhone}`} style={{ color: '#ffffff', textDecoration: 'none' }}>{company.inquiryPhone}</a>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <CurrencySelector />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div style={{ padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Authentic KifalTech Logo */}
          <KifalTechLogo compact={false} />

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPath === item.to || (item.to !== '/' && currentPath.startsWith(item.to));
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  style={{
                    color: isActive ? '#29D9C5' : 'var(--text-main)',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 500,
                    transition: 'color 0.15s ease',
                    position: 'relative',
                    padding: '6px 2px'
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: '#29D9C5',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Start a Project CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={handleStartProject}
              className="btn btn-primary"
              style={{
                height: '40px',
                padding: '0 20px',
                fontSize: '0.86rem'
              }}
            >
              Start a Project
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-toggle-btn"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-xs)',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer'
              }}
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: '#171313',
            borderBottom: '1px solid var(--border-medium)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {navItems.map((item) => {
            const isActive = currentPath === item.to || (item.to !== '/' && currentPath.startsWith(item.to));
            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#29D9C5' : '#ffffff',
                  padding: '8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <span>{item.label}</span>
                {isActive && <span style={{ color: '#29D9C5', fontSize: '0.8rem' }}>●</span>}
              </Link>
            );
          })}

          <div style={{ paddingTop: '12px' }}>
            <button
              onClick={() => {
                setMobileOpen(false);
                handleStartProject();
              }}
              className="btn btn-primary"
              style={{ width: '100%', height: '44px' }}
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
