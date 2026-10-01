import React, { useEffect } from 'react';
import { agencyData } from '../data/agencyData.js';

export default function SEOHead({
  title,
  description,
  canonical,
  schema = null,
  breadcrumbs = null,
  ogType = 'website',
  noIndex = false
}) {
  const { company } = agencyData;
  const pageTitle = title || `${company.name} | ${company.tagline}`;
  const pageDesc = description || company.subheadline;
  const canonicalUrl = canonical || company.siteUrl;

  useEffect(() => {
    // 1. Update Title
    document.title = pageTitle;

    // Helper to update or create meta tag
    const setMetaTag = (attr, key, content) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', pageDesc);
    setMetaTag('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow');
    setMetaTag('name', 'author', company.name);

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', pageDesc);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', company.name);
    setMetaTag('property', 'og:locale', 'en_US');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', pageDesc);

    // 5. Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 6. Structured Data (JSON-LD)
    const jsonLdScripts = [];

    // Base Organization Schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": company.legalName,
      "alternateName": company.name,
      "url": company.siteUrl,
      "logo": "https://kifaltech.com/logo.png",
      "email": company.email,
      "telephone": company.inquiryPhone,
      "sameAs": company.socials.map((s) => s.url),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": company.rating?.score || "4.6",
        "bestRating": company.rating?.max || "5.0",
        "ratingCount": company.rating?.count || "128"
      }
    };

    // Construct schemas to inject
    const schemasToInject = [orgSchema];

    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    // Breadcrumb Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((b, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": b.name,
          "item": b.url
        }))
      };
      schemasToInject.push(breadcrumbSchema);
    }

    // Remove any previously injected dynamic schema tags
    const oldDynamicSchemas = document.querySelectorAll('script[data-dynamic-seo="true"]');
    oldDynamicSchemas.forEach((tag) => tag.remove());

    // Inject active schemas
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
