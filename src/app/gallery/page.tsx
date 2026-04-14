import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Christmas Light Installation Gallery | Go-Forth",
  description:
    "Browse our gallery of professional Christmas light installations across Lake Norman, the Triad, Hickory, and Boone NC. See real projects from residential and commercial properties.",
  openGraph: {
    title: "Christmas Light Installation Gallery | Go-Forth",
    description:
      "Browse real Christmas light installations from homes and businesses across North Carolina.",
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gf-green-dark to-gf-green px-4 py-16 text-center lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our Work Speaks for Itself
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gf-cream/80">
            Browse real installations from homes across Lake Norman, the Triad, and Western NC.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gf-cream px-4 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid />
        </div>
      </section>

      {/* CTA */}
      <CTABanner headline="Want Results Like These?" />
    </>
  );
}
