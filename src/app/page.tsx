import { Capabilities } from "@/components/Capabilities";
import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";
import { Direction } from "@/components/Direction";
import { Intro } from "@/components/Intro";
import { Log } from "@/components/Log";
import { Principles } from "@/components/Principles";
import { RevealObserver } from "@/components/RevealObserver";
import { RunningHeader } from "@/components/RunningHeader";
import { StackIndex } from "@/components/StackIndex";
import { WorkExplorer } from "@/components/WorkExplorer";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="meta sr-only z-50 bg-ink px-3 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-14"
      >
        Skip to selected work
      </a>
      <RunningHeader />
      <RevealObserver />
      <main>
        <Intro />
        <Capabilities />
        <Career />
        <WorkExplorer />
        <Principles />
        <Direction />
        <StackIndex />
        <Log />
        <Contact />
      </main>
    </>
  );
}
