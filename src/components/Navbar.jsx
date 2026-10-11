import React, { useState, useEffect } from 'react';
import { useRouter, Link } from './Router.jsx';
import KifalTechLogo from './KifalTechLogo.jsx';
import CurrencySelector from './CurrencySelector.jsx';
import { agencyData } from '../data/agencyData.js';
import { IconLinkedIn, IconTwitterX, IconGitHub, IconInstagram } from './SocialIcons.jsx';

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
    { label: 'Work', to: '/portfolio' },
    { label: 'About', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' }
  ];

  const handleStartProject = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      navigate('/contact');
    }
  };

  const whatsappUrl = `https://wa.me/923176704325?text=${encodeURIComponent("Hello KifalTech, I'd like to discuss a new software project.")}`;

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.98)' : '#0A0A0A',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.08)',
        transition: 'background-color 0.15s ease, border-color 0.15s ease'
      }}
    >
      {/* Top Utility Bar — International Direct Communication & Dual-Presence */}
      <div
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '6px 0',
          fontSize: '0.74rem',
          color: 'var(--text-dim)',
          fontFamily: 'var(--font-mono)'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-light)', fontWeight: 600 }}>
              <span className="pulse-indicator" style={{ width: '5px', height: '5px' }}></span>
              <span>100% REMOTE GLOBAL DIGITAL AGENCY</span>
            </span>
            <span className="hide-mobile" style={{ color: 'rgba(255, 255, 255, 0.15)' }}>|</span>
            <span className="hide-mobile" style={{ color: 'var(--text-muted)' }}>
              USA: <a href="tel:+15551234567" style={{ color: '#ffffff', textDecoration: 'none' }}>+1 (555) 123-4567</a>
            </span>
            <span className="hide-mobile" style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>
            <span className="hide-mobile" style={{ color: 'var(--text-muted)' }}>
              PK: <a href="tel:+923176704325" style={{ color: 'var(--accent-emerald)', textDecoration: 'none', fontWeight: 600 }}>+92 317 670 4325</a>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Minimal Monochrome Social Media Icon Links (LinkedIn, Twitter/X, GitHub, Instagram) */}
            <div
              className="hide-mobile"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                paddingRight: '6px',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              aria-label="Social media channels"
            >
              <a
                href="https://linkedin.com/company/kifaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="header-social-item"
                title="KifalTech on LinkedIn"
                aria-label="KifalTech on LinkedIn"
              >
                <IconLinkedIn size={13} />
              </a>
              <a
                href="https://x.com/kifaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="header-social-item"
                title="KifalTech on Twitter / X"
                aria-label="KifalTech on Twitter / X"
              >
                <IconTwitterX size={12} />
              </a>
              <a
                href="https://github.com/kifaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="header-social-item"
                title="KifalTech on GitHub"
                aria-label="KifalTech on GitHub"
              >
                <IconGitHub size={13} />
              </a>
              <a
                href="https://instagram.com/kifaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="header-social-item"
                title="KifalTech on Instagram"
                aria-label="KifalTech on Instagram"
              >
                <IconInstagram size={13} />
              </a>
            </div>

            {/* Interactive WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#10b981',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.74rem',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '3px 8px',
                borderRadius: '4px',
                border: '1px solid rgba(16, 185, 129, 0.25)'
              }}
              title="Chat with Engineering Lead on WhatsApp"
            >
              <span>💬 WhatsApp</span>
            </a>
            <CurrencySelector />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div style={{ padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Bespoke KifalTech Logo */}
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
                    color: isActive ? 'var(--primary-light)' : 'var(--text-main)',
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
                        backgroundColor: '#D32525'
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
                  color: isActive ? 'var(--primary-light)' : '#ffffff',
                  padding: '8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <span>{item.label}</span>
                {isActive && <span style={{ color: 'var(--primary-light)', fontSize: '0.8rem' }}>●</span>}
              </Link>
            );
          })}

          {/* Mobile Social Links Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '12px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <a href="https://linkedin.com/company/kifaltech" target="_blank" rel="noopener noreferrer" className="header-social-item" title="LinkedIn" aria-label="LinkedIn">
              <IconLinkedIn size={16} />
            </a>
            <a href="https://x.com/kifaltech" target="_blank" rel="noopener noreferrer" className="header-social-item" title="Twitter/X" aria-label="Twitter/X">
              <IconTwitterX size={15} />
            </a>
            <a href="https://github.com/kifaltech" target="_blank" rel="noopener noreferrer" className="header-social-item" title="GitHub" aria-label="GitHub">
              <IconGitHub size={16} />
            </a>
            <a href="https://instagram.com/kifaltech" target="_blank" rel="noopener noreferrer" className="header-social-item" title="Instagram" aria-label="Instagram">
              <IconInstagram size={16} />
            </a>
          </div>

          <div style={{ paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: '#10b981',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '10px',
                borderRadius: '6px',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}
            >
              <span>💬 Chat on WhatsApp</span>
            </a>
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
