import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Christmas Light Installation Service Areas | Go-Forth",
  description:
    "Professional Christmas light installation across North Carolina. Serving Lake Norman, the Triad, Hickory, and the High Country.",
  alternates: { canonical: "/service-areas" },
};

const areas = [
  {
    name: "Lake Norman",
    cities: ["Mooresville", "Cornelius", "Davidson", "Huntersville"],
    description:
      "From lakefront estates to charming neighborhoods, we bring holiday magic to the Lake Norman area.",
    href: "/service-areas/lake-norman",
  },
  {
    name: "Triad",
    cities: ["Greensboro", "Winston-Salem", "High Point"],
    description:
      "Our home territory since 1959. Professional holiday lighting for the Triad's finest homes and businesses.",
    href: "/service-areas/triad",
  },
  {
    name: "Hickory",
    cities: ["Hickory", "Morganton", "Lenoir", "Newton"],
    description:
      "Bringing professional Christmas light installation to the Catawba Valley and surrounding foothills.",
    href: "/service-areas/hickory",
  },
  {
    name: "Boone / High Country",
    cities: ["Boone", "Blowing Rock", "Banner Elk"],
    description:
      "Holiday lights that shine bright in the High Country. Mountain homes deserve mountain-grade installation.",
    href: "/service-areas/boone",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gf-green-dark via-gf-green to-gf-green-light py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
            Our Service Areas
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Professional Christmas light installation across North Carolina. From the shores of
            Lake Norman to the peaks of the High Country.
          </p>
        </div>
      </section>

      {/* Service Area Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="group block rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md hover:border-gf-green/30 transition-all duration-200"
              >
                <h2 className="text-2xl font-bold text-gf-green font-[family-name:var(--font-display)] group-hover:text-gf-green-dark transition-colors">
                  {area.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-gf-gold tracking-wide uppercase">
                  {area.cities.join(", ")}
                </p>
                <p className="mt-4 text-gf-gray leading-relaxed">{area.description}</p>
                <span className="mt-5 inline-flex items-center text-sm font-medium text-gf-green group-hover:translate-x-1 transition-transform duration-200">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gf-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]">
            Don&apos;t See Your Area?
          </h2>
          <p className="mt-4 text-gf-gray text-lg">
            Call us — we may still be able to help.
          </p>
          <a
            href="tel:+18772741475"
            className="mt-6 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gf-gold text-white hover:bg-gf-gold-light hover:text-gf-charcoal transition-colors duration-200"
          >
            (877) 274-1475
          </a>
        </div>
      </section>
    </>
  );
}
