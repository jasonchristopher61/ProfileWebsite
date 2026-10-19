import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { social } from "@/data/social";
import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 text-center">
        <p className="font-display text-lg md:text-xl max-w-2xl mx-auto text-foreground">
          &ldquo;I&rsquo;m an engineer who loves technology, a creator who enjoys experimenting, and someone who
          believes ideas are meant to be built.&rdquo;
        </p>

        <div className="mt-8 flex justify-center gap-5">
          <a
            href={social.github}
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:text-foreground hover:border-accent-violet"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={social.linkedin}
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:text-foreground hover:border-accent-violet"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${social.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:text-foreground hover:border-accent-violet"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-8 text-xs text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
