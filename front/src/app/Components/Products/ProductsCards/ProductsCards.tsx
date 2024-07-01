import Link from "next/link";
import { ProductCard } from "../ProductsCard/ProductsCard";
import { CardsContainer } from "./ProductsCards.styles";
import { getProducts } from "./helpers";

async function ProductCards() {
  const products = await getProducts();
  return (
    <CardsContainer className="container mx-auto">
      {products.map((product, index) => (
        <Link href={`/products/${index}`}>
          <ProductCard key={product.id} {...product} />
        </Link>
      ))}
    </CardsContainer>
  );
}

export { ProductCards };
