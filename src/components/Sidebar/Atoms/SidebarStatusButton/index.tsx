"use client";

// Utils
import classNames from "classnames/bind";

// Style
import style from "./index.module.scss";

// Icons
import {
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarLeftExpandFilled,
} from "react-icons/tb";

interface SidebarStatusButtonProps {
  status: boolean;
  onClick: () => void;
}

const cn = classNames.bind(style);

function SidebarStatusButton({
  status = true,
  onClick,
}: SidebarStatusButtonProps) {
  if (status) {
    return (
      <button className={cn("button", { close: !status })} onClick={onClick}>
        <TbLayoutSidebarLeftCollapseFilled />
      </button>
    );
  }

  if (!status) {
    return (
      <button className={cn("button", { close: !status })} onClick={onClick}>
        <TbLayoutSidebarLeftExpandFilled />
      </button>
    );
  }
}

export default SidebarStatusButton;
