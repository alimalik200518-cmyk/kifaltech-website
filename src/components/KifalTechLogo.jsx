import React from 'react';
import { Link } from './Router.jsx';

/**
 * KifalTech Official Brand Logo
 * Uses the exact image asset `final logo of kifal Tech_2.jpg`
 */
export default function KifalTechLogo({ compact = false, style = {} }) {
  const height = compact ? '40px' : '46px';

  return (
    <Link
      to="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        ...style
      }}
      aria-label="Kifal Tech - Digital Software Agency"
    >
      <img
        src="/images/logo/final logo of kifal Tech_2.jpg"
        alt="Kifal Tech - Digital Software Agency"
        className="brand-logo"
        style={{
          height,
          width: 'auto',
          maxHeight: height,
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </Link>
  );
}
