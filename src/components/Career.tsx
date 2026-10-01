"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { stages, type Stage } from "@/content/profile";
import { Section, WorkLink } from "./Section";

const FIELDS: { key: keyof Pick<Stage, "role" | "context" | "built" | "learned" | "impact">; label: string }[] = [
  { key: "role", label: "Role" },
  { key: "context", label: "Context" },
  { key: "built", label: "What I built" },
  { key: "learned", label: "What I learned" },
  { key: "impact", label: "Impact" },
];

function StageBody({ s }: { s: Stage }) {
  return (
    <>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-6">
        {FIELDS.map((f) => (
          <div key={f.key} className={f.key === "built" ? "lg:col-span-2" : ""}>
            <dt className="meta text-ink-3">{f.label}</dt>
            <dd className={`mt-1.5 leading-relaxed ${f.key === "impact" ? "font-medium text-ink" : "text-ink-2"}`}>{s[f.key]}</dd>
          </div>
        ))}
      </dl>
      {s.works.length ? (
        <p className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="meta text-ink-3">Open</span>
          {s.works.map((w) => (
            <WorkLink key={w} slug={w}>
              ~/work/{w}
            </WorkLink>
          ))}
        </p>
      ) : null}
    </>
  );
}

export function Career() {
  const [i, setI] = useState(stages.length - 1);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = stages[i];

  const onKey = (e: KeyboardEvent) => {
    const next = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? stages.length - 1 : null;
    if (next === null) return;
    e.preventDefault();
    const k = (next + stages.length) % stages.length;
    setI(k);
    tabs.current[k]?.focus();
  };

  return (
    <Section
      id="career"
      n="03"
      label="Career as a system"
      title="One company, deep ownership: from screens to services to agents."
      aside="Stages 02–06 overlap. The resume records them as concurrent ownership at Predigle, so only the start and the present have dates."
    >
      {/* Desktop: interactive evolution ruler */}
      <div className="hidden md:block">
        <div className="relative grid grid-cols-6" aria-hidden="true">
          <p className="meta col-span-1 border-l border-rule-strong pl-2 text-ink-3">2018</p>
          <p className="meta col-span-5 border-l border-rule-strong pl-2 text-ink-3">
            May 2022 → now · Predigle, Chennai
          </p>
        </div>
        <div className="mt-2 grid grid-cols-6 border-y border-rule-strong" role="tablist" aria-label="Career stages" onKeyDown={onKey}>
          {stages.map((st, k) => {
            const on = k === i;
            return (
              <button
                key={st.n}
                ref={(el) => {
                  tabs.current[k] = el;
                }}
                role="tab"
                id={`stage-tab-${st.n}`}
                aria-selected={on}
                aria-controls="stage-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setI(k)}
                className={`relative flex min-h-28 flex-col justify-between border-l border-rule px-3 py-3 text-left transition-colors first:border-l-0 ${on ? "bg-ink text-paper" : "hover:bg-paper-2"}`}
              >
                <span className={`meta ${on ? "text-accent" : "text-ink-3"}`}>
                  {st.n}
                  {st.when ? ` · ${st.when}` : ""}
                </span>
                <span className="mt-4 text-[1.0625rem] font-medium leading-tight tracking-[-0.01em]">{st.title}</span>
              </button>
            );
          })}
        </div>
        <div id="stage-panel" role="tabpanel" aria-labelledby={`stage-tab-${s.n}`} className="pt-8">
          <div key={s.n} className="enter">
            <StageBody s={s} />
          </div>
          <p className="meta mt-8 text-ink-3">← → to step through stages</p>
        </div>
      </div>

      {/* Mobile: the same evolution as a readable vertical log, no interaction required */}
      <ol className="border-l border-rule-strong md:hidden">
        {stages.map((st) => (
          <li key={st.n} className="relative pb-10 pl-5 last:pb-0">
            <span aria-hidden="true" className="absolute -left-[5px] top-1.5 size-[9px] bg-accent" />
            <p className="meta text-ink-3">
              <span className="text-accent">{st.n}</span>
              {st.when ? ` · ${st.when}` : " · Predigle"}
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em]">{st.title}</h3>
            <div className="mt-4">
              <StageBody s={st} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
