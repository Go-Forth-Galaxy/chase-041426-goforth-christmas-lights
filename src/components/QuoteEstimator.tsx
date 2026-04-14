"use client";

import { useState, useCallback } from "react";

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

  // Roofline
  if (data.roofline) {
    low += data.rooflineLength * 5;
    high += data.rooflineLength * 8;
  }

  // Windows
  if (data.frontWindows) {
    low += 200;
    high += 400;
  }

  // Front door
  if (data.frontDoor) {
    low += 100;
    high += 200;
  }

  // Trees
  if (data.trees) {
    low += data.treeCount * 150;
    high += data.treeCount * 300;
  }

  // Bushes
  if (data.bushes) {
    low += 150;
    high += 300;
  }

  // Walkway
  if (data.walkway) {
    low += 200;
    high += 400;
  }

  // Wreaths
  if (data.wreaths) {
    low += data.wreathCount * 50;
    high += data.wreathCount * 50;
  }

  // Design level multiplier
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
/* Sub-components                                                      */
/* ------------------------------------------------------------------ */

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-8" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={4} aria-label={`Step ${step} of 4`}>
      <div className="mb-2 flex justify-between text-sm font-medium text-gf-gray">
        <span>Step {step} of 4</span>
        <span>{Math.round((step / 4) * 100)}% complete</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gf-gray-light">
        <div
          className="h-full rounded-full bg-gradient-to-r from-gf-green to-gf-green-light transition-all duration-500 ease-out"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Step 1 — Home Details                                               */
/* ------------------------------------------------------------------ */

function Step1({
  data,
  onChange,
}: {
  data: FormData;
  onChange: (patch: Partial<FormData>) => void;
}) {
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
        <p className="mb-3 font-semibold text-gf-charcoal">Home Type</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {homeTypes.map((t) => (
            <label
              key={t.value}
              className={`flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 p-6 text-center transition-all hover:shadow-md ${
                data.homeType === t.value
                  ? "border-gf-green bg-gf-green/5 shadow-md"
                  : "border-gf-gray-light bg-white"
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
              <span className="text-3xl" aria-hidden="true">{t.icon}</span>
              <span className="font-semibold text-gf-charcoal">{t.label}</span>
              <span className="text-sm text-gf-gray">{t.desc}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Roofline slider */}
      <div>
        <label htmlFor="roofline-length" className="mb-1 block font-semibold text-gf-charcoal">
          Estimated Roofline Length: <span className="text-gf-green">{data.rooflineLength} ft</span>
        </label>
        <input
          id="roofline-length"
          type="range"
          min={50}
          max={300}
          step={10}
          value={data.rooflineLength}
          onChange={(e) => onChange({ rooflineLength: Number(e.target.value) })}
          className="w-full accent-gf-green"
          aria-valuemin={50}
          aria-valuemax={300}
          aria-valuenow={data.rooflineLength}
        />
        <div className="mt-1 flex justify-between text-xs text-gf-gray">
          <span>50 ft</span>
          <span>300 ft</span>
        </div>
        <p className="mt-2 text-sm text-gf-gray">
          Not sure? Most single-story homes are 100-150ft, two-story homes are 150-250ft.
        </p>
      </div>
    </fieldset>
  );
}

/* ------------------------------------------------------------------ */
/* Step 2 — What to Light                                              */
/* ------------------------------------------------------------------ */

function Step2({
  data,
  onChange,
}: {
  data: FormData;
  onChange: (patch: Partial<FormData>) => void;
}) {
  const checkboxes: { key: keyof FormData; label: string }[] = [
    { key: "roofline", label: "Roofline" },
    { key: "frontWindows", label: "Front Windows" },
    { key: "frontDoor", label: "Front Door / Entry" },
    { key: "bushes", label: "Bushes / Shrubs" },
    { key: "walkway", label: "Walkway / Pathway" },
  ];

  return (
    <fieldset className="space-y-6">
      <legend className="text-2xl font-bold text-gf-charcoal">What Would You Like to Light?</legend>
      <p className="text-gf-gray">Select all areas you&apos;d like to include.</p>

      <div className="grid gap-3 sm:grid-cols-2">
        {checkboxes.map((cb) => (
          <label
            key={cb.key}
            className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 p-4 transition-all hover:shadow-sm ${
              data[cb.key] ? "border-gf-green bg-gf-green/5" : "border-gf-gray-light bg-white"
            }`}
          >
            <input
              type="checkbox"
              checked={data[cb.key] as boolean}
              onChange={(e) => onChange({ [cb.key]: e.target.checked })}
              className="h-5 w-5 rounded border-gf-gray accent-gf-green"
              aria-label={cb.label}
            />
            <span className="font-medium text-gf-charcoal">{cb.label}</span>
          </label>
        ))}

        {/* Trees with count */}
        <label
          className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 p-4 transition-all hover:shadow-sm ${
            data.trees ? "border-gf-green bg-gf-green/5" : "border-gf-gray-light bg-white"
          }`}
        >
          <input
            type="checkbox"
            checked={data.trees}
            onChange={(e) => onChange({ trees: e.target.checked })}
            className="h-5 w-5 rounded border-gf-gray accent-gf-green"
            aria-label="Trees"
          />
          <span className="font-medium text-gf-charcoal">Trees</span>
          {data.trees && (
            <select
              value={data.treeCount}
              onChange={(e) => onChange({ treeCount: Number(e.target.value) })}
              className="ml-auto rounded border border-gf-gray-light px-2 py-1 text-sm"
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
          className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 p-4 transition-all hover:shadow-sm ${
            data.wreaths ? "border-gf-green bg-gf-green/5" : "border-gf-gray-light bg-white"
          }`}
        >
          <input
            type="checkbox"
            checked={data.wreaths}
            onChange={(e) => onChange({ wreaths: e.target.checked })}
            className="h-5 w-5 rounded border-gf-gray accent-gf-green"
            aria-label="Wreaths"
          />
          <span className="font-medium text-gf-charcoal">Wreaths</span>
          {data.wreaths && (
            <select
              value={data.wreathCount}
              onChange={(e) => onChange({ wreathCount: Number(e.target.value) })}
              className="ml-auto rounded border border-gf-gray-light px-2 py-1 text-sm"
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
/* Step 3 — Your Style                                                 */
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

  const designs: { value: DesignLevel; label: string; desc: string }[] = [
    { value: "simple", label: "Simple & Clean", desc: "Classic roofline lights with a polished, understated look." },
    { value: "full", label: "Full & Festive", desc: "More coverage, added accents, and a cheerful holiday feel. (+15%)" },
    { value: "showstopper", label: "Showstopper", desc: "Go all out — maximum impact, maximum wow factor. (+30%)" },
  ];

  return (
    <fieldset className="space-y-8">
      <legend className="text-2xl font-bold text-gf-charcoal">Choose Your Style</legend>

      {/* Light color */}
      <div>
        <p className="mb-3 font-semibold text-gf-charcoal">Light Color</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {colors.map((c) => (
            <label
              key={c.value}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all hover:shadow-md ${
                data.lightColor === c.value
                  ? "border-gf-green bg-gf-green/5 shadow-md"
                  : "border-gf-gray-light bg-white"
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
              <span className={`h-8 w-8 shrink-0 rounded-full border border-gray-300 ${c.preview}`} aria-hidden="true" />
              <span className="font-medium text-gf-charcoal">{c.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Design level */}
      <div>
        <p className="mb-3 font-semibold text-gf-charcoal">Design Level</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {designs.map((d) => (
            <label
              key={d.value}
              className={`flex cursor-pointer flex-col gap-2 rounded-xl border-2 p-5 transition-all hover:shadow-md ${
                data.designLevel === d.value
                  ? "border-gf-green bg-gf-green/5 shadow-md"
                  : "border-gf-gray-light bg-white"
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
/* Step 4 — Estimate & Contact                                         */
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
      <div className="rounded-2xl bg-gradient-to-br from-gf-green to-gf-green-dark p-8 text-center text-white shadow-lg">
        <p className="text-sm font-medium uppercase tracking-wide text-gf-cream/70">Estimated Price Range</p>
        <p className="mt-2 text-4xl font-bold sm:text-5xl">
          ${estimate.low.toLocaleString()} &ndash; ${estimate.high.toLocaleString()}
        </p>
        <p className="mt-3 text-sm text-gf-cream/70">Based on your selections</p>
      </div>

      {/* Included */}
      <div>
        <p className="mb-3 font-semibold text-gf-charcoal">What&apos;s Included:</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {included.map((item) => (
            <li key={item} className="flex items-center gap-2 text-gf-charcoal">
              <svg className="h-5 w-5 shrink-0 text-gf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact form */}
      <div className="rounded-xl border border-gf-gray-light bg-gf-gray-light/30 p-6">
        <h4 className="mb-4 text-lg font-bold text-gf-charcoal">Schedule Your Free Consultation</h4>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="quote-name" className="mb-1 block text-sm font-medium text-gf-charcoal">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              id="quote-name"
              type="text"
              required
              value={data.name}
              onChange={(e) => onChange({ name: e.target.value })}
              className="w-full rounded-lg border border-gf-gray-light px-4 py-2.5 text-gf-charcoal placeholder:text-gf-gray focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 focus:outline-none"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="quote-email" className="mb-1 block text-sm font-medium text-gf-charcoal">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="quote-email"
              type="email"
              required
              value={data.email}
              onChange={(e) => onChange({ email: e.target.value })}
              className="w-full rounded-lg border border-gf-gray-light px-4 py-2.5 text-gf-charcoal placeholder:text-gf-gray focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 focus:outline-none"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="quote-phone" className="mb-1 block text-sm font-medium text-gf-charcoal">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              id="quote-phone"
              type="tel"
              required
              value={data.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              className="w-full rounded-lg border border-gf-gray-light px-4 py-2.5 text-gf-charcoal placeholder:text-gf-gray focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 focus:outline-none"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="quote-area" className="mb-1 block text-sm font-medium text-gf-charcoal">
              Service Area <span className="text-red-600">*</span>
            </label>
            <select
              id="quote-area"
              required
              value={data.serviceArea}
              onChange={(e) => onChange({ serviceArea: e.target.value as ServiceArea })}
              className="w-full rounded-lg border border-gf-gray-light px-4 py-2.5 text-gf-charcoal focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 focus:outline-none"
            >
              <option value="">Select your area</option>
              <option value="lake-norman">Lake Norman</option>
              <option value="triad">Triad</option>
              <option value="hickory">Hickory</option>
              <option value="boone">Boone</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="quote-address" className="mb-1 block text-sm font-medium text-gf-charcoal">
              Address <span className="text-red-600">*</span>
            </label>
            <input
              id="quote-address"
              type="text"
              required
              value={data.address}
              onChange={(e) => onChange({ address: e.target.value })}
              className="w-full rounded-lg border border-gf-gray-light px-4 py-2.5 text-gf-charcoal placeholder:text-gf-gray focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 focus:outline-none"
              placeholder="123 Main St, Mooresville, NC 28117"
            />
          </div>

          <div>
            <label htmlFor="quote-contact-method" className="mb-1 block text-sm font-medium text-gf-charcoal">
              Preferred Contact Method
            </label>
            <select
              id="quote-contact-method"
              value={data.contactMethod}
              onChange={(e) => onChange({ contactMethod: e.target.value as ContactMethod })}
              className="w-full rounded-lg border border-gf-gray-light px-4 py-2.5 text-gf-charcoal focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 focus:outline-none"
            >
              <option value="">No preference</option>
              <option value="phone">Phone call</option>
              <option value="email">Email</option>
              <option value="text">Text message</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="quote-message" className="mb-1 block text-sm font-medium text-gf-charcoal">
              Message (optional)
            </label>
            <textarea
              id="quote-message"
              rows={3}
              value={data.message}
              onChange={(e) => onChange({ message: e.target.value })}
              className="w-full rounded-lg border border-gf-gray-light px-4 py-2.5 text-gf-charcoal placeholder:text-gf-gray focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 focus:outline-none"
              placeholder="Anything else we should know?"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className="mt-6 w-full rounded-lg bg-gf-gold px-8 py-3.5 text-lg font-bold text-white shadow-lg transition-all hover:bg-gf-gold-light hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Request My Free Consultation"}
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

  const handleSubmit = async () => {
    if (!data.name || !data.email || !data.phone || !data.address || !data.serviceArea) return;
    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const estimate = calculateEstimate(data);

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-lg sm:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gf-green/10">
          <svg className="h-8 w-8 text-gf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gf-charcoal">Thank You!</h3>
        <p className="mt-3 text-gf-gray">
          Your consultation request has been submitted. A Go-Forth design specialist will reach out
          within 1 business day to schedule your free in-person consultation.
        </p>
        <p className="mt-4 text-lg font-semibold text-gf-green">
          Your Estimate: ${estimate.low.toLocaleString()} &ndash; ${estimate.high.toLocaleString()}
        </p>
        <p className="mt-6 text-sm text-gf-gray">
          Have questions? Call us at{" "}
          <a href="tel:+18772741475" className="font-semibold text-gf-green hover:underline">
            (877) 274-1475
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg sm:p-10">
      <ProgressBar step={step} />

      <div className="min-h-[400px]">
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
        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            disabled={step === 1}
            className="rounded-lg border border-gf-gray-light px-6 py-2.5 font-medium text-gf-charcoal transition-all hover:bg-gf-gray-light disabled:invisible"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(4, s + 1))}
            disabled={!canAdvance(step)}
            className="rounded-lg bg-gf-green px-8 py-2.5 font-bold text-white shadow transition-all hover:bg-gf-green-light hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="mt-6 flex justify-start">
          <button
            type="button"
            onClick={() => setStep(3)}
            className="rounded-lg border border-gf-gray-light px-6 py-2.5 font-medium text-gf-charcoal transition-all hover:bg-gf-gray-light"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
