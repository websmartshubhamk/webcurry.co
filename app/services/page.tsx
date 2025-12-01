import Link from "next/link";
import { Section } from "@/components/Section";
import { services } from "@/lib/content";

const serviceAddons = [
  "Analytics + consent flows",
  "Email + CRM routing",
  "Performance budgets",
  "Design system tokens",
  "Schema + sitemap"
];

export default function Services() {
  return (
    <>
      <Section title="Services" eyebrow="What we deliver">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Full-width, commercial-grade websites in Next.js</h2>
          <p className="muted">
            Strategy → IA → build → QA → launch. Mega menus, chatbots, popups, sliders, WhatsApp handoffs, and niche tools are first-class
            citizens—not afterthoughts.
          </p>
          <div className="flex" style={{ flexWrap: "wrap" }}>
            <Link className="btn btn-primary" href="/contact">
              Request a build plan
            </Link>
            <a className="btn btn-secondary" href="https://wa.me/?text=Hello%20Webcurry%20team" target="_blank" rel="noreferrer">
              WhatsApp hello
            </a>
          </div>
        </div>
      </Section>

      <Section title="Core capabilities" eyebrow="Stacks & CX">
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {services.map((service) => (
            <div key={service.title} className="card">
              <h3 style={{ marginTop: 0 }}>{service.title}</h3>
              <p className="muted">{service.description}</p>
              <ul className="list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Add-ons & hygiene" eyebrow="Quality bars">
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {serviceAddons.map((item) => (
            <div key={item} className="card">
              <strong>{item}</strong>
              <p className="muted">Baked in—not bolted on. Documented and testable.</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
