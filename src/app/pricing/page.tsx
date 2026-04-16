"use client";

import { useState } from "react";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const packages = [
  {
    name: "Classic",
    price: "$599",
    highlighted: false,
    features: [
      "Roofline lighting (up to 150 linear ft)",
      "Commercial-grade warm white LEDs",
      "Professional installation",
      "Season-long maintenance",
      "Removal & storage",
    ],
    perfectFor: "Homes that want clean, elegant holiday lighting",
    cta: "Get Classic Quote",
  },
  {
    name: "Premium",
    price: "$1,199",
    highlighted: true,
    features: [
      "Everything in Classic, plus:",
      "Extended roofline (up to 250 linear ft)",
      "Up to 3 trees wrapped",
      "Front door wreath & garland",
      "Window accents",
      "Custom color selection",
    ],
    perfectFor: "Homes that want to stand out on the block",
    cta: "Get Premium Quote",
  },
  {
    name: "Showstopper",
    price: "$2,499",
    highlighted: false,
    features: [
      "Everything in Premium, plus:",
      "Unlimited roofline footage",
      "Up to 6 trees wrapped",
      "Pathway lighting",
      "Additional wreaths & garlands",
      "Custom design consultation",
      "Priority scheduling",
    ],
    perfectFor: "Homes that want the best display in the neighborhood",
    cta: "Get Showstopper Quote",
  },
];

const additionalServices = [
  { service: "Additional tree wrapping", price: "$150\u2013$300 per tree" },
  { service: "Wreaths", price: "$50\u2013$100 each" },
  { service: "Garland (per foot)", price: "$5\u2013$10" },
  { service: "Pathway/walkway lighting", price: "$3\u2013$5 per foot" },
  { service: "Custom elements", price: "Contact for pricing" },
  { service: "Commercial properties", price: "Contact for custom quote" },
];

const faqs = [
  {
    question: "Aren\u2019t store-bought lights cheaper?",
    answer:
      "Yes, but they\u2019re not commercial-grade, don\u2019t include installation, and you\u2019re climbing a ladder. Our lights last 10+ seasons.",
  },
  {
    question: "Why is the first year more expensive?",
    answer:
      "First-year cost includes the lights themselves. Returning customers save 20\u201330% because we already have your lights in storage.",
  },
  {
    question: "Do I need to provide anything?",
    answer:
      "No. We provide everything: lights, clips, extension cords, timers, and all hardware. You provide the house.",
  },
  {
    question: "What if I want to change my design next year?",
    answer:
      "No problem. We can modify your design each season. Design consultations are always free.",
  },
];

/* ------------------------------------------------------------------ */
/* Snowflake SVG                                                       */
/* ------------------------------------------------------------------ */

function Snowflake({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11 1v4.07A6.015 6.015 0 008.5 6.32L5.71 3.54 4.29 4.96l3.09 3.09A5.96 5.96 0 006.07 11H2v2h4.07a5.96 5.96 0 001.31 2.95l-3.09 3.09 1.42 1.42 2.79-2.78A6.015 6.015 0 0011 18.93V23h2v-4.07a6.015 6.015 0 002.5-1.25l2.79 2.78 1.42-1.42-3.09-3.09A5.96 5.96 0 0017.93 13H22v-2h-4.07a5.96 5.96 0 00-1.31-2.95l3.09-3.09-1.42-1.42-2.79 2.78A6.015 6.015 0 0013 5.07V1h-2zm1 7a4 4 0 110 8 4 4 0 010-8z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Check icon                                                          */
/* ------------------------------------------------------------------ */

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ Accordion Item                                                  */
/* ------------------------------------------------------------------ */

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-md">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-gf-charcoal pr-4">{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open ? "bg-gf-red text-white rotate-180" : "bg-gf-gray-light text-gf-gray"
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5">
            <div className="h-px w-full bg-gradient-to-r from-gf-gold/30 via-gf-gold/10 to-transparent mb-4" />
            <p className="leading-relaxed text-gf-gray">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-label="Pricing hero"
        className="relative overflow-hidden bg-gradient-to-br from-gf-red-dark via-gf-red to-gf-red-light px-6 py-24 text-center sm:py-32"
      >
        {/* Decorative snowflakes */}
        <Snowflake className="absolute left-[8%] top-[15%] h-8 w-8 text-white/[0.07] animate-pulse" />
        <Snowflake className="absolute right-[12%] top-[25%] h-12 w-12 text-white/[0.05]" />
        <Snowflake className="absolute left-[20%] bottom-[20%] h-6 w-6 text-white/[0.08]" />
        <Snowflake className="absolute right-[25%] bottom-[15%] h-10 w-10 text-white/[0.06] animate-pulse" />
        <Snowflake className="absolute left-[50%] top-[10%] h-5 w-5 text-white/[0.07]" />

        {/* Gradient shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.03] to-transparent" />

        <div className="relative mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Transparent Pricing. No Surprises.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            We believe you deserve to know what to expect before you call.
            Here&rsquo;s what professional Christmas light installation
            typically costs.
          </p>

          {/* Decorative divider */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gf-gold/50" />
            <svg className="h-5 w-5 text-gf-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gf-gold/50" />
          </div>
        </div>
      </section>

      {/* How Our Pricing Works */}
      <section
        aria-labelledby="pricing-how"
        className="bg-gf-cream px-6 py-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="pricing-how"
            className="font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal"
          >
            How Our Pricing Works
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gf-gold/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-gf-gold/40" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gf-gold/40" />
          </div>
          <p className="mt-6 text-lg leading-relaxed text-gf-gray">
            Our pricing is based on the linear footage of your roofline, the
            complexity of your design, and any additional features like tree
            wrapping or wreaths. Every package includes commercial-grade LED
            lights, professional installation, season-long maintenance, safe
            removal, and storage.
          </p>
        </div>
      </section>

      {/* Package Cards */}
      <section
        aria-labelledby="packages-heading"
        className="bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="packages-heading" className="sr-only">
            Packages
          </h2>
          <div className="grid items-stretch gap-8 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`group relative flex flex-col rounded-2xl border-2 p-8 transition-all duration-300 hover:-translate-y-1 ${
                  pkg.highlighted
                    ? "z-10 border-gf-gold bg-gradient-to-b from-gf-warm-white to-white shadow-xl shadow-gf-gold/15 md:-my-4 md:p-10"
                    : "border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-gf-red/30"
                }`}
              >
                {pkg.highlighted && (
                  <>
                    {/* Gold glow effect */}
                    <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-b from-gf-gold/20 via-gf-gold/5 to-transparent blur-sm" />
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gf-gold to-gf-gold-light px-5 py-1.5 text-sm font-bold text-white shadow-lg shadow-gf-gold/25">
                      Most Popular
                    </span>
                  </>
                )}

                <div className="mb-6 text-center">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gf-charcoal">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-sm text-gf-gray">Starting at</p>
                  <p className={`text-4xl font-bold ${pkg.highlighted ? "text-gf-gold" : "text-gf-red"} sm:text-5xl`}>
                    {pkg.price}
                  </p>
                </div>

                {/* Divider */}
                <div className={`mb-6 h-px ${pkg.highlighted ? "bg-gradient-to-r from-transparent via-gf-gold/30 to-transparent" : "bg-gray-200"}`} />

                <ul className="mb-8 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="group/item flex items-start gap-3 text-gf-charcoal"
                    >
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover/item:scale-110 ${
                        pkg.highlighted ? "bg-gf-gold/10 text-gf-gold" : "bg-gf-red/10 text-gf-red"
                      }`}>
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mb-6 rounded-lg bg-gf-cream/70 px-4 py-2 text-center text-sm text-gf-gray italic">
                  Perfect for: {pkg.perfectFor}
                </p>

                <Link
                  href="/quote"
                  className={`block rounded-xl px-6 py-3.5 text-center font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                    pkg.highlighted
                      ? "bg-gradient-to-r from-gf-gold to-gf-gold-light text-white shadow-lg shadow-gf-gold/25 hover:shadow-xl hover:shadow-gf-gold/30"
                      : "bg-gf-red text-white shadow-md hover:bg-gf-red-light hover:shadow-lg"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative section divider */}
      <div className="flex items-center justify-center gap-4 bg-gf-cream px-6 py-4">
        <span className="h-px w-24 bg-gradient-to-r from-transparent to-gf-gold/30" />
        <Snowflake className="h-5 w-5 text-gf-gold/30" />
        <span className="h-px w-24 bg-gradient-to-l from-transparent to-gf-gold/30" />
      </div>

      {/* Additional Services */}
      <section
        aria-labelledby="additional-heading"
        className="bg-gf-cream px-6 py-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="additional-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal text-center"
          >
            Additional Services
          </h2>
          <div className="mx-auto mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gf-gold/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-gf-gold/40" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gf-gold/40" />
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-gf-red to-gf-red-light">
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-white">
                    Service
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider text-white">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {additionalServices.map((item, i) => (
                  <tr
                    key={item.service}
                    className={`border-b border-gray-100 transition-colors duration-200 hover:bg-gf-red/[0.03] ${
                      i % 2 === 0 ? "bg-white" : "bg-gf-red/[0.02]"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-gf-charcoal">
                      {item.service}
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-gf-red">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Wreaths & Garland Callout */}
      <section className="bg-gradient-to-r from-gf-red-dark to-gf-red px-6 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gf-gold">
            Popular Add-On
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-white sm:text-3xl">
            Complete the Look with Wreaths &amp; Garland
          </h2>
          <p className="mt-3 text-white/80">
            Add lush, professionally installed wreaths and garland to any lighting package. The finishing touch every home deserves.
          </p>
          <Link
            href="/quote"
            className="mt-6 inline-flex items-center rounded-xl bg-gf-gold px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-gf-gold-light hover:text-gf-charcoal hover:-translate-y-0.5"
          >
            Add to My Quote
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Decorative section divider */}
      <div className="flex items-center justify-center gap-4 bg-white px-6 py-4">
        <span className="h-px w-24 bg-gradient-to-r from-transparent to-gf-gold/30" />
        <Snowflake className="h-5 w-5 text-gf-gold/30" />
        <span className="h-px w-24 bg-gradient-to-l from-transparent to-gf-gold/30" />
      </div>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2
            id="faq-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal text-center"
          >
            &ldquo;Why Isn&rsquo;t It Cheaper?&rdquo;
          </h2>
          <div className="mx-auto mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gf-gold/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-gf-gold/40" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gf-gold/40" />
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Not Sure Which Package? Try Our 60-Second Quiz"
        subtext="Take our style quiz to find the perfect package for your home, or request a custom quote from our design team."
      />

      {/* Extra CTA links */}
      <section className="bg-gf-red-dark px-6 py-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/style-quiz"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-gf-gold to-gf-gold-light px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-gf-gold/25 transition-all duration-300 hover:shadow-xl hover:shadow-gf-gold/30 hover:-translate-y-0.5"
          >
            Take the Style Quiz
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
