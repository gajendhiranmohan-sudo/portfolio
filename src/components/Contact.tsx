"use client";

import { useState } from "react";
import { person } from "@/content/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${person.email}`;
    }
  };

  const rows = [
    { label: "Email", href: `mailto:${person.email}`, text: person.email },
    { label: "LinkedIn", href: person.linkedin, text: "linkedin.com/in/gajendhiran" },
    { label: "GitHub", href: person.github, text: "github.com/Gajendhiranm" },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" data-reveal className="border-t border-rule-strong bg-ink text-paper">
      <div className="reveal-up shell py-16 md:py-24">
        <p className="meta text-paper/60">
          <span className="text-accent">§09</span> Contact
        </p>
        <h2 id="contact-title" className="display mt-8 max-w-[14ch] text-[clamp(2.5rem,7.5vw,6.5rem)]">
          Available for interesting problems.
        </h2>
        <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-paper/70">
          Especially ones that need an engineer who can take an AI-native product from the interface down to the cloud
          architecture, and who will measure whether it worked.
        </p>

        <ul className="mt-12 border-t border-paper/25">
          {rows.map((r) => (
            <li key={r.label} className="grid grid-cols-1 items-baseline gap-y-1 border-b border-paper/25 py-4 sm:grid-cols-12 sm:gap-x-8">
              <span className="meta text-paper/55 sm:col-span-3">{r.label}</span>
              <span className="flex flex-wrap items-baseline gap-x-5 gap-y-1 sm:col-span-9">
                <a
                  href={r.href}
                  {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="break-all text-[clamp(1.125rem,2.2vw,1.625rem)] font-medium tracking-[-0.015em] underline decoration-paper/30 decoration-1 underline-offset-[0.2em] transition-colors hover:text-accent hover:decoration-current"
                >
                  {r.text}
                  {r.href.startsWith("http") ? <span aria-hidden="true"> ↗</span> : null}
                </a>
                {r.label === "Email" ? (
                  <button type="button" onClick={copy} className="meta text-paper/60 transition-colors hover:text-paper" aria-live="polite">
                    {copied ? "Copied" : "Copy"}
                  </button>
                ) : null}
              </span>
            </li>
          ))}
          <li className="grid grid-cols-1 gap-y-1 py-4 sm:grid-cols-12 sm:gap-x-8">
            <span className="meta text-paper/55 sm:col-span-3">Based in</span>
            <span className="text-[1.0625rem] text-paper/80 sm:col-span-9">{person.location}, India · IST (UTC+5:30)</span>
          </li>
        </ul>

        <footer className="meta mt-16 flex flex-col gap-2 text-paper/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {person.name}</p>
          <p>Set in Schibsted Grotesk &amp; IBM Plex Mono · Built with Next.js</p>
          <a href="#intro" className="hover:text-paper">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
