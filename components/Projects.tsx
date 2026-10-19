"use client";

import { useState } from "react";
import { ArrowRight, Lock, Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { Modal } from "./Modal";
import { GithubIcon } from "./icons";
import { projects } from "@/data/resume";

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? projects[openIndex] : null;

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-accent-violet">Featured Projects</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Selected work.</h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 90}>
            <button
              onClick={() => setOpenIndex(i)}
              className="group glow-border glass flex h-full w-full flex-col rounded-2xl p-6 text-left transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div
                className="flex h-32 w-full items-center justify-center rounded-xl text-xs text-muted/70"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--accent-blue) 18%, transparent), color-mix(in srgb, var(--accent-violet) 18%, transparent))",
                }}
              >
                Architecture diagram placeholder
              </div>

              <h3 className="mt-5 text-lg font-semibold">{project.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted">
                    {t}
                  </span>
                ))}
              </div>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-violet">
                View case study <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Modal open={active !== null} onClose={() => setOpenIndex(null)} title={active?.name ?? ""}>
        {active && (
          <div>
            <h3 className="pr-10 text-xl font-bold">{active.name}</h3>
            <p className="mt-2 text-sm text-muted">{active.summary}</p>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-foreground">Problem</p>
                <p className="mt-1 text-muted">{active.problem}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">My Role</p>
                <p className="mt-1 text-muted">{active.role}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Key Challenge</p>
                <p className="mt-1 text-muted">{active.challenge}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Achievements</p>
                <ul className="mt-1 list-inside list-disc space-y-1 text-muted">
                  {active.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground">Tech Stack</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {active.tech.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-sm">
              {active.links.github ? (
                <a href={active.links.github} className="inline-flex items-center gap-1.5 text-accent-violet">
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-muted">
                  <Lock className="h-4 w-4" /> {active.links.note}
                </span>
              )}
              {active.links.demo && (
                <a href={active.links.demo} className="inline-flex items-center gap-1.5 text-accent-violet">
                  <Play className="h-4 w-4" /> Live demo
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
