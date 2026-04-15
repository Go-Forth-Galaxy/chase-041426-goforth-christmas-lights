"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import basePath, { img } from "@/lib/basePath";

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
  image: string;
}

const projects: Project[] = [
  { id: 1, title: "Lakefront Estate", location: "Mooresville", category: "Residential", region: "Lake Norman", image: img("/images/gallery/lakefront-estate.jpg") },
  { id: 2, title: "Historic Bungalow", location: "Davidson", category: "Residential", region: "Lake Norman", image: img("/images/gallery/victorian-elegant.jpg") },
  { id: 3, title: "Mountain Lodge", location: "Blowing Rock", category: "Residential", region: "Boone", image: img("/images/gallery/mountain-cabin.jpg") },
  { id: 4, title: "Downtown Storefront", location: "High Point", category: "Commercial", region: "Triad", image: img("/images/gallery/commercial-detail.jpg") },
  { id: 5, title: "Two-Story Colonial", location: "Greensboro", category: "Residential", region: "Triad", image: img("/images/gallery/traditional-festive.jpg") },
  { id: 6, title: "Walkway & Landscape Lighting", location: "Winston-Salem", category: "Residential", region: "Triad", image: img("/images/gallery/walkway-landscape.jpg") },
  { id: 7, title: "Modern Farmhouse", location: "Huntersville", category: "Residential", region: "Lake Norman", image: img("/images/gallery/modern-farmhouse.jpg") },
  { id: 8, title: "Shopping Center", location: "Hickory", category: "Commercial", region: "Hickory", image: img("/images/gallery/showstopper.jpg") },
  { id: 9, title: "Craftsman Home", location: "Cornelius", category: "Residential", region: "Lake Norman", image: img("/images/gallery/craftsman-cozy.jpg") },
  { id: 10, title: "Church Facade", location: "Kernersville", category: "Commercial", region: "Triad", image: img("/images/gallery/classic-elegance.jpg") },
  { id: 11, title: "Cabin Retreat", location: "Banner Elk", category: "Residential", region: "Boone", image: img("/images/gallery/wrapped-trees.jpg") },
  { id: 12, title: "Townhome Row", location: "Statesville", category: "Residential", region: "Lake Norman", image: img("/images/gallery/townhome-row.jpg") },
];

const filterTabs: FilterTab[] = ["All", "Residential", "Commercial", "Lake Norman", "Triad"];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");
  const tabsRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  // Update the sliding indicator position
  useEffect(() => {
    if (!tabsRef.current) return;
    const activeBtn = tabsRef.current.querySelector<HTMLButtonElement>("[aria-selected='true']");
    if (activeBtn) {
      const containerRect = tabsRef.current.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      setIndicator({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
      });
    }
  }, [activeFilter]);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(
        (p) => p.category === activeFilter || p.region === activeFilter
      );

  return (
    <div>
      {/* Filter tabs with sliding indicator */}
      <div className="mb-10 flex justify-center">
        <div
          ref={tabsRef}
          className="relative inline-flex flex-wrap gap-1 rounded-full bg-gf-gray-light/80 p-1.5"
          role="tablist"
          aria-label="Filter gallery by category or region"
        >
          {/* Sliding indicator */}
          <div
            className="absolute top-1.5 h-[calc(100%-12px)] rounded-full bg-gf-red shadow-md transition-all duration-300 ease-out"
            style={{ left: indicator.left, width: indicator.width }}
            aria-hidden="true"
          />

          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeFilter === tab}
              aria-controls="gallery-grid"
              onClick={() => setActiveFilter(tab)}
              className={`relative z-10 rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                activeFilter === tab
                  ? "text-white"
                  : "text-gf-charcoal hover:text-gf-red"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid with masonry-like effect */}
      <div
        id="gallery-grid"
        role="tabpanel"
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {filtered.map((project, index) => (
          <article
            key={project.id}
            className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:shadow-2xl"
          >
            {/* Project image with zoom on hover */}
            <div
              className="relative overflow-hidden bg-gray-900"
              style={{ minHeight: index % 3 === 0 ? "320px" : index % 3 === 1 ? "260px" : "290px" }}
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={`${project.title} Christmas light installation in ${project.location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Tags - glassmorphism pills */}
              <div className="absolute left-3 top-3 flex gap-2 z-10">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/20">
                  {project.category}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/20">
                  {project.region}
                </span>
              </div>

              {/* Hover overlay with slide-up content */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                <div className="w-full p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-white font-[family-name:var(--font-display)] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">{project.location}</p>
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

            {/* Card text - hidden on hover via the overlay */}
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
