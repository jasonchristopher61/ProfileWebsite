import { Award, Briefcase, GraduationCap, Lightbulb, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { journey, type JourneyEntry } from "@/data/journey";

const TYPE_META: Record<JourneyEntry["type"], { icon: LucideIcon; color: string }> = {
  role: { icon: Briefcase, color: "var(--accent-blue)" },
  certification: { icon: Award, color: "var(--accent-violet)" },
  milestone: { icon: GraduationCap, color: "var(--accent-cyan)" },
  learning: { icon: Lightbulb, color: "var(--accent-violet)" },
};

export function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-accent-violet">My Journey</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How I got here.</h2>
      </Reveal>

      <div className="relative mt-14 pl-9 sm:pl-12">
        <div
          className="absolute left-[11px] top-2 bottom-2 w-px sm:left-[15px]"
          style={{ background: "linear-gradient(var(--accent-violet), transparent)" }}
        />

        <div className="space-y-10">
          {journey.map((entry, i) => {
            const meta = TYPE_META[entry.type];
            const Icon = meta.icon;
            return (
              <Reveal key={entry.title} delay={Math.min(i * 60, 300)} direction="left">
                <div className="relative">
                  <span
                    className="absolute -left-9 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border sm:-left-12"
                    style={{ borderColor: meta.color, background: "var(--background)", color: meta.color }}
                  >
                    <Icon className="h-3 w-3" />
                  </span>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">{entry.date}</p>
                  <h3 className="mt-1 text-base font-semibold">{entry.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{entry.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
