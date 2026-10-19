import { Camera, Clapperboard, FlaskConical, Gamepad2, Music, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { creativeCategories } from "@/data/creative";

const ICONS: Record<string, LucideIcon> = { Music, Clapperboard, Camera, Gamepad2, FlaskConical };

const GRADIENTS = [
  "linear-gradient(135deg, #f472b6, #a855f7)",
  "linear-gradient(135deg, #38bdf8, #6366f1)",
  "linear-gradient(135deg, #fb923c, #ec4899)",
  "linear-gradient(135deg, #34d399, #0ea5e9)",
  "linear-gradient(135deg, #a78bfa, #22d3ee)",
];

export function Creative() {
  return (
    <section id="beyond-code" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-accent-violet">Beyond Code</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The creative playground.</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Engineering isn&rsquo;t the only thing I build. This corner is still a work in progress — check back as I
          fill it in with real music, footage, and experiments.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {creativeCategories.map((cat, i) => {
          const Icon = ICONS[cat.icon];
          return (
            <Reveal key={cat.title} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border p-6 transition-transform duration-300 hover:-translate-y-1">
                <div
                  className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                  style={{ background: GRADIENTS[i % GRADIENTS.length] }}
                />
                <div className="relative">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                    style={{ background: GRADIENTS[i % GRADIENTS.length] }}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{cat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cat.blurb}</p>
                  {cat.placeholder && (
                    <span className="mt-4 inline-block rounded-full border border-border px-2.5 py-1 text-[11px] uppercase tracking-wide text-muted">
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
