"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, services } from "@/lib/content";
import { ThemeToggle } from "@/components/ThemeToggle";

const whatsappLink = "https://wa.me/?text=Hello%20Webcurry%20team";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--panel)", boxShadow: "0 10px 30px rgba(15,23,42,0.08)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0", fontSize: "0.95rem" }}>
        <div className="muted" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <span>Trusted delivery for modern web</span>
          <a href={whatsappLink} className="tag" target="_blank" rel="noreferrer">
            WhatsApp + Quick reply
          </a>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <ThemeToggle />
          <a className="tag" href="mailto:hello@webcurry.co">
            hello@webcurry.co
          </a>
        </div>
      </div>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 0" }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: "1.2rem", letterSpacing: "0.01em" }}>
          Webcurry<span style={{ color: "var(--brand)" }}>.co</span>
        </Link>
        <nav
          aria-label="Primary"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem"
          }}
        >
          <div className="desktop-nav" style={{ display: "none", gap: "1rem" }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="tag">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mega-wrapper" style={{ position: "relative" }}>
            <button className="btn btn-secondary" onClick={() => setMegaOpen((v) => !v)} aria-expanded={megaOpen}>
              Mega menu
            </button>
            {megaOpen && (
              <div
                className="card"
                style={{
                  position: "absolute",
                  top: "calc(100% + 0.5rem)",
                  right: 0,
                  width: "460px",
                  background: "var(--panel)"
                }}
              >
                <p className="muted" style={{ marginTop: 0 }}>
                  Services at a glance
                </p>
                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                  {services.map((service) => (
                    <div key={service.title}>
                      <strong>{service.title}</strong>
                      <ul className="list">
                        {service.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a className="btn btn-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <Link className="btn btn-primary" href="/contact">
            Book a consult
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="btn btn-secondary"
            style={{ display: "none" }}
          >
            Menu
          </button>
        </nav>
      </div>
      {menuOpen && (
        <div className="card" style={{ margin: "0.5rem", background: "var(--panel)" }}>
          <div className="grid" style={{ gap: "0.75rem" }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="tag">
                {link.label}
              </Link>
            ))}
            <a href={whatsappLink} className="tag" target="_blank" rel="noreferrer">
              WhatsApp chat
            </a>
          </div>
        </div>
      )}
      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          header nav {
            gap: 0.75rem !important;
          }
          header nav .btn.btn-secondary:not(:last-child) {
            display: none;
          }
          header nav button[aria-label="Toggle menu"] {
            display: inline-flex !important;
          }
        }
        @media (min-width: 901px) {
          .desktop-nav {
            display: flex !important;
          }
          header nav button[aria-label="Toggle menu"] {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
