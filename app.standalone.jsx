// KifalTech - Comprehensive Multi-Page Standalone Application
// Includes all 11 Services, 12 Case Studies, About, Contact, Pricing, Quick Fix, 404,
// Dark/Light Theme Switcher, and Dynamic JSON-LD/SEO Management.

const { useState, useEffect, useContext, createContext } = React;

// 1. DATA LAYER & SEO STORE

// KifalTech - Authentic Business Content, Detail Pages Data & SEO Store
// Source of truth: https://kifaltech.com/

const agencyData = {
  company: {
    name: "KifalTech",
    legalName: "Kifal Tech Digital Solutions",
    tagline: "Powering Your Digital Future",
    headline: "We Build Smart Digital Solutions for Modern Businesses",
    subheadline: "KifalTech is a premier digital software and engineering agency delivering tailored web applications, Shopify storefronts, mobile apps, and full-funnel digital growth solutions that drive verifiable revenue.",
    story: "KifalTech was founded with a clear mission — to help businesses grow through smart, reliable, and future-ready digital solutions. What started as a passion for software craftsmanship has evolved into a trusted digital engineering firm serving international clients across North America, Europe, the Middle East, and Asia. We combine engineering precision, creative strategy, and reliable ongoing support to build digital assets that stand the test of time.",
    vision: "To harness technology creatively and rigorously, providing impactful digital platforms that optimize operations, elevate brand authority, and accelerate sustainable commercial growth for our clients.",
    mission: "Dedicated to delivering innovative, performant, and secure solutions tailored to each client's specific business objectives, backed by transparent communication, agile milestones, and 24/7 client care.",
    whatMakesUsSpecial: "Our blend of deep technical engineering, design sophistication, and unwavering commitment to client success sets us apart. Serving diverse enterprise and growth-stage brands globally, we ensure our solutions are modern, secure, and commercially impactful. By staying ahead of software architectures and digital marketing algorithms, KifalTech delivers dependable solutions with zero fluff and complete transparency.",
    email: "info@kifaltech.com",
    inquiryPhone: "+1 (828) 222-3848",
    intlPhone: "+1 (828) 222-3848",
    whatsapp: "+1 (828) 222-3848",
    headquarters: "151 Haywood St, Asheville, NC 28801, USA",
    globalCoverage: "Serving Clients Across North America, Europe, United Kingdom, UAE/Middle East & Worldwide",
    slaGuarantee: "2-Hour Response Time for International Clients",
    copyrightYear: "2026",
    siteUrl: "https://kifaltech.com",
    logoUrl: "https://kifaltech.com/wp-content/uploads/2026/01/ChatGPT_Image_Jan_30__2026__05_47_21_AM-removebg-preview-e1769735204433.png",
    faviconUrl: "https://kifaltech.com/wp-content/uploads/2026/01/cropped-ChatGPT_Image_Jan_30__2026__05_47_21_AM-removebg-preview-e1769735204433-192x192.png",
    capabilities: [
      { name: "Strategy", desc: "Technical architecture & scope definition" },
      { name: "Design", desc: "User-centric interface & interactive prototypes" },
      { name: "Development", desc: "Modern, clean, scalable full-stack engineering" },
      { name: "Optimization", desc: "Core Web Vitals & conversion performance" },
      { name: "Support", desc: "Continuous SLA maintenance & monitoring" }
    ],
    credibilityTitle: "Built around your business goals.",
    credibilitySubtitle: "We engineer reliable digital platforms through an end-to-end disciplined lifecycle.",
    socials: [
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Twitter", url: "https://twitter.com" },
      { name: "YouTube", url: "https://youtube.com" }
    ],
    // 3-Step Onboarding Process from kifaltech.com/contact-us/
    onboardingWorkflow: [
      {
        step: "01",
        title: "Prepare Proposal",
        desc: "We analyze your business goals and project requirements to create a clear, customized proposal with the right solutions, timelines, and transparent pricing—so everything is aligned from day one."
      },
      {
        step: "02",
        title: "Discussion",
        desc: "We discuss your project in detail to refine requirements, answer your questions, and finalize expectations. This step ensures clarity, smooth communication, and a strong foundation for success."
      },
      {
        step: "03",
        title: "Starting Work",
        desc: "Once everything is approved, we kickstart the project using our expertise and resources to deliver high-quality results—turning your ideas into powerful digital solutions."
      }
    ]
  },

  // Multi-Currency Live Converter Dictionary
  currencies: {
    USD: { code: "USD", symbol: "$", rate: 1.0, flag: "🇺🇸", name: "US Dollar", prefix: "$" },
    EUR: { code: "EUR", symbol: "€", rate: 0.92, flag: "🇪🇺", name: "Euro", prefix: "€" },
    GBP: { code: "GBP", symbol: "£", rate: 0.79, flag: "🇬🇧", name: "British Pound", prefix: "£" },
    AED: { code: "AED", symbol: "AED ", rate: 3.67, flag: "🇦🇪", name: "UAE Dirham", prefix: "AED " },
    CAD: { code: "CAD", symbol: "CA$", rate: 1.36, flag: "🇨🇦", name: "Canadian Dollar", prefix: "CA$" },
    AUD: { code: "AUD", symbol: "A$", rate: 1.52, flag: "🇦🇺", name: "Australian Dollar", prefix: "A$" }
  },

  // 11 Comprehensive KifalTech Services with Full Technical Details & SEO
  services: [
    {
      id: "web-development",
      number: "01",
      title: "Web Development",
      category: "Web & Software",
      badge: "Core Engineering",
      turnaround: "2 – 6 Weeks",
      shortDesc: "We create fast, secure, and scalable websites tailored to your business needs using modern technologies and best practices.",
      heroHeadline: "Bespoke Full-Stack Web Development Engineered for Speed, Scale & Security",
      heroSubheadline: "From enterprise web portals to conversion-focused agency websites, we engineer high-performance web solutions built with modern component architectures, resilient databases, and automated deployment pipelines.",
      architecture: "Modern JAMstack & SSR architectures utilizing React 18, Next.js, Node.js, TypeScript, and cloud-native serverless infrastructure with automated CI/CD and edge caching.",
      deliverables: [
        "Fast, secure, and scalable front-end and back-end architecture",
        "Modern component-driven development (React, Next.js, Vue, Node.js)",
        "Mobile-first responsive design across all viewports and devices",
        "Clean, maintainable, version-controlled source code with documentation",
        "Lighthouse performance score 95+ with Core Web Vitals optimization",
        "Headless CMS integration (Strapi, Sanity, WordPress REST API)",
        "Automated SSL setup, security hardening, and OWASP compliance"
      ],
      techStack: ["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS", "PostgreSQL", "AWS / Vercel"],
      process: [
        { phase: "01", title: "Architecture & Tech Spec", desc: "Detailed technical scoping, data modeling, API design, and wireframe mapping tailored to your business objectives." },
        { phase: "02", title: "Interactive Prototyping", desc: "Crafting modular design systems and responsive UI layouts ensuring intuitive UX flows across mobile and desktop." },
        { phase: "03", title: "Full-Stack Development", desc: "Clean, performant coding with state management, secure database queries, and third-party API orchestrations." },
        { phase: "04", title: "QA, Security & Deployment", desc: "Automated regression testing, cross-browser compatibility, security audits, and zero-downtime production deployment." }
      ],
      pricingAnchor: "From $149 (Basic) to $799+ (Full Custom Enterprise)",
      faqs: [
        {
          q: "What web frameworks and technologies does KifalTech specialize in?",
          a: "We specialize in modern, high-performance web ecosystems including React, Next.js, TypeScript, Node.js, PHP/Laravel, and modern headless CMS platforms. We select the optimal stack based on your performance, scalability, and content management requirements."
        },
        {
          q: "How do you guarantee high performance and fast load times?",
          a: "We adhere strictly to Google Core Web Vitals guidelines. This includes code splitting, image optimization (AVIF/WebP), lazy loading, CDN edge caching, minified assets, and avoiding bloated third-party scripts to consistently achieve 90+ Lighthouse performance scores."
        },
        {
          q: "Will our team be able to easily update website content after launch?",
          a: "Yes. We configure intuitive content management systems (such as headless CMS, WordPress, or Sanity) with structured input fields, so your team can effortlessly edit text, publish articles, and update media without writing a single line of code."
        },
        {
          q: "Do you provide post-launch maintenance, hosting, and updates?",
          a: "Yes, every web development project includes 30 days of complimentary post-launch support and warranty. We also offer dedicated monthly SLA maintenance plans covering security patches, backups, uptime monitoring, and feature enhancements."
        },
        {
          q: "How is intellectual property and source code ownership handled?",
          a: "Upon project completion and final settlement, 100% of all intellectual property, design assets, and source code repositories are transferred directly to your organization with full ownership."
        }
      ],
      seo: {
        title: "Custom Web Development Services & Scalable Architecture | KifalTech",
        metaDesc: "High-performance full-stack web development with React, Next.js, Node.js, and cloud hosting. Engineered for speed, security, and enterprise scalability.",
        canonical: "https://kifaltech.com/services/web-development"
      }
    },
    {
      id: "app-development",
      number: "02",
      title: "App Development",
      category: "Web & Software",
      badge: "Mobile & Cloud",
      turnaround: "4 – 10 Weeks",
      shortDesc: "Custom mobile and web applications designed for performance, usability, and scalability across all platforms.",
      heroHeadline: "Scalable Mobile & Progressive Web Apps Built for Fluid User Experiences",
      heroSubheadline: "We design and build native-grade mobile applications (iOS & Android) and cloud-connected web applications that streamline business workflows, engage users, and scale seamlessly.",
      architecture: "Cross-platform mobile architecture with React Native and Flutter, backed by robust REST/GraphQL APIs, microservices, and secure relational/NoSQL datastores.",
      deliverables: [
        "Cross-platform iOS and Android mobile app development",
        "Progressive Web Apps (PWAs) with offline caching and background sync",
        "Secure user authentication (OAuth2, JWT, Biometric FaceID/Fingerprint)",
        "Real-time data synchronization with WebSockets and cloud push notifications",
        "API integrations with third-party CRM, ERP, and payment processors",
        "App Store & Google Play Store submission and compliance handling",
        "Comprehensive QA testing on physical devices across multiple OS versions"
      ],
      techStack: ["React Native", "Flutter", "Node.js", "Python / FastAPI", "GraphQL", "Firebase / Supabase", "Docker"],
      process: [
        { phase: "01", title: "Product Discovery", desc: "User story mapping, technical feasibility, architecture definition, and UX journey workshops." },
        { phase: "02", title: "Mobile UI/UX Wireframing", desc: "Interactive Figma prototypes with fluid gestures, micro-interactions, and accessibility standards." },
        { phase: "03", title: "Agile Sprint Development", desc: "Bi-weekly sprint demos, test-driven development, and continuous integration to physical test devices." },
        { phase: "04", title: "Store Submission & Launch", desc: "App store guidelines review, compliance checklists, analytics instrumentation, and public deployment." }
      ],
      pricingAnchor: "Custom quotes based on sprint complexity",
      faqs: [
        {
          q: "Do you develop native iOS/Android apps or cross-platform apps?",
          a: "We primarily build with React Native and Flutter, which allows a single, maintainable codebase to run with true native performance on both iOS and Android. This reduces development time and ongoing maintenance costs by up to 40% while maintaining native gestures and 60fps animations."
        },
        {
          q: "How do you handle App Store and Google Play approval?",
          a: "We manage the entire submission pipeline: creating store listings, screenshot assets, privacy policies, adhering to Apple App Store Review Guidelines and Google Play Developer Policies, and resolving any compliance questions until full approval."
        },
        {
          q: "Can the app operate without an active internet connection?",
          a: "Yes. We implement offline-first data caching with local SQLite or Realm datastores, allowing users to interact with key application features offline and automatically synchronizing changes when internet connectivity is restored."
        },
        {
          q: "How do you secure user data and API communication?",
          a: "All network traffic is encrypted via TLS 1.3 with SSL pinning. We utilize encrypted local keychains, zero plaintext token storage, role-based access control (RBAC), and conduct rigorous security checks on all endpoints."
        }
      ],
      seo: {
        title: "Mobile App Development Services (iOS & Android) | KifalTech",
        metaDesc: "Turn your app concept into reality with KifalTech. High-performance cross-platform iOS and Android app engineering with React Native and Flutter.",
        canonical: "https://kifaltech.com/services/app-development"
      }
    },
    {
      id: "web-design",
      number: "03",
      title: "Web Design",
      category: "Design & Branding",
      badge: "UI/UX & Product",
      turnaround: "1 – 3 Weeks",
      shortDesc: "Modern, user-friendly, and responsive web designs that deliver excellent user experience and increase conversions.",
      heroHeadline: "Human-Centered UI/UX & Digital Product Design That Captivates & Converts",
      heroSubheadline: "We craft visually stunning, commercially focused web interfaces grounded in behavioral psychology, accessibility, and modern aesthetic elegance.",
      architecture: "Design token architecture in Figma with atomic design principles, comprehensive component libraries, interactive micro-states, and design-to-code handoffs.",
      deliverables: [
        "Bespoke visual identity and UI design systems in Figma",
        "UX wireframing, information architecture, and user journey maps",
        "Responsive design layouts engineered for Mobile, Tablet, Desktop, and 4K",
        "Micro-interaction and state specifications for engineering handoff",
        "Accessible color contrast hierarchies meeting WCAG 2.1 AA standards",
        "Conversion rate optimization (CRO) landing page layouts",
        "Complete asset exports (SVG vectors, optimized imagery, typography tokens)"
      ],
      techStack: ["Figma", "Adobe XD", "FigJam", "Design Systems", "Protopie", "Atomic Design"],
      process: [
        { phase: "01", title: "Visual Research & Moodboarding", desc: "Analyzing competitor visual landscapes, mood boards, color psychology, and aesthetic directions." },
        { phase: "02", title: "Low-Fidelity Wireframing", desc: "Structuring content hierarchy, user flow priorities, and navigation patterns without visual distraction." },
        { phase: "03", title: "High-Fidelity Interface Craft", desc: "Polished typography, customized UI components, balanced whitespace, and interactive states." },
        { phase: "04", title: "Interactive Prototype & Handoff", desc: "Clickable prototype review, design token documentation, and pixel-perfect developer asset package." }
      ],
      pricingAnchor: "From $149 (1-page) to $650+ (Complete Multi-Page UI System)",
      faqs: [
        {
          q: "What is your web design process from initial brief to handoff?",
          a: "We start with in-depth discovery and brand audit, followed by low-fidelity wireframing to solidify information hierarchy. Once wireframes are approved, we design high-fidelity layouts in Figma with full design tokens, interactive prototypes, and clear dev handoff specs."
        },
        {
          q: "Do you design mobile layouts specifically or just shrink the desktop view?",
          a: "We take a mobile-first approach. Every single component is purposefully designed with touch targets (min 48px), ergonomic thumb zones, and optimized typography for mobile before scaling to tablet and widescreen desktop viewports."
        },
        {
          q: "Can you redesign an existing website that is currently underperforming?",
          a: "Absolutely. We conduct heuristic evaluations and conversion friction audits on your existing site, identifying UI bottlenecks, and deliver a modern, high-converting redesign that elevates your brand credibility."
        },
        {
          q: "Do I receive all editable Figma design files upon completion?",
          a: "Yes. You receive full editor ownership of the comprehensive Figma file, including component libraries, auto-layout frames, color tokens, and exported vector graphics."
        }
      ],
      seo: {
        title: "Modern Web Design & UI/UX Agency Services | KifalTech",
        metaDesc: "Elevate your digital presence with award-grade UI/UX web design. Clean typography, human-crafted design systems, and conversion-focused experiences.",
        canonical: "https://kifaltech.com/services/web-design"
      }
    },
    {
      id: "logo-design",
      number: "04",
      title: "Logo Design",
      category: "Design & Branding",
      badge: "Brand Identity",
      turnaround: "5 – 10 Days",
      shortDesc: "Unique and memorable logo designs that represent your brand identity and leave a lasting impression on your audience.",
      heroHeadline: "Distinctive, Timeless Brand Marks & Visual Identity Foundations",
      heroSubheadline: "A great brand mark communicates authority before a single word is read. We create memorable, mathematically balanced logo marks engineered for scale from digital app icons to massive architectural signage.",
      architecture: "Vector geometry with precise optical kerning, golden ratio proportions, scalable SVG exports, and multi-lockup color palettes.",
      deliverables: [
        "Multiple original, hand-sketched conceptual directions",
        "Scalable vector assets in EPS, SVG, AI, PDF, and high-res PNG formats",
        "Primary, horizontal, stacked, and favicon/app-icon lockups",
        "Full color, inverted dark mode, and single-color monochrome versions",
        "Color palette codes (HEX, RGB, CMYK, Pantone PMS)",
        "Typography pairings and primary font usage guidelines",
        "Full copyright ownership and trademark-ready vector deliverables"
      ],
      techStack: ["Adobe Illustrator", "Vector Graphics", "Pantone Matching", "Typography Systems"],
      process: [
        { phase: "01", title: "Brand Discovery & Meaning", desc: "Unpacking brand values, audience demographics, competitor visual landscape, and core symbolism." },
        { phase: "02", title: "Concept Sketching", desc: "Exploring diverse visual angles, geometric constructions, monograms, and modern wordmarks." },
        { phase: "03", title: "Vector Precision & Kerning", desc: "Digital vectorization, optical alignment adjustments, grid refinement, and palette curation." },
        { phase: "04", title: "Guidelines & Brand Kit", desc: "Exporting comprehensive asset kit with complete color specifications and usage rules." }
      ],
      pricingAnchor: "From $89 (3 Concepts) to $249 (Complete Brand Book Package)",
      faqs: [
        {
          q: "How many unique logo concepts will I receive?",
          a: "Depending on your selected plan, we provide between 3 and 8 distinct, original concepts exploring different creative angles (minimalist emblems, monograms, abstract marks, or typographic wordmarks)."
        },
        {
          q: "What file formats will I receive?",
          a: "You receive industry-standard vector files (.AI, .EPS, .SVG, .PDF) that can be scaled infinitely without losing sharpness, along with high-resolution transparent .PNG and .JPG files optimized for web, social media, and print."
        },
        {
          q: "Will the logo be unique and trademark-ready?",
          a: "Yes. Every mark is hand-crafted from scratch by experienced brand designers. We do not use stock clip-art or AI generators. All files are original and ready for trademark filing."
        },
        {
          q: "How are revision rounds handled?",
          a: "We offer revision rounds on your chosen direction to fine-tune color shades, typography balance, stroke weights, and spacing until you are 100% satisfied."
        }
      ],
      seo: {
        title: "Custom Logo Design & Visual Brand Identity | KifalTech",
        metaDesc: "Memorable, modern logo design and brand identity engineering by KifalTech. Vector assets, full trademark ownership, and timeless typography.",
        canonical: "https://kifaltech.com/services/logo-design"
      }
    },
    {
      id: "stationery-design",
      number: "05",
      title: "Stationery Design",
      category: "Design & Branding",
      badge: "Print & Collateral",
      turnaround: "3 – 7 Days",
      shortDesc: "Consistent and professional stationery designs including business cards, letterheads, and brand assets.",
      heroHeadline: "Tactile & Digital Corporate Collateral That Reinforces Brand Prestige",
      heroSubheadline: "From premium tactile business cards and formal corporate letterheads to digital PDF presentation templates and executive email signatures, we ensure your brand looks impeccably professional at every touchpoint.",
      architecture: "300 DPI print-ready CMYK files with standard bleed lines, vector typography, and digital editable formats (DOCX, PDF, HTML signatures).",
      deliverables: [
        "Double-sided luxury business card designs with foil/emboss specs",
        "Official corporate letterhead in print-ready PDF and editable Microsoft Word/Google Docs format",
        "Matching corporate envelopes (DL, C5, C4 formats)",
        "Presentation folder design with document slots",
        "Interactive HTML email signatures with clickable social links",
        "Brand presentation template (Keynote & PowerPoint 16:9)",
        "Pre-press production specs (bleed, margin, trim marks, CMYK/Pantone)"
      ],
      techStack: ["Adobe InDesign", "Illustrator", "Print Pre-Press", "HTML Signatures", "Word/Docs Templates"],
      process: [
        { phase: "01", title: "Collateral Audit", desc: "Assessing all print and digital touchpoints where your business interacts with partners and clients." },
        { phase: "02", title: "Layout & Typographic Structure", desc: "Establishing strict grid structures, legible hierarchies, and dignified whitespace balance." },
        { phase: "03", title: "Pre-Press Preparation", desc: "Setting up exact bleed margins, vector paths, color separations, and high-DPI output files." },
        { phase: "04", title: "Digital Template Build", desc: "Converting stationery into editable digital office templates for day-to-day team usage." }
      ],
      pricingAnchor: "From $59 to $189 (Comprehensive Corporate Stationery Suite)",
      faqs: [
        {
          q: "Are the files ready for direct commercial printing?",
          a: "Yes. All print deliverables include 300 DPI resolution, CMYK color profiles, embedded fonts, and standard 3mm (0.125 inch) bleed and crop marks compatible with any commercial printer."
        },
        {
          q: "Can our team edit the letterhead to send daily invoices and proposals?",
          a: "Yes. In addition to print-ready PDFs, we supply fully configured Microsoft Word (.docx) and Google Docs templates with locked headers and editable body typography."
        },
        {
          q: "Do you supply email signatures for our team members?",
          a: "Yes, we provide clean, table-based responsive HTML email signatures tested across Gmail, Outlook, Apple Mail, and mobile clients with clickable phone and website links."
        }
      ],
      seo: {
        title: "Corporate Stationery Design & Print Collateral | KifalTech",
        metaDesc: "Professional corporate stationery design services: business cards, letterheads, presentation folders, and digital office templates by KifalTech.",
        canonical: "https://kifaltech.com/services/stationery-design"
      }
    },
    {
      id: "shopify",
      number: "06",
      title: "Shopify",
      category: "E-Commerce",
      badge: "Shopify Plus Partner",
      turnaround: "2 – 5 Weeks",
      shortDesc: "We build high-converting Shopify stores with custom themes, seamless integrations, and optimized performance to help you scale your online business.",
      heroHeadline: "High-Converting Custom Shopify & Shopify Plus Storefronts",
      heroSubheadline: "Empowering modern DTC brands and enterprise retailers with bespoke Liquid & headless Shopify storefronts, friction-free checkout flows, and seamless third-party app ecosystems.",
      architecture: "Shopify Online Store 2.0 architecture with custom Liquid/JSON sections, Storefront API, Klaviyo marketing automations, and optimized JavaScript bundles.",
      deliverables: [
        "Custom Shopify 2.0 theme design and bespoke Liquid development",
        "Seamless product catalog migration and variant configuration",
        "Conversion-optimized product pages (PDP) with sticky carts and size guides",
        "Third-party app integration (Klaviyo, Gorgias, Yotpo, Recharge, ShipStation)",
        "Custom collection filtering, instant search, and upsell recommendation modules",
        "Payment gateway setup (Shopify Payments, PayPal, Stripe, Klarna/Afterpay)",
        "Mobile checkout optimization with 1-click Apple Pay & Shop Pay integrations"
      ],
      techStack: ["Shopify OS 2.0", "Liquid", "Storefront API", "TailwindCSS", "Klaviyo", "JavaScript"],
      process: [
        { phase: "01", title: "E-Commerce Scoping", desc: "Catalog structure, shipping zones, taxation rules, payment gateways, and app integration mapping." },
        { phase: "02", title: "Custom Store UX/UI", desc: "Designing high-converting homepage, category navigation, and product detail layouts in Figma." },
        { phase: "03", title: "Liquid Theme Development", desc: "Modular, performant Shopify theme coding using native 2.0 sections for easy merchant management." },
        { phase: "04", title: "E-Commerce QA & Go-Live", desc: "End-to-end test purchases, shipping calculation audits, inventory sync, and domain transfer." }
      ],
      pricingAnchor: "From $499 (Starter Store) to $999+ (Custom Shopify Plus Store)",
      faqs: [
        {
          q: "Why build a custom Shopify theme instead of using an off-the-shelf theme?",
          a: "Off-the-shelf themes are packed with bloated code and unused features that slow down your store and hurt conversion rates. A custom Shopify 2.0 theme is lightweight, tailored precisely to your customer journey, and loads 2x faster, directly boosting your return on ad spend (ROAS)."
        },
        {
          q: "Can you migrate our store from WooCommerce, Magento, or Wix to Shopify?",
          a: "Yes. We manage full catalog migrations, customer historical records, order histories, and 301 redirect mapping to ensure zero loss of organic SEO traffic during the transition."
        },
        {
          q: "Will we be able to edit products and banners without developer assistance?",
          a: "Yes. Using Shopify's native Theme Customizer, you can change banners, update text, add new sections, and reorder page blocks with a visual drag-and-drop interface."
        },
        {
          q: "How do you optimize Shopify store speed?",
          a: "We minimize DOM elements, optimize Liquid render loops, defer non-critical scripts, eliminate app bloat, and serve images in modern WebP/AVIF formats via Shopify's global CDN."
        }
      ],
      seo: {
        title: "Custom Shopify Store Development & Theme Customization | KifalTech",
        metaDesc: "Scale your e-commerce brand with KifalTech's custom Shopify development services. High-converting Shopify 2.0 themes, app integrations, and fast checkouts.",
        canonical: "https://kifaltech.com/services/shopify"
      }
    },
    {
      id: "ecommerce-solutions",
      number: "07",
      title: "E-Commerce",
      category: "E-Commerce",
      badge: "Custom Commerce",
      turnaround: "3 – 8 Weeks",
      shortDesc: "Powerful e-commerce solutions to help you sell online with secure payments, smooth user experience, and scalability.",
      heroHeadline: "Scalable Omnichannel E-Commerce Platforms & Custom Checkout Engines",
      heroSubheadline: "Whether you require complex B2B wholesale pricing, custom recurring subscriptions, multi-currency global checkouts, or headless commerce, we engineer secure, resilient online retail platforms.",
      architecture: "Headless commerce or custom WooCommerce/Laravel engines featuring Stripe/PayPal webhooks, PCI-DSS compliance, real-time inventory synchronization, and ERP/CRM integrations.",
      deliverables: [
        "End-to-end custom e-commerce web platform engineering",
        "Automated order, shipping, and multi-location inventory management",
        "Tiered B2B pricing, wholesale customer accounts, and tax exemptions",
        "Automated abandoned cart recovery workflows and transactional email templates",
        "Multi-currency dynamic pricing and regional geo-redirection",
        "Enterprise-grade security, PCI compliance, and fraud detection protocols",
        "Comprehensive sales analytics dashboard and revenue reporting"
      ],
      techStack: ["Next.js Commerce", "WooCommerce", "Laravel Cashier", "Stripe API", "PostgreSQL", "Redis"],
      process: [
        { phase: "01", title: "Commerce Architecture", desc: "Business rules definition, fulfillment logistics, payment processing, and ERP schema mapping." },
        { phase: "02", title: "Checkout Flow Design", desc: "Removing checkout friction, optimizing cart drawers, and designing mobile 1-tap payment interactions." },
        { phase: "03", title: "Platform Implementation", desc: "Secure database models, webhook listeners, encrypted payment gateways, and inventory logic." },
        { phase: "04", title: "Stress Testing & Launch", desc: "Load testing simulated concurrent transactions, penetration testing, and merchant training." }
      ],
      pricingAnchor: "From $499 (Starter) to $999 (Pro Enterprise)",
      faqs: [
        {
          q: "Can you implement custom B2B wholesale pricing alongside retail storefronts?",
          a: "Yes. We build hybrid B2C/B2B platforms where approved wholesale accounts see tiered volume pricing, custom payment terms (e.g. Net 30), and minimum order quantity rules, while retail shoppers see standard pricing."
        },
        {
          q: "Which payment gateways do you support?",
          a: "We integrate Stripe, PayPal, Authorize.Net, Square, Klarna, Afterpay, and regional gateways with tokenized payments ensuring you never touch or store sensitive raw credit card numbers."
        },
        {
          q: "How do you prevent shopping cart abandonment?",
          a: "We design streamlined 1-page checkout flows, support instant digital wallets (Apple Pay, Google Pay), display transparent shipping rates upfront, and configure automated multi-stage email recovery triggers."
        }
      ],
      seo: {
        title: "Custom E-Commerce Platform Development & Integrations | KifalTech",
        metaDesc: "Scale your digital sales with custom e-commerce development. Secure payment gateways, inventory synchronization, and conversion-engineered shopping journeys.",
        canonical: "https://kifaltech.com/services/ecommerce-solutions"
      }
    },
    {
      id: "seo",
      number: "08",
      title: "SEO",
      category: "Digital Growth",
      badge: "Organic Search",
      turnaround: "Ongoing Monthly",
      shortDesc: "Boost your online visibility with our proven SEO strategies that drive organic traffic and improve search rankings.",
      heroHeadline: "Data-Driven Technical & On-Page SEO That Dominates Search Rankings",
      heroSubheadline: "We deploy white-hat, algorithm-resilient search engine optimization strategies that resolve technical crawl bottlenecks, build topical authority, and attract high-intent organic traffic that converts into revenue.",
      architecture: "Comprehensive technical audit engine, semantic JSON-LD structured data graph, Core Web Vitals remediation, crawl budget optimization, and keyword intent mapping.",
      deliverables: [
        "In-depth technical SEO crawl audit and indexation remediation",
        "Competitor keyword gap analysis and high-intent commercial keyword targeting",
        "On-page optimization (H1/H2 hierarchy, internal link architecture, meta schemas)",
        "Rich snippet JSON-LD Schema markup (Organization, Service, FAQ, Breadcrumbs)",
        "Core Web Vitals remediation (LCP, CLS, INP) for mobile search rankings",
        "High-authority white-hat backlink outreach and digital PR recommendations",
        "Transparent monthly keyword ranking and organic traffic attribution reports"
      ],
      techStack: ["Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "Schema.org", "Google Analytics 4"],
      process: [
        { phase: "01", title: "Comprehensive Audit", desc: "Deep crawl of technical indexation, broken redirects, canonical errors, duplicate content, and Core Web Vitals." },
        { phase: "02", title: "Keyword & Entity Strategy", desc: "Mapping commercial keyword intent to dedicated landing pages to build complete topical authority." },
        { phase: "03", title: "Technical & On-Page Fixes", desc: "Implementing structured data schemas, speeding up asset delivery, and rewriting meta titles and content." },
        { phase: "04", title: "Authority Growth & Reporting", desc: "Ongoing link outreach, monitoring ranking shifts, and sending monthly transparent performance metrics." }
      ],
      pricingAnchor: "From $399/mo (Starter) to $899/mo (Golden Enterprise SEO)",
      faqs: [
        {
          q: "How long does it take to see tangible ranking results from SEO?",
          a: "While critical technical fixes (such as indexation and metadata corrections) can yield positive search crawling improvements within 2 to 4 weeks, substantial ranking gains and compounding organic traffic growth typically mature within 3 to 6 months."
        },
        {
          q: "Do you use safe, white-hat SEO techniques?",
          a: "Strictly 100% white-hat. We strictly comply with Google Search Essentials guidelines. We never use automated link farms, private blog networks (PBNs), or spammy tactics that risk algorithmic penalties."
        },
        {
          q: "How is local SEO handled for service-area and local businesses?",
          a: "We fully optimize your Google Business Profile (GBP), ensure NAP (Name, Address, Phone) citation consistency across primary directories, build local landing pages, and configure LocalBusiness JSON-LD schema."
        },
        {
          q: "What metrics are included in your monthly SEO reports?",
          a: "Our monthly reports track organic search impressions, clicks, keyword rank movements, organic conversion events, bounce rate trends, and actionable technical recommendations."
        }
      ],
      seo: {
        title: "Technical SEO & Organic Search Growth Services | KifalTech",
        metaDesc: "Dominate Google search results with KifalTech's technical SEO services. Schema markup, Core Web Vitals optimization, and high-intent organic search strategies.",
        canonical: "https://kifaltech.com/services/seo"
      }
    },
    {
      id: "digital-marketing",
      number: "09",
      title: "Digital Marketing",
      category: "Digital Growth",
      badge: "PPC & Performance",
      turnaround: "Ongoing Monthly",
      shortDesc: "Data-driven digital marketing solutions to grow your brand, generate leads, and maximize ROI across all channels.",
      heroHeadline: "Full-Funnel Paid Advertising & Performance Marketing That Scales Revenue",
      heroSubheadline: "Stop burning ad budgets on vanity metrics. We construct and manage laser-targeted Google Ads PPC, LinkedIn, and Meta campaigns focused obsessively on low customer acquisition costs (CAC) and maximized ROAS.",
      architecture: "Conversion API (CAPI) tracking, Google Ads Enhanced Conversions, Google Tag Manager server-side tracking, and multi-touch attribution modeling.",
      deliverables: [
        "Full-funnel Google Search, Display, and Performance Max campaign management",
        "Competitor ad intelligence, search term mining, and negative keyword filtering",
        "High-converting landing page recommendations and CRO testing",
        "Conversion tracking setup via Google Tag Manager and GA4",
        "Smart bidding strategy optimization (Target CPA, Target ROAS)",
        "Compelling ad copywriting and responsive search ad (RSA) variants",
        "Weekly performance monitoring and transparent monthly strategy calls"
      ],
      techStack: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "GA4", "Looker Studio", "Hotjar"],
      process: [
        { phase: "01", title: "Audience & Competitor Audit", desc: "Auditing historic campaign data, customer personas, competitor bids, and unit economics." },
        { phase: "02", title: "Campaign Architecture & Tracking", desc: "Building tightly themed ad groups, keyword match types, negative lists, and server-side tracking." },
        { phase: "03", title: "Creative & Copy Execution", desc: "Drafting high-converting ad copy and pairing with dedicated conversion landing pages." },
        { phase: "04", title: "Continuous Optimization", desc: "Daily bid management, negative keyword pruning, demographic adjustments, and weekly scaling." }
      ],
      pricingAnchor: "From $499/mo to $999/mo (Google Ads Management)",
      faqs: [
        {
          q: "What ad networks do you specialize in?",
          a: "We specialize in Google Ads (Search, Shopping, Display, Performance Max, YouTube) and paid social channels (Meta Ads, LinkedIn Ads) tailored to capture high-intent commercial searches."
        },
        {
          q: "Who pays the direct advertising spend to Google/Meta?",
          a: "You pay your advertising budget directly to the ad network (Google, Meta) via your own billing account. KifalTech charges a transparent flat management fee without hidden markups."
        },
        {
          q: "How do you track whether ads are actually generating real customers?",
          a: "We set up end-to-end server-side conversion tracking in Google Tag Manager and GA4, measuring actual form submissions, phone inquiries, purchases, and CRM lead progression."
        }
      ],
      seo: {
        title: "Performance Digital Marketing & Google Ads Management | KifalTech",
        metaDesc: "Scale your revenue with KifalTech's performance digital marketing. Google Ads PPC, conversion rate optimization, and transparent ROI reporting.",
        canonical: "https://kifaltech.com/services/digital-marketing"
      }
    },
    {
      id: "social-media-marketing",
      number: "10",
      title: "Social Media Marketing",
      category: "Digital Growth",
      badge: "Brand Engagement",
      turnaround: "Ongoing Monthly",
      shortDesc: "Engage your audience and grow your brand presence with creative and strategic social media campaigns.",
      heroHeadline: "Strategic Social Media Management That Fosters Community & Brand Loyalty",
      heroSubheadline: "Transform your social channels into active client acquisition engines with curated content calendars, high-impact brand storytelling, and strategic community engagement.",
      architecture: "Editorial planning, multi-platform publishing schedules (LinkedIn, Instagram, Facebook), unified brand aesthetic, and audience sentiment analysis.",
      deliverables: [
        "Comprehensive monthly social media content calendar and editorial strategy",
        "Custom-branded carousel graphics, static post assets, and story graphics",
        "Engaging, conversion-focused copywriting with tailored hashtag strategy",
        "Profile optimization (bio, links, pinned highlights, branding banners)",
        "Active community engagement (monitoring inquiries, comments, brand mentions)",
        "Cross-platform distribution across LinkedIn, Instagram, Facebook, and Twitter",
        "Monthly reach, engagement, and audience growth analytics report"
      ],
      techStack: ["Buffer", "Later", "Canva Pro", "Photoshop", "Meta Business Suite", "LinkedIn Analytics"],
      process: [
        { phase: "01", title: "Brand Voice Alignment", desc: "Defining brand tone of voice, visual styling rules, visual pillars, and audience segments." },
        { phase: "02", title: "Monthly Calendar Creation", desc: "Drafting 30-day post calendars with copy, graphics, and posting times for client approval." },
        { phase: "03", title: "Publishing & Community Care", desc: "Scheduled publishing, responsive comment replies, and proactive industry networking." },
        { phase: "04", title: "Monthly Analytics Review", desc: "Analyzing high-performing posts, follower growth rate, engagement ratios, and refining strategy." }
      ],
      pricingAnchor: "From $249/mo (Starter) to $599/mo (Comprehensive Growth)",
      faqs: [
        {
          q: "Do I get to approve posts before they go live on our profiles?",
          a: "Yes. Every month we deliver the complete content calendar — including graphics, caption copy, and scheduled dates — for your full review and approval before anything is published."
        },
        {
          q: "Can you create video reels and motion content for Instagram and LinkedIn?",
          a: "Yes, our social media packages can be paired with our video editing service to produce high-impact reels, shorts, and motion graphics that drive 3x higher organic reach."
        },
        {
          q: "How do you respond to direct customer inquiries on social media?",
          a: "We monitor your direct messages and comments daily. We respond to basic inquiries using an approved agency FAQ playbook and escalate qualified sales leads directly to your email or CRM."
        }
      ],
      seo: {
        title: "Social Media Marketing & Brand Management Services | KifalTech",
        metaDesc: "Build an engaged community and grow brand presence with KifalTech. Strategic content calendars, branded graphics, and multi-channel social management.",
        canonical: "https://kifaltech.com/services/social-media-marketing"
      }
    },
    {
      id: "video-editing",
      number: "11",
      title: "Video Editing",
      category: "Digital Growth",
      badge: "Motion & Media",
      turnaround: "3 – 7 Days per Video",
      shortDesc: "Professional video editing services to enhance your content, tell your story, and captivate your audience.",
      heroHeadline: "Cinematic Video Editing & Motion Graphics That Command Attention",
      heroSubheadline: "Elevate your brand with professional post-production. We craft engaging promotional commercials, short-form viral reels, software product walkthroughs, and executive interviews engineered for viewer retention.",
      architecture: "4K workflow in Adobe Premiere Pro and After Effects, featuring sound design, professional color grading, dynamic typography, and multi-aspect ratio master rendering.",
      deliverables: [
        "Dynamic pacing and narrative sequencing to maximize audience retention",
        "Short-form reels and TikTok/YouTube Shorts formatting (9:16 vertical)",
        "Kinetic typography, animated subtitles, lower thirds, and callout graphics",
        "Broadcast-grade audio sweetening, EQ normalization, and licensed music licensing",
        "Cinematic color correction and LUT grading tailored to brand aesthetic",
        "Multi-aspect ratio exports (16:9 widescreen, 9:16 vertical, 1:1 square)",
        "Prompt revision rounds and fast cloud delivery of final master renders"
      ],
      techStack: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Audition", "Motion Graphics"],
      process: [
        { phase: "01", title: "Footage Ingestion & Script", desc: "Reviewing raw footage, audio sync, narrative scripts, and key message beats." },
        { phase: "02", title: "Rough Cut & Pacing", desc: "Constructing the core narrative flow, cutting dead space, and synchronizing rhythm to audio." },
        { phase: "03", title: "Color, Motion & Sound", desc: "Adding kinetic text, sound design elements, color correction, and smooth micro-transitions." },
        { phase: "04", title: "Client Review & Final Master", desc: "Frame-accurate client feedback, final polish, and high-bitrate master exports." }
      ],
      pricingAnchor: "From $99 per video / custom monthly volume retainer",
      faqs: [
        {
          q: "What video styles do you edit?",
          a: "We edit commercial agency promos, B2B SaaS software demos, executive interviews, YouTube long-form content, podcast snippets, and high-energy short-form social reels (TikTok, Instagram, YouTube Shorts)."
        },
        {
          q: "How do we transfer large raw video footage files to your team?",
          a: "We provide dedicated cloud storage links (Google Drive, Dropbox, or Frame.io) where you can upload raw video clips and assets securely."
        },
        {
          q: "Do you supply licensed royalty-free background music and sound effects?",
          a: "Yes. All our video edits feature commercially licensed music and high-fidelity sound effects cleared for YouTube monetization and global advertising campaigns."
        }
      ],
      seo: {
        title: "Professional Video Editing & Motion Graphics Services | KifalTech",
        metaDesc: "Captivate your audience with high-impact video editing. Commercial promos, viral social reels, motion graphics, and sound design by KifalTech.",
        canonical: "https://kifaltech.com/services/video-editing"
      }
    }
  ],

  // 12 Authentic Portfolio Projects with In-Depth Case Studies & Verified Results
  portfolio: [
    {
      id: "rise-2-studio",
      title: "Rise 2 Studio",
      client: "Rise 2 Studio",
      category: "Web Development",
      industry: "Creative Production & Media",
      year: "2024",
      timeline: "4 Weeks",
      services: ["Web Development", "Web Design", "Responsive Layouts"],
      desc: "Creative production and web design showcase engineered for visual immersion and responsive digital storytelling.",
      heroHeadline: "An Immersive Digital Showcase for an Avant-Garde Creative Production Studio",
      challenge: "Rise 2 Studio needed a web platform that reflected their high-end cinematic visual standards without sacrificing page load speeds or mobile accessibility. Their previous site struggled with heavy media assets and high bounce rates.",
      solution: "KifalTech engineered a bespoke web experience utilizing lightweight component architecture, optimized video streaming pipelines, and elegant typography that lets their creative portfolio take center stage across all viewports.",
      deliverables: [
        "Bespoke portfolio showcase layout with smooth transitions",
        "Adaptive responsive video player integration",
        "Optimized WebP asset delivery pipeline",
        "Custom project filtering by medium and category",
        "Interactive client inquiry workflow"
      ],
      projectType: "Client Case Study",
      outcome: "Delivered a lightweight media streaming architecture achieving sub-second loading (98/100 Lighthouse score) and seamless cross-device video playback.",
      results: [
        { label: "Lighthouse Performance", value: "98/100" },
        { label: "Asset Delivery Pipeline", value: "WebP / CDN" },
        { label: "Core Web Vitals", value: "All Green" }
      ],
      faqs: [
        { q: "What tech stack was used for Rise 2 Studio?", a: "React, Next.js, and CSS custom properties with hardware-accelerated transitions to maintain 60fps scrolling." },
        { q: "How did KifalTech optimize high-resolution media?", a: "We implemented lazy loading, WebP/AVIF format transcoding, and CDN edge delivery." }
      ],
      mockupType: "browser",
      seo: {
        title: "Rise 2 Studio Case Study - Creative Production Web Platform | KifalTech",
        metaDesc: "Discover how KifalTech built a 98/100 performance web platform for Rise 2 Studio with fluid media streaming and modern typography.",
        canonical: "https://kifaltech.com/portfolio/rise-2-studio"
      }
    },
    {
      id: "pranav-suresh",
      title: "Pranav Suresh",
      client: "Pranav Suresh",
      category: "Design & Branding",
      industry: "Executive Consulting",
      year: "2024",
      timeline: "2 Weeks",
      services: ["Logo Design", "Web Design", "Brand Identity"],
      desc: "Executive personal branding and portfolio website with minimal typography and clean editorial layouts.",
      heroHeadline: "Executive Personal Branding & Digital Authority Platform",
      challenge: "The client required a refined, dignified digital presence that established thought leadership in executive consulting, replacing generic resume sites with an editorial brand platform.",
      solution: "We developed a minimal typography system utilizing Space Grotesk and Inter, combined with a bespoke monogram mark and structured case study presentations.",
      deliverables: [
        "Custom executive monogram and vector brand kit",
        "Editorial portfolio web design with minimal aesthetics",
        "Integrated publication and article repository",
        "Direct consultation booking integration"
      ],
      projectType: "Client Case Study",
      outcome: "Engineered an editorial brand platform with minimal typography hierarchy, responsive publication archive, and direct calendar integration.",
      results: [
        { label: "Design Direction", value: "Bespoke Monogram" },
        { label: "Typography System", value: "Space Grotesk + Inter" },
        { label: "Platform Structure", value: "Editorial Archive" }
      ],
      faqs: [
        { q: "What was the design focus?", a: "Quiet luxury, typographic precision, and high readability with distraction-free layout pacing." }
      ],
      mockupType: "browser",
      seo: {
        title: "Pranav Suresh Case Study - Personal Branding & Portfolio | KifalTech",
        metaDesc: "Explore KifalTech's executive personal branding and minimal editorial portfolio design for Pranav Suresh.",
        canonical: "https://kifaltech.com/portfolio/pranav-suresh"
      }
    },
    {
      id: "cuts-clothing",
      title: "Cuts Clothing",
      client: "Cuts Clothing",
      category: "E-Commerce",
      industry: "Apparel & DTC Fashion",
      year: "2023",
      timeline: "5 Weeks",
      services: ["Shopify", "E-Commerce", "CRO Optimization"],
      desc: "High-converting online store with seamless product navigation, optimized checkout, and responsive design.",
      heroHeadline: "High-Velocity Custom Shopify Storefront Engineered for DTC Conversion",
      challenge: "Cuts Clothing faced high cart abandonment and slow mobile checkout times on their previous e-commerce setup, hurting their paid social advertising return on ad spend.",
      solution: "KifalTech developed a bespoke Shopify 2.0 theme featuring an instant-load cart drawer, 1-click upsells, streamlined size selector, and optimized mobile payment gateways.",
      deliverables: [
        "Custom Shopify OS 2.0 Liquid theme development",
        "Slide-out dynamic cart drawer with free shipping progress bar",
        "Klaviyo abandoned checkout flow integration",
        "Mobile-first product page (PDP) conversion architecture"
      ],
      projectType: "Client Case Study",
      outcome: "Developed a custom Shopify OS 2.0 storefront with sub-second slide-out cart drawer, dynamic upsells, and friction-free mobile checkout.",
      results: [
        { label: "Store Architecture", value: "Shopify OS 2.0" },
        { label: "Cart Experience", value: "Dynamic Slide-Out" },
        { label: "Mobile Checkout", value: "1-Click Shop Pay" }
      ],
      faqs: [
        { q: "What Shopify version was implemented?", a: "Shopify Online Store 2.0 with custom JSON template sections for fast merchant updates." }
      ],
      mockupType: "mobile",
      seo: {
        title: "Cuts Clothing Case Study - High-Converting Shopify Store | KifalTech",
        metaDesc: "How KifalTech built a high-performance e-commerce experience for Cuts Clothing through custom Shopify 2.0 development.",
        canonical: "https://kifaltech.com/portfolio/cuts-clothing"
      }
    },
    {
      id: "winkler-hotels",
      title: "Winkler Hotels",
      client: "Winkler Hotels",
      category: "Web Development",
      industry: "Hospitality & Luxury Tourism",
      year: "2024",
      timeline: "6 Weeks",
      services: ["Web Development", "Web Design", "Booking Engine"],
      desc: "Hospitality web experience with smooth booking flows, elegant gallery presentation, and cross-device performance.",
      heroHeadline: "Luxury Hospitality Digital Experience & Direct Booking Engine",
      challenge: "High commission fees to third-party online travel agencies (OTAs) led Winkler Hotels to prioritize direct booking conversions through their primary website.",
      solution: "We engineered a captivating luxury web destination with immersive room visualizers, real-time availability calendars, and a simplified 3-step direct reservation flow.",
      deliverables: [
        "Immersive full-bleed architectural image presentation",
        "Real-time booking engine integration with PMS system",
        "Multi-language support (English, German, Italian)",
        "Mobile-optimized luxury suite visualizer"
      ],
      projectType: "Client Case Study",
      outcome: "Engineered a luxury hospitality portal with immersive room visualizers, real-time PMS calendar integration, and multilingual booking flow.",
      results: [
        { label: "Booking Pipeline", value: "Direct PMS Integration" },
        { label: "Localization", value: "EN / DE / IT" },
        { label: "Mobile Experience", value: "Full Touch Responsive" }
      ],
      faqs: [
        { q: "Was PMS integration secure?", a: "Yes, fully encrypted API integration with their property management booking engine." }
      ],
      mockupType: "browser",
      seo: {
        title: "Winkler Hotels Case Study - Luxury Hospitality Website | KifalTech",
        metaDesc: "KifalTech's custom hospitality web development case study for Winkler Hotels, increasing direct guest bookings by +46%.",
        canonical: "https://kifaltech.com/portfolio/winkler-hotels"
      }
    },
    {
      id: "noomo-agency",
      title: "Noomo Agency",
      client: "Noomo Agency",
      category: "Web Development",
      industry: "Digital Agency & Marketing",
      year: "2023",
      timeline: "3 Weeks",
      services: ["Web Development", "Web Design"],
      desc: "Interactive agency digital showcase built with creative transitions and modern responsive design standards.",
      heroHeadline: "Fluid Interactive Web Showcase for Modern Digital Agency",
      challenge: "Noomo Agency wanted an edgy, ultra-modern agency site that demonstrated high technical capability to international corporate clients.",
      solution: "Engineered with modular React components, smooth CSS transforms, dark mode aesthetics, and micro-interactions that impress visitors immediately.",
      deliverables: [
        "Dark theme agency portfolio with high contrast typography",
        "Interactive services accordion with micro-animations",
        "Client inquiry modal with budget estimator",
        "Mobile responsive drawer and touch navigation"
      ],
      projectType: "Client Case Study",
      outcome: "Engineered an interactive dark-theme agency portfolio with hardware-accelerated CSS transforms, responsive project drawers, and an interactive budget calculator.",
      results: [
        { label: "Performance Score", value: "95+ Lighthouse" },
        { label: "Framework", value: "Modular React & CSS" },
        { label: "Interaction Model", value: "Micro-Transitions" }
      ],
      faqs: [
        { q: "Did the interactions affect speed?", a: "No, CSS transforms and lightweight DOM footprint maintained 95+ performance scores." }
      ],
      mockupType: "browser",
      seo: {
        title: "Noomo Agency Case Study - Creative Agency Web Design | KifalTech",
        metaDesc: "See how KifalTech engineered an interactive, high-performance agency website for Noomo Agency.",
        canonical: "https://kifaltech.com/portfolio/noomo-agency"
      }
    },
    {
      id: "fitonist-fitness",
      title: "Fitonist - Fitness App",
      client: "Fitonist",
      category: "App Development",
      industry: "Health, Wellness & Mobile Tech",
      year: "2024",
      timeline: "8 Weeks",
      services: ["App Development", "UI/UX Design", "Mobile Engineering"],
      desc: "Mobile fitness platform with intuitive user workflows, workout routines, and high-performance interface design.",
      heroHeadline: "Next-Gen Mobile Fitness App with Real-Time Workout Tracking",
      challenge: "Building a fluid mobile fitness app that allowed users to log complex exercise routines in real-time at the gym, with zero input lag and reliable offline capabilities.",
      solution: "Developed with React Native, incorporating offline SQLite data caching, high-contrast dark mode for low-light gym environments, and intuitive 1-tap rep counters.",
      deliverables: [
        "Cross-platform iOS and Android mobile app build",
        "Offline-first routine tracking with instant cloud sync",
        "Custom SVG exercise muscle visualizers",
        "Subscription paywall integration via In-App Purchases"
      ],
      projectType: "Concept Showcase",
      outcome: "Engineered an offline-first cross-platform mobile app with SQLite local caching, high-contrast gym dark mode, and seamless background cloud sync.",
      results: [
        { label: "Architecture", value: "Offline-First SQLite" },
        { label: "Platform Build", value: "React Native Cross-Platform" },
        { label: "Interface", value: "High-Contrast Dark Theme" }
      ],
      faqs: [
        { q: "Can users log workouts offline?", a: "Yes, local database handles all operations offline and syncs automatically when reconnected." }
      ],
      mockupType: "mobile",
      seo: {
        title: "Fitonist Fitness App Concept Showcase - Mobile App Engineering | KifalTech",
        metaDesc: "Explore KifalTech's mobile app development concept showcase for Fitonist, an offline-first fitness tracking mobile application.",
        canonical: "https://kifaltech.com/portfolio/fitonist-fitness"
      }
    },
    {
      id: "zentry-gaming",
      title: "Zentry - Redefine Gaming",
      client: "Zentry",
      category: "Web & Software",
      industry: "Gaming & Web3 Community",
      year: "2024",
      timeline: "5 Weeks",
      services: ["Web Development", "Custom Web Application"],
      desc: "Next-gen gaming community hub with dynamic visuals, dark mode UI, and interactive platform engagement.",
      heroHeadline: "Futuristic Gaming Portal & Community Hub for Esports Enthusiasts",
      challenge: "Creating an electrifying community platform that met the rigorous visual expectations of gamers while keeping data load times lightning fast.",
      solution: "We built a high-tech dark theme interface with neon accent glows, live leaderboard feeds, and modular tournament brackets.",
      deliverables: [
        "Dynamic leaderboard and tournament schedule widgets",
        "Dark gaming UI with electric cyan and purple accents",
        "Community forum and Discord API integration",
        "Responsive gaming asset showcase"
      ],
      projectType: "Concept Showcase",
      outcome: "Delivered a gaming community portal featuring live leaderboard sync, modular tournament brackets, and Discord community webhook integration.",
      results: [
        { label: "Platform Model", value: "Live Tournament Hub" },
        { label: "Integration", value: "Discord Webhooks & API" },
        { label: "Performance", value: "Sub-Second Asset Delivery" }
      ],
      faqs: [
        { q: "Was the site mobile optimized?", a: "Yes, responsive touch navigation optimized for mobile gamers." }
      ],
      mockupType: "browser",
      seo: {
        title: "Zentry Gaming Case Study - Gaming Platform & Web Application | KifalTech",
        metaDesc: "KifalTech's case study on building the futuristic Zentry gaming community platform and web application.",
        canonical: "https://kifaltech.com/portfolio/zentry-gaming"
      }
    },
    {
      id: "flow-trix",
      title: "Flow Trix",
      client: "Flow Trix",
      category: "Web & Software",
      industry: "Enterprise SaaS & Automation",
      year: "2023",
      timeline: "7 Weeks",
      services: ["Web Application", "Laravel Development", "API Architecture"],
      desc: "Custom web platform engineered for workflow orchestration and modern enterprise usability.",
      heroHeadline: "Enterprise Workflow Orchestration & Data Analytics Platform",
      challenge: "Flow Trix required an internal web platform to manage complex multi-tier project pipelines, employee role assignments, and automated billing generation.",
      solution: "Engineered with a robust backend architecture, role-based access control, interactive Kanban boards, and automated PDF invoice generation.",
      deliverables: [
        "Enterprise role-based security and user permissions",
        "Interactive drag-and-drop workflow board",
        "Automated recurring invoice generation engine",
        "Real-time operational dashboard with charts"
      ],
      projectType: "Client Case Study",
      outcome: "Engineered a custom enterprise SaaS platform featuring role-based access control (RBAC), interactive Kanban pipeline automation, and automated recurring billing.",
      results: [
        { label: "Security Layer", value: "Role-Based Access (RBAC)" },
        { label: "Automation", value: "Recurring PDF Invoicing" },
        { label: "Pipeline UI", value: "Interactive Kanban Board" }
      ],
      faqs: [
        { q: "How is data protected?", a: "Role-based access control (RBAC) with row-level database security and full audit logging." }
      ],
      mockupType: "terminal",
      seo: {
        title: "Flow Trix Case Study - Enterprise Workflow SaaS Platform | KifalTech",
        metaDesc: "Learn how KifalTech built a custom enterprise workflow and analytics platform for Flow Trix.",
        canonical: "https://kifaltech.com/portfolio/flow-trix"
      }
    },
    {
      id: "def-projetos",
      title: "DEF Projetos",
      client: "DEF Projetos",
      category: "Web Development",
      industry: "Architecture & Engineering",
      year: "2023",
      timeline: "3 Weeks",
      services: ["Web Development", "Web Design"],
      desc: "Corporate portfolio and architectural project showcase delivering clean presentation and structure.",
      heroHeadline: "Architectural Precision & Engineering Portfolio Showcase",
      challenge: "Showcasing extensive civil engineering blueprints, 3D renderings, and completed building projects with clean Swiss typographic restraint.",
      solution: "A geometric grid layout emphasizing high-resolution architectural photography, clean project metadata, and fast image loading.",
      deliverables: [
        "Clean grid portfolio layout with category filtering",
        "High-DPI project blueprint and photo gallery",
        "Company history and engineering leadership overview",
        "Bilingual architecture consultation form"
      ],
      projectType: "Client Case Study",
      outcome: "Built an architectural engineering portfolio featuring high-resolution blueprint zoom viewers, CAD project taxonomy, and bilingual consultation intake.",
      results: [
        { label: "Media Handling", value: "High-DPI Vector Blueprints" },
        { label: "Pacing", value: "Swiss Typographic Layout" },
        { label: "Consultation Flow", value: "Bilingual Request Form" }
      ],
      faqs: [
        { q: "How are blueprints displayed?", a: "High-resolution pan-and-zoom modal with crisp vector rendering." }
      ],
      mockupType: "browser",
      seo: {
        title: "DEF Projetos Case Study - Architectural Engineering Website | KifalTech",
        metaDesc: "Explore KifalTech's corporate portfolio and architectural engineering showcase web design for DEF Projetos.",
        canonical: "https://kifaltech.com/portfolio/def-projetos"
      }
    },
    {
      id: "wonderkin-tattoos",
      title: "WonderKin Tattoos",
      client: "WonderKin Tattoos",
      category: "Design & Branding",
      industry: "Creative Studio & Lifestyle",
      year: "2024",
      timeline: "2.5 Weeks",
      services: ["Web Design", "Branding", "Booking Integration"],
      desc: "Creative studio website featuring custom artist portfolios, booking inquiries, and visual gallery.",
      heroHeadline: "Artisan Studio Branding & Direct Artist Booking Portal",
      challenge: "Tattoo artists spent hours managing scattered direct messages and booking cancellations across social media without deposit protections.",
      solution: "We engineered a bespoke studio website with individual resident artist galleries, style filters, hygiene transparency documentation, and an online deposit booking system.",
      deliverables: [
        "Artisan brand mark and studio color palette",
        "Resident artist portfolio galleries with style tags",
        "Online consultation request form with deposit processing",
        "Pre-care and after-care digital guides"
      ],
      projectType: "Client Case Study",
      outcome: "Created an artisan studio portal with resident artist galleries, style filters, hygiene transparency guides, and automated deposit reservation flows.",
      results: [
        { label: "Booking Workflow", value: "Automated Deposit System" },
        { label: "Artist Profiles", value: "Individual Gallery Portfolios" },
        { label: "Guidance", value: "Digital Care & Safety Specs" }
      ],
      faqs: [
        { q: "Does the system collect deposits?", a: "Yes, automated deposit collection ensures artist calendar protection." }
      ],
      mockupType: "browser",
      seo: {
        title: "WonderKin Tattoos Case Study - Studio Branding & Booking Web Design | KifalTech",
        metaDesc: "How KifalTech built a custom studio branding and booking automation web platform for WonderKin Tattoos.",
        canonical: "https://kifaltech.com/portfolio/wonderkin-tattoos"
      }
    },
    {
      id: "fd-front-desk",
      title: "FD Front Desk",
      client: "FD Front Desk",
      category: "Web & Software",
      industry: "Healthcare & Clinic Management",
      year: "2023",
      timeline: "6 Weeks",
      services: ["Web Application", "App Development", "Security"],
      desc: "Front-desk operations portal with secure user handling, online appointment scheduling, and query management.",
      heroHeadline: "Secure Patient Check-In & Clinic Front-Desk Operations Portal",
      challenge: "Medical and wellness clinics struggled with paper intake forms, patient check-in bottlenecks, and HIPAA privacy concerns.",
      solution: "A secure digital kiosk web application allowing patients to check in via tablet, complete medical history questionnaires securely, and alert staff in real time.",
      deliverables: [
        "Tablet-optimized touch check-in kiosk interface",
        "Encrypted patient intake questionnaire system",
        "Real-time front desk staff dispatch dashboard",
        "Automated SMS appointment arrival notifications"
      ],
      projectType: "Client Case Study",
      outcome: "Engineered a secure clinic check-in kiosk web application with encrypted digital intake forms, real-time front desk dispatch, and SMS queue alerts.",
      results: [
        { label: "Data Security", value: "AES-256 Client-Side Encryption" },
        { label: "Intake Flow", value: "Tablet Touch Kiosk" },
        { label: "Queue Dispatch", value: "Real-Time Staff Dashboard" }
      ],
      faqs: [
        { q: "Is patient information encrypted?", a: "Yes, end-to-end AES-256 encryption with zero client-side caching of sensitive data." }
      ],
      mockupType: "terminal",
      seo: {
        title: "FD Front Desk Case Study - Healthcare Operations Web App | KifalTech",
        metaDesc: "KifalTech's case study on building a secure patient check-in kiosk and front-desk management web application for FD Front Desk.",
        canonical: "https://kifaltech.com/portfolio/fd-front-desk"
      }
    },
    {
      id: "black-mango-production",
      title: "Black Mango Production",
      client: "Black Mango Production",
      category: "Digital Growth",
      industry: "Commercial Film & Production",
      year: "2024",
      timeline: "3 Weeks",
      services: ["Video Editing", "Web Design", "Media Showcase"],
      desc: "Media production company web platform showcasing commercial reels, film portfolios, and project inquiries.",
      heroHeadline: "Cinematic Media Production Portfolio & Commercial Showreel Hub",
      challenge: "Black Mango needed a high-impact digital presence to pitch major television networks and global commercial advertising agencies.",
      solution: "A high-contrast cinematic web portfolio featuring full-screen video reels, client credits, production gear lists, and one-click treatment requests.",
      deliverables: [
        "Full-screen 4K video reel showcase with custom controls",
        "Commercial client credits and festival awards showcase",
        "Production treatment request questionnaire",
        "Fast-loading mobile video presentation"
      ],
      projectType: "Client Case Study",
      outcome: "Built a cinematic commercial film portfolio featuring full-screen 4K video reel streaming with adaptive bitrates and interactive project treatment inquiries.",
      results: [
        { label: "Video Engine", value: "Adaptive Bitrate 4K Stream" },
        { label: "Client Credentialing", value: "Festival & Commercial Credits" },
        { label: "Treatment Inquiries", value: "Integrated Scope Form" }
      ],
      faqs: [
        { q: "How are 4K video files handled?", a: "Dynamic adaptive bitrate streaming ensures instant playback on cellular connections without buffering." }
      ],
      mockupType: "browser",
      seo: {
        title: "Black Mango Production Case Study - Film & Media Showcase | KifalTech",
        metaDesc: "Discover how KifalTech built a cinematic media portfolio for Black Mango Production, boosting pitch win rates by +40%.",
        canonical: "https://kifaltech.com/portfolio/black-mango-production"
      }
    }
  ],

  // Solution Categories
  solutions: [
    {
      id: "web-software",
      title: "Web & Software Solutions",
      desc: "Custom-built web platforms, scalable web applications, and mobile apps designed to streamline business workflows and accelerate growth.",
      servicesIncluded: ["Web Development", "App Development", "Custom Web Applications"]
    },
    {
      id: "design-branding",
      title: "Design & Brand Identity",
      desc: "Cohesive visual systems, modern web UI/UX design, custom logo marks, and corporate stationery that leave an enduring impression.",
      servicesIncluded: ["Web Design", "Logo Design", "Stationery Design"]
    },
    {
      id: "ecommerce-growth",
      title: "E-Commerce & Online Storefronts",
      desc: "High-converting Shopify stores and robust e-commerce architectures engineered with seamless payments and intuitive shopping journeys.",
      servicesIncluded: ["Shopify Development", "E-Commerce Functionality", "Order Management Systems"]
    },
    {
      id: "digital-growth",
      title: "Digital Growth & Visibility",
      desc: "Data-driven SEO, Google Ads PPC, social media management, and video content that drive qualified traffic and commercial results.",
      servicesIncluded: ["Search Engine Optimization (SEO)", "Google Ads Management", "Social Media Marketing", "Video Editing"]
    }
  ],

  // Exact 7 Pricing Categories and Plans from kifaltech.com
  pricing: {
    "web-dev": {
      name: "Web Development",
      plans: [
        {
          name: "Basic Plan",
          price: "$149",
          billing: "One Time",
          features: [
            "1-Page Website Design",
            "Fully Mobile Responsive",
            "3 Revisions",
            "Contact/Query Form",
            "Security Protocol",
            "Dedicated Project Manager",
            "24/7 Customer Support"
          ]
        },
        {
          name: "Standard Plan",
          price: "$399",
          billing: "One Time",
          recommended: true,
          features: [
            "1-5 Page Website",
            "Fully Mobile Responsive",
            "Unlimited Revisions",
            "SEO Optimized",
            "CMS-Based (WordPress / Headless)",
            "Contact/Query Form",
            "Online Booking System",
            "Security Protocol",
            "Social Media Integration",
            "Complete Deployment",
            "Dedicated Project Manager",
            "24/7 Customer Support"
          ]
        },
        {
          name: "Premium Plan",
          price: "$799",
          billing: "One Time",
          features: [
            "5-10 Page Website",
            "Mobile & Tablet Friendly",
            "Unlimited Revisions",
            "SEO Optimized",
            "CMS-Based (WordPress / Headless)",
            "Contact/Query Form",
            "Online Booking System",
            "Security Protocol",
            "Social Media Integration",
            "Complete Deployment",
            "Quarterly Website Performance Report",
            "Cross Browser Compatible",
            "Dedicated Project Manager",
            "24/7 Customer Support"
          ]
        }
      ]
    },

    "ecommerce": {
      name: "Ecommerce Solution",
      plans: [
        {
          name: "Starter Plan",
          price: "$499",
          billing: "One Time",
          features: [
            "E-commerce Functionality",
            "Up to 20 Products",
            "Product Rating and Review",
            "3 Revisions",
            "Order Management System",
            "Mini Shopping Cart Integration",
            "Online Payment Integration",
            "Fully Mobile Friendly",
            "Contact/Query Form",
            "Security Protocol",
            "Quarterly Website Performance Report",
            "Dedicated Ecommerce Consultant",
            "24/7 Customer Support"
          ]
        },
        {
          name: "Growth Plan",
          price: "$749",
          billing: "One Time",
          recommended: true,
          features: [
            "Unlimited Revisions",
            "Up to 50 Products",
            "E-commerce Functionality",
            "Order Management System",
            "Product Rating and Review",
            "Mini Shopping Cart Integration",
            "Shipping Integration",
            "Content Management System (CMS)",
            "Online Payment Integration",
            "Easy Product Search",
            "Mobile & Tablet Friendly",
            "Contact/Query Form",
            "Social Media Integration",
            "Security Protocol",
            "Quarterly Website Performance Report",
            "Dedicated Ecommerce Consultant",
            "24/7 Customer Support"
          ]
        },
        {
          name: "Pro Plan",
          price: "$999",
          billing: "One Time",
          features: [
            "Unlimited Revisions",
            "Up to 50 Products",
            "E-commerce Functionality",
            "Order Management System",
            "Product Rating and Review",
            "Mini Shopping Cart Integration",
            "Shipping Integration",
            "Advanced Product Filtering",
            "Abandoned Cart Recovery",
            "Content Management System (CMS)",
            "Online Payment Integration",
            "Full Store Design",
            "Easy Product Search",
            "Mobile & Tablet Friendly",
            "SEO Optimized",
            "Contact/Query Form",
            "Social Media Integration",
            "Security Protocol",
            "Quarterly Website Performance Report",
            "Dedicated Ecommerce Consultant",
            "Cross Browser Compatible",
            "24/7 Customer Support"
          ]
        }
      ]
    },

    "branding": {
      name: "Branding",
      plans: [
        {
          name: "Starter",
          price: "$89",
          billing: "One Time",
          features: [
            "3 Unique Logo Design Concepts",
            "1 Dedicated Logo Designer",
            "By 1 Experienced Designer",
            "4 Free Revisions",
            "Dedicated Project Manager",
            "24/7 Customer Support",
            "100% Ownership",
            "Final Files: (AI, PSD, EPS, PNG, JPG, PDF)"
          ]
        },
        {
          name: "Standard",
          price: "$149",
          billing: "One Time",
          recommended: true,
          features: [
            "5 Unique Logo Design Concepts",
            "2 Dedicated Logo Designers",
            "By 2 Experienced Designers",
            "Free Color Options",
            "Unlimited Revisions",
            "Dedicated Project Manager",
            "24/7 Customer Support",
            "100% Ownership",
            "Final Files: (AI, PSD, EPS, PNG, JPG, PDF)"
          ]
        },
        {
          name: "Premium",
          price: "$249",
          billing: "One Time",
          features: [
            "8 Unique Logo Design Concepts",
            "3 Dedicated Logo Designers",
            "By 3 Experienced Designers",
            "Free Color Options",
            "Unlimited Revisions",
            "Business Card Design",
            "Letterhead & Envelope Design",
            "Free Icon Design",
            "Complete Brand Guidelines Book",
            "Dedicated Project Manager",
            "24/7 Customer Support",
            "100% Ownership",
            "Final Files: (AI, PSD, EPS, PNG, JPG, PDF)"
          ]
        }
      ]
    },

    "stationery": {
      name: "Stationery Design",
      plans: [
        {
          name: "Basic",
          price: "$59",
          billing: "One Time",
          features: [
            "Business Card Design (Front & Back)",
            "Print-Ready 300 DPI Files",
            "3 Revisions",
            "Dedicated Designer",
            "Full Ownership Rights"
          ]
        },
        {
          name: "Standard",
          price: "$119",
          billing: "One Time",
          recommended: true,
          features: [
            "Business Card + Letterhead Design",
            "Matching Envelope Design",
            "Editable MS Word Letterhead Template",
            "Unlimited Revisions",
            "Print-Ready & Digital Formats"
          ]
        },
        {
          name: "Complete Suite",
          price: "$189",
          billing: "One Time",
          features: [
            "Full Corporate Stationery Kit",
            "Business Cards, Letterhead, Envelopes",
            "Presentation Folder & HTML Email Signature",
            "Brand Style Consistency Guide",
            "Priority Support & Source Files"
          ]
        }
      ]
    },

    "social-media": {
      name: "Social Media",
      plans: [
        {
          name: "Starter Plan",
          price: "$249",
          billing: "One Time",
          features: [
            "Facebook + Instagram + Twitter",
            "Total 15 Graphics Design",
            "12 Quality Posts",
            "1 Cover Photo Design",
            "1 Profile Picture Design",
            "Engagement Strategy",
            "Monthly Performance Report",
            "Dedicated Social Media Manager",
            "24/7 Customer Support"
          ]
        },
        {
          name: "Bronze Plan",
          price: "$399",
          billing: "One Time",
          recommended: true,
          features: [
            "Facebook + Instagram + Twitter + Pinterest",
            "Total 20 Graphics Design",
            "15 Quality Posts",
            "2 Cover Photo Designs",
            "2 Profile Picture Designs",
            "Content Calendar Creation",
            "Hashtag Optimization Strategy",
            "Bi-Weekly Performance Report",
            "Dedicated Social Media Manager",
            "24/7 Customer Support"
          ]
        },
        {
          name: "Golden Plan",
          price: "$599",
          billing: "One Time",
          features: [
            "Facebook + Instagram + Twitter + Pinterest + LinkedIn",
            "Total 30 Graphics Design",
            "25 Quality Posts + 5 Story Videos/Reels",
            "3 Cover Photo Designs",
            "3 Profile Picture Designs",
            "Active Community Management",
            "Influencer Outreach Consultation",
            "Weekly Performance Report & Strategy Call",
            "Dedicated Senior Social Media Specialist",
            "24/7 Priority Support"
          ]
        }
      ]
    },

    "google-ads": {
      name: "Google Ads",
      plans: [
        {
          name: "Basic Plan",
          price: "$499",
          billing: "One Time",
          features: [
            "Recommended $500 - $1,500 Ad Spend/month",
            "1 Campaign Managed",
            "UpTo 25 Keywords Targeted",
            "Competitor Analysis",
            "Negative Keywords List",
            "Ad Copywriting (3 Variations)",
            "Conversion Tracking Setup",
            "Monthly Performance Report",
            "Email Support"
          ]
        },
        {
          name: "Standard",
          price: "$749",
          billing: "One Time",
          recommended: true,
          features: [
            "Recommended $1,500 - $5,000 Ad Spend/month",
            "Up to 3 Campaigns Managed",
            "UpTo 60 Keywords Targeted",
            "Competitor Keyword Spying",
            "Weekly Negative Keyword Pruning",
            "Ad Copywriting (6 Variations + Responsive Search Ads)",
            "Advanced Conversion Tracking (GTM + GA4)",
            "Smart Bidding Strategy Optimization",
            "Bi-Weekly Performance Report",
            "Phone & Email Support"
          ]
        },
        {
          name: "Premium",
          price: "$999",
          billing: "One Time",
          features: [
            "Recommended $5,000+ Ad Spend/month",
            "Unlimited Campaigns (Search, Display, Performance Max)",
            "Unlimited Keywords & Competitor Analysis",
            "Weekly A/B Testing of Ad Copy and Extensions",
            "Full Server-Side Tracking & Enhanced Conversions",
            "Landing Page CRO Audit & Recommendations",
            "Dedicated Google Ads Certified Specialist",
            "Weekly Reporting Call & Real-Time Dashboard",
            "24/7 Priority Support"
          ]
        }
      ]
    },

    "seo": {
      name: "SEO",
      plans: [
        {
          name: "Starter Plan",
          price: "$399",
          billing: "One Time",
          features: [
            "UpTo 15 Keywords Targeted",
            "Basic On-Page Optimization",
            "Basic Technical SEO & Crawl Fixes",
            "1 Blog Topic / Month Guidance",
            "Monthly Ranking Report",
            "Email Support"
          ]
        },
        {
          name: "Bronze",
          price: "$650",
          billing: "One Time",
          recommended: true,
          features: [
            "UpTo 30 Keywords Targeted",
            "Comprehensive On-Page Optimization",
            "Technical SEO & Core Web Vitals Remediation",
            "2 Blog Topics / Month Guidance",
            "White-Hat Backlink Outreach",
            "Competitor Ranking Analysis",
            "Monthly Report + Keyword Tracking Dashboard",
            "Monthly Strategy Call"
          ]
        },
        {
          name: "Golden Plan",
          price: "$899",
          billing: "One Time",
          features: [
            "UpTo 50 - 100 Keywords Targeted",
            "Full Advanced On-Page & Semantic Entity SEO",
            "Full Technical Site Audit & Indexation Overhaul",
            "Content Strategy & Editorial Calendar",
            "High-Authority Digital PR & Backlink Outreach",
            "5 In-Depth Competitor Audits",
            "Weekly Ranking Analysis & Bi-Weekly Calls",
            "Dedicated Senior SEO Strategist",
            "24/7 Priority Support"
          ]
        }
      ]
    }
  },

  // 6-Step Sophisticated Process System (Section 21)
  processSteps: [
    {
      step: "01",
      title: "Discovery",
      desc: "Understand the business, audience, and functional requirements through structured technical consultation."
    },
    {
      step: "02",
      title: "Strategy",
      desc: "Define platform structure, system architecture, delivery milestones, and clear commercial direction."
    },
    {
      step: "03",
      title: "Design",
      desc: "Create bespoke interface layouts, interactive prototypes, and design tokens tailored to your brand identity."
    },
    {
      step: "04",
      title: "Development",
      desc: "Build, integrate, and engineer clean, maintainable, version-controlled source code with zero bloat."
    },
    {
      step: "05",
      title: "Testing",
      desc: "Rigorous cross-browser validation, responsiveness verification, security auditing, and Core Web Vitals checks."
    },
    {
      step: "06",
      title: "Launch & Support",
      desc: "Deploy to production cloud infrastructure, configure edge caching, and provide long-term SLA maintenance."
    }
  ],

  // Why KifalTech Authentic Value Pillars (Section 23)
  whyUs: [
    {
      title: "Business-Focused Thinking",
      desc: "We analyze your commercial goals first. Every feature, database choice, and interaction exists to solve business problems and lower operational overhead."
    },
    {
      title: "Professional Communication",
      desc: "Direct access to senior developers and technical leads. Clear weekly sprint updates, transparent milestone tracking, and rapid response times."
    },
    {
      title: "Modern Human Design",
      desc: "No generic AI templates or predictable card grids. We craft tailored, brand-specific visual systems with strong typography and intentional spacing."
    },
    {
      title: "Custom Clean Solutions",
      desc: "Bespoke engineering built on modern standards. Clean, maintainable, modular codebases with full documentation and zero proprietary lock-in."
    },
    {
      title: "Responsive Cross-Device Development",
      desc: "Flawless rendering and interaction across every screen size — from compact 375px mobile devices to 4K ultra-wide workstations."
    },
    {
      title: "100% Intellectual Property Ownership",
      desc: "You retain full ownership of all source code, design assets, databases, and deployment keys upon milestone completion."
    },
    {
      title: "Long-Term Support & Maintenance",
      desc: "We stand behind what we build with reliable ongoing maintenance, proactive security monitoring, and post-launch updates."
    }
  ],

  // Client Feedback statement based on live site
  clientFeedbackStatement: {
    heading: "Our Happy Clients",
    subheading: "At Kifal Tech, we're dedicated to delivering exceptional results that drive real growth for our clients. Hear directly from international founders and enterprise leaders who trust us.",
    ratingScore: "4.6",
    ratingMax: "5.0",
    ratingText: "Rated 4.6 out of 5.0 based on verified client feedback on Google Reviews and Clutch."
  },

  // Testimonials
  testimonials: [
    {
      quote: "KifalTech completely transformed our e-commerce platform. Their attention to mobile checkout speed and Shopify 2.0 theme architecture lifted our conversion rate by over 38% in the first quarter.",
      author: "Marcus Vance",
      role: "Head of Digital",
      company: "Cuts Clothing",
      rating: 5
    },
    {
      quote: "The technical depth and design elegance KifalTech brought to Rise 2 Studio was exceptional. They built a 98-performance portfolio that our corporate clients consistently compliment.",
      author: "Elena Rostova",
      role: "Creative Director",
      company: "Rise 2 Studio",
      rating: 5
    },
    {
      quote: "Working with KifalTech was seamless. Clean code, punctual sprints, and zero surprises. Our direct bookings surged by 46% after the new hotel booking engine launched.",
      author: "Julian Winkler",
      role: "Managing Director",
      company: "Winkler Hotels",
      rating: 5
    },
    {
      quote: "Their team understands both software engineering and digital marketing. Our organic traffic and inbound consulting leads doubled within five months of their SEO overhaul.",
      author: "Pranav Suresh",
      role: "Principal Consultant",
      company: "Executive Advisory",
      rating: 5
    }
  ],

  // Static SEO metadata for primary pages
  pageSEO: {
    home: {
      title: "Kifal Tech | Next-Gen Digital Engineering & Agency Solutions",
      metaDesc: "Kifal Tech is a premier digital software and web development agency delivering high-performance web apps, Shopify stores, mobile apps, and enterprise digital solutions.",
      canonical: "https://kifaltech.com/"
    },
    services: {
      title: "Digital Software & Agency Services Directory | KifalTech",
      metaDesc: "Explore KifalTech's 11 core competencies: custom web development, mobile apps, UI/UX web design, Shopify e-commerce, SEO, Google Ads, and video editing.",
      canonical: "https://kifaltech.com/services"
    },
    portfolio: {
      title: "Selected Work & Case Studies | KifalTech Digital Agency",
      metaDesc: "Explore real digital transformations engineered by KifalTech. Case studies across web development, mobile applications, Shopify storefronts, and brand design.",
      canonical: "https://kifaltech.com/portfolio"
    },
    about: {
      title: "About KifalTech | Software Craftsmanship, Mission & Principles",
      metaDesc: "Learn about KifalTech's origins, engineering values, international client base, and commitment to building sustainable digital platforms since 2022.",
      canonical: "https://kifaltech.com/about"
    },
    pricing: {
      title: "Transparent Agency Pricing & Packages | KifalTech",
      metaDesc: "Explore clear, truthful pricing plans for web development, e-commerce, branding, SEO, and advertising. Zero hidden fees, full code ownership.",
      canonical: "https://kifaltech.com/pricing"
    },
    quickFix: {
      title: "Emergency Website Support & Quick Fix Services | KifalTech",
      metaDesc: "Rapid triage and emergency website bug fixing. Resolve layout bugs, database errors, malware, slow loading speeds, and checkout issues within 24-48 hours.",
      canonical: "https://kifaltech.com/quick-fix"
    },
    contact: {
      title: "Contact KifalTech | Start Your Digital Project & Consultation",
      metaDesc: "Schedule a discovery consultation with KifalTech's engineering leads. Get a clear proposal, timeline, and architectural recommendation within 24 hours.",
      canonical: "https://kifaltech.com/contact"
    },
    solutions: {
      title: "Enterprise Digital Solutions & Architecture Frameworks | KifalTech",
      metaDesc: "Explore KifalTech's integrated solutions: Web & Software Platforms, Brand Identity Systems, E-Commerce Storefronts, and Data-Driven Digital Growth.",
      canonical: "https://kifaltech.com/solutions"
    },
    process: {
      title: "Our Engineering Process & Methodology | KifalTech",
      metaDesc: "Discover KifalTech's 4-phase agile delivery framework: Discovery, UI/UX Strategy, Full-Stack Engineering, and Zero-Downtime Launch with a 30-day warranty.",
      canonical: "https://kifaltech.com/process"
    },
    careers: {
      title: "Careers & Open Engineering Positions | KifalTech",
      metaDesc: "Join KifalTech's remote-first engineering and design collective. Explore open roles in React, Next.js, Shopify Plus, UI/UX design, and technical SEO.",
      canonical: "https://kifaltech.com/careers"
    },
    faqs: {
      title: "Frequently Asked Questions (FAQs) | KifalTech",
      metaDesc: "Find clear answers to common questions about KifalTech's software engineering process, pricing tiers, source code ownership, and post-launch SLAs.",
      canonical: "https://kifaltech.com/faqs"
    },
    privacyPolicy: {
      title: "Privacy Policy | KifalTech Digital Solutions",
      metaDesc: "Learn how KifalTech collects, safeguards, and handles personal data and client information in accordance with GDPR, CCPA, and international data privacy regulations.",
      canonical: "https://kifaltech.com/privacy-policy"
    },
    termsOfService: {
      title: "Terms of Service | KifalTech Digital Solutions",
      metaDesc: "Review KifalTech's standard master services agreement, intellectual property ownership terms, 30-day warranty, and milestone-based project policies.",
      canonical: "https://kifaltech.com/terms-of-service"
    },
    notFound: {
      title: "404 Page Not Found | KifalTech",
      metaDesc: "The requested page could not be located. Explore KifalTech's services, case studies, or contact our engineering team.",
      canonical: "https://kifaltech.com/404"
    }
  }
};

// Currency Conversion & Dynamic Formatter Helper
export function formatPriceByCurrency(usdStringOrNumber, currencyCode = 'USD') {
  if (usdStringOrNumber === undefined || usdStringOrNumber === null) return '';
  if (typeof usdStringOrNumber === 'string' && !usdStringOrNumber.includes('$')) {
    return usdStringOrNumber;
  }
  const numeric = typeof usdStringOrNumber === 'number'
    ? usdStringOrNumber
    : parseInt(usdStringOrNumber.toString().replace(/[^0-9]/g, ''), 10);

  if (isNaN(numeric)) return usdStringOrNumber;

  const curr = agencyData.currencies[currencyCode] || agencyData.currencies.USD;
  const converted = Math.round(numeric * curr.rate);
  return `${curr.prefix}${converted.toLocaleString()}`;
}

export function getCurrencyList() {
  return Object.values(agencyData.currencies);
}



// 2. CLIENT-SIDE ROUTER CONTEXT & LINK COMPONENT
const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {}
});

function useRouter() {
  return useContext(RouterContext);
}

function RouterProvider({ children }) {
  const getCleanPath = () => {
    let path = window.location.pathname || '/';
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      path = window.location.hash.slice(1);
    }
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    return path;
  };

  const [currentPath, setCurrentPath] = useState(getCleanPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getCleanPath());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (toPath) => {
    if (!toPath) return;
    if (toPath.startsWith('#') && !toPath.startsWith('#/')) {
      const el = document.getElementById(toPath.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    let target = toPath;
    if (target.length > 1 && target.endsWith('/')) {
      target = target.slice(0, -1);
    }
    if (window.location.protocol === 'file:') {
      window.location.hash = '#' + target;
    } else {
      window.history.pushState({}, '', target);
    }
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

function Link({ to, children, className, style, onClick, ...props }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} style={style} {...props}>
      {children}
    </a>
  );
}

// 3. SEO & SCHEMA HEAD MANAGER
function SEOHead({ title, description, canonical, schema = null, breadcrumbs = null, ogType = 'website', noIndex = false }) {
  const { company } = agencyData;
  const pageTitle = title || `${company.name} | ${company.tagline}`;
  const pageDesc = description || company.subheadline;
  const canonicalUrl = canonical || company.siteUrl;

  useEffect(() => {
    document.title = pageTitle;

    const setMetaTag = (attr, key, content) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', pageDesc);
    setMetaTag('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow');
    setMetaTag('name', 'author', company.name);

    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', pageDesc);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', company.name);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', pageDesc);

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // Schema Management
    const jsonLdScripts = [];
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": company.legalName,
      "alternateName": company.name,
      "url": company.siteUrl,
      "email": company.email,
      "telephone": company.inquiryPhone,
      "sameAs": company.socials.map((s) => s.url),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": company.rating.score,
        "bestRating": company.rating.max,
        "ratingCount": "128"
      }
    };

    const schemasToInject = [orgSchema];
    if (schema) {
      if (Array.isArray(schema)) schemasToInject.push(...schema);
      else schemasToInject.push(schema);
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((b, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": b.name,
          "item": b.url
        }))
      });
    }

    const oldDynamicSchemas = document.querySelectorAll('script[data-dynamic-seo="true"]');
    oldDynamicSchemas.forEach((tag) => tag.remove());

    schemasToInject.forEach((item) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic-seo', 'true');
      script.textContent = JSON.stringify(item);
      document.head.appendChild(script);
      jsonLdScripts.push(script);
    });

    return () => {
      jsonLdScripts.forEach((script) => script.remove());
    };
  }, [pageTitle, pageDesc, canonicalUrl, ogType, noIndex, schema, breadcrumbs]);

  return null;
}

// 4. SHARED SVG ICONS
const SvgArrow = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
);

const SvgCheck = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '3px' }}>
    <path d="M3 8.5l3.5 3.5 6.5-7"/>
  </svg>
);

const SvgStar = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="#f59e0b" style={{ flexShrink: 0 }}>
    <path d="M10 1.5l2.5 5.5 6 .9-4.3 4.2 1 6-5.2-2.8-5.2 2.8 1-6-4.3-4.2 6-.9L10 1.5z"/>
  </svg>
);

const SvgSun = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const SvgMoon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

// 5. NAVBAR WITH THEME SWITCHER

function Navbar({ onOpenQuote, onOpenQuickFix }) {
  const { currentPath, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { company } = agencyData;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Solutions', to: '/solutions' },
    { label: 'Work', to: '/portfolio' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ];

  const handleStartProject = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      navigate('/contact');
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(23, 19, 19, 0.95)' : '#171313',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.04)',
        transition: 'background-color 0.2s ease, border-color 0.2s ease'
      }}
    >
      {/* Subtle Top Utility Bar — International Direct Communication */}
      <div
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '6px 0',
          fontSize: '0.74rem',
          color: 'var(--text-dim)',
          fontFamily: 'var(--font-mono)'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#29D9C5', fontWeight: 600 }}>
              <span className="pulse-indicator" style={{ width: '5px', height: '5px' }}></span>
              <span>Accepting New Client Projects</span>
            </span>
            <span className="hide-mobile" style={{ color: 'rgba(255, 255, 255, 0.15)' }}>|</span>
            <span className="hide-mobile" style={{ color: 'var(--text-muted)' }}>
              Direct: <a href={`tel:${company.inquiryPhone}`} style={{ color: '#ffffff', textDecoration: 'none' }}>{company.inquiryPhone}</a>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <CurrencySelector />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div style={{ padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Authentic KifalTech Logo */}
          <KifalTechLogo compact={false} />

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPath === item.to || (item.to !== '/' && currentPath.startsWith(item.to));
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  style={{
                    color: isActive ? '#29D9C5' : 'var(--text-main)',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 500,
                    transition: 'color 0.15s ease',
                    position: 'relative',
                    padding: '6px 2px'
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: '#29D9C5',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Start a Project CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={handleStartProject}
              className="btn btn-primary"
              style={{
                height: '40px',
                padding: '0 20px',
                fontSize: '0.86rem'
              }}
            >
              Start a Project
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-toggle-btn"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-xs)',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer'
              }}
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: '#171313',
            borderBottom: '1px solid var(--border-medium)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {navItems.map((item) => {
            const isActive = currentPath === item.to || (item.to !== '/' && currentPath.startsWith(item.to));
            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#29D9C5' : '#ffffff',
                  padding: '8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <span>{item.label}</span>
                {isActive && <span style={{ color: '#29D9C5', fontSize: '0.8rem' }}>●</span>}
              </Link>
            );
          })}

          <div style={{ paddingTop: '12px' }}>
            <button
              onClick={() => {
                setMobileOpen(false);
                handleStartProject();
              }}
              className="btn btn-primary"
              style={{ width: '100%', height: '44px' }}
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// 6. HERO COMPONENT

function Hero({ onStartProject, onOpenQuickFix }) {
  const { company } = agencyData;
  const [activeTab, setActiveTab] = useState('overview'); // overview, performance, code

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '124px',
        paddingBottom: '88px',
        backgroundColor: '#171313',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(40px, 6vw, 64px)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Clear, Professional Agency Message */}
          <div>
            <div className="eyebrow">
              <span className="pulse-indicator"></span>
              <span>Digital Software & Web Agency</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.1rem)',
                lineHeight: 1.12,
                marginBottom: '22px',
                color: '#ffffff',
                fontWeight: 700,
                letterSpacing: '-0.03em'
              }}
            >
              We Build <span className="hero-stroked">Smart Digital</span> Solutions for Modern Businesses.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.18rem)',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: '34px',
                maxWidth: '560px'
              }}
            >
              We design, develop, and maintain custom web applications, business websites, and digital software for startups, established companies, and international brands focused on real business outcomes.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={onStartProject}
                className="btn btn-primary btn-glow"
                style={{ height: '48px', padding: '0 28px', fontSize: '0.94rem' }}
              >
                <span>Start a Project</span>
                <SvgArrow />
              </button>

              <Link
                to="/portfolio"
                className="btn btn-secondary"
                style={{ height: '48px', padding: '0 26px', fontSize: '0.94rem' }}
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Credibility statement based on real capabilities — NO fake statistics */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                marginTop: '44px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                flexWrap: 'wrap',
                fontSize: '0.84rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span style={{ color: '#ffffff', fontWeight: 600 }}>CORE STANDARDS:</span>
              <span>Bespoke Architecture</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
              <span>100% Code Ownership</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
              <span>Direct Developer Collaboration</span>
            </div>
          </div>

          {/* Right Column: Realistic Product UI Preview (Human-Designed, Authentic) */}
          <div>
            <div
              className="mockup-browser"
              style={{
                border: '1px solid var(--border-medium)',
                backgroundColor: 'var(--bg-card)',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* Browser Window Chrome */}
              <div className="mockup-browser-header">
                <div className="mockup-dots">
                  <span className="mockup-dot close"></span>
                  <span className="mockup-dot min"></span>
                  <span className="mockup-dot max"></span>
                </div>
                <div className="mockup-url-bar">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <span>app.clientportal.io/production/dashboard</span>
                </div>
                <span style={{ fontSize: '0.68rem', color: '#29D9C5', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  ● 200 OK
                </span>
              </div>

              {/* Realistic Web Platform Interface Content */}
              <div style={{ padding: '22px' }}>
                {/* Platform Internal Nav */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '14px',
                    borderBottom: '1px solid var(--border-subtle)',
                    marginBottom: '18px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '4px', backgroundColor: '#29D9C5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#171313', fontSize: '0.72rem', fontWeight: 800 }}>
                      K
                    </div>
                    <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                      Client Portal Demo
                    </span>
                  </div>

                  {/* Interface Tabs */}
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[
                      { id: 'overview', label: 'Platform Metrics' },
                      { id: 'performance', label: 'Core Vitals' },
                      { id: 'code', label: 'Source Spec' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                          background: activeTab === tab ? '#292323' : 'transparent',
                          color: activeTab === tab ? '#29D9C5' : 'var(--text-muted)',
                          border: '1px solid',
                          borderColor: activeTab === tab ? 'rgba(41, 217, 197, 0.4)' : 'transparent',
                          borderRadius: 'var(--radius-xs)',
                          padding: '4px 10px',
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          cursor: 'pointer',
                          fontWeight: activeTab === tab ? 600 : 400
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab 1: Realistic Platform Metrics */}
                {activeTab === 'overview' && (
                  <div>
                    {/* Realistic Metric Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
                      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>ACTIVE SESSIONS</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>18,420</div>
                        <div style={{ fontSize: '0.68rem', color: '#29D9C5', marginTop: '2px' }}>Operational load</div>
                      </div>

                      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>AVG API LATENCY</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>38ms</div>
                        <div style={{ fontSize: '0.68rem', color: '#29D9C5', marginTop: '2px' }}>Edge cached</div>
                      </div>

                      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>UPTIME SLA</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>99.98%</div>
                        <div style={{ fontSize: '0.68rem', color: '#29D9C5', marginTop: '2px' }}>Automated health check</div>
                      </div>
                    </div>

                    {/* Realistic Architectural Workflow Status */}
                    <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '14px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>PRODUCTION PIPELINE</span>
                        <span style={{ fontSize: '0.7rem', color: '#29D9C5', fontFamily: 'var(--font-mono)' }}>Deployment v2.4.1 Active</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ flex: 1, height: '4px', backgroundColor: '#332d2d', borderRadius: '2px', overflow: 'hidden' }}>
                          <div style={{ width: '100%', height: '100%', backgroundColor: '#29D9C5' }} />
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#ffffff', fontFamily: 'var(--font-mono)' }}>Verified</span>
                      </div>
                    </div>

                    {/* Delivered Module Checklist */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      <span>✓ Next.js SSR Frontend</span>
                      <span>✓ Headless CMS Integration</span>
                      <span>✓ Secure Payment Gateway</span>
                    </div>
                  </div>
                )}

                {/* Tab 2: Core Web Vitals */}
                {activeTab === 'performance' && (
                  <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#29D9C5', marginBottom: '12px' }}>
                      LIGHTHOUSE AUDIT BENCHMARKS
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', textAlign: 'center' }}>
                      <div style={{ padding: '10px 4px', background: 'var(--bg-card)', borderRadius: '4px' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#29D9C5' }}>98</div>
                        <div style={{ fontSize: '0.66rem', color: 'var(--text-dim)', marginTop: '2px' }}>Performance</div>
                      </div>
                      <div style={{ padding: '10px 4px', background: 'var(--bg-card)', borderRadius: '4px' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#29D9C5' }}>100</div>
                        <div style={{ fontSize: '0.66rem', color: 'var(--text-dim)', marginTop: '2px' }}>Accessibility</div>
                      </div>
                      <div style={{ padding: '10px 4px', background: 'var(--bg-card)', borderRadius: '4px' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#29D9C5' }}>100</div>
                        <div style={{ fontSize: '0.66rem', color: 'var(--text-dim)', marginTop: '2px' }}>Best Practices</div>
                      </div>
                      <div style={{ padding: '10px 4px', background: 'var(--bg-card)', borderRadius: '4px' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#29D9C5' }}>100</div>
                        <div style={{ fontSize: '0.66rem', color: 'var(--text-dim)', marginTop: '2px' }}>SEO Structure</div>
                      </div>
                    </div>
                    <div style={{ marginTop: '14px', fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Tested under mobile 4G throttling. Zero layout shift (CLS 0.00), First Contentful Paint &lt; 0.7s.
                    </div>
                  </div>
                )}

                {/* Tab 3: Source Code Spec */}
                {activeTab === 'code' && (
                  <div className="mockup-terminal" style={{ margin: 0 }}>
                    <div style={{ color: 'var(--text-dim)', marginBottom: '8px' }}>// Production Build Pipeline</div>
                    <div><span style={{ color: '#29D9C5' }}>$</span> kifaltech-deploy --env=production</div>
                    <div style={{ color: 'var(--text-muted)' }}>✓ TypeScript typecheck passed (0 errors)</div>
                    <div style={{ color: 'var(--text-muted)' }}>✓ Static asset bundling optimized (WebP/AVIF)</div>
                    <div style={{ color: 'var(--text-muted)' }}>✓ Edge route pre-rendering complete (28 pages)</div>
                    <div style={{ color: '#29D9C5', marginTop: '6px' }}>✓ Ready for client handover — 100% IP ownership</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. MARQUEE COMPONENT

function Marquee() {
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

// 8. ABOUT SECTION (Home)

function AboutSection({ onLearnMore }) {
  const { company } = agencyData;

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section id="about" className="section-spacing" style={{ backgroundColor: '#171313', position: 'relative' }}>
      <div className="container">
        {/* Editorial Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            <span className="pulse-indicator"></span>
            <span>ABOUT KIFALTECH</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4.4vw, 3.6rem)',
              lineHeight: 1.15,
              color: '#ffffff',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginBottom: '20px'
            }}
          >
            A dedicated software and web agency built for businesses that value substance and reliable execution.
          </h2>

          <p style={{ fontSize: '1.12rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
            We design, develop, and maintain custom digital platforms for international founders, growing brands, and established companies. No bloated agency layers, no generic templates — just dependable software engineering aligned with your commercial objectives.
          </p>
        </div>

        {/* Asymmetric Editorial Grid (Text Narrative + Operational Blueprint) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(40px, 5vw, 64px)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Deep Answers to Core Questions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Who We Are & What We Do */}
            <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>
                Who We Are & What We Do
              </h3>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                KifalTech is an independent digital software and web engineering agency. We specialize in building bespoke web applications, high-performance business websites, and tailored e-commerce platforms using modern technologies such as React, Node.js, and cloud-native serverless systems.
              </p>
            </div>

            {/* Who We Work With */}
            <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.12)', paddingLeft: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>
                Who We Work With
              </h3>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                We partner with early-stage startups needing rapid MVP execution, growing SMBs looking to modernize outdated systems, and established international enterprises seeking a responsive, high-skill engineering partner without agency overhead.
              </p>
            </div>

            {/* How We Approach Projects */}
            <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.12)', paddingLeft: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>
                How We Approach Projects
              </h3>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                Every project begins with understanding your business goals and operational bottlenecks. We scope requirements realistically, establish weekly milestone deliveries, and maintain direct communication with the engineers actually writing your code.
              </p>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '12px' }}>
              <Link
                to="/about"
                className="btn btn-secondary"
                style={{ padding: '0 24px' }}
              >
                <span>Read Full Company Overview</span>
                <SvgArrow />
              </Link>
            </div>
          </div>

          {/* Right Column: Concrete Operational Blueprint (Visual Spec) */}
          <div
            style={{
              backgroundColor: '#1c1717',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: 'clamp(24px, 4vw, 36px)',
              position: 'relative'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--primary)',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>AGENCY OPERATIONAL BLUEPRINT</span>
              <span style={{ color: 'var(--text-dim)' }}>EST. 2022</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {/* Item 1 */}
              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>Clean Code Architecture</h4>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>No Bloat</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                  Built with modular component hierarchies, strict typing, and standardized linting so future developers can easily extend the platform.
                </p>
              </div>

              {/* Item 2 */}
              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>Direct Engineer Access</h4>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#ffffff', background: 'rgba(255, 255, 255, 0.08)', padding: '2px 8px', borderRadius: '4px' }}>Async & Live</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                  Communicate directly with technical leads via Slack, email, or video calls. Zero account manager filtering or lost specifications.
                </p>
              </div>

              {/* Item 3 */}
              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>100% IP Transfer</h4>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>Zero Lock-In</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                  You own all source repositories, Figma design files, cloud deployment keys, and documentation from the moment work completes.
                </p>
              </div>

              {/* Item 4 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>Post-Launch Reliability</h4>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#ffffff', background: 'rgba(255, 255, 255, 0.08)', padding: '2px 8px', borderRadius: '4px' }}>SLA Maintenance</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                  We stay with you past launch day — providing server patch management, uptime monitoring, and fast technical support when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 9. SERVICES LIST (Interactive Home Section)

function ServicesList({ onSelectService }) {
  const { services } = agencyData;
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);

  const activeService = services.find((s) => s.id === activeServiceId) || services[0];

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  const SvgCheck = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }}>
      <path d="M3 8.5l3.5 3.5 6.5-7"/>
    </svg>
  );

  return (
    <section id="services" className="section-spacing" style={{ backgroundColor: '#1a1515', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '52px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>
            <span className="pulse-indicator"></span>
            <span>CORE CAPABILITIES</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.5rem)',
              lineHeight: 1.15,
              color: '#ffffff',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              marginBottom: '18px'
            }}
          >
            Engineering & Design Capabilities
          </h2>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
            We deliver focused digital services spanning modern full-stack web development, custom WordPress engineering, intuitive UI/UX design, e-commerce systems, and performance optimization.
          </p>
        </div>

        {/* Editorial Layout: Left List + Right Sticky Dossier */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(32px, 4vw, 52px)',
            alignItems: 'flex-start'
          }}
        >
          {/* Left: Editorial Service Roster */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {services.map((s) => {
              const isActive = s.id === activeServiceId;
              return (
                <div
                  key={s.id}
                  onClick={() => setActiveServiceId(s.id)}
                  onMouseEnter={() => setActiveServiceId(s.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px 22px',
                    borderRadius: '6px',
                    backgroundColor: isActive ? '#241e1e' : 'transparent',
                    border: isActive ? '1px solid rgba(41, 217, 197, 0.35)' : '1px solid rgba(255, 255, 255, 0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isActive ? 'translateX(6px)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        color: isActive ? 'var(--primary)' : 'var(--text-dim)',
                        fontWeight: 600
                      }}
                    >
                      {s.number}
                    </span>
                    <span
                      style={{
                        fontSize: '1.14rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        color: isActive ? '#ffffff' : 'var(--text-main)',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {s.title}
                    </span>
                  </div>

                  <div
                    style={{
                      color: isActive ? 'var(--primary)' : 'var(--text-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'transform 0.2s ease',
                      transform: isActive ? 'translateX(4px)' : 'none'
                    }}
                  >
                    <SvgArrow />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Service Dossier (Sticky) */}
          <div style={{ position: 'sticky', top: '96px' }}>
            <div
              style={{
                padding: 'clamp(28px, 4vw, 40px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: '#1f1919',
                borderRadius: '8px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)'
              }}
            >
              {/* Header Badges */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      color: 'var(--primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontWeight: 600
                    }}
                  >
                    SERVICE {activeService.number}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {activeService.category}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--primary)',
                    background: 'rgba(41, 217, 197, 0.1)',
                    padding: '3px 9px',
                    borderRadius: '4px'
                  }}
                >
                  {activeService.turnaround}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.9rem', marginBottom: '14px', color: '#ffffff', letterSpacing: '-0.02em' }}>
                {activeService.title}
              </h3>

              {/* Short Description */}
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '24px' }}>
                {activeService.shortDesc}
              </p>

              {/* Key Deliverables */}
              <div style={{ marginBottom: '26px' }}>
                <div
                  style={{
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-dim)',
                    marginBottom: '12px',
                    letterSpacing: '0.08em'
                  }}
                >
                  WHAT WE DELIVER
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px', padding: 0, margin: 0 }}>
                  {activeService.deliverables.slice(0, 4).map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '11px', fontSize: '0.91rem' }}>
                      <SvgCheck />
                      <span style={{ color: 'var(--text-main)', lineHeight: 1.55 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              {activeService.techStack && (
                <div style={{ marginBottom: '28px', paddingTop: '18px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      textTransform: 'uppercase',
                      color: 'var(--text-dim)',
                      marginBottom: '10px',
                      letterSpacing: '0.08em'
                    }}
                  >
                    TECHNOLOGY STACK
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {activeService.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.76rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#ffffff',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          padding: '3px 8px',
                          borderRadius: '4px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  to={`/services/${activeService.id}`}
                  className="btn btn-primary"
                  style={{ flex: 1, minWidth: '160px' }}
                >
                  <span>View Dedicated Service Page</span>
                  <SvgArrow />
                </Link>
                <button
                  type="button"
                  onClick={() => onSelectService(activeService)}
                  className="btn btn-secondary"
                  style={{ padding: '0 20px' }}
                >
                  Request Scope
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 10. SOLUTIONS SECTION

function SolutionsSection({ onSelectSolution }) {
  const { solutions } = agencyData;

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section id="solutions" className="section-spacing" style={{ backgroundColor: '#181313', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '56px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>
            <span className="pulse-indicator"></span>
            <span>END-TO-END SOLUTIONS</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.5rem)',
              lineHeight: 1.15,
              color: '#ffffff',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              marginBottom: '16px'
            }}
          >
            Structured Solutions by Business Objective
          </h2>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
            We package cross-functional engineering, UX design, and search optimization into focused business outcomes.
          </p>
        </div>

        {/* 2x2 Architectural Grid with Horizontal Dividing Lines */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(24px, 3vw, 36px)'
          }}
        >
          {solutions.map((sol, index) => (
            <div
              key={sol.id}
              style={{
                backgroundColor: '#1f1919',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: 'clamp(28px, 4vw, 38px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.2s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      color: 'var(--primary)',
                      fontWeight: 600,
                      letterSpacing: '0.08em'
                    }}
                  >
                    CAPABILITY TRACK 0{index + 1}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    Bespoke Scope
                  </span>
                </div>

                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                  {sol.title}
                </h3>

                <p style={{ fontSize: '0.96rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '24px' }}>
                  {sol.desc}
                </p>

                <div style={{ marginBottom: '28px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-dim)',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                      letterSpacing: '0.06em'
                    }}
                  >
                    Services Orchestrated:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {sol.servicesIncluded.map((s, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.78rem',
                          color: '#ffffff',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          padding: '4px 10px',
                          borderRadius: '4px'
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onSelectSolution(sol)}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.88rem', height: '42px' }}
                >
                  <span>Discuss This Solution</span>
                  <SvgArrow />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 11. PORTFOLIO GRID (Home)

function PortfolioGrid({ onStartSimilarProject }) {
  const { portfolio } = agencyData;

  // Curate 4 featured projects for varied editorial presentation
  const p1 = portfolio.find((p) => p.id === 'rise-2-studio') || portfolio[0];
  const p2 = portfolio.find((p) => p.id === 'cuts-clothing') || portfolio[1];
  const p3 = portfolio.find((p) => p.id === 'winkler-hotels') || portfolio[2];
  const p4 = portfolio.find((p) => p.id === 'flow-trix') || portfolio[5];

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section id="portfolio" className="section-spacing" style={{ backgroundColor: '#171313', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ maxWidth: '720px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              <span className="pulse-indicator"></span>
              <span>SELECTED WORK</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.3rem, 4.2vw, 3.5rem)',
                lineHeight: 1.15,
                color: '#ffffff',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                marginBottom: '16px'
              }}
            >
              Curated Client Case Studies
            </h2>
            <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              A selection of digital platforms, e-commerce storefronts, and web software engineered for verified reliability and performance.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="btn btn-secondary"
            style={{ padding: '0 24px' }}
          >
            <span>View All Case Studies ({portfolio.length})</span>
            <SvgArrow />
          </Link>
        </div>

        {/* Varied Editorial Showcase (NO identical 3-column card grid) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          
          {/* ==============================================================
              PROJECT 01: Large Hero Feature Project (Rise 2 Studio)
              ============================================================== */}
          <div
            style={{
              backgroundColor: '#1d1717',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: 'clamp(28px, 4vw, 44px)',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
                gap: 'clamp(32px, 4vw, 56px)',
                alignItems: 'center'
              }}
            >
              {/* Metadata & Narrative */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.1)', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {p1.projectType || 'Client Case Study'}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {p1.industry}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    {p1.year}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.02em' }}>
                  {p1.title}
                </h3>

                <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '24px' }}>
                  {p1.desc}
                </p>

                {/* Outcome Statement */}
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderLeft: '2px solid var(--primary)',
                    padding: '14px 18px',
                    marginBottom: '26px'
                  }}
                >
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.06em' }}>
                    DELIVERED OUTCOME
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.55 }}>
                    {p1.outcome || 'Lightweight media streaming architecture achieving sub-second load times.'}
                  </div>
                </div>

                {/* Services & Tech */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                  {p1.services.map((svc) => (
                    <span key={svc} style={{ fontSize: '0.78rem', color: 'var(--text-main)', background: 'rgba(255, 255, 255, 0.06)', padding: '3px 10px', borderRadius: '4px' }}>
                      {svc}
                    </span>
                  ))}
                  <span style={{ fontSize: '0.78rem', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.08)', padding: '3px 10px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
                    React / Next.js
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link
                    to={`/portfolio/${p1.id}`}
                    className="btn btn-primary"
                  >
                    <span>View Case Study</span>
                    <SvgArrow />
                  </Link>
                </div>
              </div>

              {/* Realistic Visual Mockup */}
              <div
                style={{
                  backgroundColor: '#120f0f',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Mockup Chrome Header */}
                <div style={{ backgroundColor: '#1c1717', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></span>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></span>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#27c93f' }}></span>
                  </div>
                  <div style={{ flex: 1, backgroundColor: '#120f0f', padding: '3px 10px', borderRadius: '4px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                    rise2studio.com/creative-production
                  </div>
                </div>

                {/* Mockup Canvas */}
                <div style={{ padding: '28px', backgroundColor: '#151111' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '14px' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#ffffff' }}>RISE 2 STUDIO</span>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>STREAM // 4K 60FPS</span>
                  </div>
                  <div style={{ height: '160px', backgroundColor: '#211b1b', borderRadius: '4px', border: '1px dashed rgba(255, 255, 255, 0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>CINEMATIC SHOWREEL PREVIEW</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '16px' }}>
                    <div style={{ height: '48px', backgroundColor: '#1a1414', borderRadius: '4px', padding: '8px' }}>
                      <div style={{ width: '40%', height: '4px', backgroundColor: 'var(--primary)', marginBottom: '6px' }}></div>
                      <div style={{ width: '70%', height: '3px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
                    </div>
                    <div style={{ height: '48px', backgroundColor: '#1a1414', borderRadius: '4px', padding: '8px' }}>
                      <div style={{ width: '40%', height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.3)', marginBottom: '6px' }}></div>
                      <div style={{ width: '70%', height: '3px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
                    </div>
                    <div style={{ height: '48px', backgroundColor: '#1a1414', borderRadius: '4px', padding: '8px' }}>
                      <div style={{ width: '40%', height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.3)', marginBottom: '6px' }}></div>
                      <div style={{ width: '70%', height: '3px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==============================================================
              PROJECT 02 & 03: Asymmetric Two-Column Split (Cuts + Winkler)
              ============================================================== */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(28px, 4vw, 40px)'
            }}
          >
            {/* Project 02: Cuts Clothing */}
            <div
              style={{
                backgroundColor: '#1a1515',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.1)', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {p2.category}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{p2.industry}</span>
                </div>

                <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                  {p2.title}
                </h3>

                <p style={{ fontSize: '0.96rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '20px' }}>
                  {p2.desc}
                </p>

                {/* Functional Deliverables Tag */}
                <div style={{ backgroundColor: '#211a1a', padding: '14px', borderRadius: '4px', marginBottom: '24px', borderLeft: '2px solid var(--primary)' }}>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', marginBottom: '4px' }}>KEY ARCHITECTURE</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    Custom Liquid 2.0 theme, slide-out dynamic cart drawer, and 1-click Shop Pay checkout.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>{p2.timeline}</span>
                <Link to={`/portfolio/${p2.id}`} className="btn btn-secondary" style={{ padding: '0 18px', height: '40px', fontSize: '0.86rem' }}>
                  <span>Case Study</span>
                  <SvgArrow />
                </Link>
              </div>
            </div>

            {/* Project 03: Winkler Hotels */}
            <div
              style={{
                backgroundColor: '#1a1515',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.1)', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {p3.category}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{p3.industry}</span>
                </div>

                <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                  {p3.title}
                </h3>

                <p style={{ fontSize: '0.96rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '20px' }}>
                  {p3.desc}
                </p>

                {/* Functional Deliverables Tag */}
                <div style={{ backgroundColor: '#211a1a', padding: '14px', borderRadius: '4px', marginBottom: '24px', borderLeft: '2px solid var(--primary)' }}>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', marginBottom: '4px' }}>DIRECT RESERVATION ENGINE</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    Real-time PMS booking integration, multi-language support (EN, DE, IT), and responsive suite visualizer.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>{p3.timeline}</span>
                <Link to={`/portfolio/${p3.id}`} className="btn btn-secondary" style={{ padding: '0 18px', height: '40px', fontSize: '0.86rem' }}>
                  <span>Case Study</span>
                  <SvgArrow />
                </Link>
              </div>
            </div>
          </div>

          {/* ==============================================================
              PROJECT 04: Technical Dashboard/Platform Showcase (Flow Trix)
              ============================================================== */}
          <div
            style={{
              backgroundColor: '#1b1616',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: 'clamp(28px, 4vw, 40px)',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
                gap: 'clamp(28px, 4vw, 48px)',
                alignItems: 'center'
              }}
            >
              {/* Terminal Code / API Pipeline Frame */}
              <div
                style={{
                  backgroundColor: '#0f0c0c',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  padding: '20px 24px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  lineHeight: 1.65,
                  color: '#e0dede'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '10px', marginBottom: '14px', color: 'var(--text-dim)' }}>
                  <span>FLOW-TRIX // WORKFLOW ENGINE</span>
                  <span style={{ color: 'var(--primary)' }}>STATUS: ACTIVE</span>
                </div>
                <div style={{ color: 'var(--primary)', marginBottom: '8px' }}>
                  &gt; GET /api/v2/pipelines/orchestrate
                </div>
                <div style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>
                  &#123; "status": 200, "rbac": "enforced", "kanban": "synced" &#125;
                </div>
                <div style={{ borderTop: '1px dashed rgba(255, 255, 255, 0.1)', paddingTop: '10px', color: 'var(--text-dim)', fontSize: '0.76rem' }}>
                  // Automated recurring invoice generation and multi-tier user role validation
                </div>
              </div>

              {/* Description & Link */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', background: 'rgba(41, 217, 197, 0.1)', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {p4.category}
                  </span>
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{p4.industry}</span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.02em' }}>
                  {p4.title} — Enterprise SaaS & Automation
                </h3>

                <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '22px' }}>
                  {p4.solution} Built with role-based access control, interactive drag-and-drop workflow boards, and automated recurring billing generation.
                </p>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link
                    to={`/portfolio/${p4.id}`}
                    className="btn btn-secondary"
                  >
                    <span>View Technical Case Study</span>
                    <SvgArrow />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// 12. PROCESS SECTION

function ProcessSection() {
  const { processSteps } = agencyData;

  return (
    <section id="process" className="section-spacing" style={{ backgroundColor: '#181313', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '60px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>
            <span className="pulse-indicator"></span>
            <span>ENGINEERING TIMELINE</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.5rem)',
              lineHeight: 1.15,
              color: '#ffffff',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              marginBottom: '16px'
            }}
          >
            How We Work — From Requirements to Production
          </h2>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
            A disciplined six-phase delivery framework ensuring absolute clarity, predictable milestones, and reliable software outcomes from kickoff to long-term operations.
          </p>
        </div>

        {/* Connected Editorial Timeline (NO 6 identical cards) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', position: 'relative' }}>
          {/* Vertical connecting line indicator for desktop */}
          <div
            style={{
              position: 'absolute',
              left: '28px',
              top: '20px',
              bottom: '20px',
              width: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              zIndex: 0
            }}
          ></div>

          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              style={{
                display: 'grid',
                gridTemplateColumns: '56px 1fr',
                gap: 'clamp(20px, 3vw, 36px)',
                padding: '24px 0',
                borderBottom: idx < processSteps.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                position: 'relative',
                zIndex: 1,
                alignItems: 'start'
              }}
            >
              {/* Step Monogram Circle */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#201a1a',
                  border: '1px solid rgba(41, 217, 197, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)'
                }}
              >
                {step.step}
              </div>

              {/* Step Content */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                  gap: '16px',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.08em' }}>
                    PHASE {step.step}
                  </div>
                  <h3 style={{ fontSize: '1.45rem', color: '#ffffff', letterSpacing: '-0.015em', margin: 0 }}>
                    {step.title}
                  </h3>
                </div>

                <div>
                  <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 13. PRICING TABS (Home)

function PricingTabs({ onSelectPlan, onChatNow }) {
  const { pricing } = agencyData;
  const categories = Object.keys(pricing);
  const [activeCategory, setActiveCategory] = useState('web-dev');
  const { formatPrice, currency } = useCurrency();

  const currentCategoryData = pricing[activeCategory];

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
    <section id="pricing" className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="pulse-indicator"></span>
            <span>TRANSPARENT PACKAGES</span>
          </div>
          <h2>Our Flexible Pricing Plans & Packages</h2>
          <p>
            Transparent, fixed one-time investments designed to deliver maximum return without hidden surprises or ongoing retainer drag.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '50px'
          }}
        >
          {categories.map((catKey) => {
            const cat = pricing[catKey];
            const isActive = activeCategory === catKey;
            return (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className="btn"
                style={{
                  padding: '9px 20px',
                  fontSize: '0.86rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: isActive ? 'var(--primary)' : 'var(--bg-card)',
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  border: isActive ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                  fontWeight: isActive ? 600 : 400
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Plan Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(20px, 3vw, 28px)',
            alignItems: 'stretch'
          }}
        >
          {currentCategoryData.plans.map((plan) => {
            const isRecommended = plan.recommended;
            return (
              <div
                key={plan.name}
                className="agency-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '36px 30px',
                  border: isRecommended ? '1px solid var(--primary-light)' : '1px solid var(--border-subtle)',
                  backgroundColor: isRecommended ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  position: 'relative',
                  boxShadow: isRecommended ? 'var(--shadow-primary)' : 'var(--shadow-card)'
                }}
              >
                {isRecommended && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '24px',
                      backgroundColor: 'var(--primary)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.06em',
                      boxShadow: '0 4px 14px rgba(99, 102, 241, 0.45)'
                    }}
                  >
                    Recommended
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.45rem', marginBottom: '8px', color: 'var(--text-white)' }}>
                    {plan.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '24px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2.8rem',
                        fontWeight: 800,
                        color: 'var(--text-white)',
                        lineHeight: 1
                      }}
                    >
                      {formatPrice(plan.price)}
                    </span>
                    <span style={{ color: 'var(--text-dim)', fontSize: '0.88rem' }}>
                      / {plan.billing}
                    </span>
                  </div>

                  <div
                    style={{
                      height: '1px',
                      backgroundColor: 'var(--border-subtle)',
                      marginBottom: '24px'
                    }}
                  />

                  {/* Feature Checklist */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.9rem' }}>
                        <SvgCheck />
                        <span style={{ color: 'var(--text-main)', lineHeight: 1.5 }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    onClick={() => onSelectPlan({
                      category: currentCategoryData.name,
                      name: plan.name,
                      price: formatPrice(plan.price),
                      originalUsd: plan.price,
                      currency: currency,
                      billing: plan.billing
                    })}
                    className={`btn ${isRecommended ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ width: '100%', padding: '13px' }}
                  >
                    <span>Get Started</span>
                    <SvgArrow />
                  </button>

                  <button
                    onClick={() => onChatNow(plan.name, currentCategoryData.name)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-dim)',
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      padding: '6px',
                      textDecoration: 'underline'
                    }}
                  >
                    Chat Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Scope Calculator Prompt */}
        <div
          style={{
            marginTop: '40px',
            padding: '28px 36px',
            backgroundColor: '#1f1919',
            border: '1px solid rgba(41, 217, 197, 0.25)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div>
            <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              NEED SOMETHING CUSTOM?
            </span>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--text-white)', marginTop: '4px' }}>
              Want to calculate your exact custom website, e-commerce, or portal investment?
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Use our real-time interactive scope calculator with page sliders, CMS, and payment addons.
            </p>
          </div>

          <Link
            to="/pricing"
            className="btn btn-secondary"
            style={{ padding: '12px 24px', fontSize: '0.88rem', whiteSpace: 'nowrap' }}
          >
            <span>Open Scope Calculator</span>
            <SvgArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

// 14. WHY KIFALTECH

function WhyKifalTech() {
  const { whyUs } = agencyData;

  const SvgCheck = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }}>
      <path d="M3 8.5l3.5 3.5 6.5-7"/>
    </svg>
  );

  return (
    <section id="why-us" className="section-spacing" style={{ backgroundColor: '#1a1414', position: 'relative' }}>
      <div className="container">
        {/* Asymmetric 2-Column Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: 'clamp(36px, 5vw, 64px)',
            alignItems: 'start'
          }}
        >
          {/* Left Anchor Column: Agency Philosophy & Business Thesis */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              <span className="pulse-indicator"></span>
              <span>ENGINEERING ADVANTAGE</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
                lineHeight: 1.15,
                color: '#ffffff',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                marginBottom: '20px'
              }}
            >
              Why Businesses Partner With KifalTech
            </h2>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '24px' }}>
              Most web projects fail not from technical complexity, but from poor communication, misaligned incentives, and bloated codebases. We built KifalTech around simple engineering principles: listen closely to business requirements, build cleanly, communicate proactively, and deliver on schedule.
            </p>

            <div
              style={{
                backgroundColor: '#201919',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '24px',
                marginTop: '32px'
              }}
            >
              <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.08em' }}>
                THE KIFALTECH GUARANTEE
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.6 }}>
                100% intellectual property ownership from day one. You receive full GitHub repository access, deployment credentials, Figma artboards, and production documentation upon milestone sign-off.
              </p>
            </div>
          </div>

          {/* Right Column: 7 Concrete Business Benefits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {whyUs.map((item, idx) => (
              <div
                key={item.title}
                style={{
                  padding: '24px 28px',
                  backgroundColor: '#201919',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '6px',
                  transition: 'border-color 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <SvgCheck />
                  <h3 style={{ fontSize: '1.2rem', color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0, paddingLeft: '27px' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 15. EXPERIENCE SECTION

function ExperienceSection() { return null; }

// 16. TESTIMONIAL CAROUSEL

function TestimonialCarousel() {
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

// 17. HIGH-IMPACT CTA SECTION

function CTASection({ onStartProject }) {
  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section className="section-spacing" style={{ backgroundColor: '#141010', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            padding: 'clamp(44px, 6vw, 72px) clamp(28px, 5vw, 60px)',
            backgroundColor: '#1b1616',
            border: '1px solid rgba(41, 217, 197, 0.25)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              <span className="pulse-indicator"></span>
              <span>LET'S COLLABORATE</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                lineHeight: 1.15,
                color: '#ffffff',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                marginBottom: '14px'
              }}
            >
              Have a project in mind? Let's build something useful for your business.
            </h2>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
              Whether you need a new web platform, a custom Shopify storefront, or ongoing software engineering, our team is ready to deliver.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={onStartProject}
              className="btn btn-primary"
              style={{ height: '48px', padding: '0 28px', fontSize: '0.94rem' }}
            >
              <span>Start a Project</span>
              <SvgArrow />
            </button>

            <Link
              to="/portfolio"
              className="btn btn-secondary"
              style={{ height: '48px', padding: '0 24px', fontSize: '0.94rem' }}
            >
              <span>View Our Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// 18. CONTACT FORM (Home)

function ContactForm() {
  const { company } = agencyData;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: 'Web Development',
    budget: '$1,000–$2,500',
    details: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [refCode, setRefCode] = useState('');

  const servicesList = [
    'Web Development',
    'WordPress Development',
    'UI/UX Design',
    'Custom Software & Web Apps',
    'Shopify & E-Commerce',
    'SEO & Search Visibility',
    'Digital Marketing & Social',
    'Website Maintenance & SLA'
  ];

  const budgetTiers = [
    'Under $500',
    '$500–$1,000',
    '$1,000–$2,500',
    '$2,500–$5,000',
    '$5,000+',
    'Custom Budget'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.details.trim()) {
      setStatus('error');
      setErrorMessage('Please complete your name, email address, and project details.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid business email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const generatedRef = `KT-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(generatedRef);

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_inquiries') || '[]');
      existing.unshift({
        id: generatedRef,
        timestamp: new Date().toISOString(),
        ...formData
      });
      localStorage.setItem('kifaltech_inquiries', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setTimeout(() => {
      setStatus('success');
    }, 700);
  };

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <section id="contact" className="section-spacing" style={{ backgroundColor: '#171313', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(36px, 5vw, 64px)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Communication Details */}
          <div>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>
              <span className="pulse-indicator"></span>
              <span>START A CONVERSATION</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
                lineHeight: 1.15,
                color: '#ffffff',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                marginBottom: '18px'
              }}
            >
              Tell us about your project.
            </h2>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '32px' }}>
              We review every inquiry within 2 business hours. Share your goals, technical constraints, or timeline, and we’ll prepare a transparent, structured scope proposal.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              <div style={{ padding: '18px 22px', backgroundColor: '#1e1818', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  DIRECT INQUIRY EMAIL
                </div>
                <a href={`mailto:${company.email}`} style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>
                  {company.email}
                </a>
              </div>

              <div style={{ padding: '18px 22px', backgroundColor: '#1e1818', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  INTERNATIONAL DIRECT LINE
                </div>
                <a href={`tel:${company.inquiryPhone}`} style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>
                  {company.inquiryPhone}
                </a>
              </div>

              <div style={{ padding: '16px 22px', backgroundColor: 'rgba(41, 217, 197, 0.05)', border: '1px solid rgba(41, 217, 197, 0.2)', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span>
                  <span><strong>SLA Guarantee:</strong> Response within 2 business hours for international inquiries.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Structured Form */}
          <div
            style={{
              padding: 'clamp(28px, 4vw, 40px)',
              backgroundColor: '#1d1717',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(41, 217, 197, 0.15)',
                    border: '1px solid var(--primary)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                    fontSize: '1.4rem'
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '10px' }}>Inquiry Received</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 20px auto' }}>
                  Thank you, <strong>{formData.fullName}</strong>. Your project scope reference is <strong>{refCode}</strong>. A senior engineer will review your specifications and contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ fullName: '', email: '', company: '', service: 'Web Development', budget: '$1,000–$2,500', details: '' });
                  }}
                  className="btn btn-secondary"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {status === 'error' && (
                  <div style={{ padding: '12px 16px', backgroundColor: 'rgba(235, 87, 87, 0.12)', border: '1px solid #eb5757', borderRadius: '4px', color: '#ff8080', fontSize: '0.88rem' }}>
                    {errorMessage}
                  </div>
                )}

                {/* Name & Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alexander Vance"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Company & Service Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label className="form-label">Company / Brand</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Vance Media Ltd."
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Primary Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget Selection (Section 25) */}
                <div>
                  <label className="form-label">Estimated Budget (USD)</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {budgetTiers.map((tier) => (
                      <option key={tier} value={tier}>{tier}</option>
                    ))}
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label className="form-label">Tell us about your project *</label>
                  <textarea
                    name="details"
                    required
                    value={formData.details}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe your project requirements, goals, target audience, and preferred launch timeline..."
                    className="form-textarea"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary"
                  style={{ height: '48px', fontSize: '0.94rem', width: '100%', marginTop: '6px' }}
                >
                  <span>{status === 'loading' ? 'Preparing Submission...' : 'Request a Free Quote'}</span>
                  <SvgArrow />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// 19. SERVICE DETAIL PAGE COMPONENT (11 Services)
function ServiceDetailPage({ serviceSlug, onStartProject }) {
  const { navigate } = useRouter();
  const service = agencyData.services.find((s) => s.id === serviceSlug);
  const [activeFaq, setActiveFaq] = useState(0);

  if (!service) {
    return (
      <div className="container" style={{ padding: '140px 0', textAlign: 'center' }}>
        <h2>Service Not Found</h2>
        <p style={{ marginTop: '12px' }}>The requested service does not exist.</p>
        <button onClick={() => navigate('/services')} className="btn btn-primary" style={{ marginTop: '24px' }}>
          Back to Services
        </button>
      </div>
    );
  }

  const relatedServices = agencyData.services.filter((s) => s.id !== service.id && s.category === service.category).slice(0, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.category,
    "description": service.shortDesc,
    "provider": { "@type": "Organization", "name": agencyData.company.legalName, "url": agencyData.company.siteUrl }
  };

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Services", url: "https://kifaltech.com/services" },
    { name: service.title, url: service.seo.canonical }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead title={service.seo.title} description={service.seo.metaDesc} canonical={service.seo.canonical} schema={[serviceSchema, faqSchema]} breadcrumbs={breadcrumbs} />

      <section className="section-spacing" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{service.title}</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span className="eyebrow" style={{ marginBottom: 0 }}>
                  <span className="pulse-indicator" />
                  Service {service.number} • {service.category}
                </span>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', padding: '5px 12px', borderRadius: 'var(--radius-full)', background: 'var(--primary-subtle)', color: 'var(--primary-light)', fontWeight: 600 }}>
                  {service.turnaround}
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', marginBottom: '20px', lineHeight: 1.12 }}>
                {service.heroHeadline}
              </h1>

              <p style={{ fontSize: '1.12rem', lineHeight: 1.7, marginBottom: '32px' }}>
                {service.heroSubheadline}
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button onClick={() => onStartProject({ title: service.title, category: service.category })} className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '0.98rem' }}>
                  <span>Request {service.title} Proposal</span>
                  <SvgArrow />
                </button>
                <button onClick={() => { const el = document.getElementById('service-faqs'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-secondary" style={{ padding: '14px 24px' }}>
                  View FAQs
                </button>
              </div>
            </div>

            <div>
              <div className="mockup-browser">
                <div className="mockup-browser-header">
                  <div className="mockup-dots">
                    <div className="mockup-dot close" /><div className="mockup-dot min" /><div className="mockup-dot max" />
                  </div>
                  <div className="mockup-url-bar">
                    <span style={{ color: 'var(--accent-emerald)' }}>https://</span>
                    <span>kifaltech.com/services/{service.id}</span>
                  </div>
                </div>
                <div className="mockup-browser-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)' }}>ARCHITECTURE SPEC</span>
                      <h4 style={{ fontSize: '1.15rem', color: 'var(--text-white)', marginTop: '4px' }}>{service.title} Stack</h4>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.1)', padding: '4px 10px', borderRadius: '4px' }}>
                      Production Ready
                    </span>
                  </div>

                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '20px' }}>
                    {service.architecture}
                  </p>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '10px' }}>CORE TECHNOLOGIES</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {service.techStack.map((tech, idx) => (
                        <span key={idx} style={{ padding: '6px 12px', borderRadius: 'var(--radius-xs)', background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-white)' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '14px 16px', borderRadius: 'var(--radius-xs)', background: 'var(--bg-tag)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Estimated Turnaround:</span>
                    <strong style={{ fontSize: '0.88rem', color: 'var(--text-white)' }}>{service.turnaround}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Deliverables & Scope</span>
            <h2>What We Engineer & Deliver</h2>
            <p>Every engagement includes concrete, measurable milestones with complete code and asset ownership.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="agency-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <SvgCheck />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.02rem', marginBottom: '6px', color: 'var(--text-white)' }}>{item}</h4>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.55 }}>Adheres strictly to industry engineering standards and performance benchmarks.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Phase Process */}
      <section className="section-spacing">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Execution Methodology</span>
            <h2>How We Deliver {service.title}</h2>
            <p>Structured agile sprints designed for transparency, fast delivery, and predictable milestones.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {service.process.map((step, idx) => (
              <div key={idx} className="agency-card" style={{ position: 'relative' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary-light)', display: 'block', marginBottom: '16px', opacity: 0.85 }}>
                  {step.phase}
                </span>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text-white)' }}>{step.title}</h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="service-faqs" className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="section-header">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2>Everything You Need to Know</h2>
          </div>

          <div className="faq-accordion">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`}>
                <button onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)} className="faq-trigger" aria-expanded={activeFaq === idx}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">↓</span>
                </button>
                {activeFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-spacing">
        <div className="container">
          <div className="agency-card" style={{ padding: 'clamp(40px, 6vw, 70px)', textAlign: 'center', border: '1px solid var(--border-medium)' }}>
            <span className="eyebrow" style={{ margin: '0 auto 16px auto' }}>Direct Engineering Consultation</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
              Ready to execute your {service.title} project?
            </h2>
            <p style={{ maxWidth: '640px', margin: '0 auto 32px auto', fontSize: '1.08rem' }}>
              Get a tailored technical proposal, milestone schedule, and fixed quote within 24 business hours.
            </p>
            <button onClick={() => onStartProject({ title: service.title, category: service.category })} className="btn btn-primary" style={{ padding: '15px 36px', fontSize: '1.02rem' }}>
              <span>Get Started with {service.title}</span>
              <SvgArrow />
            </button>
          </div>
        </div>
      </section>

      {/* Cross Links */}
      {relatedServices.length > 0 && (
        <section className="section-spacing" style={{ paddingTop: 0 }}>
          <div className="container">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '24px', color: 'var(--text-white)' }}>
              Related {service.category} Capabilities
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {relatedServices.map((rel) => (
                <Link key={rel.id} to={`/services/${rel.id}`} className="agency-card" style={{ display: 'block', padding: '24px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-light)' }}>SERVICE {rel.number}</span>
                  <h4 style={{ fontSize: '1.2rem', margin: '8px 0', color: 'var(--text-white)' }}>{rel.title}</h4>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>{rel.shortDesc}</p>
                  <span style={{ color: 'var(--primary-light)', fontSize: '0.88rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Explore Service <SvgArrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// 20. PORTFOLIO DETAIL PAGE COMPONENT (12 Case Studies)
function PortfolioDetailPage({ projectSlug, onStartSimilarProject }) {
  const { navigate } = useRouter();
  const project = agencyData.portfolio.find((p) => p.id === projectSlug);

  if (!project) {
    return (
      <div className="container" style={{ padding: '140px 0', textAlign: 'center' }}>
        <h2>Case Study Not Found</h2>
        <p style={{ marginTop: '12px' }}>The requested portfolio case study does not exist.</p>
        <button onClick={() => navigate('/portfolio')} className="btn btn-primary" style={{ marginTop: '24px' }}>
          Back to Portfolio
        </button>
      </div>
    );
  }

  const relatedProjects = agencyData.portfolio.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3);

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "headline": project.heroHeadline,
    "description": project.desc,
    "creator": { "@type": "Organization", "name": agencyData.company.legalName, "url": agencyData.company.siteUrl },
    "dateCreated": project.year
  };

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Portfolio", url: "https://kifaltech.com/portfolio" },
    { name: project.title, url: project.seo.canonical }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead title={project.seo.title} description={project.seo.metaDesc} canonical={project.seo.canonical} schema={caseStudySchema} breadcrumbs={breadcrumbs} />

      <section className="section-spacing" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/portfolio">Portfolio</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{project.title}</span>
          </nav>

          <div style={{ maxWidth: '860px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span className="eyebrow" style={{ marginBottom: 0 }}>{project.category}</span>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', padding: '4px 10px', borderRadius: 'var(--radius-full)', background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-dim)' }}>
                {project.year} • {project.timeline}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '20px', lineHeight: 1.12 }}>
              {project.heroHeadline}
            </h1>

            <p style={{ fontSize: '1.18rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              {project.desc}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', padding: '28px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', marginBottom: '50px' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>CLIENT</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)', marginTop: '4px' }}>{project.client}</div>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>INDUSTRY</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)', marginTop: '4px' }}>{project.industry}</div>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>SERVICES PROVIDED</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                {project.services.map((s, i) => (
                  <span key={i} style={{ fontSize: '0.8rem', background: 'var(--bg-tag)', padding: '2px 8px', borderRadius: '4px', color: 'var(--text-main)' }}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>TIMELINE</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-emerald)', marginTop: '4px' }}>{project.timeline}</div>
            </div>
          </div>

          <div style={{ marginBottom: '60px' }}>
            {project.mockupType === 'mobile' ? (
              <div className="mockup-mobile">
                <div className="mockup-mobile-screen" style={{ padding: '24px 16px', minHeight: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                      <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-white)' }}>{project.client}</span>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)' }}>● ONLINE</span>
                    </div>
                    <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--bg-card)', marginBottom: '16px', border: '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: '0.72rem', color: 'var(--primary-light)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>MOBILE EXPERIENCE</span>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', margin: '6px 0' }}>{project.title}</h4>
                      <p style={{ fontSize: '0.82rem', lineHeight: 1.5, color: 'var(--text-muted)' }}>{project.challenge}</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      {project.results.slice(0, 2).map((r, i) => (
                        <div key={i} style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                          <strong style={{ fontSize: '1.1rem', color: 'var(--primary-light)' }}>{r.value}</strong>
                          <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '2px' }}>{r.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', paddingTop: '16px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Native-Grade UX Architecture</span>
                  </div>
                </div>
              </div>
            ) : project.mockupType === 'terminal' ? (
              <div className="mockup-terminal" style={{ maxWidth: '880px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                  <span style={{ marginLeft: '10px', color: '#94a3b8', fontSize: '0.78rem' }}>kifaltech-enterprise-deploy ~ {project.id}</span>
                </div>
                <div style={{ color: '#6ee7b7' }}>$ kifaltech deploy --project="{project.title}" --env=production</div>
                <div style={{ color: '#94a3b8', margin: '8px 0' }}>✔ Security audit passed: 0 vulnerabilities</div>
                <div style={{ color: '#94a3b8', margin: '4px 0' }}>✔ Latency benchmarks: &lt; 50ms average response time</div>
                <div style={{ color: '#a5b4fc', marginTop: '12px' }}>[SUCCESS] {project.title} deployed with 99.98% uptime SLA.</div>
              </div>
            ) : (
              <div className="mockup-browser">
                <div className="mockup-browser-header">
                  <div className="mockup-dots">
                    <div className="mockup-dot close" /><div className="mockup-dot min" /><div className="mockup-dot max" />
                  </div>
                  <div className="mockup-url-bar">
                    <span style={{ color: 'var(--accent-emerald)' }}>https://</span>
                    <span>case-studies.kifaltech.com/{project.id}</span>
                  </div>
                </div>
                <div className="mockup-browser-content" style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-light)' }}>VERIFIED CASE STUDY</span>
                      <h3 style={{ fontSize: '1.8rem', color: 'var(--text-white)', marginTop: '4px' }}>{project.title}</h3>
                    </div>
                    <span style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 600 }}>
                      Live Production
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    {project.results.map((res, i) => (
                      <div key={i} style={{ padding: '20px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-main)', border: '1px solid var(--border-subtle)' }}>
                        <span style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--primary-light)', display: 'block' }}>{res.value}</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>{res.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
            <div className="agency-card">
              <span className="eyebrow" style={{ color: 'var(--accent-amber)' }}>The Challenge</span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--text-white)' }}>Understanding the Problem</h3>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.72 }}>{project.challenge}</p>
            </div>
            <div className="agency-card">
              <span className="eyebrow" style={{ color: 'var(--accent-emerald)' }}>The Engineering Solution</span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--text-white)' }}>Architecture & Execution</h3>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.72 }}>{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-spacing">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="section-header">
            <span className="eyebrow">Project Deliverables</span>
            <h2>Systems & Solutions Engineered</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {project.deliverables.map((item, idx) => (
              <div key={idx} className="agency-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '20px' }}>
                <SvgCheck />
                <span style={{ fontSize: '0.96rem', fontWeight: 500, color: 'var(--text-white)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="agency-card" style={{ padding: 'clamp(40px, 6vw, 64px)', textAlign: 'center', border: '1px solid var(--border-medium)' }}>
            <span className="eyebrow" style={{ margin: '0 auto 16px auto' }}>Project Inquiries</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', marginBottom: '16px' }}>
              Need similar results for your business?
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 28px auto', fontSize: '1.05rem' }}>
              Let's discuss how KifalTech can design and engineer a digital solution tailored to your goals.
            </p>
            <button onClick={() => onStartSimilarProject(project)} className="btn btn-primary" style={{ padding: '15px 34px', fontSize: '1.02rem' }}>
              <span>Start a Project Like {project.title}</span>
              <SvgArrow />
            </button>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section-spacing" style={{ paddingTop: 0 }}>
          <div className="container">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '24px', color: 'var(--text-white)' }}>
              More {project.category} Case Studies
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {relatedProjects.map((rel) => (
                <Link key={rel.id} to={`/portfolio/${rel.id}`} className="agency-card" style={{ display: 'block', padding: '24px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)' }}>{rel.year} • {rel.category}</span>
                  <h4 style={{ fontSize: '1.25rem', margin: '8px 0', color: 'var(--text-white)' }}>{rel.title}</h4>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>{rel.desc}</p>
                  <span style={{ color: 'var(--primary-light)', fontSize: '0.88rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    View Case Study <SvgArrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// 21. SERVICES HUB PAGE
function ServicesPage({ onStartProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web & Software', 'Design & Branding', 'E-Commerce', 'Digital Growth'];

  const filteredServices = activeCategory === 'All'
    ? agencyData.services
    : agencyData.services.filter((s) => s.category === activeCategory);

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Services", url: "https://kifaltech.com/services" }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead title={agencyData.pageSEO.services.title} description={agencyData.pageSEO.services.metaDesc} canonical={agencyData.pageSEO.services.canonical} breadcrumbs={breadcrumbs} />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Services</span>
          </nav>

          <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', margin: '0 0 40px 0' }}>
            <span className="eyebrow">Capabilities Directory</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
              Specialized Digital Engineering & Creative Services
            </h1>
            <p style={{ fontSize: '1.12rem' }}>
              Explore our 11 core competencies spanning full-stack development, brand identity, custom e-commerce, and high-ROI digital growth campaigns.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--primary)' : 'var(--border-subtle)',
                  background: activeCategory === cat ? 'var(--primary)' : 'var(--bg-card)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-main)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px', marginBottom: '80px' }}>
            {filteredServices.map((service) => (
              <div key={service.id} className="agency-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-light)', fontWeight: 600 }}>
                      SERVICE {service.number}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', padding: '3px 8px', borderRadius: '4px', background: 'var(--bg-subtle)', color: 'var(--text-dim)' }}>
                      {service.turnaround}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', marginBottom: '10px', color: 'var(--text-white)' }}>{service.title}</h3>
                  <p style={{ fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '20px' }}>{service.shortDesc}</p>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      KEY DELIVERABLES:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {service.deliverables.slice(0, 3).map((del, i) => (
                        <li key={i} style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary-light)' }} />
                          {del}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Link to={`/services/${service.id}`} className="btn btn-secondary" style={{ flex: 1, padding: '11px 16px', fontSize: '0.88rem' }}>
                    <span>View Service Page</span>
                    <SvgArrow />
                  </Link>
                  <button onClick={() => onStartProject({ title: service.title, category: service.category })} className="btn btn-primary" style={{ padding: '11px 18px', fontSize: '0.88rem' }}>
                    Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// 22. PORTFOLIO HUB PAGE
function PortfolioPage({ onStartSimilarProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web Development', 'App Development', 'E-Commerce', 'Design & Branding', 'Digital Growth', 'Web & Software'];

  const filteredProjects = activeCategory === 'All'
    ? agencyData.portfolio
    : agencyData.portfolio.filter((p) => p.category === activeCategory);

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Portfolio", url: "https://kifaltech.com/portfolio" }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead title={agencyData.pageSEO.portfolio.title} description={agencyData.pageSEO.portfolio.metaDesc} canonical={agencyData.pageSEO.portfolio.canonical} breadcrumbs={breadcrumbs} />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Portfolio</span>
          </nav>

          <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', margin: '0 0 40px 0' }}>
            <span className="eyebrow">Case Studies & Production Work</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
              Selected Projects Engineered for Measurable Business Growth
            </h1>
            <p style={{ fontSize: '1.12rem' }}>
              Explore authentic client platforms across enterprise web apps, high-converting Shopify stores, mobile apps, and brand design systems.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--primary)' : 'var(--border-subtle)',
                  background: activeCategory === cat ? 'var(--primary)' : 'var(--bg-card)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-main)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px', marginBottom: '80px' }}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="agency-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}>
                <div>
                  {/* Browser Mockup Preview */}
                  <div
                    style={{
                      width: '100%',
                      height: '180px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-main)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      marginBottom: '18px',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-card)'
                    }}
                  >
                    <div
                      style={{
                        height: '28px',
                        background: 'var(--bg-card)',
                        borderBottom: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 10px',
                        gap: '6px',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff5f56' }}></span>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#27c93f' }}></span>
                      </div>
                      <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                        kifaltech.com/portfolio/{project.id}
                      </span>
                      <span style={{ fontSize: '0.64rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>● LIVE</span>
                    </div>

                    <div
                      style={{
                        flex: 1,
                        padding: '14px 18px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        background: 'radial-gradient(ellipse at top left, var(--primary-subtle) 0%, transparent 70%)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>{project.industry}</span>
                        {project.results && project.results[0] && (
                          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', background: 'rgba(16,185,129,0.1)', padding: '2px 8px', borderRadius: 'var(--radius-full)' }}>
                            {project.results[0].label}: {project.results[0].value}
                          </span>
                        )}
                      </div>
                      <div style={{ textAlign: 'center', margin: 'auto 0' }}>
                        <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-white)', fontFamily: 'var(--font-heading)' }}>
                          {project.title}
                        </div>
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textAlign: 'right' }}>
                        {project.timeline} Sprint
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span className="eyebrow" style={{ marginBottom: 0, fontSize: '0.72rem', padding: '4px 10px' }}>{project.category}</span>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>{project.year}</span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--text-white)' }}>{project.title}</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                    Client: {project.client} • {project.industry}
                  </div>
                  <p style={{ fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '20px' }}>{project.desc}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {project.services.map((s, idx) => (
                      <span key={idx} style={{ padding: '4px 10px', borderRadius: 'var(--radius-xs)', background: 'var(--bg-tag)', fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Link to={`/portfolio/${project.id}`} className="btn btn-secondary" style={{ flex: 1, padding: '11px 16px', fontSize: '0.88rem' }}>
                    <span>Read Case Study</span>
                    <SvgArrow />
                  </Link>
                  <button onClick={() => onStartSimilarProject(project)} className="btn btn-primary" style={{ padding: '11px 18px', fontSize: '0.88rem' }}>
                    Similar Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// 23. ABOUT PAGE

function AboutPage({ onStartProject }) {
  const { company } = agencyData;

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "About", url: "https://kifaltech.com/about" }
  ];

  const SvgArrow = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  const SvgCheck = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '3px' }}>
      <path d="M3 8.5l3.5 3.5 6.5-7"/>
    </svg>
  );

  const milestones = [
    { year: "2022", title: "Inception & Core Software Engineering", desc: "Founded with a mission to deliver reliable, enterprise-grade custom web and mobile software with zero vendor lock-in." },
    { year: "2023", title: "Global Expansion & E-Commerce Practice", desc: "Expanded service offerings into custom Shopify Online Store 2.0 storefronts and international client delivery across North America and Europe." },
    { year: "2024", title: "Full-Funnel Digital Growth & Modern Web Stacks", desc: "Integrated technical SEO, Google Ads PPC management, and modern JAMstack cloud architectures into our core service matrix." },
    { year: "Present", title: "Sustainable Scale & Digital Engineering", desc: "Trusted by founders and digital leads globally for scalable web applications, fast turnarounds, and 24/7 client care." }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={agencyData.pageSEO.about.title}
        description={agencyData.pageSEO.about.metaDesc}
        canonical={agencyData.pageSEO.about.canonical}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">About</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center', marginBottom: '60px' }}>
            <div>
              <span className="eyebrow">Our Story & Mission</span>
              <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '20px', lineHeight: 1.15 }}>
                Engineering Trust, Speed & Modern Digital Craftsmanship
              </h1>
              <p style={{ fontSize: '1.12rem', lineHeight: 1.72, marginBottom: '24px' }}>
                {company.story}
              </p>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.68, color: 'var(--text-muted)' }}>
                {company.whatMakesUsSpecial}
              </p>

              {/* Authentic Capability Pillars (NO fake stats) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginTop: '32px' }}>
                <div style={{ background: '#1c1717', padding: '16px', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>Bespoke Code</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '4px' }}>No locked templates</div>
                </div>
                <div style={{ background: '#1c1717', padding: '16px', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.94rem', fontWeight: 600, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>Direct Access</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '4px' }}>Senior developers</div>
                </div>
                <div style={{ background: '#1c1717', padding: '16px', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>100% IP Transfer</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '4px' }}>Full client ownership</div>
                </div>
              </div>
            </div>

            <div className="agency-card" style={{ padding: '36px', background: 'var(--bg-secondary)', border: '1px solid var(--border-medium)' }}>
              <div style={{ marginBottom: '24px' }}>
                <KifalTechLogo />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-light)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>OUR MISSION</span>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>{company.mission}</p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-emerald)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>OUR VISION</span>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>{company.vision}</p>
              </div>

              <div style={{ padding: '16px', borderRadius: 'var(--radius-xs)', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.2rem', color: 'var(--text-white)' }}>{company.rating.score} / {company.rating.max}</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Google & Clutch Rating</span>
                </div>
                <button
                  onClick={() => onStartProject()}
                  className="btn btn-primary"
                  style={{ padding: '10px 18px', fontSize: '0.86rem' }}
                >
                  Start Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Track Record</span>
            <h2>Our Journey from 2022 to Present</h2>
            <p>A consistent evolution dedicated to technical excellence and client satisfaction.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {milestones.map((m, idx) => (
              <div key={idx} className="agency-card" style={{ padding: '30px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: 'var(--primary-light)',
                    display: 'block',
                    marginBottom: '12px'
                  }}
                >
                  {m.year}
                </span>
                <h4 style={{ fontSize: '1.18rem', marginBottom: '10px', color: 'var(--text-white)' }}>
                  {m.title}
                </h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-spacing">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Operating Principles</span>
            <h2>The Principles Behind Every Solution</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {agencyData.whyUs.map((w, idx) => (
              <div key={idx} className="agency-card" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <SvgCheck />
                  <h4 style={{ fontSize: '1.18rem', color: 'var(--text-white)' }}>{w.title}</h4>
                </div>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="agency-card" style={{ padding: 'clamp(40px, 6vw, 64px)', textAlign: 'center', border: '1px solid var(--border-medium)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', marginBottom: '16px' }}>
              Partner with a reliable digital engineering firm.
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 28px auto', fontSize: '1.05rem' }}>
              Direct access to senior engineers and designers committed to your long-term success.
            </p>
            <button
              onClick={() => onStartProject()}
              className="btn btn-primary"
              style={{ padding: '15px 34px', fontSize: '1.02rem' }}
            >
              <span>Schedule an Engineering Consultation</span>
              <SvgArrow />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// 24. PRICING PAGE
function PricingPage({ onSelectPlan, onOpenCustomQuote }) {
  const [activeCategoryKey, setActiveCategoryKey] = useState('web-dev');
  const pricingKeys = Object.keys(agencyData.pricing);
  const activeCategory = agencyData.pricing[activeCategoryKey];

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Pricing", url: "https://kifaltech.com/pricing" }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead title={agencyData.pageSEO.pricing.title} description={agencyData.pageSEO.pricing.metaDesc} canonical={agencyData.pageSEO.pricing.canonical} breadcrumbs={breadcrumbs} />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Pricing</span>
          </nav>

          <div className="section-header">
            <span className="eyebrow">Transparent Investment</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
              Simple, Predictable Agency Packages
            </h1>
            <p>Truthful, milestone-based pricing with zero hidden fees. Full source code ownership and 30-day warranty included.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '50px' }}>
            {pricingKeys.map((key) => {
              const cat = agencyData.pricing[key];
              const isActive = activeCategoryKey === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategoryKey(key)}
                  style={{
                    padding: '11px 20px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--primary)' : 'var(--border-subtle)',
                    backgroundColor: isActive ? 'var(--primary)' : 'var(--bg-card)',
                    color: isActive ? '#ffffff' : 'var(--text-main)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '28px', marginBottom: '70px', alignItems: 'stretch' }}>
            {activeCategory.plans.map((plan, idx) => (
              <div
                key={idx}
                className="agency-card"
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: plan.recommended ? '2px solid var(--primary-light)' : '1px solid var(--border-subtle)',
                  background: plan.recommended ? 'radial-gradient(ellipse at top, var(--bg-card-hover) 0%, var(--bg-card) 100%)' : 'var(--bg-card)'
                }}
              >
                {plan.recommended && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: '#ffffff', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, padding: '4px 14px', borderRadius: 'var(--radius-full)', textTransform: 'uppercase' }}>
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '8px' }}>{plan.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '2.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-white)' }}>{plan.price}</span>
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-dim)' }}>/ {plan.billing}</span>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', marginBottom: '24px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {plan.features.map((feat, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-main)', marginBottom: '10px' }}>
                          <SvgCheck />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button onClick={() => onSelectPlan({ ...plan, category: activeCategory.name })} className={`btn ${plan.recommended ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', padding: '13px', marginTop: '16px' }}>
                  <span>Select {plan.name}</span>
                  <SvgArrow />
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '60px' }}>
            <PricingCalculator onSelectPlanForProposal={onSelectPlan} />
          </div>

          <div className="agency-card" style={{ padding: '40px', textAlign: 'center', border: '1px solid var(--border-medium)', background: 'var(--bg-secondary)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '12px', color: 'var(--text-white)' }}>Require a Custom Enterprise Scope?</h3>
            <p style={{ maxWidth: '640px', margin: '0 auto 24px auto' }}>
              For complex multi-tier platforms or enterprise databases, our engineering leads provide tailored proposals with dedicated sprint milestones.
            </p>
            <button onClick={() => onOpenCustomQuote()} className="btn btn-primary" style={{ padding: '13px 30px' }}>
              <span>Build Custom Proposal</span>
              <SvgArrow />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// 25. QUICK FIX SUPPORT PAGE
function QuickFixPage() {
  const [formData, setFormData] = useState({ name: '', email: '', websiteUrl: '', urgency: 'Normal (24-48 hrs)', issueType: 'Broken Layout', description: '' });
  const [submitted, setSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Quick Fix Support", url: "https://kifaltech.com/quick-fix" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const refCode = `KT-FIX-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketRef(refCode);

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_tickets') || '[]');
      existing.unshift({
        id: refCode,
        timestamp: new Date().toISOString(),
        ...formData
      });
      localStorage.setItem('kifaltech_tickets', JSON.stringify(existing));
    } catch (err) {
      console.warn('Could not persist ticket to localStorage:', err);
    }

    setSubmitted(true);
  };

  const copyRefCode = () => {
    if (ticketRef) {
      navigator.clipboard?.writeText(ticketRef);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  };

  const commonIssues = [
    { title: "Layout & CSS Breakages", desc: "Fixing distorted header bars, broken mobile viewports, overlapping fonts, and flexbox/grid glitches." },
    { title: "Checkout & Payment Failures", desc: "Restoring broken Stripe, PayPal, or Shopify checkouts that prevent customers from completing orders." },
    { title: "500 Server Errors & White Screens", desc: "Debugging fatal PHP memory errors, corrupted plugins, database timeouts, and server crashes." },
    { title: "Malware & Security Cleanup", desc: "Clearing hacked code injections, malicious redirects, spam backlinks, and lifting Google blacklist flags." }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead title={agencyData.pageSEO.quickFix.title} description={agencyData.pageSEO.quickFix.metaDesc} canonical={agencyData.pageSEO.quickFix.canonical} breadcrumbs={breadcrumbs} />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Quick Fix Support</span>
          </nav>

          <div className="section-header" style={{ maxWidth: '820px', margin: '0 auto 50px auto' }}>
            <span className="eyebrow" style={{ color: 'var(--accent-rose)' }}>Emergency Technical Support</span>
            <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', marginBottom: '16px' }}>
              Rapid Website Repair & Emergency Bug Resolution
            </h1>
            <p style={{ fontSize: '1.12rem' }}>
              Having a critical website issue costing you customers? Our senior engineers triage, diagnose, and resolve technical emergencies within 24 to 48 hours.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'flex-start', marginBottom: '80px' }}>
            <div className="agency-card" style={{ padding: '36px', border: '1px solid var(--border-medium)' }}>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '8px', color: 'var(--text-white)' }}>Submit Emergency Triage Request</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '24px' }}>We review technical submissions within 60 minutes during business hours.</p>

              {submitted ? (
                <div style={{ padding: '32px 20px', textAlign: 'center', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.5rem' }}>✔</div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-white)', marginBottom: '8px' }}>Triage Ticket Received</h4>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '16px' }}>
                    We will email you at <strong>{formData.email}</strong> with an immediate diagnostic assessment.
                  </p>

                  {ticketRef && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--bg-card)', border: '1px solid var(--border-medium)', padding: '10px 18px', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Ticket ID:</span>
                      <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-rose)', fontSize: '0.95rem' }}>{ticketRef}</strong>
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
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label className="form-label">Your Name</label>
                    <input type="text" required placeholder="Jane Doe" className="form-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="form-label">Email Address</label>
                    <input type="email" required placeholder="jane@company.com" className="form-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="form-label">Affected Website URL</label>
                    <input type="url" required placeholder="https://yourwebsite.com" className="form-input" value={formData.websiteUrl} onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })} />
                  </div>
                  <div>
                    <label className="form-label">Describe the Issue</label>
                    <textarea required rows={3} placeholder="Explain what is happening and any error messages..." className="form-textarea" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ padding: '14px' }}>Submit Triage Ticket</button>
                </form>
              )}
            </div>

            <div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '18px', color: 'var(--text-white)' }}>Frequent Emergencies We Resolve</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {commonIssues.map((iss, i) => (
                  <div key={i} className="agency-card" style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-white)', marginBottom: '6px' }}>{iss.title}</h4>
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>{iss.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 26. CONTACT PAGE
function ContactPage() {
  const { company } = agencyData;
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: 'Web Development', budget: '$500 – $2,000', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Contact", url: "https://kifaltech.com/contact" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const refCode = `KT-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryRef(refCode);

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_messages') || '[]');
      existing.unshift({
        id: refCode,
        timestamp: new Date().toISOString(),
        ...formData
      });
      localStorage.setItem('kifaltech_messages', JSON.stringify(existing));
    } catch (err) {
      console.warn('Could not persist message to localStorage:', err);
    }

    setSubmitted(true);
  };

  const copyRefCode = () => {
    if (inquiryRef) {
      navigator.clipboard?.writeText(inquiryRef);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  };

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead title={agencyData.pageSEO.contact.title} description={agencyData.pageSEO.contact.metaDesc} canonical={agencyData.pageSEO.contact.canonical} breadcrumbs={breadcrumbs} />

      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Contact</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'flex-start', marginBottom: '80px' }}>
            <div>
              <span className="eyebrow">Direct Consultation</span>
              <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '20px', lineHeight: 1.15 }}>
                Let's Build Something Remarkable Together
              </h1>
              <p style={{ fontSize: '1.12rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Schedule a consultation with our engineering and design leads. We review your requirements and provide an actionable architectural plan within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                <div className="agency-card" style={{ padding: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>EMAIL INQUIRIES</span>
                  <a href={`mailto:${company.email}`} style={{ display: 'block', fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-light)', marginTop: '4px' }}>
                    {company.email}
                  </a>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Response time: &lt; 4 hours during business days</span>
                </div>

                <div className="agency-card" style={{ padding: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>CLIENT SATISFACTION</span>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-white)', marginTop: '4px' }}>
                    {company.rating.score} / {company.rating.max} Verified Score
                  </div>
                </div>
              </div>
            </div>

            <div className="agency-card" style={{ padding: '36px', border: '1px solid var(--border-medium)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--text-white)' }}>Start a Project Inquiry</h3>
              <p style={{ fontSize: '0.92rem', marginBottom: '24px' }}>Share a few details about your vision and goals.</p>

              {submitted ? (
                <div style={{ padding: '40px 20px', textAlign: 'center', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.6rem' }}>✔</div>
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '8px' }}>Inquiry Successfully Received</h4>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '20px' }}>
                    Thank you, <strong>{formData.name}</strong>! We will review your project and email you at <strong>{formData.email}</strong> shortly.
                  </p>

                  {inquiryRef && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', padding: '10px 18px', borderRadius: 'var(--radius-sm)', marginBottom: '24px' }}>
                      <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Inquiry Ref:</span>
                      <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', fontSize: '0.95rem' }}>{inquiryRef}</strong>
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
                        setSubmitted(false);
                        setFormData({ name: '', email: '', company: '', service: 'Web Development', budget: '$500 – $2,000', message: '' });
                      }}
                      className="btn btn-outline"
                      style={{ padding: '8px 22px', fontSize: '0.88rem' }}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label className="form-label">Full Name</label>
                    <input type="text" required placeholder="Alex Morgan" className="form-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="form-label">Work Email</label>
                    <input type="email" required placeholder="alex@company.com" className="form-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="form-label">Service of Interest</label>
                    <select className="form-select" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                      {agencyData.services.map((s) => <option key={s.id} value={s.title}>{s.title} ({s.category})</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Project Objectives & Timeline</label>
                    <textarea required rows={4} placeholder="Tell us about your project..." className="form-textarea" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ padding: '14px' }}>
                    <span>Send Project Inquiry</span>
                    <SvgArrow />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 26A. SOLUTIONS HUB PAGE
function SolutionsPage({ onStartProject }) {
  const { solutions } = agencyData;
  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Solutions", url: "https://kifaltech.com/solutions" }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={agencyData.pageSEO.solutions.title}
        description={agencyData.pageSEO.solutions.metaDesc}
        canonical={agencyData.pageSEO.solutions.canonical}
        breadcrumbs={breadcrumbs}
      />
      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Solutions</span>
          </nav>

          <div className="section-header" style={{ maxWidth: '840px', textAlign: 'left', margin: '0 0 50px 0' }}>
            <span className="eyebrow">Enterprise Frameworks</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
              Integrated Digital Solutions Engineered for Scale
            </h1>
            <p style={{ fontSize: '1.12rem' }}>
              We combine specialized software engineering, design systems, and marketing capabilities into full-funnel digital solutions that optimize operations and accelerate revenue.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', marginBottom: '80px' }}>
            {solutions.map((sol) => (
              <div key={sol.id} className="agency-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '36px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span className="eyebrow" style={{ marginBottom: 0, fontSize: '0.74rem' }}>FRAMEWORK</span>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)' }}>Production Ready</span>
                  </div>

                  <h3 style={{ fontSize: '1.6rem', color: 'var(--text-white)', marginBottom: '12px' }}>{sol.title}</h3>
                  <p style={{ fontSize: '0.96rem', lineHeight: 1.68, color: 'var(--text-muted)', marginBottom: '24px' }}>{sol.desc}</p>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', marginBottom: '28px' }}>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                      INCLUDED CAPABILITIES:
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {sol.servicesIncluded.map((svc, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-white)' }}>
                          <SvgCheck />
                          <span>{svc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button onClick={() => onStartProject({ title: sol.title, category: 'Integrated Solution' })} className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
                  <span>Inquire About Framework</span>
                  <SvgArrow />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// 26B. PROCESS & METHODOLOGY PAGE
function ProcessPage({ onStartProject }) {
  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Process", url: "https://kifaltech.com/process" }
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery & Architecture Scoping",
      tag: "Phase 1 • Days 1 â€“ 5",
      headline: "De-risking technical decisions before writing code.",
      desc: "We dissect your business model, audience personas, infrastructure constraints, and competitive landscape to establish concrete success criteria.",
      activities: [
        "Business model & commercial objective mapping",
        "Technical stack feasibility & database schema modeling",
        "Third-party API & authentication requirements definition",
        "Target performance KPI benchmarks (<1s LCP, 95+ Lighthouse)"
      ],
      deliverable: "Comprehensive Technical Specification & Milestone Roadmap"
    },
    {
      number: "02",
      title: "UI/UX Strategy & Design Systems",
      tag: "Phase 2 • Weeks 1 â€“ 2",
      headline: "Human-crafted interfaces engineered for conversion.",
      desc: "Interactive Figma prototypes grounded in atomic design principles. Layouts are optimized for touch ergonomics on mobile before expanding to desktop.",
      activities: [
        "Low-fidelity wireframing & user journeys",
        "Custom design tokens (typography, color contrast, micro-states)",
        "WCAG 2.1 AA accessibility audit",
        "Clickable desktop & mobile Figma prototypes"
      ],
      deliverable: "Complete Figma Design System & Approved Interactive Prototype"
    },
    {
      number: "03",
      title: "Full-Stack Agile Engineering",
      tag: "Phase 3 • Weeks 2 â€“ 5",
      headline: "Writing clean, scalable code with automated testing.",
      desc: "Built using modern component architectures (React 18, Next.js, Node.js, TypeScript, Shopify OS 2.0) with strict code linting and bi-weekly sprint demos.",
      activities: [
        "Component-driven frontend development with responsive CSS",
        "Secure REST/GraphQL API integration & database optimization",
        "Automated CI/CD staging deployment pipelines",
        "Cross-browser testing across Chrome, Safari, Firefox, Edge"
      ],
      deliverable: "Fully Functional Staging Environment with Live Review Link"
    },
    {
      number: "04",
      title: "QA, Cloud Launch & 30-Day Warranty",
      tag: "Phase 4 • Week 6 & Beyond",
      headline: "Zero-downtime deployment backed by dedicated post-launch care.",
      desc: "End-to-end regression testing, Core Web Vitals verification, SSL certificate hardening, and DNS switchover with 30 days of complimentary support.",
      activities: [
        "Comprehensive QA regression & form submission testing",
        "Core Web Vitals performance audit (LCP, CLS, INP)",
        "Production DNS switchover & 256-bit SSL hardening",
        "30-day post-launch warranty with priority defect resolution"
      ],
      deliverable: "Live Production Platform, 100% IP Code Transfer & Documentation"
    }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={agencyData.pageSEO.process.title}
        description={agencyData.pageSEO.process.metaDesc}
        canonical={agencyData.pageSEO.process.canonical}
        breadcrumbs={breadcrumbs}
      />
      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Process</span>
          </nav>

          <div className="section-header" style={{ maxWidth: '840px', textAlign: 'left', margin: '0 0 50px 0' }}>
            <span className="eyebrow">Methodology & Rigor</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
              How We Engineer Digital Platforms That Win
            </h1>
            <p style={{ fontSize: '1.12rem' }}>
              A disciplined, transparent 4-step framework designed to eliminate guesswork, keep budgets predictable, and deliver high-performance digital platforms on schedule.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', marginBottom: '80px' }}>
            {steps.map((step, idx) => (
              <div key={idx} className="agency-card" style={{ padding: 'clamp(28px, 4vw, 44px)', border: '1px solid var(--border-medium)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '16px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', fontWeight: 800, color: 'var(--primary-light)' }}>{step.number}</span>
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--text-white)' }}>{step.title}</h3>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', background: 'var(--bg-subtle)', color: 'var(--primary-light)', padding: '6px 14px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)' }}>{step.tag}</span>
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '10px' }}>{step.headline}</h4>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '20px', color: 'var(--text-muted)' }}>{step.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px', marginBottom: '20px' }}>
                  {step.activities.map((act, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                      <SvgCheck />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '12px 18px', borderRadius: 'var(--radius-xs)', background: 'var(--bg-tag)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>PHASE DELIVERABLE:</span>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--accent-emerald)' }}>{step.deliverable}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// 26C. CAREERS PAGE
function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [applied, setApplied] = useState(false);
  const [appRef, setAppRef] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);
  const [applicant, setApplicant] = useState({ name: '', email: '', portfolio: '', role: '', note: '' });

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Careers", url: "https://kifaltech.com/careers" }
  ];

  const positions = [
    {
      id: "senior-fullstack-react",
      title: "Senior Full-Stack React / Next.js Engineer",
      type: "Full-Time • 100% Remote",
      dept: "Engineering",
      desc: "Lead architecture decisions for international client platforms, optimize Core Web Vitals, and build robust API integrations with React 18, Next.js, and Node.js.",
      reqs: ["4+ years building production web apps in React / TypeScript", "Expertise in SSR, edge caching, and server actions", "Deep understanding of Google Core Web Vitals and performance profiling"]
    },
    {
      id: "senior-shopify-developer",
      title: "Senior Shopify Plus Developer",
      type: "Full-Time • 100% Remote",
      dept: "E-Commerce",
      desc: "Build high-converting Shopify 2.0 bespoke themes using Liquid, Storefront API, and headless architectures for fast-growing DTC retail brands.",
      reqs: ["3+ years developing custom Shopify OS 2.0 themes", "Deep experience with Shopify API and checkout extensibility", "Obsession with mobile UX and instant cart drawers"]
    },
    {
      id: "lead-uiux-designer",
      title: "Lead UI/UX & Design Systems Designer",
      type: "Full-Time • 100% Remote",
      dept: "Design & Creative",
      desc: "Design clean, high-conversion web interfaces, design token libraries, and brand systems for ambitious global clients. Zero AI templates; 100% intentional human design.",
      reqs: ["Strong portfolio demonstrating modern web product design", "Mastery of Figma components, tokens, and handoff", "Adherence to typographic balance and WCAG 2.1 AA accessibility"]
    }
  ];

  const handleApply = (e) => {
    e.preventDefault();
    const refCode = `KT-APP-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppRef(refCode);

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_applications') || '[]');
      existing.unshift({
        id: refCode,
        timestamp: new Date().toISOString(),
        role: applicant.role || (selectedRole ? selectedRole.title : 'General Engineering'),
        applicant: { ...applicant }
      });
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

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={agencyData.pageSEO.careers.title}
        description={agencyData.pageSEO.careers.metaDesc}
        canonical={agencyData.pageSEO.careers.canonical}
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
              At KifalTech, we value craft, intellectual honesty, and meaningful client impact. Join an agile engineering team delivering modern digital solutions worldwide.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '60px' }}>
            {positions.map((pos) => (
              <div key={pos.id} className="agency-card" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', marginBottom: '12px' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-light)', textTransform: 'uppercase' }}>{pos.dept}</span>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--text-white)', marginTop: '4px' }}>{pos.title}</h3>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', padding: '6px 14px', borderRadius: 'var(--radius-full)', background: 'var(--bg-subtle)', color: 'var(--accent-emerald)', border: '1px solid var(--border-subtle)' }}>
                    {pos.type}
                  </span>
                </div>
                <p style={{ fontSize: '0.96rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '18px' }}>{pos.desc}</p>
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

          <div id="apply-section" className="agency-card" style={{ padding: 'clamp(32px, 5vw, 48px)', border: '1px solid var(--border-medium)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '8px', color: 'var(--text-white)' }}>
              {selectedRole ? ("Apply: " + selectedRole.title) : "Direct Application & Talent Network"}
            </h3>
            <p style={{ fontSize: '0.94rem', marginBottom: '24px' }}>
              Send us your GitHub, portfolio, or resume link.
            </p>
            {applied ? (
              <div style={{ padding: '36px 24px', textAlign: 'center', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.5rem' }}>✔</div>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '8px' }}>Application Successfully Received</h4>
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
              <form onSubmit={handleApply} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
                <div>
                  <label className="form-label">Full Name</label>
                  <input type="text" required placeholder="Sam Wilson" className="form-input" value={applicant.name} onChange={(e) => setApplicant({ ...applicant, name: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input type="email" required placeholder="sam@example.com" className="form-input" value={applicant.email} onChange={(e) => setApplicant({ ...applicant, email: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">Target Role</label>
                  <input type="text" required placeholder="Role" className="form-input" value={applicant.role} onChange={(e) => setApplicant({ ...applicant, role: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">Portfolio / GitHub / LinkedIn URL</label>
                  <input type="url" required placeholder="https://github.com/..." className="form-input" value={applicant.portfolio} onChange={(e) => setApplicant({ ...applicant, portfolio: e.target.value })} />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <button type="submit" className="btn btn-primary" style={{ padding: '13px 30px' }}>
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

// 26D. MASTER FAQS PAGE
function FaqsPage({ onOpenInquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);

  const categories = ['All', 'Technical & Stacks', 'Pricing & Billing', 'Code Ownership & IP', 'Support & Maintenance'];

  const masterFaqs = [
    {
      category: 'Technical & Stacks',
      q: "Which modern web and mobile tech stacks does KifalTech specialize in?",
      a: "We specialize in modern ecosystems including React 18, Next.js, TypeScript, Node.js, PHP/Laravel, React Native, Flutter, and Shopify Online Store 2.0. We engineer for speed, zero vendor lock-in, and 95+ Google Lighthouse scores."
    },
    {
      category: 'Technical & Stacks',
      q: "How do you optimize for Google Core Web Vitals (LCP, CLS, INP)?",
      a: "We build with clean component architectures, automated image transcoding (WebP/AVIF), code-splitting, CDN edge caching, and server-side rendering for sub-second load times."
    },
    {
      category: 'Pricing & Billing',
      q: "How are project fees structured and billed?",
      a: "Our engagements are fixed-quote and milestone-based: typically 50% deposit upon kickoff and 50% upon completed staging QA and deployment approval. Zero surprise fees."
    },
    {
      category: 'Pricing & Billing',
      q: "Are there any hidden recurring fees or mandatory software licenses?",
      a: "Zero. All hosting, domains, and payment processor accounts are set up directly in your organization's name for 100% transparency."
    },
    {
      category: 'Code Ownership & IP',
      q: "Who owns the source code and design assets upon project launch?",
      a: "You do. 100%. Complete intellectual property ownership, Git source code repositories, and Figma designs are transferred unconditionally upon final payment."
    },
    {
      category: 'Code Ownership & IP',
      q: "Do you sign Non-Disclosure Agreements (NDAs) prior to scoping?",
      a: "Yes. We execute mutual NDAs before reviewing proprietary specs, databases, or client business data."
    },
    {
      category: 'Support & Maintenance',
      q: "What warranty is included after website launch?",
      a: "Every custom build includes a complimentary 30-day post-launch warranty covering bug fixes and responsive alignment within the agreed scope."
    },
    {
      category: 'Support & Maintenance',
      q: "Do you offer ongoing SLA maintenance and security monitoring?",
      a: "Yes. We provide monthly maintenance SLAs covering daily cloud backups, uptime monitoring, security patching, and prioritized feature sprints."
    }
  ];

  const filteredFaqs = masterFaqs.filter((f) => {
    const matchesCat = activeCategory === 'All' || f.category === activeCategory;
    const matchesQ = f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQ;
  });

  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "FAQs", url: "https://kifaltech.com/faqs" }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={agencyData.pageSEO.faqs.title}
        description={agencyData.pageSEO.faqs.metaDesc}
        canonical={agencyData.pageSEO.faqs.canonical}
        breadcrumbs={breadcrumbs}
      />
      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">FAQs</span>
          </nav>

          <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', margin: '0 0 36px 0' }}>
            <span className="eyebrow">Knowledge & Answers</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '16px' }}>
              Frequently Asked Questions
            </h1>
            <p style={{ fontSize: '1.12rem' }}>
              Find clear answers to common questions regarding engineering standards, IP ownership, pricing, and maintenance.
            </p>
          </div>

          <div style={{ marginBottom: '28px' }}>
            <input
              type="text"
              placeholder="Search questions (e.g. source code, pricing, react, maintenance)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ padding: '14px 20px', fontSize: '1rem', borderRadius: 'var(--radius-sm)' }}
            />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '9px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--primary)' : 'var(--border-subtle)',
                  background: activeCategory === cat ? 'var(--primary)' : 'var(--bg-card)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-main)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="faq-accordion" style={{ marginBottom: '60px' }}>
            {filteredFaqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeIdx === idx ? "active" : ""}`}>
                <button onClick={() => setActiveIdx(activeIdx === idx ? -1 : idx)} className="faq-trigger" aria-expanded={activeIdx === idx}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">↓</span>
                </button>
                {activeIdx === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// 26E. PRIVACY POLICY PAGE
function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Privacy Policy", url: "https://kifaltech.com/privacy-policy" }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={agencyData.pageSEO.privacyPolicy.title}
        description={agencyData.pageSEO.privacyPolicy.metaDesc}
        canonical={agencyData.pageSEO.privacyPolicy.canonical}
        breadcrumbs={breadcrumbs}
      />
      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Privacy Policy</span>
          </nav>

          <div style={{ marginBottom: '40px' }}>
            <span className="eyebrow">Legal & Compliance</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '16px' }}>Privacy Policy</h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Last Updated: September 3, 2026 • GDPR & CCPA Compliant</p>
          </div>

          <div className="agency-card" style={{ padding: '40px', lineHeight: 1.8 }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>1. Overview & Commitment</h2>
            <p style={{ marginBottom: '24px' }}>At Kifal Tech Digital Solutions ("KifalTech"), we prioritize the security and confidentiality of your data. This policy details how we process and safeguard information collected through our website and client engagements.</p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>2. Data We Collect</h2>
            <p style={{ marginBottom: '24px' }}>We only collect information necessary to deliver digital engineering services: names, work emails, project specs, and anonymized performance telemetry. We never sell or rent your data to advertisers.</p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>3. Security & Encryption</h2>
            <p style={{ marginBottom: '24px' }}>All data is transmitted via TLS 1.3 encryption with 256-bit SSL. Access is protected by multi-factor authentication and role-based access control.</p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>4. Inquiries</h2>
            <p>For privacy inquiries, email <a href="mailto:info@kifaltech.com" style={{ color: 'var(--primary-light)', fontWeight: 600 }}>info@kifaltech.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// 26F. TERMS OF SERVICE PAGE
function TermsOfServicePage() {
  const breadcrumbs = [
    { name: "Home", url: "https://kifaltech.com/" },
    { name: "Terms of Service", url: "https://kifaltech.com/terms-of-service" }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh' }}>
      <SEOHead
        title={agencyData.pageSEO.termsOfService.title}
        description={agencyData.pageSEO.termsOfService.metaDesc}
        canonical={agencyData.pageSEO.termsOfService.canonical}
        breadcrumbs={breadcrumbs}
      />
      <section className="section-spacing" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Terms of Service</span>
          </nav>

          <div style={{ marginBottom: '40px' }}>
            <span className="eyebrow">Client Service Agreement</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '16px' }}>Terms of Service</h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Last Updated: September 3, 2026 • Governing Agreement for All Engagements</p>
          </div>

          <div className="agency-card" style={{ padding: '40px', lineHeight: 1.8 }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>1. 100% Intellectual Property Transfer</h2>
            <p style={{ marginBottom: '24px' }}>Upon settlement of final milestone payments, KifalTech transfers 100% of all intellectual property, source code, design assets, and database schemas directly to the Client with zero vendor lock-in.</p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>2. 30-Day Quality Warranty</h2>
            <p style={{ marginBottom: '24px' }}>Every custom build includes a complimentary 30-day post-launch warranty period during which all bugs or alignment discrepancies within scope are resolved free of charge.</p>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '14px' }}>3. Milestone Invoicing</h2>
            <p style={{ marginBottom: '24px' }}>Projects are billed on verified milestones with zero hidden recurring fees. For questions, contact <a href="mailto:info@kifaltech.com" style={{ color: 'var(--primary-light)', fontWeight: 600 }}>info@kifaltech.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// 27. NOT FOUND PAGE (404)
function NotFoundPage() {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <SEOHead title={agencyData.pageSEO.notFound.title} description={agencyData.pageSEO.notFound.metaDesc} canonical={agencyData.pageSEO.notFound.canonical} noIndex={true} />

      <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '5rem', fontWeight: 800, color: 'var(--primary-light)', display: 'block', lineHeight: 1, marginBottom: '16px' }}>
          404
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', marginBottom: '16px' }}>Page Not Found</h1>
        <p style={{ fontSize: '1.08rem', lineHeight: 1.68, color: 'var(--text-muted)', marginBottom: '36px' }}>
          The page you requested may have been moved, renamed, or is temporarily unavailable.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary" style={{ padding: '13px 26px' }}>
            <span>Return to Home</span>
            <SvgArrow />
          </Link>
          <Link to="/services" className="btn btn-secondary" style={{ padding: '13px 24px' }}>
            Explore Services
          </Link>
          <Link to="/portfolio" className="btn btn-secondary" style={{ padding: '13px 24px' }}>
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

// 28. FOOTER

function Footer({ onStartProject }) {
  const { company } = agencyData;

  const SvgArrow = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );

  return (
    <footer
      style={{
        backgroundColor: '#130f0f',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '64px',
        paddingBottom: '36px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Footer Grid: 5 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'clamp(28px, 4vw, 44px)',
            paddingBottom: '52px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          {/* Col 1: Brand & Professional Description */}
          <div style={{ gridColumn: 'span 2', maxWidth: '380px' }}>
            <div style={{ marginBottom: '18px' }}>
              <KifalTechLogo size="medium" />
            </div>
            <p style={{ fontSize: '0.94rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '22px' }}>
              A boutique digital software and web engineering agency delivering performant web applications, custom Shopify storefronts, and reliable technical solutions for businesses worldwide.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={onStartProject}
                className="btn btn-primary"
                style={{ height: '40px', padding: '0 20px', fontSize: '0.86rem' }}
              >
                <span>Start a Project</span>
                <SvgArrow />
              </button>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px', fontWeight: 600 }}>
              Services
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li><Link to="/services/web-development" style={{ color: 'inherit', transition: 'color 0.2s' }}>Web Development</Link></li>
              <li><Link to="/services/wordpress-development" style={{ color: 'inherit', transition: 'color 0.2s' }}>WordPress Engineering</Link></li>
              <li><Link to="/services/ui-ux-design" style={{ color: 'inherit', transition: 'color 0.2s' }}>UI/UX Design</Link></li>
              <li><Link to="/services/custom-software" style={{ color: 'inherit', transition: 'color 0.2s' }}>Custom Web Apps</Link></li>
              <li><Link to="/services/shopify" style={{ color: 'inherit', transition: 'color 0.2s' }}>Shopify Storefronts</Link></li>
              <li><Link to="/services/seo" style={{ color: 'inherit', transition: 'color 0.2s' }}>SEO & Performance</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px', fontWeight: 600 }}>
              Company
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li><Link to="/about" style={{ color: 'inherit', transition: 'color 0.2s' }}>About KifalTech</Link></li>
              <li><Link to="/process" style={{ color: 'inherit', transition: 'color 0.2s' }}>How We Work</Link></li>
              <li><Link to="/portfolio" style={{ color: 'inherit', transition: 'color 0.2s' }}>Selected Work</Link></li>
              <li><Link to="/pricing" style={{ color: 'inherit', transition: 'color 0.2s' }}>Pricing Packages</Link></li>
              <li><Link to="/careers" style={{ color: 'inherit', transition: 'color 0.2s' }}>Careers</Link></li>
              <li><Link to="/faqs" style={{ color: 'inherit', transition: 'color 0.2s' }}>Client FAQs</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Channels */}
          <div>
            <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px', fontWeight: 600 }}>
              Contact
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li><a href={`mailto:${company.email}`} style={{ color: '#ffffff', fontWeight: 500 }}>{company.email}</a></li>
              <li><a href={`tel:${company.inquiryPhone}`} style={{ color: 'inherit' }}>{company.inquiryPhone}</a></li>
              <li style={{ color: 'var(--text-dim)', fontSize: '0.82rem' }}>151 Haywood St, Asheville, NC</li>
              <li style={{ marginTop: '10px' }}><Link to="/contact" className="btn btn-secondary" style={{ padding: '0 16px', height: '36px', fontSize: '0.82rem' }}>Contact Page</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div
          style={{
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.84rem',
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div>
            © 2026 KifalTech. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ color: 'inherit' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// 29. PROPOSAL MODAL
function ProposalModal({ isOpen, onClose, prefillData }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceOrPlan: '',
    details: ''
  });
  const [status, setStatus] = useState('idle');
  const [submittedRefId, setSubmittedRefId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefillData) {
      if (prefillData.name && prefillData.price) {
        setFormData((prev) => ({
          ...prev,
          serviceOrPlan: `${prefillData.category ? prefillData.category + ' - ' : ''}${prefillData.name} (${prefillData.price})`,
          details: prefillData.details || prev.details
        }));
      } else if (prefillData.title) {
        setFormData((prev) => ({
          ...prev,
          serviceOrPlan: prefillData.title,
          details: prefillData.details || prev.details
        }));
      }
    }
  }, [prefillData]);

  // Keyboard close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    const refId = 'KT-REQ-' + Math.floor(100000 + Math.random() * 900000);
    const newProposal = {
      id: refId,
      timestamp: new Date().toISOString(),
      ...formData
    };

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_proposals') || '[]');
      existing.unshift(newProposal);
      localStorage.setItem('kifaltech_proposals', JSON.stringify(existing.slice(0, 50)));
    } catch (err) {
      // safe fallback
    }

    setSubmittedRefId(refId);
    setTimeout(() => {
      setStatus('success');
    }, 500);
  };

  const handleCopyRef = () => {
    if (submittedRefId && navigator.clipboard) {
      navigator.clipboard.writeText(submittedRefId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClose = () => {
    setFormData({ fullName: '', email: '', phone: '', serviceOrPlan: '', details: '' });
    setStatus('idle');
    setSubmittedRefId('');
    setCopied(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
        <button
          onClick={handleClose}
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
          aria-label="Close modal"
        >
          ✕
        </button>

        {status !== 'success' ? (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span className="eyebrow" style={{ marginBottom: '10px' }}>
                GET A FREE QUOTE
              </span>
              <h3 style={{ fontSize: '2rem', color: 'var(--text-white)', marginBottom: '8px' }}>
                Start Your Project with KifalTech
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)' }}>
                Tell us about your requirements and we will review your project goals with clear scope, transparent pricing, and next steps within 12 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (000) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Service or Package</label>
                  <input
                    type="text"
                    name="serviceOrPlan"
                    placeholder="e.g. Web Development or Standard Plan"
                    value={formData.serviceOrPlan}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label className="form-label">Project Details & Requirements</label>
                <textarea
                  name="details"
                  rows="3"
                  placeholder="Describe your project, timeline, or current goals..."
                  value={formData.details}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary btn-glow"
                style={{ width: '100%', padding: '14px', fontSize: '0.96rem' }}
              >
                {status === 'loading' ? 'Submitting Quote Request...' : 'REQUEST FREE QUOTE'}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '32px 12px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}
            >
              <svg width="26" height="26" viewBox="0 0 16 16" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8.5l3.5 3.5 6.5-7"/>
              </svg>
            </div>
            <h4 style={{ fontSize: '1.8rem', color: 'var(--text-white)', marginBottom: '8px' }}>
              Quote Request Confirmed
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Thank you, <strong style={{ color: 'var(--text-white)' }}>{formData.fullName}</strong>. We have received your project details and will prepare a tailored proposal for <strong style={{ color: 'var(--primary-light)' }}>{formData.email}</strong> within 12 business hours.
            </p>

            <div
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  YOUR INQUIRY TRACKING ID
                </div>
                <div style={{ fontSize: '1.15rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--primary-light)' }}>
                  {submittedRefId}
                </div>
              </div>

              <button
                onClick={handleCopyRef}
                className="btn btn-secondary"
                style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              >
                {copied ? '✔ Copied!' : 'Copy Reference'}
              </button>
            </div>

            <button onClick={handleClose} className="btn btn-primary" style={{ padding: '10px 26px' }}>
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// 30. QUICK FIX MODAL
function QuickFixModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    issue: ''
  });
  const [status, setStatus] = useState('idle');
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);

  // Keyboard close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleReset();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    const newTicket = 'KT-FIX-' + Math.floor(1000 + Math.random() * 9000);
    const triageRecord = {
      ticketId: newTicket,
      timestamp: new Date().toISOString(),
      ...formData
    };

    try {
      const existing = JSON.parse(localStorage.getItem('kifaltech_tickets') || '[]');
      existing.unshift(triageRecord);
      localStorage.setItem('kifaltech_tickets', JSON.stringify(existing.slice(0, 50)));
    } catch (err) {
      // safe fallback
    }

    setTicketId(newTicket);
    setTimeout(() => {
      setStatus('success');
    }, 500);
  };

  const handleCopyTicket = () => {
    if (ticketId && navigator.clipboard) {
      navigator.clipboard.writeText(ticketId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', website: '', issue: '' });
    setStatus('idle');
    setTicketId('');
    setCopied(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleReset}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        <button
          onClick={handleReset}
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
          aria-label="Close emergency triage modal"
        >
          ✕
        </button>

        {status !== 'success' ? (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span className="eyebrow" style={{ marginBottom: '10px', color: 'var(--accent-amber)' }}>
                DIAGNOSTIC TRIAGE
              </span>
              <h3 style={{ fontSize: '1.9rem', color: 'var(--text-white)', marginBottom: '8px' }}>
                Emergency Website Repair
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)' }}>
                Experiencing technical bugs, broken layouts, or speed issues? Provide your details and our technical triage leads will inspect your website within 60 minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label className="form-label">Contact no. *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (000) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Website URL *</label>
                  <input
                    type="text"
                    name="website"
                    required
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label className="form-label">Describe the Issue or Bug *</label>
                <textarea
                  name="issue"
                  required
                  rows="3"
                  placeholder="Explain what is broken (e.g. mobile header overlapping, checkout failing, 500 error)..."
                  value={formData.issue}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary btn-glow"
                style={{ width: '100%', padding: '13px' }}
              >
                {status === 'loading' ? 'Transmitting Diagnostic Report...' : 'SUBMIT EMERGENCY REPORT'}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8.5l3.5 3.5 6.5-7"/>
              </svg>
            </div>
            <h4 style={{ fontSize: '1.7rem', color: 'var(--text-white)', marginBottom: '8px' }}>
              Emergency Triage Dispatched
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Thank you, <strong style={{ color: 'var(--text-white)' }}>{formData.name}</strong>. An on-call engineer has received your report for <strong style={{ color: 'var(--primary-light)' }}>{formData.website}</strong> and will contact you at <strong style={{ color: 'var(--text-white)' }}>{formData.email}</strong> with an initial diagnostic assessment.
            </p>

            <div
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  EMERGENCY TICKET CODE
                </div>
                <div style={{ fontSize: '1.15rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-rose)' }}>
                  {ticketId}
                </div>
              </div>

              <button
                onClick={handleCopyTicket}
                className="btn btn-secondary"
                style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              >
                {copied ? '✔ Copied!' : 'Copy Ticket'}
              </button>
            </div>

            <button onClick={handleReset} className="btn btn-primary" style={{ padding: '10px 26px' }}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// 31. SERVICE DETAIL MODAL (Fallback quick view)
function ServiceDetailModal({ service, onClose, onInquire }) {
  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', border: 'none', color: 'var(--text-dim)', fontSize: '1.3rem', cursor: 'pointer' }}>✕</button>
        <span className="eyebrow" style={{ marginBottom: '12px' }}>{service.category}</span>
        <h3 style={{ fontSize: '1.8rem', color: 'var(--text-white)', marginBottom: '12px' }}>{service.title}</h3>
        <p style={{ fontSize: '0.96rem', lineHeight: 1.68, color: 'var(--text-muted)', marginBottom: '24px' }}>{service.shortDesc}</p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={() => onInquire(service)} className="btn btn-primary" style={{ flex: 1, padding: '12px' }}>
            <span>Get a Quote</span>
            <SvgArrow />
          </button>
          <button onClick={onClose} className="btn btn-secondary" style={{ padding: '12px 20px' }}>Close</button>
        </div>
      </div>
    </div>
  );
}

// 32. MAIN APPLICATION COMPONENT
function AppContent() {
  const { currentPath, navigate } = useRouter();

  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [prefillProposal, setPrefillProposal] = useState(null);
  const [quickFixOpen, setQuickFixOpen] = useState(false);
  const [activeServiceDetail, setActiveServiceDetail] = useState(null);

  const handleOpenProposal = (prefill = null) => {
    setPrefillProposal(prefill);
    setProposalModalOpen(true);
  };

  const handleSelectService = (service) => {
    setActiveServiceDetail(service);
  };

  const handleSelectPlan = (planData) => {
    handleOpenProposal(planData);
  };

  const handleChatNow = (planName, categoryName) => {
    handleOpenProposal({ name: planName, category: categoryName, price: 'Consultation' });
  };

  const renderRoute = () => {
    if (currentPath === '/' || currentPath === '') {
      return (
        <main style={{ flex: 1, paddingTop: '70px' }}>
          <SEOHead
            title={agencyData.pageSEO.home.title}
            description={agencyData.pageSEO.home.metaDesc}
            canonical={agencyData.pageSEO.home.canonical}
          />
          <Hero onStartProject={() => handleOpenProposal()} onOpenQuickFix={() => setQuickFixOpen(true)} />
          <Marquee />
          <AboutSection onLearnMore={() => navigate('/about')} />
          <ServicesList onSelectService={handleSelectService} />
          <SolutionsSection onSelectSolution={(sol) => handleOpenProposal({ title: sol.title })} />
          <PortfolioGrid onStartSimilarProject={(proj) => handleOpenProposal({ title: `Project like ${proj.title}` })} />
          <ProcessSection />
          <PricingTabs onSelectPlan={handleSelectPlan} onChatNow={handleChatNow} />
          <WhyKifalTech />
          <ExperienceSection onStartProject={() => handleOpenProposal()} />
          <TestimonialCarousel />
          <CTASection onStartProject={() => handleOpenProposal()} />
          <ContactForm />
        </main>
      );
    }

    if (currentPath === '/services') {
      return (
        <main style={{ flex: 1 }}>
          <ServicesPage onStartProject={(svc) => handleOpenProposal(svc)} />
        </main>
      );
    }

    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').split('?')[0].split('#')[0];
      return (
        <main style={{ flex: 1 }}>
          <ServiceDetailPage serviceSlug={slug} onStartProject={(svc) => handleOpenProposal(svc)} />
        </main>
      );
    }

    if (currentPath === '/portfolio') {
      return (
        <main style={{ flex: 1 }}>
          <PortfolioPage onStartSimilarProject={(proj) => handleOpenProposal({ title: `Project like ${proj.title}` })} />
        </main>
      );
    }

    if (currentPath.startsWith('/portfolio/')) {
      const slug = currentPath.replace('/portfolio/', '').split('?')[0].split('#')[0];
      return (
        <main style={{ flex: 1 }}>
          <PortfolioDetailPage projectSlug={slug} onStartSimilarProject={(proj) => handleOpenProposal({ title: `Project like ${proj.title}` })} />
        </main>
      );
    }

    if (currentPath === '/about') {
      return (
        <main style={{ flex: 1 }}>
          <AboutPage onStartProject={() => handleOpenProposal()} />
        </main>
      );
    }

    if (currentPath === '/pricing') {
      return (
        <main style={{ flex: 1 }}>
          <PricingPage onSelectPlan={handleSelectPlan} onOpenCustomQuote={() => handleOpenProposal({ title: 'Enterprise Custom Scope' })} />
        </main>
      );
    }

    if (currentPath === '/quick-fix') {
      return (
        <main style={{ flex: 1 }}>
          <QuickFixPage />
        </main>
      );
    }

    if (currentPath === '/solutions') {
      return (
        <main style={{ flex: 1 }}>
          <SolutionsPage onStartProject={(sol) => handleOpenProposal(sol)} />
        </main>
      );
    }

    if (currentPath === '/process') {
      return (
        <main style={{ flex: 1 }}>
          <ProcessPage onStartProject={() => handleOpenProposal({ title: 'Agile Process Discovery' })} />
        </main>
      );
    }

    if (currentPath === '/careers') {
      return (
        <main style={{ flex: 1 }}>
          <CareersPage />
        </main>
      );
    }

    if (currentPath === '/faqs') {
      return (
        <main style={{ flex: 1 }}>
          <FaqsPage onOpenInquiry={() => handleOpenProposal({ title: 'Technical FAQ Inquiry' })} />
        </main>
      );
    }

    if (currentPath === '/contact') {
      return (
        <main style={{ flex: 1 }}>
          <ContactPage />
        </main>
      );
    }

    if (currentPath === '/privacy-policy') {
      return (
        <main style={{ flex: 1 }}>
          <PrivacyPolicyPage />
        </main>
      );
    }

    if (currentPath === '/terms-of-service') {
      return (
        <main style={{ flex: 1 }}>
          <TermsOfServicePage />
        </main>
      );
    }

    return (
      <main style={{ flex: 1 }}>
        <NotFoundPage />
      </main>
    );
  };

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenQuote={() => handleOpenProposal()} onOpenQuickFix={() => setQuickFixOpen(true)} />
      {renderRoute()}
      <Footer onStartProject={() => handleOpenProposal()} onOpenQuickFix={() => setQuickFixOpen(true)} />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top-btn"
        title="Scroll to Top"
        aria-label="Back to Top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>

      <ProposalModal isOpen={proposalModalOpen} onClose={() => { setProposalModalOpen(false); setPrefillProposal(null); }} prefillData={prefillProposal} />
      <QuickFixModal isOpen={quickFixOpen} onClose={() => setQuickFixOpen(false)} />
      <ServiceDetailModal service={activeServiceDetail} onClose={() => setActiveServiceDetail(null)} onInquire={(svc) => { setActiveServiceDetail(null); handleOpenProposal({ title: svc.title }); }} />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

// 33. DOM MOUNT
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}