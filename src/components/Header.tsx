"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/style-quiz", label: "Style Quiz" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gf-green">
          <span className="font-[family-name:var(--font-display)] text-xl">Go-Forth</span>
          <span className="text-gf-gold text-sm font-normal hidden sm:inline">Christmas Lights</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gf-charcoal hover:text-gf-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="ml-2 inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg bg-gf-gold text-white hover:bg-gf-gold-light hover:text-gf-charcoal transition-colors"
          >
            Free Quote
          </Link>
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="md:hidden p-2 text-gf-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav aria-label="Mobile navigation" className="md:hidden border-t border-gray-100 bg-white px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-gf-charcoal hover:text-gf-green border-b border-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="mt-3 block text-center px-5 py-3 text-sm font-semibold rounded-lg bg-gf-gold text-white hover:bg-gf-gold-light hover:text-gf-charcoal transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Free Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
