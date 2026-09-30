import React from 'react';
import { agencyData } from '../data/agencyData.js';
import { Link } from './Router.jsx';

export default function AboutSection({ onLearnMore }) {
  const { company } = agencyData;

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section id="about" className="section-spacing" style={{ backgroundColor: '#171313', position: 'relative' }}>
      <div className="container">
        {/* Editorial Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            <span className="pulse-indicator"></span>
            <span>ABOUT KIFALTECH</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4.4vw, 3.6rem)',
              lineHeight: 1.15,
              color: '#ffffff',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginBottom: '20px'
            }}
          >
            A dedicated software and web agency built for businesses that value substance and reliable execution.
          </h2>

          <p style={{ fontSize: '1.12rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
            We design, develop, and maintain custom digital platforms for international founders, growing brands, and established companies. No bloated agency layers, no generic templates — just dependable software engineering aligned with your commercial objectives.
          </p>
        </div>

        {/* Asymmetric Editorial Grid (Text Narrative + Operational Blueprint) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(40px, 5vw, 64px)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Deep Answers to Core Questions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Who We Are & What We Do */}
            <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>
                Who We Are & What We Do
              </h3>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                KifalTech is an independent digital software and web engineering agency. We specialize in building bespoke web applications, high-performance business websites, and tailored e-commerce platforms using modern technologies such as React, Node.js, and cloud-native serverless systems.
              </p>
            </div>

            {/* Who We Work With */}
            <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.12)', paddingLeft: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>
                Who We Work With
              </h3>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                We partner with early-stage startups needing rapid MVP execution, growing SMBs looking to modernize outdated systems, and established international enterprises seeking a responsive, high-skill engineering partner without agency overhead.
              </p>
            </div>

            {/* How We Approach Projects */}
            <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.12)', paddingLeft: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>
                How We Approach Projects
              </h3>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                Every project begins with understanding your business goals and operational bottlenecks. We scope requirements realistically, establish weekly milestone deliveries, and maintain direct communication with the engineers actually writing your code.
              </p>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '12px' }}>
              <Link
                to="/about"
                className="btn btn-secondary"
                style={{ padding: '0 24px' }}
              >
                <span>Read Full Company Overview</span>
                <SvgArrow />
              </Link>
            </div>
          </div>

          {/* Right Column: Concrete Operational Blueprint (Visual Spec) */}
          <div
            style={{
              backgroundColor: '#1c1717',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: 'clamp(24px, 4vw, 36px)',
              position: 'relative'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--primary)',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>AGENCY OPERATIONAL BLUEPRINT</span>
              <span style={{ color: 'var(--text-dim)' }}>EST. 2022</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {/* Item 1 */}
              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>Clean Code Architecture</h4>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>No Bloat</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                  Built with modular component hierarchies, strict typing, and standardized linting so future developers can easily extend the platform.
                </p>
              </div>

              {/* Item 2 */}
              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>Direct Engineer Access</h4>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#ffffff', background: 'rgba(255, 255, 255, 0.08)', padding: '2px 8px', borderRadius: '4px' }}>Async & Live</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                  Communicate directly with technical leads via Slack, email, or video calls. Zero account manager filtering or lost specifications.
                </p>
              </div>

              {/* Item 3 */}
              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>100% IP Transfer</h4>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>Zero Lock-In</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                  You own all source repositories, Figma design files, cloud deployment keys, and documentation from the moment work completes.
                </p>
              </div>

              {/* Item 4 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>Post-Launch Reliability</h4>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#ffffff', background: 'rgba(255, 255, 255, 0.08)', padding: '2px 8px', borderRadius: '4px' }}>SLA Maintenance</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                  We stay with you past launch day — providing server patch management, uptime monitoring, and fast technical support when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
