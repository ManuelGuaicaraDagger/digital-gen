"use client";

import Link from "next/link";
import { Img, SearchContainer } from "./Searchbar.styles";
import SearchBarFunction from "./SearchBarFunction/SearchBarFuntion";
import { useAuth } from "@/app/context/AuthContext";
import { useEffect } from "react";

const SearchBar: React.FC = (): React.ReactElement => {
  const { token, setToken } = useAuth();

  return (
    <SearchContainer>
      <SearchBarFunction />
      {token ? (
        <Link href={"/orders"} className="flex justify-center">
          <Img src="https://i.ibb.co/qC7FJk0/bag.png" alt="Bag" />
        </Link>
      ) : (
        <Link href={"/login"} className="flex justify-center">
          <Img src="https://i.ibb.co/qC7FJk0/bag.png" alt="Bag" />
        </Link>
      )}
      {token ? (
        <Link href={"/profile"}>
          <Img src="https://i.ibb.co/B2MJb53/user.png" alt="User" />
        </Link>
      ) : (
        <Link href={"/login"}>
          <Img src="https://i.ibb.co/B2MJb53/user.png" alt="User" />
        </Link>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
