"use client";

import { PromBar } from "./Prom.styles";

const Prom: React.FC = (): React.ReactElement => {
  return (
    <PromBar>
      <span>Free shipping from $60</span>
    </PromBar>
  );
};

export default Prom;
