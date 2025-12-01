import Link from "next/link";
import { Section } from "@/components/Section";

export default function Contact() {
  return (
    <Section title="Contact & lead capture" eyebrow="Let’s talk">
      <div className="split" style={{ alignItems: "start" }}>
        <div className="card">
          <form className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{ gridColumn: "span 2" }}>
              <label className="muted">Name</label>
              <input required name="name" placeholder="Your name" style={inputStyle} />
            </div>
            <div>
              <label className="muted">Email</label>
              <input required type="email" name="email" placeholder="you@company.com" style={inputStyle} />
            </div>
            <div>
              <label className="muted">WhatsApp / Phone</label>
              <input name="phone" placeholder="+91..." style={inputStyle} />
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <label className="muted">Project goals</label>
              <textarea name="goals" placeholder="Current site URL, goals, timelines" style={{ ...inputStyle, minHeight: "120px" }} />
            </div>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <button type="submit" className="btn btn-primary">
                Send request
              </button>
              <Link className="btn btn-secondary" href="https://wa.me/?text=Hello%20Webcurry%20team" target="_blank">
                WhatsApp hello
              </Link>
            </div>
            <p className="muted" style={{ gridColumn: "span 2" }}>
              We respond within one business day. We can also integrate this form to your CRM or email provider.
            </p>
          </form>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>What happens next</h3>
          <ul className="list">
            <li>We review your goals and current site.</li>
            <li>Share IA, chat/popup/slider placements, and tool ideas.</li>
            <li>Confirm stack, hosting, and analytics preferences.</li>
          </ul>
          <p className="muted">
            Prefer async? Drop a note on WhatsApp and we’ll pick a slot. Want a live chatbot? We can wire one with CRM rules and human handoff.
          </p>
        </div>
      </div>
    </Section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem 0.9rem",
  borderRadius: "12px",
  border: "1px solid var(--border)",
  background: "rgba(255,255,255,0.02)",
  color: "var(--text)",
  outline: "none"
};
