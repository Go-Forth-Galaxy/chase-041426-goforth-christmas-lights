"use client";

import { useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface QuizOption {
  value: string;
  label: string;
  desc: string;
  icon: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

type PackageTier = "basic" | "premium" | "showstopper";

interface PackageResult {
  tier: PackageTier;
  name: string;
  description: string;
  lowPerFoot: number;
  highPerFoot: number;
  baseLow: number;
  baseHigh: number;
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const questions: QuizQuestion[] = [
  {
    id: "vibe",
    question: "What vibe are you going for?",
    options: [
      { value: "elegant", label: "Elegant & Classic", desc: "Warm whites, clean lines, timeless sophistication", icon: "✨" },
      { value: "festive", label: "Festive & Fun", desc: "Multi-color, more-is-more, pure holiday joy", icon: "🎄" },
      { value: "modern", label: "Modern & Minimalist", desc: "Cool whites, architectural accents, sleek design", icon: "🏠" },
      { value: "showstopper", label: "Full Showstopper", desc: "All out, the whole nine yards, maximum wow", icon: "🌟" },
    ],
  },
  {
    id: "priority",
    question: "What's most important to you?",
    options: [
      { value: "neighbors", label: "Looking better than the neighbors", desc: "Let's make sure your house stands out on the block", icon: "🏆" },
      { value: "memories", label: "Making memories for my kids", desc: "Creating that magical holiday feeling at home", icon: "👨‍👩‍👧‍👦" },
      { value: "guests", label: "Impressing holiday guests", desc: "A stunning display for every visitor", icon: "🎉" },
      { value: "ladder", label: "I just don't want to climb a ladder", desc: "Leave the heights to the professionals", icon: "🪜" },
    ],
  },
  {
    id: "roofline",
    question: "How do you feel about your roofline?",
    options: [
      { value: "full", label: "Light it up!", desc: "Every edge, every peak, the full outline", icon: "💡" },
      { value: "subtle", label: "Keep it subtle", desc: "Select areas only, tasteful and refined", icon: "🌙" },
      { value: "unsure", label: "I'm not sure, help me decide", desc: "We'll recommend the right approach for your home", icon: "🤔" },
    ],
  },
  {
    id: "landscaping",
    question: "Trees and landscaping?",
    options: [
      { value: "everything", label: "Yes, wrap everything", desc: "Trees, bushes, pathways — the works", icon: "🌲" },
      { value: "accent", label: "Just accent a few trees", desc: "A few key focal points in the yard", icon: "🎋" },
      { value: "roofline-only", label: "Roofline only, keep it simple", desc: "Clean and focused on the house itself", icon: "🏡" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Scoring                                                             */
/* ------------------------------------------------------------------ */

function determinePackage(answers: Record<string, string>): PackageResult {
  let score = 0;

  // Vibe
  if (answers.vibe === "showstopper") score += 3;
  else if (answers.vibe === "festive") score += 2;
  else if (answers.vibe === "elegant") score += 1;
  // modern = 0

  // Priority
  if (answers.priority === "neighbors") score += 2;
  else if (answers.priority === "guests") score += 2;
  else if (answers.priority === "memories") score += 1;
  // ladder = 0

  // Roofline
  if (answers.roofline === "full") score += 2;
  else if (answers.roofline === "unsure") score += 1;
  // subtle = 0

  // Landscaping
  if (answers.landscaping === "everything") score += 3;
  else if (answers.landscaping === "accent") score += 1;
  // roofline-only = 0

  if (score >= 7) {
    return {
      tier: "showstopper",
      name: "The Showstopper",
      description:
        "You want the full experience — and you deserve it. We'll design a jaw-dropping display with full roofline lighting, wrapped trees, landscaping accents, and premium design touches that will make your home the talk of the neighborhood.",
      lowPerFoot: 8,
      highPerFoot: 12,
      baseLow: 1800,
      baseHigh: 4500,
    };
  } else if (score >= 4) {
    return {
      tier: "premium",
      name: "The Premium Package",
      description:
        "You're looking for a polished, impressive display that balances coverage and elegance. Expect full roofline lighting with select accent features — trees, doorways, or pathways — for a display that's festive without going overboard.",
      lowPerFoot: 6,
      highPerFoot: 9,
      baseLow: 1200,
      baseHigh: 3000,
    };
  } else {
    return {
      tier: "basic",
      name: "The Classic Package",
      description:
        "Clean, simple, and beautiful. We'll outfit your roofline with commercial-grade LEDs for a timeless holiday look. Perfect for those who want professional results without the fuss — or the ladder.",
      lowPerFoot: 5,
      highPerFoot: 7,
      baseLow: 600,
      baseHigh: 1500,
    };
  }
}

/* ------------------------------------------------------------------ */
/* Components                                                          */
/* ------------------------------------------------------------------ */

function QuizProgress({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-8" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total} aria-label={`Question ${current} of ${total}`}>
      <div className="mb-2 flex justify-between text-sm font-medium text-gf-gray">
        <span>Question {current} of {total}</span>
      </div>
      <div className="flex gap-2">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-all duration-300 ${
              i < current ? "bg-gf-green" : "bg-gf-gray-light"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ResultScreen({ pkg, answers }: { pkg: PackageResult; answers: Record<string, string> }) {
  const tierColors: Record<PackageTier, string> = {
    basic: "from-gf-green to-gf-green-light",
    premium: "from-gf-green-dark to-gf-green",
    showstopper: "from-gf-gold to-gf-gold-light",
  };

  const params = new URLSearchParams();
  if (answers.vibe) params.set("vibe", answers.vibe);
  if (answers.landscaping) params.set("landscaping", answers.landscaping);
  params.set("package", pkg.tier);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-gf-green">Your Result</p>
        <h2 className="mt-2 text-3xl font-bold text-gf-charcoal sm:text-4xl">{pkg.name}</h2>
      </div>

      <div className={`mt-8 rounded-2xl bg-gradient-to-br ${tierColors[pkg.tier]} p-8 text-center text-white shadow-lg`}>
        <p className="text-sm font-medium uppercase tracking-wide opacity-80">Your Estimated Range</p>
        <p className="mt-2 text-4xl font-bold sm:text-5xl">
          ${pkg.baseLow.toLocaleString()} &ndash; ${pkg.baseHigh.toLocaleString()}
        </p>
        <p className="mt-3 text-sm opacity-70">Final price depends on home size and custom options</p>
      </div>

      <p className="mt-6 text-center text-lg text-gf-gray">{pkg.description}</p>

      <div className="mt-8 flex flex-col items-center gap-4">
        <Link
          href={`/quote?${params.toString()}`}
          className="inline-flex rounded-lg bg-gf-green px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-gf-green-light hover:shadow-xl"
        >
          Get My Exact Quote
        </Link>
        <a
          href="tel:+18772741475"
          className="inline-flex items-center gap-2 text-gf-gray transition-colors hover:text-gf-green"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Or call us: (877) 274-1475
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main StyleQuiz component                                            */
/* ------------------------------------------------------------------ */

export default function StyleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);

  const handleSelect = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    // Auto-advance after short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((q) => q + 1);
      } else {
        setFinished(true);
      }
    }, 300);
  };

  const handleBack = () => {
    if (finished) {
      setFinished(false);
    } else if (currentQuestion > 0) {
      setCurrentQuestion((q) => q - 1);
    }
  };

  if (finished) {
    const pkg = determinePackage(answers);
    return (
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg sm:p-10">
        <ResultScreen pkg={pkg} answers={answers} />
        <div className="mt-8">
          <button
            type="button"
            onClick={handleBack}
            className="rounded-lg border border-gf-gray-light px-6 py-2.5 font-medium text-gf-charcoal transition-all hover:bg-gf-gray-light"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg sm:p-10">
      <QuizProgress current={currentQuestion + 1} total={questions.length} />

      <fieldset>
        <legend className="mb-6 text-2xl font-bold text-gf-charcoal sm:text-3xl">{q.question}</legend>

        <div className="grid gap-4">
          {q.options.map((opt) => (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-5 transition-all hover:shadow-md ${
                answers[q.id] === opt.value
                  ? "border-gf-green bg-gf-green/5 shadow-md"
                  : "border-gf-gray-light bg-white"
              }`}
            >
              <input
                type="radio"
                name={q.id}
                value={opt.value}
                checked={answers[q.id] === opt.value}
                onChange={() => handleSelect(q.id, opt.value)}
                className="sr-only"
                aria-label={opt.label}
              />
              <span className="mt-0.5 text-2xl" aria-hidden="true">{opt.icon}</span>
              <div>
                <span className="block text-lg font-semibold text-gf-charcoal">{opt.label}</span>
                <span className="mt-1 block text-sm text-gf-gray">{opt.desc}</span>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentQuestion === 0}
          className="rounded-lg border border-gf-gray-light px-6 py-2.5 font-medium text-gf-charcoal transition-all hover:bg-gf-gray-light disabled:invisible"
        >
          Back
        </button>
      </div>
    </div>
  );
}
