import { IProduct } from "@/app/types";
import { productsToPreLoad } from "../../Helpers/preLoad";

const URL_ = "http://localhost:3001/products";

async function getProductsApi() {
  const res = await fetch(URL_);
  const products: IProduct[] = await res.json();
  return products;
}

async function getProducts() {
  const productsDB = await getProductsApi();
  const newProducts = productsDB.map((product, index) => {
    return { ...product, image: productsToPreLoad[index].image };
  });

  return newProducts;
}

export { getProducts, getProductsApi };
