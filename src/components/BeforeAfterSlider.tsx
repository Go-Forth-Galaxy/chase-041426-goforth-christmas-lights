"use client";

import { useState, useCallback } from "react";

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
      className="relative w-full aspect-[16/9] rounded-xl overflow-hidden cursor-col-resize select-none shadow-lg"
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
      {/* "After" layer (full width, underneath) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gf-green-dark via-gf-green to-gf-green-light flex items-center justify-center">
        <div className="text-center text-white">
          <div className="flex gap-1 justify-center mb-2">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="inline-block w-2 h-2 rounded-full bg-gf-gold animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
            ))}
          </div>
          <p className="text-xl font-bold font-[family-name:var(--font-display)]">After</p>
          <p className="text-sm text-gray-200 mt-1">Professional installation</p>
        </div>
      </div>

      {/* "Before" layer (clipped) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 flex items-center justify-center"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="text-center text-white">
          <p className="text-xl font-bold font-[family-name:var(--font-display)]">Before</p>
          <p className="text-sm text-gray-300 mt-1">Dark, undecorated home</p>
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-gf-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}
