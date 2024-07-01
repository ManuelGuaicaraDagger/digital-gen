"use client";
import { IProduct } from "@/app/types";
import { CardImage, CardText, OneCardContainer } from "./ProductsCard.styles";

const ProductCard: React.FC<IProduct> = ({
  name,
  price,
  image,
}): React.ReactElement => {
  return (
    <OneCardContainer>
      <CardImage src={image} alt={name} />
      <CardText>
        <h2>
          <b>{name}</b>
        </h2>
        <h3>${price}</h3>
      </CardText>
    </OneCardContainer>
  );
};

export { ProductCard };
