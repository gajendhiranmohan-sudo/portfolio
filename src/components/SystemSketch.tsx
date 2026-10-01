"use client";

import { useState } from "react";
import type { SketchNode } from "@/content/profile";

const TIER_LABEL = ["Entry", "Core", "Foundation"];

/** Three-tier component sketch. Components are only those named on the resume. */
export function SystemSketch({ nodes, large = false }: { nodes: SketchNode[]; large?: boolean }) {
  const [focus, setFocus] = useState<string | null>(null);
  const tiers = [0, 1, 2].map((t) => nodes.filter((n) => n.tier === t)).filter((t) => t.length);
  const note = nodes.find((n) => n.id === focus)?.note;

  return (
    <figure className="border border-rule-strong bg-paper-2/60">
      <figcaption className="meta flex items-baseline justify-between gap-4 border-b border-rule-strong px-3 py-2 text-ink-3">
        <span>System sketch</span>
        <span className="hidden sm:inline">Components as named on the resume</span>
      </figcaption>
      <div className={`px-3 ${large ? "py-6 sm:px-6" : "py-5"}`}>
        {tiers.map((row, ti) => (
          <div key={ti}>
            {ti > 0 ? (
              <div aria-hidden="true" className="flex h-6 justify-center">
                <span className="w-px bg-rule-strong" />
              </div>
            ) : null}
            <div className="flex items-stretch gap-3">
              <span className="meta hidden w-20 shrink-0 self-center text-ink-3 sm:block">{TIER_LABEL[row[0].tier]}</span>
              <ul className="flex flex-1 flex-wrap justify-center gap-2">
                {row.map((n) => {
                  const on = focus === n.id;
                  return (
                    <li key={n.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setFocus(n.id)}
                        onMouseLeave={() => setFocus(null)}
                        onFocus={() => setFocus(n.id)}
                        onBlur={() => setFocus(null)}
                        onClick={() => setFocus(n.id)}
                        className={`mono border px-2.5 py-1.5 text-[0.8125rem] transition-colors ${on ? "border-accent bg-accent text-paper" : "border-rule-strong bg-paper text-ink hover:border-accent"}`}
                      >
                        {n.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <span className="hidden w-20 shrink-0 sm:block" aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>
      <p aria-live="polite" className="min-h-[2.75rem] border-t border-rule px-3 py-2.5 text-[0.875rem] leading-snug text-ink-2">
        {note ?? <span className="text-ink-3">Hover or tap a component for its role.</span>}
      </p>
    </figure>
  );
}
