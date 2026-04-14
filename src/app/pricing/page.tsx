import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Christmas Light Installation Pricing | Go-Forth",
  description:
    "Transparent pricing for professional Christmas light installation in North Carolina. Packages starting at $599 include commercial-grade LEDs, installation, maintenance, removal, and storage.",
};

const packages = [
  {
    name: "Classic",
    price: "$599",
    highlighted: false,
    features: [
      "Roofline lighting (up to 150 linear ft)",
      "Commercial-grade warm white LEDs",
      "Professional installation",
      "Season-long maintenance",
      "Removal & storage",
    ],
    perfectFor: "Homes that want clean, elegant holiday lighting",
    cta: "Get Classic Quote",
  },
  {
    name: "Premium",
    price: "$1,199",
    highlighted: true,
    features: [
      "Everything in Classic, plus:",
      "Extended roofline (up to 250 linear ft)",
      "Up to 3 trees wrapped",
      "Front door wreath & garland",
      "Window accents",
      "Custom color selection",
    ],
    perfectFor: "Homes that want to stand out on the block",
    cta: "Get Premium Quote",
  },
  {
    name: "Showstopper",
    price: "$2,499",
    highlighted: false,
    features: [
      "Everything in Premium, plus:",
      "Unlimited roofline footage",
      "Up to 6 trees wrapped",
      "Pathway lighting",
      "Additional wreaths & garlands",
      "Custom design consultation",
      "Priority scheduling",
    ],
    perfectFor: "Homes that want the best display in the neighborhood",
    cta: "Get Showstopper Quote",
  },
];

const additionalServices = [
  { service: "Additional tree wrapping", price: "$150\u2013$300 per tree" },
  { service: "Wreaths", price: "$50\u2013$100 each" },
  { service: "Garland (per foot)", price: "$5\u2013$10" },
  { service: "Pathway/walkway lighting", price: "$3\u2013$5 per foot" },
  { service: "Custom elements", price: "Contact for pricing" },
  { service: "Commercial properties", price: "Contact for custom quote" },
];

const faqs = [
  {
    question: "Aren\u2019t store-bought lights cheaper?",
    answer:
      "Yes, but they\u2019re not commercial-grade, don\u2019t include installation, and you\u2019re climbing a ladder. Our lights last 10+ seasons.",
  },
  {
    question: "Why is the first year more expensive?",
    answer:
      "First-year cost includes the lights themselves. Returning customers save 20\u201330% because we already have your lights in storage.",
  },
  {
    question: "Do I need to provide anything?",
    answer:
      "No. We provide everything: lights, clips, extension cords, timers, and all hardware. You provide the house.",
  },
  {
    question: "What if I want to change my design next year?",
    answer:
      "No problem. We can modify your design each season. Design consultations are always free.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-label="Pricing hero"
        className="bg-gradient-to-br from-gf-green-dark via-gf-green to-gf-green-light px-6 py-20 text-center sm:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl">
            Transparent Pricing. No Surprises.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            We believe you deserve to know what to expect before you call.
            Here&rsquo;s what professional Christmas light installation
            typically costs.
          </p>
        </div>
      </section>

      {/* How Our Pricing Works */}
      <section
        aria-labelledby="pricing-how"
        className="bg-gf-cream px-6 py-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="pricing-how"
            className="font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal"
          >
            How Our Pricing Works
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gf-gray">
            Our pricing is based on the linear footage of your roofline, the
            complexity of your design, and any additional features like tree
            wrapping or wreaths. Every package includes commercial-grade LED
            lights, professional installation, season-long maintenance, safe
            removal, and storage.
          </p>
        </div>
      </section>

      {/* Package Cards */}
      <section
        aria-labelledby="packages-heading"
        className="bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="packages-heading" className="sr-only">
            Packages
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl border-2 p-8 shadow-sm transition-shadow hover:shadow-lg ${
                  pkg.highlighted
                    ? "border-gf-gold bg-gf-warm-white shadow-md"
                    : "border-gray-200 bg-white"
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gf-gold px-4 py-1 text-sm font-bold text-white">
                    Most Popular
                  </span>
                )}

                <div className="mb-6 text-center">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gf-charcoal">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-sm text-gf-gray">Starting at</p>
                  <p className="text-4xl font-bold text-gf-green">
                    {pkg.price}
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-gf-charcoal"
                    >
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-gf-green"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mb-6 text-sm text-gf-gray italic">
                  Perfect for: {pkg.perfectFor}
                </p>

                <Link
                  href="/quote"
                  className={`block rounded-lg px-6 py-3 text-center font-bold transition-colors ${
                    pkg.highlighted
                      ? "bg-gf-gold text-white hover:bg-gf-gold-light hover:text-gf-charcoal"
                      : "bg-gf-green text-white hover:bg-gf-green-light"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section
        aria-labelledby="additional-heading"
        className="bg-gf-cream px-6 py-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="additional-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal text-center"
          >
            Additional Services
          </h2>

          <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gf-green">
                  <th className="px-6 py-4 text-sm font-semibold text-white">
                    Service
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-white">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {additionalServices.map((item, i) => (
                  <tr
                    key={item.service}
                    className={`border-b border-gray-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-gf-gray-light"
                    }`}
                  >
                    <td className="px-6 py-4 text-gf-charcoal">
                      {item.service}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-gf-green">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2
            id="faq-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal text-center"
          >
            &ldquo;Why Isn&rsquo;t It Cheaper?&rdquo;
          </h2>

          <dl className="mt-10 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-lg font-semibold text-gf-charcoal">
                  {faq.question}
                </dt>
                <dd className="mt-2 leading-relaxed text-gf-gray">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Not Sure Which Package? Try Our 60-Second Quiz"
        subtext="Take our style quiz to find the perfect package for your home, or request a custom quote from our design team."
      />

      {/* Extra CTA links */}
      <section className="bg-gf-green-dark px-6 py-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/style-quiz"
            className="inline-flex items-center rounded-lg bg-gf-gold px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-gf-gold-light hover:text-gf-charcoal hover:shadow-xl"
          >
            Take the Style Quiz
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
