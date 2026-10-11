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
        borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        padding: '36px 0',
        backgroundColor: '#0A0A0A',
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
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                color: '#D32525',
                letterSpacing: '0.12em',
                fontWeight: 700
              }}
            >
              EXECUTION PIPELINE // BUILT AROUND YOUR BUSINESS GOALS
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              width: '100%',
              alignItems: 'center'
            }}
          >
            {capabilities.map((cap, idx) => (
              <div
                key={cap.title}
                style={{
                  padding: '16px 18px',
                  backgroundColor: '#0E0E0E',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '0px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: '#D32525',
                    fontWeight: 800
                  }}
                >
                  {cap.step}
                </span>
                <div>
                  <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>
                    {cap.title}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#888888', fontFamily: 'var(--font-mono)' }}>
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
