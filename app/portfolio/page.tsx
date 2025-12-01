import { Section } from "@/components/Section";
import { caseStudies } from "@/lib/content";

export default function Portfolio() {
  return (
    <>
      <Section title="Portfolio & case studies" eyebrow="Proof">
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {caseStudies.map((cs) => (
            <div key={cs.title} className="card">
              <span className="badge">{cs.result}</span>
              <h3 style={{ marginTop: "0.5rem" }}>{cs.title}</h3>
              <p className="muted">{cs.summary}</p>
              <div className="flex" style={{ flexWrap: "wrap" }}>
                {cs.tags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Need a teardown?" eyebrow="Next step">
        <div className="card">
          <p className="muted">Share your current site and KPIs. We will map IA, interactive widgets, and performance goals before building.</p>
        </div>
      </Section>
    </>
  );
}
