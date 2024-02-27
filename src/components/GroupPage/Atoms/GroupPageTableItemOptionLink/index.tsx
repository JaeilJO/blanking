// Utils
import Link from "next/link";

// Style
import style from "./index.module.scss";

// Types
import { UrlObject } from "url";

interface GroupPageTableItemOptionLinkProps {
  children: React.ReactNode;
  href: string | UrlObject;
}

function GroupPageTableItemOptionLink({
  children,
  href,
}: GroupPageTableItemOptionLinkProps) {
  return (
    <Link href={href} className={style["button"]}>
      {children}
    </Link>
  );
}

export default GroupPageTableItemOptionLink;
