"use client";

// Utils
import classNames from "classnames/bind";
import { signOut } from "next-auth/react";

// Style
import style from "./index.module.scss";

interface AvatarDropDownProps {
  x: number;
  y: number;
  open: boolean;
}

const cn = classNames.bind(style);

function AvatarDropDown({ x, y, open }: AvatarDropDownProps) {
  const signOutOnClickHandler = () => signOut();

  return (
    <div
      style={{ top: y, left: x }}
      className={cn("dropdown", { show: open, hide: !open })}
    >
      <button
        className={style["dropdown-item"]}
        onClick={signOutOnClickHandler}
      >
        Log out
      </button>
    </div>
  );
}

export default AvatarDropDown;
