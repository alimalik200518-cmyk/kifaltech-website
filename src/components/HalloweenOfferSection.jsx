import React, { useState } from 'react';
import HalloweenCountdown from './HalloweenCountdown.jsx';
import { HALLOWEEN_CONFIG } from '../config/halloweenConfig.js';

export default function HalloweenOfferSection({ onClaimOffer }) {
  const [copied, setCopied] = useState(false);
  const { offerSection, targetDate, promoCode } = HALLOWEEN_CONFIG;

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSelectPackage = (pkg) => {
    if (onClaimOffer) {
      onClaimOffer({
        title: `Halloween Special: ${pkg.name}`,
        name: `${pkg.name} (Code: ${promoCode})`,
        category: pkg.category,
        price: pkg.anchorPrice,
        details: `Halloween 2026 Offer - Promo Code: ${promoCode}. Benefit requested: ${pkg.promoBenefit}.`
      });
    }
  };

  return (
    <section id="halloween-offers" className="halloween-offer-section section-spacing">
      <div className="container">
        {/* Halloween Campaign Header */}
        <div className="section-header halloween-section-header">
          <div className="eyebrow halloween-eyebrow">
            <span className="halloween-pulse-indicator"></span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c.6 0 1.1.4 1.2 1 .3 1.2.6 2 1.3 2.7 1.2.1 2.3.5 3.3 1.2 2.6 1.8 3.8 4.7 3.2 7.7-.6 3.2-3.1 5.6-6.4 6.2-.9.2-1.7.2-2.6.2s-1.7 0-2.6-.2c-3.3-.6-5.8-3-6.4-6.2-.6-3 .6-5.9 3.2-7.7 1-.7 2.1-1.1 3.3-1.2.7-.7 1-1.5 1.3-2.7.1-.6.6-1 1.2-1zm-3.5 9c-.8 0-1.5.7-1.5 1.5 0 .3.1.6.3.8l2.2-1.3c-.3-.6-.6-1-.9-1zm7 0c-.3 0-.6.4-.9 1l2.2 1.3c.2-.2.3-.5.3-.8 0-.8-.7-1.5-1.6-1.5zm-3.5 4c-1.8 0-3.3.9-4 2.2.3.1.7.2 1 .2.7 0 1.4-.2 2-.5.3.3.7.5 1 .5s.7-.2 1-.5c.6.3 1.3.5 2 .5.3 0 .7-.1 1-.2-.7-1.3-2.2-2.2-4-2.2z"/>
              </svg>
              {offerSection.eyebrow}
            </span>
          </div>

          <h2 className="halloween-headline">
            {offerSection.title}
          </h2>

          <p className="halloween-subheadline">
            {offerSection.description}
          </p>

          {/* Central Countdown & Code Card */}
          <div className="halloween-timer-highlight-card">
            <div className="halloween-timer-highlight-meta">
              <span className="halloween-campaign-status">
                <span className="live-dot"></span>
                ACTIVE SEASONAL OFFER
              </span>
              <span className="halloween-target-label">Campaign Final Cut-off: October 31, 2026</span>
            </div>

            <div className="halloween-timer-highlight-body">
              <HalloweenCountdown targetDate={targetDate} variant="card" />

              <div className="halloween-code-box">
                <span className="halloween-code-label">Kickoff Promo Code:</span>
                <div className="halloween-code-action-wrap">
                  <span className="halloween-code-tag">{promoCode}</span>
                  <button
                    onClick={handleCopyCode}
                    className="halloween-copy-btn"
                    title="Copy Promo Code"
                    aria-label="Copy Halloween promo code"
                  >
                    {copied ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Halloween Campaign Value Adds */}
        <div className="halloween-perks-grid">
          {offerSection.perks.map((perk, idx) => (
            <div key={idx} className="halloween-perk-card">
              <div className="halloween-perk-icon-wrap">
                {idx === 0 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--halloween-orange, #ff6b2b)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                )}
                {idx === 1 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--halloween-purple, #8b5cf6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                )}
                {idx === 2 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--halloween-orange, #ff6b2b)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                )}
              </div>
              <div className="halloween-perk-text">
                <h4>{perk.title}</h4>
                <p>{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Featured Halloween Packages based on existing services */}
        <div className="halloween-packages-grid">
          {offerSection.featuredPackages.map((pkg) => (
            <div key={pkg.id} className="halloween-package-card">
              {pkg.highlight && (
                <div className="halloween-package-badge">
                  <span>{pkg.highlight}</span>
                </div>
              )}

              <div className="halloween-package-header">
                <span className="halloween-package-cat">{pkg.category}</span>
                <h3 className="halloween-package-title">{pkg.name}</h3>
                <div className="halloween-package-turnaround">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Sprint Window: {pkg.turnaround}</span>
                </div>
              </div>

              <div className="halloween-package-pricing">
                <span className="price-tag">{pkg.anchorPrice}</span>
                <span className="price-note">Transparent Milestone Invoicing</span>
              </div>

              {/* Halloween Special Value Highlight */}
              <div className="halloween-package-promo-callout">
                <div className="promo-callout-icon">🎃</div>
                <div className="promo-callout-text">
                  <strong>Halloween Perk:</strong> {pkg.promoBenefit}
                </div>
              </div>

              {/* Deliverables List */}
              <ul className="halloween-package-features">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8.5l3.5 3.5 6.5-7"/>
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="halloween-package-footer">
                <button
                  onClick={() => handleSelectPackage(pkg)}
                  className="halloween-claim-btn"
                  title={`Claim Halloween Offer for ${pkg.name}`}
                >
                  <span>Claim Seasonal Sprint</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Assurance Footer */}
        <div className="halloween-assurance-bar">
          <div className="assurance-item">
            <span className="assurance-dot"></span>
            <span>100% Code Ownership Transferred Upon Completion</span>
          </div>
          <div className="assurance-divider">•</div>
          <div className="assurance-item">
            <span className="assurance-dot"></span>
            <span>Direct Founder Architecture Access (USA &amp; PK)</span>
          </div>
          <div className="assurance-divider">•</div>
          <div className="assurance-item">
            <span className="assurance-dot"></span>
            <span>Zero Long-Term Lock-in or Hidden Licensing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
