"use client";

import { useState } from "react";
import Link from "next/link";

interface Region {
  id: string;
  name: string;
  cities: string[];
  description: string;
  href: string;
  homes: string;
  cx: number;
  cy: number;
}

const regions: Region[] = [
  {
    id: "lake-norman",
    name: "Lake Norman",
    cities: ["Mooresville", "Cornelius", "Davidson", "Huntersville", "Statesville", "Denver"],
    description: "Lakefront estates to charming neighborhoods",
    href: "/service-areas/lake-norman",
    homes: "2,400+",
    cx: 340,
    cy: 215,
  },
  {
    id: "triad",
    name: "Triad",
    cities: ["Greensboro", "Winston-Salem", "High Point", "Kernersville", "Burlington"],
    description: "Our home territory since 1959",
    href: "/service-areas/triad",
    homes: "3,100+",
    cx: 390,
    cy: 175,
  },
  {
    id: "hickory",
    name: "Hickory",
    cities: ["Hickory", "Morganton", "Lenoir", "Newton", "Conover"],
    description: "Downtown storefronts to foothill estates",
    href: "/service-areas/hickory",
    homes: "1,200+",
    cx: 270,
    cy: 230,
  },
  {
    id: "boone",
    name: "Boone / High Country",
    cities: ["Boone", "Blowing Rock", "Banner Elk", "Linville", "Sugar Mountain"],
    description: "Rated for mountain winds & steep rooflines",
    href: "/service-areas/boone",
    homes: "800+",
    cx: 255,
    cy: 155,
  },
];

function GlowPin({ cx, cy, active, onClick, onMouseEnter, onMouseLeave }: {
  cx: number;
  cy: number;
  active: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <g
      className="cursor-pointer"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Outer pulse ring */}
      <circle
        cx={cx}
        cy={cy}
        r={active ? 22 : 16}
        fill="none"
        stroke={active ? "#d4a843" : "#b71c1c"}
        strokeWidth={1.5}
        opacity={active ? 0.6 : 0.3}
        className="transition-all duration-500"
      >
        <animate attributeName="r" from={active ? "18" : "14"} to={active ? "28" : "22"} dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from={active ? "0.6" : "0.3"} to="0" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Glow */}
      <circle
        cx={cx}
        cy={cy}
        r={active ? 14 : 10}
        fill={active ? "#d4a843" : "#b71c1c"}
        opacity={0.25}
        className="transition-all duration-300"
      />

      {/* Main dot */}
      <circle
        cx={cx}
        cy={cy}
        r={active ? 8 : 6}
        fill={active ? "#d4a843" : "#b71c1c"}
        stroke="white"
        strokeWidth={2.5}
        className="transition-all duration-300 drop-shadow-lg"
      />

      {/* Inner highlight */}
      <circle
        cx={cx - 2}
        cy={cy - 2}
        r={2}
        fill="white"
        opacity={0.6}
      />
    </g>
  );
}

export default function ServiceAreaMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const active = regions.find((r) => r.id === activeRegion) ?? null;

  return (
    <section aria-labelledby="map-heading" className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(170deg, #1a0000 0%, #2a0000 30%, #3a0000 60%, #1a0000 100%)",
    }}>
      {/* Background pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gf-gold mb-3">
            Interactive Map
          </span>
          <h2
            id="map-heading"
            className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)]"
          >
            Explore Our Coverage
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            We serve 4 regions across North Carolina. Tap a pin to see the cities we cover — then click through for details and local testimonials.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map */}
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 shadow-2xl overflow-hidden">
              {/* Decorative lights along top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] overflow-visible" aria-hidden="true">
                {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((pos, i) => (
                  <span
                    key={pos}
                    className="absolute top-[-2px] w-1.5 h-1.5 rounded-full"
                    style={{
                      left: `${pos}%`,
                      background: i % 3 === 0 ? "#d4a843" : i % 3 === 1 ? "#ff4444" : "#44ff44",
                      boxShadow: `0 0 4px 1px ${i % 3 === 0 ? "rgba(212,168,67,0.6)" : i % 3 === 1 ? "rgba(255,68,68,0.4)" : "rgba(68,255,68,0.4)"}`,
                      animation: `sparkle ${2.5 + (i % 3) * 0.5}s ease-in-out infinite`,
                      animationDelay: `${i * 200}ms`,
                    }}
                  />
                ))}
              </div>

              <svg
                viewBox="0 0 600 350"
                className="w-full h-auto"
                role="img"
                aria-label="Map of Go-Forth Christmas Lights service areas in North Carolina"
              >
                <defs>
                  <linearGradient id="nc-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3a0000" />
                    <stop offset="100%" stopColor="#5a0000" />
                  </linearGradient>
                  <linearGradient id="nc-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4a843" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#d4a843" stopOpacity="0.15" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Service area region highlights */}
                  <radialGradient id="region-glow-active">
                    <stop offset="0%" stopColor="#d4a843" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#d4a843" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="region-glow-idle">
                    <stop offset="0%" stopColor="#b71c1c" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#b71c1c" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* NC State outline (simplified) */}
                <path
                  d="M50,120 L80,105 L120,95 L160,85 L200,90 L240,100 L260,95 L280,100 L300,95 L340,100 L370,95 L400,100 L430,95 L460,105 L490,110 L510,120 L530,130 L545,150 L555,170 L550,190 L540,210 L520,225 L505,235 L490,240 L475,250 L460,255 L445,258 L425,260 L400,262 L380,265 L355,268 L330,270 L300,272 L275,270 L250,268 L220,265 L195,260 L170,255 L145,250 L120,242 L100,235 L80,225 L65,210 L55,195 L48,175 L45,155 L47,135 Z"
                  fill="url(#nc-fill)"
                  stroke="url(#nc-stroke)"
                  strokeWidth="1.5"
                />

                {/* Region glow circles */}
                {regions.map((r) => (
                  <circle
                    key={`glow-${r.id}`}
                    cx={r.cx}
                    cy={r.cy}
                    r={activeRegion === r.id ? 50 : 35}
                    fill={activeRegion === r.id ? "url(#region-glow-active)" : "url(#region-glow-idle)"}
                    className="transition-all duration-500"
                  />
                ))}

                {/* Connection lines between regions */}
                <line x1={regions[0].cx} y1={regions[0].cy} x2={regions[1].cx} y2={regions[1].cy}
                  stroke="#d4a843" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
                <line x1={regions[0].cx} y1={regions[0].cy} x2={regions[2].cx} y2={regions[2].cy}
                  stroke="#d4a843" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
                <line x1={regions[2].cx} y1={regions[2].cy} x2={regions[3].cx} y2={regions[3].cy}
                  stroke="#d4a843" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />

                {/* Region labels */}
                {regions.map((r) => (
                  <text
                    key={`label-${r.id}`}
                    x={r.cx}
                    y={r.cy - 18}
                    textAnchor="middle"
                    className="text-[9px] font-bold uppercase tracking-wider fill-white/50 select-none pointer-events-none"
                    style={{
                      opacity: activeRegion === r.id ? 1 : 0.5,
                      fill: activeRegion === r.id ? "#d4a843" : "rgba(255,255,255,0.5)",
                      transition: "all 0.3s",
                    }}
                  >
                    {r.name.toUpperCase()}
                  </text>
                ))}

                {/* Pins */}
                {regions.map((r) => (
                  <GlowPin
                    key={r.id}
                    cx={r.cx}
                    cy={r.cy}
                    active={activeRegion === r.id}
                    onClick={() => setActiveRegion(activeRegion === r.id ? null : r.id)}
                    onMouseEnter={() => setActiveRegion(r.id)}
                    onMouseLeave={() => setActiveRegion(null)}
                  />
                ))}

                {/* NC label */}
                <text x="420" y="320" className="text-[11px] font-semibold tracking-widest fill-white/15 select-none pointer-events-none">
                  NORTH CAROLINA
                </text>
              </svg>
            </div>

            {/* Stats bar */}
            <div className="mt-6 grid grid-cols-4 gap-3">
              {regions.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setActiveRegion(activeRegion === r.id ? null : r.id)}
                  onMouseEnter={() => setActiveRegion(r.id)}
                  onMouseLeave={() => setActiveRegion(null)}
                  className={`rounded-xl p-3 text-center transition-all duration-300 border ${
                    activeRegion === r.id
                      ? "bg-gf-gold/20 border-gf-gold/40 shadow-lg shadow-gf-gold/10 -translate-y-0.5"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <span className={`block text-lg font-bold font-[family-name:var(--font-display)] transition-colors duration-300 ${
                    activeRegion === r.id ? "text-gf-gold" : "text-white/80"
                  }`}>
                    {r.homes}
                  </span>
                  <span className={`block text-[10px] font-medium uppercase tracking-wider transition-colors duration-300 ${
                    activeRegion === r.id ? "text-gf-gold/70" : "text-white/40"
                  }`}>
                    homes lit
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-2">
            <div className={`rounded-2xl border overflow-hidden transition-all duration-500 ${
              active
                ? "border-gf-gold/30 bg-white/[0.06] shadow-xl shadow-gf-gold/5"
                : "border-white/10 bg-white/[0.03]"
            }`}>
              {active ? (
                <div className="p-8">
                  {/* Region header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gf-gold/20">
                      <svg className="w-5 h-5 text-gf-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                        {active.name}
                      </h3>
                      <p className="text-sm text-gf-gold/70">{active.description}</p>
                    </div>
                  </div>

                  {/* Cities */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Cities We Serve</p>
                    <div className="flex flex-wrap gap-2">
                      {active.cities.map((city) => (
                        <span
                          key={city}
                          className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 border border-white/5"
                        >
                          <span className="mr-1.5 h-1 w-1 rounded-full bg-gf-gold" />
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-6 rounded-xl bg-white/5 border border-white/5 p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <span className="block text-2xl font-bold text-gf-gold font-[family-name:var(--font-display)]">{active.homes}</span>
                        <span className="text-[10px] uppercase tracking-wider text-white/40">Homes Decorated</span>
                      </div>
                      <div>
                        <span className="block text-2xl font-bold text-gf-gold font-[family-name:var(--font-display)]">5.0</span>
                        <span className="text-[10px] uppercase tracking-wider text-white/40">Google Rating</span>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <Link
                      href="/quote"
                      className="block w-full rounded-xl bg-gf-gold px-6 py-3.5 text-center font-bold text-white shadow-lg shadow-gf-gold/20 transition-all duration-300 hover:bg-gf-gold-light hover:text-gf-charcoal hover:-translate-y-0.5"
                    >
                      Get a Free Quote
                    </Link>
                    <Link
                      href={active.href}
                      className="block w-full rounded-xl border border-white/20 px-6 py-3.5 text-center font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                    >
                      View {active.name} Details
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <svg className="w-8 h-8 text-gf-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white/60">
                    Select a Region
                  </h3>
                  <p className="mt-2 text-sm text-white/30 leading-relaxed">
                    Hover or tap a pin on the map to explore our service areas and see the cities we cover.
                  </p>

                  {/* Quick stats */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/5 border border-white/5 p-4 text-center">
                      <span className="block text-2xl font-bold text-gf-gold font-[family-name:var(--font-display)]">4</span>
                      <span className="text-[10px] uppercase tracking-wider text-white/40">Regions</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/5 p-4 text-center">
                      <span className="block text-2xl font-bold text-gf-gold font-[family-name:var(--font-display)]">20+</span>
                      <span className="text-[10px] uppercase tracking-wider text-white/40">Cities</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/5 p-4 text-center">
                      <span className="block text-2xl font-bold text-gf-gold font-[family-name:var(--font-display)]">7,500+</span>
                      <span className="text-[10px] uppercase tracking-wider text-white/40">Homes Lit</span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/5 p-4 text-center">
                      <span className="block text-2xl font-bold text-gf-gold font-[family-name:var(--font-display)]">65+</span>
                      <span className="text-[10px] uppercase tracking-wider text-white/40">Years Serving NC</span>
                    </div>
                  </div>

                  <Link
                    href="/quote"
                    className="mt-6 inline-flex items-center rounded-xl bg-gf-gold px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-gf-gold/20 transition-all duration-300 hover:bg-gf-gold-light hover:text-gf-charcoal hover:-translate-y-0.5"
                  >
                    Get Your Free Quote
                  </Link>
                </div>
              )}
            </div>

            {/* Address checker teaser */}
            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-white/50 text-center">
                Not sure if we cover your area?
              </p>
              <a
                href="tel:+18772741475"
                className="mt-3 flex items-center justify-center gap-2 text-gf-gold font-semibold hover:text-gf-gold-light transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                Call (877) 274-1475
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
