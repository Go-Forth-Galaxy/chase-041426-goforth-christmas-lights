import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lights.go-forth.com"),
  title: "Go-Forth Christmas Lights | Professional Holiday Light Installation in NC",
  description:
    "Professional Christmas light installation across Lake Norman, the Triad, Hickory, and Boone NC. Licensed, insured, and backed by 65+ years of trusted home service. Get your free quote today!",
  keywords: [
    "Christmas light installation",
    "holiday lights",
    "Lake Norman",
    "Greensboro",
    "Winston-Salem",
    "North Carolina",
    "professional light installation",
    "Go-Forth",
  ],
  openGraph: {
    title: "Go-Forth Christmas Lights | Professional Holiday Light Installation in NC",
    description:
      "Professional Christmas light installation across North Carolina. Licensed, insured, and backed by 65+ years of trusted home service.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Go-Forth Christmas Lights — Professional Holiday Light Installation",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Go-Forth Christmas Lights",
              description:
                "Professional Christmas light installation across Lake Norman, the Triad, Hickory, and Boone NC.",
              url: "https://lights.go-forth.com",
              telephone: "+18772741475",
              email: "lights@go-forth.com",
              foundingDate: "1959",
              numberOfEmployees: { "@type": "QuantitativeValue", minValue: 200 },
              address: {
                "@type": "PostalAddress",
                addressLocality: "High Point",
                addressRegion: "NC",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "City", name: "Mooresville" },
                { "@type": "City", name: "Cornelius" },
                { "@type": "City", name: "Davidson" },
                { "@type": "City", name: "Greensboro" },
                { "@type": "City", name: "Winston-Salem" },
                { "@type": "City", name: "High Point" },
                { "@type": "City", name: "Hickory" },
                { "@type": "City", name: "Boone" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Christmas Light Installation Packages",
                itemListElement: [
                  { "@type": "Offer", name: "Classic Package", price: "599", priceCurrency: "USD" },
                  { "@type": "Offer", name: "Premium Package", price: "1199", priceCurrency: "USD" },
                  { "@type": "Offer", name: "Showstopper Package", price: "2499", priceCurrency: "USD" },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gf-charcoal font-[family-name:var(--font-sans)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
