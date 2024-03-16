import React from "react";
import { HeroProps } from "./../../types";

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 pt-56">
      <div>
        <span className="text-2xl font-light leading-7 text-black/55">
          Merhaba, ben
        </span>
        <h1 className="text-[40px] font-semibold leading-[48px] text-black">
          {title}
        </h1>
      </div>

      <div className="max-w-3xl text-[32px] leading-[44px]">
        <strong className="font-semibold underline">
          Yazılım mühendisiyim.
        </strong>{" "}
        <span className=" font-light">
          React/NextJS ve CSS alanlarında uzmanım. Gezmeyi, fotoğraf çekmeyi ve
          satranç oynamayı seviyorum.
        </span>
      </div>
    </div>
  );
};

export default Hero;
