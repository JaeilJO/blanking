import { useEffect, useRef } from "react";

const lightGrayColor = "#e2e2e2";

/**
 * 버튼에 마우스 이벤트를 추가하는 훅입니다.
 * "해당 훅은 SquareButton에서만 사용됩니다"
 */
export default function uselinkEventListeners({ color }: { color: string }) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  function setuplinkEventListenrs() {
    const $link = linkRef.current;

    if (!$link) return;

    const handleMouseEnter = () => {
      $link.style.borderColor = color;
      $link.style.borderStyle = "solid";
      $link.style.borderWidth = "1px";
    };

    const handleMouseLeave = () => {
      //light-gray 기본컬러입니다.
      $link.style.borderColor = lightGrayColor;
      $link.style.borderStyle = "solid";
      $link.style.borderWidth = "1px";
    };

    $link.addEventListener("mouseenter", handleMouseEnter);
    $link.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      $link.removeEventListener("mouseenter", handleMouseLeave);
      $link.removeEventListener("mouseleave", handleMouseLeave);
    };
  }

  useEffect(setuplinkEventListenrs, [color]);

  return { linkRef };
}
