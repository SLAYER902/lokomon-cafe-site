import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/menu", "/about", "/gallery", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://lokoman-cafe.local${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}
