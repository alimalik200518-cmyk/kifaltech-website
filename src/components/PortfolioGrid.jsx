import React from 'react';
import { agencyData } from '../data/agencyData.js';
import { Link } from './Router.jsx';

export default function PortfolioGrid({ onStartSimilarProject }) {
  const { portfolio } = agencyData;

  // Curate 4 featured projects for varied editorial presentation
  const p1 = portfolio.find((p) => p.id === 'rise-2-studio') || portfolio[0];
  const p2 = portfolio.find((p) => p.id === 'cuts-clothing') || portfolio[1];
  const p3 = portfolio.find((p) => p.id === 'winkler-hotels') || portfolio[2];
  const p4 = portfolio.find((p) => p.id === 'flow-trix') || portfolio[5];

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section id="portfolio" className="section-spacing" style={{ backgroundColor: '#171313', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ maxWidth: '720px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              <span className="pulse-indicator"></span>
              <span>SELECTED WORK</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.3rem, 4.2vw, 3.5rem)',
                lineHeight: 1.15,
                color: '#ffffff',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                marginBottom: '16px'
              }}
            >
              Curated Client Case Studies
            </h2>
            <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              A selection of digital platforms, e-commerce storefronts, and web software engineered for verified reliability and performance.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="btn btn-secondary"
            style={{ padding: '0 24px' }}
          >
            <span>View All Case Studies ({portfolio.length})</span>
            <SvgArrow />
          </Link>
        </div>

        {/* Varied Editorial Showcase (NO identical 3-column card grid) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          
          {/* ==============================================================
              PROJECT 01: Large Hero Feature Project (Rise 2 Studio)
              ============================================================== */}
          <div
            style={{
              backgroundColor: '#1d1717',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: 'clamp(28px, 4vw, 44px)',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
                gap: 'clamp(32px, 4vw, 56px)',
                alignItems: 'center'
              }}
            >
              {/* Metadata & Narrative */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.1)', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {p1.projectType || 'Client Case Study'}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {p1.industry}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    {p1.year}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.02em' }}>
                  {p1.title}
                </h3>

                <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '24px' }}>
                  {p1.desc}
                </p>

                {/* Outcome Statement */}
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderLeft: '2px solid var(--primary)',
                    padding: '14px 18px',
                    marginBottom: '26px'
                  }}
                >
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.06em' }}>
                    DELIVERED OUTCOME
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.55 }}>
                    {p1.outcome || 'Lightweight media streaming architecture achieving sub-second load times.'}
                  </div>
                </div>

                {/* Services & Tech */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                  {p1.services.map((svc) => (
                    <span key={svc} style={{ fontSize: '0.78rem', color: 'var(--text-main)', background: 'rgba(255, 255, 255, 0.06)', padding: '3px 10px', borderRadius: '4px' }}>
                      {svc}
                    </span>
                  ))}
                  <span style={{ fontSize: '0.78rem', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.08)', padding: '3px 10px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
                    React / Next.js
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link
                    to={`/portfolio/${p1.id}`}
                    className="btn btn-primary"
                  >
                    <span>View Case Study</span>
                    <SvgArrow />
                  </Link>
                </div>
              </div>

              {/* Realistic Visual Mockup */}
              <div
                style={{
                  backgroundColor: '#120f0f',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Mockup Chrome Header */}
                <div style={{ backgroundColor: '#1c1717', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></span>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></span>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#27c93f' }}></span>
                  </div>
                  <div style={{ flex: 1, backgroundColor: '#120f0f', padding: '3px 10px', borderRadius: '4px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                    rise2studio.com/creative-production
                  </div>
                </div>

                {/* Mockup Canvas */}
                <div style={{ padding: '28px', backgroundColor: '#151111' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '14px' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#ffffff' }}>RISE 2 STUDIO</span>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>STREAM // 4K 60FPS</span>
                  </div>
                  <div style={{ height: '160px', backgroundColor: '#211b1b', borderRadius: '4px', border: '1px dashed rgba(255, 255, 255, 0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>CINEMATIC SHOWREEL PREVIEW</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '16px' }}>
                    <div style={{ height: '48px', backgroundColor: '#1a1414', borderRadius: '4px', padding: '8px' }}>
                      <div style={{ width: '40%', height: '4px', backgroundColor: 'var(--primary)', marginBottom: '6px' }}></div>
                      <div style={{ width: '70%', height: '3px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
                    </div>
                    <div style={{ height: '48px', backgroundColor: '#1a1414', borderRadius: '4px', padding: '8px' }}>
                      <div style={{ width: '40%', height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.3)', marginBottom: '6px' }}></div>
                      <div style={{ width: '70%', height: '3px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
                    </div>
                    <div style={{ height: '48px', backgroundColor: '#1a1414', borderRadius: '4px', padding: '8px' }}>
                      <div style={{ width: '40%', height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.3)', marginBottom: '6px' }}></div>
                      <div style={{ width: '70%', height: '3px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==============================================================
              PROJECT 02 & 03: Asymmetric Two-Column Split (Cuts + Winkler)
              ============================================================== */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(28px, 4vw, 40px)'
            }}
          >
            {/* Project 02: Cuts Clothing */}
            <div
              style={{
                backgroundColor: '#1a1515',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.1)', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {p2.category}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{p2.industry}</span>
                </div>

                <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                  {p2.title}
                </h3>

                <p style={{ fontSize: '0.96rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '20px' }}>
                  {p2.desc}
                </p>

                {/* Functional Deliverables Tag */}
                <div style={{ backgroundColor: '#211a1a', padding: '14px', borderRadius: '4px', marginBottom: '24px', borderLeft: '2px solid var(--primary)' }}>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', marginBottom: '4px' }}>KEY ARCHITECTURE</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    Custom Liquid 2.0 theme, slide-out dynamic cart drawer, and 1-click Shop Pay checkout.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>{p2.timeline}</span>
                <Link to={`/portfolio/${p2.id}`} className="btn btn-secondary" style={{ padding: '0 18px', height: '40px', fontSize: '0.86rem' }}>
                  <span>Case Study</span>
                  <SvgArrow />
                </Link>
              </div>
            </div>

            {/* Project 03: Winkler Hotels */}
            <div
              style={{
                backgroundColor: '#1a1515',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.1)', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {p3.category}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{p3.industry}</span>
                </div>

                <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                  {p3.title}
                </h3>

                <p style={{ fontSize: '0.96rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '20px' }}>
                  {p3.desc}
                </p>

                {/* Functional Deliverables Tag */}
                <div style={{ backgroundColor: '#211a1a', padding: '14px', borderRadius: '4px', marginBottom: '24px', borderLeft: '2px solid var(--primary)' }}>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', marginBottom: '4px' }}>DIRECT RESERVATION ENGINE</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    Real-time PMS booking integration, multi-language support (EN, DE, IT), and responsive suite visualizer.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>{p3.timeline}</span>
                <Link to={`/portfolio/${p3.id}`} className="btn btn-secondary" style={{ padding: '0 18px', height: '40px', fontSize: '0.86rem' }}>
                  <span>Case Study</span>
                  <SvgArrow />
                </Link>
              </div>
            </div>
          </div>

          {/* ==============================================================
              PROJECT 04: Technical Dashboard/Platform Showcase (Flow Trix)
              ============================================================== */}
          <div
            style={{
              backgroundColor: '#1b1616',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: 'clamp(28px, 4vw, 40px)',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
                gap: 'clamp(28px, 4vw, 48px)',
                alignItems: 'center'
              }}
            >
              {/* Terminal Code / API Pipeline Frame */}
              <div
                style={{
                  backgroundColor: '#0f0c0c',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  padding: '20px 24px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  lineHeight: 1.65,
                  color: '#e0dede'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '10px', marginBottom: '14px', color: 'var(--text-dim)' }}>
                  <span>FLOW-TRIX // WORKFLOW ENGINE</span>
                  <span style={{ color: 'var(--primary)' }}>STATUS: ACTIVE</span>
                </div>
                <div style={{ color: 'var(--primary)', marginBottom: '8px' }}>
                  &gt; GET /api/v2/pipelines/orchestrate
                </div>
                <div style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>
                  &#123; "status": 200, "rbac": "enforced", "kanban": "synced" &#125;
                </div>
                <div style={{ borderTop: '1px dashed rgba(255, 255, 255, 0.1)', paddingTop: '10px', color: 'var(--text-dim)', fontSize: '0.76rem' }}>
                  // Automated recurring invoice generation and multi-tier user role validation
                </div>
              </div>

              {/* Description & Link */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.1)', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {p4.category}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{p4.industry}</span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.02em' }}>
                  {p4.title} — Enterprise SaaS & Automation
                </h3>

                <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '22px' }}>
                  {p4.solution} Built with role-based access control, interactive drag-and-drop workflow boards, and automated recurring billing generation.
                </p>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link
                    to={`/portfolio/${p4.id}`}
                    className="btn btn-secondary"
                  >
                    <span>View Technical Case Study</span>
                    <SvgArrow />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
