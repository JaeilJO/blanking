"use client";

import CarouselIndicator from "../CarouselIndicator";
import style from "./index.module.scss";

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={style["container"]}>
      <div>{children}</div>
      <CarouselIndicator />
    </div>
  );
}

export default SectionContainer;
