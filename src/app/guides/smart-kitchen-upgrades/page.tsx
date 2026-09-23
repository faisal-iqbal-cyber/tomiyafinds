import GuideArticle from "@/components/guides/GuideArticle";
import { products } from "@/data/products";

export default function SmartKitchenGuidePage() {
  const kitchenProducts = products.filter(
    (product) =>
      product.category === "Kitchen" ||
      product.category === "Home"
  );

  const sections = [
    {
      heading: "Start with the things you reach for every day",
      text:
        "The most useful kitchen upgrades are often the simplest ones. Instead of filling drawers with single-purpose gadgets, look at the tools you already use every day and ask where a better design could save time, reduce mess or make preparation easier.",
    },
    {
      heading: "Choose tools that solve more than one problem",
      text:
        "Counter space is valuable. Multi-purpose tools can be especially useful when they replace several separate items without making the basic task more complicated. A well-designed dispenser, storage system or preparation tool should feel simpler to use, not more technical.",
    },
    {
      heading: "Make frequently used ingredients easier to handle",
      text:
        "Small improvements around oils, seasonings and everyday ingredients can make cooking feel more organized. For example, a dispenser that supports controlled spraying as well as pouring can provide flexibility for different cooking tasks while keeping one frequently used ingredient within easy reach.",
    },
    {
      heading: "Organization should support your routine",
      text:
        "A beautifully organized kitchen is only useful when the system matches the way you actually cook. Keep frequently used tools accessible, group related items together and avoid storage solutions that add unnecessary steps every time you need something.",
    },
    {
      heading: "Buy for usefulness, not novelty",
      text:
        "A product can look clever without being genuinely useful. Before adding something to your kitchen, consider how often you would use it, whether it replaces an existing tool and how easy it will be to clean and store. The strongest upgrades are the ones that quietly become part of your routine.",
    },
  ];

  return (
    <GuideArticle
      category="HOME & KITCHEN"
      title="Small Kitchen Upgrades That Make Everyday Cooking Easier"
      intro="A thoughtful kitchen does not need dozens of gadgets. A few practical upgrades can make everyday preparation, organization and cooking feel noticeably easier."
      readTime="5 MIN READ"
      image="/images/guides/kitchen-guide.png"
      sections={sections}
      products={kitchenProducts}
    />
  );
}