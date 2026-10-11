import React, { useEffect, useRef } from 'react';
import { HALLOWEEN_CONFIG } from '../config/halloweenConfig.js';

/**
 * Abstract Wireframe 3D Jack-o'-Lantern (Hero Background)
 * - Subtle slow-rotating 3D parametric wireframe mesh
 * - Default almost invisible (opacity: 0.05)
 * - Emits faint neon purple and dark ambient orange glow on mouse proximity (parallax tracking)
 * - Hardware accelerated, lightweight Canvas (< 150 vertices)
 */
export default function WireframePumpkin() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!HALLOWEEN_CONFIG.enabled || !HALLOWEEN_CONFIG.animations?.wireframePumpkin) {
      return;
    }
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates relative to hero center
    let mouse = { x: width * 0.7, y: height * 0.5, targetX: width * 0.7, targetY: height * 0.5, active: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Construct 3D Parametric Wireframe Mesh for Pumpkin
    // Vertices in local coordinate space (r ~ 140)
    const ribs = 12; // longitudinal lobes
    const rings = 7; // latitudinal slices
    const rBase = Math.min(width, height) * 0.28;

    const vertices = [];
    const lines = [];

    // 1. Ribs & Latitude rings
    for (let i = 0; i < ribs; i++) {
      const theta = (i / ribs) * Math.PI * 2;
      // Slight lobe indents: radius modulates with rib count
      const lobeMod = 1 + 0.12 * Math.cos(ribs * theta);

      for (let j = 0; j <= rings; j++) {
        const phi = (j / rings) * Math.PI - Math.PI / 2; // -PI/2 to PI/2
        const r = rBase * lobeMod * Math.cos(phi);
        const y = -Math.sin(phi) * rBase * 0.78; // Oblate spheroid (flattened top & bottom)
        const x = r * Math.cos(theta);
        const z = r * Math.sin(theta);

        const vIdx = vertices.length;
        vertices.push({ x, y, z });

        // Connect along meridian rib
        if (j > 0) {
          lines.push([vIdx - 1, vIdx, 'rib']);
        }
        // Connect along horizontal latitude ring
        if (i > 0) {
          lines.push([vIdx - (rings + 1), vIdx, 'ring']);
        }
      }
    }

    // Connect last rib to first rib for horizontal rings
    for (let j = 0; j <= rings; j++) {
      const firstIdx = j;
      const lastIdx = (ribs - 1) * (rings + 1) + j;
      lines.push([lastIdx, firstIdx, 'ring']);
    }

    // 2. Stem vertices (top curved stalk)
    const stemBase = vertices.length;
    const stemSegments = 4;
    for (let s = 0; s <= stemSegments; s++) {
      const t = s / stemSegments;
      const stemY = -rBase * 0.78 - t * (rBase * 0.26);
      const stemX = Math.sin(t * 0.8) * (rBase * 0.1);
      const stemZ = Math.cos(t * 0.8) * (rBase * 0.05);
      vertices.push({ x: stemX, y: stemY, z: stemZ, isStem: true });
      if (s > 0) {
        lines.push([stemBase + s - 1, stemBase + s, 'stem']);
      }
    }

    // 3. Stylized Cyber Face Facets (Triangular eyes & carved mouth)
    // Front face (z > 0, around theta = 0)
    const faceBase = vertices.length;
    // Left eye (triangle)
    vertices.push({ x: -rBase * 0.32, y: -rBase * 0.16, z: rBase * 0.88, isFace: true });
    vertices.push({ x: -rBase * 0.16, y: -rBase * 0.28, z: rBase * 0.86, isFace: true });
    vertices.push({ x: -rBase * 0.12, y: -rBase * 0.12, z: rBase * 0.88, isFace: true });
    lines.push([faceBase, faceBase + 1, 'eye']);
    lines.push([faceBase + 1, faceBase + 2, 'eye']);
    lines.push([faceBase + 2, faceBase, 'eye']);

    // Right eye (triangle)
    vertices.push({ x: rBase * 0.12, y: -rBase * 0.12, z: rBase * 0.88, isFace: true });
    vertices.push({ x: rBase * 0.16, y: -rBase * 0.28, z: rBase * 0.86, isFace: true });
    vertices.push({ x: rBase * 0.32, y: -rBase * 0.16, z: rBase * 0.88, isFace: true });
    lines.push([faceBase + 3, faceBase + 4, 'eye']);
    lines.push([faceBase + 4, faceBase + 5, 'eye']);
    lines.push([faceBase + 5, faceBase + 3, 'eye']);

    // Nose (inverted triangle)
    vertices.push({ x: 0, y: -rBase * 0.04, z: rBase * 0.94, isFace: true });
    vertices.push({ x: -rBase * 0.08, y: rBase * 0.06, z: rBase * 0.93, isFace: true });
    vertices.push({ x: rBase * 0.08, y: rBase * 0.06, z: rBase * 0.93, isFace: true });
    lines.push([faceBase + 6, faceBase + 7, 'eye']);
    lines.push([faceBase + 7, faceBase + 8, 'eye']);
    lines.push([faceBase + 8, faceBase + 6, 'eye']);

    // Zigzag Mouth
    const mBase = faceBase + 9;
    const mouthPts = [
      { x: -rBase * 0.42, y: rBase * 0.22, z: rBase * 0.82 },
      { x: -rBase * 0.28, y: rBase * 0.34, z: rBase * 0.87 },
      { x: -rBase * 0.14, y: rBase * 0.24, z: rBase * 0.91 },
      { x: 0, y: rBase * 0.36, z: rBase * 0.93 },
      { x: rBase * 0.14, y: rBase * 0.24, z: rBase * 0.91 },
      { x: rBase * 0.28, y: rBase * 0.34, z: rBase * 0.87 },
      { x: rBase * 0.42, y: rBase * 0.22, z: rBase * 0.82 }
    ];
    mouthPts.forEach((pt) => vertices.push({ ...pt, isFace: true }));
    for (let m = 0; m < mouthPts.length - 1; m++) {
      lines.push([mBase + m, mBase + m + 1, 'mouth']);
    }

    let rotY = 0.4;
    let rotX = 0.15;
    let smoothProximity = 0;
    let isVisible = true;

    // Pause rendering when hero is not in viewport
    const io = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    io.observe(canvas);

    const fov = 650;
    const camZ = 750;

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Position pumpkin on right side of hero (behind the code frame/visual)
      const centerX = width > 900 ? width * 0.72 : width * 0.5;
      const centerY = height * 0.48;

      // Distance to mouse for proximity glow & parallax
      const dist = Math.hypot(mouse.x - centerX, mouse.y - centerY);
      const targetProximity = mouse.active && dist < 450 ? (450 - dist) / 450 : 0;
      smoothProximity += (targetProximity - smoothProximity) * 0.06;

      // Rotation drift + mouse parallax tilt
      rotY += 0.0035 + (mouse.x - centerX) * 0.00003;
      const targetRotX = 0.15 + (mouse.y - centerY) * 0.00025;
      rotX += (targetRotX - rotX) * 0.04;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Project vertices to 2D
      const projected = [];
      for (let i = 0; i < vertices.length; i++) {
        const v = vertices[i];

        // Rotate Y
        let x1 = v.x * cosY + v.z * sinY;
        let y1 = v.y;
        let z1 = -v.x * sinY + v.z * cosY;

        // Rotate X
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;
        let x2 = x1;

        // Perspective divide
        const depth = z2 + camZ;
        const scale = fov / Math.max(10, depth);
        const pX = centerX + x2 * scale;
        const pY = centerY + y2 * scale;

        projected.push({ x: pX, y: pY, z: z2, isFace: v.isFace, isStem: v.isStem });
      }

      // Base opacity: 0.05 (almost invisible). Near cursor: up to 0.16
      const baseAlpha = 0.045 + smoothProximity * 0.12;

      // Ambient radial glow behind pumpkin when cursor is near
      if (smoothProximity > 0.02) {
        const glowRad = rBase * (1.2 + smoothProximity * 0.5);
        const radGlow = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, glowRad);
        radGlow.addColorStop(0, `rgba(139, 92, 246, ${0.12 * smoothProximity})`);
        radGlow.addColorStop(0.5, `rgba(255, 107, 43, ${0.08 * smoothProximity})`);
        radGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = radGlow;
        ctx.beginPath();
        ctx.arc(centerX, centerY, glowRad, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render wireframe lines
      for (let l = 0; l < lines.length; l++) {
        const [i1, i2, type] = lines[l];
        const p1 = projected[i1];
        const p2 = projected[i2];
        const avgZ = (p1.z + p2.z) * 0.5;

        // Depth cueing: front lines are brighter than back lines
        const depthFactor = Math.max(0.2, (avgZ + rBase) / (rBase * 2));
        let alpha = baseAlpha * depthFactor;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        if (type === 'eye' || type === 'mouth') {
          // Face elements: glow neon orange/purple when mouse approaches
          const faceAlpha = Math.min(0.55, baseAlpha * 2.2 + smoothProximity * 0.35);
          ctx.strokeStyle = `rgba(255, 107, 43, ${faceAlpha})`;
          ctx.lineWidth = 1.4;
          if (smoothProximity > 0.1) {
            ctx.shadowBlur = 6 * smoothProximity;
            ctx.shadowColor = 'rgba(255, 107, 43, 0.7)';
          }
          ctx.stroke();
          ctx.shadowBlur = 0;
        } else if (type === 'stem') {
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha * 1.4})`;
          ctx.lineWidth = 1.0;
          ctx.stroke();
        } else if (type === 'rib') {
          // Longitudinal ribs: dark twilight purple with slight orange tint near mouse
          if (smoothProximity > 0.15 && Math.random() < 0.15) {
            ctx.strokeStyle = `rgba(255, 107, 43, ${alpha * 1.5})`;
          } else {
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
          }
          ctx.lineWidth = 0.85;
          ctx.stroke();
        } else {
          // Latitude rings
          ctx.strokeStyle = `rgba(211, 37, 37, ${alpha * 0.75})`;
          ctx.lineWidth = 0.65;
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-wireframe-pumpkin"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    />
  );
}
