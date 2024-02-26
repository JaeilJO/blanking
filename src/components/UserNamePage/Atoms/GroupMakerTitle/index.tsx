"use client";

// Utils
import classNames from "classnames/bind";

// Style
import style from "./index.module.scss";

const cn = classNames.bind(style);

function GroupMakerTitle() {
  return <h1 className={cn("title")}>Make Group</h1>;
}

export default GroupMakerTitle;
