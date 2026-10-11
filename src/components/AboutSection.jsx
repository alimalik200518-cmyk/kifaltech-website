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
    <section id="about" className="section-spacing" style={{ backgroundColor: 'var(--bg-main)', position: 'relative', borderTop: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
      {/* Translucent Spectral Ghost Apparition Drifting near Section Border */}
      <div
        className="halloween-drift-ghost"
        style={{
          position: 'absolute',
          top: '32px',
          right: '5%',
          pointerEvents: 'none',
          opacity: 0.35,
          filter: 'drop-shadow(0 0 16px rgba(0, 216, 255, 0.45))',
          animation: 'ghostDriftSlow 12s ease-in-out infinite',
          zIndex: 0
        }}
        aria-hidden="true"
      >
        <svg width="44" height="52" viewBox="0 0 100 120" fill="none">
          <path
            d="M50 10C27.9 10 10 27.9 10 50V95C10 97.8 12.2 100 15 100C16.8 100 18.4 99 19.3 97.4L26 86L32.7 97.4C33.6 99 35.2 100 37 100C38.8 100 40.4 99 41.3 97.4L48 86L54.7 97.4C55.6 99 57.2 100 59 100C60.8 100 62.4 99 63.3 97.4L70 86L76.7 97.4C77.6 99 79.2 100 81 100C83.8 100 86 97.8 86 95V50C86 27.9 69.9 10 50 10Z"
            fill="url(#driftGhostGrad)"
          />
          <defs>
            <linearGradient id="driftGhostGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#8BE4F8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00D8FF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <circle cx="36" cy="48" r="4" fill="#06090F" />
          <circle cx="64" cy="48" r="4" fill="#06090F" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Editorial Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            <span className="pulse-indicator"></span>
            <span>ABOUT KIFALTECH // CORE MANDATE</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4.4vw, 3.6rem)',
              lineHeight: 1.05,
              color: '#ffffff',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            A dedicated software and web agency built for businesses that value substance and reliable execution.
          </h2>

          <p style={{ fontSize: '1.12rem', lineHeight: 1.75, color: '#888888' }}>
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
            <div style={{ borderLeft: '2px solid #00D8FF', paddingLeft: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px', textTransform: 'uppercase', fontWeight: 800 }}>
                Who We Are & What We Do
              </h3>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#888888' }}>
                KifalTech is an independent digital software and web engineering agency. We specialize in building bespoke web applications, high-performance business websites, and tailored e-commerce platforms using modern technologies such as React, Node.js, and cloud-native serverless systems.
              </p>
            </div>

            {/* Who We Work With */}
            <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.16)', paddingLeft: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px', textTransform: 'uppercase', fontWeight: 800 }}>
                Who We Work With
              </h3>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#888888' }}>
                We partner with early-stage startups needing rapid MVP execution, growing SMBs looking to modernize outdated systems, and established international enterprises seeking a responsive, high-skill engineering partner without agency overhead.
              </p>
            </div>

            {/* How We Approach Projects */}
            <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.16)', paddingLeft: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px', textTransform: 'uppercase', fontWeight: 800 }}>
                How We Approach Projects
              </h3>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#888888' }}>
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
              backgroundColor: '#0E0E0E',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '0px',
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
                color: '#00D8FF',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>AGENCY OPERATIONAL BLUEPRINT</span>
              <span style={{ color: '#666666' }}>EST. 2022</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {/* Item 1 */}
              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>Production-Grade Code Architecture</h4>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#00D8FF', background: 'rgba(0, 216, 255, 0.12)', border: '1px solid #00D8FF', padding: '2px 8px' }}>No Bloat</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#888888', margin: 0, lineHeight: 1.6 }}>
                  Built with modular component hierarchies, strict typing, and standardized linting so future developers can easily extend the platform.
                </p>
              </div>

              {/* Item 2 */}
              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>Direct Engineer Access</h4>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#ffffff', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '2px 8px' }}>Async & Live</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#888888', margin: 0, lineHeight: 1.6 }}>
                  Communicate directly with technical leads via Slack, email, or video calls. Zero account manager filtering or lost specifications.
                </p>
              </div>

              {/* Item 3 */}
              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>100% IP Transfer</h4>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#00D8FF', background: 'rgba(0, 216, 255, 0.12)', border: '1px solid #00D8FF', padding: '2px 8px' }}>Zero Lock-In</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#888888', margin: 0, lineHeight: 1.6 }}>
                  You own all source repositories, Figma design files, cloud deployment keys, and documentation from the moment work completes.
                </p>
              </div>

              {/* Item 4 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>Post-Launch Reliability</h4>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#00D8FF', background: 'rgba(0, 216, 255, 0.12)', border: '1px solid #00D8FF', padding: '2px 8px' }}>99.9% Uptime</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#888888', margin: 0, lineHeight: 1.6 }}>
                  We stay with you past launch day — providing server patch management, automated monitoring, and fast technical support when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
