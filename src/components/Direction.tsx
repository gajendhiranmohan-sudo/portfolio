import { direction } from "@/content/profile";
import { Section } from "./Section";

const COLUMNS = [
  { key: "building", label: "Currently building", mark: "bg-accent border-accent" },
  { key: "learning", label: "Going deeper on", mark: "border-accent bg-[linear-gradient(90deg,var(--accent)_50%,transparent_50%)]" },
  { key: "next", label: "Next frontier", mark: "border-accent" },
] as const;

export function Direction() {
  return (
    <Section id="direction" n="06" label="Current direction" title="Where the work is heading.">
      <div className="grid grid-cols-1 border-t border-rule-strong md:grid-cols-3">
        {COLUMNS.map((c, i) => {
          const d = direction[c.key];
          return (
            <div key={c.key} className={`py-6 md:pr-6 ${i > 0 ? "border-t border-rule md:border-l md:border-t-0 md:pl-6" : ""}`}>
              <p className="meta flex items-center gap-2 text-ink-3">
                <span aria-hidden="true" className={`inline-block size-2.5 border ${c.mark}`} />
                {c.label}
              </p>
              <h3 className="mt-4 text-[1.375rem] font-semibold leading-tight tracking-[-0.02em]">{d.head}</h3>
              <p className="mt-3 leading-relaxed text-ink-2">{d.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
