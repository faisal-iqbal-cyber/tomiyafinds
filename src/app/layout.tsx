import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: {
    default: "TOMIYA | Smart Finds & Trending Products",
    template: "%s | TOMIYA",
  },

  description:
    "Discover thoughtfully curated finds, useful products and practical buying guides across home, tech, style, travel, beauty and everyday life.",

  applicationName: "TOMIYA",

  keywords: [
    "TOMIYA",
    "smart finds",
    "product discoveries",
    "buying guides",
    "home finds",
    "tech finds",
    "style finds",
    "travel essentials",
    "beauty finds",
    "useful products",
  ],

  authors: [{ name: "TOMIYA" }],
  creator: "TOMIYA",
  publisher: "TOMIYA",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    siteName: "TOMIYA",
    title: "TOMIYA | Smart Finds & Trending Products",
    description:
      "Thoughtfully curated finds, practical buying ideas and inspiration for everyday life.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TOMIYA Smart Finds",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TOMIYA | Smart Finds & Trending Products",
    description:
      "Thoughtfully curated finds, practical buying ideas and inspiration for everyday life.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}