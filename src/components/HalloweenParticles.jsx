import React, { useEffect, useRef } from 'react';

/**
 * Lightweight, high-performance ambient ember & mini-ghost particle effect.
 * Palette: Electric Cyan, Teal, Metallic Steel & Warm Pumpkin Ember matching official brand.
 * Respects prefers-reduced-motion and consumes minimal CPU/GPU.
 */
export default function HalloweenParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect user motion preferences
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Color palette: Electric Cyan, Cyan Glow, Deep Teal, Pumpkin Ember
    const colors = [
      'rgba(0, 210, 255, ',    // Electric Cyan #00D2FF
      'rgba(56, 225, 255, ',   // High-glow Cyan #38E1FF
      'rgba(14, 116, 144, ',   // Deep Teal #0E7490
      'rgba(255, 122, 0, '     // Pumpkin Ember #FF7A00
    ];

    const particleCount = 28;
    const particles = [];

    class Particle {
      constructor(isGhost = false) {
        this.isGhost = isGhost;
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 15;
        this.radius = this.isGhost ? 7 : 1.0 + Math.random() * 2.2;
        this.speedY = this.isGhost ? 0.35 + Math.random() * 0.4 : 0.25 + Math.random() * 0.55;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        this.maxAlpha = this.isGhost ? 0.45 : 0.25 + Math.random() * 0.45;
        this.alpha = initial ? Math.random() * this.maxAlpha : 0.05;
        this.fadingIn = true;
        this.sinOffset = Math.random() * Math.PI * 2;
        this.sinSpeed = 0.012 + Math.random() * 0.018;
      }

      update() {
        this.y -= this.speedY;
        this.sinOffset += this.sinSpeed;
        this.x += Math.sin(this.sinOffset) * (this.isGhost ? 0.8 : 0.4) + this.speedX;

        // Fade in when starting, fade out near top
        if (this.fadingIn) {
          this.alpha += 0.008;
          if (this.alpha >= this.maxAlpha) this.fadingIn = false;
        } else if (this.y < height * 0.25) {
          this.alpha -= 0.006;
        }

        if (this.y < -30 || this.alpha <= 0 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw() {
        if (this.isGhost) {
          // Subtle drifting mini spectral ghost wisp
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.fillStyle = `rgba(224, 247, 255, ${Math.max(0, this.alpha * 0.75)})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(0, 210, 255, ${Math.max(0, this.alpha)})`;
          
          ctx.beginPath();
          ctx.arc(0, 0, 6, Math.PI, 0, false);
          ctx.lineTo(6, 8);
          ctx.lineTo(3, 6);
          ctx.lineTo(0, 8);
          ctx.lineTo(-3, 6);
          ctx.lineTo(-6, 8);
          ctx.closePath();
          ctx.fill();

          // Tiny glowing cyan eyes
          ctx.fillStyle = `rgba(0, 210, 255, ${Math.max(0, this.alpha * 0.95)})`;
          ctx.beginPath();
          ctx.arc(-2, -1, 1.1, 0, Math.PI * 2);
          ctx.arc(2, -1, 1.1, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        } else {
          // Ambient Cyber-Ember particle
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${this.colorPrefix}${Math.max(0, this.alpha)})`;
          ctx.shadowBlur = this.radius * 3.5;
          ctx.shadowColor = `${this.colorPrefix}0.6)`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    // Populate particles (mostly glowing embers, with 4 mini floating ghosts)
    for (let i = 0; i < particleCount; i++) {
      const isGhost = i < 4;
      particles.push(new Particle(isGhost));
    }

    let isRunning = true;
    const render = () => {
      if (!isRunning) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1, // Behind interactive elements, in front of main bg
        opacity: 0.85
      }}
      aria-hidden="true"
    />
  );
}
