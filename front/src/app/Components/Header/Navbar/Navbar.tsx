"use client";

import Link from "next/link";
import { Img, Li, NavContainer, Ul } from "./Navbar.styles";

const NavBar: React.FC = (): React.ReactElement => {
  return (
    <NavContainer>
      <Link href={"/"}>
        <Img src="https://i.ibb.co/6RNHbwq/logo.png" alt="Logo" />
      </Link>
      <Ul>
        <Link href={"/"}>
          <Li>Home</Li>
        </Link>
        <Link href={"/products"}>
          <Li>Products</Li>
        </Link>
        <Link href={"/about"}>
          <Li>About Us</Li>
        </Link>
        <Link href={"/contact"}>
          <Li>Contact</Li>
        </Link>
      </Ul>
    </NavContainer>
  );
};

export default NavBar;
