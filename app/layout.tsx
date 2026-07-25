import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { siteSettings } from "@/data/siteSettings";

const sora = Sora({
  subsets: ["latin-ext"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

// Dynamic Title based on opening status
const pageTitle = siteSettings.openingStatus === "open" 
  ? siteSettings.seo.titleOpen 
  : siteSettings.seo.title;

export const metadata: Metadata = {
  title: pageTitle,
  description: siteSettings.seo.description,
  metadataBase: new URL(siteSettings.seo.siteUrl),
  keywords: siteSettings.seo.keywords,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: pageTitle,
    description: siteSettings.seo.description,
    url: "./",
    siteName: siteSettings.brandName,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteSettings.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate JSON-LD LocalBusiness / AutoWash Schema
  const autoWashSchema = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    "name": siteSettings.brandName,
    "url": siteSettings.seo.siteUrl,
    "sameAs": [siteSettings.instagramUrl],
    ...(siteSettings.phone ? { "telephone": siteSettings.phone } : {}),
    ...(siteSettings.address ? {
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteSettings.address,
        "addressLocality": "Pursaklar",
        "addressRegion": "Ankara",
        "addressCountry": "TR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.0385,
        "longitude": 32.8998
      }
    } : {}),
    ...(siteSettings.workingHours ? {
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": siteSettings.workingHours.split("-")[0] || "09:00",
        "closes": siteSettings.workingHours.split("-")[1] || "20:00"
      }
    } : {})
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": siteSettings.seo.siteUrl
      }
    ]
  };

  return (
    <html
      lang="tr"
      className={`${sora.variable} ${inter.variable} h-full antialiased font-sans`}
    >
      <head>
        <link rel="icon" href="/brand/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(autoWashSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-carbon-black text-white selection:bg-brand-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
