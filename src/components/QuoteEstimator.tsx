"use client";

import { useState, useCallback, useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type HomeType = "single" | "two-story" | "large";
type LightColor = "warm-white" | "cool-white" | "multi" | "red-green";
type DesignLevel = "simple" | "full" | "showstopper";
type ServiceArea = "" | "lake-norman" | "triad" | "hickory" | "boone";
type ContactMethod = "" | "phone" | "email" | "text";

interface FormData {
  homeType: HomeType | "";
  rooflineLength: number;
  roofline: boolean;
  frontWindows: boolean;
  frontDoor: boolean;
  trees: boolean;
  treeCount: number;
  bushes: boolean;
  walkway: boolean;
  wreaths: boolean;
  wreathCount: number;
  lightColor: LightColor | "";
  designLevel: DesignLevel | "";
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceArea: ServiceArea;
  contactMethod: ContactMethod;
  message: string;
}

const initialFormData: FormData = {
  homeType: "",
  rooflineLength: 150,
  roofline: true,
  frontWindows: false,
  frontDoor: false,
  trees: false,
  treeCount: 1,
  bushes: false,
  walkway: false,
  wreaths: false,
  wreathCount: 1,
  lightColor: "",
  designLevel: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  serviceArea: "",
  contactMethod: "",
  message: "",
};

/* ------------------------------------------------------------------ */
/* Pricing helpers                                                     */
/* ------------------------------------------------------------------ */

function calculateEstimate(data: FormData): { low: number; high: number } {
  let low = 0;
  let high = 0;

  if (data.roofline) {
    low += data.rooflineLength * 5;
    high += data.rooflineLength * 8;
  }
  if (data.frontWindows) { low += 200; high += 400; }
  if (data.frontDoor) { low += 100; high += 200; }
  if (data.trees) { low += data.treeCount * 150; high += data.treeCount * 300; }
  if (data.bushes) { low += 150; high += 300; }
  if (data.walkway) { low += 200; high += 400; }
  if (data.wreaths) { low += data.wreathCount * 50; high += data.wreathCount * 50; }
  if (data.designLevel === "full") {
    low = Math.round(low * 1.15);
    high = Math.round(high * 1.15);
  } else if (data.designLevel === "showstopper") {
    low = Math.round(low * 1.3);
    high = Math.round(high * 1.3);
  }

  return { low, high };
}

/* ------------------------------------------------------------------ */
/* Checkmark icon                                                      */
/* ------------------------------------------------------------------ */

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Confetti dots                                                       */
/* ------------------------------------------------------------------ */

function ConfettiDots() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 30 }, (_, i) => {
        const colors = ["bg-gf-gold", "bg-gf-red", "bg-gf-gold-light", "bg-gf-red-light", "bg-gf-red"];
        const color = colors[i % colors.length];
        const size = 4 + Math.random() * 6;
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 2 + Math.random() * 3;
        return (
          <span
            key={i}
            className={`absolute rounded-full ${color} opacity-0`}
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: "-10px",
              animation: `confettiFall ${duration}s ${delay}s ease-out forwards`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes confettiFall {
          0% { opacity: 1; transform: translateY(0) rotate(0deg); }
          100% { opacity: 0; transform: translateY(400px) rotate(720deg); }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-components                                                      */
/* ------------------------------------------------------------------ */

const stepLabels = ["Home", "Areas", "Style", "Estimate"];

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-10" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={4} aria-label={`Step ${step} of 4`}>
      <div className="flex items-center justify-between">
        {stepLabels.map((label, i) => {
          const stepNum = i + 1;
          const completed = step > stepNum;
          const current = step === stepNum;
          return (
            <div key={label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-500 ${
                    completed
                      ? "border-gf-gold bg-gf-gold text-white shadow-md shadow-gf-gold/30"
                      : current
                      ? "border-gf-red bg-gf-red text-white shadow-md shadow-gf-red/30"
                      : "border-gray-300 bg-white text-gf-gray"
                  }`}
                >
                  {completed ? <CheckIcon className="h-5 w-5" /> : stepNum}
                </div>
                <span
                  className={`mt-2 text-xs font-semibold transition-colors duration-300 ${
                    completed ? "text-gf-gold" : current ? "text-gf-red" : "text-gf-gray"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < stepLabels.length - 1 && (
                <div className="mx-2 h-0.5 flex-1 rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-gf-gold to-gf-gold-light transition-all duration-700 ease-out"
                    style={{ width: completed ? "100%" : current ? "50%" : "0%" }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Step 1 -- Home Details                                              */
/* ------------------------------------------------------------------ */

function Step1({
  data,
  onChange,
}: {
  data: FormData;
  onChange: (patch: Partial<FormData>) => void;
}) {
  const sliderRef = useRef<HTMLInputElement>(null);
  const [thumbPos, setThumbPos] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const pct = (data.rooflineLength - 50) / (300 - 50);
      const width = sliderRef.current.offsetWidth;
      setThumbPos(pct * (width - 20) + 10);
    }
  }, [data.rooflineLength]);

  const homeTypes: { value: HomeType; label: string; desc: string; icon: string }[] = [
    { value: "single", label: "Single-Story Ranch", desc: "One level, standard roofline", icon: "🏠" },
    { value: "two-story", label: "Two-Story", desc: "Two levels, taller roofline", icon: "🏡" },
    { value: "large", label: "Large / Custom", desc: "Large or custom-built home", icon: "🏰" },
  ];

  return (
    <fieldset className="space-y-8">
      <legend className="text-2xl font-bold text-gf-charcoal">Tell Us About Your Home</legend>

      {/* Home type */}
      <div>
        <p className="mb-4 font-semibold text-gf-charcoal">Home Type</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {homeTypes.map((t) => (
            <label
              key={t.value}
              className={`group relative flex cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                data.homeType === t.value
                  ? "border-gf-gold bg-gradient-to-b from-gf-warm-white to-white shadow-lg shadow-gf-gold/10"
                  : "border-gray-200 bg-white hover:border-gf-gold/40"
              }`}
            >
              <input
                type="radio"
                name="homeType"
                value={t.value}
                checked={data.homeType === t.value}
                onChange={() => onChange({ homeType: t.value })}
                className="sr-only"
                aria-label={t.label}
              />
              {data.homeType === t.value && (
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gf-gold text-white shadow-md">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
              )}
              <span className="text-4xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">{t.icon}</span>
              <span className="font-bold text-gf-charcoal">{t.label}</span>
              <span className="text-sm text-gf-gray">{t.desc}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Roofline slider */}
      <div>
        <label htmlFor="roofline-length" className="mb-3 block font-semibold text-gf-charcoal">
          Estimated Roofline Length
        </label>
        <div className="relative mt-6">
          {/* Floating label that follows the thumb */}
          <div
            className="absolute -top-8 flex -translate-x-1/2 flex-col items-center transition-all duration-150"
            style={{ left: thumbPos }}
          >
            <span className="rounded-md bg-gf-gold px-2.5 py-1 text-sm font-bold text-white shadow-md">
              {data.rooflineLength} ft
            </span>
            <span className="h-0 w-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-gf-gold" />
          </div>
          <input
            ref={sliderRef}
            id="roofline-length"
            type="range"
            min={50}
            max={300}
            step={10}
            value={data.rooflineLength}
            onChange={(e) => onChange({ rooflineLength: Number(e.target.value) })}
            className="slider-custom w-full"
            aria-valuemin={50}
            aria-valuemax={300}
            aria-valuenow={data.rooflineLength}
          />
          <style>{`
            .slider-custom {
              -webkit-appearance: none;
              appearance: none;
              height: 8px;
              border-radius: 9999px;
              background: linear-gradient(to right, var(--color-gf-red), var(--color-gf-red-light));
              outline: none;
            }
            .slider-custom::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: linear-gradient(135deg, var(--color-gf-gold), var(--color-gf-gold-light));
              cursor: pointer;
              box-shadow: 0 2px 8px rgba(212, 168, 67, 0.4);
              border: 3px solid white;
              transition: transform 0.15s;
            }
            .slider-custom::-webkit-slider-thumb:hover {
              transform: scale(1.15);
            }
            .slider-custom::-moz-range-thumb {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: linear-gradient(135deg, var(--color-gf-gold), var(--color-gf-gold-light));
              cursor: pointer;
              box-shadow: 0 2px 8px rgba(212, 168, 67, 0.4);
              border: 3px solid white;
            }
          `}</style>
          <div className="mt-2 flex justify-between text-xs font-medium text-gf-gray">
            <span>50 ft</span>
            <span>300 ft</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-gf-gray">
          Not sure? Most single-story homes are 100-150ft, two-story homes are 150-250ft.
        </p>
      </div>
    </fieldset>
  );
}

/* ------------------------------------------------------------------ */
/* Step 2 -- What to Light                                             */
/* ------------------------------------------------------------------ */

function Step2({
  data,
  onChange,
}: {
  data: FormData;
  onChange: (patch: Partial<FormData>) => void;
}) {
  const checkboxes: { key: keyof FormData; label: string; icon: string }[] = [
    { key: "roofline", label: "Roofline", icon: "🏠" },
    { key: "frontWindows", label: "Front Windows", icon: "🪟" },
    { key: "frontDoor", label: "Front Door / Entry", icon: "🚪" },
    { key: "bushes", label: "Bushes / Shrubs", icon: "🌿" },
    { key: "walkway", label: "Walkway / Pathway", icon: "🛤" },
  ];

  return (
    <fieldset className="space-y-6">
      <legend className="text-2xl font-bold text-gf-charcoal">What Would You Like to Light?</legend>
      <p className="text-gf-gray">Select all areas you&apos;d like to include.</p>

      <div className="grid gap-3 sm:grid-cols-2">
        {checkboxes.map((cb) => (
          <label
            key={cb.key}
            className={`group relative flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
              data[cb.key]
                ? "border-gf-gold bg-gradient-to-r from-gf-warm-white to-white shadow-md"
                : "border-gray-200 bg-white hover:border-gf-gold/40"
            }`}
          >
            {data[cb.key] && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gf-gold text-white shadow-sm">
                <CheckIcon className="h-3 w-3" />
              </span>
            )}
            <input
              type="checkbox"
              checked={data[cb.key] as boolean}
              onChange={(e) => onChange({ [cb.key]: e.target.checked })}
              className="sr-only"
              aria-label={cb.label}
            />
            <span className="text-xl transition-transform duration-200 group-hover:scale-110" aria-hidden="true">{cb.icon}</span>
            <span className="font-semibold text-gf-charcoal">{cb.label}</span>
          </label>
        ))}

        {/* Trees with count */}
        <label
          className={`group relative flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
            data.trees
              ? "border-gf-gold bg-gradient-to-r from-gf-warm-white to-white shadow-md"
              : "border-gray-200 bg-white hover:border-gf-gold/40"
          }`}
        >
          {data.trees && (
            <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gf-gold text-white shadow-sm">
              <CheckIcon className="h-3 w-3" />
            </span>
          )}
          <input
            type="checkbox"
            checked={data.trees}
            onChange={(e) => onChange({ trees: e.target.checked })}
            className="sr-only"
            aria-label="Trees"
          />
          <span className="text-xl transition-transform duration-200 group-hover:scale-110" aria-hidden="true">🌲</span>
          <span className="font-semibold text-gf-charcoal">Trees</span>
          {data.trees && (
            <select
              value={data.treeCount}
              onChange={(e) => onChange({ treeCount: Number(e.target.value) })}
              className="ml-auto rounded-lg border border-gf-gold/30 bg-white px-2 py-1 text-sm font-medium text-gf-charcoal focus:border-gf-gold focus:ring-1 focus:ring-gf-gold/20 focus:outline-none"
              aria-label="Number of trees"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n} tree{n > 1 ? "s" : ""}</option>
              ))}
            </select>
          )}
        </label>

        {/* Wreaths with count */}
        <label
          className={`group relative flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
            data.wreaths
              ? "border-gf-gold bg-gradient-to-r from-gf-warm-white to-white shadow-md"
              : "border-gray-200 bg-white hover:border-gf-gold/40"
          }`}
        >
          {data.wreaths && (
            <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gf-gold text-white shadow-sm">
              <CheckIcon className="h-3 w-3" />
            </span>
          )}
          <input
            type="checkbox"
            checked={data.wreaths}
            onChange={(e) => onChange({ wreaths: e.target.checked })}
            className="sr-only"
            aria-label="Wreaths"
          />
          <span className="text-xl transition-transform duration-200 group-hover:scale-110" aria-hidden="true">🎄</span>
          <span className="font-semibold text-gf-charcoal">Wreaths</span>
          {data.wreaths && (
            <select
              value={data.wreathCount}
              onChange={(e) => onChange({ wreathCount: Number(e.target.value) })}
              className="ml-auto rounded-lg border border-gf-gold/30 bg-white px-2 py-1 text-sm font-medium text-gf-charcoal focus:border-gf-gold focus:ring-1 focus:ring-gf-gold/20 focus:outline-none"
              aria-label="Number of wreaths"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n} wreath{n > 1 ? "s" : ""}</option>
              ))}
            </select>
          )}
        </label>

      </div>
    </fieldset>
  );
}

/* ------------------------------------------------------------------ */
/* Step 3 -- Your Style                                                */
/* ------------------------------------------------------------------ */

function Step3({
  data,
  onChange,
}: {
  data: FormData;
  onChange: (patch: Partial<FormData>) => void;
}) {
  const colors: { value: LightColor; label: string; preview: string }[] = [
    { value: "warm-white", label: "Classic Warm White", preview: "bg-amber-200" },
    { value: "cool-white", label: "Cool White", preview: "bg-blue-100" },
    { value: "multi", label: "Multi-Color", preview: "bg-gradient-to-r from-red-500 via-green-500 to-blue-500" },
    { value: "red-green", label: "Red & Green", preview: "bg-gradient-to-r from-red-600 to-green-600" },
  ];

  const designs: { value: DesignLevel; label: string; desc: string; icon: string }[] = [
    { value: "simple", label: "Simple & Clean", desc: "Classic roofline lights with a polished, understated look.", icon: "✨" },
    { value: "full", label: "Full & Festive", desc: "More coverage, added accents, and a cheerful holiday feel. (+15%)", icon: "🎄" },
    { value: "showstopper", label: "Showstopper", desc: "Go all out -- maximum impact, maximum wow factor. (+30%)", icon: "🌟" },
  ];

  return (
    <fieldset className="space-y-8">
      <legend className="text-2xl font-bold text-gf-charcoal">Choose Your Style</legend>

      {/* Light color */}
      <div>
        <p className="mb-4 font-semibold text-gf-charcoal">Light Color</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {colors.map((c) => (
            <label
              key={c.value}
              className={`group relative flex cursor-pointer items-center gap-4 rounded-2xl border-2 p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                data.lightColor === c.value
                  ? "border-gf-gold bg-gradient-to-r from-gf-warm-white to-white shadow-lg shadow-gf-gold/10"
                  : "border-gray-200 bg-white hover:border-gf-gold/40"
              }`}
            >
              <input
                type="radio"
                name="lightColor"
                value={c.value}
                checked={data.lightColor === c.value}
                onChange={() => onChange({ lightColor: c.value })}
                className="sr-only"
                aria-label={c.label}
              />
              {data.lightColor === c.value && (
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gf-gold text-white shadow-md">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
              )}
              <span className={`h-10 w-10 shrink-0 rounded-full border-2 border-white shadow-md ${c.preview}`} aria-hidden="true" />
              <span className="font-semibold text-gf-charcoal">{c.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Design level */}
      <div>
        <p className="mb-4 font-semibold text-gf-charcoal">Design Level</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {designs.map((d) => (
            <label
              key={d.value}
              className={`group relative flex cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                data.designLevel === d.value
                  ? "border-gf-gold bg-gradient-to-b from-gf-warm-white to-white shadow-lg shadow-gf-gold/10"
                  : "border-gray-200 bg-white hover:border-gf-gold/40"
              }`}
            >
              <input
                type="radio"
                name="designLevel"
                value={d.value}
                checked={data.designLevel === d.value}
                onChange={() => onChange({ designLevel: d.value })}
                className="sr-only"
                aria-label={d.label}
              />
              {data.designLevel === d.value && (
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gf-gold text-white shadow-md">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
              )}
              <span className="text-3xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">{d.icon}</span>
              <span className="text-lg font-bold text-gf-charcoal">{d.label}</span>
              <span className="text-sm text-gf-gray">{d.desc}</span>
            </label>
          ))}
        </div>
      </div>
    </fieldset>
  );
}

/* ------------------------------------------------------------------ */
/* Step 4 -- Estimate & Contact                                        */
/* ------------------------------------------------------------------ */

function Step4({
  data,
  onChange,
  estimate,
  onSubmit,
  submitting,
}: {
  data: FormData;
  onChange: (patch: Partial<FormData>) => void;
  estimate: { low: number; high: number };
  onSubmit: () => void;
  submitting: boolean;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const included = [
    "Commercial-grade LED lights",
    "Professional installation",
    "Season-long maintenance",
    "Removal & storage",
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gf-charcoal">Your Estimate</h3>

      {/* Price card */}
      <div
        className={`relative overflow-hidden rounded-2xl border-2 border-gf-gold/30 bg-gradient-to-br from-gf-red via-gf-red to-gf-red-dark p-10 text-center text-white shadow-xl transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95"
        }`}
      >
        {/* Decorative shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" style={{ animation: "shimmer 3s ease-in-out infinite" }} />
        <style>{`
          @keyframes shimmer {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
          }
        `}</style>

        <p className="relative text-sm font-semibold uppercase tracking-widest text-gf-gold-light">Estimated Price Range</p>
        <p className="relative mt-3 text-5xl font-bold sm:text-6xl">
          ${estimate.low.toLocaleString()} <span className="text-gf-gold-light">&ndash;</span> ${estimate.high.toLocaleString()}
        </p>
        <p className="relative mt-3 text-sm text-gf-cream/70">Based on your selections</p>

        {/* Savings badge */}
        <div className="relative mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-gf-gold/20 px-4 py-2 backdrop-blur-sm">
          <svg className="h-4 w-4 text-gf-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-semibold text-gf-gold-light">Returning customers save 20-30%!</span>
        </div>
      </div>

      {/* Included */}
      <div className={`transition-all duration-700 delay-200 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
        <p className="mb-3 font-semibold text-gf-charcoal">What&apos;s Included:</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {included.map((item) => (
            <li key={item} className="flex items-center gap-3 rounded-lg bg-gf-red/5 px-4 py-3 text-gf-charcoal">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gf-red">
                <CheckIcon className="h-3.5 w-3.5 text-white" />
              </span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact form */}
      <div className={`rounded-2xl border border-gray-200 bg-gradient-to-b from-gf-gray-light/50 to-white p-8 shadow-sm transition-all duration-700 delay-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
        <h4 className="mb-6 text-lg font-bold text-gf-charcoal">Schedule Your Free Consultation</h4>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="group">
            <label htmlFor="quote-name" className="mb-1.5 block text-sm font-semibold text-gf-charcoal">
              Name <span className="text-gf-red">*</span>
            </label>
            <input
              id="quote-name"
              type="text"
              required
              value={data.name}
              onChange={(e) => onChange({ name: e.target.value })}
              className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gf-charcoal placeholder:text-gf-gray/60 transition-all duration-300 focus:border-gf-red focus:ring-4 focus:ring-gf-red/10 focus:outline-none"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="quote-email" className="mb-1.5 block text-sm font-semibold text-gf-charcoal">
              Email <span className="text-gf-red">*</span>
            </label>
            <input
              id="quote-email"
              type="email"
              required
              value={data.email}
              onChange={(e) => onChange({ email: e.target.value })}
              className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gf-charcoal placeholder:text-gf-gray/60 transition-all duration-300 focus:border-gf-red focus:ring-4 focus:ring-gf-red/10 focus:outline-none"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="quote-phone" className="mb-1.5 block text-sm font-semibold text-gf-charcoal">
              Phone <span className="text-gf-red">*</span>
            </label>
            <input
              id="quote-phone"
              type="tel"
              required
              value={data.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gf-charcoal placeholder:text-gf-gray/60 transition-all duration-300 focus:border-gf-red focus:ring-4 focus:ring-gf-red/10 focus:outline-none"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="quote-area" className="mb-1.5 block text-sm font-semibold text-gf-charcoal">
              Service Area <span className="text-gf-red">*</span>
            </label>
            <select
              id="quote-area"
              required
              value={data.serviceArea}
              onChange={(e) => onChange({ serviceArea: e.target.value as ServiceArea })}
              className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gf-charcoal transition-all duration-300 focus:border-gf-red focus:ring-4 focus:ring-gf-red/10 focus:outline-none"
            >
              <option value="">Select your area</option>
              <option value="lake-norman">Lake Norman</option>
              <option value="triad">Triad</option>
              <option value="hickory">Hickory</option>
              <option value="boone">Boone</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="quote-address" className="mb-1.5 block text-sm font-semibold text-gf-charcoal">
              Address <span className="text-gf-red">*</span>
            </label>
            <input
              id="quote-address"
              type="text"
              required
              value={data.address}
              onChange={(e) => onChange({ address: e.target.value })}
              className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gf-charcoal placeholder:text-gf-gray/60 transition-all duration-300 focus:border-gf-red focus:ring-4 focus:ring-gf-red/10 focus:outline-none"
              placeholder="123 Main St, Mooresville, NC 28117"
            />
          </div>

          <div>
            <label htmlFor="quote-contact-method" className="mb-1.5 block text-sm font-semibold text-gf-charcoal">
              Preferred Contact Method
            </label>
            <select
              id="quote-contact-method"
              value={data.contactMethod}
              onChange={(e) => onChange({ contactMethod: e.target.value as ContactMethod })}
              className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gf-charcoal transition-all duration-300 focus:border-gf-red focus:ring-4 focus:ring-gf-red/10 focus:outline-none"
            >
              <option value="">No preference</option>
              <option value="phone">Phone call</option>
              <option value="email">Email</option>
              <option value="text">Text message</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="quote-message" className="mb-1.5 block text-sm font-semibold text-gf-charcoal">
              Message (optional)
            </label>
            <textarea
              id="quote-message"
              rows={3}
              value={data.message}
              onChange={(e) => onChange({ message: e.target.value })}
              className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gf-charcoal placeholder:text-gf-gray/60 transition-all duration-300 focus:border-gf-red focus:ring-4 focus:ring-gf-red/10 focus:outline-none"
              placeholder="Anything else we should know?"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className="mt-8 w-full rounded-xl bg-gradient-to-r from-gf-gold to-gf-gold-light px-8 py-4 text-lg font-bold text-white shadow-lg shadow-gf-gold/25 transition-all duration-300 hover:shadow-xl hover:shadow-gf-gold/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
        >
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting...
            </span>
          ) : (
            "Request My Free Consultation"
          )}
        </button>
      </div>

      <p className="text-center text-sm text-gf-gray">
        This is an estimate. Your actual quote may vary based on your specific home and design
        preferences. A Go-Forth design specialist will contact you to schedule your free in-person
        consultation.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main QuoteEstimator component                                       */
/* ------------------------------------------------------------------ */

export default function QuoteEstimator() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [transitioning, setTransitioning] = useState(false);

  const update = useCallback((patch: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...patch }));
  }, []);

  const canAdvance = (s: number): boolean => {
    switch (s) {
      case 1:
        return data.homeType !== "";
      case 2:
        return data.roofline || data.frontWindows || data.frontDoor || data.trees || data.bushes || data.walkway || data.wreaths;
      case 3:
        return data.lightColor !== "" && data.designLevel !== "";
      default:
        return true;
    }
  };

  const goToStep = (newStep: number) => {
    setDirection(newStep > step ? "forward" : "back");
    setTransitioning(true);
    setTimeout(() => {
      setStep(newStep);
      setTransitioning(false);
    }, 200);
  };

  const handleSubmit = async () => {
    if (!data.name || !data.email || !data.phone || !data.address || !data.serviceArea) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const estimate = calculateEstimate(data);

  if (submitted) {
    return (
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white p-8 text-center shadow-xl sm:p-12">
        <ConfettiDots />

        <div className="relative">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gf-red to-gf-red-light shadow-lg shadow-gf-red/20" style={{ animation: "scaleIn 0.5s ease-out" }}>
            <CheckIcon className="h-10 w-10 text-white" />
          </div>
          <style>{`
            @keyframes scaleIn {
              0% { transform: scale(0); opacity: 0; }
              60% { transform: scale(1.1); }
              100% { transform: scale(1); opacity: 1; }
            }
          `}</style>
          <h3 className="text-3xl font-bold text-gf-charcoal">Thank You!</h3>
          <p className="mt-3 text-lg text-gf-gray">
            Your consultation request has been submitted. A Go-Forth design specialist will reach out
            within 1 business day to schedule your free in-person consultation.
          </p>

          <div className="mx-auto mt-6 inline-block rounded-2xl border-2 border-gf-gold/30 bg-gradient-to-br from-gf-warm-white to-white px-8 py-4 shadow-md">
            <p className="text-sm font-semibold uppercase tracking-wider text-gf-gold">Your Estimate</p>
            <p className="mt-1 text-3xl font-bold text-gf-red">
              ${estimate.low.toLocaleString()} &ndash; ${estimate.high.toLocaleString()}
            </p>
          </div>

          <p className="mt-8 text-sm text-gf-gray">
            Have questions? Call us at{" "}
            <a href="tel:+18772741475" className="font-bold text-gf-red transition-colors hover:text-gf-red-light hover:underline">
              (877) 274-1475
            </a>
          </p>
        </div>
      </div>
    );
  }

  const transitionClass = transitioning
    ? direction === "forward"
      ? "opacity-0 translate-x-8"
      : "opacity-0 -translate-x-8"
    : "opacity-100 translate-x-0";

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-10">
      <ProgressBar step={step} />

      <div className={`min-h-[400px] transition-all duration-300 ease-out ${transitionClass}`}>
        {step === 1 && <Step1 data={data} onChange={update} />}
        {step === 2 && <Step2 data={data} onChange={update} />}
        {step === 3 && <Step3 data={data} onChange={update} />}
        {step === 4 && (
          <Step4
            data={data}
            onChange={update}
            estimate={estimate}
            onSubmit={handleSubmit}
            submitting={submitting}
          />
        )}
      </div>

      {/* Navigation */}
      {step < 4 && (
        <div className="mt-10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => goToStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gf-charcoal transition-all duration-300 hover:border-gf-gray hover:bg-gf-gray-light disabled:invisible"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => goToStep(Math.min(4, step + 1))}
            disabled={!canAdvance(step)}
            className="rounded-xl bg-gradient-to-r from-gf-gold to-gf-gold-light px-10 py-3 font-bold text-white shadow-md shadow-gf-gold/20 transition-all duration-300 hover:shadow-lg hover:shadow-gf-gold/30 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md"
          >
            Next Step
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="mt-8 flex justify-start">
          <button
            type="button"
            onClick={() => goToStep(3)}
            className="rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gf-charcoal transition-all duration-300 hover:border-gf-gray hover:bg-gf-gray-light"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
