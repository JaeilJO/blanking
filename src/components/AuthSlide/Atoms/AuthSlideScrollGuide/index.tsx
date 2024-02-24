"use client";

// Style
import style from "./index.module.scss";

// Icons
import { SlMouse } from "react-icons/sl";

function AuthSlideScrollGuide() {
  return (
    <div className={style["wrapper"]}>
      <div className={style["icon"]}>
        <SlMouse />
      </div>

      <div className={style["title"]}>
        다음 섹션에서 Blanking을 체험해보세요
      </div>
    </div>
  );
}

export default AuthSlideScrollGuide;
