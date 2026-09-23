export type Product = {
  id: number;
  name: string;
  category: string;
  eyebrow: string;
  price: string;
  description: string;
  gradient: string;
  symbol: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Ambient Glow Lamp",
    category: "Home",
    eyebrow: "ATMOSPHERE",
    price: "Explore",
    description: "A sculptural light designed to make quiet spaces feel warmer.",
    gradient: "from-[#c59d72] via-[#735c50] to-[#29211f]",
    symbol: "◐",
  },
  {
    id: 2,
    name: "Minimal Travel Set",
    category: "Lifestyle",
    eyebrow: "ON THE GO",
    price: "Explore",
    description: "Useful travel essentials without the unnecessary clutter.",
    gradient: "from-[#85877d] via-[#484a45] to-[#1c1d1b]",
    symbol: "✦",
  },
  {
    id: 3,
    name: "Everyday Audio",
    category: "Tech",
    eyebrow: "SMART TECH",
    price: "Explore",
    description: "Clean design meets useful everyday listening.",
    gradient: "from-[#b7aca0] via-[#655e58] to-[#211e1c]",
    symbol: "⌁",
  },
  {
    id: 4,
    name: "Soft Carry Essential",
    category: "Women",
    eyebrow: "DAILY EDIT",
    price: "Explore",
    description: "An understated accessory selected for everyday versatility.",
    gradient: "from-[#b08d82] via-[#70534f] to-[#291e1e]",
    symbol: "◇",
  },
];