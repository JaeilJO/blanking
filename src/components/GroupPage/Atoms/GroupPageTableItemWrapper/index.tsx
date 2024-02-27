// Utils
import Link from "next/link";

// Style
import style from "./index.module.scss";

interface GroupPageTableItemWrapperProps {
  children: React.ReactNode;
  groupname: string;
  pagename: string;
}

function GroupPageTableItemWrapper({
  children,
  groupname,
  pagename,
}: GroupPageTableItemWrapperProps) {
  return (
    <Link href={`${groupname}/${pagename}`} className={style["wrapper"]}>
      {children}
    </Link>
  );
}

export default GroupPageTableItemWrapper;
