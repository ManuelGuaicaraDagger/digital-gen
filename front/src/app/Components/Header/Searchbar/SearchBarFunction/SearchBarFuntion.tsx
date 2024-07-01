"use client";
import { useState } from "react";
import { Input } from "../Searchbar.styles";
import { getProducts } from "@/app/Components/Products/ProductsCards/helpers";
import { useRouter } from "next/navigation";

export default function SearchBarFunction() {
  const [valorInput, setValorInput] = useState("");
  const router = useRouter();

  const manejarCambioInput = (event: any) => {
    setValorInput(event.target.value);
  };

  const manejarEnvioFormulario = (event: any) => {
    event.preventDefault();
    async function filter() {
      const products = await getProducts();
      const objetoEncontrado = products.filter((obj) =>
        obj.name.toLowerCase().includes(valorInput.toLowerCase())
      );
      if (objetoEncontrado) {
        router.push(`/products/${objetoEncontrado[0]?.id - 1}`);
      } else {
        router.push(`/products/notfound`);
      }
    }
    filter();
  };
  return (
    <form className="flex" onSubmit={manejarEnvioFormulario}>
      <Input
        type="text"
        placeholder="Search..."
        value={valorInput}
        onChange={manejarCambioInput}
      />
      <button type="submit" disabled={!valorInput && true}>
        <img
          className="h-[36px]  rounded-r-lg bg-[#d2d2d2] mr-5"
          src="https://i.ibb.co/MgW6nTJ/lupa.png"
          alt="lupa"
        />
      </button>
    </form>
  );
}
