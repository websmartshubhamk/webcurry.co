import Link from "next/link";

export function Footer() {
  return (
    <footer className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container split">
        <div>
          <h3>Webcurry.co</h3>
          <p className="muted">
            Architecture-first builds for marketing and product sites with modern UX patterns, chat/WhatsApp, and CRO discipline.
          </p>
          <div className="flex" style={{ flexWrap: "wrap", gap: "0.5rem" }}>
            <a className="tag" href="mailto:hello@webcurry.co">
              hello@webcurry.co
            </a>
            <a className="tag" href="https://wa.me/?text=Hello%20Webcurry%20team" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <span className="tag">+91-0000-000-000</span>
          </div>
        </div>
        <div>
          <strong>Explore</strong>
          <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(140px, 1fr))", marginTop: "0.6rem" }}>
            <Link className="tag" href="/services">
              Services
            </Link>
            <Link className="tag" href="/portfolio">
              Portfolio
            </Link>
            <Link className="tag" href="/blog">
              Blog
            </Link>
            <Link className="tag" href="/tools">
              Tools
            </Link>
            <Link className="tag" href="/contact">
              Contact
            </Link>
            <Link className="tag" href="/(legal)/privacy">
              Privacy
            </Link>
            <Link className="tag" href="/(legal)/terms">
              Terms
            </Link>
          </div>
        </div>
        <div>
          <strong>Signals</strong>
          <ul className="list">
            <li>Performance-first builds (LCP/CLS/INP minded)</li>
            <li>Accessibility as a default</li>
            <li>SEO hygiene: meta, schema, sitemap</li>
            <li>Interactive CX: mega menus, chatbots, tools</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
