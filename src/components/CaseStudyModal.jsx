import React from 'react';

export default function CaseStudyModal({ project, onClose, onStartSimilarProject }) {
  if (!project) return null;

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-dim)',
            fontSize: '1.3rem',
            cursor: 'pointer',
            padding: '4px'
          }}
          aria-label="Close Modal"
        >
          ✕
        </button>

        <div style={{ marginBottom: '20px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            {project.category}
          </span>
          <h3 style={{ fontSize: '2.1rem', color: '#ffffff', marginBottom: '8px' }}>
            {project.title}
          </h3>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
            Client: <strong style={{ color: '#ffffff' }}>{project.client}</strong>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '24px 0',
            marginBottom: '28px'
          }}
        >
          <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '10px' }}>
            Project Overview
          </h4>
          <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
            {project.desc}
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '12px' }}>
            Services Provided
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.services.map((s, idx) => (
              <span
                key={idx}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--bg-main)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem'
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <button
            onClick={() => onStartSimilarProject(project)}
            className="btn btn-primary"
            style={{ flex: 1, padding: '13px' }}
          >
            <span>Start a Similar Project</span>
            <SvgArrow />
          </button>
          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ padding: '13px 24px' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
