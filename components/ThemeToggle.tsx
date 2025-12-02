"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button className="btn btn-secondary" onClick={toggle} aria-label="Toggle light/dark theme">
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
