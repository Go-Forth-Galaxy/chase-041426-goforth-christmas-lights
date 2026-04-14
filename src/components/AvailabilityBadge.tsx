"use client";

interface AvailabilityBadgeProps {
  area?: string;
}

export default function AvailabilityBadge({
  area,
}: AvailabilityBadgeProps) {
  return (
    <div
      className="inline-flex w-full max-w-md flex-col gap-3 rounded-xl border-t-2 border-t-gf-gold bg-white/80 backdrop-blur-md p-6 shadow-md"
      role="status"
      aria-label={`Availability: spots filling fast${area ? ` in ${area}` : ""}`}
    >
      {/* Header with live indicator */}
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-3 w-3" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gf-red-light opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-gf-red shadow-sm" />
        </span>
        <span className="text-xs font-semibold tracking-wider text-gf-red uppercase">
          Live Availability
        </span>
      </div>

      {/* Text */}
      <p className="text-sm text-gf-charcoal leading-relaxed">
        <span className="text-lg font-extrabold text-gf-red">Spots filling fast</span>
        {area && <span className="text-gf-gray"> in {area}</span>}
        {" "}&mdash; limited availability remains for the upcoming holiday season
      </p>

      {/* Progress bar */}
      <div
        className="h-3.5 w-full overflow-hidden rounded-full bg-gf-gray-light"
        role="progressbar"
        aria-valuenow={80}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="relative h-full rounded-full bg-gradient-to-r from-gf-red to-gf-red-light transition-all duration-700 ease-out overflow-hidden"
          style={{ width: "80%" }}
        >
          {/* Shimmer overlay */}
          <div
            className="absolute inset-0 animate-[progress-shimmer_2s_ease-in-out_infinite]"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
