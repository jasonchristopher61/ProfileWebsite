import { Cloud, Clapperboard, Code2, Gamepad2, Music, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { aboutStory, interests } from "@/data/resume";

const ICONS: Record<string, LucideIcon> = { Code2, Cloud, Sparkles, Music, Clapperboard, Gamepad2 };

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-accent-violet">About Me</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">More than a job title.</h2>
      </Reveal>

      <div className="mt-10 space-y-5">
        {aboutStory.map((paragraph, i) => (
          <Reveal key={i} delay={i * 100}>
            <p className={i === 0 ? "text-lg leading-relaxed text-foreground" : "text-lg leading-relaxed text-muted"}>
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {interests.map((interest) => {
          const Icon = ICONS[interest.icon];
          return (
            <div
              key={interest.label}
              className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 text-sm"
            >
              {Icon && <Icon className="h-4 w-4 shrink-0 text-accent-violet" />}
              <span>{interest.label}</span>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
