import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Go-Forth Christmas Lights",
  description:
    "Terms of service for Go-Forth Home Services Christmas light installation website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 prose prose-gray">
        <h1 className="text-3xl sm:text-4xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]">
          Terms of Service
        </h1>
        <p className="text-sm text-gf-gray">Last updated: April 14, 2026</p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Acceptance of Terms</h2>
        <p>
          By accessing or using the Go-Forth Home Services website at lights.go-forth.com, you
          agree to be bound by these Terms of Service. If you do not agree to these terms, please
          do not use our website.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Services Description</h2>
        <p>
          Go-Forth Home Services provides professional Christmas and holiday light installation,
          maintenance, and removal services for residential and commercial properties in North
          Carolina. Our website provides information about our services, pricing, and allows you to
          request quotes and schedule services.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Quotes and Pricing</h2>
        <p>
          All quotes provided through our website or by our team are estimates based on the
          information provided. Final pricing may vary based on actual property conditions, scope of
          work, and materials required. Quotes are valid for 30 days from the date issued unless
          otherwise stated.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Payment Terms</h2>
        <p>
          Payment terms will be outlined in your service agreement. A deposit may be required to
          secure your installation date. Full payment is due upon completion of installation unless
          other arrangements have been made in writing.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Warranty and Guarantees</h2>
        <p>
          We stand behind our work with a satisfaction guarantee for the duration of the holiday
          season. If lights malfunction or are damaged due to our installation, we will repair or
          replace them at no additional cost. This warranty does not cover damage caused by severe
          weather events, vandalism, or unauthorized modifications.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Limitation of Liability</h2>
        <p>
          Go-Forth Home Services shall not be liable for any indirect, incidental, special, or
          consequential damages arising from the use of our website or services. Our total liability
          shall not exceed the amount paid by you for the specific service in question. We maintain
          comprehensive general liability insurance for all installation work.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Cancellation Policy</h2>
        <p>
          Cancellations made more than 14 days before the scheduled installation date will receive a
          full refund of any deposit paid. Cancellations made within 14 days of the scheduled date
          may be subject to a cancellation fee. Please contact us as soon as possible if you need
          to reschedule or cancel.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, images, and software, is the
          property of Go-Forth Home Services and is protected by copyright and trademark laws. You
          may not reproduce, distribute, or create derivative works from any content on this website
          without our express written permission.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Changes will be
          effective immediately upon posting to this page. Your continued use of the website after
          changes are posted constitutes acceptance of the modified terms.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:lights@go-forth.com" className="text-gf-green hover:underline">
              lights@go-forth.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+18772741475" className="text-gf-green hover:underline">
              (877) 274-1475
            </a>
          </li>
          <li>
            <strong>Company:</strong> Go-Forth Home Services
          </li>
        </ul>
      </div>
    </section>
  );
}
