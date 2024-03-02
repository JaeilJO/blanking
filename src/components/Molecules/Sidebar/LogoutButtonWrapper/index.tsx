import Link from "next/link";
import style from "./index.module.scss";
import { UrlObject } from "url";

interface LogoutButtonWrapperProps {
  children: React.ReactNode;
  href: string | UrlObject;
}

function LogoutButtonWrapper({ children, href }: LogoutButtonWrapperProps) {
  return (
    <Link href={href} className={style["button"]}>
      {children}
    </Link>
  );
}

export default LogoutButtonWrapper;
