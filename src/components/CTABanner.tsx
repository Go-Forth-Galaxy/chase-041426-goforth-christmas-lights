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
    <section aria-label="Call to action" className="bg-gf-green py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
          {headline}
        </h2>
        <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
          {subtext}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gf-gold text-white shadow-lg hover:bg-gf-gold-light hover:text-gf-charcoal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gf-gold focus:ring-offset-2 focus:ring-offset-gf-green"
          >
            Get Your Free Quote
          </Link>
          <a
            href="tel:+18772741475"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-gf-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gf-green"
          >
            Call (877) 274-1475
          </a>
        </div>
      </div>
    </section>
  );
}
