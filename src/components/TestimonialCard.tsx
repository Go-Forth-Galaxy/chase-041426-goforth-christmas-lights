interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  stars?: number;
  rating?: number;
}

export default function TestimonialCard({ quote, name, location, stars, rating }: TestimonialCardProps) {
  const starCount = stars ?? rating ?? 5;
  return (
    <blockquote className="flex flex-col rounded-xl border border-gray-100 bg-gf-cream p-6 shadow-sm">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4" aria-label={`${starCount} out of 5 stars`}>
        {Array.from({ length: starCount }).map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-gf-gold"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
        ))}
      </div>

      <p className="flex-1 text-sm leading-relaxed text-gf-charcoal italic">
        &ldquo;{quote}&rdquo;
      </p>

      <footer className="mt-5 pt-4 border-t border-gray-200">
        <cite className="not-italic text-sm font-semibold text-gf-charcoal">{name}</cite>
        <span className="block text-xs text-gf-gray">{location}</span>
      </footer>
    </blockquote>
  );
}
