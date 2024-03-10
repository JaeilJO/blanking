"use client";

import style from "./index.module.scss";

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={style["container"]}>
      <div>{children}</div>
    </div>
  );
}

export default SectionContainer;
