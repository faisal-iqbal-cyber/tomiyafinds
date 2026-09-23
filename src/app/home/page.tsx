import CategoryPage from "@/components/category/CategoryPage";
import { products } from "@/data/products";

export default function HomePage() {
  const categoryProducts = products.filter(
    (product) =>
      product.category === "Home" ||
      product.category === "Kitchen"
  );

  return (
    <CategoryPage
      name="Home"
      eyebrow="A BETTER HOME"
      title="Edit."
      description="Clever essentials, beautiful details and useful discoveries for spaces you love."
      image="/images/home.png"
      products={categoryProducts}
    />
  );
}