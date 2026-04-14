import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Go-Forth Christmas Lights | Get in Touch",
  description:
    "Contact Go-Forth Christmas Lights for professional holiday light installation in North Carolina. Call (877) 274-1475 or send us a message. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-label="Contact hero"
        className="bg-gradient-to-br from-gf-red-dark via-gf-red to-gf-red-light px-6 py-16 text-center sm:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Have a question or ready to get started? We&rsquo;d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="bg-gf-cream px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Left: Form */}
          <div>
            <ContactForm />
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-8">
            {/* Phone Numbers */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gf-charcoal">
                Contact Information
              </h2>

              <div className="mt-6 space-y-5">
                {/* Main Phone */}
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-6 w-6 shrink-0 text-gf-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gf-charcoal">
                      Main Line
                    </p>
                    <a
                      href="tel:+18772741475"
                      className="text-lg font-bold text-gf-red hover:text-gf-red-light transition-colors"
                    >
                      (877) 274-1475
                    </a>
                  </div>
                </div>

                {/* Lake Norman Phone */}
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-6 w-6 shrink-0 text-gf-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gf-charcoal">
                      Lake Norman Office
                    </p>
                    <a
                      href="tel:+17046636440"
                      className="text-lg font-bold text-gf-red hover:text-gf-red-light transition-colors"
                    >
                      (704) 663-6440
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-6 w-6 shrink-0 text-gf-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gf-charcoal">
                      Email
                    </p>
                    <a
                      href="mailto:lights@go-forth.com"
                      className="text-lg font-bold text-gf-red hover:text-gf-red-light transition-colors"
                    >
                      lights@go-forth.com
                    </a>
                  </div>
                </div>

                {/* Locations */}
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-6 w-6 shrink-0 text-gf-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gf-charcoal">
                      Headquarters
                    </p>
                    <p className="text-gf-gray">High Point, NC</p>
                    <p className="mt-3 text-sm font-semibold text-gf-charcoal">
                      Lake Norman Office
                    </p>
                    <p className="text-gf-gray">
                      552 Williamson Rd, Mooresville, NC 28115
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-6 w-6 shrink-0 text-gf-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gf-charcoal">
                      Hours
                    </p>
                    <p className="text-gf-gray">Mon&ndash;Fri: 8am&ndash;6pm</p>
                    <p className="text-gf-gray">Sat: 9am&ndash;2pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-bold text-gf-charcoal">
                Looking for something else?
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 text-gf-red font-semibold hover:text-gf-red-light transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  Get an instant estimate
                </Link>
                <Link
                  href="/style-quiz"
                  className="inline-flex items-center gap-2 text-gf-red font-semibold hover:text-gf-red-light transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  Take our style quiz
                </Link>
              </div>
            </div>

            {/* Response Time Promise */}
            <div className="rounded-2xl border border-gf-gold/30 bg-gf-warm-white p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gf-charcoal">
                Our Response Time Promise
              </h3>
              <p className="mt-3 leading-relaxed text-gf-gray">
                We respond to all inquiries within{" "}
                <strong className="text-gf-charcoal">24 hours</strong> during
                the season (September&ndash;January). Off-season inquiries are
                answered within{" "}
                <strong className="text-gf-charcoal">48 hours</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
