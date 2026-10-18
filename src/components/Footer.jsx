import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';
import { Link } from './Router.jsx';
import KifalTechLogo from './KifalTechLogo.jsx';
import { IconLinkedIn, IconTwitterX, IconGitHub, IconInstagram } from './SocialIcons.jsx';

export default function Footer({ onStartProject }) {
  const { company } = agencyData;

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle'); // idle, loading, success
  const [newsletterMsg, setNewsletterMsg] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
      return;
    }

    setNewsletterStatus('loading');

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_newsletter') || '[]');
      existing.unshift({
        email: newsletterEmail.trim(),
        destination: 'forms@kifaltech.com',
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('kifaltech_newsletter', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setTimeout(() => {
      setNewsletterStatus('success');
      setNewsletterMsg("Transmission received. We'll be in touch within 2 business hours.");
    }, 500);
  };

  const SvgArrow = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <footer
      style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #222222',
        paddingTop: '64px',
        paddingBottom: '36px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Remote Global Agency Badge Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            paddingBottom: '28px',
            marginBottom: '40px',
            borderBottom: '1px solid #222222'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="pulse-indicator"></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.08em', color: '#D32525', textTransform: 'uppercase', fontWeight: 700 }}>
              100% REMOTE GLOBAL DIGITAL AGENCY
            </span>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#777777' }}>
            BRIDGING NORTH AMERICA &amp; SOUTH ASIA • TIMEZONE-ALIGNED
          </div>
        </div>

        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(28px, 4vw, 44px)',
            paddingBottom: '52px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          {/* Col 1: Brand & Professional Description */}
          <div style={{ gridColumn: 'span 2', maxWidth: '380px' }}>
            <div style={{ marginBottom: '18px' }}>
              <KifalTechLogo size="medium" />
            </div>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '22px' }}>
              A 100% remote global digital agency engineering performant web applications, custom Shopify storefronts, and cloud architectures for ambitious founders worldwide.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={onStartProject}
                className="btn btn-primary"
                style={{ height: '40px', padding: '0 20px', fontSize: '0.86rem' }}
              >
                <span>Start a Project</span>
                <SvgArrow />
              </button>
              <Link
                to="/contact"
                className="btn btn-secondary"
                style={{ height: '40px', padding: '0 18px', fontSize: '0.86rem' }}
              >
                Contact Page
              </Link>
            </div>

            {/* Newsletter Dispatch Form */}
            <div style={{ marginTop: '30px', padding: '18px', borderRadius: 'var(--radius-sm)', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                ENGINEERING DISPATCH <span className="required-asterisk">*</span>
              </span>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: 1.5 }}>
                Monthly insights on React architectures, headless Shopify, and Core Web Vitals.
              </p>

              {newsletterStatus === 'success' ? (
                <div style={{ padding: '10px 12px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid #10b981', color: '#6ee7b7', fontSize: '0.82rem', lineHeight: 1.5, fontFamily: 'var(--font-mono)' }}>
                  ✔ {newsletterMsg}
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="newsletter-form-minimal">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter work email *"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="newsletter-input"
                    aria-label="Work Email Address"
                  />
                  <button
                    type="submit"
                    className="newsletter-submit-btn"
                    disabled={newsletterStatus === 'loading'}
                  >
                    <span>{newsletterStatus === 'loading' ? 'Sending...' : 'Subscribe'}</span>
                    <SvgArrow />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px', fontWeight: 600 }}>
              Services
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li><Link to="/services/web-development" style={{ color: 'inherit', transition: 'color 0.2s' }}>Web Development</Link></li>
              <li><Link to="/services/wordpress-development" style={{ color: 'inherit', transition: 'color 0.2s' }}>WordPress Engineering</Link></li>
              <li><Link to="/services/ui-ux-design" style={{ color: 'inherit', transition: 'color 0.2s' }}>UI/UX Design</Link></li>
              <li><Link to="/services/custom-software" style={{ color: 'inherit', transition: 'color 0.2s' }}>Custom Web Apps</Link></li>
              <li><Link to="/services/shopify" style={{ color: 'inherit', transition: 'color 0.2s' }}>Shopify Storefronts</Link></li>
              <li><Link to="/services/seo" style={{ color: 'inherit', transition: 'color 0.2s' }}>SEO &amp; Performance</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px', fontWeight: 600 }}>
              Company
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li><Link to="/about" style={{ color: 'inherit', transition: 'color 0.2s' }}>About KifalTech</Link></li>
              <li><Link to="/process" style={{ color: 'inherit', transition: 'color 0.2s' }}>How We Work</Link></li>
              <li><Link to="/portfolio" style={{ color: 'inherit', transition: 'color 0.2s' }}>Selected Work</Link></li>
              <li><Link to="/work/rise-2-studio" style={{ color: 'inherit', transition: 'color 0.2s' }}>Case: Rise 2 Studio</Link></li>
              <li><Link to="/work/cuts-clothing" style={{ color: 'inherit', transition: 'color 0.2s' }}>Case: CUTS Clothing</Link></li>
              <li><Link to="/pricing" style={{ color: 'inherit', transition: 'color 0.2s' }}>Pricing Packages</Link></li>
              <li><Link to="/careers" style={{ color: 'inherit', transition: 'color 0.2s' }}>Careers (Remote)</Link></li>
              <li><Link to="/faq" style={{ color: 'inherit', transition: 'color 0.2s' }}>Client FAQs</Link></li>
            </ul>
          </div>

          {/* Col 4: Dual Presence & Global Contact */}
          <div>
            <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px', fontWeight: 600 }}>
              Our Presence
            </div>

            {/* USA Office Block */}
            <div style={{ marginBottom: '16px', padding: '12px 14px', borderRadius: '0px', background: '#0C0C0C', border: '1px solid #222222' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#ffffff', fontWeight: 700 }}>US STRATEGY HUB 🇺🇸</span>
                <span style={{ fontSize: '0.7rem', color: '#888888', fontFamily: 'var(--font-mono)' }}>EST / CST</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600 }}>Henry</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-dim)', marginBottom: '8px' }}>Head of Product</div>
              <a
                href={`https://wa.me/923176704325?text=${encodeURIComponent("Hello KifalTech, I'd like to discuss a project with US Product Leadership.")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#25D366',
                  textDecoration: 'none',
                  fontWeight: 600,
                  padding: '4px 8px',
                  border: '1px solid #222222',
                  backgroundColor: '#111111'
                }}
              >
                <span>💬</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Pakistan Office Block */}
            <div style={{ marginBottom: '18px', padding: '12px 14px', borderRadius: '0px', background: '#0C0C0C', border: '1px solid #222222' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#ffffff', fontWeight: 700 }}>PK ENGINEERING HUB 🇵🇰</span>
                <span style={{ fontSize: '0.7rem', color: '#888888', fontFamily: 'var(--font-mono)' }}>PKT (UTC+5)</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600 }}>Muhammad Ali</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-dim)' }}>Technical Lead</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '2px 0 8px 0' }}>Karachi, Pakistan</div>
              <a
                href={`https://wa.me/923176704325?text=${encodeURIComponent("Hello Muhammad Ali, I'd like to discuss technical engineering with KifalTech.")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#25D366',
                  textDecoration: 'none',
                  fontWeight: 600,
                  padding: '4px 8px',
                  border: '1px solid #222222',
                  backgroundColor: '#111111'
                }}
              >
                <span>💬</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Primary Email */}
            <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '4px' }}>PRIMARY INQUIRY EMAIL</span>
              <a href="mailto:info@kifaltech.com" className="email-mailto-link" style={{ fontWeight: 600, display: 'inline-block' }}>
                info@kifaltech.com
              </a>
            </div>

            {/* Connect With Us on Social */}
            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontWeight: 600 }}>
                Social Channels
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <a
                  href="https://linkedin.com/company/kifaltech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill"
                  title="KifalTech on LinkedIn"
                  aria-label="KifalTech on LinkedIn"
                >
                  <IconLinkedIn size={13} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://x.com/kifaltech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill"
                  title="KifalTech on Twitter / X"
                  aria-label="KifalTech on Twitter / X"
                >
                  <IconTwitterX size={12} />
                  <span>Twitter/X</span>
                </a>
                <a
                  href="https://github.com/kifaltech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill"
                  title="KifalTech on GitHub"
                  aria-label="KifalTech on GitHub"
                >
                  <IconGitHub size={13} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://instagram.com/kifaltech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill"
                  title="KifalTech on Instagram"
                  aria-label="KifalTech on Instagram"
                >
                  <IconInstagram size={13} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials & Legal */}
        <div
          style={{
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.84rem',
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span>© 2026 KifalTech. All Rights Reserved.</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <a
                href="https://linkedin.com/company/kifaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="KifalTech on LinkedIn"
                aria-label="KifalTech on LinkedIn"
                style={{ width: '28px', height: '28px' }}
              >
                <IconLinkedIn size={13} />
              </a>
              <a
                href="https://x.com/kifaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="KifalTech on Twitter / X"
                aria-label="KifalTech on Twitter / X"
                style={{ width: '28px', height: '28px' }}
              >
                <IconTwitterX size={12} />
              </a>
              <a
                href="https://github.com/kifaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="KifalTech on GitHub"
                aria-label="KifalTech on GitHub"
                style={{ width: '28px', height: '28px' }}
              >
                <IconGitHub size={13} />
              </a>
              <a
                href="https://instagram.com/kifaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="KifalTech on Instagram"
                aria-label="KifalTech on Instagram"
                style={{ width: '28px', height: '28px' }}
              >
                <IconInstagram size={13} />
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/privacy" style={{ color: 'inherit' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'inherit' }}>Terms of Service</Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
            <span>Contact: <a href="mailto:info@kifaltech.com" className="email-mailto-link">info@kifaltech.com</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
