import React, { useEffect, useRef } from 'react';

/**
 * HeroTechCanvas
 * Creates a slow-moving, dark cinematic architectural perspective wireframe
 * and subtle data-grid telemetry loop at 10-14% opacity.
 */
export default function HeroTechCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Grid animation state
    let gridOffset = 0;
    const gridSpeed = 0.35; // Slow, cinematic drift
    let scanLineY = 0;

    // Fixed engineering telemetry markers
    const markers = [
      { xPct: 0.12, yPct: 0.28, label: 'SYS_LAT: 38ms', pulse: 0 },
      { xPct: 0.84, yPct: 0.24, label: 'CORE_ORBIT: OK', pulse: 1.5 },
      { xPct: 0.16, yPct: 0.72, label: 'NODE_01: ACTIVE', pulse: 3.0 },
      { xPct: 0.88, yPct: 0.68, label: '0x7E3F // CLS: 0.00', pulse: 4.5 }
    ];

    let lastTime = performance.now();

    const render = (time) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      gridOffset = (gridOffset + gridSpeed) % 48;
      scanLineY = (scanLineY + 0.8) % (height + 200);

      // 1. Draw Subtle Isometric / Perspective Horizon Grid (Bottom Half)
      const horizonY = height * 0.42;
      const fov = 320;
      const numLines = 26;

      ctx.save();
      ctx.lineWidth = 1;

      // Draw converging perspective lines from horizon to bottom
      const centerX = width / 2;
      for (let i = -numLines; i <= numLines; i++) {
        const spreadBottom = centerX + i * (width / (numLines * 0.75));
        ctx.beginPath();
        ctx.moveTo(centerX + (i * 12), horizonY);
        ctx.lineTo(spreadBottom, height);

        // Highlight center axis lines with slight red tint
        if (Math.abs(i) === 0) {
          ctx.strokeStyle = 'rgba(211, 37, 37, 0.22)';
        } else if (Math.abs(i) % 4 === 0) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.09)';
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        }
        ctx.stroke();
      }

      // Draw moving horizontal depth lines (logarithmic spacing)
      const numZLines = 18;
      for (let j = 0; j < numZLines; j++) {
        const z = ((j * 28 + gridOffset) % (numZLines * 28));
        const progress = z / (numZLines * 28); // 0 at horizon, 1 at bottom
        const y = horizonY + Math.pow(progress, 1.8) * (height - horizonY);

        if (y > horizonY && y < height) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          const alpha = 0.02 + progress * 0.10;
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
          ctx.stroke();
        }
      }

      // 2. Subtle Ceiling Wireframe Geometry (Top Half)
      const ceilingHorizon = height * 0.38;
      for (let i = -14; i <= 14; i++) {
        if (Math.abs(i) % 3 === 0) {
          const spreadTop = centerX + i * (width / 22);
          ctx.beginPath();
          ctx.moveTo(centerX + (i * 8), ceilingHorizon);
          ctx.lineTo(spreadTop, 0);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
          ctx.stroke();
        }
      }

      // 3. Subtle Engineering Crosshairs (+)
      const crossStep = 96;
      for (let cx = crossStep; cx < width; cx += crossStep) {
        for (let cy = 60; cy < height * 0.65; cy += crossStep) {
          if ((cx + cy) % (crossStep * 2) === 0) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
            ctx.beginPath();
            ctx.moveTo(cx - 3, cy);
            ctx.lineTo(cx + 3, cy);
            ctx.moveTo(cx, cy - 3);
            ctx.lineTo(cx, cy + 3);
            ctx.stroke();
          }
        }
      }

      // 4. Subtle Ambient Sweeping Scan Beam
      const actualScanY = scanLineY - 100;
      if (actualScanY > 0 && actualScanY < height) {
        const scanGrad = ctx.createLinearGradient(0, actualScanY - 40, 0, actualScanY + 40);
        scanGrad.addColorStop(0, 'rgba(211, 37, 37, 0)');
        scanGrad.addColorStop(0.5, 'rgba(211, 37, 37, 0.05)');
        scanGrad.addColorStop(1, 'rgba(211, 37, 37, 0)');
        ctx.fillStyle = scanGrad;
        ctx.fillRect(0, actualScanY - 40, width, 80);
      }

      // 5. Monospace Telemetry Corner Labels
      ctx.font = '10px "JetBrains Mono", monospace';
      markers.forEach(m => {
        m.pulse += dt;
        const alpha = 0.25 + 0.15 * Math.sin(m.pulse);
        const px = m.xPct * width;
        const py = m.yPct * height;

        // Draw micro dot
        ctx.fillStyle = `rgba(211, 37, 37, ${alpha * 1.5})`;
        ctx.fillRect(px - 2, py - 2, 4, 4);

        // Draw micro text
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillText(m.label, px + 8, py + 3);
      });

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          opacity: 0.85
        }}
      />
    </div>
  );
}
