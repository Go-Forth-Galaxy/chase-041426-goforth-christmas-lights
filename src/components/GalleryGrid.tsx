"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/* Types & Data                                                        */
/* ------------------------------------------------------------------ */

type Category = "Residential" | "Commercial";
type Region = "Lake Norman" | "Triad" | "Hickory" | "Boone";
type FilterTab = "All" | Category | Region;

interface Project {
  id: number;
  title: string;
  location: string;
  category: Category;
  region: Region;
  gradient: string;
}

const projects: Project[] = [
  { id: 1, title: "Lakefront Estate", location: "Mooresville", category: "Residential", region: "Lake Norman", gradient: "from-emerald-900 via-emerald-800 to-teal-900" },
  { id: 2, title: "Historic Bungalow", location: "Davidson", category: "Residential", region: "Lake Norman", gradient: "from-amber-900 via-orange-900 to-red-950" },
  { id: 3, title: "Mountain Lodge", location: "Blowing Rock", category: "Residential", region: "Boone", gradient: "from-slate-800 via-blue-900 to-indigo-950" },
  { id: 4, title: "Downtown Storefront", location: "High Point", category: "Commercial", region: "Triad", gradient: "from-rose-900 via-red-900 to-rose-950" },
  { id: 5, title: "Two-Story Colonial", location: "Greensboro", category: "Residential", region: "Triad", gradient: "from-green-900 via-emerald-900 to-teal-950" },
  { id: 6, title: "Restaurant Patio", location: "Winston-Salem", category: "Commercial", region: "Triad", gradient: "from-purple-900 via-violet-900 to-indigo-950" },
  { id: 7, title: "Modern Farmhouse", location: "Huntersville", category: "Residential", region: "Lake Norman", gradient: "from-sky-900 via-blue-900 to-cyan-950" },
  { id: 8, title: "Shopping Center", location: "Hickory", category: "Commercial", region: "Hickory", gradient: "from-amber-900 via-yellow-900 to-orange-950" },
  { id: 9, title: "Craftsman Home", location: "Cornelius", category: "Residential", region: "Lake Norman", gradient: "from-teal-900 via-cyan-900 to-emerald-950" },
  { id: 10, title: "Church Facade", location: "Kernersville", category: "Commercial", region: "Triad", gradient: "from-red-900 via-rose-900 to-pink-950" },
  { id: 11, title: "Cabin Retreat", location: "Banner Elk", category: "Residential", region: "Boone", gradient: "from-stone-800 via-stone-900 to-neutral-950" },
  { id: 12, title: "Townhome Row", location: "Statesville", category: "Residential", region: "Lake Norman", gradient: "from-blue-900 via-indigo-900 to-violet-950" },
];

const filterTabs: FilterTab[] = ["All", "Residential", "Commercial", "Lake Norman", "Triad"];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(
        (p) => p.category === activeFilter || p.region === activeFilter
      );

  return (
    <div>
      {/* Filter tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter gallery by category or region">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeFilter === tab}
            aria-controls="gallery-grid"
            onClick={() => setActiveFilter(tab)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              activeFilter === tab
                ? "bg-gf-green text-white shadow-md"
                : "bg-white text-gf-charcoal hover:bg-gf-green/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        id="gallery-grid"
        role="tabpanel"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl"
          >
            {/* Placeholder gradient background */}
            <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative`}>
              {/* Sparkle / star overlay */}
              <div className="absolute inset-0 opacity-30">
                <svg className="h-full w-full" viewBox="0 0 400 300" fill="none" aria-hidden="true">
                  <circle cx="50" cy="40" r="2" fill="white" opacity="0.8" />
                  <circle cx="150" cy="80" r="1.5" fill="white" opacity="0.6" />
                  <circle cx="280" cy="50" r="2" fill="white" opacity="0.7" />
                  <circle cx="350" cy="120" r="1" fill="white" opacity="0.5" />
                  <circle cx="100" cy="180" r="1.5" fill="white" opacity="0.6" />
                  <circle cx="220" cy="150" r="2" fill="white" opacity="0.8" />
                  <circle cx="320" cy="220" r="1.5" fill="white" opacity="0.5" />
                  <circle cx="80" cy="250" r="1" fill="white" opacity="0.7" />
                  <circle cx="200" cy="260" r="2" fill="white" opacity="0.6" />
                  {/* Simple house silhouette */}
                  <path d="M100 280 L100 200 L200 140 L300 200 L300 280 Z" fill="black" opacity="0.2" />
                  <path d="M130 280 L130 220 L170 220 L170 280 Z" fill="black" opacity="0.15" />
                  {/* Roofline lights */}
                  <circle cx="120" cy="208" r="3" fill="#f0d078" opacity="0.9" />
                  <circle cx="145" cy="193" r="3" fill="#f0d078" opacity="0.9" />
                  <circle cx="170" cy="178" r="3" fill="#f0d078" opacity="0.9" />
                  <circle cx="195" cy="165" r="3" fill="#f0d078" opacity="0.9" />
                  <circle cx="220" cy="175" r="3" fill="#f0d078" opacity="0.9" />
                  <circle cx="245" cy="188" r="3" fill="#f0d078" opacity="0.9" />
                  <circle cx="270" cy="198" r="3" fill="#f0d078" opacity="0.9" />
                </svg>
              </div>

              {/* Tags */}
              <div className="absolute left-3 top-3 flex gap-2">
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {project.region}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="w-full p-5">
                  <button
                    type="button"
                    className="w-full rounded-lg bg-white/90 px-4 py-2.5 text-sm font-bold text-gf-charcoal backdrop-blur-sm transition-colors hover:bg-white"
                    aria-label={`View details for ${project.title}, ${project.location}`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Card text */}
            <div className="bg-white p-4">
              <h3 className="font-bold text-gf-charcoal">{project.title}</h3>
              <p className="mt-0.5 text-sm text-gf-gray">{project.location}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="py-12 text-center text-gf-gray">
          No projects found for this filter. Try selecting a different category.
        </p>
      )}
    </div>
  );
}
