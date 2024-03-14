"use client";

import { useSideBarStatusStore } from "@/zustand/sideBarStatusStore";
import style from "./index.module.scss";
import classNames from "classnames/bind";
import { TiChevronLeft } from "react-icons/ti";

const cn = classNames.bind(style);
function MainWrapper({ children }: { children: React.ReactNode }) {
  const { status, sidebarStatusHandler } = useSideBarStatusStore(
    (state) => state
  );
  return (
    <main className={cn("main", { close: !status })}>
      {children}
      <button
        onClick={sidebarStatusHandler}
        className={cn("button", { close: !status })}
      >
        <TiChevronLeft />
      </button>
    </main>
  );
}

export default MainWrapper;
