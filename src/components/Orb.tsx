"use client";

import { useEffect, useRef } from "react";

/**
 * Esfera de partícules dibuixada al navegador: cap vídeo ni recurs extern.
 * Els punts segueixen una espiral de Fibonacci i giren amb el temps i amb el scroll.
 * Té el to ambre de TasklessAI; el `density` permet una versió més lleugera al tancament.
 */
export default function Orb({ density = 2200 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const ctx = context;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let width = 0;
    let height = 0;
    let visible = true;

    const points = Array.from({ length: density }, (_, i) => {
      const y = 1 - (i / (density - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;
      return { x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius, seed: i };
    });

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const angle = reducedMotion.matches ? 0.35 : time * 0.00005 + window.scrollY * 0.00011;
      const scale = Math.min(width, height) * 0.36;
      const cx = width / 2;
      const cy = height / 2;

      const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, scale * 1.6);
      halo.addColorStop(0, "rgba(232,168,79,.15)");
      halo.addColorStop(0.6, "rgba(232,168,79,.04)");
      halo.addColorStop(1, "rgba(232,168,79,0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height);

      const projected = points
        .map((p) => {
          const x = p.x * Math.cos(angle) - p.z * Math.sin(angle);
          const z = p.x * Math.sin(angle) + p.z * Math.cos(angle);
          // Una ondulació suau perquè no sigui una esfera perfecta
          const bend = 1 + 0.1 * Math.sin(p.y * 8 + angle * 2.4);
          return { x: cx + (x * 0.97 + p.y * 0.16) * scale * bend, y: cy + p.y * scale * 1.06, z, seed: p.seed };
        })
        .sort((a, b) => a.z - b.z);

      for (const p of projected) {
        const front = (p.z + 1) / 2;
        // De bronze fosc (darrere) a ambre clar (davant); alguns punts menta com a accent
        const mint = p.seed % 97 === 0;
        ctx.fillStyle = mint
          ? `rgba(94,234,212,${0.2 + front * 0.7})`
          : `rgba(${200 + front * 45},${120 + front * 74},${60 + front * 80},${0.12 + front * 0.8})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.45 + front * 1.05, 0, Math.PI * 2);
        ctx.fill();
        if (p.seed % 53 === 0 && front > 0.7) {
          ctx.strokeStyle = `rgba(245,194,140,${front * 0.18})`;
          ctx.beginPath();
          ctx.moveTo(p.x - 8, p.y);
          ctx.lineTo(p.x + 8, p.y);
          ctx.moveTo(p.x, p.y - 8);
          ctx.lineTo(p.x, p.y + 8);
          ctx.stroke();
        }
      }
    };

    const tick = (time: number) => {
      if (visible && !document.hidden) draw(time);
      if (!reducedMotion.matches) frame = requestAnimationFrame(tick);
    };
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    // Fora de pantalla no es dibuixa: estalvia bateria al mòbil
    const visibility = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
    });
    visibility.observe(canvas);
    const motionChange = () => {
      cancelAnimationFrame(frame);
      tick(performance.now());
    };
    reducedMotion.addEventListener("change", motionChange);
    resize();
    tick(performance.now());
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibility.disconnect();
      reducedMotion.removeEventListener("change", motionChange);
    };
  }, [density]);

  return <canvas ref={ref} className="orb-canvas" aria-hidden="true" />;
}
