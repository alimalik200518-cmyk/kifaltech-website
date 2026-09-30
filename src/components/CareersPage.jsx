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
    role: '',
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
      id: "senior-fullstack-react",
      title: "Senior Full-Stack React / Next.js Engineer",
      type: "Full-Time • 100% Remote",
      location: "Global",
      dept: "Engineering",
      desc: "We are seeking a senior engineer with deep proficiency in React 18, Next.js (App Router), TypeScript, and Node.js. You will lead architecture decisions for international client platforms, optimize Core Web Vitals, and build robust API integrations.",
      reqs: [
        "4+ years building production web applications in React / TypeScript",
        "Expertise in modern state management, SSR, edge caching, and server actions",
        "Deep understanding of Google Core Web Vitals and performance profiling",
        "Experience collaborating via Git, PR code reviews, and Figma token handoffs"
      ]
    },
    {
      id: "senior-shopify-developer",
      title: "Senior Shopify Plus Developer",
      type: "Full-Time • 100% Remote",
      location: "Global",
      dept: "E-Commerce",
      desc: "Architect and build high-converting Shopify 2.0 bespoke themes using Liquid, Storefront API, and headless architectures for fast-growing DTC retail brands.",
      reqs: [
        "3+ years developing custom Shopify Online Store 2.0 themes (Liquid/JSON)",
        "Deep experience with Shopify API, checkout extensibility, and app integrations",
        "Obsession with mobile UX, instant cart drawers, and page speed optimization"
      ]
    },
    {
      id: "lead-uiux-designer",
      title: "Lead UI/UX & Design Systems Designer",
      type: "Full-Time • 100% Remote",
      location: "Global",
      dept: "Design & Creative",
      desc: "Design clean, high-conversion web interfaces, design token libraries, and brand systems for ambitious global software clients. Zero AI templates; 100% intentional human design.",
      reqs: [
        "Strong portfolio demonstrating modern web product and agency design",
        "Mastery of Figma components, auto-layout, variable tokens, and design handoff",
        "Rigorous adherence to typography hierarchy and WCAG 2.1 AA accessibility"
      ]
    },
    {
      id: "technical-seo-specialist",
      title: "Technical SEO & Performance Specialist",
      type: "Part-Time / Contract • Remote",
      location: "Global",
      dept: "Growth & Marketing",
      desc: "Execute technical SEO crawl remediation, rich snippet JSON-LD structured data graphs, and Core Web Vitals audits across client web applications.",
      reqs: [
        "Demonstrated track record optimizing large-scale websites for Google organic search",
        "Deep knowledge of Schema.org, canonical architectures, and indexation controls",
        "Proficiency with Google Search Console, Ahrefs, and Screaming Frog"
      ]
    }
  ];

  const handleApply = (e) => {
    e.preventDefault();
    const refCode = `KT-APP-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppRef(refCode);

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_applications') || '[]');
      const newApp = {
        id: refCode,
        timestamp: new Date().toISOString(),
        role: applicant.role || (selectedRole ? selectedRole.title : 'General Engineering'),
        applicant: { ...applicant }
      };
      existing.unshift(newApp);
      localStorage.setItem('kifaltech_applications', JSON.stringify(existing));
      localStorage.setItem('kifal_career_ref', refCode);
    } catch (err) {
      console.warn('Could not persist application to localStorage:', err);
    }

    setApplied(true);
  };

  const copyRefCode = () => {
    if (appRef) {
      navigator.clipboard?.writeText(appRef);
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
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title="Careers & Open Engineering Positions | KifalTech"
        description="Join KifalTech's remote-first engineering and design collective. Explore open roles in React, Next.js, Shopify Plus, UI/UX design, and technical SEO."
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

          <div className="section-header" style={{ maxWidth: '840px', textAlign: 'left', margin: '0 0 50px 0' }}>
            <span className="eyebrow">Work With Us</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
              Build Exceptional Software with a Passionate Remote Team
            </h1>
            <p style={{ fontSize: '1.12rem' }}>
              At KifalTech, we value craft, intellectual honesty, and meaningful client impact over corporate red tape. Join an agile engineering team delivering modern digital solutions worldwide.
            </p>
          </div>

          {/* Value Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '60px' }}>
            <div className="agency-card" style={{ padding: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '8px' }}>100% Remote Flexibility</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>Work from wherever you are most productive. We prioritize output, clear communication, and well-structured code over clock-watching.</p>
            </div>
            <div className="agency-card" style={{ padding: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '8px' }}>Modern Tech Stacks</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>Work with React 18, Next.js App Router, TypeScript, TailwindCSS, and cloud microservices on real production platforms.</p>
            </div>
            <div className="agency-card" style={{ padding: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '8px' }}>Growth & Ownership</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>Collaborate directly with senior engineering leads and international clients with full architectural agency.</p>
            </div>
          </div>

          {/* Open Roles */}
          <h2 style={{ fontSize: '2rem', marginBottom: '24px', color: 'var(--text-white)' }}>
            Current Openings
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '80px' }}>
            {positions.map((pos) => (
              <div key={pos.id} className="agency-card" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', marginBottom: '16px' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-light)', textTransform: 'uppercase' }}>{pos.dept}</span>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--text-white)', marginTop: '4px' }}>{pos.title}</h3>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', padding: '6px 14px', borderRadius: 'var(--radius-full)', background: 'var(--bg-subtle)', color: 'var(--accent-emerald)', border: '1px solid var(--border-subtle)' }}>
                    {pos.type}
                  </span>
                </div>

                <p style={{ fontSize: '0.96rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '20px' }}>
                  {pos.desc}
                </p>

                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>KEY QUALIFICATIONS:</span>
                  <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.7 }}>
                    {pos.reqs.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedRole(pos);
                    setApplicant((prev) => ({ ...prev, role: pos.title }));
                    const el = document.getElementById('apply-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-primary"
                  style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                >
                  <span>Apply for this Role</span>
                  <SvgArrow />
                </button>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div id="apply-section" className="agency-card" style={{ padding: 'clamp(32px, 5vw, 48px)', border: '1px solid var(--border-medium)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '8px', color: 'var(--text-white)' }}>
              {selectedRole ? `Apply: ${selectedRole.title}` : "Direct Application & Talent Network"}
            </h3>
            <p style={{ fontSize: '0.94rem', marginBottom: '28px' }}>
              Don't see your exact role? Send us your GitHub or portfolio link. We are always looking for talented engineers and designers.
            </p>

            {applied ? (
              <div style={{ padding: '36px 24px', textAlign: 'center', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.6rem' }}>✔</div>
                <h4 style={{ fontSize: '1.35rem', color: 'var(--text-white)', marginBottom: '8px' }}>Application Successfully Received</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 20px auto' }}>
                  Thank you, <strong>{applicant.name}</strong>. Our engineering leads will review your work and reply to <strong>{applicant.email}</strong>.
                </p>

                {appRef && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', padding: '10px 18px', borderRadius: 'var(--radius-sm)', marginBottom: '24px' }}>
                    <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Application Ref:</span>
                    <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', fontSize: '0.95rem' }}>{appRef}</strong>
                    <button
                      type="button"
                      onClick={copyRefCode}
                      className="btn"
                      style={{ padding: '4px 10px', fontSize: '0.75rem', background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)' }}
                    >
                      {copiedRef ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                )}

                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setApplied(false);
                      setApplicant({ name: '', email: '', portfolio: '', role: '', note: '' });
                    }}
                    className="btn btn-outline"
                    style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApply} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                <div>
                  <label className="form-label">Your Name</label>
                  <input type="text" required placeholder="Sam Wilson" className="form-input" value={applicant.name} onChange={(e) => setApplicant({ ...applicant, name: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input type="email" required placeholder="sam@example.com" className="form-input" value={applicant.email} onChange={(e) => setApplicant({ ...applicant, email: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">Target Role</label>
                  <input type="text" required placeholder="Role (e.g. Senior Frontend)" className="form-input" value={applicant.role} onChange={(e) => setApplicant({ ...applicant, role: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">Portfolio / GitHub / LinkedIn URL</label>
                  <input type="url" required placeholder="https://github.com/yourhandle" className="form-input" value={applicant.portfolio} onChange={(e) => setApplicant({ ...applicant, portfolio: e.target.value })} />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Brief Introduction & Why KifalTech</label>
                  <textarea rows={3} placeholder="Tell us a little about your experience and the projects you enjoy building..." className="form-textarea" value={applicant.note} onChange={(e) => setApplicant({ ...applicant, note: e.target.value })} />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <button type="submit" className="btn btn-primary" style={{ padding: '14px 32px' }}>
                    <span>Submit Application</span>
                    <SvgArrow />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
