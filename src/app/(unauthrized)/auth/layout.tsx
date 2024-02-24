// Utils
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextAuthOption } from "@/lib/nextAuth/auth";

// Style
import style from "./layout.module.scss";

// Components

import AuthSlideTemplate from "@/components/AuthSlide/Templates/AuthSlideTemplate";

async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(NextAuthOption);

  if (session) {
    //이름이 한글일 수 도 있으니까 인코딩 해준다.
    const encodedText = encodeURIComponent(session?.user?.name as string);
    redirect(`/user/${encodedText}`);
  }

  return (
    <div className={style["unauthorized-wrapper"]}>
      <div className={style["auth-slide-wrapper"]}>
        <AuthSlideTemplate />
      </div>
      <div className={style["auth-page-wrapper"]}>{children}</div>
    </div>
  );
}

export default Layout;
