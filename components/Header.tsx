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
    <header className="glass" style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0" }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.02em" }}>
          Webcurry<span style={{ color: "var(--accent)" }}>.co</span>
        </Link>
        <nav
          aria-label="Primary"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem"
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
                  width: "420px",
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
          <ThemeToggle />
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
