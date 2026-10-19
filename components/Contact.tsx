"use client";

import { useState } from "react";
import { Download, Mail, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { GithubIcon, LinkedinIcon } from "./icons";
import { social } from "@/data/social";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) next.email = "That doesn't look like a valid email.";
    if (!form.message.trim()) next.message = "Say a bit about why you're reaching out.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Static site, no backend — fall back to opening a pre-filled mailto link.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-accent-violet">Contact</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let&rsquo;s build something.</h2>
        <p className="mt-3 max-w-xl text-muted">
          Whether it&rsquo;s a role, a project, or just a technical tangent you want to talk through — reach out.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1fr]">
        <Reveal direction="left" className="space-y-4">
          <a
            href={`mailto:${social.email}`}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-sm transition hover:border-accent-violet"
          >
            <Mail className="h-4 w-4 text-accent-violet" /> {social.email}
          </a>
          <a
            href={social.github}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-sm transition hover:border-accent-violet"
          >
            <GithubIcon className="h-4 w-4 text-accent-violet" /> GitHub
          </a>
          <a
            href={social.linkedin}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-sm transition hover:border-accent-violet"
          >
            <LinkedinIcon className="h-4 w-4 text-accent-violet" /> LinkedIn
          </a>

          <MagneticButton
            as="a"
            href={social.resumePdf}
            className="w-full justify-center text-white"
            style={{ background: "linear-gradient(135deg, var(--accent-blue), var(--accent-violet))" }}
          >
            <Download className="h-4 w-4" /> Download Résumé
          </MagneticButton>
        </Reveal>

        <Reveal delay={120} direction="right">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-muted">
                Name
              </label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-transparent px-3.5 py-2.5 text-sm outline-none focus:border-accent-violet"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-transparent px-3.5 py-2.5 text-sm outline-none focus:border-accent-violet"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-border bg-transparent px-3.5 py-2.5 text-sm outline-none focus:border-accent-violet"
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <MagneticButton as="button" className="text-white" style={{ background: "linear-gradient(135deg, var(--accent-blue), var(--accent-violet))" }}>
              <Send className="h-4 w-4" /> Send Message
            </MagneticButton>

            {sent && <p className="text-xs text-accent-cyan">Opening your email client to send this…</p>}
            <p className="text-[11px] text-muted">
              This is a static site — submitting opens a pre-filled email instead of hitting a server.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
