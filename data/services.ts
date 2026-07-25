export interface Service {
  slug: string;
  name: string;
  description: string;
  iconName: string; // Used to look up Lucide icons dynamically
  verified: boolean;
  active: boolean;
  duration?: string; // Estimated processing time
  price?: string;    // Price string
  imagePath: string;
}

export const services: Service[] = [
  {
    slug: "oto-yikama",
    name: "Oto Yıkama",
    description: "Aracın dış yüzeyindeki günlük kir, yol kalıntıları ve çevresel birikintilerin yüzeye uygun yöntemlerle temizlenmesi.",
    iconName: "Car",
    verified: true,
    active: true,
    imagePath: "/services/car-wash.webp"
  },
  {
    slug: "ic-dis-temizlik",
    name: "İç-Dış Temizlik",
    description: "Aracın dış yüzeyiyle birlikte iç mekânındaki temel alanların düzenli ve özenli şekilde temizlenmesi.",
    iconName: "Sparkles",
    verified: true,
    active: true,
    imagePath: "/services/interior-detailing.webp"
  },
  {
    slug: "detayli-ic-temizlik",
    name: "Detaylı İç Temizlik",
    description: "Koltuklar, zemin, kapı içleri, plastik yüzeyler ve ulaşılması zor bölgelere odaklanan kapsamlı iç temizlik uygulaması.",
    iconName: "Layers",
    verified: true,
    active: true,
    imagePath: "/services/interior-detailing.webp" // Reuse or map appropriately
  },
  {
    slug: "pasta-cila",
    name: "Pasta-Cila",
    description: "Boya yüzeyindeki hafif çiziklerin, matlaşmanın ve hare izlerinin görünümünü azaltmaya yönelik yüzey düzeltme ve parlaklık uygulaması.",
    iconName: "Disc",
    verified: true,
    active: true,
    imagePath: "/services/polishing.webp"
  },
  {
    slug: "boya-koruma",
    name: "Boya Koruma",
    description: "Temizlenmiş boya yüzeyinin dış etkenlere karşı korunmasına ve parlaklığının daha uzun süre muhafaza edilmesine yardımcı olan bakım uygulaması.",
    iconName: "ShieldAlert", // Or ShieldCheck
    verified: true,
    active: true,
    imagePath: "/services/paint-protection.webp"
  },
  // Unverified & inactive services (as requested)
  {
    slug: "seramik-kaplama",
    name: "Seramik Kaplama",
    description: "Boya yüzeyine uygulanan ve uzun süreli yüksek koruma, parlaklık ve hidrofobik etki sağlayan nano-teknolojik kaplama.",
    iconName: "Gem",
    verified: false,
    active: false,
    imagePath: "/services/paint-protection.webp"
  },
  {
    slug: "motor-temizligi",
    name: "Motor Temizliği",
    description: "Motor bloğu ve çevresinin biriken toz, yağ ve kirlerden güvenli kimyasallarla arındırılması işlemi.",
    iconName: "Cpu",
    verified: false,
    active: false,
    imagePath: "/services/car-wash.webp"
  },
  {
    slug: "far-temizleme",
    name: "Far Temizleme ve Parlatma",
    description: "Zamanla sararan ve matlaşan farların zımparalama ve pasta işlemleriyle ilk günkü berraklığına kavuşturulması.",
    iconName: "Sun",
    verified: false,
    active: false,
    imagePath: "/services/polishing.webp"
  },
  {
    slug: "jant-temizligi",
    name: "Jant Temizliği ve Bakımı",
    description: "Jantların balata tozu ve zorlu lekelerden arındırılarak özel koruyucularla kaplanması.",
    iconName: "CircleDot",
    verified: false,
    active: false,
    imagePath: "/services/car-wash.webp"
  },
  {
    slug: "deri-bakimi",
    name: "Deri Koltuk Bakımı ve Koruma",
    description: "Deri döşemelerin özel temizleyicilerle arındırılıp çatlamalara karşı beslenmesi ve yumuşatılması.",
    iconName: "Smile",
    verified: false,
    active: false,
    imagePath: "/services/interior-detailing.webp"
  },
  {
    slug: "cam-filmi",
    name: "Profesyonel Cam Filmi",
    description: "Güneş ışınlarını engelleyen, araç içi sıcaklığı dengeleyen ve gizlilik sağlayan yüksek kaliteli cam filmi uygulaması.",
    iconName: "FileText",
    verified: false,
    active: false,
    imagePath: "/services/interior-detailing.webp"
  },
  {
    slug: "ppf-kaplama",
    name: "PPF Kaplama (Boya Koruma Filmi)",
    description: "Taş çarpmaları ve çizilmelere karşı aracı koruyan şeffaf poliüretan koruyucu film uygulaması.",
    iconName: "Wallpaper",
    verified: false,
    active: false,
    imagePath: "/services/paint-protection.webp"
  }
];
