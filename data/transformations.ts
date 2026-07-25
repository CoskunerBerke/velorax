export interface TransformationItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  treatment: string;
}

export const transformationItems: TransformationItem[] = [
  {
    id: "t1",
    title: "Boya Düzeltme & Parlatma",
    description: "Mikro çizikler ve hare izlerinden arındırılmış, ayna gibi pürüzsüz bir boya yüzeyi.",
    beforeImage: "/transformations/car-01-before.webp",
    afterImage: "/transformations/car-01-after.webp",
    treatment: "Pasta-Cila & Boya Koruma"
  }
];
