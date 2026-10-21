import { useEffect, type RefObject } from "react";

const FADE = 0.1;
const STAGGER = 0.035;

const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
const ease = (x: number) => 1 - Math.pow(1 - x, 3);

type BeatFrame = {
  el: HTMLElement;
  from: number;
  to: number;
  parts: HTMLElement[];
  lines: HTMLElement[];
  chips: HTMLElement[];
};

type ChapterState = {
  el: HTMLElement;
  stage: HTMLElement;
  beats: BeatFrame[];
  src: string;
  dur: number;
  video: HTMLVideoElement | null;
  playing: boolean;
  held: boolean;
  wait: boolean;
  clock: number;
};

function setState(el: HTMLElement, o: number, leaving: boolean) {
  el.style.setProperty("--o", o.toFixed(3));
  el.style.setProperty("--o-inv", (1 - o).toFixed(3));
  el.style.setProperty("--dir", leaving ? "1" : "-1");
}

function drive(el: HTMLElement, local: number, i: number, n: number) {
  const tIn = clamp01((local - i * STAGGER) / FADE);
  const tOut = clamp01((1 - local - (n - 1 - i) * STAGGER) / FADE);
  setState(el, ease(Math.min(tIn, tOut)), tOut < 1);
}

export function useChapterFilm(ref: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const FINE = window.matchMedia("(pointer: fine)").matches;

    if (REDUCED) {
      el.classList.add("is-static");
      return;
    }

    const stage = el.querySelector<HTMLElement>(".stage");
    const src = el.dataset.video || "";
    if (!stage || !src) return;

    const beats: BeatFrame[] = Array.from(el.querySelectorAll<HTMLElement>(".beat")).map(
      (b) => ({
        el: b,
        from: parseFloat(b.dataset.from || "0") || 0,
        to: b.dataset.to ? parseFloat(b.dataset.to) : 1,
        parts: Array.from(b.children).filter(
          (c) => !(c as HTMLElement).classList.contains("chips")
        ) as HTMLElement[],
        lines: Array.from(b.querySelectorAll<HTMLElement>(".line-in")),
        chips: Array.from(b.querySelectorAll<HTMLElement>(".chips li")),
      })
    );

    const state: ChapterState = {
      el,
      stage,
      beats,
      src,
      dur: parseFloat(el.dataset.duration || "") || beats.length * 5,
      video: null,
      playing: false,
      held: false,
      wait: true,
      clock: 0,
    };

    let disposed = false;
    let raf = 0;
    let prev = 0;
    let waitTimer = 0;
    let retryBound = false;

    const afterLCP = new Promise<void>((res) => {
      const img = el.querySelector<HTMLImageElement>(".chapter .plate, .plate");
      if (!img || img.complete) {
        res();
        return;
      }
      img.addEventListener("load", () => res(), { once: true });
      img.addEventListener("error", () => res(), { once: true });
      setTimeout(res, 800);
    });

    function start() {
      const v = state.video;
      if (!v || disposed) return;
      const p = v.play();
      if (!p || typeof p.then !== "function") {
        state.playing = true;
        return;
      }
      p.then(() => {
        if (disposed) return;
        state.playing = true;
        if (state.wait) {
          state.wait = false;
        } else if (
          isFinite(v.duration) &&
          v.duration > 0 &&
          Math.abs(state.clock * v.duration - v.currentTime) > 1.5
        ) {
          v.currentTime = state.clock * v.duration;
        }
        if (state.held) v.pause();
      }).catch(() => {
        if (disposed) return;
        state.playing = false;
        state.wait = false;
        if (retryBound) return;
        retryBound = true;
        const retry = () => start();
        window.addEventListener("pointerdown", retry, { once: true, passive: true });
        window.addEventListener("touchstart", retry, { once: true, passive: true });
      });
    }

    function attach() {
      if (state.video || disposed) return;
      afterLCP.then(() => {
        if (state.video || disposed) return;
        const v = document.createElement("video");
        v.muted = true;
        v.playsInline = true;
        v.loop = true;
        v.preload = "auto";
        v.disablePictureInPicture = true;
        v.tabIndex = -1;
        v.setAttribute("aria-hidden", "true");
        const plate = stage!.querySelector<HTMLImageElement>(".plate");
        const poster = plate?.getAttribute("src") || el.dataset.poster || "";
        if (poster) v.poster = poster;
        v.src = state.src;
        v.addEventListener(
          "loadedmetadata",
          () => {
            if (isFinite(v.duration) && v.duration > 0) state.dur = v.duration;
          },
          { once: true }
        );
        v.addEventListener("loadeddata", () => stage!.classList.add("is-live"), {
          once: true,
        });
        const veil = stage!.querySelector(".veil");
        if (veil) stage!.insertBefore(v, veil);
        else stage!.appendChild(v);
        state.video = v;
        waitTimer = window.setTimeout(() => {
          state.wait = false;
        }, 5000);
        start();
      });
    }

    function detach() {
      if (!state.video) return;
      stage!.classList.remove("is-live");
      state.playing = false;
      state.video.pause();
      state.video.removeAttribute("src");
      state.video.load();
      state.video.remove();
      state.video = null;
    }

    function hold(on: boolean) {
      if (state.held === on) return;
      state.held = on;
      const v = state.video;
      if (!v || !state.playing) return;
      if (on) v.pause();
      else v.play().catch(() => {});
    }

    function applyBeats(p: number) {
      beats.forEach((b) => {
        const span = b.to - b.from;
        const local = span > 0 ? (p - b.from) / span : 0;
        const inside = local >= 0 && local < 1;
        b.el.style.setProperty("--local", clamp01(local).toFixed(3));
        if (!inside) {
          [...b.parts, ...b.lines, ...b.chips].forEach((n) => setState(n, 0, local > 1));
        } else {
          b.parts.forEach((n, i) => drive(n, local, i, b.parts.length));
          b.lines.forEach((n, i) => drive(n, local, i * 0.8, b.lines.length * 0.8));
          b.chips.forEach((n, i) => drive(n, local, 2 + i, 2 + b.chips.length));
        }
        b.el.classList.toggle("is-on", inside);
        b.el.classList.toggle("is-leaving", inside && 1 - local < FADE + STAGGER * 4);
      });
    }

    function playhead(dt: number) {
      const v = state.video;
      if (state.playing && v && isFinite(v.duration) && v.duration > 0) {
        state.clock = clamp01(v.currentTime / v.duration);
        return state.clock;
      }
      if (!state.held && !state.wait) {
        state.clock = (state.clock + dt / Math.max(1, state.dur)) % 1;
      }
      return state.clock;
    }

    function setExit() {
      const top = el!.getBoundingClientRect().top;
      el!.style.setProperty(
        "--exit",
        clamp01(-top / Math.max(1, window.innerHeight)).toFixed(3)
      );
    }

    function tick(now: number) {
      const dt = prev ? Math.min(0.1, (now - prev) / 1000) : 0;
      prev = now;
      setExit();
      applyBeats(playhead(dt));
      raf = requestAnimationFrame(tick);
    }

    const onPointerOver = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest(".beat")) hold(true);
    };
    const onPointerOut = (e: Event) => {
      const t = e.relatedTarget as HTMLElement | null;
      if (!t || !t.closest || !t.closest(".beat")) hold(false);
    };
    if (FINE) {
      stage.addEventListener("pointerover", onPointerOver);
      stage.addEventListener("pointerout", onPointerOut);
    }

    const killCue = () => document.documentElement.style.setProperty("--cue", "0");
    window.addEventListener("scroll", killCue, { once: true, passive: true });

    const near = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && attach()),
      { rootMargin: "200px" }
    );
    const far = new IntersectionObserver(
      (entries) => entries.forEach((en) => !en.isIntersecting && detach()),
      { rootMargin: "260%" }
    );
    const run = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            if (!raf) {
              prev = 0;
              raf = requestAnimationFrame(tick);
            }
          } else {
            setExit();
            if (raf) {
              cancelAnimationFrame(raf);
              raf = 0;
            }
          }
        }),
      { threshold: 0 }
    );
    near.observe(el);
    far.observe(el);
    run.observe(el);

    let mraf = 0;
    let tx = 0;
    let ty = 0;
    let mx = 0;
    let my = 0;
    const MLERP = 0.08;
    const settle = () => {
      mx += (tx - mx) * MLERP;
      my += (ty - my) * MLERP;
      document.documentElement.style.setProperty("--mx", mx.toFixed(3));
      document.documentElement.style.setProperty("--my", my.toFixed(3));
      mraf =
        Math.abs(tx - mx) + Math.abs(ty - my) > 0.002 ? requestAnimationFrame(settle) : 0;
    };
    const aim = (x: number, y: number) => {
      tx = x;
      ty = y;
      if (!mraf) mraf = requestAnimationFrame(settle);
    };
    const onMove = (e: PointerEvent) =>
      aim((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1);
    const onLeave = () => aim(0, 0);
    if (FINE) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("mouseleave", onLeave);
    }

    return () => {
      disposed = true;
      window.clearTimeout(waitTimer);
      if (raf) cancelAnimationFrame(raf);
      if (mraf) cancelAnimationFrame(mraf);
      near.disconnect();
      far.disconnect();
      run.disconnect();
      stage.removeEventListener("pointerover", onPointerOver);
      stage.removeEventListener("pointerout", onPointerOut);
      if (FINE) {
        window.removeEventListener("pointermove", onMove);
        document.removeEventListener("mouseleave", onLeave);
      }
      detach();
      el.classList.remove("is-static");
    };
  }, [ref]);
}