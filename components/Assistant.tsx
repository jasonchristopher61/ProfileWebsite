"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { assistantFallback, assistantTopics } from "@/data/assistant";
import { profile } from "@/data/resume";

interface Message {
  role: "user" | "assistant";
  text: string;
}

// Demo-mode reply generator. Swap this for a call to a secure server-side
// API route (e.g. `app/api/assistant/route.ts` calling an LLM with your key
// kept server-side) when you're ready to go live — the UI below doesn't
// need to change, just this function.
async function getAssistantReply(message: string): Promise<string> {
  const lower = message.toLowerCase();
  const match = assistantTopics.find((topic) => topic.keywords.some((k) => lower.includes(k)));
  // tiny artificial delay so it feels like a real round-trip
  await new Promise((r) => setTimeout(r, 400));
  return match ? match.answer : assistantFallback;
}

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: `Hi, I'm a demo assistant for ${profile.name}'s portfolio. Ask me about his experience, skills, projects, certifications, or creative work!`,
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setLoading(true);
    const reply = await getAssistantReply(text);
    setMessages((m) => [...m, { role: "assistant", text: reply }]);
    setLoading(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close AI assistant" : "Ask Jason's AI assistant"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg cursor-pointer"
        style={{ background: "linear-gradient(135deg, var(--accent-blue), var(--accent-violet))" }}
      >
        {open ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex h-[480px] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <Sparkles className="h-4 w-4 text-accent-violet" />
              <div className="flex-1">
                <p className="text-sm font-medium">Ask Jason&rsquo;s AI</p>
                <p className="text-[11px] text-muted">Demo mode — canned answers, no live AI call</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "ml-auto bg-accent-violet text-white"
                      : "mr-auto bg-surface-2 text-foreground"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {loading && (
                <div className="mr-auto max-w-[85%] rounded-xl bg-surface-2 px-3 py-2 text-sm text-muted">
                  Thinking…
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-border p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects…"
                className="flex-1 rounded-full border border-border bg-transparent px-3 py-2 text-sm outline-none focus:border-accent-violet"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-violet text-white cursor-pointer disabled:opacity-50"
                disabled={loading || !input.trim()}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
