"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import basePath, { img } from "@/lib/basePath";
import CTABanner from "@/components/CTABanner";

const inflatablePackages = [
  {
    name: "Starter",
    price: "$299",
    highlighted: false,
    features: [
      "1 large inflatable (up to 8 ft tall)",
      "Professional placement & anchoring",
      "Timer setup for auto on/off",
      "Season-long maintenance",
      "Removal & storage",
    ],
    perfectFor: "Adding a fun holiday focal point to your yard",
    cta: "Get Starter Quote",
  },
  {
    name: "Family Fun",
    price: "$599",
    highlighted: true,
    features: [
      "Everything in Starter, plus:",
      "Up to 3 inflatables (mixed sizes)",
      "Coordinated yard layout design",
      "LED spotlights to illuminate inflatables after dark",
      "Stakes, sandbags & all hardware",
      "Weather monitoring & re-inflation",
    ],
    perfectFor: "Families who want a yard the kids (and neighbors) love",
    cta: "Get Family Fun Quote",
  },
  {
    name: "Winter Wonderland",
    price: "$999",
    highlighted: false,
    features: [
      "Everything in Family Fun, plus:",
      "Up to 6 inflatables",
      "Custom themed arrangement",
      "Pathway integration with inflatables",
      "Premium XL inflatables available (12ft+)",
      "Priority scheduling — first in line for install dates and same-day maintenance",
    ],
    perfectFor: "Homes that want the ultimate holiday yard display",
    cta: "Get Wonderland Quote",
  },
];

const inflatableTypes = [
  {
    name: "Classic Characters",
    description: "Santa, snowmen, reindeer, and more holiday favorites.",
    image: img("/images/inflatables/santa.jpg"),
  },
  {
    name: "Snow Globes",
    description: "6–12 ft animated snow globes with built-in swirling snow effects and LED lighting.",
    image: img("/images/inflatables/snowglobe.jpg"),
  },
  {
    name: "Archways",
    description: "Walk-through candy cane arches and holiday-themed tunnels. Perfect for driveways, walkways, or front yard entrances.",
    image: img("/images/inflatables/archway.jpg"),
  },
  {
    name: "Winter Wonderland Sets",
    description: "Complete themed yard displays with multiple coordinated inflatables.",
    image: img("/images/inflatables/wonderland.jpg"),
  },
  {
    name: "Professional Installation",
    description: "Our trained crew handles delivery, setup, anchoring, and season-long maintenance.",
    image: img("/images/inflatables/installation.jpg"),
  },
  {
    name: "Full Holiday Packages",
    description: "Combine inflatables with roofline lights, trees, and pathway lighting for the complete look.",
    image: img("/images/inflatables/hero.jpg"),
  },
];

const faqs = [
  {
    question: "Do inflatables stay inflated 24/7?",
    answer:
      "No — our inflatables run on timers, so they inflate each evening and deflate overnight automatically. If one ever fails to inflate, our maintenance team will address it — usually within 24 hours.",
  },
  {
    question: "Will inflatables damage my lawn?",
    answer:
      "No. We use professional ground stakes and sandbag anchors that leave minimal impact. After removal, any minor impressions recover within a week or two.",
  },
  {
    question: "Can I combine inflatables with a lighting package?",
    answer:
      "Absolutely! Most customers pair inflatables with roofline lighting. We offer bundled pricing — ask for a combo quote to save.",
  },
  {
    question: "Do you provide the inflatables or do I need to buy them?",
    answer:
      "We own and maintain the inflatables. Our commercial-grade units are brighter, more durable, and larger than retail options. First-year pricing covers your custom set; returning customers save 20–30% since everything's already in storage.",
  },
  {
    question: "How do they hold up in wind and rain?",
    answer:
      "Our commercial-grade inflatables are rated for winds up to 35 mph. In the rare event of severe weather (35+ mph winds, ice storms), our team proactively secures or temporarily removes units. We monitor weather forecasts throughout the season.",
  },
];

function Snowflake({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11 1v4.07A6.015 6.015 0 008.5 6.32L5.71 3.54 4.29 4.96l3.09 3.09A5.96 5.96 0 006.07 11H2v2h4.07a5.96 5.96 0 001.31 2.95l-3.09 3.09 1.42 1.42 2.79-2.78A6.015 6.015 0 0011 18.93V23h2v-4.07a6.015 6.015 0 002.5-1.25l2.79 2.78 1.42-1.42-3.09-3.09A5.96 5.96 0 0017.93 13H22v-2h-4.07a5.96 5.96 0 00-1.31-2.95l3.09-3.09-1.42-1.42-2.79 2.78A6.015 6.015 0 0013 5.07V1h-2zm1 7a4 4 0 110 8 4 4 0 010-8z" />
    </svg>
  );
}

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

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

export default function InflatablesPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-label="Inflatables hero"
        className="relative overflow-hidden px-6 py-24 text-center sm:py-32 min-h-[500px] flex items-center justify-center"
      >
        {/* Hero background image */}
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src={img("/images/inflatables/hero.jpg")}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-gf-red-dark/80 via-[#4a0000]/70 to-[#1a0000]/80" />

        <Snowflake className="absolute left-[8%] top-[15%] h-8 w-8 text-white/[0.07] animate-pulse" />
        <Snowflake className="absolute right-[12%] top-[25%] h-12 w-12 text-white/[0.05]" />
        <Snowflake className="absolute left-[20%] bottom-[20%] h-6 w-6 text-white/[0.08]" />
        <Snowflake className="absolute right-[25%] bottom-[15%] h-10 w-10 text-white/[0.06] animate-pulse" />
        <Snowflake className="absolute left-[50%] top-[10%] h-5 w-5 text-white/[0.07]" />

        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gf-gold mb-4">
            New Service
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Holiday Inflatables
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            15-foot Santas. Walk-through archways. Snow globe shows.
            Professionally installed and maintained all season.
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gf-gold/50" />
            <svg className="h-5 w-5 text-gf-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gf-gold/50" />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-lg bg-gf-gold text-white shadow-lg transition-all duration-300 hover:bg-gf-gold-light hover:text-gf-charcoal hover:shadow-[0_0_30px_rgba(212,168,67,0.5)]"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:+18772741475"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-lg border-2 border-white/30 text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Call (877) 274-1475
            </a>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section aria-labelledby="types-heading" className="bg-gf-cream px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gf-gold mb-3">
              Our Collection
            </span>
            <h2
              id="types-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal sm:text-4xl"
            >
              Inflatables for Every Style
            </h2>
            <p className="mt-4 text-lg text-gf-gray max-w-2xl mx-auto">
              Choose from our curated selection of commercial-grade holiday inflatables, or let our
              design team recommend the perfect combination for your yard.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {inflatableTypes.map((type) => (
              <div
                key={type.name}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gf-gold/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-lg font-bold text-white drop-shadow-lg">{type.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gf-gray leading-relaxed">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section aria-labelledby="inflatable-how" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gf-gold mb-3">
              Simple Process
            </span>
            <h2
              id="inflatable-how"
              className="font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal sm:text-4xl"
            >
              How It Works
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Pick Your Style", desc: "Choose from our collection or tell us your vision — we'll handle the rest.", icon: "🎨" },
              { num: "2", title: "We Design & Deliver", desc: "Our team creates a yard layout and delivers all inflatables and hardware.", icon: "🚚" },
              { num: "3", title: "Professional Setup", desc: "We install, anchor, and test everything. Timer-controlled for hands-free operation.", icon: "⚡" },
              { num: "4", title: "Enjoy the Season", desc: "We maintain all season, then remove and store everything after the holidays.", icon: "🎄" },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gf-cream">
                  <span className="text-3xl" aria-hidden="true">{step.icon}</span>
                </div>
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold mb-3 shadow-md"
                  style={{ background: "linear-gradient(135deg, #d4a843 0%, #f0d078 100%)" }}
                >
                  {step.num}
                </span>
                <h3 className="text-base font-semibold text-gf-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm text-gf-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-4 bg-gf-cream px-6 py-4">
        <span className="h-px w-24 bg-gradient-to-r from-transparent to-gf-gold/30" />
        <Snowflake className="h-5 w-5 text-gf-gold/30" />
        <span className="h-px w-24 bg-gradient-to-l from-transparent to-gf-gold/30" />
      </div>

      {/* Packages */}
      <section aria-labelledby="inflatable-packages" className="bg-gf-cream px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gf-gold mb-3">
              Pricing
            </span>
            <h2
              id="inflatable-packages"
              className="font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal sm:text-4xl"
            >
              Inflatable Packages
            </h2>
            <p className="mt-4 text-lg text-gf-gray max-w-2xl mx-auto">
              All packages include delivery, professional installation, season-long maintenance, and
              removal with storage.
            </p>
          </div>

          <div className="grid items-stretch gap-8 md:grid-cols-3">
            {inflatablePackages.map((pkg) => (
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

                <div className={`mb-6 h-px ${pkg.highlighted ? "bg-gradient-to-r from-transparent via-gf-gold/30 to-transparent" : "bg-gray-200"}`} />

                <ul className="mb-8 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="group/item flex items-start gap-3 text-gf-charcoal">
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

      {/* Bundle CTA */}
      <section className="relative overflow-hidden py-20">
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src={img("/images/inflatables/wonderland.jpg")}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-gf-red-dark/90 to-gf-red/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            Bundle &amp; Save
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Save up to 15% when you bundle lights + inflatables — most customers do.
            Get the full holiday experience — lights on the house, inflatables in the yard.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-gf-gold text-white shadow-lg hover:bg-gf-gold-light hover:text-gf-charcoal transition-all duration-300"
            >
              Get a Bundle Quote
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              View All Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-4 bg-white px-6 py-4">
        <span className="h-px w-24 bg-gradient-to-r from-transparent to-gf-gold/30" />
        <Snowflake className="h-5 w-5 text-gf-gold/30" />
        <span className="h-px w-24 bg-gradient-to-l from-transparent to-gf-gold/30" />
      </div>

      {/* FAQ */}
      <section aria-labelledby="inflatable-faq" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2
            id="inflatable-faq"
            className="font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal text-center"
          >
            Inflatable FAQs
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

      {/* CTA */}
      <CTABanner
        headline="Ready to Make Your Yard the Talk of the Neighborhood?"
        subtext="Request a free quote for holiday inflatables, or bundle with a lighting package to save."
      />

      {/* Extra CTA links */}
      <section className="bg-gf-red-dark px-6 py-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-gf-gold to-gf-gold-light px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-gf-gold/25 transition-all duration-300 hover:shadow-xl hover:shadow-gf-gold/30 hover:-translate-y-0.5"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            View All Pricing
          </Link>
        </div>
      </section>
    </>
  );
}
