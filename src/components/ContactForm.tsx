"use client";

import { useState, type FormEvent } from "react";

const SERVICE_AREAS = [
  "Lake Norman",
  "Triad",
  "Hickory",
  "Boone",
  "Other",
] as const;

const SERVICE_TYPES = ["Residential", "Commercial"] as const;

const CONTACT_METHODS = ["Phone", "Email", "Text"] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-gf-green/20 bg-gf-warm-white p-10 text-center"
        role="status"
      >
        <svg
          className="mx-auto h-16 w-16 text-gf-green"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-gf-charcoal">
          Thank You!
        </h3>
        <p className="mt-2 text-gf-gray">
          We&rsquo;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gf-charcoal">
        Send Us a Message
      </h2>

      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1 block text-sm font-semibold text-gf-charcoal"
        >
          Name <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gf-charcoal transition-colors focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 focus:outline-none"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1 block text-sm font-semibold text-gf-charcoal"
        >
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gf-charcoal transition-colors focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 focus:outline-none"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="contact-phone"
          className="mb-1 block text-sm font-semibold text-gf-charcoal"
        >
          Phone <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          aria-describedby={errors.phone ? "phone-error" : undefined}
          aria-invalid={!!errors.phone}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gf-charcoal transition-colors focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 focus:outline-none"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Service Area */}
      <div>
        <label
          htmlFor="contact-area"
          className="mb-1 block text-sm font-semibold text-gf-charcoal"
        >
          Service Area
        </label>
        <select
          id="contact-area"
          name="serviceArea"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gf-charcoal transition-colors focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 focus:outline-none"
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
      <div>
        <label
          htmlFor="contact-type"
          className="mb-1 block text-sm font-semibold text-gf-charcoal"
        >
          Service Type
        </label>
        <select
          id="contact-type"
          name="serviceType"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gf-charcoal transition-colors focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 focus:outline-none"
        >
          {SERVICE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1 block text-sm font-semibold text-gf-charcoal"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gf-charcoal transition-colors focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 focus:outline-none"
        />
      </div>

      {/* Preferred Contact Method */}
      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-gf-charcoal">
          Preferred Contact Method
        </legend>
        <div className="flex flex-wrap gap-6">
          {CONTACT_METHODS.map((method) => (
            <label key={method} className="flex items-center gap-2 text-gf-charcoal">
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
      <button
        type="submit"
        className="w-full rounded-lg bg-gf-gold px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-gf-gold-light hover:text-gf-charcoal hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gf-gold focus:ring-offset-2"
      >
        Send Message
      </button>
    </form>
  );
}
