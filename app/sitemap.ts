import { MetadataRoute } from "next";
import { siteSettings } from "@/data/siteSettings";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteSettings.seo.siteUrl;

  const staticUrls = [
    "",
    "/hakkimizda",
    "/hizmetler",
    "/donusumler",
    "/galeri",
    "/iletisim",
    "/kvkk",
    "/gizlilik-politikasi",
    "/cerez-politikasi",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceUrls = services
    .filter((s) => s.active && s.verified)
    .map((s) => ({
      url: `${baseUrl}/hizmetler/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  return [...staticUrls, ...serviceUrls];
}
