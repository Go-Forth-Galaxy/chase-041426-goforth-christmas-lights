import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Go-Forth Christmas Lights",
  description:
    "Privacy policy for Go-Forth Home Services Christmas light installation website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 prose prose-gray">
        <h1 className="text-3xl sm:text-4xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]">
          Privacy Policy
        </h1>
        <p className="text-sm text-gf-gray">Last updated: April 14, 2026</p>

        <p>
          Go-Forth Home Services (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
          operates the lights.go-forth.com website. This page informs you of our policies regarding
          the collection, use, and disclosure of personal information when you use our website.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone number, and home
            address when you request a quote, fill out a contact form, or communicate with us.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you access and use the website,
            including your IP address, browser type, pages visited, and time spent on pages.
          </li>
          <li>
            <strong>Property Information:</strong> Details about your home or property that you
            provide when requesting a quote or service estimate.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Use of Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Respond to your inquiries and fulfill your requests</li>
          <li>Send you quotes, appointment confirmations, and service-related communications</li>
          <li>Analyze website usage to improve user experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Cookies</h2>
        <p>
          Our website may use cookies and similar tracking technologies to enhance your browsing
          experience. You can instruct your browser to refuse all cookies or to indicate when a
          cookie is being sent. However, some features of the website may not function properly
          without cookies.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Third-Party Services</h2>
        <p>
          We may use third-party services such as analytics providers, form processors, and
          advertising platforms. These third parties may collect information about your online
          activities over time and across different websites. We do not sell your personal
          information to third parties.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal information against
          unauthorized access, alteration, disclosure, or destruction. However, no method of
          transmission over the Internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information at any
          time by contacting us. We will respond to your request within a reasonable timeframe.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by
          posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date.
        </p>

        <h2 className="text-xl font-semibold text-gf-charcoal mt-8">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
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
