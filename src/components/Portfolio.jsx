import React, { useState } from 'react';
import { agencyData } from '../data/agencyData.js';
import CaseStudyModal from './CaseStudyModal.jsx';

export default function Portfolio({ onStartProjectWithContext }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Web Development', 'E-Commerce', 'Custom Web Applications', 'UI/UX Design'];

  const filteredPortfolio = selectedCategory === 'All'
    ? agencyData.portfolio
    : agencyData.portfolio.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">PROVEN COMMERCIAL WORK</span>
          <h2>Digital Products That Move the Needle</h2>
          <p>
            Explore our recent client engagements across high-growth startups, luxury commerce, SaaS ecosystems, and performance media.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '48px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="btn"
              style={{
                padding: '8px 20px',
                fontSize: '0.84rem',
                borderRadius: '0px',
                backgroundColor: selectedCategory === cat ? '#00D8FF' : '#141414',
                color: '#ffffff',
                fontWeight: selectedCategory === cat ? 700 : 500,
                boxShadow: 'none',
                border: selectedCategory === cat ? '1px solid #00D8FF' : '1px solid rgba(255, 255, 255, 0.15)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredPortfolio.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px',
                border: '1px solid var(--border-subtle)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle Ambient Color Bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: `linear-gradient(90deg, ${project.accent}, transparent)`
                }}
              />

              {/* Dark Browser Frame Mockup */}
              <div
                style={{
                  width: '100%',
                  height: '175px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#0c0a09',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Browser Top Bar */}
                <div
                  style={{
                    height: '28px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 10px',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                  </div>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                    kifaltech.com/case-studies/{project.id}
                  </span>
                  <span style={{ fontSize: '0.65rem', color: '#10b981', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    ● 200 OK
                  </span>
                </div>

                {/* Browser Interface Body */}
                <div
                  style={{
                    flex: 1,
                    padding: '14px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: `radial-gradient(ellipse at top left, ${project.accent}15 0%, rgba(23, 19, 19, 0.95) 75%)`,
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: project.accent, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {project.category}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-emerald)',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)'
                      }}
                    >
                      {project.metrics}
                    </span>
                  </div>

                  <div style={{ textAlign: 'center', margin: 'auto 0' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
                      {project.title}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                    <span>Production Architecture</span>
                    <span style={{ fontFamily: 'var(--font-mono)' }}>{project.year}</span>
                  </div>
                </div>
              </div>

              <div>
                {/* Meta Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: project.accent,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {project.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    {project.year}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {project.summary}
                </p>

                {/* Key Result Pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    color: 'var(--accent-emerald)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    marginBottom: '24px'
                  }}
                >
                  <span>✦</span>
                  <span>{project.metrics}</span>
                </div>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '28px' }}>
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 9px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: 'var(--text-dim)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => setActiveModalProject(project)}
                className="btn btn-secondary"
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  padding: '12px 18px',
                  fontSize: '0.88rem'
                }}
              >
                <span>View Full Case Study</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onStartSimilarProject={(proj) => onStartProjectWithContext(proj)}
        />
      )}
    </section>
  );
}
