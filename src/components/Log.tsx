import { log } from "@/content/profile";
import { Section, WorkLink } from "./Section";

const TAG_STYLE: Record<string, string> = {
  building: "bg-accent text-paper",
  shipped: "border border-rule-strong text-ink",
  certified: "bg-ink text-paper",
  notes: "border border-dashed border-ink-3 text-ink-2",
};

export function Log() {
  return (
    <Section
      id="log"
      n="08"
      label="Engineering log"
      title="A running log of things shipped, certified and in progress."
      aside="Entries come from shipped work. Notes and experiments get added here as they're written up."
    >
      <ol className="mono border-t border-rule-strong text-[0.875rem]">
        {log.map((e) => (
          <li
            key={e.n}
            className="grid grid-cols-[3.25rem_1fr] items-baseline gap-x-3 gap-y-1.5 border-b border-dashed border-rule py-3.5 sm:grid-cols-[3.75rem_6.5rem_1fr_auto] sm:gap-x-4"
          >
            <span className="text-ink-3">#{e.n}</span>
            <span className="sm:order-none">
              <span className={`inline-block px-1.5 py-px text-[0.75rem] uppercase tracking-wider ${TAG_STYLE[e.tag]}`}>{e.tag}</span>
            </span>
            <span className="col-start-2 font-sans text-[0.9688rem] leading-snug text-ink sm:col-start-auto">{e.text}</span>
            {e.work ? (
              <span className="col-start-2 sm:col-start-auto">
                <WorkLink slug={e.work} className="text-[0.75rem]">
                  ~/work/{e.work}
                </WorkLink>
              </span>
            ) : (
              <span className="hidden sm:block" />
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
