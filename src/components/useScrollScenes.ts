"use client";

import { useEffect } from "react";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

type Listener = (progress: number, section: HTMLElement) => void;

/**
 * Motor de scroll. Tot el moviment surt de variables CSS:
 * - Cada `[data-pin]` rep `--p` (0 → 1 mentre la seva capa `.sticky` està fixada).
 * - Un `[data-track]` allarga la seva secció tant com cal per recórrer-lo de costat (`--dist`).
 * - Les `[data-scene]` d'una secció reben `--e` (entrada) i `--x` (sortida), i els seus `[data-card]`, `--c`.
 * Amb moviment reduït, tot rep el valor final i el CSS ho mostra estàtic.
 */
export function useScrollScenes(listeners: Record<string, Listener> = {}) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const measure = () => {
      document.querySelectorAll<HTMLElement>("[data-track]").forEach((track) => {
        const section = track.closest<HTMLElement>("[data-pin]");
        if (!section) return;
        if (reduced.matches) {
          section.style.height = "";
          return;
        }
        const distance = Math.max(0, track.scrollWidth - window.innerWidth);
        track.style.setProperty("--dist", String(distance));
        section.style.height = `${window.innerHeight + distance}px`;
      });
    };

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-pin]").forEach((section) => {
        const rect = section.getBoundingClientRect();
        const travel = Math.max(1, rect.height - vh);
        const p = reduced.matches ? 1 : clamp(-rect.top / travel);
        section.style.setProperty("--p", p.toFixed(4));
        const name = section.dataset.pin;
        if (name && listeners[name]) listeners[name](p, section);

        const scenes = section.querySelectorAll<HTMLElement>("[data-scene]");
        scenes.forEach((scene, index) => {
          const local = p * scenes.length - index;
          const last = index === scenes.length - 1;
          const enter = reduced.matches || index === 0 ? 1 : clamp(local * 5);
          const exit = reduced.matches || last ? 0 : clamp((local - 0.82) * 6);
          scene.style.setProperty("--e", enter.toFixed(3));
          scene.style.setProperty("--x", exit.toFixed(3));
          scene.querySelectorAll<HTMLElement>("[data-card]").forEach((card, j) => {
            const c = reduced.matches ? 1 : clamp((local - 0.12 - j * 0.1) * 5) * (1 - exit);
            card.style.setProperty("--c", c.toFixed(3));
          });
        });
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      schedule();
    };

    measure();
    update();
    // Les fonts canvien l'amplada del carril quan acaben de carregar
    document.fonts?.ready.then(onResize).catch(() => {});
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    reduced.addEventListener("change", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      reduced.removeEventListener("change", onResize);
    };
    // Els listeners són callbacks estables que el component crea una sola vegada
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/** Fa scroll fins al punt d'una secció fixada que mostra la fracció indicada del seu recorregut. */
export function scrollToProgress(section: HTMLElement | null, fraction: number) {
  if (!section) return;
  const top = section.getBoundingClientRect().top + window.scrollY;
  const travel = section.offsetHeight - window.innerHeight;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: reduced ? top : top + travel * fraction, behavior: reduced ? "instant" : "smooth" });
}
