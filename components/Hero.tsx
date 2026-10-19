"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, UserRound } from "lucide-react";
import { RotatingWords } from "./RotatingWords";
import { MagneticButton } from "./MagneticButton";
import { Particles } from "./Particles";
import { GithubIcon, LinkedinIcon } from "./icons";
import { social } from "@/data/social";

const WORDS = ["Software Engineer", "Problem Solver", "Cloud Enthusiast", "Creative Explorer", "AI Tinkerer"];

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg" />
      <Particles />
      <div className="absolute -top-32 -left-24 h-[380px] w-[380px] rounded-full bg-accent-violet/25 blur-[110px]" />
      <div className="absolute top-10 -right-24 h-[320px] w-[320px] rounded-full bg-accent-blue/25 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-muted"
          >
            Hi, I&rsquo;m Jason
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl"
          >
            I build software, solve
            <br className="hidden sm:block" /> problems, and bring{" "}
            <span className="gradient-text">ideas to life.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-muted"
          >
            Senior Full-Stack Developer | Cloud Enthusiast |{" "}
            <RotatingWords words={WORDS} />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              onClick={() => scrollTo("work")}
              className="text-white shadow-lg shadow-accent-violet/20"
              style={{ background: "linear-gradient(135deg, var(--accent-blue), var(--accent-violet))" }}
            >
              Explore My Work
            </MagneticButton>
            <MagneticButton onClick={() => scrollTo("about")} className="border border-border text-foreground">
              Get to Know Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-4"
          >
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-[320px] rounded-[2rem] p-[1.5px] md:block"
          style={{ background: "linear-gradient(135deg, var(--accent-blue), var(--accent-violet), var(--accent-cyan))" }}
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 rounded-[calc(2rem-1.5px)] bg-background">
            <UserRound className="h-24 w-24 text-muted" strokeWidth={1} />
            <span className="text-xs text-muted">Photo placeholder</span>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted cursor-pointer"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
