"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { works } from "@/content/profile";
import { CaseStudy } from "./CaseStudy";
import { Section } from "./Section";

const PREFIX = "#work/";

function branch(i: number) {
  return i === works.length - 1 ? "└──" : "├──";
}

/**
 * The site's signature: selected work behaves like a directory tree.
 * Each project is a folder; opening it loads the case study. Paths are deep-linkable
 * (#work/<slug>) and any link elsewhere on the page that points at one opens it here.
 */
export function WorkExplorer() {
  const [active, setActive] = useState<string | null>(works[0].slug);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);
  const desktopSlug = active ?? works[0].slug;
  const current = works.find((w) => w.slug === desktopSlug)!;

  const open = useCallback((slug: string | null, push = true) => {
    setActive(slug);
    if (push && slug) history.replaceState(null, "", `${PREFIX}${slug}`);
  }, []);

  // Deep links + in-page links to #work/<slug>
  useEffect(() => {
    const sync = (scroll: boolean) => {
      const h = window.location.hash;
      if (!h.startsWith(PREFIX)) return;
      const slug = h.slice(PREFIX.length);
      if (!works.some((w) => w.slug === slug)) return;
      setActive(slug);
      if (scroll) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const wide = window.matchMedia("(min-width: 64rem)").matches;
        (wide ? rootRef.current : document.getElementById(`dir-${slug}`))?.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
      }
    };
    sync(true);
    const onHash = () => sync(true);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const onKey = (e: KeyboardEvent) => {
    const i = works.findIndex((w) => w.slug === desktopSlug);
    const next =
      e.key === "ArrowDown" ? i + 1 : e.key === "ArrowUp" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? works.length - 1 : null;
    if (next === null) return;
    e.preventDefault();
    const k = (next + works.length) % works.length;
    open(works[k].slug);
    tabs.current[k]?.focus();
  };

  return (
    <Section
      id="work"
      n="04"
      label="Selected work"
      title="Seven systems, each written up as a short case study."
      aside="Each project is a directory. Use ↑ ↓ to move through them; every path is a shareable link."
    >
      <div ref={rootRef} className="scroll-mt-16">
        {/* Desktop: tree + reader */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <div className="sticky top-20 border border-rule-strong">
              <p className="meta flex justify-between border-b border-rule-strong px-3 py-2 text-ink-3">
                <span className="text-ink">~/work</span>
                <span>{works.length} dirs</span>
              </p>
              <div role="tablist" aria-orientation="vertical" aria-label="Projects" onKeyDown={onKey} className="py-2">
                {works.map((w, i) => {
                  const on = w.slug === desktopSlug;
                  return (
                    <button
                      key={w.slug}
                      ref={(el) => {
                        tabs.current[i] = el;
                      }}
                      role="tab"
                      id={`tab-${w.slug}`}
                      aria-selected={on}
                      aria-controls="work-panel"
                      tabIndex={on ? 0 : -1}
                      onClick={() => open(w.slug)}
                      className={`mono flex w-full items-baseline gap-2 px-3 py-[0.4rem] text-left text-[0.875rem] transition-colors ${on ? "bg-ink text-paper" : "text-ink-2 hover:bg-paper-2 hover:text-ink"}`}
                    >
                      <span aria-hidden="true" className={on ? "text-accent" : "text-ink-3"}>
                        {branch(i)}
                      </span>
                      <span className="flex-1 truncate">{w.slug}/</span>
                    </button>
                  );
                })}
              </div>
              <div className="border-t border-rule px-3 py-3">
                <p className="meta text-ink-3">Selected</p>
                <p className="mt-1 text-[0.9375rem] leading-snug text-ink">{current.line}</p>
              </div>
            </div>
          </div>
          <div id="work-panel" role="tabpanel" aria-labelledby={`tab-${current.slug}`} tabIndex={0} className="min-w-0 lg:col-span-8 focus-visible:outline-offset-8">
            <CaseStudy key={current.slug} w={current} />
          </div>
        </div>

        {/* Mobile / tablet: the same tree as an accordion of directories */}
        <ul className="border-t border-rule-strong lg:hidden">
          {works.map((w, i) => {
            const on = w.slug === active;
            return (
              <li key={w.slug} id={`dir-${w.slug}`} className="scroll-mt-16 border-b border-rule">
                <button
                  type="button"
                  aria-expanded={on}
                  aria-controls={`dir-panel-${w.slug}`}
                  onClick={() => open(on ? null : w.slug)}
                  className="flex w-full items-center gap-3 py-4 text-left"
                >
                  <span aria-hidden="true" className="mono text-[0.875rem] text-ink-3">
                    {branch(i)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`mono block text-[0.9375rem] ${on ? "text-accent" : "text-ink"}`}>{w.slug}/</span>
                    <span className="mt-0.5 block text-[0.875rem] leading-snug text-ink-3">{w.kind}</span>
                  </span>
                  <span aria-hidden="true" className="mono w-6 text-center text-lg text-ink-2">
                    {on ? "−" : "+"}
                  </span>
                </button>
                {on ? (
                  <div id={`dir-panel-${w.slug}`} className="pb-10 pt-2">
                    <CaseStudy w={w} />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
