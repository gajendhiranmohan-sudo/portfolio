import { stack } from "@/content/profile";
import { Section } from "./Section";

export function StackIndex() {
  return (
    <Section
      id="stack"
      n="07"
      label="Engineering stack"
      aside="Grouped by layer of the stack, not by how impressive it sounds."
    >
      <dl className="border-t border-rule-strong">
        {stack.map((g) => (
          <div key={g.group} className="grid grid-cols-1 gap-y-1 border-b border-rule py-4 sm:grid-cols-9 sm:gap-x-8">
            <dt className="meta pt-1 text-ink-3 sm:col-span-2">{g.group}</dt>
            <dd className="text-[1.0625rem] leading-relaxed text-ink sm:col-span-7">
              {g.items.map((item, i) => (
                <span key={item}>
                  <span className="whitespace-nowrap">{item}</span>
                  {i < g.items.length - 1 ? (
                    <>
                      {" "}
                      <span aria-hidden="true" className="px-1 text-ink-3">
                        ·
                      </span>{" "}
                    </>
                  ) : null}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
