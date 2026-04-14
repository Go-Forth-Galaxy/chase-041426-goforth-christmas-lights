import type { Metadata } from "next";
import StyleQuiz from "@/components/StyleQuiz";

export const metadata: Metadata = {
  title: "What's Your Holiday Lighting Style? | Go-Forth Christmas Lights",
  description:
    "Take our 60-second quiz to discover your perfect holiday lighting package. Get a personalized recommendation and instant estimate for professional Christmas light installation in NC.",
  openGraph: {
    title: "What's Your Holiday Lighting Style? | Go-Forth Christmas Lights",
    description:
      "Take our 60-second quiz and we'll recommend the perfect Christmas lighting package for your home.",
  },
};

export default function StyleQuizPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gf-red-dark to-gf-red px-4 py-16 text-center lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Discover Your Holiday Lighting Style
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gf-cream/80">
            Take our 60-second quiz and we&apos;ll recommend the perfect package for your home.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="bg-gf-cream px-4 py-12 lg:py-16">
        <StyleQuiz />
      </section>
    </>
  );
}
