"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function WreathsGarlandPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("wreaths-popup-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem("wreaths-popup-dismissed", "1");
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="pointer-events-auto relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden"
          style={{ animation: "popupSlideUp 0.4s ease-out forwards" }}
        >
          {/* Top accent */}
          <div className="h-1.5 bg-gradient-to-r from-gf-red via-gf-gold to-gf-red" />

          {/* Close button */}
          <button
            type="button"
            onClick={dismiss}
            className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
            aria-label="Close popup"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="px-6 pt-6 pb-2 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gf-red/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gf-red">
              <span className="h-1.5 w-1.5 rounded-full bg-gf-red animate-pulse" />
              Popular Add-On
            </span>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-gf-charcoal sm:text-3xl">
              Professional Wreaths &amp; Garland
            </h2>

            <p className="mt-3 text-gf-gray leading-relaxed">
              Lush, full, and flawlessly installed. Add premium wreaths to your
              windows and garland to your columns, railings, and entryways.
            </p>

            <p className="mt-3 text-sm font-semibold text-gf-gold">
              Wreaths from $50 &middot; Garland from $5/ft
            </p>
          </div>

          {/* Actions */}
          <div className="px-6 pb-6 pt-4 flex flex-col gap-3">
            <Link
              href="/quote"
              onClick={dismiss}
              className="block w-full rounded-xl bg-gf-red px-6 py-3.5 text-center font-bold text-white shadow-md transition-all duration-300 hover:bg-gf-red-light hover:shadow-lg hover:-translate-y-0.5"
            >
              Add to My Quote
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="text-sm font-medium text-gf-gray hover:text-gf-charcoal transition-colors"
            >
              Maybe later
            </button>
          </div>

          <style>{`
            @keyframes popupSlideUp {
              from { opacity: 0; transform: translateY(24px) scale(0.96); }
              to   { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>
        </div>
      </div>
    </>
  );
}
