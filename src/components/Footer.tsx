"use client";

import Link from "next/link";
import Image from "next/image";
import basePath from "@/lib/basePath";

function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gf-gold transition-colors group"
    >
      <svg
        className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
      Back to Top
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-gf-red-dark text-gray-300 footer-pattern">
      {/* Gold gradient top border */}
      <div className="h-1 bg-gradient-to-r from-gf-gold/30 via-gf-gold to-gf-gold/30" />

      <div className="relative max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & tagline */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group">
              <Image
                src={`${basePath}/images/logo-light.png`}
                alt="Go-Forth Home Services"
                width={140}
                height={42}
                className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-gf-gold font-semibold text-sm tracking-wider uppercase">
                Christmas Lights
              </span>
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Professional holiday light installation backed by 60+ years of trusted home service in North Carolina.
            </p>
            <p className="mt-1 text-xs text-gray-500 italic">
              Making homes shine, one roofline at a time.
            </p>

            {/* Social icons */}
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" aria-label="Google" className="social-icon">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-gf-gold" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ["/quote", "Get a Free Quote"],
                ["/services/inflatables", "Holiday Inflatables"],
                ["/gallery", "Photo Gallery"],
                ["/pricing", "Pricing"],
                ["/about", "About Us"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white hover:pl-1 transition-all duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-gf-gold" />
              Service Areas
            </h3>
            <ul className="space-y-2.5 text-sm">
              {["Lake Norman", "Triad", "Hickory", "Boone"].map((area) => (
                <li key={area}>
                  <Link
                    href={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-gf-gold" />
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <a
                  href="tel:+18772741475"
                  className="text-gf-gold hover:text-gf-gold-light transition-colors font-semibold text-base"
                >
                  (877) 274-1475
                </a>
              </p>
              <p>
                <a
                  href="mailto:lights@go-forth.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  lights@go-forth.com
                </a>
              </p>
              <p className="text-gray-500 text-xs">Mon-Fri 8am-6pm, Sat 9am-2pm</p>
            </div>

            {/* Badge */}
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 bg-white/5">
              <svg className="w-4 h-4 text-gf-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <span className="text-[11px] text-gray-400 leading-tight">
                Licensed &amp; Insured<br />
                Est. 1959 &middot; Family Owned
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Go-Forth Home Services. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-xs text-gray-500">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="w-px h-3 bg-white/10" />
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>

            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}
