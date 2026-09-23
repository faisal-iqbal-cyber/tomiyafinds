import InfoPage from "@/components/legal/InfoPage";

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="SITE INFORMATION"
      title="Terms of Use"
      intro="By using TOMIYA, you agree to use the website and its content responsibly."
      sections={[
        {
          title: "Editorial content",
          content:
            "TOMIYA provides product discovery and informational content. Content is not a guarantee that a particular product will be appropriate for every person or situation.",
        },
        {
          title: "Purchases",
          content:
            "Products featured on TOMIYA are generally sold by third-party retailers. Purchases, payments, shipping, returns, warranties and customer service are subject to the retailer's applicable terms.",
        },
        {
          title: "Accuracy",
          content:
            "We aim to keep information useful and accurate, but product details, prices and availability may change. Important purchasing information should be verified with the retailer.",
        },
        {
          title: "Content",
          content:
            "Unless otherwise stated, original TOMIYA editorial content and branding may not be reproduced or republished without permission.",
        },
      ]}
    />
  );
}