"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SquareTerminal, X } from "lucide-react";
import { profile, skills, experience, projects, certifications } from "@/data/resume";
import { social } from "@/data/social";

type Line = { text: string; kind: "input" | "output" | "error" };

const COMMANDS = ["help", "whoami", "skills", "projects", "experience", "contact", "clear"];

function renderHelp(): string[] {
  return [
    "Available commands:",
    "  help        Show this list",
    "  whoami      Learn about Jason",
    "  skills      Display technical expertise",
    "  projects    Explore featured work",
    "  experience  View career information",
    "  contact     Show contact details",
    "  clear       Reset the terminal",
    "",
    "Psst — try `party` if you're feeling curious.",
  ];
}

function renderWhoami(): string[] {
  return [`${profile.name} — ${profile.title}`, "", profile.summaryLead, profile.summaryRest];
}

function renderSkills(): string[] {
  return skills.flatMap((group) => [
    `${group.category}:`,
    ...group.items.map((s) => `  - ${s.name} (${s.level})`),
    "",
  ]);
}

function renderProjects(): string[] {
  return projects.flatMap((p) => [`• ${p.name}`, `  ${p.summary}`, ""]);
}

function renderExperience(): string[] {
  return experience.flatMap((job) => [
    `${job.role}`,
    `${job.company} — ${job.period}`,
    job.location ?? "",
    "",
    ...job.highlights.map((h) => `  - ${h}`),
    "",
  ]);
}

function renderCertifications(): string[] {
  return certifications.map((c) => `  - ${c.name}${c.year ? ` (${c.year})` : ""}`);
}

function renderContact(): string[] {
  return [`Email:    ${social.email}`, `GitHub:   ${social.github}`, `LinkedIn: ${social.linkedin}`];
}

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([
    { text: `Welcome. Type 'help' to see available commands.`, kind: "output" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [party, setParty] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setHistory((h) => [...h, raw]);
    setHistoryIndex(null);
    setLines((l) => [...l, { text: `jason@portfolio:~$ ${raw}`, kind: "input" }]);

    let output: string[];
    switch (cmd) {
      case "help":
        output = renderHelp();
        break;
      case "whoami":
        output = renderWhoami();
        break;
      case "skills":
        output = renderSkills();
        break;
      case "projects":
        output = renderProjects();
        break;
      case "experience":
        output = renderExperience();
        break;
      case "certifications":
      case "certs":
        output = renderCertifications();
        break;
      case "contact":
        output = renderContact();
        break;
      case "clear":
        setLines([]);
        return;
      case "party":
        setParty(true);
        setTimeout(() => setParty(false), 1800);
        output = ["🎉 You found it. Back to business."];
        break;
      default:
        output = [`command not found: ${cmd}`, `Type 'help' to see what's available.`];
        setLines((l) => [...l, ...output.map((text) => ({ text, kind: "error" as const }))]);
        return;
    }
    setLines((l) => [...l, ...output.map((text) => ({ text, kind: "output" as const }))]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMANDS.find((c) => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close terminal" : "Open interactive terminal"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-lg cursor-pointer"
      >
        {open ? <X className="h-5 w-5" /> : <SquareTerminal className="h-5 w-5" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 flex h-[480px] w-[min(520px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-border bg-[#0a0b10] font-mono text-[13px] text-green-400 shadow-2xl"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-[11px] text-white/40">jason@portfolio — terminal</span>
            </div>

            <div className="flex-1 space-y-0.5 overflow-y-auto px-4 py-3">
              {lines.map((line, i) => (
                <pre
                  key={i}
                  className={`whitespace-pre-wrap font-mono ${
                    line.kind === "input" ? "text-white" : line.kind === "error" ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {line.text}
                </pre>
              ))}
              <div className="flex items-center gap-2">
                <span className="text-white">jason@portfolio:~$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  spellCheck={false}
                  autoComplete="off"
                  aria-label="Terminal command input"
                  className="flex-1 bg-transparent text-white outline-none"
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {party && (
        <div className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-4xl font-bold gradient-text"
          >
            🎉 Ideas are meant to be built. 🎉
          </motion.p>
        </div>
      )}
    </>
  );
}
