import Link from "next/link";
import { Section } from "@/components/Section";
import { blogPosts } from "@/lib/content";

export default function Blog() {
  return (
    <Section title="Insights & news" eyebrow="Blog">
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {blogPosts.map((post) => (
          <div key={post.title} className="card">
            <span className="badge">{post.tag}</span>
            <h3 style={{ marginTop: "0.5rem" }}>{post.title}</h3>
            <p className="muted">{post.summary}</p>
            <Link className="btn btn-secondary" href={post.href}>
              Read post
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
