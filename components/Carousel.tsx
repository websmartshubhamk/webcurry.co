"use client";

import { useEffect, useState } from "react";

type Slide = {
  title: string;
  body: string;
  meta?: string;
};

export function Carousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  const go = (dir: number) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  const slide = slides[index];

  return (
    <div className="card" style={{ position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
        <span className="pill pill-warm">Slider</span>
        <span className="muted">Stories and proof points</span>
      </div>
      <h3 style={{ marginTop: 0 }}>{slide.title}</h3>
      <p className="muted" style={{ marginBottom: "0.5rem" }}>
        {slide.body}
      </p>
      {slide.meta && <span className="badge">{slide.meta}</span>}
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
        <button className="btn btn-secondary" onClick={() => go(-1)} aria-label="Previous slide">
          Prev
        </button>
        <button className="btn btn-secondary" onClick={() => go(1)} aria-label="Next slide">
          Next
        </button>
        <span className="muted">Slide {index + 1} / {slides.length}</span>
      </div>
    </div>
  );
}
