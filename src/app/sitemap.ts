import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lights.go-forth.com";
  const lastModified = new Date("2026-04-14");

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/quote`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/style-quiz`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/service-areas/lake-norman`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/service-areas/triad`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/service-areas/hickory`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/service-areas/boone`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
