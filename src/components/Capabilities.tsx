"use client";

import { useState } from "react";
import { capabilities, workBySlug, type Capability } from "@/content/profile";
import { Section, WorkLink } from "./Section";

function Detail({ c }: { c: Capability }) {
  return (
    <div className="enter">
      <p className="text-[1.0625rem] leading-relaxed text-ink">{c.summary}</p>
      <p className="meta mt-6 text-ink-3">Tools</p>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{c.tech.join(" · ")}</p>
      <p className="meta mt-6 text-ink-3">Evidence in ~/work</p>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
        {c.works.map((slug) => (
          <li key={slug}>
            <WorkLink slug={slug}>{workBySlug[slug].title}</WorkLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Capabilities() {
  const [active, setActive] = useState(capabilities[0].id);
  const current = capabilities.find((c) => c.id === active) ?? capabilities[0];

  return (
    <Section
      id="build"
      n="02"
      label="What I build"
      title="Seven kinds of system, each one with shipped work behind it."
      aside="Select a row to see the tools and the case studies that back it up."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-10">
        <ul className="border-t border-rule lg:col-span-7">
          {capabilities.map((c, i) => {
            const on = c.id === active;
            return (
              <li key={c.id} className="border-b border-rule">
                <button
                  type="button"
                  aria-expanded={on}
                  aria-controls={`cap-${c.id}`}
                  onClick={() => setActive(on && window.matchMedia("(max-width: 63.99rem)").matches ? "" : c.id)}
                  onMouseEnter={() => window.matchMedia("(hover: hover) and (min-width: 64rem)").matches && setActive(c.id)}
                  className="group flex w-full items-baseline gap-4 py-4 text-left md:py-5"
                >
                  <span className={`meta w-8 shrink-0 ${on ? "text-accent" : "text-ink-3"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-tight tracking-[-0.02em] transition-colors ${on ? "text-ink" : "text-ink-2 group-hover:text-ink"}`}
                  >
                    {c.name}
                  </span>
                  <span className="meta hidden shrink-0 text-ink-3 sm:inline">
                    {c.works.length} {c.works.length === 1 ? "system" : "systems"}
                  </span>
                  <span aria-hidden="true" className={`mono text-ink-3 transition-transform lg:hidden ${on ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {on ? (
                  <div id={`cap-${c.id}`} className="pb-6 pl-12 lg:hidden">
                    <Detail c={c} />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>

        <aside aria-live="polite" className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-24 border-t border-rule-strong pt-5">
            <p className="meta mb-4 text-accent">{current.name}</p>
            <Detail key={current.id} c={current} />
          </div>
        </aside>
      </div>
    </Section>
  );
}
