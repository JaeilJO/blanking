"use client";

import { useSideBarStatusStore } from "@/zustand/sideBarStatusStore";
import style from "./index.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(style);

function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const { status } = useSideBarStatusStore((state) => state);

  return (
    <div
      className={cn("wrapper", {
        close: !status,
      })}
    >
      {children}
    </div>
  );
}

export default SidebarWrapper;
