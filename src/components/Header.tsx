"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import basePath, { img } from "@/lib/basePath";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Slim top bar */}
      <div className="hidden md:block bg-gf-red-dark text-white/80 text-xs">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-8">
          <a
            href="tel:+18772741475"
            className="flex items-center gap-1.5 hover:text-gf-gold-light transition-colors"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            (877) 274-1475
          </a>
          <span className="flex items-center gap-2 tracking-wide">
            <span className="inline-block w-1 h-1 rounded-full bg-gf-gold/60" />
            Licensed &amp; Insured
            <span className="inline-block w-1 h-1 rounded-full bg-gf-gold/60" />
            Family Owned Since 1959
          </span>
        </div>
      </div>

      {/* Main header */}
      <div
        className={`bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled
            ? "border-gray-200 shadow-lg shadow-black/5 h-16"
            : "border-gray-100 h-20"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-full">
          {/* Logo area */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src={img("/images/logo-dark.png")}
              alt="Go-Forth Home Services"
              width={160}
              height={48}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="text-gf-gold text-[10px] font-semibold tracking-widest uppercase hidden sm:block">
              Christmas Lights
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-animated text-sm font-medium text-gf-charcoal hover:text-gf-red transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="ml-2 inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-lg bg-gf-gold text-white hover:bg-gf-gold-light hover:text-gf-charcoal transition-all duration-300 animate-pulse-glow"
            >
              Free Quote
            </Link>
          </nav>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="tel:+18772741475"
              className="p-2 text-gf-red hover:text-gf-gold transition-colors"
              aria-label="Call us"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="p-2 text-gf-charcoal"
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
        </div>
      </div>

      {/* Mobile menu with backdrop overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            aria-label="Mobile navigation"
            className="relative z-50 md:hidden bg-white border-b border-gray-100 shadow-xl px-6 pb-5 pt-2 animate-slide-down"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-medium text-gf-charcoal hover:text-gf-red border-b border-gray-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="mt-4 block text-center px-5 py-3 text-sm font-semibold rounded-lg bg-gf-gold text-white hover:bg-gf-gold-light hover:text-gf-charcoal transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Free Quote
            </Link>
            <a
              href="tel:+18772741475"
              className="mt-3 block text-center text-sm text-gf-red font-medium"
            >
              Call (877) 274-1475
            </a>
          </nav>
        </>
      )}
    </header>
  );
}
