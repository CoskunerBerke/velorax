export interface GalleryItem {
  id: string;
  category: "oto-yikama" | "detayli-temizlik" | "pasta-cila" | "boya-koruma" | "ic-mekan" | "tamamlanan-araclar";
  title: string;
  description: string;
  imagePath: string;
}

export const galleryCategories = [
  { id: "all", name: "Tümü" },
  { id: "oto-yikama", name: "Oto Yıkama" },
  { id: "detayli-temizlik", name: "Detaylı Temizlik" },
  { id: "pasta-cila", name: "Pasta-Cila" },
  { id: "boya-koruma", name: "Boya Koruma" },
  { id: "ic-mekan", name: "İç Mekân" },
  { id: "tamamlanan-araclar", name: "Tamamlanan Araçlar" }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "tamamlanan-araclar",
    title: "Porsche 911 GT3 RS",
    description: "Detaylı pasta-cila ve boya koruma sonrasındaki ayna gibi parlaklık.",
    imagePath: "/gallery/porsche-completed.webp"
  },
  {
    id: "g2",
    category: "pasta-cila",
    title: "Mercedes-AMG E63 S",
    description: "Boya yüzeyindeki hare giderimi ve derin cila uygulaması.",
    imagePath: "/gallery/mercedes-polish.webp"
  },
  {
    id: "g3",
    category: "detayli-temizlik",
    title: "BMW M5 Competition",
    description: "Deri koltuk bakımı ve derinlemesine iç mekân dezenfeksiyonu.",
    imagePath: "/gallery/bmw-interior.webp"
  },
  {
    id: "g4",
    category: "boya-koruma",
    title: "Audi RS6 Avant",
    description: "Boya koruma sonrası oluşan mükemmel hidrofobik koruma tabakası.",
    imagePath: "/gallery/audi-protection.webp"
  },
  {
    id: "g5",
    category: "oto-yikama",
    title: "Range Rover Sport",
    description: "Temassız aktif köpük ve çiziksiz yıkama uygulaması.",
    imagePath: "/gallery/rover-wash.webp"
  },
  {
    id: "g6",
    category: "ic-mekan",
    title: "Porsche Taycan",
    description: "Dijital kokpit ve direksiyon bölgesi detaylı toz/kir arındırma.",
    imagePath: "/gallery/taycan-cockpit.webp"
  }
];
