"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; vx: number; vy: number; r: number };

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0;
    let pts: Point[] = [];
    let animId: number;
    const mouse = { x: null as number | null, y: null as number | null };

    const makePoint = (): Point => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      r: Math.random() * 1 + 0.3,
    });

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i],
            b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200,145,42,${(1 - d / 120) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const p = pts[i];
          const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (d < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200,145,42,${(1 - d / 150) * 0.18})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(242,237,227,0.14)";
        ctx.fill();
      });

      animId = requestAnimationFrame(tick);
    };

    const onResize = () => {
      resize();
      pts = pts.map(makePoint);
    };

    const onMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      if (
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom
      ) {
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);

    resize();
    pts = Array.from({ length: 60 }, makePoint);
    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
      style={{ zIndex: 0 }}
    />
  );
}
