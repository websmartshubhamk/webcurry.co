"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button className="btn btn-secondary" style={{ padding: "0.5rem 0.9rem" }} onClick={toggle} aria-label="Toggle light/dark theme">
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
