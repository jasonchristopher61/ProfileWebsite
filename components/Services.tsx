import { Cloud, Layers, Puzzle, Sparkles, Workflow, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { services } from "@/data/services";

const ICONS: Record<string, LucideIcon> = { Layers, Cloud, Workflow, Sparkles, Puzzle };

export function Services() {
  return (
    <section id="what-i-do" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-accent-violet">What I Do</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Where I bring the most value.</h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = ICONS[service.icon];
          return (
            <Reveal key={service.title} delay={i * 80}>
              <div className="group glow-border glass relative h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, var(--accent-blue), var(--accent-violet))" }}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </div>

                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-1 text-sm text-accent-violet">{service.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
