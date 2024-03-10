"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef, useState } from "react";

import logoAnimation from "@/public/logo.json";

function LogoSection() {
  const animatioRef = useRef<Player>(null);
  const [stop, setStop] = useState(false);
  const onEvent = () => {
    if (animatioRef.current?.state.seeker === 20) {
      setStop(true);
    }
  };
  useEffect(() => {
    if (stop) {
      animatioRef.current?.pause();
    }
  }, [stop]);
  return (
    <div>
      <Player
        autoplay
        ref={animatioRef}
        src={logoAnimation}
        onEvent={onEvent}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default LogoSection;
