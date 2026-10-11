// KifalTech - Halloween 2026 Campaign Configuration
// Set `enabled: false` to instantly and cleanly deactivate the entire Halloween theme & campaign.

export const HALLOWEEN_CONFIG = {
  // Master Kill-Switch (Disabled for high-contrast brutalist agency theme)
  enabled: false,

  // Campaign Information
  campaignName: "KifalTech Halloween 2026 Special",
  promoCode: "SPOOKY26",
  
  // Exact campaign end date: October 31, 2026 at 23:59:59 (Halloween midnight)
  targetDate: "2026-10-31T23:59:59",

  // Banner Content
  banner: {
    badge: "HALLOWEEN SPECIAL",
    text: "Reserve your Q4 sprint slot — Complimentary Core Web Vitals & Security Audit included with all projects.",
    ctaText: "Claim Offer",
    dismissible: true
  },

  // Advanced Animations & Interactions
  animations: {
    wireframePumpkin: true,
    cyberWebs: true,
    ghostButtonGlitch: true,
    terminalEasterEgg: true,
    phosphorCursor: true
  },

  // Dedicated Offer Section Content (reusing real KifalTech services & pricing anchors)
  offerSection: {
    eyebrow: "HALLOWEEN 2026 SPRINT INITIATIVE",
    title: "Seasonal Sprint Reservation & Architecture Perks",
    description: "Prepare your digital infrastructure for year-end traffic. Reserve your Q4 software engineering sprint before October 31, 2026 to unlock complimentary technical auditing, direct founder oversight, and guaranteed milestone delivery.",
    perks: [
      {
        icon: "zap",
        title: "Guaranteed Q4 Launch Window",
        desc: "Skip standard queue delays with prioritized sprint slot allocation before the November holiday code freeze."
      },
      {
        icon: "shield",
        title: "Complimentary Core Web Vitals & Security Audit",
        desc: "Full automated & manual Lighthouse 95+ performance review and OWASP vulnerability check included at $0."
      },
      {
        icon: "code",
        title: "Direct Founder Architecture Review",
        desc: "Personal code & UX strategy consultation with Muhammad Ali (Technical Lead) and Henry (Head of Product)."
      }
    ],
    featuredPackages: [
      {
        id: "hal-web",
        serviceId: "web-development",
        category: "Web Development",
        name: "Web Platform Sprint",
        turnaround: "2 – 4 Weeks",
        anchorPrice: "From $149 (Basic) to $799+ (Full Custom)",
        highlight: "Most Popular for Q4",
        features: [
          "React 18 / Next.js / TypeScript Modern Stack",
          "Lighthouse 95+ Core Web Vitals Guarantee",
          "Complimentary Security & Performance Audit",
          "Headless CMS or Custom Database Architecture",
          "100% Source Code Ownership & Git Repo Transfer",
          "30-Day Post-Launch SLA Warranty"
        ],
        promoBenefit: "Includes Free Performance Hardening & OWASP Audit ($450 value)"
      },
      {
        id: "hal-ecom",
        serviceId: "ecommerce",
        category: "Ecommerce Solution",
        name: "E-Commerce Velocity Sprint",
        turnaround: "2 – 5 Weeks",
        anchorPrice: "From $499 (Starter) to $999+ (Enterprise)",
        highlight: "Holiday Ready",
        features: [
          "Shopify 2.0 / Custom Headless Commerce",
          "High-Conversion Mobile-First Checkout Flow",
          "Multi-Currency Dynamic Pricing Integration",
          "Inventory, ERP & Payment Gateway Webhooks",
          "Speed Optimization (< 1.5s First Contentful Paint)",
          "24/7 Deployment Support During Peak Sales"
        ],
        promoBenefit: "Includes Free Conversion Rate Optimization (CRO) Review"
      },
      {
        id: "hal-uiux",
        serviceId: "web-design",
        category: "Web Design",
        name: "UI/UX & Design System Sprint",
        turnaround: "1 – 3 Weeks",
        anchorPrice: "From $149 (1-Page) to $650+ (Design System)",
        highlight: "Strategic Alignment",
        features: [
          "High-Fidelity Interactive Figma Prototype",
          "Design Tokens, Typography & Component Library",
          "UX Journey & Conversion Wireframing",
          "Developer-Handoff Ready with Clean Assets",
          "Tailored for International High-Trust Audiences",
          "Direct Review with Head of Product Henry"
        ],
        promoBenefit: "Includes Free Interactive Mobile Prototype & 30-Day Warranty"
      }
    ]
  },

  // Popup / Modal Settings
  modal: {
    title: "Unlock Your Halloween 2026 Sprint Perk",
    subtitle: "Use code SPOOKY26 during project kickoff for a complimentary Core Web Vitals & Security Audit ($450 value) plus priority Q4 sprint scheduling.",
    autoShowDelayMs: 12000, // 12 seconds
    exitIntentEnabled: true,
    storageKey: "kifaltech_halloween_dismissed_2026"
  }
};
