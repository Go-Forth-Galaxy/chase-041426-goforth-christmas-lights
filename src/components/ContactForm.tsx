"use client";

import { useState, useEffect, type FormEvent } from "react";

const SERVICE_AREAS = [
  "Lake Norman",
  "Triad",
  "Hickory",
  "Boone",
  "Other",
] as const;

const SERVICE_TYPES = ["Residential", "Commercial"] as const;

const CONTACT_METHODS = ["Phone", "Email", "Text"] as const;

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [shakeFields, setShakeFields] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);

  useEffect(() => {
    if (submitted) {
      const t = setTimeout(() => setSuccessVisible(true), 100);
      return () => clearTimeout(t);
    }
  }, [submitted]);

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!form.get("name")) errs.name = "Name is required.";
    const email = form.get("email") as string;
    if (!email) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }
    const phone = form.get("phone") as string;
    if (!phone) {
      errs.phone = "Phone number is required.";
    } else if (!/^[\d\s().+-]{7,}$/.test(phone)) {
      errs.phone = "Please enter a valid phone number.";
    }
    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShakeFields(true);
      setTimeout(() => setShakeFields(false), 500);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`rounded-2xl border-2 border-gf-green/20 bg-gradient-to-b from-gf-warm-white to-white p-12 text-center shadow-lg transition-all duration-700 ${
          successVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95"
        }`}
        role="status"
      >
        <div
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gf-green to-gf-green-light shadow-lg shadow-gf-green/20"
          style={{ animation: "scaleInCheck 0.5s ease-out" }}
        >
          <CheckIcon className="h-10 w-10 text-white" />
        </div>
        <style>{`
          @keyframes scaleInCheck {
            0% { transform: scale(0); opacity: 0; }
            60% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
        <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold text-gf-charcoal">
          Thank You!
        </h3>
        <p className="mt-3 text-lg text-gf-gray">
          We&rsquo;ll be in touch within 24 hours.
        </p>
        <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gf-gold to-transparent" />
        <p className="mt-4 text-sm text-gf-gray">
          Have an urgent question? Call us at{" "}
          <a href="tel:+18772741475" className="font-bold text-gf-green hover:underline">(877) 274-1475</a>
        </p>
      </div>
    );
  }

  const inputBaseClass =
    "w-full border-0 border-b-2 bg-transparent px-0 py-3 text-gf-charcoal transition-all duration-300 placeholder:text-gf-gray/50 focus:border-gf-green focus:ring-0 focus:outline-none";
  const inputNormalBorder = "border-gray-300";
  const inputErrorBorder = "border-gf-red";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-0 rounded-2xl border border-gray-100 bg-white p-8 shadow-xl sm:p-10"
    >
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gf-charcoal">
        Send Us a Message
      </h2>

      {/* Decorative divider */}
      <div className="flex items-center gap-3 pb-2 pt-3">
        <span className="h-px flex-1 bg-gradient-to-r from-gf-gold/40 to-transparent" />
        <svg className="h-4 w-4 text-gf-gold/40" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span className="h-px flex-1 bg-gradient-to-l from-gf-gold/40 to-transparent" />
      </div>

      <style>{`
        @keyframes shakeField {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-4px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(3px); }
        }
        .shake-error {
          animation: shakeField 0.4s ease-out;
        }
      `}</style>

      {/* Name */}
      <div className={`pt-6 ${shakeFields && errors.name ? "shake-error" : ""}`}>
        <label
          htmlFor="contact-name"
          className="mb-0.5 block text-xs font-bold uppercase tracking-wider text-gf-gray"
        >
          Name <span className="text-gf-red">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
          className={`${inputBaseClass} ${errors.name ? inputErrorBorder : inputNormalBorder}`}
          placeholder="John Smith"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-sm font-medium text-gf-red">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className={`pt-6 ${shakeFields && errors.email ? "shake-error" : ""}`}>
        <label
          htmlFor="contact-email"
          className="mb-0.5 block text-xs font-bold uppercase tracking-wider text-gf-gray"
        >
          Email <span className="text-gf-red">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
          className={`${inputBaseClass} ${errors.email ? inputErrorBorder : inputNormalBorder}`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-sm font-medium text-gf-red">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className={`pt-6 ${shakeFields && errors.phone ? "shake-error" : ""}`}>
        <label
          htmlFor="contact-phone"
          className="mb-0.5 block text-xs font-bold uppercase tracking-wider text-gf-gray"
        >
          Phone <span className="text-gf-red">*</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          aria-describedby={errors.phone ? "phone-error" : undefined}
          aria-invalid={!!errors.phone}
          className={`${inputBaseClass} ${errors.phone ? inputErrorBorder : inputNormalBorder}`}
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1.5 text-sm font-medium text-gf-red">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Divider */}
      <div className="pt-8 pb-2">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* Service Area */}
      <div className="pt-4">
        <label
          htmlFor="contact-area"
          className="mb-0.5 block text-xs font-bold uppercase tracking-wider text-gf-gray"
        >
          Service Area
        </label>
        <select
          id="contact-area"
          name="serviceArea"
          className={`${inputBaseClass} ${inputNormalBorder} cursor-pointer bg-white`}
        >
          <option value="">Select your area</option>
          {SERVICE_AREAS.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      {/* Service Type */}
      <div className="pt-6">
        <label
          htmlFor="contact-type"
          className="mb-0.5 block text-xs font-bold uppercase tracking-wider text-gf-gray"
        >
          Service Type
        </label>
        <select
          id="contact-type"
          name="serviceType"
          className={`${inputBaseClass} ${inputNormalBorder} cursor-pointer bg-white`}
        >
          {SERVICE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="pt-6">
        <label
          htmlFor="contact-message"
          className="mb-0.5 block text-xs font-bold uppercase tracking-wider text-gf-gray"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className={`${inputBaseClass} ${inputNormalBorder} resize-none`}
          placeholder="Tell us about your project..."
        />
      </div>

      {/* Divider */}
      <div className="pt-6 pb-2">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* Preferred Contact Method */}
      <fieldset className="pt-4">
        <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-gf-gray">
          Preferred Contact Method
        </legend>
        <div className="flex flex-wrap gap-3">
          {CONTACT_METHODS.map((method) => (
            <label
              key={method}
              className="group flex cursor-pointer items-center gap-2.5 rounded-xl border-2 border-gray-200 px-4 py-2.5 text-sm font-semibold text-gf-charcoal transition-all duration-300 hover:border-gf-green/40 hover:bg-gf-green/5 has-[:checked]:border-gf-green has-[:checked]:bg-gf-green/5"
            >
              <input
                type="radio"
                name="contactMethod"
                value={method}
                defaultChecked={method === "Phone"}
                className="h-4 w-4 border-gray-300 text-gf-green focus:ring-gf-green"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Submit */}
      <div className="pt-8">
        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-gf-gold to-gf-gold-light px-8 py-4 text-base font-bold text-white shadow-lg shadow-gf-gold/25 transition-all duration-300 hover:shadow-xl hover:shadow-gf-gold/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gf-gold focus:ring-offset-2"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
