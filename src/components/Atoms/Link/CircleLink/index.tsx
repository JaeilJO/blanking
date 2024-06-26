// Utils
import Link from "next/link";
import classNames from "classnames/bind";

// Styles
import style from "./index.module.scss";

// Types
import { CircleLinkProps } from "./index.type";

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
  disabled,
}: CircleLinkProps) {
  return (
    <Link
      style={{ width: `${size}px`, height: `${size}px`, ...style }}
      href={href}
      className={cn(
        "link",
        `bg-${theme}`,
        marginBottom,
        marginRight,
        marginTop,
        marginLeft,
        { disabled: disabled }
      )}
    />
  );
}

export default CircleLink;
