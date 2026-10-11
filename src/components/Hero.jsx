import React, { useState, useEffect } from 'react';
import { agencyData } from '../data/agencyData.js';
import { Link } from './Router.jsx';
import WireframePumpkin from './WireframePumpkin.jsx';
import { HALLOWEEN_CONFIG } from '../config/halloweenConfig.js';

export default function Hero({ onStartProject, onOpenQuickFix }) {
  const { company } = agencyData;
  const [activeTab, setActiveTab] = useState('ide'); // ide, overview, performance, code
  const [glitchActive, setGlitchActive] = useState(false);

  // Easter Egg: Terminal glitches every 15s with "Ghost in the machine..."
  useEffect(() => {
    if (!HALLOWEEN_CONFIG.enabled || !HALLOWEEN_CONFIG.animations?.terminalEasterEgg) return;

    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => {
        setGlitchActive(false);
      }, 3400); // 3.4 seconds duration
    }, 15000); // Every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  const capabilityBadges = [
    { label: "Global Delivery", icon: "🌐" },
    { label: "Modern Tech Stack", icon: "◈" },
    { label: "Production-Grade Code", icon: "⚡" },
    { label: "Dedicated Support & SLA", icon: "🛡️" }
  ];

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '124px',
        paddingBottom: '88px',
        backgroundColor: '#171313',
        overflow: 'hidden'
      }}
    >
      {/* Animated CSS Background Grid & Dark Ambient Radial Mesh with Indigo Accents */}
      <div className="hero-ambient-mesh" aria-hidden="true" />

      {/* Abstract 3D Wireframe Jack-o'-Lantern (Hero Background Parallax) */}
      {HALLOWEEN_CONFIG.enabled && HALLOWEEN_CONFIG.animations?.wireframePumpkin && (
        <WireframePumpkin />
      )}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(40px, 6vw, 64px)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Clear, Professional Agency Message */}
          <div>
            <div className="eyebrow">
              <span className="pulse-indicator"></span>
              <span>Digital Software & Web Agency</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.1rem)',
                lineHeight: 1.12,
                marginBottom: '22px',
                color: '#ffffff',
                fontWeight: 700,
                letterSpacing: '-0.03em'
              }}
            >
              We Build <span className="hero-stroked">Smart Digital</span> Solutions for Modern Businesses.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.18rem)',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: '34px',
                maxWidth: '560px'
              }}
            >
              We design, develop, and maintain custom web applications, business websites, and digital software for startups, established companies, and international brands focused on real business outcomes.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={onStartProject}
                className="btn btn-primary btn-glow"
                style={{ height: '48px', padding: '0 28px', fontSize: '0.94rem' }}
              >
                <span>Start a Project</span>
                <SvgArrow />
              </button>

              <Link
                to="/portfolio"
                className="btn btn-secondary"
                style={{ height: '48px', padding: '0 26px', fontSize: '0.94rem' }}
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Verified Solid Capability Badges */}
            <div
              style={{
                marginTop: '40px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div
                style={{
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-dim)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px'
                }}
              >
                VERIFIED CAPABILITY BENCHMARKS:
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '10px'
                }}
              >
                {capabilityBadges.map((badge) => (
                  <div
                    key={badge.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(124, 58, 237, 0.25)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: '#ffffff'
                    }}
                  >
                    <span style={{ color: 'var(--primary-light)', fontSize: '0.85rem' }}>{badge.icon}</span>
                    <span style={{ fontWeight: 600 }}>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Dark-Mode UI Frame Preview */}
          <div>
            <div
              className="mockup-browser"
              style={{
                border: '1px solid rgba(124, 58, 237, 0.35)',
                backgroundColor: 'var(--bg-card)',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(124, 58, 237, 0.15)'
              }}
            >
              {/* Browser Window Chrome */}
              <div className="mockup-browser-header">
                <div className="mockup-dots">
                  <span className="mockup-dot close"></span>
                  <span className="mockup-dot min"></span>
                  <span className="mockup-dot max"></span>
                </div>
                <div className="mockup-url-bar" style={{ borderColor: glitchActive ? 'rgba(255, 107, 43, 0.5)' : undefined, transition: 'all 0.3s ease' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={glitchActive ? '#ff6b2b' : 'currentColor'} strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  <span style={{ color: glitchActive ? '#ff9d66' : 'inherit', fontFamily: 'var(--font-mono)' }}>
                    {glitchActive ? '> System status: Ghost in the machine...' : 'src/app/page.tsx — VS Code'}
                  </span>
                </div>
                <span style={{ fontSize: '0.68rem', color: glitchActive ? '#ff6b2b' : '#10b981', fontFamily: 'var(--font-mono)', fontWeight: 600, transition: 'color 0.3s ease' }}>
                  {glitchActive ? '⚠ ANOMALY DETECTED' : '● EDGE READY'}
                </span>
              </div>

              {/* Realistic Web Platform Interface Content */}
              <div style={{ padding: '20px' }}>
                {/* Platform Internal Nav */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '14px',
                    borderBottom: '1px solid var(--border-subtle)',
                    marginBottom: '16px',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '0.68rem',
                        fontWeight: 800
                      }}
                    >
                      K
                    </div>
                    <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                      Engineering Environment
                    </span>
                  </div>

                  {/* Interface Tabs */}
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    {[
                      { id: 'ide', label: 'Developer Studio' },
                      { id: 'overview', label: 'Platform Metrics' },
                      { id: 'performance', label: 'Core Vitals' },
                      { id: 'code', label: 'Source Spec' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                          background: activeTab === tab ? 'rgba(124, 58, 237, 0.15)' : 'transparent',
                          color: activeTab === tab ? 'var(--primary-light)' : 'var(--text-muted)',
                          border: '1px solid',
                          borderColor: activeTab === tab ? 'rgba(124, 58, 237, 0.4)' : 'transparent',
                          borderRadius: 'var(--radius-xs)',
                          padding: '3px 8px',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          cursor: 'pointer',
                          fontWeight: activeTab === tab ? 600 : 400
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab 0: Authentic Developer Studio Photography */}
                {activeTab === 'ide' && (
                  <div>
                    <div style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)', backgroundColor: '#100c0c' }}>
                      <img
                        src="/images/hero/developer-dark-code.jpg"
                        alt="KifalTech developer engineering React and TypeScript code on dark-mode IDE with natural window lighting"
                        style={{
                          width: '100%',
                          height: '280px',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                        loading="eager"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '14px 16px',
                          background: 'linear-gradient(180deg, transparent 0%, rgba(16, 12, 12, 0.95) 75%, #100c0c 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                            Active Sprint • React 18 &amp; Edge Cloud
                          </div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                            VS Code • TypeScript Strict • Zero Runtime Bloat
                          </div>
                        </div>
                        <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: glitchActive ? '#ff6b2b' : 'var(--accent-emerald)', background: glitchActive ? 'rgba(255, 107, 43, 0.15)' : 'rgba(16, 185, 129, 0.15)', border: `1px solid ${glitchActive ? 'rgba(255, 107, 43, 0.4)' : 'rgba(16, 185, 129, 0.3)'}`, padding: '2px 8px', borderRadius: '4px', flexShrink: 0, transition: 'all 0.3s ease' }}>
                          {glitchActive ? '⚠ Ghost In The Machine' : '● Live Sprint'}
                        </span>
                      </div>
                    </div>

                    {/* Quick Capabilities Metrics Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '12px' }}>
                      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontSize: '0.64rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>CORE WEB VITALS</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-emerald)', marginTop: '2px' }}>98/100</div>
                      </div>
                      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontSize: '0.64rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>EDGE LATENCY</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>38ms</div>
                      </div>
                      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontSize: '0.64rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>SYSTEM SLA</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-light)', marginTop: '2px' }}>99.98%</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 1: Realistic Platform Metrics */}
                {activeTab === 'overview' && (
                  <div>
                    {/* Realistic Metric Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
                      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>ACTIVE SESSIONS</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>18,420</div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--primary-light)', marginTop: '2px' }}>Operational load</div>
                      </div>

                      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>AVG API LATENCY</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>38ms</div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--primary-light)', marginTop: '2px' }}>Edge cached</div>
                      </div>

                      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>UPTIME SLA</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>99.98%</div>
                        <div style={{ fontSize: '0.68rem', color: '#10b981', marginTop: '2px' }}>Automated health check</div>
                      </div>
                    </div>

                    {/* Realistic Architectural Workflow Status */}
                    <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '14px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>PRODUCTION PIPELINE</span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)' }}>Deployment v2.4.1 Active</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ flex: 1, height: '4px', backgroundColor: '#332d2d', borderRadius: '2px', overflow: 'hidden' }}>
                          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #7C3AED, #4F46E5)' }} />
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#ffffff', fontFamily: 'var(--font-mono)' }}>Verified</span>
                      </div>
                    </div>

                    {/* Delivered Module Checklist */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      <span>✓ Next.js SSR Frontend</span>
                      <span>✓ Headless CMS Integration</span>
                      <span>✓ Secure Payment Gateway</span>
                    </div>
                  </div>
                )}

                {/* Tab 2: Core Web Vitals */}
                {activeTab === 'performance' && (
                  <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', marginBottom: '12px' }}>
                      LIGHTHOUSE AUDIT BENCHMARKS
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', textAlign: 'center' }}>
                      <div style={{ padding: '10px 4px', background: 'var(--bg-card)', borderRadius: '4px', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-light)' }}>98</div>
                        <div style={{ fontSize: '0.66rem', color: 'var(--text-dim)', marginTop: '2px' }}>Performance</div>
                      </div>
                      <div style={{ padding: '10px 4px', background: 'var(--bg-card)', borderRadius: '4px', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-light)' }}>100</div>
                        <div style={{ fontSize: '0.66rem', color: 'var(--text-dim)', marginTop: '2px' }}>Accessibility</div>
                      </div>
                      <div style={{ padding: '10px 4px', background: 'var(--bg-card)', borderRadius: '4px', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-light)' }}>100</div>
                        <div style={{ fontSize: '0.66rem', color: 'var(--text-dim)', marginTop: '2px' }}>Best Practices</div>
                      </div>
                      <div style={{ padding: '10px 4px', background: 'var(--bg-card)', borderRadius: '4px', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-light)' }}>100</div>
                        <div style={{ fontSize: '0.66rem', color: 'var(--text-dim)', marginTop: '2px' }}>SEO Structure</div>
                      </div>
                    </div>
                    <div style={{ marginTop: '14px', fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Tested under mobile 4G throttling. Zero layout shift (CLS 0.00), First Contentful Paint &lt; 0.7s.
                    </div>
                  </div>
                )}

                {/* Tab 3: Source Code Spec (Syntax Highlighting) */}
                {activeTab === 'code' && (
                  <div className="mockup-terminal" style={{ margin: 0, border: `1px solid ${glitchActive ? 'rgba(255, 107, 43, 0.4)' : 'rgba(124, 58, 237, 0.25)'}`, transition: 'border-color 0.3s ease' }}>
                    {glitchActive ? (
                      <div className="terminal-ghost-glitch">
                        <div style={{ color: '#ff6b2b', fontFamily: 'var(--font-mono)', fontSize: '0.84rem', fontWeight: 700, textShadow: '0 0 8px rgba(255, 107, 43, 0.6)' }}>
                          &gt; System status: Ghost in the machine...
                        </div>
                        <div style={{ color: '#a855f7', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', marginTop: '6px' }}>
                          [0xDEADBEEF] Memory trace: anomaly detected in sector 10-31
                        </div>
                        <div style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', marginTop: '4px' }}>
                          Self-healing kernel engaged... restoring production state
                        </div>
                        <div style={{ color: '#10b981', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', fontWeight: 600, marginTop: '8px' }}>
                          ✓ Normalized: 0ms latency penalty. Zero downtime.
                        </div>
                      </div>
                    ) : (
                      <>
                        <div style={{ color: '#818CF8', marginBottom: '8px' }}>// Production Build Pipeline &amp; Typecheck</div>
                        <div><span style={{ color: 'var(--primary-light)' }}>$</span> <span style={{ color: '#ffffff' }}>kifaltech-deploy</span> <span style={{ color: '#A78BFA' }}>--env=production</span></div>
                        <div style={{ color: '#10b981', marginTop: '4px' }}>✓ TypeScript typecheck passed (0 errors)</div>
                        <div style={{ color: '#10b981' }}>✓ Static asset bundling optimized (WebP/AVIF)</div>
                        <div style={{ color: '#10b981' }}>✓ Edge route pre-rendering complete (28 pages)</div>
                        <div style={{ color: 'var(--primary-light)', marginTop: '8px', fontWeight: 600 }}>✓ Ready for client handover — 100% IP ownership</div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
