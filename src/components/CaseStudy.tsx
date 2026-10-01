import { useId } from "react";
import type { Work } from "@/content/profile";
import { SystemSketch } from "./SystemSketch";

function Metrics({ w, compact = false }: { w: Work; compact?: boolean }) {
  if (!w.metrics.length) return null;
  return (
    <ul className={`grid grid-cols-1 border-y border-rule-strong ${w.metrics.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
      {w.metrics.map((m, i) => (
        <li
          key={m.label}
          className={`flex items-baseline gap-4 py-3 sm:block sm:py-4 sm:pr-3 ${i > 0 ? "border-t border-rule sm:border-l sm:border-t-0 sm:pl-3" : ""}`}
        >
          <p
            className={`min-w-[5.5ch] font-semibold leading-none tracking-[-0.035em] ${i === 0 ? "text-accent" : "text-ink"} ${
              compact
                ? "text-[clamp(1.5rem,3vw,2rem)]"
                : w.metrics.length === 3
                  ? "text-[2rem] sm:text-[clamp(1.75rem,4.2vw,3rem)] lg:text-[clamp(2rem,3.3vw,3rem)]"
                  : "text-[2.25rem] sm:text-[clamp(2.25rem,5vw,3.75rem)] lg:text-[clamp(2.25rem,4vw,3.75rem)]"
            }`}
          >
            {m.value}
          </p>
          <p className="meta text-ink-3 sm:mt-2">{m.label}</p>
        </li>
      ))}
    </ul>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-rule pt-4">
      <h4 className="meta text-ink-3">{label}</h4>
      <div className="mt-2 leading-relaxed text-ink-2">{children}</div>
    </div>
  );
}

/** An editorial case-study spread. `layout` changes the rhythm: lead with numbers, the system, or the problem. */
export function CaseStudy({ w }: { w: Work }) {
  const headingId = useId();
  return (
    <article className="enter" aria-labelledby={headingId}>
      <header>
        <p className="meta flex flex-wrap gap-x-3 text-ink-3">
          <span className="text-accent">~/work/{w.slug}</span>
          <span>{w.kind}</span>
        </p>
        <h3 id={headingId} className="display mt-3 text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.95]!">
          {w.title}
        </h3>
        <p className="mt-4 max-w-[46ch] text-[clamp(1.125rem,1.6vw,1.3125rem)] leading-snug text-ink">{w.line}</p>
      </header>

      {w.layout === "metrics" ? (
        <div className="fade-in mt-8" style={{ animationDelay: "90ms" }}>
          <Metrics w={w} />
        </div>
      ) : null}
      {w.layout === "system" ? (
        <div className="fade-in mt-8" style={{ animationDelay: "90ms" }}>
          <SystemSketch nodes={w.sketch} large />
        </div>
      ) : null}
      {w.layout === "narrative" ? (
        <blockquote style={{ animationDelay: "90ms" }} className="fade-in mt-8 border-l-2 border-accent pl-4 text-[clamp(1.125rem,1.8vw,1.5rem)] font-medium leading-snug tracking-[-0.015em]">
          {w.problem}
        </blockquote>
      ) : null}

      <div className="fade-in mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-12" style={{ animationDelay: "180ms" }}>
        <dl className="space-y-5 text-[0.9375rem] sm:col-span-4">
          <div>
            <dt className="meta text-ink-3">My role</dt>
            <dd className="mt-1 font-medium">{w.role}</dd>
          </div>
          <div>
            <dt className="meta text-ink-3">Context</dt>
            <dd className="mt-1 leading-relaxed text-ink-2">{w.context}</dd>
          </div>
          <div>
            <dt className="meta text-ink-3">Technologies</dt>
            <dd className="mono mt-1 text-[0.8125rem] leading-relaxed text-ink">{w.stack.join(" / ")}</dd>
          </div>
        </dl>

        <div className="space-y-6 sm:col-span-8">
          {w.layout !== "narrative" ? (
            <Block label="Problem">
              <p>{w.problem}</p>
            </Block>
          ) : null}
          <Block label="What I built">
            <ol className="space-y-2">
              {w.built.map((b, i) => (
                <li key={b} className="flex gap-3">
                  <span className="mono pt-[0.2em] text-[0.75rem] text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                  <span>{b}</span>
                </li>
              ))}
            </ol>
          </Block>
          <Block label="Technical decisions">
            <ul className="space-y-2">
              {w.decisions.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden="true" className="text-accent">→</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Block>
          {w.layout !== "system" ? (
            <div className="border-t border-rule pt-4">
              <h4 className="meta mb-3 text-ink-3">Architecture</h4>
              <SystemSketch nodes={w.sketch} />
            </div>
          ) : null}
          <Block label="Challenge">
            <p>{w.challenge}</p>
          </Block>
          <div className="border-t border-rule-strong pt-4">
            <h4 className="meta text-accent">Outcome</h4>
            <p className="mt-2 text-[1.0625rem] font-medium leading-relaxed text-ink">{w.outcome}</p>
            {w.layout === "narrative" ? (
              <div className="mt-4">
                <Metrics w={w} compact />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
