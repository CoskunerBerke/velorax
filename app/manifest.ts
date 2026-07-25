import { MetadataRoute } from "next";
import { siteSettings } from "@/data/siteSettings";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteSettings.brandName,
    short_name: "Velorax",
    description: siteSettings.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050607",
    theme_color: "#E3202A",
    icons: [
      {
        src: "/brand/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
