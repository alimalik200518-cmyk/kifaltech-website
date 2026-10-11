import React, { useState } from 'react';
import { HALLOWEEN_CONFIG } from '../config/halloweenConfig.js';

/**
 * Minimalist Geometric Cyber-Webs (Corners)
 * - Ultra-thin, geometric fiber-optic spider webs in extreme top-right and bottom-left corners.
 * - Deep dark violet color blends into background.
 * - Lights up like neon fiber-optic filaments on mouse hover with subtle amber LED junction nodes.
 */
export default function CyberWebs() {
  const [hoverTopRight, setHoverTopRight] = useState(false);
  const [hoverBottomLeft, setHoverBottomLeft] = useState(false);

  if (!HALLOWEEN_CONFIG.enabled || !HALLOWEEN_CONFIG.animations?.cyberWebs) {
    return null;
  }

  // Angular cyber-web geometry coordinates for 140x140 quadrant
  // Radii: 32, 64, 96, 130
  // Angles: 0, 18, 36, 54, 72, 90 deg
  const angles = [0, 18, 36, 54, 72, 90].map(deg => (deg * Math.PI) / 180);
  const rings = [32, 64, 98, 132];

  return (
    <div className="cyber-webs-container" aria-hidden="true" style={{ pointerEvents: 'none' }}>
      {/* 1. Top-Right Cyber Web */}
      <div
        className={`cyber-web-corner top-right ${hoverTopRight ? 'active' : ''}`}
        onMouseEnter={() => setHoverTopRight(true)}
        onMouseLeave={() => setHoverTopRight(false)}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '140px',
          height: '140px',
          zIndex: 1001,
          pointerEvents: 'auto',
          cursor: 'crosshair',
          transition: 'all 0.4s ease'
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Radial Spokes from corner (140, 0) */}
          {angles.map((a, idx) => {
            const x = 140 - Math.cos(a) * 138;
            const y = Math.sin(a) * 138;
            return (
              <line
                key={`tr-spoke-${idx}`}
                x1="140"
                y1="0"
                x2={x.toFixed(1)}
                y2={y.toFixed(1)}
                className="cyber-web-line"
              />
            );
          })}

          {/* Concentric Geometric Chords */}
          {rings.map((r, rIdx) => {
            const pathData = angles.reduce((acc, a, idx) => {
              const x = 140 - Math.cos(a) * r;
              const y = Math.sin(a) * r;
              return idx === 0 ? `M ${x.toFixed(1)} ${y.toFixed(1)}` : `${acc} L ${x.toFixed(1)} ${y.toFixed(1)}`;
            }, '');
            return (
              <path
                key={`tr-ring-${rIdx}`}
                d={pathData}
                className="cyber-web-line"
              />
            );
          })}

          {/* Subtle LED Intersection Nodes */}
          {hoverTopRight && rings.map((r, rIdx) => (
            angles.filter((_, i) => i % 2 === 1).map((a, aIdx) => {
              const x = 140 - Math.cos(a) * r;
              const y = Math.sin(a) * r;
              return (
                <circle
                  key={`tr-node-${rIdx}-${aIdx}`}
                  cx={x.toFixed(1)}
                  cy={y.toFixed(1)}
                  r={rIdx === 3 ? 1.4 : 1.1}
                  className="cyber-web-node"
                />
              );
            })
          ))}
        </svg>
      </div>

      {/* 2. Bottom-Left Cyber Web */}
      <div
        className={`cyber-web-corner bottom-left ${hoverBottomLeft ? 'active' : ''}`}
        onMouseEnter={() => setHoverBottomLeft(true)}
        onMouseLeave={() => setHoverBottomLeft(false)}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '140px',
          height: '140px',
          zIndex: 990,
          pointerEvents: 'auto',
          cursor: 'crosshair',
          transition: 'all 0.4s ease'
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Radial Spokes from corner (0, 140) */}
          {angles.map((a, idx) => {
            const x = Math.sin(a) * 138;
            const y = 140 - Math.cos(a) * 138;
            return (
              <line
                key={`bl-spoke-${idx}`}
                x1="0"
                y1="140"
                x2={x.toFixed(1)}
                y2={y.toFixed(1)}
                className="cyber-web-line"
              />
            );
          })}

          {/* Concentric Geometric Chords */}
          {rings.map((r, rIdx) => {
            const pathData = angles.reduce((acc, a, idx) => {
              const x = Math.sin(a) * r;
              const y = 140 - Math.cos(a) * r;
              return idx === 0 ? `M ${x.toFixed(1)} ${y.toFixed(1)}` : `${acc} L ${x.toFixed(1)} ${y.toFixed(1)}`;
            }, '');
            return (
              <path
                key={`bl-ring-${rIdx}`}
                d={pathData}
                className="cyber-web-line"
              />
            );
          })}

          {/* Subtle LED Intersection Nodes */}
          {hoverBottomLeft && rings.map((r, rIdx) => (
            angles.filter((_, i) => i % 2 === 1).map((a, aIdx) => {
              const x = Math.sin(a) * r;
              const y = 140 - Math.cos(a) * r;
              return (
                <circle
                  key={`bl-node-${rIdx}-${aIdx}`}
                  cx={x.toFixed(1)}
                  cy={y.toFixed(1)}
                  r={rIdx === 3 ? 1.4 : 1.1}
                  className="cyber-web-node"
                />
              );
            })
          ))}
        </svg>
      </div>
    </div>
  );
}
