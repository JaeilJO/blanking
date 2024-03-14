import classNames from "classnames/bind";
import style from "./index.module.scss";
import Link from "next/link";

import { CircleLinkProps } from "../SolidLink/index.type";

const cn = classNames.bind(style);

function CircleLink({
  href,
  size,
  marginBottom,
  marginRight,
  marginTop,
  marginLeft,
  theme,
  style,
}: CircleLinkProps) {
  return (
    <Link
      style={{ width: `${size}px`, height: `${size}px`, ...style }}
      href={href}
      className={cn(
        "link",
        theme,
        marginBottom,
        marginRight,
        marginTop,
        marginLeft
      )}
    ></Link>
  );
}

export default CircleLink;
