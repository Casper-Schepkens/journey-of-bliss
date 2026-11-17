import type { MetadataRoute } from "next";
import { site, tourLinks } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about-us",
    "/tours",
    ...tourLinks.map((tour) => tour.href),
    "/faqs",
    "/contact-us",
    "/terms-condition",
    "/privacy-policy",
  ];

  return paths.map((path) => ({
    url: `${site.url}${path === "/" ? "/" : `${path}/`}`,
    changeFrequency: path === "/" || path === "/tours" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/tours/") ? 0.8 : 0.6,
  }));
}
