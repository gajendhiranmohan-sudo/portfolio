import type { ReactNode } from "react";

type Props = {
  id: string;
  n: string;
  label: string;
  title?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
};

/**
 * Manual-style section: a numbered margin label on the left rail,
 * content on the right. Collapses to a stacked header on small screens.
 */
export function Section({ id, n, label, title, aside, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} data-section={id} data-reveal className="relative">
      <span aria-hidden="true" className="reveal-rule absolute inset-x-0 top-0 h-px bg-rule-strong" />
      <div className="shell grid grid-cols-1 gap-y-8 py-14 md:grid-cols-12 md:gap-x-8 md:py-24">
        <header className="md:col-span-3">
          <div className="reveal-up md:sticky md:top-20">
            <p className="meta flex items-baseline gap-3 text-ink-3">
              <span className="text-accent">§{n}</span>
              <span id={`${id}-label`}>{label}</span>
            </p>
            {aside ? <div className="mt-4 hidden text-sm leading-relaxed text-ink-3 md:block">{aside}</div> : null}
          </div>
        </header>
        <div className="reveal-up min-w-0 md:col-span-9" style={{ transitionDelay: "120ms" }}>
          {title ? (
            <h2 className="mb-10 max-w-[22ch] text-[clamp(1.75rem,3.6vw,3rem)] font-semibold leading-[1.02] tracking-[-0.03em] md:mb-14">
              {title}
            </h2>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}

export function WorkLink({ slug, children, className = "" }: { slug: string; children: ReactNode; className?: string }) {
  return (
    <a href={`#work/${slug}`} className={`mono text-[0.8125rem] text-ink-2 ulink ${className}`}>
      {children}
    </a>
  );
}
