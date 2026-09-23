import GuideArticle from "@/components/guides/GuideArticle";
import { products } from "@/data/products";

export default function TravelSmarterGuidePage() {
  const travelProducts = products.filter(
    (product) =>
      product.category === "Travel" ||
      product.category === "Lifestyle"
  );

  const sections = [
    {
      heading: "Pack around the trip, not every possibility",
      text:
        "Overpacking often starts with preparing for situations that are unlikely to happen. Begin with the length of the trip, expected weather and the activities you actually have planned. Building your packing list around those realities makes it easier to leave unnecessary items behind.",
    },
    {
      heading: "Give every item a reason to take up space",
      text:
        "Luggage space becomes easier to manage when the things you pack can work across multiple situations. Clothing that combines easily, compact accessories and versatile essentials can reduce the number of items you need without making the trip feel restrictive.",
    },
    {
      heading: "Use compression where it genuinely helps",
      text:
        "Bulky clothing can consume a surprising amount of suitcase space. Compression or vacuum storage can reduce the volume of suitable soft items and help separate clothing inside a suitcase. It is still important to remember that reducing volume does not reduce the weight of what you pack.",
    },
    {
      heading: "Organize for arrival, not just departure",
      text:
        "A suitcase that looks organized at home can quickly become frustrating during a trip. Group items according to when you will need them, keep important essentials accessible and avoid packing systems that require unpacking everything to reach one small item.",
    },
    {
      heading: "Leave some room for the journey home",
      text:
        "Packing a suitcase to its absolute limit can create problems later. Leaving a little unused capacity gives you flexibility for souvenirs, purchases or simply repacking clothing that no longer folds as neatly as it did before departure.",
    },
  ];

  return (
    <GuideArticle
      category="TRAVEL"
      title="Travel Smarter Without Packing More"
      intro="Better packing is less about squeezing more into a suitcase and more about choosing, organizing and carrying what you actually need."
      readTime="4 MIN READ"
      image="/images/guides/travel-guide.png"
      sections={sections}
      products={travelProducts}
    />
  );
}