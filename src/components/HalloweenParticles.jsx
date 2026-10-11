import React, { useEffect, useRef } from 'react';

/**
 * Lightweight, high-performance ambient ember particle effect for Halloween theme.
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

    // Color palette: Ember Orange, Golden Autumn, Royal Purple
    const colors = [
      'rgba(255, 107, 43, ',   // #ff6b2b
      'rgba(249, 115, 22, ',   // #f97316
      'rgba(245, 158, 11, ',   // #f59e0b
      'rgba(168, 85, 247, '    // #a855f7
    ];

    // Particle count: 32 subtle floating embers
    const particleCount = 32;
    const particles = [];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 10;
        this.radius = 1.0 + Math.random() * 2.2;
        this.speedY = 0.25 + Math.random() * 0.55;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        this.maxAlpha = 0.25 + Math.random() * 0.45;
        this.alpha = initial ? Math.random() * this.maxAlpha : 0.05;
        this.fadingIn = true;
        this.sinOffset = Math.random() * Math.PI * 2;
        this.sinSpeed = 0.015 + Math.random() * 0.02;
      }

      update() {
        this.y -= this.speedY;
        this.sinOffset += this.sinSpeed;
        this.x += Math.sin(this.sinOffset) * 0.4 + this.speedX;

        // Fade in when starting, fade out near top
        if (this.fadingIn) {
          this.alpha += 0.008;
          if (this.alpha >= this.maxAlpha) this.fadingIn = false;
        } else if (this.y < height * 0.25) {
          this.alpha -= 0.006;
        }

        if (this.y < -20 || this.alpha <= 0 || this.x < -20 || this.x > width + 20) {
          this.reset(false);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorPrefix}${Math.max(0, this.alpha)})`;
        ctx.shadowBlur = this.radius * 3.5;
        ctx.shadowColor = `${this.colorPrefix}0.6)`;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for performance
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
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
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="halloween-particles-canvas"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1, // Above body background, below interactive components
        opacity: 0.85
      }}
    />
  );
}
