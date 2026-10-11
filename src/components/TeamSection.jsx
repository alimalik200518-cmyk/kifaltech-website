import React from 'react';
import { agencyData } from '../data/agencyData.js';
import { IconLinkedIn, IconGitHub, IconTwitterX } from './SocialIcons.jsx';

export default function TeamSection() {
  const { founders } = agencyData.company;

  return (
    <section id="team" className="section-spacing" style={{ backgroundColor: '#141010', position: 'relative', borderTop: '1px solid rgba(255, 255, 255, 0.05)', scrollMarginTop: '100px' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '52px' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            <span className="pulse-indicator"></span>
            <span>FOUNDING LEADERSHIP & CORE TEAM</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              lineHeight: 1.15,
              color: '#ffffff',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginBottom: '16px'
            }}
          >
            Meet Our Founders & Team
          </h2>

          <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
            A dedicated collective of software engineers, UI/UX designers, and systems architects.
          </p>
        </div>

        {/* 2 Core Founder Cards Grid */}
        <div className="team-grid">
          {/* Card 1: Ali Muhammad */}
          <div className="team-card">
            <div className="team-card-inner">
              <div className="team-card-photo-wrapper">
                <img
                  src="/images/team/ali-muhammad.jpg"
                  alt="Ali Muhammad - Co-Founder & Technical Lead at KifalTech"
                  className="team-card-photo"
                  loading="lazy"
                />
                <div className="team-card-photo-overlay" />
                <span className="team-card-badge">TECHNICAL LEAD</span>
              </div>

              <div className="team-card-content">
                <div>
                  <h3 className="team-card-title">Ali Muhammad</h3>
                  <div className="team-card-role">
                    <span>Co-Founder & Technical Lead</span>
                  </div>

                  <p className="team-card-bio">
                    Full-stack engineer specialized in high-performance cloud architecture & React systems.
                  </p>

                  <div className="team-card-tags">
                    <span className="team-card-tag">Cloud Architecture</span>
                    <span className="team-card-tag">React Systems</span>
                    <span className="team-card-tag">Node.js Serverless</span>
                    <span className="team-card-tag">High-Throughput APIs</span>
                  </div>
                </div>

                <div className="team-card-footer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
                    <span>Direct Technical Lead</span>
                  </div>

                  <div className="team-card-socials">
                    <a
                      href="https://linkedin.com/in/ali-muhammad-kifaltech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-member-social-link"
                      title="Ali Muhammad on LinkedIn"
                      aria-label="Ali Muhammad on LinkedIn"
                    >
                      <IconLinkedIn size={14} />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/ali-kifaltech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-member-social-link"
                      title="Ali Muhammad on GitHub"
                      aria-label="Ali Muhammad on GitHub"
                    >
                      <IconGitHub size={14} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Henry */}
          <div className="team-card">
            <div className="team-card-inner">
              <div className="team-card-photo-wrapper">
                <img
                  src="/images/team/henry.jpg"
                  alt="Henry - Co-Founder & Head of Product at KifalTech"
                  className="team-card-photo"
                  loading="lazy"
                />
                <div className="team-card-photo-overlay" />
                <span className="team-card-badge">HEAD OF PRODUCT</span>
              </div>

              <div className="team-card-content">
                <div>
                  <h3 className="team-card-title">Henry</h3>
                  <div className="team-card-role">
                    <span>Co-Founder & Head of Product</span>
                  </div>

                  <p className="team-card-bio">
                    Lead UX strategist & project delivery expert, bridging commercial goals with clean interfaces.
                  </p>

                  <div className="team-card-tags">
                    <span className="team-card-tag">UX Strategy</span>
                    <span className="team-card-tag">Design Systems</span>
                    <span className="team-card-tag">Product Delivery</span>
                    <span className="team-card-tag">Conversion Architecture</span>
                  </div>
                </div>

                <div className="team-card-footer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
                    <span>Direct Product Lead</span>
                  </div>

                  <div className="team-card-socials">
                    <a
                      href="https://linkedin.com/in/henry-kifaltech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-member-social-link"
                      title="Henry on LinkedIn"
                      aria-label="Henry on LinkedIn"
                    >
                      <IconLinkedIn size={14} />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://x.com/henry_kifaltech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-member-social-link"
                      title="Henry on Twitter / X"
                      aria-label="Henry on Twitter / X"
                    >
                      <IconTwitterX size={13} />
                      <span>Twitter/X</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetric Collective Collaboration Banner */}
        <div className="team-collab-banner">
          <div style={{ position: 'relative', minHeight: '260px', overflow: 'hidden' }}>
            <img
              src="/images/team/team-collab.jpg"
              alt="KifalTech Engineering and Product Collective in Session"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'contrast(1.05) brightness(0.92)'
              }}
              loading="lazy"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(28, 23, 23, 0.1) 0%, rgba(28, 23, 23, 0.85) 100%)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                background: 'rgba(19, 15, 15, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '6px 12px',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-white)'
              }}
            >
              KIFALTECH CORE STUDIO & ENGINEERING LAB
            </div>
          </div>

          <div style={{ padding: 'clamp(28px, 4vw, 40px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--primary-light)',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>IN-HOUSE ENGINEERING CULTURE</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
              <span style={{ color: 'var(--text-dim)' }}>ZERO OUTSOURCING</span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.25rem, 2.2vw, 1.7rem)',
                color: '#ffffff',
                marginBottom: '12px',
                lineHeight: 1.25,
                fontWeight: 700
              }}
            >
              Zero Account Managers. Direct Access to Senior Builders.
            </h3>

            <p style={{ fontSize: '0.94rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '22px' }}>
              Unlike bloated agency setups where your technical vision gets diluted across account managers and overseas brokerages, every KifalTech client collaborates directly with our founding engineers and product leads. From first discovery call to production deploy, the builders talking to you are the ones writing your code.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '6px', padding: '10px 14px' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-mono)' }}>100%</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '2px' }}>In-House Talents</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '6px', padding: '10px 14px' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-light)', fontFamily: 'var(--font-mono)' }}>&lt; 2 Hrs</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '2px' }}>SLA Lead Sync</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '6px', padding: '10px 14px' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#10b981', fontFamily: 'var(--font-mono)' }}>100% IP</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '2px' }}>Client Ownership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
