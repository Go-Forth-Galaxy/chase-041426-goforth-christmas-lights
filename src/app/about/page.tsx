import type { Metadata } from "next";
import Image from "next/image";
import basePath from "@/lib/basePath";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Go-Forth Christmas Lights | 60+ Years of Trusted Home Service",
  description:
    "Learn about Go-Forth Christmas Lights — a division of Go-Forth Home Services, a third-generation family company serving North Carolina since 1959. Licensed, insured, and community-focused.",
};

const trustCards = [
  {
    title: "Licensed & Insured",
    description:
      "Full liability insurance and workers\u2019 compensation. Your home and our team are protected.",
    icon: (
      <svg
        className="h-10 w-10 text-gf-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
  {
    title: "60+ Years in Business",
    description:
      "We\u2019re not a seasonal side hustle. We\u2019re a third-generation family company with a reputation to uphold.",
    icon: (
      <svg
        className="h-10 w-10 text-gf-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Local Teams",
    description:
      "Your installation crew lives in your community. We\u2019re neighbors, not strangers.",
    icon: (
      <svg
        className="h-10 w-10 text-gf-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Guaranteed Satisfaction",
    description:
      "If you\u2019re not happy with any aspect of your installation, we\u2019ll make it right. Period.",
    icon: (
      <svg
        className="h-10 w-10 text-gf-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m.729-6.105a3 3 0 0 0-.614-1.903L3.87 8.153a3 3 0 0 0-1.52-.753M5.904 16.105H4.25a2.25 2.25 0 0 1-2.25-2.25v-4.5a2.25 2.25 0 0 1 2.25-2.25h1.654"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "We\u2019ve used Go-Forth for pest control for 10 years. When they started offering Christmas lights, we didn\u2019t think twice. Same great people, same great service. Our house has never looked better during the holidays.",
    name: "Mike & Linda R.",
    location: "High Point",
    rating: 5,
  },
  {
    quote:
      "What impressed me most was the communication. They showed up when they said they would, the crew was professional, and when I had a question in December, someone answered the phone on the first ring.",
    name: "Patricia W.",
    location: "Cornelius",
    rating: 5,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-label="About hero"
        className="bg-gradient-to-br from-gf-red-dark via-gf-red to-gf-red-light px-6 py-20 text-center sm:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl">
            Three Generations of Making Homes Shine
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            What started as a pest control company in High Point in 1959 has
            grown into North Carolina&rsquo;s most trusted home services
            provider. And yes, we hang a mean set of Christmas lights.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section
        aria-labelledby="story-heading"
        className="bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-3xl">
          <h2
            id="story-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal sm:text-4xl"
          >
            Our Story
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-gf-gray">
            <p>
              In 1959, Frank Goforth &mdash; a WWII veteran &mdash; and his wife
              Johnie founded a small pest control company in High Point, North
              Carolina. Their philosophy was simple: show up on time, do honest
              work, and treat every customer&rsquo;s home like your own.
            </p>
            <p>
              Three generations later, that philosophy hasn&rsquo;t changed. Today,
              Go-Forth is led by Frank&rsquo;s grandson,{" "}
              <strong className="text-gf-charcoal">Chase Hazelwood</strong>, as
              CEO. Under his leadership, the company has grown from pest control
              into a full home services provider &mdash; HVAC, plumbing,
              electrical, contracting, and yes, Christmas lights.
            </p>
            <p>
              &ldquo;We got into Christmas lights because our customers kept
              asking. They trusted us in their homes for pest control and HVAC
              &mdash; hanging lights was a natural extension of that
              trust.&rdquo;
            </p>
            <p>
              Today, Go-Forth has{" "}
              <strong className="text-gf-charcoal">200+ employees</strong> and{" "}
              <strong className="text-gf-charcoal">20+ locations</strong> across
              North Carolina, South Carolina, Virginia, and beyond &mdash;
              still guided by the values Frank and Johnie built the company on
              more than six decades ago.
            </p>
          </div>
          </div>

          {/* Team photo */}
          <div className="relative hidden lg:block w-72 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={`${basePath}/images/about/team.jpg`}
              alt="The Go-Forth Christmas Lights team"
              width={288}
              height={384}
              className="object-cover w-full h-full"
            />
          </div>
          </div>

          {/* Team photo (mobile) */}
          <div className="relative mt-10 lg:hidden overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={`${basePath}/images/about/team.jpg`}
              alt="The Go-Forth Christmas Lights team"
              width={800}
              height={500}
              className="object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Why Trust Go-Forth */}
      <section
        aria-labelledby="trust-heading"
        className="bg-gf-cream px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="trust-heading"
            className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal sm:text-4xl"
          >
            Why Trust Go-Forth With Your Holiday Lights?
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-gf-charcoal">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gf-gray">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section
        aria-labelledby="community-heading"
        className="bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="community-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal sm:text-4xl"
          >
            Rooted in the Community
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-gf-gray">
            <p>
              We don&rsquo;t just work in North Carolina &mdash; we live here.
              Go-Forth is a proud front-of-jersey partner for{" "}
              <strong className="text-gf-charcoal">Carolina Core FC</strong>,
              and we&rsquo;re active members of local chambers of commerce
              across the Triad and Lake Norman.
            </p>
            <p>
              For over six decades, we&rsquo;ve been supporting NC communities
              &mdash; through employment, sponsorships, and simply showing up
              when our neighbors need us. That&rsquo;s not marketing. That&rsquo;s
              just how the Goforth family does business.
            </p>
          </div>

          {/* Installation photo */}
          <div className="relative mt-10 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={`${basePath}/images/about/installation.jpg`}
              alt="Go-Forth crew installing Christmas lights on a home"
              width={800}
              height={450}
              className="object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="about-testimonials-heading"
        className="bg-gf-cream px-6 py-20"
      >
        <div className="mx-auto max-w-4xl">
          <h2
            id="about-testimonials-heading"
            className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal sm:text-4xl"
          >
            What Our Customers Say
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                location={t.location}
                rating={t.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
