"use client";

import { useEffect, useState } from "react";

export function Popup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div
      className="card"
      style={{
        position: "fixed",
        right: "1.5rem",
        bottom: "1.5rem",
        width: "320px",
        background: "var(--panel)",
        zIndex: 80
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong>Get a free teardown</strong>
        <button className="btn btn-secondary" onClick={() => setOpen(false)} style={{ padding: "0.3rem 0.6rem" }}>
          Close
        </button>
      </div>
      <p className="muted">
        Share your current page and we&apos;ll return a 5-point uplift plan (navigation, speed, CTA, chatbot fit, WhatsApp handoff).
      </p>
      <a className="btn btn-primary" href="/contact">
        Book a slot
      </a>
    </div>
  );
}
