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
        <div
          className="container"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", alignItems: "center" }}
        >
          <div>
            <span className="pill pill-success">Conversion-first build</span>
            <h1 style={{ fontSize: "2.8rem", marginBottom: "0.75rem", lineHeight: 1.7, fontWeight: 650 }}>
              Websites that explain your offer fast and turn visitors into leads or customers.
            </h1>
            <p className="muted" style={{ color: "#2d3b52" }}>
              We plan your structure, then build in Next.js with mega menus, chat/WhatsApp, and fast pages so visitors know what you do and how to
              buy or book. Clean visuals, sales-focused copy, and dependable integrations.
            </p>
            <div className="flex" style={{ flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href="/contact">
                Book a consult
              </Link>
              <a className="btn btn-secondary" href="https://wa.me/?text=Hello%20Webcurry%20team" target="_blank" rel="noreferrer">
                WhatsApp hello
              </a>
            </div>
            <div className="flex" style={{ marginTop: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <span className="badge">Clean white layout</span>
              <span className="badge">Mega menus & chat</span>
              <span className="badge">Light/dark ready</span>
            </div>
          </div>
          <div
            className="card"
            style={{
              minHeight: "320px",
              background: "linear-gradient(140deg, #ffffff, #eff4ff)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "0.75rem",
              borderColor: "#d8e6f7"
            }}
          >
            <span className="badge" style={{ alignSelf: "flex-start" }}>
              Hero preview
            </span>
            <h3 style={{ margin: 0 }}>Sales-first hero</h3>
            <p className="muted" style={{ color: "#2d3b52" }}>
              Simple headline, proof, and two CTAs (book a call or WhatsApp). Swap in your offer, a product or team image, and a clear value line.
            </p>
            <div className="flex" style={{ flexWrap: "wrap" }}>
              <div className="pill">Mega menu</div>
              <div className="pill">Chatbot</div>
              <div className="pill">WhatsApp</div>
              <div style={{ marginTop: "1rem", width: "100%", background: "#f2f6fd", border: "1px solid #d8e6f7", borderRadius: "14px", height: "120px" }}>
                {/* image/illustration placeholder */}
              </div>
            </div>
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
        <div className="card" style={{ background: "linear-gradient(120deg, #f8fbff, #eef4ff)", borderColor: "#d8e6f7" }}>
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
