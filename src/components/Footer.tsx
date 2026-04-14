import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gf-green-dark text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-white font-bold text-lg font-[family-name:var(--font-display)]">
              Go-Forth Christmas Lights
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Professional holiday light installation backed by 60+ years of trusted home service in North Carolina.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/quote", "Get a Free Quote"],
                ["/gallery", "Photo Gallery"],
                ["/pricing", "Pricing"],
                ["/about", "About Us"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {["Lake Norman", "Triad", "Hickory", "Boone"].map((area) => (
                <li key={area}>
                  <Link
                    href={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-white transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Contact Us</h3>
            <p className="text-sm">
              <a href="tel:+18772741475" className="text-gf-gold hover:text-gf-gold-light transition-colors font-semibold">
                (877) 274-1475
              </a>
            </p>
            <p className="mt-2 text-sm text-gray-400">Mon-Fri 8am-6pm, Sat 9am-2pm</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Go-Forth Home Services. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
