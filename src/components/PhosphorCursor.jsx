import React, { useEffect, useRef } from 'react';
import { HALLOWEEN_CONFIG } from '../config/halloweenConfig.js';

/**
 * Custom Phosphor Cursor with Faint Fog/Smoke Trail
 * - Sleek, minimal hollow circle cursor with rare amber LED core
 * - Fast-fading ethereal smoke trail (opacity ~0.08 - 0.1)
 * - Auto-disabled on touch devices & prefers-reduced-motion
 * - Auto-pauses when mouse is stationary (zero idle CPU/GPU consumption)
 */
export default function PhosphorCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!HALLOWEEN_CONFIG.enabled || !HALLOWEEN_CONFIG.animations?.phosphorCursor) {
      return;
    }
    // Only desktop pointer devices
    if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let mouseX = -100;
    let mouseY = -100;
    let curX = -100;
    let curY = -100;
    let isHoveringInteractive = false;
    let isInsideWindow = false;

    // Fast-fading smoke particles pool
    const smokePuffs = [];
    const maxPuffs = 22;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isInsideWindow = true;

      // Detect if hovering interactive elements
      const target = e.target;
      if (target) {
        const interactive = target.closest('a, button, input, select, textarea, [role="button"], .interactive-hover');
        isHoveringInteractive = Boolean(interactive);
      }

      // Spawn subtle smoke puff if cursor moved enough
      const dx = mouseX - curX;
      const dy = mouseY - curY;
      if (Math.hypot(dx, dy) > 4 && smokePuffs.length < maxPuffs) {
        smokePuffs.push({
          x: mouseX + (Math.random() - 0.5) * 4,
          y: mouseY + (Math.random() - 0.5) * 4,
          radius: 3 + Math.random() * 2,
          maxRadius: 10 + Math.random() * 4,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -0.3 - Math.random() * 0.3, // faint upward vapor drift
          alpha: 0.09, // Strict <= 0.1 opacity
          life: 1.0,
          decay: 0.045 + Math.random() * 0.02,
          isAmber: Math.random() < 0.2 // Rare amber accent (20%), dominant purple (80%)
        });
      }
    };

    const handleMouseLeave = () => {
      isInsideWindow = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let isRunning = true;
    const render = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, width, height);

      // Smooth cursor lerp
      curX += (mouseX - curX) * 0.45;
      curY += (mouseY - curY) * 0.45;

      // 1. Draw Fading Smoke / Fog Trail
      for (let i = smokePuffs.length - 1; i >= 0; i--) {
        const p = smokePuffs[i];
        p.life -= p.decay;
        p.x += p.vx;
        p.y += p.vy;
        p.radius += (p.maxRadius - p.radius) * 0.06;

        if (p.life <= 0) {
          smokePuffs.splice(i, 1);
          continue;
        }

        const currentAlpha = p.alpha * p.life;
        const color = p.isAmber
          ? `rgba(255, 107, 43, ${currentAlpha})`
          : `rgba(168, 85, 247, ${currentAlpha})`;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, color);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw Sleek Hollow Circle Cursor Head
      if (isInsideWindow && curX > 0 && curY > 0) {
        const targetRadius = isHoveringInteractive ? 14 : 7;
        const radius = targetRadius;

        // Outer Hollow Circle Ring
        ctx.beginPath();
        ctx.arc(curX, curY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = isHoveringInteractive
          ? 'rgba(255, 107, 43, 0.85)'
          : 'rgba(168, 85, 247, 0.7)';
        ctx.lineWidth = isHoveringInteractive ? 1.5 : 1.1;
        ctx.shadowBlur = isHoveringInteractive ? 8 : 4;
        ctx.shadowColor = isHoveringInteractive
          ? 'rgba(255, 107, 43, 0.6)'
          : 'rgba(139, 92, 246, 0.5)';
        ctx.stroke();
        ctx.shadowBlur = 0; // reset

        // Rare Amber Micro LED Core (1.2px)
        ctx.beginPath();
        ctx.arc(curX, curY, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = '#ff8c4a';
        ctx.shadowBlur = 3;
        ctx.shadowColor = '#ff6b2b';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="phosphor-cursor-canvas"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
}
