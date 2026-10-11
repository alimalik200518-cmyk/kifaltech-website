import React from 'react';

// Pure Linear Stroke SVG Icons (Lucide/Tabler Style)
// Stroke width: 2, LineCap: round, LineJoin: round, Fill: none

export function IconWeb({ size = 24, color = "currentColor", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
      <polyline points="6 8 8 10 6 12" />
      <line x1="10" x2="13" y1="12" y2="12" />
    </svg>
  );
}

export function IconApp({ size = 24, color = "currentColor", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" strokeWidth="2.5" />
      <line x1="9" x2="15" y1="5" y2="5" />
    </svg>
  );
}

export function IconEcommerce({ size = 24, color = "currentColor", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export function IconAI({ size = 24, color = "currentColor", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <rect width="14" height="14" x="5" y="5" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M9 1v4" />
      <path d="M15 1v4" />
      <path d="M9 19v4" />
      <path d="M15 19v4" />
      <path d="M1 9h4" />
      <path d="M1 15h4" />
      <path d="M19 9h4" />
      <path d="M19 15h4" />
    </svg>
  );
}

export function IconUIUX({ size = 24, color = "currentColor", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
      <circle cx="6" cy="6" r="1" fill={color} />
      <circle cx="15" cy="15" r="2" />
    </svg>
  );
}

export function IconSEO({ size = 24, color = "currentColor", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
      <polyline points="14 9 19 9 19 14" />
    </svg>
  );
}

export function IconWordpress({ size = 24, color = "currentColor", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M4 12c0 2.8 1.4 5.3 3.6 6.8L3.8 8.6c-.5 1-.8 2.2-.8 3.4Z" />
      <path d="M19.8 8.6c.5 1 .8 2.2.8 3.4 0 2.8-1.4 5.3-3.6 6.8l2.8-10.2Z" />
      <path d="m8.5 19 3.5-10.2 2 5.7" />
    </svg>
  );
}

export function IconShieldCheck({ size = 24, color = "currentColor", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconVideo({ size = 24, color = "currentColor", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

// Icon Resolver function mapping any service ID or category to its linear stroke SVG icon
export function getServiceIcon(id = '', category = '', size = 22, color = "var(--primary-light)") {
  const normalizedId = (id || '').toLowerCase();
  const normalizedCat = (category || '').toLowerCase();

  if (normalizedId.includes('ai') || normalizedId.includes('automation') || normalizedCat.includes('automation')) {
    return <IconAI size={size} color={color} />;
  }
  if (normalizedId.includes('wordpress')) {
    return <IconWordpress size={size} color={color} />;
  }
  if (normalizedId.includes('mobile') || normalizedId.includes('app') || normalizedCat.includes('app')) {
    return <IconApp size={size} color={color} />;
  }
  if (normalizedId.includes('shopify') || normalizedId.includes('e-commerce') || normalizedId.includes('store') || normalizedCat.includes('commerce')) {
    return <IconEcommerce size={size} color={color} />;
  }
  if (normalizedId.includes('ui') || normalizedId.includes('ux') || normalizedId.includes('design') || normalizedId.includes('brand') || normalizedCat.includes('design')) {
    return <IconUIUX size={size} color={color} />;
  }
  if (normalizedId.includes('seo') || normalizedId.includes('ads') || normalizedId.includes('marketing') || normalizedCat.includes('growth') || normalizedCat.includes('media')) {
    return <IconSEO size={size} color={color} />;
  }
  if (normalizedId.includes('video') || normalizedId.includes('media')) {
    return <IconVideo size={size} color={color} />;
  }
  if (normalizedId.includes('maintenance') || normalizedId.includes('sla') || normalizedId.includes('support')) {
    return <IconShieldCheck size={size} color={color} />;
  }

  // Default to Web Development
  return <IconWeb size={size} color={color} />;
}

export default {
  IconWeb,
  IconApp,
  IconEcommerce,
  IconAI,
  IconUIUX,
  IconSEO,
  IconWordpress,
  IconShieldCheck,
  IconVideo,
  getServiceIcon
};
