"use client";

import Link from "next/link";
import {
  FooterA,
  FooterCont,
  FooterImg,
  FooterLi,
  FooterLiImg,
  FooterSpan,
  FooterUl,
} from "./Footer.styles";

const Footer: React.FC = (): React.ReactElement => {
  return (
    <FooterCont>
      <FooterSpan>Project by Manuel Guaicara</FooterSpan>
      <FooterSpan>
        <FooterUl>
          <Link href={"/products"}>
            <FooterLi>Products</FooterLi>
          </Link>
          <Link href={"/about"}>
            <FooterLi>About Us</FooterLi>
          </Link>
          <Link href={"/contact"}>
            <FooterLi>Contact</FooterLi>
          </Link>
        </FooterUl>
      </FooterSpan>
      <FooterSpan>
        <FooterUl>
          <FooterLiImg>
            <FooterA
              href="https://www.linkedin.com/in/manuel-alejandro-guaicara-dagger-784a06194/"
              target="blank"
            >
              <FooterImg src="https://i.ibb.co/VYc5Vd5/social.png" />
            </FooterA>
          </FooterLiImg>
          <FooterLiImg>
            <FooterA
              href="https://github.com/ManuelGuaicaraDagger"
              target="blank"
            >
              <FooterImg src="https://i.ibb.co/5x2rYx8/github.png" />
            </FooterA>
          </FooterLiImg>
        </FooterUl>
      </FooterSpan>
    </FooterCont>
  );
};

export default Footer;
