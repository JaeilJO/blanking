"use client";

// Utils
import Link from "next/link";

// Style
import style from "./index.module.scss";

interface AuthTextLinkProps {
  href: string;
  text: string;
}

function AuthTextLink({ href, text }: AuthTextLinkProps) {
  return (
    <Link className={style["link"]} href={href}>
      {text}
    </Link>
  );
}

export default AuthTextLink;
