"use client";

// Utils
import { MouseEvent, useRef, useState } from "react";

// Style
import style from "./index.module.scss";

// Components
import AvatarDropDown from "../../Atoms/AvatarDropDown";

interface AvatarProps {
  name: string;
}

function Avatar({ name }: AvatarProps) {
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Avatar위치 바로 밑에 dropdown이 나타나도록 위치 계산
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const button = buttonRef.current;

    if (button) {
      const rect = button.getBoundingClientRect();
      const topPosition = rect.top + rect.height;
      const leftPosition = rect.left;
      setRecord({ x: leftPosition, y: topPosition });
    }

    setOpen(!open);
  };

  return (
    <>
      <button ref={buttonRef} onClick={onClick} className={style["avatar"]}>
        {name[0]}
      </button>

      <AvatarDropDown x={record.x} y={record.y} open={open} />
    </>
  );
}

export default Avatar;
