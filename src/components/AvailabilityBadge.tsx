"use client";

interface AvailabilityBadgeProps {
  percentBooked?: number;
  spotsRemaining?: number;
  area?: string;
}

export default function AvailabilityBadge({
  percentBooked = 73,
  spotsRemaining = 8,
  area,
}: AvailabilityBadgeProps) {
  return (
    <div
      className="inline-flex w-full max-w-md flex-col gap-3 rounded-xl border border-gf-gray-light bg-white p-5 shadow-sm"
      role="status"
      aria-label={`Availability: ${percentBooked}% booked, ${spotsRemaining} spots remaining${area ? ` in ${area}` : ""}`}
    >
      {/* Header with live indicator */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gf-green-light opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gf-green" />
        </span>
        <span className="text-xs font-semibold tracking-wider text-gf-green uppercase">
          Live Availability
        </span>
      </div>

      {/* Text */}
      <p className="text-sm font-medium text-gf-charcoal">
        We&apos;re{" "}
        <span className="font-bold text-gf-green">{percentBooked}%</span>{" "}
        booked for the season
        {area && <span className="text-gf-gray"> in {area}</span>}
        {" "}&mdash;{" "}
        <span className="font-bold text-gf-red">{spotsRemaining} spots remaining</span>
      </p>

      {/* Progress bar */}
      <div
        className="h-3 w-full overflow-hidden rounded-full bg-gf-gray-light"
        role="progressbar"
        aria-valuenow={percentBooked}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-gf-green to-gf-green-light transition-all duration-700 ease-out"
          style={{ width: `${percentBooked}%` }}
        />
      </div>
    </div>
  );
}
