import { MetadataRoute } from "next";
import { siteSettings } from "@/data/siteSettings";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteSettings.seo.siteUrl;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
