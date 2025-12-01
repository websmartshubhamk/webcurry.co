import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container card">
        <h1 style={{ marginTop: 0 }}>Page not found</h1>
        <p className="muted">Let&apos;s get you back to the main flows.</p>
        <div className="flex">
          <Link className="btn btn-primary" href="/">
            Go home
          </Link>
          <Link className="btn btn-secondary" href="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
