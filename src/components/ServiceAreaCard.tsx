import Link from "next/link";

interface ServiceAreaCardProps {
  name: string;
  cities: string;
  description: string;
  href: string;
}

export default function ServiceAreaCard({ name, cities, description, href }: ServiceAreaCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-gf-green/30 transition-all duration-200"
    >
      <h3 className="text-xl font-bold text-gf-green font-[family-name:var(--font-display)] group-hover:text-gf-green-dark transition-colors">
        {name}
      </h3>
      <p className="mt-1 text-xs font-medium text-gf-gold tracking-wide uppercase">{cities}</p>
      <p className="mt-3 text-sm text-gf-gray leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-gf-green group-hover:translate-x-1 transition-transform duration-200">
        Learn more
        <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  );
}
