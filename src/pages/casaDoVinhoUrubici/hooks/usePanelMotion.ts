import { useEffect } from "react";

export function usePanelMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          reveal.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px" }
    );

    const bindReveal = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)").forEach((el) => {
        const parent = el.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children).filter((c) =>
            c.hasAttribute("data-reveal")
          );
          const index = siblings.indexOf(el);
          el.style.setProperty("--i", String(Math.max(0, Math.min(index, 8))));
        }
        reveal.observe(el);
      });
    };
    bindReveal();

    const onRefresh = () => bindReveal();
    window.addEventListener("casa:refresh", onRefresh);

    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;
    const paint = () => {
      raf = 0;
      const h = window.innerHeight;
      for (const el of layers) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -h || r.top > 2 * h) continue;
        const centre = (r.top + r.height / 2 - h / 2) / h;
        let speed = parseFloat(el.dataset.parallax || "0.32");
        if (el.classList.contains("panel-bg") && window.innerWidth < 780) {
          speed = Math.min(speed, 0.22);
        }
        el.style.setProperty("--py", (centre * -speed * h).toFixed(1) + "px");
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };

    const manifestos = Array.from(document.querySelectorAll<HTMLElement>("[data-words]")).map(
      (el) => ({
        section: (el.closest("section") as HTMLElement) || el,
        words: Array.from(el.querySelectorAll<HTMLElement>(".w"))
      })
    );

    const light = () => {
      const h = window.innerHeight;
      for (const m of manifestos) {
        const r = m.section.getBoundingClientRect();
        if (r.bottom < 0 || r.top > h) continue;
        const p = Math.min(1, Math.max(0, (h * 0.8 - r.top) / (r.height + h * 0.45)));
        const n = m.words.length;
        m.words.forEach((w, i) => {
          w.style.setProperty("--lit", p * (n + 1) > i + 1 ? "1" : "0");
        });
      }
    };
    const onLight = () => requestAnimationFrame(light);

    const softenEl = (el: HTMLElement) => {
      const media = el as HTMLImageElement & HTMLVideoElement;
      const nw = media.naturalWidth || media.videoWidth;
      const nh = media.naturalHeight || media.videoHeight;
      if (!nw || !nh) return;
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const factor = Math.max(r.width / nw, r.height / nh);
      const px = factor <= 1.15 ? 0 : Math.min(1.6, Math.max(0.4, (factor - 1) * 1.2));
      el.style.setProperty("--soften", px.toFixed(2) + "px");
    };
    const SOFT = ".stage video, .plate, .panel-bg";
    const softenAll = () =>
      document.querySelectorAll<HTMLElement>(SOFT).forEach((el) => softenEl(el));
    const onLoad = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t && t.matches && t.matches(SOFT)) softenEl(t);
    };
    document.addEventListener("load", onLoad, true);
    document.addEventListener("loadedmetadata", onLoad, true);
    window.addEventListener("resize", softenAll);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onLight, { passive: true });
    window.addEventListener("resize", paint);

    paint();
    light();
    softenAll();
    const softenTimer = window.setTimeout(softenAll, 1200);

    return () => {
      window.clearTimeout(softenTimer);
      reveal.disconnect();
      window.removeEventListener("casa:refresh", onRefresh);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onLight);
      window.removeEventListener("resize", paint);
      window.removeEventListener("resize", softenAll);
      document.removeEventListener("load", onLoad, true);
      document.removeEventListener("loadedmetadata", onLoad, true);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}