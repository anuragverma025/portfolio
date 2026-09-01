import { useEffect, useRef } from "react";

export const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Node particle definition
    const NODE_COUNT = 55;
    const nodes = [];

    const initNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: (Math.random() - 0.5) * (width || window.innerWidth) * 1.3,
          y: (Math.random() - 0.5) * (height || 800) * 1.3,
          z: (Math.random() - 0.5) * 600,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          vz: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2.2 + 1.2,
          isTeal: Math.random() > 0.35,
        });
      }
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      const rect = parent ? parent.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width || window.innerWidth;
      height = rect.height || 750;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      if (nodes.length === 0) {
        initNodes();
      }
    };

    let mouseX = 0;
    let mouseY = 0;
    let rotX = 0;
    let rotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      const normX = (clientX / width) * 2 - 1;
      const normY = (clientY / height) * 2 - 1;

      targetRotY = normX * 0.35;
      targetRotX = -normY * 0.3;
      mouseX = normX * width * 0.4;
      mouseY = normY * height * 0.4;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const fov = 420;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        rotX += (targetRotX - rotX) * 0.04;
        rotY += (targetRotY - rotY) * 0.04;
      }

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projected = [];

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
          n.z += n.vz;

          const boundX = width * 0.65;
          const boundY = height * 0.65;
          if (n.x < -boundX || n.x > boundX) n.vx *= -1;
          if (n.y < -boundY || n.y > boundY) n.vy *= -1;
          if (n.z < -280 || n.z > 280) n.vz *= -1;
        }

        // 3D rotation matrix
        const x1 = n.x * cosY - n.z * sinY;
        const z1 = n.z * cosY + n.x * sinY;

        const y1 = n.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + n.y * sinX;

        const depth = z2 + fov;
        if (depth <= 10) continue;

        const scale = fov / depth;
        const px = x1 * scale + width / 2;
        const py = y1 * scale + height / 2;

        const radius = Math.max(0.8, n.radius * scale);
        const alpha = Math.min(0.95, Math.max(0.15, (z2 + 300) / 600));

        projected.push({
          px,
          py,
          scale,
          radius,
          alpha,
          isTeal: n.isTeal,
        });
      }

      // Connecting constellation lines
      const maxDist = 135;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.28 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.strokeStyle = p1.isTeal
              ? `rgba(45, 212, 191, ${lineAlpha.toFixed(3)})`
              : `rgba(56, 189, 248, ${lineAlpha.toFixed(3)})`;
            ctx.lineWidth = 0.85;
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw node particles
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const color = p.isTeal ? "45, 212, 191" : "56, 189, 248";

        // Outer ambient glow
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius * 2.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${(p.alpha * 0.25).toFixed(3)})`;
        ctx.fill();

        // Core bright center
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.alpha.toFixed(3)})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
};

export default HeroCanvas;
