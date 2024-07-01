import Banner from "./Components/Banner/Banner";
import CategoryCircles from "./Components/CategoryCircles/CategoryCircles";
import { getProductsApi } from "./Components/Products/ProductsCards/helpers";

export default async function Home() {
  return (
    <>
      <Banner />
      <CategoryCircles />
    </>
  );
}
