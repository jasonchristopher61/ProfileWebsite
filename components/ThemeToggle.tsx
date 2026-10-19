"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition hover:border-accent-violet hover:text-foreground cursor-pointer"
    >
      <Sun className="h-4 w-4 scale-100 dark:scale-0 transition-transform" />
      <Moon className="absolute h-4 w-4 scale-0 dark:scale-100 transition-transform" />
    </button>
  );
}
