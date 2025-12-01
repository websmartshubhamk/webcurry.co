import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { Popup } from "@/components/Popup";
import { Section } from "@/components/Section";
import { services, caseStudies, blogPosts } from "@/lib/content";

const slider = caseStudies.map((c) => ({
  title: c.title,
  body: `${c.summary} ${c.result ? `(${c.result})` : ""}`,
  meta: c.tags.join(" · ")
}));

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container split" style={{ alignItems: "center" }}>
          <div>
            <span className="pill pill-success">Architecture-First Development</span>
            <h1 style={{ fontSize: "2.8rem", marginBottom: "0.75rem" }}>
              Full-width, conversion-driven sites with mega menus, chatbots, and WhatsApp-ready flows.
            </h1>
            <p className="muted">
              We blueprint IA, build in Next.js, wire CX (chat, popups, sliders), and ship CRO-ready content systems. No noisy gimmicks—just
              performance, accessibility, and clear CTAs.
            </p>
            <div className="flex" style={{ flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href="/contact">
                Book a consult
              </Link>
              <a className="btn btn-secondary" href="https://wa.me/?text=Hello%20Webcurry%20team" target="_blank" rel="noreferrer">
                WhatsApp hello
              </a>
            </div>
            <div className="flex" style={{ marginTop: "1rem", flexWrap: "wrap" }}>
              <span className="badge">Mega menus that convert</span>
              <span className="badge">Chatbot with human handoff</span>
              <span className="badge">Interactive tools</span>
            </div>
          </div>
          <div className="card">
            <p className="muted">Live CX widgets</p>
            <ul className="list">
              <li>Popup with offer (timed) — see lower right after a few seconds.</li>
              <li>Slider for proof — below.</li>
              <li>WhatsApp CTA present in header + footer.</li>
              <li>Mega menu surfacing services.</li>
            </ul>
            <p className="muted">Ask for: chatbot provider, CRM/lead routing, analytics/consent preferences.</p>
          </div>
        </div>
      </section>

      <Section title="Services for serious web builds" eyebrow="Services" actions={<Link className="btn btn-secondary" href="/services">View services</Link>}>
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
              <Link className="btn btn-primary" href="/contact" style={{ marginTop: "0.75rem" }}>
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Proof & sliders" eyebrow="Case studies">
        <div className="split" style={{ alignItems: "stretch" }}>
          <Carousel slides={slider} />
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Chatbot + WhatsApp handoff</h3>
            <p className="muted">
              We add chatbots where they help: route FAQs, collect lead intents, and hand off to WhatsApp or a human rep with context. Popups use
              frequency capping. Sliders ship with keyboard controls.
            </p>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
              <div className="pill pill-warm">Chat + CRM rules</div>
              <div className="pill pill-success">WhatsApp-ready CTAs</div>
              <div className="pill">Exit-intent popups</div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Interactive tools" eyebrow="Value add" actions={<Link className="btn btn-secondary" href="/tools">See all tools</Link>}>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <div className="card">
            <h3>ROI uplift calculator</h3>
            <p className="muted">Model how small conversion lifts change revenue with transparent math.</p>
          </div>
          <div className="card">
            <h3>Performance checklist</h3>
            <p className="muted">A quick preflight for LCP/CLS/INP to keep UX fast and stable.</p>
          </div>
        </div>
      </Section>

      <Section title="Latest thinking" eyebrow="Blog" actions={<Link className="btn btn-secondary" href="/blog">View posts</Link>}>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {blogPosts.map((post) => (
            <div key={post.title} className="card">
              <span className="badge">{post.tag}</span>
              <h3 style={{ marginTop: "0.4rem" }}>{post.title}</h3>
              <p className="muted">{post.summary}</p>
              <Link className="btn btn-secondary" href={post.href}>
                Read
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Ready for a teardown?"
        eyebrow="Contact"
        actions={
          <div className="flex">
            <Link className="btn btn-primary" href="/contact">
              Start a project
            </Link>
            <a className="btn btn-secondary" href="https://wa.me/?text=Hello%20Webcurry%20team" target="_blank" rel="noreferrer">
              WhatsApp chat
            </a>
          </div>
        }
      >
        <div className="card">
          <p className="muted">
            Send us your current URL and goals. We return IA recommendations, chat/popup placements, and a delivery plan that favors maintainability
            and speed.
          </p>
          <ul className="list">
            <li>Architecture-first approach</li>
            <li>Performance and accessibility budgets</li>
            <li>Content model + CMS or structured data decision</li>
          </ul>
        </div>
      </Section>

      <Popup />
    </>
  );
}
