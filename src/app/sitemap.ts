import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes = [
    "",
    "/women",
    "/men",
    "/kids",
    "/home",
    "/tech",
    "/beauty",
    "/guides",
    "/guides/smart-kitchen-upgrades",
    "/guides/travel-smarter",
    "/guides/useful-everyday-tech",
    "/guides/everyday-style-details",
    "/about",
    "/contact",
    "/affiliate-disclosure",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/guides/")
          ? 0.8
          : 0.7,
  }));
}