import { ReactNode } from "react";

export function Section({ title, eyebrow, children, actions }: { title: string; eyebrow?: string; children: ReactNode; actions?: ReactNode }) {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            {eyebrow && <span className="badge">{eyebrow}</span>}
            <h2 style={{ marginBottom: "0.5rem" }}>{title}</h2>
          </div>
          {actions}
        </div>
        <div style={{ marginTop: "1.25rem" }}>{children}</div>
      </div>
    </section>
  );
}
