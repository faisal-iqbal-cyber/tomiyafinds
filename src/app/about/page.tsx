import InfoPage from "@/components/legal/InfoPage";

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="ABOUT TOMIYA"
      title="Better finds, thoughtfully chosen."
      intro="TOMIYA is an independent discovery platform focused on useful, distinctive and interesting products for everyday life."
      sections={[
        {
          title: "What we do",
          content:
            "We explore products and ideas across home, technology, style, travel, beauty and everyday living, then organize selected finds into simple collections and practical guides.",
        },
        {
          title: "Our approach",
          content:
            "Our goal is not to recommend everything. We aim to present products in a clear and useful context so visitors can decide whether something makes sense for their own needs.",
        },
        {
          title: "Independence",
          content:
            "TOMIYA may earn commissions from qualifying purchases made through affiliate links. Affiliate relationships do not change the price you pay. We aim to keep our editorial content useful and transparent.",
        },
      ]}
    />
  );
}