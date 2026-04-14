import Link from "next/link";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
}

export default function CTABanner({
  headline = "Ready to Light Up Your Home?",
  subtext = "Book your free consultation today and let us handle the rest. Limited spots available for the 2026 holiday season.",
}: CTABannerProps) {
  return (
    <section aria-label="Call to action" className="relative overflow-hidden">
      {/* Wave divider at top */}
      <svg
        className="absolute top-0 left-0 w-full h-12 sm:h-16 text-white"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0,0 L0,32 Q360,64 720,32 Q1080,0 1440,32 L1440,0 Z" />
      </svg>

      {/* Background with gradient */}
      <div className="bg-gradient-to-br from-gf-green-dark via-gf-green to-gf-green-dark py-20 pt-28 sm:pt-32 relative">
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(42,122,74,0.4) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Sparkle dots */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <span className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" style={{ animationDuration: "2s" }} />
          <span className="absolute top-[25%] right-[15%] w-1 h-1 rounded-full bg-white/50 animate-pulse" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
          <span className="absolute top-[60%] left-[20%] w-1 h-1 rounded-full bg-white/40 animate-pulse" style={{ animationDuration: "2.5s", animationDelay: "1s" }} />
          <span className="absolute top-[70%] right-[25%] w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" style={{ animationDuration: "2s", animationDelay: "1.5s" }} />
          <span className="absolute top-[40%] left-[70%] w-1 h-1 rounded-full bg-white/60 animate-pulse" style={{ animationDuration: "3.5s", animationDelay: "0.3s" }} />
          <span className="absolute top-[80%] left-[45%] w-1 h-1 rounded-full bg-white/40 animate-pulse" style={{ animationDuration: "2.8s", animationDelay: "2s" }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)]"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
          >
            {headline}
          </h2>
          <p className="mt-5 text-lg text-gray-200/90 max-w-xl mx-auto leading-relaxed">
            {subtext}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gf-gold text-white shadow-lg hover:bg-gf-gold-light hover:text-gf-charcoal transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gf-gold focus:ring-offset-2 focus:ring-offset-gf-green animate-[glow-pulse_2s_ease-in-out_infinite]"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:+18772741475"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white/80 text-white overflow-hidden transition-all duration-300 hover:bg-white hover:text-gf-green hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gf-green"
            >
              {/* Shimmer effect */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative">Call (877) 274-1475</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
