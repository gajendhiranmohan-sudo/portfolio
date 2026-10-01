import { loop, principles } from "@/content/profile";
import { Section, WorkLink } from "./Section";

export function Principles() {
  return (
    <Section
      id="thinking"
      n="05"
      label="How I think"
      title="Principles I can point to evidence for."
      aside="Each principle links back to the work it comes from."
    >
      <ol aria-label="Working loop" className="mono flex flex-wrap items-center gap-x-2 gap-y-2 border-y border-rule-strong py-4 text-[0.875rem]">
        {loop.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className={i === 4 ? "bg-ink px-1.5 py-0.5 text-paper" : "text-ink"}>{step}</span>
            {i < loop.length - 1 ? (
              <span aria-hidden="true" className="text-ink-3">
                →
              </span>
            ) : (
              <span aria-hidden="true" className="text-accent" title="and back to Problem">
                ↺
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-3 text-[0.9375rem] text-ink-3">
        Observe is the step I care most about: every number in the case studies below was measured there.
      </p>

      <ol className="mt-12">
        {principles.map((p, i) => (
          <li key={p.title} className="grid grid-cols-1 gap-y-3 border-t border-rule py-7 md:grid-cols-9 md:gap-x-8">
            <h3 className="flex gap-4 text-[clamp(1.375rem,2.4vw,2rem)] font-semibold leading-[1.05] tracking-[-0.025em] md:col-span-4">
              <span className="meta pt-2 text-accent">{String(i + 1).padStart(2, "0")}</span>
              {p.title}
            </h3>
            <div className="md:col-span-5">
              <p className="leading-relaxed text-ink-2">{p.body}</p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5" aria-label="Evidence">
                {p.evidence.map((e) => (
                  <li key={e.label}>
                    <WorkLink slug={e.work}>{e.label}</WorkLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
