import React, { useState, useEffect } from 'react';
import SEOHead from './SEOHead.jsx';
import { Link } from './Router.jsx';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [applied, setApplied] = useState(false);
  const [appRef, setAppRef] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    portfolio: '',
    role: 'Senior React Engineer - Remote',
    note: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) {
      setAppRef(ref);
      localStorage.setItem('kifal_career_ref', ref);
    } else {
      const storedRef = localStorage.getItem('kifal_career_ref');
      if (storedRef) setAppRef(storedRef);
    }
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Careers", url: "https://kifaltech.com/careers" }
  ];

  const positions = [
    {
      id: "senior-react-engineer",
      title: "Senior React Engineer - Remote",
      type: "Full-Time • 100% Remote",
      department: "Software Engineering",
      locations: "Global (North America / South Asia Aligned)",
      desc: "Architect and scale production web applications using React 18, Next.js App Router, TypeScript, and edge cloud architectures. You will lead technical standards, build reusable component libraries, and optimize Google Core Web Vitals to sub-second thresholds.",
      responsibilities: [
        "Architect clean, modular React component hierarchies and client state solutions",
        "Lead technical reviews, Git branching hygiene, and PR feedback across our distributed team",
        "Optimize Core Web Vitals (LCP, CLS, INP) for enterprise web apps and Shopify headless builds",
        "Interface directly with US Product Leadership and client engineering teams via async Slack/Loom"
      ],
      qualifications: [
        "4+ years building high-traffic, production-grade applications with React & TypeScript",
        "Deep familiarity with SSR, Edge functions, TailwindCSS / modern Vanilla CSS tokens",
        "Proven experience writing clean, self-documenting code with automated tests"
      ]
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer - Remote",
      type: "Full-Time • 100% Remote",
      department: "Design Systems & Product",
      locations: "Global (North America / South Asia Aligned)",
      desc: "Design high-conversion interfaces, bespoke typography systems, and scalable design token libraries for global software startups and high-growth brands. Zero generic templates; strictly intentional, human-crafted design systems.",
      responsibilities: [
        "Design world-class responsive web applications, portals, and Shopify storefronts in Figma",
        "Build and govern multi-brand design systems, token variables, and micro-interaction states",
        "Conduct user journeys, wireframing, and interactive prototypes for stakeholder alignment",
        "Collaborate closely with technical leads to ensure pixel-perfect CSS implementation"
      ],
      qualifications: [
        "3+ years product design experience with a stellar portfolio of web applications or digital products",
        "Mastery of Figma components, autolayout, typography hierarchies, and WCAG AA accessibility",
        "Strong visual communication and ability to articulate design rationale clearly"
      ]
    }
  ];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const refCode = `KT-APP-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppRef(refCode);

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_applications') || '[]');
      const newApp = {
        id: refCode,
        destination: 'forms@kifaltech.com',
        timestamp: new Date().toISOString(),
        role: applicant.role,
        applicant: { ...applicant }
      };
      existing.unshift(newApp);
      localStorage.setItem('kifaltech_applications', JSON.stringify(existing));
      localStorage.setItem('kifal_career_ref', refCode);
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setApplied(true);
  };

  const copyRefCode = () => {
    if (appRef && navigator.clipboard) {
      navigator.clipboard.writeText(appRef);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  };

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      <SEOHead
        title="Careers | Build the Future from Anywhere | KifalTech"
        description="Join KifalTech's 100% remote global engineering and design collective bridging North America and South Asia. Explore open roles in React and UI/UX design."
        canonical="https://kifaltech.com/careers"
        breadcrumbs={breadcrumbs}
      />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Careers</span>
          </nav>

          {/* Hero Header */}
          <div style={{ maxWidth: '860px', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="pulse-indicator"></span>
              <span className="eyebrow" style={{ marginBottom: 0 }}>
                100% REMOTE GLOBAL DIGITAL AGENCY
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)', marginBottom: '20px', lineHeight: 1.12 }}>
              Build the Future from Anywhere.
            </h1>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              We are a distributed engineering collective intentionally bridging North America and South Asia. We value craftsmanship, intellectual honesty, and deep ownership over corporate red tape.
            </p>
          </div>

          {/* Authentic Culture Photographic Banner */}
          <div
            style={{
              marginBottom: '48px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: '#1b1616',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))'
            }}
          >
            <div style={{ position: 'relative', minHeight: '260px' }}>
              <img
                src="/images/culture/remote-cafe-workspace.jpg"
                alt="Laptop open on sunlit wooden cafe table next to notepad and espresso in authentic remote workspace"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  left: '14px',
                  backgroundColor: 'rgba(18, 14, 14, 0.88)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#ffffff'
                }}
              >
                ● 100% Remote • Work From Anywhere
              </div>
            </div>

            <div style={{ padding: 'clamp(28px, 4vw, 40px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                THE KIFALTECH WAY
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                Deep Work Over Bureaucracy
              </h3>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.68, color: 'var(--text-muted)', marginBottom: '18px' }}>
                We believe exceptional software is built by engineers with continuous blocks of uninterrupted focus, clear architectural specifications, and the trust to deliver high-impact results from wherever they work best.
              </p>
              <div style={{ display: 'flex', gap: '16px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', flexWrap: 'wrap' }}>
                <span>✦ Async Documentation</span>
                <span>✦ Flexible Hours</span>
                <span>✦ Direct Ownership</span>
              </div>
            </div>
          </div>

          {/* Remote Culture Pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '68px',
              paddingBottom: '52px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div className="agency-card" style={{ padding: '32px' }}>
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                CULTURE 01
              </span>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '12px' }}>
                Bridging North America &amp; South Asia
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.68, color: 'var(--text-muted)' }}>
                Our leadership spans the United States and Pakistan. We operate with asynchronous discipline, clear documentation, and collaborative timezone crossover so you do your best work without 24/7 meetings.
              </p>
            </div>

            <div className="agency-card" style={{ padding: '32px' }}>
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                CULTURE 02
              </span>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '12px' }}>
                Uncompromising Engineering Standards
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.68, color: 'var(--text-muted)' }}>
                No messy legacy monoliths or bloated site builders. We engineer performant React applications, headless Shopify storefronts, and cloud microservices benchmarked for sub-second speeds.
              </p>
            </div>

            <div className="agency-card" style={{ padding: '32px' }}>
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                CULTURE 03
              </span>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '12px' }}>
                Autonomy &amp; Transparent Merit
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.68, color: 'var(--text-muted)' }}>
                You work directly with senior architects like Muhammad Ali (Technical Lead) and Henry (Head of Product). Your contributions have direct impact on high-growth global clients.
              </p>
            </div>
          </div>

          {/* Open Roles Section */}
          <div style={{ marginBottom: '68px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
              <div>
                <span className="eyebrow">Current Openings</span>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
                  Open Remote Roles
                </h2>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                ALL POSITIONS 100% REMOTE • APPLICATIONS SENT TO:{' '}
                <a
                  href="mailto:info@kifaltech.com"
                  className="email-mailto-link"
                  style={{ fontWeight: 600 }}
                >
                  info@kifaltech.com
                </a>
              </div>
            </div>

            {/* Clean List View for Jobs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {positions.map((pos) => (
                <div
                  key={pos.id}
                  className="agency-card"
                  style={{
                    padding: '36px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                          {pos.department}
                        </span>
                        <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-emerald)' }}>
                          {pos.locations}
                        </span>
                      </div>
                      <h3 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.85rem)', color: '#ffffff', margin: 0 }}>
                        {pos.title}
                      </h3>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', padding: '6px 14px', borderRadius: 'var(--radius-full)', background: 'rgba(255, 255, 255, 0.04)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        {pos.type}
                      </span>
                      <a
                        href={`mailto:info@kifaltech.com?subject=Application:%20${encodeURIComponent(pos.title)}`}
                        className="btn btn-secondary"
                        style={{ height: '38px', padding: '0 18px', fontSize: '0.84rem' }}
                      >
                        Email CV Directly
                      </a>
                      <button
                        onClick={() => {
                          setSelectedRole(pos);
                          setApplicant((prev) => ({ ...prev, role: pos.title }));
                          const el = document.getElementById('apply-form-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn btn-primary"
                        style={{ height: '38px', padding: '0 20px', fontSize: '0.84rem' }}
                      >
                        <span>Apply Now</span>
                        <SvgArrow />
                      </button>
                    </div>
                  </div>

                  <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '24px', maxWidth: '920px' }}>
                    {pos.desc}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div>
                      <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '10px', fontWeight: 600 }}>
                        KEY RESPONSIBILITIES:
                      </span>
                      <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.65 }}>
                        {pos.responsibilities.map((r, i) => (
                          <li key={i} style={{ marginBottom: '6px' }}>{r}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '10px', fontWeight: 600 }}>
                        IDEAL PROFILE:
                      </span>
                      <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.65 }}>
                        {pos.qualifications.map((q, i) => (
                          <li key={i} style={{ marginBottom: '6px' }}>{q}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Minimalist Application Form */}
          <div
            id="apply-form-section"
            className="agency-card"
            style={{
              padding: 'clamp(36px, 5vw, 56px)',
              border: '1px solid rgba(139, 92, 246, 0.25)',
              backgroundColor: '#141010',
              maxWidth: '880px',
              margin: '0 auto 80px auto'
            }}
          >
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
                <span className="eyebrow" style={{ marginBottom: 0 }}>
                  TALENT INTAKE
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-dim)' }}>
                  DIRECT CHANNEL:{' '}
                  <a
                    href="mailto:info@kifaltech.com"
                    className="email-mailto-link"
                    style={{ fontWeight: 600 }}
                  >
                    info@kifaltech.com
                  </a>
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', color: '#ffffff', marginBottom: '8px' }}>
                {selectedRole ? `Submit Application: ${selectedRole.title}` : "Join the KifalTech Remote Collective"}
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Submit your credentials and portfolio below. Applications route directly to technical leadership.
              </p>
            </div>

            {applied ? (
              <div className="transmission-success-card" style={{ padding: '36px 28px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.6rem' }}>
                  ✓
                </div>
                <h4 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '8px' }}>
                  Transmission successful. Our technical leads will be in touch within 2 business hours.
                </h4>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                  Thank you, <strong>{applicant.name}</strong>. Your profile for <strong>{applicant.role}</strong> has been transmitted directly to our engineering leads.
                </p>

                {appRef && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.12)', padding: '10px 18px', borderRadius: 'var(--radius-xs)', marginBottom: '24px' }}>
                    <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>TICKET REF:</span>
                    <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', fontSize: '0.98rem' }}>{appRef}</strong>
                    <button
                      type="button"
                      onClick={copyRefCode}
                      className="btn"
                      style={{ padding: '4px 10px', fontSize: '0.74rem', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.14)', color: '#ffffff' }}
                    >
                      {copiedRef ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                )}

                <div>
                  <button
                    onClick={() => {
                      setApplied(false);
                      setApplicant({ name: '', email: '', portfolio: '', role: 'Senior React Engineer - Remote', note: '' });
                    }}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.84rem', padding: '8px 20px' }}
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="agency-form">
                <div className="agency-form-grid" style={{ marginBottom: '24px' }}>
                  {/* Full Name */}
                  <div className="agency-form-col-6">
                    <div className="agency-field-group">
                      <label className="floating-label active">
                        Full Name <span className="required-asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={applicant.name}
                        onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                        placeholder="Your full legal or preferred name"
                        className="agency-input-minimal"
                      />
                      <div className="field-underline-bar" />
                    </div>
                  </div>

                  {/* Work Email */}
                  <div className="agency-form-col-6">
                    <div className="agency-field-group">
                      <label className="floating-label active">
                        Work / Personal Email <span className="required-asterisk">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={applicant.email}
                        onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="agency-input-minimal"
                      />
                      <div className="field-underline-bar" />
                    </div>
                  </div>

                  {/* Target Role Selector */}
                  <div className="agency-form-col-6">
                    <div className="agency-field-group">
                      <label className="floating-label active">
                        Target Position <span className="required-asterisk">*</span>
                      </label>
                      <select
                        name="role"
                        required
                        value={applicant.role}
                        onChange={(e) => setApplicant({ ...applicant, role: e.target.value })}
                        className="agency-select-minimal"
                      >
                        <option value="Senior React Engineer - Remote">Senior React Engineer - Remote</option>
                        <option value="UI/UX Designer - Remote">UI/UX Designer - Remote</option>
                        <option value="General Engineering Network">General Engineering Network</option>
                      </select>
                    </div>
                  </div>

                  {/* GitHub or Portfolio Link */}
                  <div className="agency-form-col-6">
                    <div className="agency-field-group">
                      <label className="floating-label active">
                        GitHub / Portfolio URL <span className="required-asterisk">*</span>
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        required
                        value={applicant.portfolio}
                        onChange={(e) => setApplicant({ ...applicant, portfolio: e.target.value })}
                        placeholder="https://github.com/username or portfolio link"
                        className="agency-input-minimal"
                      />
                      <div className="field-underline-bar" />
                    </div>
                  </div>

                  {/* Experience Summary Note */}
                  <div className="agency-form-col-12">
                    <div className="agency-field-group">
                      <label className="floating-label active">
                        Brief Background &amp; Standout Projects <span className="required-asterisk">*</span>
                      </label>
                      <textarea
                        name="note"
                        required
                        rows="3"
                        value={applicant.note}
                        onChange={(e) => setApplicant({ ...applicant, note: e.target.value })}
                        placeholder="Summarize your tech stack expertise, recent production wins, or links to live code..."
                        className="agency-textarea-minimal"
                      />
                      <div className="field-underline-bar" />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    DIRECT TRANSMISSION TARGET:{' '}
                    <a
                      href="mailto:info@kifaltech.com"
                      className="email-mailto-link"
                      style={{ fontWeight: 600 }}
                    >
                      info@kifaltech.com
                    </a>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <a
                      href="mailto:info@kifaltech.com?subject=Direct%20Career%20Application"
                      className="btn btn-secondary"
                      style={{ fontSize: '0.86rem', padding: '12px 20px' }}
                    >
                      Email Direct
                    </a>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ fontSize: '0.9rem', padding: '12px 26px' }}
                    >
                      <span>Transmit Application</span>
                      <SvgArrow />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
