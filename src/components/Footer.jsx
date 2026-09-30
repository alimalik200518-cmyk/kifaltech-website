import React from 'react';
import { agencyData } from '../data/agencyData.js';
import { Link } from './Router.jsx';
import KifalTechLogo from './KifalTechLogo.jsx';

export default function Footer({ onStartProject }) {
  const { company } = agencyData;

  const SvgArrow = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <footer
      style={{
        backgroundColor: '#130f0f',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '64px',
        paddingBottom: '36px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Footer Grid: 5 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
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
            <p style={{ fontSize: '0.94rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '22px' }}>
              A boutique digital software and web engineering agency delivering performant web applications, custom Shopify storefronts, and reliable technical solutions for businesses worldwide.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={onStartProject}
                className="btn btn-primary"
                style={{ height: '40px', padding: '0 20px', fontSize: '0.86rem' }}
              >
                <span>Start a Project</span>
                <SvgArrow />
              </button>
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
              <li><Link to="/services/seo" style={{ color: 'inherit', transition: 'color 0.2s' }}>SEO & Performance</Link></li>
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
              <li><Link to="/pricing" style={{ color: 'inherit', transition: 'color 0.2s' }}>Pricing Packages</Link></li>
              <li><Link to="/careers" style={{ color: 'inherit', transition: 'color 0.2s' }}>Careers</Link></li>
              <li><Link to="/faqs" style={{ color: 'inherit', transition: 'color 0.2s' }}>Client FAQs</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Channels */}
          <div>
            <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px', fontWeight: 600 }}>
              Contact
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li><a href={`mailto:${company.email}`} style={{ color: '#ffffff', fontWeight: 500 }}>{company.email}</a></li>
              <li><a href={`tel:${company.inquiryPhone}`} style={{ color: 'inherit' }}>{company.inquiryPhone}</a></li>
              <li style={{ color: 'var(--text-dim)', fontSize: '0.82rem' }}>151 Haywood St, Asheville, NC</li>
              <li style={{ marginTop: '10px' }}><Link to="/contact" className="btn btn-secondary" style={{ padding: '0 16px', height: '36px', fontSize: '0.82rem' }}>Contact Page</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
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
          <div>
            © 2026 KifalTech. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ color: 'inherit' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
