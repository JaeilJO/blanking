"use client";

// Utils
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useAlertStore } from "@/zustand/alertStore";

// Style
import style from "./index.module.scss";

// Icons

import Button from "../Atoms/Button";

const cn = classNames.bind(style);

function ToastAlert() {
  const { status, message, reset } = useAlertStore((state) => state);
  const [animationClass, setAnimationClass] = useState("");
  const theme = () => {
    switch (status) {
      case "success":
        return "green";
      case "error":
        return "red";
      case "loading":
        return "yellow";
      default:
        return "gray";
    }
  };

  useEffect(() => {
    if (status === "none") {
      setAnimationClass(style.slideUp);
    } else {
      setAnimationClass(style.slideDown);
    }
  }, [status]);

  useEffect(() => {
    // 초반에 컴포넌트 마운트 시, useEffect내의 SetTimeout이 실행되지 않도록 if문을 추가
    if (status === "success" || status === "error" || status === "loading") {
      const timer = setTimeout(() => {
        reset();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status, reset]);

  return (
    <div className={cn(style["wrapper"], animationClass)}>
      <Button.Filled theme={theme()}>{message}</Button.Filled>
    </div>
  );
}

export default ToastAlert;
