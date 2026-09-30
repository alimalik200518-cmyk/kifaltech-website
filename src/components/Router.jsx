import React, { createContext, useContext, useState, useEffect } from 'react';
import { formatPriceByCurrency, agencyData } from '../data/agencyData.js';

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {}
});

const CurrencyContext = createContext({
  currency: 'USD',
  setCurrency: () => {},
  formatPrice: (amt) => (typeof amt === 'string' ? amt : `$${amt}`)
});

export function useRouter() {
  return useContext(RouterContext);
}

export function useCurrency() {
  return useContext(CurrencyContext);
}

export function RouterProvider({ children }) {
  // Extract initial path from window.location
  const getCleanPath = () => {
    let path = window.location.pathname || '/';
    // If opened via file:/// protocol or hash routing
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      path = window.location.hash.slice(1);
    }
    // Remove trailing slash if not root
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

    // Handle in-page anchors on the same page (e.g. #contact, #about)
    if (toPath.startsWith('#') && !toPath.startsWith('#/')) {
      const targetId = toPath.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Update history state
    let target = toPath;
    if (target.length > 1 && target.endsWith('/')) {
      target = target.slice(0, -1);
    }

    if (window.location.protocol === 'file:') {
      // In offline file preview, use hash fallback
      window.location.hash = '#' + target;
    } else {
      window.history.pushState({}, '', target);
    }

    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const [currency, setCurrencyState] = useState(() => {
    try {
      return localStorage.getItem('kifaltech_currency') || 'USD';
    } catch (e) {
      return 'USD';
    }
  });

  const setCurrency = (code) => {
    setCurrencyState(code);
    try {
      localStorage.setItem('kifaltech_currency', code);
    } catch (e) {}
  };

  const formatPrice = (usdAmount) => {
    return formatPriceByCurrency(usdAmount, currency);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
        {children}
      </CurrencyContext.Provider>
    </RouterContext.Provider>
  );
}

// Accessible Link component that intercepts clicks
export function Link({ to, children, className, style, onClick, ...props }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    // Don't intercept if modifier key was pressed (Ctrl, Command, Shift, Alt)
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
