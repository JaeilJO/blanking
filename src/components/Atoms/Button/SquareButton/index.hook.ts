import { useEffect, useRef } from "react";

const lightGrayColor = "#e2e2e2";

/**
 * 버튼에 마우스 이벤트를 추가하는 훅입니다.
 * "해당 훅은 SquareButton에서만 사용됩니다"
 */
export default function useButtonEventListeners({ color }: { color: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  function setupButtonEventListenrs() {
    const $button = buttonRef.current;

    if (!$button) return;

    const handleMouseEnter = () => {
      $button.style.borderColor = color;
      $button.style.borderStyle = "solid";
      $button.style.borderWidth = "1px";
    };

    const handleMouseLeave = () => {
      //light-gray 기본컬러입니다.
      $button.style.borderColor = lightGrayColor;
      $button.style.borderStyle = "solid";
      $button.style.borderWidth = "1px";
    };

    $button.addEventListener("mouseenter", handleMouseEnter);
    $button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      $button.removeEventListener("mouseenter", handleMouseLeave);
      $button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }

  useEffect(setupButtonEventListenrs, [color]);

  return { buttonRef };
}
