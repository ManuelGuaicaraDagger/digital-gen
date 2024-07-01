"use client";

import { BannerContainer, Img } from "./Banner.styles";

const Banner: React.FC = (): React.ReactElement => {
  return (
    <BannerContainer>
      <Img src="banner.png" alt="Banner" />
    </BannerContainer>
  );
};

export default Banner;
