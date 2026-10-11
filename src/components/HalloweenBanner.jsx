import React, { useState, useEffect } from 'react';
import HalloweenCountdown from './HalloweenCountdown.jsx';
import { HALLOWEEN_CONFIG } from '../config/halloweenConfig.js';

export default function HalloweenBanner({ onOpenOffer }) {
  const bannerRef = React.useRef(null);
  const [dismissed, setDismissed] = useState(true); // Default true until checked

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('kifaltech_halloween_banner_dismissed_2026');
    if (!isDismissed) {
      setDismissed(false);
    } else {
      document.documentElement.style.setProperty('--halloween-banner-offset', '0px');
    }
  }, []);

  useEffect(() => {
    if (!dismissed && bannerRef.current) {
      const updateHeight = () => {
        if (bannerRef.current) {
          const h = bannerRef.current.getBoundingClientRect().height;
          document.documentElement.style.setProperty('--halloween-banner-offset', `${Math.round(h)}px`);
        }
      };

      updateHeight();
      const ro = new ResizeObserver(updateHeight);
      ro.observe(bannerRef.current);
      window.addEventListener('resize', updateHeight);

      return () => {
        ro.disconnect();
        window.removeEventListener('resize', updateHeight);
      };
    }
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('kifaltech_halloween_banner_dismissed_2026', 'true');
    document.documentElement.style.setProperty('--halloween-banner-offset', '0px');
  };

  const handleAction = () => {
    const offerSection = document.getElementById('halloween-offers');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenOffer) {
      onOpenOffer();
    }
  };

  if (dismissed) return null;

  return (
    <div
      ref={bannerRef}
      className="halloween-banner"
      role="banner"
      aria-label="Halloween Special Offer Announcement"
    >
      <div className="container halloween-banner-inner">
        {/* Left: Badge & Message */}
        <div className="halloween-banner-content">
          <span className="halloween-banner-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '5px' }}>
              <path d="M12 2c.6 0 1.1.4 1.2 1 .3 1.2.6 2 1.3 2.7 1.2.1 2.3.5 3.3 1.2 2.6 1.8 3.8 4.7 3.2 7.7-.6 3.2-3.1 5.6-6.4 6.2-.9.2-1.7.2-2.6.2s-1.7 0-2.6-.2c-3.3-.6-5.8-3-6.4-6.2-.6-3 .6-5.9 3.2-7.7 1-.7 2.1-1.1 3.3-1.2.7-.7 1-1.5 1.3-2.7.1-.6.6-1 1.2-1zm-3.5 9c-.8 0-1.5.7-1.5 1.5 0 .3.1.6.3.8l2.2-1.3c-.3-.6-.6-1-.9-1zm7 0c-.3 0-.6.4-.9 1l2.2 1.3c.2-.2.3-.5.3-.8 0-.8-.7-1.5-1.6-1.5zm-3.5 4c-1.8 0-3.3.9-4 2.2.3.1.7.2 1 .2.7 0 1.4-.2 2-.5.3.3.7.5 1 .5s.7-.2 1-.5c.6.3 1.3.5 2 .5.3 0 .7-.1 1-.2-.7-1.3-2.2-2.2-4-2.2z"/>
            </svg>
            {HALLOWEEN_CONFIG.banner.badge}
          </span>
          <span className="halloween-banner-text">
            {HALLOWEEN_CONFIG.banner.text}
          </span>
        </div>

        {/* Right: Countdown & CTAs */}
        <div className="halloween-banner-actions">
          <div className="halloween-banner-timer-wrap">
            <span className="timer-prefix">Ends in:</span>
            <HalloweenCountdown targetDate={HALLOWEEN_CONFIG.targetDate} variant="banner" />
          </div>

          <button
            onClick={handleAction}
            className="halloween-banner-btn"
            title="View Halloween Sprint Perks"
          >
            <span>{HALLOWEEN_CONFIG.banner.ctaText}</span>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </button>

          <button
            onClick={handleDismiss}
            className="halloween-banner-close"
            title="Dismiss announcement"
            aria-label="Dismiss Halloween announcement"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
