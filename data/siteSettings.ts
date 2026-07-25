export interface SiteSettings {
  brandName: string;
  instagramUrl: string;
  instagramUsername: string;
  phone: string;         // E.g. "+905551234567" when verified
  whatsapp: string;      // E.g. "+905551234567" when verified
  address: string;       // Empty if not verified
  mapUrl: string;        // Google Maps embed or link URL
  workingHours: string;
  openingStatus: "coming-soon" | "open";
  openingDate?: string;  // E.g. "2026-08-15" (if any)
  seo: {
    title: string;
    titleOpen: string;
    description: string;
    keywords: string[];
    siteUrl: string;
  };
}

export const siteSettings: SiteSettings = {
  brandName: "VELORAX AUTO SPA",
  instagramUrl: "https://www.instagram.com/velorax_auto_spa/",
  instagramUsername: "@velorax_auto_spa",
  phone: "",             // Empty as requested, will hide phone elements
  whatsapp: "",          // Empty as requested, will hide whatsapp elements
  address: "",           // Empty as requested, will hide address elements
  mapUrl: "",            // Empty as requested, will hide map elements
  workingHours: "",      // Empty as requested, will hide working hours elements
  openingStatus: "coming-soon", // Default value as requested
  openingDate: "",       // Empty as requested, will not show countdown timer
  seo: {
    title: "Velorax Auto Spa | Profesyonel Oto Yıkama ve Detailing",
    titleOpen: "Velorax Auto Spa | Ankara Pursaklar Oto Yıkama ve Detailing",
    description: "Velorax Auto Spa ile profesyonel oto yıkama, detaylı temizlik, pasta-cila ve boya koruma hizmetlerini keşfedin. Açılış ve randevu bilgileri için Instagram hesabımızı takip edin.",
    keywords: [
      "velorax auto spa",
      "velorax",
      "ankara pursaklar oto yıkama",
      "pursaklar detailing",
      "pasta cila ankara",
      "boya koruma pursaklar",
      "detaylı iç temizlik",
      "premium araç bakımı"
    ],
    siteUrl: "https://velorax.com" // Placeholder domain, will be used in sitemaps & schemas
  }
};
