import CategoryPage from "@/components/category/CategoryPage";
import { products } from "@/data/products";

export default function TechPage() {
  const categoryProducts = products.filter(
    (product) => product.category === "Tech"
  );

  return (
    <CategoryPage
      name="Tech"
      eyebrow="SMARTER LIVING"
      title="Edit."
      description="Smart devices and useful technology selected to make everyday life a little easier."
      image="/images/tech.png"
      products={categoryProducts}
    />
  );
}