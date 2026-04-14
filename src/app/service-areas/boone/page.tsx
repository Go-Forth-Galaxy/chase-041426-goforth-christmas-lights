import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import TestimonialCard from "@/components/TestimonialCard";
import AvailabilityBadge from "@/components/AvailabilityBadge";

export const metadata: Metadata = {
  title:
    "Christmas Light Installation Boone NC | Blowing Rock, Banner Elk | Go-Forth",
  description:
    "Professional Christmas light installation in Boone, Blowing Rock, Banner Elk, and the NC High Country. Commercial-grade materials rated for mountain weather. Full-service holiday lighting by Go-Forth.",
};

const neighborhoods = [
  "Boone",
  "Blowing Rock",
  "Banner Elk",
  "Linville",
  "Sugar Mountain",
  "Beech Mountain",
  "Valle Crucis",
  "West Jefferson",
];

const reasons = [
  {
    title: "Mountain-Rated Materials",
    description:
      "Standard holiday lights cannot survive at altitude. Our commercial-grade LEDs, UV-resistant wiring, and heavy-duty clips are rated for extreme cold, sustained high winds, ice loading, and heavy snowfall.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "High-Altitude Expertise",
    description:
      "Mountain homes come with steep rooflines, exposed ridges, and challenging terrain. Our crews are trained specifically for high-altitude installations where safety and precision matter most.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Season-Long Mountain Warranty",
    description:
      "Winter in the High Country is no joke. Our full warranty and maintenance plan covers your display through the entire season — even after the toughest mountain storms.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function BoonePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gf-red-dark px-4 py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/service-areas/boone.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gf-red-dark/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-gf-red-light)_0%,_transparent_50%)] opacity-25" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Christmas Light Installation in the{" "}
            <span className="text-gf-gold-light">High Country</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Mountain homes deserve mountain-grade installation. Professional
            holiday lighting for Boone, Blowing Rock, Banner Elk, and the
            surrounding High Country.
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
        <AvailabilityBadge area="High Country" />
      </section>

      {/* Built for Mountain Weather */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-gf-charcoal sm:text-4xl">
              Built for Mountain Weather
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gf-gray">
              The High Country is one of the most beautiful — and most demanding
              — places to install Christmas lights. Temperatures that plunge
              well below freezing, winds that gust over mountain ridges, ice
              that coats every surface, and heavy snowfall that can bring down
              lesser installations. That is exactly why Go-Forth uses only
              commercial-grade materials rated for extreme conditions. Our
              mounting systems, wiring, and LED bulbs are the same products
              trusted by large-scale commercial displays. Mountain installations
              require special expertise, and our crews are trained for it.
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
            High Country Communities We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gf-gray">
            From charming mountain towns to ski resort communities, we bring
            professional holiday lighting throughout the High Country.
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
            What Our High Country Customers Say
          </h2>
          <TestimonialCard
            quote="Living at elevation, we were worried about lights surviving the winter. Go-Forth used heavy-duty everything and our display looked perfect from Thanksgiving through New Year's — even after two ice storms. Worth every penny."
            name="The Caldwell Family"
            location="Blowing Rock"
            rating={5}
          />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Light Up the Mountains This Christmas"
        subtext="Mountain-grade installation for mountain homes. Schedule your free design consultation before spots fill up."
      />
    </main>
  );
}
