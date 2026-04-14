"use client";

import { useState } from "react";
import Link from "next/link";

interface Region {
  id: string;
  name: string;
  cities: string[];
  mapQuery: string;
  href: string;
  phone: string;
}

const regions: Region[] = [
  {
    id: "lake-norman",
    name: "Lake Norman",
    cities: [
      "Mooresville", "Cornelius", "Davidson", "Huntersville", "Denver",
      "Sherrills Ford", "Troutman", "Statesville", "Stanley", "Terrell",
    ],
    mapQuery: "Lake+Norman,+NC",
    href: "/service-areas/lake-norman",
    phone: "(877) 274-1475",
  },
  {
    id: "triad",
    name: "Triad",
    cities: [
      "Greensboro", "Winston-Salem", "High Point", "Kernersville", "Burlington",
      "Clemmons", "Thomasville", "Jamestown", "Lexington", "Summerfield",
      "Archdale", "Lewisville",
    ],
    mapQuery: "Greensboro,+High+Point,+Winston-Salem,+NC",
    href: "/service-areas/triad",
    phone: "(877) 274-1475",
  },
  {
    id: "hickory",
    name: "Hickory",
    cities: [
      "Hickory", "Morganton", "Lenoir", "Newton", "Conover",
      "Valdese", "Granite Falls", "Long View", "Hudson",
    ],
    mapQuery: "Hickory,+NC",
    href: "/service-areas/hickory",
    phone: "(877) 274-1475",
  },
  {
    id: "boone",
    name: "Boone / High Country",
    cities: [
      "Boone", "Blowing Rock", "Banner Elk", "Fleetwood",
      "Wilkesboro", "North Wilkesboro",
    ],
    mapQuery: "Boone,+NC",
    href: "/service-areas/boone",
    phone: "(877) 274-1475",
  },
];

function RegionSchema({ region }: { region: Region }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Go-Forth Christmas Lights — ${region.name}`,
    description: `Professional Christmas light installation in ${region.cities.join(", ")}, NC.`,
    telephone: "+18772741475",
    url: `https://lights.go-forth.com${region.href}`,
    areaServed: region.cities.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "North Carolina" },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Christmas Light Installation",
      itemListElement: [
        { "@type": "Offer", name: "Classic Package", price: "599", priceCurrency: "USD" },
        { "@type": "Offer", name: "Premium Package", price: "1199", priceCurrency: "USD" },
        { "@type": "Offer", name: "Showstopper Package", price: "2499", priceCurrency: "USD" },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ServiceAreaMap() {
  const [activeRegion, setActiveRegion] = useState(regions[0]);

  return (
    <section aria-labelledby="map-heading" className="py-20 bg-gf-gray-light/40">
      {regions.map((r) => (
        <RegionSchema key={r.id} region={r} />
      ))}

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            id="map-heading"
            className="text-3xl sm:text-4xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]"
          >
            Find Us Near You
          </h2>
          <p className="mt-4 text-lg text-gf-gray max-w-2xl mx-auto">
            Professional Christmas light installation across 4 regions and 20+ cities in North Carolina.
            Select a region to see exactly where we work.
          </p>
        </div>

        {/* Region selector tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {regions.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setActiveRegion(r)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeRegion.id === r.id
                  ? "bg-gf-red text-white shadow-md"
                  : "bg-white text-gf-charcoal border border-gray-200 hover:border-gf-red/40 hover:text-gf-red"
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Google Maps embed */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
              <iframe
                title={`Google Map of ${activeRegion.name} service area`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${activeRegion.mapQuery}&zoom=11`}
                allowFullScreen
              />
            </div>
          </div>

          {/* Region info panel */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-white border border-gray-200 shadow-lg p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gf-red/10">
                  <svg className="w-5 h-5 text-gf-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]">
                  {activeRegion.name}
                </h3>
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-gf-gray/60 mb-3">
                Cities We Serve
              </p>
              <ul className="space-y-2 mb-6">
                {activeRegion.cities.map((city) => (
                  <li key={city} className="flex items-center gap-2 text-sm text-gf-charcoal">
                    <span className="h-1.5 w-1.5 rounded-full bg-gf-red flex-shrink-0" />
                    {city}, NC
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-3">
                <Link
                  href="/quote"
                  className="block w-full rounded-xl bg-gf-red px-6 py-3.5 text-center font-bold text-white shadow-md transition-all duration-200 hover:bg-gf-red-dark hover:-translate-y-0.5"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href={activeRegion.href}
                  className="block w-full rounded-xl border border-gray-200 px-6 py-3 text-center font-semibold text-gf-charcoal transition-all duration-200 hover:border-gf-red/40 hover:text-gf-red"
                >
                  {activeRegion.name} Details
                </Link>
                <a
                  href="tel:+18772741475"
                  className="flex items-center justify-center gap-2 w-full rounded-xl border border-gray-200 px-6 py-3 text-center font-semibold text-gf-charcoal transition-all duration-200 hover:border-gf-red/40 hover:text-gf-red"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  (877) 274-1475
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust signals */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { stat: "4", label: "Service Regions" },
            { stat: "20+", label: "Cities Covered" },
            { stat: "65+", label: "Years in NC" },
            { stat: "5.0", label: "Google Rating" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl bg-white border border-gray-200 p-4">
              <span className="block text-2xl font-bold text-gf-red font-[family-name:var(--font-display)]">
                {item.stat}
              </span>
              <span className="text-xs text-gf-gray uppercase tracking-wider font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
