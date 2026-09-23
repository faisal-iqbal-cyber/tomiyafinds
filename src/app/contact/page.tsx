import InfoPage from "@/components/legal/InfoPage";

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="CONTACT TOMIYA"
      title="Let's talk."
      intro="Questions, corrections, partnership enquiries or feedback about TOMIYA can be sent through our official contact channel."
      sections={[
        {
          title: "Contact",
          content:
            "Our public contact method will be listed here once the official TOMIYA contact address is activated.",
        },
        {
          title: "Product corrections",
          content:
            "If you notice outdated or incorrect product information on TOMIYA, we welcome corrections so the relevant page can be reviewed.",
        },
        {
          title: "Partnerships",
          content:
            "Commercial relationships do not guarantee editorial coverage. Sponsored or paid relationships should be identified where applicable.",
        },
      ]}
    />
  );
}