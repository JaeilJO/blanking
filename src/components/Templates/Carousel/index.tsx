"use client";

import { createContext, useState } from "react";
import SectionContainer from "./SectionContainer";

export const CarouselContext = createContext({
  currentSection: "",
  setCurrentSection: (sectionId: string) => {},
});

function Carousel({
  children,
  startSectionId,
}: {
  children: React.ReactNode;
  startSectionId: string;
}) {
  const [currentSection, setCurrentSection] = useState(startSectionId);

  return (
    <CarouselContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </CarouselContext.Provider>
  );
}

Carousel.Container = SectionContainer;
export default Carousel;
