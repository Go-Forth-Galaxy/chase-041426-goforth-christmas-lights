import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import basePath, { img } from "@/lib/basePath";
import ServiceAreaMap from "@/components/ServiceAreaMap";

export const metadata: Metadata = {
  title: "Christmas Light Installation Service Areas | Go-Forth",
  description:
    "Professional Christmas light installation across North Carolina. Serving Lake Norman, the Triad, Hickory, and the High Country.",
  alternates: { canonical: "/service-areas" },
};

const areas = [
  {
    name: "Lake Norman",
    cities: ["Mooresville", "Cornelius", "Davidson", "Huntersville", "Denver", "Sherrills Ford", "Troutman", "Statesville"],
    description:
      "From lakefront estates to charming neighborhoods, we bring holiday magic to the Lake Norman area.",
    href: "/service-areas/lake-norman",
    image: img("/images/service-areas/lake-norman.jpg"),
  },
  {
    name: "Triad",
    cities: ["Greensboro", "Winston-Salem", "High Point", "Kernersville", "Burlington", "Clemmons", "Thomasville", "Jamestown"],
    description:
      "Our home territory since 1959. Professional holiday lighting for the Triad's finest homes and businesses.",
    href: "/service-areas/triad",
    image: img("/images/service-areas/triad.jpg"),
  },
  {
    name: "Hickory",
    cities: ["Hickory", "Morganton", "Lenoir", "Newton", "Conover", "Valdese", "Granite Falls"],
    description:
      "From downtown storefronts to foothill estates — we light up the Catawba Valley.",
    href: "/service-areas/hickory",
    image: img("/images/service-areas/hickory.jpg"),
  },
  {
    name: "Boone / High Country",
    cities: ["Boone", "Blowing Rock", "Banner Elk", "Fleetwood", "Wilkesboro", "North Wilkesboro"],
    description:
      "Holiday lights that shine bright in the High Country. Rated for mountain winds, steep rooflines, and elevation changes.",
    href: "/service-areas/boone",
    image: img("/images/service-areas/boone.jpg"),
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gf-red-dark via-gf-red to-gf-red-light py-20">
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
                className="group block rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-gf-red/30 transition-all duration-200 overflow-hidden"
              >
                {/* Area image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={area.image}
                    alt={`Christmas lights in ${area.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gf-red font-[family-name:var(--font-display)] group-hover:text-gf-red-dark transition-colors">
                    {area.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-gf-gold tracking-wide uppercase">
                    {area.cities.join(", ")}
                  </p>
                  <p className="mt-4 text-gf-gray leading-relaxed">{area.description}</p>
                  <span className="mt-5 inline-flex items-center text-sm font-medium text-gf-red group-hover:translate-x-1 transition-transform duration-200">
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <ServiceAreaMap />

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
