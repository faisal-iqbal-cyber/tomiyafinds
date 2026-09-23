import CategoryPage from "@/components/category/CategoryPage";
import { products } from "@/data/products";

export default function MenPage() {
  const categoryProducts = products.filter(
    (product) => product.category === "Men"
  );

  return (
    <CategoryPage
      name="Men"
      eyebrow="MODERN ESSENTIALS"
      title="Edit."
      description="Useful, refined and everyday essentials selected for modern life."
      image="/images/men.png"
      products={categoryProducts}
    />
  );
}