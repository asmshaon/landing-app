import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/book-a-call`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/case-studies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/testimonials`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];
}
