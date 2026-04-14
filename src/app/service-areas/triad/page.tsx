import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import basePath from "@/lib/basePath";
import CTABanner from "@/components/CTABanner";
import TestimonialCard from "@/components/TestimonialCard";
import AvailabilityBadge from "@/components/AvailabilityBadge";

export const metadata: Metadata = {
  title:
    "Christmas Light Installation Greensboro, Winston-Salem, High Point | Go-Forth",
  description:
    "Professional Christmas light installation in Greensboro, Winston-Salem, High Point, and surrounding Triad communities. Headquartered in High Point since 1959. Commercial-grade LEDs and full-service holiday lighting by Go-Forth.",
};

const neighborhoods = [
  "Greensboro",
  "Winston-Salem",
  "High Point",
  "Kernersville",
  "Burlington",
  "Thomasville",
  "Lexington",
  "Archdale",
  "Oak Ridge",
  "Summerfield",
];

const reasons = [
  {
    title: "Headquartered Here Since 1959",
    description:
      "Go-Forth was founded right here in the Triad. Our High Point headquarters isn't just an address — it's where our story began over 60 years ago.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Fastest Response Times",
    description:
      "We are right down the road. When you need a maintenance visit or a quick adjustment, our local crews can be at your door faster than anyone.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Trusted by Thousands of Families",
    description:
      "Triad homeowners have relied on Go-Forth for home services for decades. Our Christmas light division carries that same legacy of trust and quality.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function TriadPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gf-red-dark px-4 py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${basePath}/images/service-areas/triad.jpg`}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gf-red-dark/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-gf-red-light)_0%,_transparent_60%)] opacity-30" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Christmas Light Installation in the{" "}
            <span className="text-gf-gold-light">Triad</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Professional holiday lighting for Greensboro, Winston-Salem, High
            Point, and surrounding communities. Proudly serving the Triad since
            1959.
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
        <AvailabilityBadge area="Triad" />
      </section>

      {/* Our Home Territory */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-gf-charcoal sm:text-4xl">
              Our Home Territory
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gf-gray">
              This is where Go-Forth started over 60 years ago. Our High Point
              headquarters means faster response times, local teams who know
              every neighborhood, and neighbors taking care of neighbors. When
              you choose Go-Forth for your Christmas lights, you are choosing a
              company that has deep roots in this community.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-xl border border-gf-gray-light bg-gf-cream p-8 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gf-red text-white">
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
            Triad Communities We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gf-gray">
            From downtown Greensboro to the rolling hills of the Piedmont, we
            bring professional holiday lighting to every corner of the Triad.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {neighborhoods.map((name) => (
              <span
                key={name}
                className="rounded-full border border-gf-red/20 bg-white px-5 py-2.5 text-sm font-semibold text-gf-red shadow-sm"
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
            What Our Triad Customers Say
          </h2>
          <TestimonialCard
            quote="We have used Go-Forth for pest control for years, so when we heard they offered Christmas lights, it was an easy decision. The team was professional, on time, and our house has never looked better during the holidays."
            name="Mark & Lisa Patterson"
            location="Greensboro"
            rating={5}
          />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Make This the Triad's Brightest Season"
        subtext="From our home to yours — let Go-Forth bring the holiday magic. Free design consultation, no obligation."
      />
    </main>
  );
}
