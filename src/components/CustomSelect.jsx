import React, { useState, useRef, useEffect } from 'react';

/**
 * CustomSelect
 * 100% custom-styled brutalist dropdown component.
 * Replaces native browser <select> to completely eliminate default OS/blue highlight colors.
 * Theme: #0A0A0A dark background, sharp 1px #222 borders, 0 glowing shadows, 0px border-radius.
 */
export default function CustomSelect({
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option...',
  disabled = false,
  className = ''
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Normalize options to [{ value, label }]
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === 'string') {
      return { value: opt, label: opt };
    }
    return opt;
  });

  const selectedOption = normalizedOptions.find((opt) => String(opt.value) === String(value));

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSelect = (optVal) => {
    if (disabled) return;
    if (onChange) {
      onChange({
        target: {
          name: name || id,
          value: optVal
        }
      });
    }
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currIdx = normalizedOptions.findIndex((opt) => String(opt.value) === String(value));
        const nextIdx = (currIdx + 1) % normalizedOptions.length;
        handleSelect(normalizedOptions[nextIdx].value);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currIdx = normalizedOptions.findIndex((opt) => String(opt.value) === String(value));
        const prevIdx = (currIdx - 1 + normalizedOptions.length) % normalizedOptions.length;
        handleSelect(normalizedOptions[prevIdx].value);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`custom-select-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        userSelect: 'none'
      }}
    >
      {/* Trigger Button */}
      <div
        id={id}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className="custom-select-trigger"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'transparent',
          border: 'none',
          borderBottom: isOpen ? '1px solid #FFFFFF' : '1px solid #222222',
          borderRadius: '0px',
          color: selectedOption ? '#FFFFFF' : '#888888',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.96rem',
          lineHeight: '1.5',
          padding: '10px 0',
          cursor: disabled ? 'not-allowed' : 'pointer',
          outline: 'none',
          position: 'relative',
          transition: 'border-color 0.15s ease'
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: '20px' }}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        {/* Custom Chevron Indicator */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isOpen ? '#FFFFFF' : '#888888'}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease, stroke 0.2s ease',
            flexShrink: 0
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>

        {/* Focus Underline Bar */}
        <div
          className="field-underline-bar"
          style={{
            transform: isOpen ? 'scaleX(1)' : 'scaleX(0)',
            backgroundColor: '#FFFFFF'
          }}
        />
      </div>

      {/* Popout Options Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="custom-select-menu"
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            width: '100%',
            backgroundColor: '#0C0C0C',
            border: '1px solid #222222',
            boxShadow: 'none',
            borderRadius: '0px',
            maxHeight: '260px',
            overflowY: 'auto',
            zIndex: 9999
          }}
        >
          {normalizedOptions.map((opt) => {
            const isSelected = String(opt.value) === String(value);

            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.value)}
                className="custom-select-option"
                style={{
                  padding: '12px 14px',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-sans)',
                  color: isSelected ? '#FFFFFF' : '#A0A0A0',
                  backgroundColor: isSelected ? '#161616' : 'transparent',
                  borderLeft: isSelected ? '3px solid #FFFFFF' : '3px solid transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background-color 0.12s ease, color 0.12s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1C1C1C';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isSelected ? '#161616' : 'transparent';
                  e.currentTarget.style.color = isSelected ? '#FFFFFF' : '#A0A0A0';
                }}
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem' }}>✓</span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
