"use client";

import { useContext } from "react";
import style from "./index.module.scss";
import { CarouselContext, CarouselContextType } from "..";

import CarouselIndicatorItem from "../CarouselIndicatorItem";

function CarouselIndicator() {
  const value = useContext(CarouselContext);

  const { sectionIds } = value!;

  return (
    <div className={style["indicator"]}>
      {sectionIds.map((sectionId) => (
        <CarouselIndicatorItem key={sectionId} sectionId={sectionId} />
      ))}
    </div>
  );
}

export default CarouselIndicator;
