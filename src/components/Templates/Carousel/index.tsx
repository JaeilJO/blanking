"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import SectionContainer from "./SectionContainer";
import CarouselSection from "./CarouselSection";

export type CarouselContextType = {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
  sectionIds: string[];
};

export const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
);

function Carousel({
  children,
  startSectionId,
  sectionIds,
}: {
  children: React.ReactNode;
  startSectionId: string;
  sectionIds: string[];
}) {
  const [currentSection, setCurrentSection] = useState(startSectionId);

  return (
    <CarouselContext.Provider
      value={{ currentSection, setCurrentSection, sectionIds }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

Carousel.Section = CarouselSection;
Carousel.Container = SectionContainer;
export default Carousel;
