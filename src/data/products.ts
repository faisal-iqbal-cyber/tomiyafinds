export type Product = {
  id: number;
  name: string;
  category: string;
  eyebrow: string;
  price: string;
  description: string;
  gradient: string;
  symbol: string;
  affiliateUrl?: string;
  image?: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
  id: 101,
  name: "2-in-1 Glass Oil Sprayer",
  category: "Kitchen",
  eyebrow: "SMART KITCHEN FIND",
  price: "View on Amazon",
  description:
    "A reusable glass kitchen dispenser that lets you spray or pour cooking oil from one bottle.",
  gradient: "from-[#b99a69] via-[#554737] to-[#171512]",
  symbol: "✦",
  image: "/images/products/oil-sprayer.png",
  affiliateUrl: "https://amzn.to/3V7YhxY",
  featured: true,
},
  {
  id: 2,
  name: "Travel Vacuum Bags",
  category: "Travel",
  eyebrow: "TRAVEL SMARTER",
  price: "View on Amazon",
  description:
    "A compact vacuum storage system designed to compress clothing and help make better use of luggage space.",
  gradient: "from-[#85877d] via-[#484a45] to-[#1c1d1b]",
  symbol: "✦",
  image: "/images/products/travel-vacuum-bags.png",
  affiliateUrl: "https://amzn.to/4hGCTIJ",
  featured: true,
},
  {
  id: 3,
  name: "Echo Show 5",
  category: "Tech",
  eyebrow: "SMART HOME FIND",
  price: "View on Amazon",
  description:
    "A compact smart display for Alexa, music, everyday information and connected-home control.",
  gradient: "from-[#b7aca0] via-[#655e58] to-[#211e1c]",
  symbol: "⌁",
  image: "/images/products/echo-show-5.png",
  affiliateUrl: "https://amzn.to/4yb32oZ",
  featured: true,
},
  {
  id: 4,
  name: "Chunky Knot Gold Earrings",
  category: "Women",
  eyebrow: "STYLE FIND",
  price: "View on Amazon",
  description:
    "Statement knot earrings with a polished gold-tone look designed to elevate everyday outfits.",
  gradient: "from-[#b08d82] via-[#70534f] to-[#291e1e]",
  symbol: "◇",
  image: "/images/products/gold-knot-earrings.png",
  affiliateUrl: "https://amzn.to/4yRBOUe",
  featured: true,
},
];