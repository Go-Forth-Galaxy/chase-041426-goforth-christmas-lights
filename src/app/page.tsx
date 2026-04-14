import Link from "next/link";
import Image from "next/image";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import ServiceAreaCard from "@/components/ServiceAreaCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CTABanner from "@/components/CTABanner";

const serviceAreas = [
  {
    name: "Lake Norman",
    cities: "Mooresville, Cornelius, Davidson, Huntersville, Statesville, Denver",
    description:
      "From lakefront estates to charming neighborhoods, we bring holiday magic to the Lake Norman area.",
    href: "/service-areas/lake-norman",
    image: "/images/service-areas/lake-norman.jpg",
  },
  {
    name: "Triad",
    cities: "Greensboro, Winston-Salem, High Point, Kernersville, Burlington",
    description:
      "Our home territory since 1959. Professional holiday lighting for the Triad's finest homes and businesses.",
    href: "/service-areas/triad",
    image: "/images/service-areas/triad.jpg",
  },
  {
    name: "Hickory",
    cities: "Hickory, Morganton, Lenoir, Newton, Conover",
    description:
      "Bringing professional Christmas light installation to the Catawba Valley and surrounding foothills.",
    href: "/service-areas/hickory",
    image: "/images/service-areas/hickory.jpg",
  },
  {
    name: "Boone",
    cities: "Boone, Blowing Rock, Banner Elk, Linville, Sugar Mountain",
    description:
      "Holiday lights that shine bright in the High Country. Mountain homes deserve mountain-grade installation.",
    href: "/service-areas/boone",
    image: "/images/service-areas/boone.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Go-Forth transformed our home last Christmas. The design was stunning, installation was quick, and when one strand went out in January, they were back the next day. Worth every penny.",
    name: "Sarah M.",
    location: "Mooresville",
    stars: 5,
    initials: "SM",
    color: "bg-gf-green",
  },
  {
    quote:
      "We've been using Go-Forth for pest control for years, so trying their Christmas lights was a no-brainer. Absolutely professional. Our neighbors couldn't stop asking who did our lights.",
    name: "David K.",
    location: "Greensboro",
    stars: 5,
    initials: "DK",
    color: "bg-gf-gold",
  },
  {
    quote:
      "Best decision we made last holiday season. No more tangled lights, no more climbing ladders. Just beautiful lights from Thanksgiving through New Year's.",
    name: "Jennifer T.",
    location: "Davidson",
    stars: 5,
    initials: "JT",
    color: "bg-gf-red",
  },
];

const howItWorksSteps = [
  {
    number: "1",
    title: "Request a Free Quote",
    description:
      "Tell us about your home and vision. We'll schedule a time to visit and design a custom lighting plan.",
    icon: (
      <svg className="w-10 h-10 text-gf-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Custom Design",
    description:
      "Our designers create a personalized lighting plan tailored to your home's architecture and your style preferences.",
    icon: (
      <svg className="w-10 h-10 text-gf-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Professional Installation",
    description:
      "Our trained technicians install everything safely and efficiently. We supply all commercial-grade materials.",
    icon: (
      <svg className="w-10 h-10 text-gf-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Sit Back & Enjoy",
    description:
      "We handle maintenance all season, then take everything down and store it for next year. Hassle-free from start to finish.",
    icon: (
      <svg className="w-10 h-10 text-gf-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section
        aria-label="Hero"
        className="relative flex items-center justify-center min-h-[700px] lg:min-h-[85vh] overflow-hidden"
      >
        {/* Hero background image */}
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/images/hero-main.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        {/* Dark overlay for text readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-gf-green-dark/80 via-[#0c2a18]/70 to-[#050d08]/80"
        />

        {/* Radial spotlight overlay from center-bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(26,86,50,0.4) 0%, rgba(15,61,34,0.15) 40%, transparent 70%)",
          }}
        />

        {/* Secondary warm spotlight */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212,168,67,0.06) 0%, transparent 60%)",
          }}
        />

        {/* Light string across the top */}
        <div aria-hidden="true" className="absolute top-8 left-0 right-0 h-[2px] overflow-visible pointer-events-none">
          <div className="relative w-full h-full">
            {/* The wire */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {/* Bulbs along the wire */}
            {[8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88].map((pos, i) => (
              <span
                key={pos}
                className="absolute top-[-3px] w-2.5 h-2.5 rounded-full"
                style={{
                  left: `${pos}%`,
                  background: i % 3 === 0 ? "#d4a843" : i % 3 === 1 ? "#ff4444" : "#44ff44",
                  boxShadow: `0 0 6px 2px ${i % 3 === 0 ? "rgba(212,168,67,0.6)" : i % 3 === 1 ? "rgba(255,68,68,0.5)" : "rgba(68,255,68,0.5)"}`,
                  animation: `sparkle ${2.5 + (i % 3) * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 200}ms`,
                }}
              />
            ))}
            {/* Drooping wire segments */}
            <svg className="absolute -top-1 left-[8%] w-[80%] h-6 overflow-visible" preserveAspectRatio="none">
              <path
                d="M0,0 Q12.5%,18 25%,0 Q37.5%,18 50%,0 Q62.5%,18 75%,0 Q87.5%,18 100%,0"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>

        {/* Sparkle / twinkle dots -- 24 total */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* White sparkles */}
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
          <span className="sparkle-dot top-[20%] left-[5%] w-0.5 h-0.5 animation-delay-400" />
          <span className="sparkle-dot top-[88%] left-[55%] w-1 h-1 animation-delay-600" />
          <span className="sparkle-dot top-[48%] left-[22%] w-0.5 h-0.5 animation-delay-1000" />
          <span className="sparkle-dot top-[30%] left-[92%] w-1 h-1 animation-delay-1300" />
          <span className="sparkle-dot top-[90%] left-[82%] w-0.5 h-0.5 animation-delay-200" />
          {/* Gold sparkles */}
          <span className="sparkle-dot-gold top-[22%] left-[30%] w-1.5 h-1.5 animation-delay-600" />
          <span className="sparkle-dot-gold top-[50%] left-[90%] w-1 h-1 animation-delay-1300" />
          <span className="sparkle-dot-gold top-[70%] left-[15%] w-1 h-1 animation-delay-400" />
          <span className="sparkle-dot-gold top-[45%] left-[55%] w-1.5 h-1.5 animation-delay-1000" />
          <span className="sparkle-dot-gold top-[18%] left-[80%] w-2 h-2 animation-delay-200" />
          <span className="sparkle-dot-gold top-[62%] left-[35%] w-1 h-1 animation-delay-900" />
          <span className="sparkle-dot-gold top-[78%] left-[60%] w-1.5 h-1.5 animation-delay-1600" />
          <span className="sparkle-dot-gold top-[85%] left-[8%] w-1 h-1 animation-delay-1100" />
          <span className="sparkle-dot-gold top-[38%] left-[68%] w-2 h-2 animation-delay-700" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center fadeInUp">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white font-[family-name:var(--font-display)]"
            style={{
              textShadow: "0 0 40px rgba(212,168,67,0.3), 0 0 80px rgba(212,168,67,0.1), 0 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Make Your Home the Brightest on the Block
          </h1>

          {/* Decorative divider */}
          <div className="mt-8 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="block w-12 h-px bg-gradient-to-r from-transparent to-gf-gold/60" />
            <span className="block w-2 h-2 rounded-full bg-gf-gold/80" />
            <span className="block w-12 h-px bg-gradient-to-l from-transparent to-gf-gold/60" />
          </div>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto">
            Professional Christmas light installation across Lake Norman, the Triad, and Western NC.
            Licensed, insured, and backed by 60+ years of trusted home service.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-gf-gold text-white shadow-lg transition-all duration-300 hover:bg-gf-gold-light hover:text-gf-charcoal hover:shadow-[0_0_30px_rgba(212,168,67,0.5)] focus:outline-none focus:ring-2 focus:ring-gf-gold focus:ring-offset-2 focus:ring-offset-gf-green-dark"
              style={{
                animation: "glow-pulse 3s ease-in-out infinite",
              }}
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/gallery"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white/80 text-white overflow-hidden transition-all duration-300 hover:bg-white hover:text-gf-green-dark focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gf-green-dark"
            >
              <span className="relative z-10">See Our Work</span>
              {/* Shimmer effect on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </Link>
          </div>

          <div className="mt-8">
            <AvailabilityBadge />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section aria-label="Trust indicators" className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            <TrustItem
              icon={
                <svg className="w-8 h-8 text-gf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
                </svg>
              }
              stat="60+"
              title="Years in Business"
              subtitle="Trusted since 1959"
              hasDivider
            />
            <TrustItem
              icon={
                <svg className="w-8 h-8 text-gf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              }
              stat="100%"
              title="Licensed & Insured"
              subtitle="Full liability coverage"
              hasDivider
            />
            <TrustItem
              icon={
                <svg className="w-8 h-8 text-gf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              }
              stat="LED"
              title="Commercial-Grade"
              subtitle="Brighter, longer-lasting"
              hasDivider
            />
            <TrustItem
              icon={
                <svg className="w-8 h-8 text-gf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              }
              stat="5.0"
              title="Satisfaction Guarantee"
              subtitle="We stand behind our work"
            />
          </div>
        </div>
      </section>

      {/* ── How It Works (inlined, premium version) ── */}
      <section aria-labelledby="how-it-works-heading" className="py-24 bg-gf-cream relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #1a5632 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gf-gold mb-3">
              Simple Process
            </span>
            <h2
              id="how-it-works-heading"
              className="text-3xl sm:text-4xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]"
            >
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gf-gray max-w-xl mx-auto">
              From first call to final takedown, we make holiday lighting effortless.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting dotted line (desktop only) */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px]"
              style={{
                backgroundImage: "linear-gradient(to right, #d4a843 4px, transparent 4px)",
                backgroundSize: "12px 2px",
                backgroundRepeat: "repeat-x",
              }}
            />

            {howItWorksSteps.map((step, idx) => (
              <div
                key={step.number}
                className="relative text-center group"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Glass card */}
                <div className="relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur-sm p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Step number circle */}
                  <div className="mx-auto mb-5 relative flex items-center justify-center w-[104px] h-[104px]">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gf-gold/20 to-gf-gold-light/10" />
                    {/* Inner white circle with icon */}
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg">
                      {step.icon}
                    </div>
                  </div>

                  {/* Gold gradient number badge */}
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white text-sm font-bold mb-3 shadow-md"
                    style={{
                      background: "linear-gradient(135deg, #d4a843 0%, #f0d078 100%)",
                    }}
                  >
                    {step.number}
                  </span>

                  <h3 className="text-lg font-semibold text-gf-charcoal">{step.title}</h3>
                  <p className="mt-2 text-sm text-gf-gray leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow between cards (desktop, not on last) */}
                {idx < howItWorksSteps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex absolute -right-4 top-[52px] z-10 items-center justify-center w-8 h-8 rounded-full bg-white shadow-md border border-gf-gold/20"
                  >
                    <svg className="w-4 h-4 text-gf-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section aria-labelledby="service-areas-heading" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative topographic-style background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 80 Q30 60 50 70 T90 50' fill='none' stroke='%231a5632' stroke-width='1'/%3E%3Cpath d='M0 60 Q25 40 50 50 T100 30' fill='none' stroke='%231a5632' stroke-width='1'/%3E%3Cpath d='M5 95 Q35 75 60 85 T100 65' fill='none' stroke='%231a5632' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gf-gold mb-3">
              Coverage Area
            </span>
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
              <div key={area.name} className="group relative">
                {/* Gradient top border */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r from-gf-green to-gf-gold group-hover:from-gf-gold group-hover:to-gf-gold-light transition-all duration-500"
                />
                <ServiceAreaCard
                  name={area.name}
                  cities={area.cities}
                  description={area.description}
                  href={area.href}
                  image={area.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After Preview ── */}
      <section
        aria-labelledby="before-after-heading"
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(170deg, #faf8f0 0%, #fff8e7 50%, #faf8f0 100%)",
        }}
      >
        {/* Decorative quote marks */}
        <div aria-hidden="true" className="absolute top-8 left-8 text-gf-gold/[0.06] pointer-events-none">
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
            <path d="M30 60c-11 0-20-9-20-20s9-20 20-20c0-11 9-20 20-20v20c-11 0-20 9-20 20h20v20H30zm50 0c-11 0-20-9-20-20s9-20 20-20c0-11 9-20 20-20v20c-11 0-20 9-20 20h20v20H80z" />
          </svg>
        </div>
        <div aria-hidden="true" className="absolute bottom-8 right-8 text-gf-gold/[0.06] rotate-180 pointer-events-none">
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
            <path d="M30 60c-11 0-20-9-20-20s9-20 20-20c0-11 9-20 20-20v20c-11 0-20 9-20 20h20v20H30zm50 0c-11 0-20-9-20-20s9-20 20-20c0-11 9-20 20-20v20c-11 0-20 9-20 20h20v20H80z" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gf-gold mb-3">
              The Difference
            </span>
            <h2
              id="before-after-heading"
              className="text-3xl sm:text-4xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]"
            >
              See the Transformation
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/80">
            <BeforeAfterSlider />
          </div>
          <p className="mt-6 text-center text-gf-gray text-sm">
            Drag the slider to compare before and after our professional installation.
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section aria-labelledby="testimonials-heading" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gf-gold mb-3">
              Testimonials
            </span>
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]"
            >
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {testimonials.map((t, idx) => (
              <blockquote
                key={t.name}
                className={`relative flex flex-col rounded-2xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-gf-green ${
                  idx === 1 ? "md:mt-6" : idx === 2 ? "md:mt-3" : ""
                }`}
              >
                {/* Large decorative quote mark */}
                <div
                  aria-hidden="true"
                  className="absolute top-4 right-6 text-6xl leading-none font-serif text-gf-gold/10 pointer-events-none select-none"
                >
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5" aria-label={`${t.stars} out of 5 stars`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5.5 h-5.5 text-gf-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  ))}
                </div>

                <p className="flex-1 text-sm leading-relaxed text-gf-charcoal">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <footer className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full ${t.color} flex items-center justify-center`}
                  >
                    <span className="text-white text-xs font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-semibold text-gf-charcoal block">
                      {t.name}
                    </cite>
                    <span className="text-xs text-gf-gray">{t.location}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Style Quiz CTA ── */}
      <section
        aria-labelledby="style-quiz-heading"
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #fff8e7 0%, #faf8f0 30%, #fff8e7 60%, #faf8f0 100%)",
          backgroundSize: "200% 200%",
          animation: "gradient-shift 8s ease-in-out infinite",
        }}
      >
        {/* Decorative frame border */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative border-2 border-gf-gold/20 rounded-3xl p-12 sm:p-16">
            {/* Corner decorations */}
            <div aria-hidden="true" className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-gf-gold rounded-tl-3xl" />
            <div aria-hidden="true" className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-gf-gold rounded-tr-3xl" />
            <div aria-hidden="true" className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-gf-gold rounded-bl-3xl" />
            <div aria-hidden="true" className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-gf-gold rounded-br-3xl" />

            {/* Scattered decorative stars */}
            <div aria-hidden="true" className="absolute top-6 right-12 text-gf-gold/15 pointer-events-none">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <div aria-hidden="true" className="absolute bottom-10 left-10 text-gf-gold/10 pointer-events-none">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <div aria-hidden="true" className="absolute top-16 left-6 text-gf-gold/8 pointer-events-none">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>

            <div className="text-center">
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
                className="mt-8 inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-gf-gold text-white shadow-lg hover:bg-gf-gold-light hover:text-gf-charcoal hover:shadow-[0_0_24px_rgba(212,168,67,0.4)] transition-all duration-300"
              >
                Take the Style Quiz
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
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
  stat,
  title,
  subtitle,
  hasDivider,
}: {
  icon: React.ReactNode;
  stat: string;
  title: string;
  subtitle: string;
  hasDivider?: boolean;
}) {
  return (
    <div
      className={`group relative flex flex-col items-center text-center gap-2 py-4 px-2 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-gf-cream/50 ${
        hasDivider ? "lg:border-r lg:border-gray-200" : ""
      }`}
    >
      <div aria-hidden="true" className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="text-2xl sm:text-3xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]">
        {stat}
      </span>
      <span className="text-sm font-semibold text-gf-charcoal">{title}</span>
      <span className="text-xs text-gf-gray">{subtitle}</span>
    </div>
  );
}
