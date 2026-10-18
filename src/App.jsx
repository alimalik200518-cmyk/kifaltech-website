import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './components/Router.jsx';
import SEOHead from './components/SEOHead.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

// Halloween 2026 Campaign Components & Config
import { HALLOWEEN_CONFIG } from './config/halloweenConfig.js';
import HalloweenBanner from './components/HalloweenBanner.jsx';
import HalloweenParticles from './components/HalloweenParticles.jsx';
import HalloweenOfferSection from './components/HalloweenOfferSection.jsx';
import HalloweenModal from './components/HalloweenModal.jsx';
import HalloweenFloatingTrigger from './components/HalloweenFloatingTrigger.jsx';
import CyberWebs from './components/CyberWebs.jsx';
import PhosphorCursor from './components/PhosphorCursor.jsx';
import HalloweenGhost from './components/HalloweenGhost.jsx';

// Home Page Sections
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import AboutSection from './components/AboutSection.jsx';
import TeamSection from './components/TeamSection.jsx';
import ServicesList from './components/ServicesList.jsx';
import SolutionsSection from './components/SolutionsSection.jsx';
import PortfolioGrid from './components/PortfolioGrid.jsx';
import ProcessSection from './components/ProcessSection.jsx';
import PricingTabs from './components/PricingTabs.jsx';
import WhyKifalTech from './components/WhyKifalTech.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import TestimonialCarousel from './components/TestimonialCarousel.jsx';
import CTASection from './components/CTASection.jsx';
import ContactForm from './components/ContactForm.jsx';

// Dedicated Subpages & Detail Pages
import ServicesPage from './components/ServicesPage.jsx';
import ServiceDetailPage from './components/ServiceDetailPage.jsx';
import PortfolioPage from './components/PortfolioPage.jsx';
import PortfolioDetailPage from './components/PortfolioDetailPage.jsx';
import SolutionsPage from './components/SolutionsPage.jsx';
import ProcessPage from './components/ProcessPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import PricingPage from './components/PricingPage.jsx';
import QuickFixPage from './components/QuickFixPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import CareersPage from './components/CareersPage.jsx';
import FaqsPage from './components/FaqsPage.jsx';
import PrivacyPolicyPage from './components/PrivacyPolicyPage.jsx';
import TermsOfServicePage from './components/TermsOfServicePage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

// Interactive Modals
import ProposalModal from './components/ProposalModal.jsx';
import QuickFixModal from './components/QuickFixModal.jsx';
import ServiceDetailModal from './components/ServiceDetailModal.jsx';

import { agencyData } from './data/agencyData.js';

function AppContent() {
  const { currentPath, navigate } = useRouter();

  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [prefillProposal, setPrefillProposal] = useState(null);
  const [quickFixOpen, setQuickFixOpen] = useState(false);
  const [activeServiceDetail, setActiveServiceDetail] = useState(null);
  const [halloweenModalOpen, setHalloweenModalOpen] = useState(false);

  // Halloween Theme Activation & Cleanup
  useEffect(() => {
    if (HALLOWEEN_CONFIG.enabled) {
      document.body.classList.add('halloween-theme-active');
    } else {
      document.body.classList.remove('halloween-theme-active');
      document.documentElement.style.setProperty('--halloween-banner-offset', '0px');
    }
    return () => {
      document.body.classList.remove('halloween-theme-active');
    };
  }, []);

  // Smart Timer & Exit Intent Popup Trigger for Halloween Offer
  useEffect(() => {
    if (!HALLOWEEN_CONFIG.enabled) return;
    const isDismissed = sessionStorage.getItem(HALLOWEEN_CONFIG.modal.storageKey);
    if (isDismissed) return;

    const timer = setTimeout(() => {
      const alreadyEngaged = sessionStorage.getItem(HALLOWEEN_CONFIG.modal.storageKey);
      if (!alreadyEngaged) {
        setHalloweenModalOpen(true);
      }
    }, HALLOWEEN_CONFIG.modal.autoShowDelayMs);

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !sessionStorage.getItem(HALLOWEEN_CONFIG.modal.storageKey)) {
        setHalloweenModalOpen(true);
      }
    };

    if (HALLOWEEN_CONFIG.modal.exitIntentEnabled) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      clearTimeout(timer);
      if (HALLOWEEN_CONFIG.modal.exitIntentEnabled) {
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

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

  // Route matching logic
  const renderRoute = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return (
        <main style={{ flex: 1, paddingTop: '72px' }}>
          <SEOHead
            title={agencyData.pageSEO.home.title}
            description={agencyData.pageSEO.home.metaDesc}
            canonical={agencyData.pageSEO.home.canonical}
          />
          <Hero onStartProject={() => handleOpenProposal()} onOpenQuickFix={() => setQuickFixOpen(true)} />
          <Marquee />
          <AboutSection onLearnMore={() => navigate('/about')} />
          <TeamSection />
          <ServicesList onSelectService={handleSelectService} />
          {HALLOWEEN_CONFIG.enabled && (
            <HalloweenOfferSection onClaimOffer={handleOpenProposal} />
          )}
          <SolutionsSection onSelectSolution={(sol) => handleOpenProposal({ title: sol.title })} />
          <PortfolioGrid onStartSimilarProject={(proj) => handleOpenProposal({ title: `Project like ${proj.title}` })} />
          <ProcessSection />
          <PricingTabs onSelectPlan={handleSelectPlan} onChatNow={handleChatNow} />
          <WhyKifalTech />
          <TestimonialCarousel />
          <CTASection onStartProject={() => handleOpenProposal()} />
          <ContactForm />
        </main>
      );
    }

    // 2. Services Hub
    if (currentPath === '/services') {
      return (
        <main style={{ flex: 1 }}>
          <ServicesPage onStartProject={(svc) => handleOpenProposal(svc)} />
        </main>
      );
    }

    // 3. Service Detail Page (/services/:slug)
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').split('?')[0].split('#')[0];
      return (
        <main style={{ flex: 1 }}>
          <ServiceDetailPage serviceSlug={slug} onStartProject={(svc) => handleOpenProposal(svc)} />
        </main>
      );
    }

    // 4. Portfolio Hub (/portfolio and /work)
    if (currentPath === '/portfolio' || currentPath === '/work') {
      return (
        <main style={{ flex: 1 }}>
          <PortfolioPage onStartSimilarProject={(proj) => handleOpenProposal({ title: `Project like ${proj.title}` })} />
        </main>
      );
    }

    // 5. Portfolio & Work Detail Pages (/portfolio/:slug and /work/:slug)
    if (currentPath.startsWith('/portfolio/') || currentPath.startsWith('/work/')) {
      const slug = currentPath.startsWith('/work/')
        ? currentPath.replace('/work/', '').split('?')[0].split('#')[0]
        : currentPath.replace('/portfolio/', '').split('?')[0].split('#')[0];
      return (
        <main style={{ flex: 1 }}>
          <PortfolioDetailPage
            projectSlug={slug}
            onStartSimilarProject={(proj) => handleOpenProposal({ title: `Project like ${proj.title}` })}
          />
        </main>
      );
    }

    // 6. Solutions Page
    if (currentPath === '/solutions') {
      return (
        <main style={{ flex: 1 }}>
          <SolutionsPage onStartProject={(sol) => handleOpenProposal(sol)} />
        </main>
      );
    }

    // 7. Process & Methodology Page
    if (currentPath === '/process') {
      return (
        <main style={{ flex: 1 }}>
          <ProcessPage onStartProject={() => handleOpenProposal({ title: 'Agile Process Consultation' })} />
        </main>
      );
    }

    // 8. About Page
    if (currentPath === '/about') {
      return (
        <main style={{ flex: 1 }}>
          <AboutPage onStartProject={() => handleOpenProposal()} />
        </main>
      );
    }

    // 9. Pricing Page
    if (currentPath === '/pricing') {
      return (
        <main style={{ flex: 1 }}>
          <PricingPage
            onSelectPlan={handleSelectPlan}
            onOpenCustomQuote={() => handleOpenProposal({ title: 'Enterprise Custom Scope' })}
          />
        </main>
      );
    }

    // 10. Careers Page
    if (currentPath === '/careers') {
      return (
        <main style={{ flex: 1 }}>
          <CareersPage />
        </main>
      );
    }

    // 11. Client FAQs Page (/faq and /faqs)
    if (currentPath === '/faq' || currentPath === '/faqs') {
      return (
        <main style={{ flex: 1 }}>
          <FaqsPage onOpenInquiry={() => handleOpenProposal({ title: 'Technical FAQ Inquiry' })} />
        </main>
      );
    }

    // 12. Quick Fix Support Page
    if (currentPath === '/quick-fix') {
      return (
        <main style={{ flex: 1 }}>
          <QuickFixPage />
        </main>
      );
    }

    // 13. Contact Page
    if (currentPath === '/contact') {
      return (
        <main style={{ flex: 1 }}>
          <ContactPage />
        </main>
      );
    }

    // 14. Privacy Policy Page (/privacy and /privacy-policy)
    if (currentPath === '/privacy' || currentPath === '/privacy-policy') {
      return (
        <main style={{ flex: 1 }}>
          <PrivacyPolicyPage />
        </main>
      );
    }

    // 15. Terms of Service Page (/terms and /terms-of-service)
    if (currentPath === '/terms' || currentPath === '/terms-of-service') {
      return (
        <main style={{ flex: 1 }}>
          <TermsOfServicePage />
        </main>
      );
    }

    // 16. 404 Not Found (/404 and fallback)
    return (
      <main style={{ flex: 1 }}>
        <NotFoundPage />
      </main>
    );
  };

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Navigation */}
      <Navbar
        onOpenQuote={() => handleOpenProposal()}
        onOpenQuickFix={() => setQuickFixOpen(true)}
      />

      {/* Dynamic Page Router */}
      {renderRoute()}

      {/* Global Footer */}
      <Footer
        onStartProject={() => handleOpenProposal()}
        onOpenQuickFix={() => setQuickFixOpen(true)}
      />

      {/* Floating Back to Top Button */}
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

      {/* Sleek Floating WhatsApp Integration */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <ProposalModal
        isOpen={proposalModalOpen}
        onClose={() => {
          setProposalModalOpen(false);
          setPrefillProposal(null);
        }}
        prefillData={prefillProposal}
      />

      <QuickFixModal
        isOpen={quickFixOpen}
        onClose={() => setQuickFixOpen(false)}
      />

      <ServiceDetailModal
        service={activeServiceDetail}
        onClose={() => setActiveServiceDetail(null)}
        onInquire={(svc) => {
          setActiveServiceDetail(null);
          handleOpenProposal({ title: svc.title });
        }}
      />

      {/* Halloween Special Offer Modal */}
      {HALLOWEEN_CONFIG.enabled && (
        <HalloweenModal
          isOpen={halloweenModalOpen}
          onClose={() => {
            setHalloweenModalOpen(false);
            sessionStorage.setItem(HALLOWEEN_CONFIG.modal.storageKey, 'true');
          }}
          onOpenProposal={handleOpenProposal}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
