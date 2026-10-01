import Image from "next/image";
import { person, readout } from "@/content/profile";
import portrait from "@/assets/portrait.webp";

export function Intro() {
  return (
    <section id="intro" aria-label="Introduction" className="pt-12">
      <div className="shell pb-12 pt-8 md:pb-16 md:pt-14">
        <div className="meta flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-ink-3">
          <p>
            <span className="text-accent">§01</span> Identity
          </p>
          <p>{person.location} · IST</p>
        </div>

        <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between md:gap-8">
          <h1 className="display text-[15vw] md:text-[10vw] xl:text-[9.5rem]">
            <span className="line-mask">
              <span className="line-in" style={{ animationDelay: "60ms" }}>
                {person.first}
              </span>
            </span>
            <span className="line-mask">
              <span className="line-in" style={{ animationDelay: "160ms" }}>
                {person.last}
                <span aria-hidden="true" className="pop-in ml-[0.08em] inline-block size-[0.16em] bg-accent align-baseline" />
              </span>
            </span>
          </h1>

          <figure className="flex items-end gap-4 md:block md:w-[clamp(8rem,19vw,16.5rem)] md:shrink-0">
            <div className="portrait group relative aspect-[4/5] w-28 shrink-0 overflow-hidden border border-rule-strong bg-paper-2 md:w-full">
              <Image
                src={portrait}
                alt="Portrait of Gajendhiran Mohan"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 768px) 19vw, 7rem"
                className="object-cover object-[50%_28%] grayscale-[0.85] contrast-[1.05] transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
              />
              <span aria-hidden="true" className="absolute left-0 top-0 size-2.5 bg-accent" />
            </div>
            <figcaption className="meta pb-1 text-ink-3 md:mt-3 md:flex md:justify-between md:pb-0">
              <span className="block">Fig. 01</span>
              <span className="block">{person.location.split(",")[0]}, India</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-8 border-t border-rule-strong pt-6 md:mt-14 md:grid-cols-12 md:gap-x-8">
          <div className="fade-in md:col-span-5" style={{ animationDelay: "320ms" }}>
            <p className="meta text-ink-3">Positioning</p>
            <p className="mt-2 text-[clamp(1.5rem,2.6vw,2.125rem)] font-semibold leading-[1.08] tracking-[-0.025em]">
              {person.positioning}.
              <span className="block text-ink-2">Building AI-native products and the production systems underneath them.</span>
            </p>
          </div>

          <div className="fade-in md:col-span-4" style={{ animationDelay: "400ms" }}>
            <p className="meta text-ink-3">What that means</p>
            <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink-2">
              For four years at Predigle I&apos;ve shipped healthcare, SaaS and AI platforms end to end: the Angular screens a
              practice uses all day, and the rule engine, APIs and AWS infrastructure behind them. Most of that work comes
              with a measured result. Right now I&apos;m bringing the same production discipline to multi-agent systems on
              LangGraph.
            </p>
          </div>

          <dl style={{ animationDelay: "480ms" }} className="fade-in grid grid-cols-2 gap-x-6 gap-y-4 text-[0.9375rem] md:col-span-3 md:grid-cols-1">
            <div>
              <dt className="meta text-ink-3">Now</dt>
              <dd className="mt-1">
                {person.currentRole}, {person.company}
              </dd>
            </div>
            <div>
              <dt className="meta text-ink-3">Since</dt>
              <dd className="mt-1">{person.since}</dd>
            </div>
            <div>
              <dt className="meta text-ink-3">Certified</dt>
              <dd className="mt-1">AWS Solutions Architect – Associate</dd>
            </div>
            <div>
              <dt className="meta text-ink-3">Building</dt>
              <dd className="mt-1">
                <a href="#work/crewfox" className="ulink">
                  CrewFox, multi-agent AI
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="fade-in mt-12 border-y border-rule md:mt-16" style={{ animationDelay: "560ms" }}>
          <ul className="grid grid-cols-2 md:grid-cols-4" aria-label="Production figures from the resume">
            {readout.map((r, i) => (
              <li
                key={r.label}
                className={`py-5 pr-4 ${i % 2 === 1 ? "border-l border-rule pl-4" : ""} ${i > 1 ? "border-t border-rule md:border-t-0" : ""} ${i === 2 ? "md:border-l md:pl-4" : ""}`}
              >
                <p className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-none tracking-[-0.03em]">
                  {r.value}
                </p>
                <p className="meta mt-2 text-ink-3">{r.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
          <a href="#work" className="ulink">
            Read the case studies ↓
          </a>
          <a href="#contact" className="ulink text-ink-2">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
}
