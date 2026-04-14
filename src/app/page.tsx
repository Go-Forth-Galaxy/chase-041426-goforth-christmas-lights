import Link from "next/link";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import HowItWorks from "@/components/HowItWorks";
import ServiceAreaCard from "@/components/ServiceAreaCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";

const serviceAreas = [
  {
    name: "Lake Norman",
    cities: "Mooresville, Cornelius, Davidson, Huntersville, Statesville, Denver",
    description:
      "From lakefront estates to charming neighborhoods, we bring holiday magic to the Lake Norman area.",
    href: "/service-areas/lake-norman",
  },
  {
    name: "Triad",
    cities: "Greensboro, Winston-Salem, High Point, Kernersville, Burlington",
    description:
      "Our home territory since 1959. Professional holiday lighting for the Triad's finest homes and businesses.",
    href: "/service-areas/triad",
  },
  {
    name: "Hickory",
    cities: "Hickory, Morganton, Lenoir, Newton, Conover",
    description:
      "Bringing professional Christmas light installation to the Catawba Valley and surrounding foothills.",
    href: "/service-areas/hickory",
  },
  {
    name: "Boone",
    cities: "Boone, Blowing Rock, Banner Elk, Linville, Sugar Mountain",
    description:
      "Holiday lights that shine bright in the High Country. Mountain homes deserve mountain-grade installation.",
    href: "/service-areas/boone",
  },
];

const testimonials = [
  {
    quote:
      "Go-Forth transformed our home last Christmas. The design was stunning, installation was quick, and when one strand went out in January, they were back the next day. Worth every penny.",
    name: "Sarah M.",
    location: "Mooresville",
    stars: 5,
  },
  {
    quote:
      "We've been using Go-Forth for pest control for years, so trying their Christmas lights was a no-brainer. Absolutely professional. Our neighbors couldn't stop asking who did our lights.",
    name: "David K.",
    location: "Greensboro",
    stars: 5,
  },
  {
    quote:
      "Best decision we made last holiday season. No more tangled lights, no more climbing ladders. Just beautiful lights from Thanksgiving through New Year's.",
    name: "Jennifer T.",
    location: "Davidson",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section
        aria-label="Hero"
        className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px] overflow-hidden"
      >
        {/* Gradient background simulating a dramatic nighttime scene */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-gf-green-dark via-[#0c2a18] to-[#050d08]"
        />

        {/* Sparkle / twinkle dots */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="sparkle-dot top-[12%] left-[18%] w-1 h-1" />
          <span className="sparkle-dot top-[28%] left-[72%] w-1.5 h-1.5 animation-delay-700" />
          <span className="sparkle-dot top-[55%] left-[10%] w-1 h-1 animation-delay-1400" />
          <span className="sparkle-dot top-[40%] left-[85%] w-1 h-1 animation-delay-500" />
          <span className="sparkle-dot top-[68%] left-[45%] w-1.5 h-1.5 animation-delay-1100" />
          <span className="sparkle-dot top-[15%] left-[55%] w-1 h-1 animation-delay-300" />
          <span className="sparkle-dot top-[75%] left-[78%] w-1 h-1 animation-delay-900" />
          <span className="sparkle-dot top-[82%] left-[25%] w-1.5 h-1.5 animation-delay-1600" />
          <span className="sparkle-dot top-[35%] left-[38%] w-1 h-1 animation-delay-200" />
          <span className="sparkle-dot top-[60%] left-[62%] w-1 h-1 animation-delay-1800" />
          <span className="sparkle-dot-gold top-[22%] left-[30%] w-1.5 h-1.5 animation-delay-600" />
          <span className="sparkle-dot-gold top-[50%] left-[90%] w-1 h-1 animation-delay-1300" />
          <span className="sparkle-dot-gold top-[70%] left-[15%] w-1 h-1 animation-delay-400" />
          <span className="sparkle-dot-gold top-[45%] left-[55%] w-1.5 h-1.5 animation-delay-1000" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white font-[family-name:var(--font-display)]">
            Make Your Home the Brightest on the Block
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto">
            Professional Christmas light installation across Lake Norman, the Triad, and Western NC.
            Licensed, insured, and backed by 60+ years of trusted home service.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gf-gold text-white shadow-lg hover:bg-gf-gold-light hover:text-gf-charcoal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gf-gold focus:ring-offset-2 focus:ring-offset-gf-green-dark"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-gf-green-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gf-green-dark"
            >
              See Our Work
            </Link>
          </div>

          <div className="mt-8">
            <AvailabilityBadge />
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section aria-label="Trust indicators" className="bg-gf-gray-light border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <TrustItem
              icon={
                <svg className="w-8 h-8 text-gf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
                </svg>
              }
              title="60+ Years in Business"
              subtitle="Trusted since 1959"
            />
            <TrustItem
              icon={
                <svg className="w-8 h-8 text-gf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              }
              title="Licensed & Insured"
              subtitle="Full liability coverage"
            />
            <TrustItem
              icon={
                <svg className="w-8 h-8 text-gf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              }
              title="Commercial-Grade LEDs"
              subtitle="Brighter, longer-lasting"
            />
            <TrustItem
              icon={
                <svg className="w-8 h-8 text-gf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              }
              title="100% Satisfaction Guarantee"
              subtitle="We stand behind our work"
            />
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <HowItWorks />

      {/* ── Service Areas ── */}
      <section aria-labelledby="service-areas-heading" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              id="service-areas-heading"
              className="text-3xl sm:text-4xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]"
            >
              Serving Communities Across North Carolina
            </h2>
            <p className="mt-4 text-lg text-gf-gray max-w-2xl mx-auto">
              From the mountains to the Piedmont, Go-Forth brings professional holiday lighting to your door.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area) => (
              <ServiceAreaCard
                key={area.name}
                name={area.name}
                cities={area.cities}
                description={area.description}
                href={area.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After Preview ── */}
      <section aria-labelledby="before-after-heading" className="py-20 bg-gf-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              id="before-after-heading"
              className="text-3xl sm:text-4xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]"
            >
              See the Transformation
            </h2>
          </div>
          <BeforeAfterSlider />
          <p className="mt-6 text-center text-gf-gray text-sm">
            Drag the slider to compare before and after our professional installation.
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section aria-labelledby="testimonials-heading" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]"
            >
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                location={t.location}
                stars={t.stars}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Style Quiz CTA ── */}
      <section aria-labelledby="style-quiz-heading" className="py-20 bg-gf-warm-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            id="style-quiz-heading"
            className="text-3xl sm:text-4xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]"
          >
            Not Sure What You Need?
          </h2>
          <p className="mt-4 text-lg text-gf-gray max-w-xl mx-auto">
            Take our 60-second style quiz and we&apos;ll recommend the perfect lighting package for
            your home.
          </p>
          <Link
            href="/style-quiz"
            className="mt-8 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gf-gold text-white shadow-lg hover:bg-gf-gold-light hover:text-gf-charcoal transition-colors duration-200"
          >
            Take the Style Quiz
          </Link>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner />
    </>
  );
}

/* ── Trust Bar Item (local helper) ── */
function TrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div aria-hidden="true">{icon}</div>
      <span className="text-sm sm:text-base font-semibold text-gf-charcoal">{title}</span>
      <span className="text-xs text-gf-gray">{subtitle}</span>
    </div>
  );
}
