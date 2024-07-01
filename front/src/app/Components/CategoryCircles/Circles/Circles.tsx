"use client";

import React from "react";
import { CircleDiv, Imag } from "./Circles.styles";

const Circles = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return <CircleDiv>{children}</CircleDiv>;
};

export default Circles;
