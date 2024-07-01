"use client";
import Link from "next/link";
import { CirclesContainer } from "./Components/CategoryCircles/CategoryCircles.styles";
import Circles from "./Components/CategoryCircles/Circles";
import {
  CircleDiv,
  Imag,
} from "./Components/CategoryCircles/Circles/Circles.styles";
import { BannerContainer, Img } from "./Components/Banner/Banner.styles";

export default function PageNotFound() {
  return (
    <div className="container bg-white mx-auto px-4">
      <div className="py-10 flex flex-col justify-center items-center">
        <h2 className="text-6xl text-[#373737]">Oops! </h2>
        <h2 className="text-6xl text-[#373737]">Page not found</h2>
        <h3 className="text-4xl text-[#373737] my-5">
          But these products may interest you
        </h3>
      </div>
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
      <Link href={"/products"}>
        <img
          src="https://static.eway.ca/content/landingpage/251/en/Profesisonal_appleforbusiness_headerbanner.jpg"
          alt=""
        />
      </Link>
    </div>
  );
}
