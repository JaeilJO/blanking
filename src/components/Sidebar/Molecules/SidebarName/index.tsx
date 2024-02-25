"use client";

// Utils
import Link from "next/link";
import classNames from "classnames/bind";

// Style
import style from "./index.module.scss";

//Components
import Avatar from "../Avatar";

interface SidebarNameProps {
  name: string;
  email: string;
}

const cn = classNames.bind(style);

function SidebarName({ name, email }: SidebarNameProps) {
  return (
    <div className={cn("wrapper")}>
      <Avatar name={name} />

      <div>
        <Link href={`/user/${name}`} className={cn("name")}>
          {name}
        </Link>
        <div className={cn("email")}>{email}</div>
      </div>
    </div>
  );
}

export default SidebarName;
