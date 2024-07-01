"use client";

import Link from "next/link";
import { CirclesContainer } from "./CategoryCircles.styles";
import Circles from "./Circles/Circles";
import { Imag } from "./Circles/Circles.styles";

const CategoryCircles: React.FC = (): React.ReactElement => {
  return (
    <CirclesContainer>
      <Link href={"/products/0"}>
        <Circles>{<Imag src="iphone.png" alt="Smartphones" />}</Circles>
      </Link>
      <Link href={"/products/1"}>
        <Circles>{<Imag src="laptop.png" alt="Laptops" />}</Circles>
      </Link>{" "}
      <Link href={"/products/2"}>
        <Circles>{<Imag src="tablets.png" alt="Tablets" />}</Circles>{" "}
      </Link>{" "}
      <Link href={"/products/3"}>
        <Circles>{<Imag src="watch.png" alt="Watches" />}</Circles>{" "}
      </Link>{" "}
      <Link href={"/products/4"}>
        <Circles>{<Imag src="audio.png" alt="Earphones" />}</Circles>{" "}
      </Link>
      <Link href={"/products/5"}>
        <Circles>{<Imag src="homepod.png" alt="Homepods" />}</Circles>{" "}
      </Link>
    </CirclesContainer>
  );
};

export default CategoryCircles;
