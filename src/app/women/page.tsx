import CategoryPage from "@/components/category/CategoryPage";
import { products } from "@/data/products";

export default function WomenPage() {
  const womenProducts = products.filter(
    (product) => product.category === "Women"
  );

  return (
    <CategoryPage
      name="Women"
      eyebrow="FOR EVERY YOU"
      title="Edit."
      description="Style, accessories and thoughtful everyday finds selected to bring a little more beauty to the everyday."
      image="/images/women.png"
      products={womenProducts}
    />
  );
}