import Link from "next/link";
import Image from "next/image";

interface ServiceAreaCardProps {
  name: string;
  cities: string;
  description: string;
  href: string;
  image?: string;
}

export default function ServiceAreaCard({ name, cities, description, href, image }: ServiceAreaCardProps) {
  // Split cities and render with dot separators
  const cityList = cities.split(",").map((c) => c.trim()).filter(Boolean);

  return (
    <Link
      href={href}
      className="group relative block rounded-xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      style={{
        borderTop: "4px solid transparent",
        borderImage: "linear-gradient(to right, #1a5632, #d4a843) 1",
        borderImageSlice: 1,
      }}
    >
      {/* Service area image */}
      {image && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={image}
            alt={`Christmas lights in ${name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}

      <div className="relative p-6">
        {/* Hover background tint */}
        <div className="pointer-events-none absolute inset-0 rounded-b-xl bg-gradient-to-br from-gf-red/0 to-gf-red/0 group-hover:from-gf-red/[0.02] group-hover:to-gf-gold/[0.03] transition-all duration-300" />

        {/* Map pin icon */}
        <svg
          className="pointer-events-none absolute top-5 right-5 w-8 h-8 text-gf-gold/15 group-hover:text-gf-gold/30 transition-colors duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>

        <div className="relative">
          <h3 className="text-xl font-bold text-gf-red font-[family-name:var(--font-display)] group-hover:text-gf-red-dark transition-colors">
            {name}
          </h3>

          {/* Cities with dot separators */}
          <p className="mt-2 text-xs font-medium text-gf-gold tracking-wide uppercase flex flex-wrap items-center gap-x-1">
            {cityList.map((city, i) => (
              <span key={city} className="inline-flex items-center gap-x-1">
                {i > 0 && (
                  <span className="inline-block w-1 h-1 rounded-full bg-gf-gold/50" aria-hidden="true" />
                )}
                <span>{city}</span>
              </span>
            ))}
          </p>

          <p className="mt-3 text-sm text-gf-gray leading-relaxed">{description}</p>

          <span className="mt-5 inline-flex items-center text-sm font-semibold text-gf-red group-hover:text-gf-gold group-hover:translate-x-1.5 transition-all duration-300">
            Learn more
            <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
