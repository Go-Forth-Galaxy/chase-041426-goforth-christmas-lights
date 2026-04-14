import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import TestimonialCard from "@/components/TestimonialCard";
import AvailabilityBadge from "@/components/AvailabilityBadge";

export const metadata: Metadata = {
  title:
    "Christmas Light Installation Lake Norman | Mooresville, Cornelius, Davidson | Go-Forth",
  description:
    "Professional Christmas light installation for Lake Norman homes in Mooresville, Cornelius, Davidson, Huntersville, and Denver. Commercial-grade LEDs, full-service design, and season-long maintenance by Go-Forth.",
};

const neighborhoods = [
  "Mooresville",
  "Cornelius",
  "Davidson",
  "Huntersville",
  "Denver",
  "Statesville",
  "Troutman",
  "Sherrills Ford",
];

const reasons = [
  {
    title: "Local Presence You Can Count On",
    description:
      "Our Mooresville office at 552 Williamson Rd has been serving the Lake Norman community since 2011. When you need us, we're right around the corner.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Built for Lakefront Conditions",
    description:
      "Our commercial-grade LED lights and heavy-duty mounting systems are specifically designed to withstand the strong winds that sweep across Lake Norman.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "The Name You Already Trust",
    description:
      "Go-Forth has been protecting Lake Norman homes for years. Now we bring that same commitment to quality to your holiday lighting.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function LakeNormanPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gf-green-dark px-4 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-gf-green-light)_0%,_transparent_60%)] opacity-30" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Christmas Light Installation in{" "}
            <span className="text-gf-gold-light">Lake Norman</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            From lakefront estates to charming neighborhoods in Mooresville,
            Cornelius, Davidson, Huntersville, Statesville, and Denver — we make
            your home shine.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="rounded-lg bg-gf-gold px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-gf-gold-light hover:shadow-xl"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:+18772741475"
              className="text-lg font-semibold text-white/90 transition-colors hover:text-white"
            >
              or call (877) 274-1475
            </a>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="flex justify-center bg-gf-cream px-4 py-6">
        <AvailabilityBadge area="Lake Norman" />
      </section>

      {/* Why Lake Norman Chooses Go-Forth */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold text-gf-charcoal sm:text-4xl">
            Why Lake Norman Chooses Go-Forth
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gf-gray">
            We are not just another holiday lighting company. We are your neighbors,
            with a permanent office right here in Mooresville.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-xl border border-gf-gray-light bg-gf-cream p-8 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gf-green text-white">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gf-charcoal">
                  {reason.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gf-gray">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-gf-gray-light px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold text-gf-charcoal sm:text-4xl">
            Lake Norman Neighborhoods We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gf-gray">
            Professional Christmas light installation throughout the greater
            Lake Norman region.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {neighborhoods.map((name) => (
              <span
                key={name}
                className="rounded-full border border-gf-green/20 bg-white px-5 py-2.5 text-sm font-semibold text-gf-green shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-gf-charcoal">
            What Our Lake Norman Customers Say
          </h2>
          <TestimonialCard
            quote="Our Lake Norman home looks absolutely magical every Christmas. Go-Forth handles everything — design, installation, and they even came back to fix a strand after a wind storm. Incredible service."
            name="The Reynolds Family"
            location="Cornelius"
            rating={5}
          />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Light Up Your Lake Norman Home"
        subtext="Join hundreds of Lake Norman families who trust Go-Forth for their holiday lighting. Free design consultation — no obligation."
      />
    </main>
  );
}
