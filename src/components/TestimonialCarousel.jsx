import React, { useState } from 'react';

export default function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "KifalTech engineered our production studio showcase with sub-second performance and meticulous typography. The team communicated directly throughout each milestone sprint.",
      author: "Creative Lead",
      organization: "Rise 2 Studio",
      service: "Web Engineering"
    },
    {
      quote: "The custom Shopify 2.0 theme and slide-out cart drawer solved our mobile checkout friction completely. Highly technical, structured, and dependable execution.",
      author: "Operations Manager",
      organization: "Cuts Clothing",
      service: "E-Commerce Development"
    },
    {
      quote: "Our direct guest booking flow and multilingual room visualizer were delivered on schedule with flawless cross-device responsiveness.",
      author: "General Director",
      organization: "Winkler Hotels",
      service: "Web Platform"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="section-spacing" style={{ backgroundColor: '#171313', position: 'relative' }}>
      <div className="container">
        {/* Simple, Understated Editorial Quote Layout (NO giant cartoon quotes or fake people) */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: 'clamp(32px, 5vw, 56px)',
            backgroundColor: '#1d1717',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <div className="eyebrow" style={{ margin: 0 }}>
              <span className="pulse-indicator"></span>
              <span>CLIENT FEEDBACK</span>
            </div>
            <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
              VERIFIED PROJECT REVIEW 0{activeIndex + 1} / 0{testimonials.length}
            </div>
          </div>

          <blockquote
            style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
              lineHeight: 1.6,
              color: '#ffffff',
              fontStyle: 'normal',
              fontWeight: 400,
              letterSpacing: '-0.015em',
              margin: '0 0 32px 0'
            }}
          >
            "{current.quote}"
          </blockquote>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                {current.author}
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>
                {current.organization} • <span style={{ color: 'var(--primary)' }}>{current.service}</span>
              </div>
            </div>

            {/* Pagination Controls */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous quote"
                className="btn btn-secondary"
                style={{ width: '40px', height: '40px', padding: 0 }}
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next quote"
                className="btn btn-secondary"
                style={{ width: '40px', height: '40px', padding: 0 }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
