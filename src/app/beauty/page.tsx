import CategoryPage from "@/components/category/CategoryPage";
import { products } from "@/data/products";

export default function BeautyPage() {
  const categoryProducts = products.filter(
    (product) => product.category === "Beauty"
  );

  return (
    <CategoryPage
      name="Beauty"
      eyebrow="RADIATE DAILY"
      title="Edit."
      description="Beauty, self-care and everyday essentials curated with simplicity and intention."
      image="/images/beauty.png"
      products={categoryProducts}
    />
  );
}