import GuideArticle from "@/components/guides/GuideArticle";
import { products } from "@/data/products";

export default function EverydayStyleDetailsGuidePage() {
  const styleProducts = products.filter(
    (product) =>
      product.category === "Women" ||
      product.category === "Style"
  );

  const sections = [
    {
      heading: "Start with one detail that has presence",
      text:
        "An everyday outfit does not need many statement pieces to feel intentional. One distinctive accessory can create a focal point while allowing the rest of the look to remain simple and comfortable.",
    },
    {
      heading: "Let accessories work with your wardrobe",
      text:
        "The most useful accessories are often the ones that complement several outfits you already own. Before adding something new, think about the colors, shapes and materials that appear most often in your wardrobe.",
    },
    {
      heading: "Use proportion to create balance",
      text:
        "Accessories can subtly change the visual balance of an outfit. A more noticeable earring, structured bag or pair of sunglasses can add definition to simple clothing, while understated pieces can soften a look that already contains strong shapes or patterns.",
    },
    {
      heading: "Small details can change familiar outfits",
      text:
        "Repeating clothing does not mean repeating exactly the same look. Jewelry, scarves, bags and other small details can give familiar pieces a different character without requiring an entirely new wardrobe.",
    },
    {
      heading: "Choose pieces you will actually reach for",
      text:
        "A beautiful accessory has more value when it fits your real routine. Consider comfort, versatility and how easily a piece works with what you already wear. Everyday style becomes easier when your favorite details are also practical enough to use regularly.",
    },
  ];

  return (
    <GuideArticle
      category="STYLE"
      title="The Little Details That Elevate an Everyday Look"
      intro="Thoughtful accessories can give simple outfits more character without making getting dressed more complicated."
      readTime="5 MIN READ"
      image="/images/guides/style-guide.png"
      sections={sections}
      products={styleProducts}
    />
  );
}