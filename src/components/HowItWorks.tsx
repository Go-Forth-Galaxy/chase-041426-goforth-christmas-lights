const steps = [
  {
    number: "1",
    title: "Request a Free Quote",
    description:
      "Tell us about your home and vision. We'll schedule a time to visit and design a custom lighting plan.",
    icon: (
      <svg className="w-10 h-10 text-gf-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Custom Design",
    description:
      "Our designers create a personalized lighting plan tailored to your home's architecture and your style preferences.",
    icon: (
      <svg className="w-10 h-10 text-gf-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Professional Installation",
    description:
      "Our trained technicians install everything safely and efficiently. We supply all commercial-grade materials.",
    icon: (
      <svg className="w-10 h-10 text-gf-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Sit Back & Enjoy",
    description:
      "We handle maintenance all season, then take everything down and store it for next year. Hassle-free from start to finish.",
    icon: (
      <svg className="w-10 h-10 text-gf-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="py-20 bg-gf-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-bold text-gf-charcoal font-[family-name:var(--font-display)]"
          >
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gf-gray max-w-xl mx-auto">
            From first call to final takedown, we make holiday lighting effortless.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md">
                {step.icon}
              </div>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gf-green text-white text-xs font-bold mb-2">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-gf-charcoal">{step.title}</h3>
              <p className="mt-2 text-sm text-gf-gray leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
