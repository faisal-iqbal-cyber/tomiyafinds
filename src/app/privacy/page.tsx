import InfoPage from "@/components/legal/InfoPage";

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="YOUR PRIVACY"
      title="Privacy Policy"
      intro="This policy provides general information about how TOMIYA handles information when you use the website."
      sections={[
        {
          title: "Website usage",
          content:
            "Basic technical information may be processed by our hosting or infrastructure providers when you access the website, such as information required to deliver pages securely and reliably.",
        },
        {
          title: "External links",
          content:
            "TOMIYA contains links to third-party websites, including retailers. Once you visit another website, its own privacy practices and policies apply.",
        },
        {
          title: "Affiliate links",
          content:
            "Some outbound links may contain affiliate identifiers that allow a retailer or affiliate network to attribute qualifying activity to TOMIYA.",
        },
        {
          title: "Changes",
          content:
            "This policy may be updated as TOMIYA adds new features, services or third-party tools. Material changes should be reflected on this page.",
        },
      ]}
    />
  );
}