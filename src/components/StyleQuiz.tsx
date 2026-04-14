"use client";

import { useState, useEffect } from "react";
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
      { value: "everything", label: "Yes, wrap everything", desc: "Trees, bushes, pathways -- the works", icon: "🌲" },
      { value: "accent", label: "Just accent a few trees", desc: "A few key focal points in the yard", icon: "🎋" },
      { value: "roofline-only", label: "Roofline only, keep it simple", desc: "Clean and focused on the house itself", icon: "🏡" },
    ],
  },
];

const gradientBgs = [
  "from-gf-green-dark/5 via-white to-gf-cream",
  "from-gf-cream via-white to-gf-green-dark/5",
  "from-gf-warm-white via-white to-gf-green/5",
  "from-gf-green/5 via-white to-gf-warm-white",
];

/* ------------------------------------------------------------------ */
/* Scoring                                                             */
/* ------------------------------------------------------------------ */

function determinePackage(answers: Record<string, string>): PackageResult {
  let score = 0;

  if (answers.vibe === "showstopper") score += 3;
  else if (answers.vibe === "festive") score += 2;
  else if (answers.vibe === "elegant") score += 1;

  if (answers.priority === "neighbors") score += 2;
  else if (answers.priority === "guests") score += 2;
  else if (answers.priority === "memories") score += 1;

  if (answers.roofline === "full") score += 2;
  else if (answers.roofline === "unsure") score += 1;

  if (answers.landscaping === "everything") score += 3;
  else if (answers.landscaping === "accent") score += 1;

  if (score >= 7) {
    return {
      tier: "showstopper",
      name: "The Showstopper",
      description:
        "You want the full experience -- and you deserve it. We'll design a jaw-dropping display with full roofline lighting, wrapped trees, landscaping accents, and premium design touches that will make your home the talk of the neighborhood.",
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
        "You're looking for a polished, impressive display that balances coverage and elegance. Expect full roofline lighting with select accent features -- trees, doorways, or pathways -- for a display that's festive without going overboard.",
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
        "Clean, simple, and beautiful. We'll outfit your roofline with commercial-grade LEDs for a timeless holiday look. Perfect for those who want professional results without the fuss -- or the ladder.",
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
    <div className="mb-10" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total} aria-label={`Question ${current} of ${total}`}>
      <div className="mb-3 flex justify-between text-sm font-semibold">
        <span className="text-gf-charcoal">Question {current} of {total}</span>
      </div>
      <div className="flex gap-2.5">
        {Array.from({ length: total }, (_, i) => (
          <div key={i} className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-gray-200">
            <div
              className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ease-out ${
                i < current
                  ? "w-full bg-gradient-to-r from-gf-gold to-gf-gold-light"
                  : i === current
                  ? "w-1/2 bg-gradient-to-r from-gf-green to-gf-green-light opacity-50"
                  : "w-0"
              }`}
            />
            {/* Dot indicator */}
            {i < current && (
              <div className="absolute right-0.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ResultScreen({ pkg, answers }: { pkg: PackageResult; answers: Record<string, string> }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(t);
  }, []);

  const tierColors: Record<PackageTier, string> = {
    basic: "from-gf-green to-gf-green-light",
    premium: "from-gf-green-dark to-gf-green",
    showstopper: "from-gf-gold to-gf-gold-light",
  };

  const tierAccents: Record<PackageTier, string> = {
    basic: "border-gf-green/30",
    premium: "border-gf-green/30",
    showstopper: "border-gf-gold/40",
  };

  const params = new URLSearchParams();
  if (answers.vibe) params.set("vibe", answers.vibe);
  if (answers.landscaping) params.set("landscaping", answers.landscaping);
  params.set("package", pkg.tier);

  return (
    <div className="mx-auto max-w-2xl">
      {/* Reveal header */}
      <div className={`text-center transition-all duration-700 ${revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
        <p className="text-sm font-bold uppercase tracking-widest text-gf-gold">Your Perfect Match</p>

        {/* Decorative divider */}
        <div className="mx-auto mt-3 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gf-gold/50" />
          <svg className="h-5 w-5 text-gf-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gf-gold/50" />
        </div>

        <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-gf-charcoal sm:text-5xl">{pkg.name}</h2>
      </div>

      {/* Price card */}
      <div
        className={`relative mt-8 overflow-hidden rounded-2xl border-2 ${tierAccents[pkg.tier]} bg-gradient-to-br ${tierColors[pkg.tier]} p-10 text-center text-white shadow-xl transition-all duration-700 delay-200 ${
          revealed ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
        }`}
      >
        {/* Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ animation: "quizShimmer 3s ease-in-out infinite" }} />
        <style>{`
          @keyframes quizShimmer {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
          }
        `}</style>

        <p className="relative text-sm font-semibold uppercase tracking-widest opacity-90">Your Estimated Range</p>
        <p className="relative mt-3 text-5xl font-bold sm:text-6xl">
          ${pkg.baseLow.toLocaleString()} &ndash; ${pkg.baseHigh.toLocaleString()}
        </p>
        <p className="relative mt-3 text-sm opacity-70">Final price depends on home size and custom options</p>
      </div>

      {/* Description */}
      <div className={`mt-8 rounded-xl border border-gray-200 bg-gf-cream/50 px-6 py-5 transition-all duration-700 delay-400 ${revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
        <p className="text-center text-lg leading-relaxed text-gf-gray">{pkg.description}</p>
      </div>

      {/* CTAs */}
      <div className={`mt-8 flex flex-col items-center gap-4 transition-all duration-700 delay-500 ${revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
        <Link
          href={`/quote?${params.toString()}`}
          className="inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-gf-gold to-gf-gold-light px-10 py-4 text-lg font-bold text-white shadow-lg shadow-gf-gold/25 transition-all duration-300 hover:shadow-xl hover:shadow-gf-gold/30 hover:-translate-y-0.5 sm:w-auto"
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
  const [transitioning, setTransitioning] = useState(false);
  const [showGreatChoice, setShowGreatChoice] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const handleSelect = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    // Show "Great choice!" micro-animation
    setShowGreatChoice(true);

    setTimeout(() => {
      setShowGreatChoice(false);
      setDirection("forward");
      setTransitioning(true);

      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion((q) => q + 1);
        } else {
          setFinished(true);
        }
        setTransitioning(false);
      }, 250);
    }, 600);
  };

  const handleBack = () => {
    if (finished) {
      setDirection("back");
      setTransitioning(true);
      setTimeout(() => {
        setFinished(false);
        setTransitioning(false);
      }, 250);
    } else if (currentQuestion > 0) {
      setDirection("back");
      setTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion((q) => q - 1);
        setTransitioning(false);
      }, 250);
    }
  };

  if (finished) {
    const pkg = determinePackage(answers);
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-10">
        <ResultScreen pkg={pkg} answers={answers} />
        <div className="mt-8">
          <button
            type="button"
            onClick={handleBack}
            className="rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gf-charcoal transition-all duration-300 hover:border-gf-gray hover:bg-gf-gray-light"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];

  const transitionClass = transitioning
    ? direction === "forward"
      ? "opacity-0 translate-x-8"
      : "opacity-0 -translate-x-8"
    : "opacity-100 translate-x-0";

  return (
    <div className={`mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-gradient-to-br ${gradientBgs[currentQuestion]} p-6 shadow-xl transition-all duration-500 sm:p-10`}>
      <QuizProgress current={currentQuestion + 1} total={questions.length} />

      <div className={`transition-all duration-300 ease-out ${transitionClass}`}>
        <fieldset>
          <legend className="mb-8 font-[family-name:var(--font-display)] text-2xl font-bold text-gf-charcoal sm:text-3xl">{q.question}</legend>

          <div className="grid gap-4">
            {q.options.map((opt) => {
              const isSelected = answers[q.id] === opt.value;
              return (
                <label
                  key={opt.value}
                  className={`group relative flex cursor-pointer items-start gap-5 rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                    isSelected
                      ? "border-gf-gold bg-gradient-to-r from-gf-warm-white to-white shadow-lg shadow-gf-gold/10"
                      : "border-gray-200 bg-white hover:border-gf-gold/40"
                  }`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={opt.value}
                    checked={isSelected}
                    onChange={() => handleSelect(q.id, opt.value)}
                    className="sr-only"
                    aria-label={opt.label}
                  />

                  {/* Gold checkmark for selected */}
                  {isSelected && (
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gf-gold text-white shadow-md" style={{ animation: "popIn 0.3s ease-out" }}>
                      <CheckIcon className="h-4 w-4" />
                    </span>
                  )}

                  <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gf-cream text-2xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                    {opt.icon}
                  </span>
                  <div>
                    <span className="block text-lg font-bold text-gf-charcoal">{opt.label}</span>
                    <span className="mt-1 block text-sm text-gf-gray">{opt.desc}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      {/* "Great choice!" micro-animation */}
      {showGreatChoice && (
        <div className="mt-4 flex justify-center" style={{ animation: "fadeUp 0.5s ease-out" }}>
          <span className="rounded-full bg-gf-gold/10 px-4 py-2 text-sm font-bold text-gf-gold">
            Great choice!
          </span>
        </div>
      )}

      <style>{`
        @keyframes popIn {
          0% { transform: scale(0); }
          60% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mt-8">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentQuestion === 0}
          className="rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gf-charcoal transition-all duration-300 hover:border-gf-gray hover:bg-gf-gray-light disabled:invisible"
        >
          Back
        </button>
      </div>
    </div>
  );
}
