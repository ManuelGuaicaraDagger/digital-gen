import { productsToPreLoad } from "@/app/Components/Helpers/preLoad";
import { getProducts } from "@/app/Components/Products/ProductsCards/helpers";

import Link from "next/link";

export default async function SlugContainer({ params }: { params: any }) {
  const product = params.slug;
  const products = await getProducts();
  const handleBuy = () => {
    console.log("hola");
  };

  if (!products[product]) {
    return (
      <div className="container bg-white mx-auto px-4">
        <div className="py-10 flex flex-col justify-center items-center">
          <h2 className="text-6xl text-[#373737]">Oops! </h2>
          <h2 className="text-6xl text-[#373737]">Page not found</h2>
          <Link href={"/products"}>
            <button className="bg-[#373737] text-white text-xl h-10 w-60 rounded-lg my-10">
              Back to products
            </button>
          </Link>
        </div>
        <Link href={"/products"}>
          <img
            src="https://static.eway.ca/content/landingpage/251/en/Profesisonal_appleforbusiness_headerbanner.jpg"
            alt=""
          />
        </Link>
      </div>
    );
  } else {
    return (
      <main>
        <div className="container flex justify-center items-center bg-white mx-auto p-10 ">
          <img
            className="size-96 border"
            src={products[product].image}
            alt={products[product].name}
          />
          <div className="p-10">
            <h2 className="text-4xl text-[#373737]">
              {products[product].name}
            </h2>
            <h3 className="my-6 text-base text-[#373737]">
              {products[product].description}
            </h3>
            <h3 className="my-6 text-4xl text-[#373737]">
              ${products[product].price}
            </h3>
            <button className="bg-[#373737] text-white text-xl h-10 w-20 rounded-lg">
              Buy
            </button>
            <Link href={"/products"}>
              <img
                className=" h-10 w-10 ml-4 mt-8 h-10 w-10"
                src="https://i.ibb.co/3TJGyQD/Untitled-design-9-removebg-preview.png"
                alt="arrow"
              />
            </Link>
          </div>
        </div>
        <div className="container flex justify-center items-center bg-white mx-auto ">
          <img
            className="size-full"
            src={productsToPreLoad[product].banner}
            alt=""
          />
        </div>
      </main>
    );
  }
}
