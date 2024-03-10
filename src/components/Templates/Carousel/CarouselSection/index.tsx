"use client";

import { useContext, useEffect } from "react";
import style from "./index.module.scss";
import { CarouselContext } from "..";

function CarouselSection({
  sectionId,
  content,
}: {
  sectionId: string;
  content: React.ReactNode;
}) {
  const value = useContext(CarouselContext);
  const { currentSection } = value!;

  if (currentSection === sectionId) {
    return <section className={style["section"]}>{content}</section>;
  }
}

export default CarouselSection;
