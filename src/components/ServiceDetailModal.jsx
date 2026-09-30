import React from 'react';

export default function ServiceDetailModal({ service, onClose, onInquire }) {
  if (!service) return null;

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  const SvgCheck = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
      <path d="M3 8.5l3.5 3.5 6.5-7"/>
    </svg>
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
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

        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--primary-light)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              SERVICE {service.number}
            </span>
            <span style={{ color: 'var(--text-dim)' }}>|</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              {service.category}
            </span>
          </div>

          <h3 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '12px' }}>
            {service.title}
          </h3>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
            {service.shortDesc}
          </p>
        </div>

        {/* Deliverables */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '24px 0',
            marginBottom: '28px'
          }}
        >
          <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '14px' }}>
            What is Included in This Service
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
            {service.deliverables.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem' }}>
                <SvgCheck />
                <span style={{ color: 'var(--text-main)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '10px' }}>
            Business Value & Alignment
          </h4>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>
            Every solution we deliver under {service.title} is designed with strict adherence to industry best practices, fast execution speed, and measurable business impact, ensuring high ROI and dependable ongoing support.
          </p>
        </div>

        {/* Action CTAs */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <button
            onClick={() => onInquire(service)}
            className="btn btn-primary"
            style={{ flex: 1, padding: '13px' }}
          >
            <span>Get a Quote for {service.title}</span>
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
