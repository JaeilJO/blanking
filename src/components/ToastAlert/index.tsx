"use client";

// Utils
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useAlertStore } from "@/zustand/alertStore";

// Style
import style from "./index.module.scss";

// Icons
import { BsCheckCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";

const cn = classNames.bind(style);

function ToastAlert() {
  const { status, message, reset } = useAlertStore((state) => state);

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
    <div
      className={cn({
        toast_alert: true,
        success: status === "success",
        error: status === "error",
        loading: status === "loading",
      })}
    >
      <span className={style.icon}>
        {status === "success" ? (
          <BsCheckCircle />
        ) : status === "error" ? (
          <BsDashCircle />
        ) : (
          <></>
        )}
      </span>
      <span>{message}</span>
    </div>
  );
}

export default ToastAlert;
