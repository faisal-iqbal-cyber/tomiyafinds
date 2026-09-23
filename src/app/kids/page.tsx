import CategoryPage from "@/components/category/CategoryPage";
import { products } from "@/data/products";

export default function KidsPage() {
  const categoryProducts = products.filter(
    (product) => product.category === "Kids"
  );

  return (
    <CategoryPage
      name="Kids"
      eyebrow="BRIGHTER TOMORROWS"
      title="Edit."
      description="Playful, useful and thoughtful finds curated for their growing world."
      image="/images/kids.png"
      products={categoryProducts}
    />
  );
}