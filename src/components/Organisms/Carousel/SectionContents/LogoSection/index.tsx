"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef, useState } from "react";

import logoAnimation from "@/public/logo.json";

function LogoSection() {
  const animatioRef = useRef<Player>(null);

  return (
    <Player
      autoplay
      ref={animatioRef}
      src={logoAnimation}
      keepLastFrame
      style={{
        width: "500px",
        height: "500px",
      }}
    />
  );
}

export default LogoSection;
