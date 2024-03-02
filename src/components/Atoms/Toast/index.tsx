"use client";

import classNames from "classnames/bind";
import style from "./index.module.scss";

import { useAlertStore } from "@/zustand/alertStore";
import { useEffect, useState } from "react";

const cn = classNames.bind(style);

function Toast() {
  const { status, reset, message } = useAlertStore((state) => state);

  /**
   * 이전 상태를 저장해서 status가 none으로 변경 됐을 때 none이 되기 이전의 background color를 사용하기 위함이다.
   */
  const [prevStatus, setPrevStatus] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toastClassName = cn("toast", prevStatus, {
    visible: isVisible,
    hide: !isVisible,
  });

  const handleClick = () => {
    setIsVisible(false);
    reset();
  };

  useEffect(() => {
    // none이 아닌 경우에 preStatus에 상태를 저장한다.
    if (status !== "none") {
      setPrevStatus(status);
      setIsVisible(true);

      // 3초 후에 상태를 none으로 변경한다.
      // none으로 변경하기 전, Up animation을 보여주기 위해 setIsVisible을 먼저 false로 변경한다.
      const timer = setTimeout(() => {
        setIsVisible(false);
        reset();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <button className={toastClassName} onClick={handleClick}>
      {message}
    </button>
  );
}

export default Toast;
