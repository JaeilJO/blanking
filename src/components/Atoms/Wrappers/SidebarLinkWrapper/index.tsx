import style from "./index.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(style);
function SidebarLinkWrapper({
  children,
  level,
}: {
  children: React.ReactNode;
  level: 1 | 2;
}) {
  return (
    <div
      className={cn("link", {
        level1: level === 1,
        level2: level === 2,
      })}
    >
      {children}
    </div>
  );
}

export default SidebarLinkWrapper;
