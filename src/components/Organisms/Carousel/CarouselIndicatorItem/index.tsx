"use client";

import { useContext } from "react";
import { CarouselContext } from "..";
import IndicatorButton from "@/components/Atoms/Button/IndicatorButton";

function CarouselIndicatorItem({ sectionId }: { sectionId: string }) {
  const value = useContext(CarouselContext);

  const { currentSection, setCurrentSection } = value!;

  const isCurrentSection = currentSection === sectionId;

  return (
    <IndicatorButton
      isCurrent={isCurrentSection}
      onClick={() => setCurrentSection(sectionId)}
    />
  );
}

export default CarouselIndicatorItem;
