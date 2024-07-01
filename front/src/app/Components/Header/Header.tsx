"use client";

import { Container, NavSearchCont } from "./Header.styles";
import NavBar from "./Navbar/Navbar";
import Prom from "./Prom";
import SearchBar from "./Searchbar/Searchbar";

const Header: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <Prom />
      <NavSearchCont>
        <NavBar />
        <SearchBar />
      </NavSearchCont>
    </Container>
  );
};

export default Header;
