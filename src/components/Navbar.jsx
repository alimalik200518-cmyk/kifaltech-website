import React, { useState, useEffect } from 'react';
import { useRouter, Link } from './Router.jsx';

export default function Navbar({ onOpenQuote }) {
  const { currentPath, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 15);
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

  // Clean, minimal 5 core navigation links
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Work', to: '/portfolio' },
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
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.98)' : '#0A0A0A',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: '1px solid #222222',
        transition: 'background-color 0.15s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        
        {/* Left: Exact Image Asset `final logo of kifal Tech_2.jpg` */}
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
          aria-label="Kifal Tech Home"
        >
          <img
            src="/images/logo/final logo of kifal Tech_2.jpg"
            alt="Kifal Tech - Digital Software Agency"
            className="brand-logo"
            style={{
              height: '46px',
              width: 'auto',
              maxHeight: '46px',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Link>

        {/* Center: Clean, Minimal Navigation Links using standard system fonts */}
        <nav
          className="desktop-nav"
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}
        >
          {navItems.map((item) => {
            const isActive = currentPath === item.to || (item.to !== '/' && currentPath.startsWith(item.to));
            return (
              <Link
                key={item.label}
                to={item.to}
                style={{
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#FFFFFF' : '#888888',
                  textDecoration: 'none',
                  padding: '6px 0',
                  letterSpacing: '0.01em',
                  transition: 'color 0.15s ease',
                  position: 'relative'
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#FFFFFF'
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Single Primary CTA Button ("Start a Project") */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={handleStartProject}
            className="btn btn-primary"
            style={{
              height: '40px',
              padding: '0 20px',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              border: '1px solid #222222',
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              boxShadow: 'none'
            }}
          >
            Start a Project
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle-btn"
            style={{
              background: '#0E0E0E',
              border: '1px solid #222222',
              borderRadius: '0px',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
            aria-label="Toggle Navigation Menu"
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

      {/* Clean Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: '#0A0A0A',
            borderBottom: '1px solid #222222',
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
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, sans-serif',
                  fontSize: '0.96rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#FFFFFF' : '#888888',
                  padding: '10px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #1A1A1A',
                  textDecoration: 'none'
                }}
              >
                <span>{item.label}</span>
                {isActive && <span style={{ color: '#FFFFFF', fontSize: '0.75rem' }}>●</span>}
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
              style={{
                width: '100%',
                height: '44px',
                backgroundColor: '#FFFFFF',
                color: '#0A0A0A',
                border: '1px solid #222222',
                boxShadow: 'none',
                fontWeight: 700
              }}
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
