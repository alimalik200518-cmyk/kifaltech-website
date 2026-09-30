import React from 'react';

export default function Marquee() {
  const capabilities = [
    { step: '01', title: 'Strategy', desc: 'Architecture & Scope' },
    { step: '02', title: 'Design', desc: 'UX & Interface Systems' },
    { step: '03', title: 'Development', desc: 'Clean Full-Stack Code' },
    { step: '04', title: 'Optimization', desc: 'Core Web Vitals & Speed' },
    { step: '05', title: 'Support', desc: 'Long-Term SLA Maintenance' }
  ];

  return (
    <section
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '36px 0',
        backgroundColor: '#191414',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                color: 'var(--primary)',
                letterSpacing: '0.1em',
                fontWeight: 600
              }}
            >
              BUILT AROUND YOUR BUSINESS GOALS
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              width: '100%',
              alignItems: 'center'
            }}
          >
            {capabilities.map((cap, idx) => (
              <div
                key={cap.title}
                style={{
                  padding: '14px 18px',
                  backgroundColor: '#1f1919',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--primary)',
                    fontWeight: 700
                  }}
                >
                  {cap.step}
                </span>
                <div>
                  <div style={{ fontSize: '0.94rem', fontWeight: 600, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                    {cap.title}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    {cap.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
