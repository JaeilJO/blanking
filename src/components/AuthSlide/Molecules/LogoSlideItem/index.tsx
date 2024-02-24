"use client";

// Utils
import { Player } from "@lottiefiles/react-lottie-player";
import logoAnimation from "@/public/logo.json";
import { useEffect, useRef, useState } from "react";

// Style
import style from "./index.module.scss";

// Components
import AuthSlideItemWrapper from "../../Atoms/AuthSlideItemWrapper";

function LogoSlideItem() {
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
    <AuthSlideItemWrapper>
      <div className={style["player-wrapper"]}>
        <Player
          autoplay
          ref={animatioRef}
          src={logoAnimation}
          onEvent={onEvent}
          style={{ width: "100%" }}
        />
      </div>
    </AuthSlideItemWrapper>
  );
}

export default LogoSlideItem;
