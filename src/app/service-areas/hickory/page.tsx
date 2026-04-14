import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import TestimonialCard from "@/components/TestimonialCard";
import AvailabilityBadge from "@/components/AvailabilityBadge";

export const metadata: Metadata = {
  title:
    "Christmas Light Installation Hickory NC | Morganton, Newton, Lenoir | Go-Forth",
  description:
    "Professional Christmas light installation in Hickory, Morganton, Newton, Lenoir, and the Catawba Valley. Commercial-grade LEDs built for foothills weather. Full-service holiday lighting by Go-Forth.",
};

const neighborhoods = [
  "Hickory",
  "Morganton",
  "Lenoir",
  "Newton",
  "Conover",
  "Granite Falls",
  "Valdese",
  "Claremont",
];

const reasons = [
  {
    title: "A Team You Already Know",
    description:
      "Go-Forth has been serving Hickory-area homeowners with trusted home services for years. Our Christmas light crews bring that same professionalism and care to every installation.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Built for Mountain Weather",
    description:
      "The foothills bring unpredictable winter conditions. Our commercial-grade LED lights and reinforced mounting systems are engineered to handle cold snaps, ice storms, and gusty winds.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Completely Hassle-Free",
    description:
      "From the initial design consultation to end-of-season takedown and storage, we handle every step. You do not have to lift a finger — or climb a ladder.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

export default function HickoryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gf-green-dark px-4 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gf-green-light)_0%,_transparent_50%)] opacity-20" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Christmas Light Installation in the{" "}
            <span className="text-gf-gold-light">Hickory Area</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Professional holiday lighting for the Catawba Valley and surrounding
            foothills. From Hickory to Morganton, we bring the holiday magic.
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
        <AvailabilityBadge area="Hickory" />
      </section>

      {/* Bringing Holiday Lights to the Foothills */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-gf-charcoal sm:text-4xl">
              Bringing Holiday Lights to the Foothills
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gf-gray">
              The Catawba Valley is known for its tight-knit communities and
              beautiful foothills scenery. Now, Go-Forth is bringing our
              professional Christmas light installation service to the Hickory
              area — giving homeowners across the region a stress-free way to
              transform their homes for the holidays. Whether you live on a
              quiet street in Newton or a sprawling property near Morganton, our
              team designs and installs a display tailored to your home.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
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
            Catawba Valley Communities We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gf-gray">
            Professional holiday lighting across the Hickory metro and
            surrounding foothills towns.
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
            What Our Hickory Area Customers Say
          </h2>
          <TestimonialCard
            quote="I never thought professional Christmas lights were in our budget, but Go-Forth made it affordable and absolutely beautiful. Our neighbors kept stopping by to ask who did our lights. We will definitely be back next year."
            name="David & Karen Mitchell"
            location="Hickory"
            rating={5}
          />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Bring the Magic to the Foothills"
        subtext="Let Go-Forth handle your holiday lighting from start to finish. Schedule your free design consultation today."
      />
    </main>
  );
}
