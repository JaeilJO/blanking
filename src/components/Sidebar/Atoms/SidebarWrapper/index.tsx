"use client";

// Utils
import classNames from "classnames/bind";
import { useEffect, useRef } from "react";

// Style
import style from "./index.module.scss";

interface SidebarWrapperProps {
  children: React.ReactNode;
  status: boolean;
}

const cn = classNames.bind(style);

function SidebarWrapper({ children, status }: SidebarWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      if (status) {
        requestAnimationFrame(() => {
          wrapper.style.padding = "36px 12px";
        });
      }

      const transitionEndHandler = (e: TransitionEvent) => {
        if (e.propertyName === "width" && !status) {
          // status가 false일 때 패딩 제거
          wrapper.style.padding = "0";
        }
      };

      wrapper.addEventListener("transitionend", transitionEndHandler);

      return () =>
        wrapper.removeEventListener("transitionend", transitionEndHandler);
    }
  }, [status]);

  return (
    <div ref={wrapperRef} className={cn("wrapper", { close: !status })}>
      {children}
    </div>
  );
}

export default SidebarWrapper;
