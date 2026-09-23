import InfoPage from "@/components/legal/InfoPage";

export default function AffiliateDisclosurePage() {
  return (
    <InfoPage
      eyebrow="TRANSPARENCY"
      title="Affiliate Disclosure"
      intro="Some links on TOMIYA are affiliate links. This page explains what that means."
      sections={[
        {
          title: "Amazon Associates",
          content:
            "TOMIYA participates in the Amazon Associates Program. As an Amazon Associate I earn from qualifying purchases.",
        },
        {
          title: "How it works",
          content:
            "When you follow an eligible affiliate link and make a qualifying purchase, TOMIYA may receive a commission. This does not normally add an extra charge to the price you pay.",
        },
        {
          title: "Product information",
          content:
            "Prices, availability, ratings, product specifications and other marketplace information can change over time. Please confirm important details on the retailer's website before purchasing.",
        },
        {
          title: "Editorial approach",
          content:
            "Affiliate relationships do not guarantee that a product will be featured. TOMIYA aims to provide useful context and leaves purchasing decisions to the reader.",
        },
      ]}
    />
  );
}