import type { Metadata } from "next";
import QuoteEstimator from "@/components/QuoteEstimator";

export const metadata: Metadata = {
  title: "Get a Free Quote | Go-Forth Christmas Lights",
  description:
    "Get an instant estimate for professional Christmas light installation. Answer a few questions about your home and receive a free price range in 60 seconds. Serving Lake Norman, the Triad, Hickory, and Boone NC.",
  openGraph: {
    title: "Get a Free Quote | Go-Forth Christmas Lights",
    description:
      "Get an instant estimate for professional Christmas light installation in 60 seconds. No obligation, no credit card required.",
  },
};

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gf-green-dark to-gf-green px-4 py-16 text-center lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Get Your Free Estimate in 60 Seconds
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gf-cream/80">
            Answer a few questions about your home and we&apos;ll give you an instant price range.
          </p>
        </div>
      </section>

      {/* Quote Estimator */}
      <section className="bg-gf-cream px-4 py-12 lg:py-16">
        <QuoteEstimator />
      </section>

      {/* Trust badges */}
      <section className="bg-white px-4 py-10 text-center">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-gf-gray">
            <svg className="h-5 w-5 text-gf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium">No obligation</span>
          </div>
          <div className="flex items-center gap-2 text-gf-gray">
            <svg className="h-5 w-5 text-gf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="text-sm font-medium">No credit card</span>
          </div>
          <div className="flex items-center gap-2 text-gf-gray">
            <svg className="h-5 w-5 text-gf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">Just a free estimate</span>
          </div>
        </div>
      </section>
    </>
  );
}
