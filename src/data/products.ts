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
  {
    id: 5,
    name: "3-Pack 2-Tier Under Sink Organizers",
    category: "Home",
    eyebrow: "SMART ORGANIZATION FIND",
    price: "View on Amazon",
    description:
      "A set of two-tier sliding organizers designed to turn under-sink space into practical, easy-access storage.",
    gradient: "from-[#a99b84] via-[#62594b] to-[#201d19]",
    symbol: "✦",
    image: "/images/products/under-sink-organizer.png",
    affiliateUrl: "https://amzn.to/3VeTDOI",
    featured: true,
  },
  {
  id: 6,
  name: "Rechargeable Silicone Facial Cleansing Brush",
  category: "Beauty",
  eyebrow: "BEAUTY ROUTINE FIND",
  price: "View on Amazon",
  description:
    "A rechargeable silicone facial cleansing brush with gentle vibration, a warming massage end and a waterproof design for everyday skincare.",
  gradient: "from-[#d9aaa9] via-[#936c72] to-[#302124]",
  symbol: "✦",
  image: "/images/products/facial-cleansing-brush.png",
  affiliateUrl: "https://amzn.to/4ym5KIu",
  featured: true,
},
{
  id: 7,
  name: "Waterproof Portable Bluetooth Speaker",
  category: "Tech",
  eyebrow: "EVERYDAY TECH FIND",
  price: "View on Amazon",
  description:
    "A compact 15W Bluetooth speaker with an IP67 waterproof and dustproof design, dynamic lights, TWS pairing and Bluetooth 5.3.",
  gradient: "from-[#53636c] via-[#283137] to-[#101315]",
  symbol: "⌁",
  image: "/images/products/bluetooth-speaker.png",
  affiliateUrl: "https://amzn.to/4hkmo3G",
  featured: true,
},
{
  id: 8,
  name: "AstroAI L7 Portable Tire Inflator",
  category: "Tech",
  eyebrow: "ROAD TRIP TECH FIND",
  price: "View on Amazon",
  description:
    "A compact cordless tire inflator with up to 150 PSI pressure, digital gauge, automatic shut-off and built-in emergency light.",
  gradient: "from-[#d88938] via-[#4a3a2d] to-[#171513]",
  symbol: "✦",
  image: "/images/products/astroai-tire-inflator.png",
  affiliateUrl: "https://amzn.to/4yXI2SB",
  featured: true,
},
{
  id: 9,
  name: "RUNBOX Slim RFID Wallet for Men",
  category: "Men",
  eyebrow: "EVERYDAY MEN'S ESSENTIAL",
  price: "View on Amazon",
  description:
    "A slim bifold wallet with RFID-blocking protection, 15 card slots, dual ID windows and a compact design for everyday carry.",
  gradient: "from-[#454545] via-[#242424] to-[#111111]",
  symbol: "▰",
  image: "/images/products/runbox-rfid-wallet.png",
  affiliateUrl: "https://amzn.to/4daqFpn",
  featured: true,
},
{
  id: 10,
  name: "Airbition Talking Flash Cards",
  category: "Kids",
  eyebrow: "PLAY & LEARN FIND",
  price: "View on Amazon",
  description:
    "A screen-free talking flash card set with 224 illustrated words and sounds, designed to make early vocabulary learning interactive and fun.",
  gradient: "from-[#79b9bd] via-[#4f8f96] to-[#254e55]",
  symbol: "✦",
  image: "/images/products/airbition-talking-flash-cards.png",
  affiliateUrl: "https://amzn.to/4AsvAfc",
  featured: true,
},
{
  id: 11,
  name: "MINTEGRA Multi-Pocket Shoulder Bag",
  category: "Women",
  eyebrow: "EVERYDAY WOMEN'S FIND",
  price: "View on Amazon",
  description:
    "A lightweight multi-pocket nylon bag with an adjustable strap and roomy organization, designed for everyday errands, shopping and travel.",
  gradient: "from-[#8f7968] via-[#493d36] to-[#171514]",
  symbol: "✦",
  image: "/images/products/mintegra-shoulder-bag.png",
  affiliateUrl: "https://amzn.to/4rHfXMX",
  featured: true,
},
{
  id: 12,
  name: "GOLDEN HOUR Chronograph Watch",
  category: "Men",
  eyebrow: "MEN'S STYLE FIND",
  price: "View on Amazon",
  description:
    "A stainless-steel chronograph watch with quartz movement, calendar display and 3ATM water resistance, designed for everyday and business wear.",
  gradient: "from-[#173b61] via-[#17222d] to-[#0b0d10]",
  symbol: "◷",
  image: "/images/products/golden-hour-chronograph-watch.png",
  affiliateUrl: "https://amzn.to/4hBnYhO",
  featured: true,
},
{
  id: 13,
  name: "Stomp Rocket Jr. Multi-Color Launcher",
  category: "Kids",
  eyebrow: "OUTDOOR PLAY FIND",
  price: "View on Amazon",
  description:
    "A kid-powered foam rocket launcher with 8 colorful rockets that can soar up to 100 feet, combining active outdoor play with hands-on STEM learning.",
  gradient: "from-[#63b9e8] via-[#2878a8] to-[#12384f]",
  symbol: "↗",
  image: "/images/products/stomp-rocket-jr.png",
  affiliateUrl: "https://amzn.to/4zsqluX",
  featured: true,
},
{
  id: 14,
  name: "Vtopmart Stackable Storage Drawers",
  category: "Home",
  eyebrow: "SMART HOME ORGANIZATION",
  price: "View on Amazon",
  description:
    "A 4-pack of clear stackable pull-out drawers designed to organize bathroom, pantry, cabinet and under-sink essentials while keeping everything easy to see and access.",
  gradient: "from-[#d9c3a4] via-[#9c7655] to-[#493629]",
  symbol: "▦",
  image: "/images/products/vtopmart-stackable-drawers.png",
  affiliateUrl: "https://amzn.to/4hWv1Ty",
  featured: true,
},
];