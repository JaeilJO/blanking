"use client";

import { useContext, useEffect } from "react";
import style from "./index.module.scss";
import { CarouselContext } from "..";

function Section({
  sectionId,
  content,
}: {
  sectionId: string;
  content: React.ReactNode;
}) {
  const { currentSection } = useContext(CarouselContext);

  if (currentSection === sectionId) {
    return <section className={style["section"]}>{content}</section>;
  }
}

export default Section;
