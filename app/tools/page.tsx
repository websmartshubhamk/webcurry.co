"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/Section";
import { tools } from "@/lib/content";

export default function Tools() {
  const [traffic, setTraffic] = useState(5000);
  const [conversion, setConversion] = useState(2.0);
  const [lift, setLift] = useState(15);
  const [aov, setAov] = useState(120);

  const roi = useMemo(() => {
    const current = (traffic * (conversion / 100)) * aov;
    const improved = (traffic * ((conversion * (1 + lift / 100)) / 100)) * aov;
    return { current, improved, delta: improved - current };
  }, [traffic, conversion, lift, aov]);

  return (
    <>
      <Section title="Tools" eyebrow="Interactive">
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {tools.map((tool) => (
            <div key={tool.slug} className="card">
              <h3 style={{ marginTop: 0 }}>{tool.title}</h3>
              <p className="muted">{tool.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="ROI uplift calculator" eyebrow="Model outcomes">
        <div className="split" style={{ alignItems: "start" }}>
          <div className="card">
            <label className="muted">Monthly visitors</label>
            <input type="range" min={1000} max={20000} value={traffic} onChange={(e) => setTraffic(Number(e.target.value))} />
            <div className="flex"><strong>{traffic.toLocaleString()}</strong><span className="muted">visitors</span></div>

            <label className="muted">Conversion rate (%)</label>
            <input type="range" min={0.5} max={10} step={0.1} value={conversion} onChange={(e) => setConversion(Number(e.target.value))} />
            <div className="flex"><strong>{conversion.toFixed(1)}%</strong></div>

            <label className="muted">Expected lift (%)</label>
            <input type="range" min={5} max={50} step={1} value={lift} onChange={(e) => setLift(Number(e.target.value))} />
            <div className="flex"><strong>{lift}%</strong></div>

            <label className="muted">Average order value ($)</label>
            <input type="range" min={50} max={500} step={10} value={aov} onChange={(e) => setAov(Number(e.target.value))} />
            <div className="flex"><strong>${aov}</strong></div>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Projected impact</h3>
            <p className="muted">Current monthly revenue</p>
            <h2>${roi.current.toLocaleString(undefined, { maximumFractionDigits: 0 })}</h2>
            <p className="muted">After uplift</p>
            <h2>${roi.improved.toLocaleString(undefined, { maximumFractionDigits: 0 })}</h2>
            <div className="pill pill-success">+${roi.delta.toLocaleString(undefined, { maximumFractionDigits: 0 })} / month</div>
            <p className="muted" style={{ marginTop: "1rem" }}>
              Pair this with chatbots and WhatsApp handoffs to capture high-intent users and reduce drop-off.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Performance checklist" eyebrow="Speed, UX, and QA">
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {[
            "Sub-2.5s LCP on key pages",
            "CLS < 0.1 across hero + sliders",
            "INP < 200ms for nav/menus",
            "Lazy-load heavy media",
            "Schema + sitemap for blog and org",
            "Accessibility: focus + keyboard nav"
          ].map((item) => (
            <div key={item} className="card">
              <strong>{item}</strong>
              <p className="muted">Bake into Definition of Done.</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
