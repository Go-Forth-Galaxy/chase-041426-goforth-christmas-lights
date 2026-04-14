"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPosition(x);
  }, []);

  return (
    <div
      className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-xl ring-1 ring-black/10"
      onMouseMove={(e) => {
        if (e.buttons === 1) handleMove(e);
      }}
      onTouchMove={handleMove}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
        if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
      }}
    >
      {/* "After" layer (full width, underneath) - nighttime with glowing lights */}
      <div className="absolute inset-0">
        <Image
          src="/images/after-house.jpg"
          alt="House with professional Christmas light installation at night"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-end justify-center pb-20">
          <p className="text-sm font-semibold text-white/80 font-[family-name:var(--font-display)] tracking-wide drop-shadow-lg">Professional installation</p>
        </div>
      </div>

      {/* "Before" layer (clipped) - daytime, no decorations */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src="/images/before-house.jpg"
          alt="House during daytime without Christmas decorations"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-end justify-center pb-20">
          <p className="text-sm font-semibold text-gf-charcoal/70 font-[family-name:var(--font-display)] tracking-wide drop-shadow-sm">Dark, undecorated home</p>
        </div>
      </div>

      {/* Label pills */}
      <div className="pointer-events-none absolute top-4 left-4 z-10">
        <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-gf-charcoal shadow-sm">
          Before
        </span>
      </div>
      <div className="pointer-events-none absolute top-4 right-4 z-10">
        <span className="rounded-full bg-gf-green/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white shadow-sm">
          After
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-lg z-20"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-gf-gold to-gf-gold-light shadow-xl border-2 border-white flex items-center justify-center">
          {/* Grip icon */}
          <svg className="w-6 h-6 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <svg className="w-6 h-6 -ml-3 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
