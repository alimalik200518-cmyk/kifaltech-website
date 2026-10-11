import React from 'react';

export default function HalloweenFloatingTrigger({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="halloween-floating-trigger"
      title="View Halloween 2026 Special Offer & Perks"
      aria-label="Open Halloween Special Offer"
    >
      <span className="floating-trigger-glow"></span>
      <span className="floating-trigger-icon">🎃</span>
      <span className="floating-trigger-text">Halloween Special</span>
      <span className="floating-trigger-badge">Q4 SPRINT</span>
    </button>
  );
}
