import React from 'react';
import { agencyData } from '../data/agencyData.js';

export default function About() {
  const { company } = agencyData;

  const coreValues = [
    {
      title: "Senior Engineering Only",
      desc: "No juniors practicing on your mission-critical code. Every project is led by senior full-stack architects with years of commercial production experience."
    },
    {
      title: "Radical Transparency",
      desc: "Fixed upfront pricing, itemized deliverables, shared Git repositories, and clear weekly sprint demos so you always know exactly where things stand."
    },
    {
      title: "Speed Without Compromise",
      desc: "We leverage battle-tested modern stacks, clean architectural components, and automated CI/CD pipelines to launch in weeks instead of quarters."
    },
    {
      title: "Complete Code & IP Ownership",
      desc: "You own 100% of the intellectual property, design source files, domain configurations, and code repositories from day one with zero lock-in."
    }
  ];

  return (
    <section id="about" className="section-spacing">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '56px', alignItems: 'center', marginBottom: '80px' }}>
          {/* Left: Mission & Story */}
          <div>
            <span className="section-tag">OUR ORIGIN & ETHOS</span>
            <h2 style={{ fontSize: '2.6rem', marginBottom: '20px' }}>
              Built to Eliminate Agency Headaches & Deliver Exceptional Code.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
              Kifal Tech was founded with a straightforward mission: to provide ambitious founders, brands, and enterprises with the caliber of engineering and design normally reserved for Silicon Valley tech giants.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '32px' }}>
              Too many agencies overcharge, drag out timelines, and deliver bloated, slow templates. We build custom, lightweight, high-performance web systems that scale gracefully, convert reliably, and give you a defensible technological edge.
            </p>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '16px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  150+
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                  Shipped Projects
                </div>
              </div>

              <div style={{ borderLeft: '2px solid var(--secondary)', paddingLeft: '16px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  14+
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                  Global Industries Served
                </div>
              </div>

              <div style={{ borderLeft: '2px solid var(--accent-emerald)', paddingLeft: '16px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  5.0 ★
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                  Average Client Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right: Core Values Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {coreValues.map((val, i) => (
              <div
                key={val.title}
                className="glass-card"
                style={{ padding: '28px 22px' }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    marginBottom: '16px'
                  }}
                >
                  0{i + 1}
                </div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>{val.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
