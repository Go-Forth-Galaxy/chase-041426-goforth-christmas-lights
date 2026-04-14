interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  stars?: number;
  rating?: number;
}

export default function TestimonialCard({ quote, name, location, stars, rating }: TestimonialCardProps) {
  const starCount = stars ?? rating ?? 5;
  const initial = name.charAt(0).toUpperCase();

  return (
    <blockquote className="group relative flex flex-col rounded-xl border-l-4 border-l-gf-green bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Decorative quote mark */}
      <span
        className="pointer-events-none absolute -top-2 -left-1 text-[8rem] leading-none font-serif text-gf-gold/10 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Avatar + Stars row */}
      <div className="flex items-center gap-4 mb-5 relative z-10">
        {/* Avatar circle */}
        <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-gf-green to-gf-green-light text-white text-lg font-bold shadow-sm">
          {initial}
        </div>

        {/* Stars */}
        <div className="flex gap-0.5" aria-label={`${starCount} out of 5 stars`}>
          {Array.from({ length: starCount }).map((_, i) => (
            <svg
              key={i}
              className="w-6 h-6 text-gf-gold drop-shadow-sm"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          ))}
        </div>
      </div>

      <p className="relative z-10 flex-1 text-base leading-relaxed text-gf-charcoal/90 italic">
        &ldquo;{quote}&rdquo;
      </p>

      <footer className="relative z-10 mt-6 pt-4 border-t border-gray-100">
        <cite className="not-italic text-sm font-bold text-gf-charcoal">{name}</cite>
        <span className="block text-xs text-gf-gray mt-0.5">{location}</span>
      </footer>
    </blockquote>
  );
}
