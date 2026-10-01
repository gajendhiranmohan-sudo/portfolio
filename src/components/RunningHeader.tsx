"use client";

import { useEffect, useRef, useState } from "react";
import { person, sections } from "@/content/profile";

/** Running header, like a printed manual: name left, current section centre, index right. */
export function RunningHeader() {
  const [current, setCurrent] = useState(sections[0]);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      barRef.current?.style.setProperty("--p", String(max > 0 ? Math.min(1, window.scrollY / max) : 0));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) {
          const s = sections.find((x) => x.id === hit.target.id);
          if (s) setCurrent(s);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur-[2px]">
      <div className="shell flex h-12 items-center justify-between gap-4">
        <a href="#intro" className="group flex shrink-0 items-center gap-2 text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink">
          <span aria-hidden="true" className="inline-block size-2 bg-accent transition-transform duration-300 group-hover:rotate-45" />
          {person.name}
        </a>
        <p className="meta hidden min-w-0 truncate text-ink-3 sm:block" aria-live="polite">
          <span className="text-accent">§{current.n}</span> {current.label}
        </p>
        <nav aria-label="Primary" className="flex items-center gap-5">
          <ul className="meta hidden items-center gap-5 text-ink-2 md:flex">
            {[
              ["work", "Work"],
              ["career", "Career"],
              ["stack", "Stack"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-accent-ink">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            ref={buttonRef}
            type="button"
            className="meta border border-rule-strong px-2.5 py-1 text-ink transition-colors hover:bg-ink hover:text-paper"
            aria-expanded={open}
            aria-controls="site-index"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Index"}
          </button>
        </nav>
      </div>

      <span ref={barRef} aria-hidden="true" className="progress absolute inset-x-0 -bottom-px h-px bg-accent" />

      {open ? (
        <div id="site-index" className="enter border-t border-rule bg-paper">
          <ol className="shell grid grid-cols-1 py-4 sm:grid-cols-3 sm:gap-x-8">
            {sections.map((s) => (
              <li key={s.id} className="border-b border-rule last:border-b-0 sm:[&:nth-last-child(-n+3)]:border-b-0">
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-3 text-lg transition-colors hover:text-accent-ink"
                >
                  <span className="meta text-accent">§{s.n}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </header>
  );
}
