"use client";

// Style
import style from "./index.module.scss";

// Type
import { AuthSocial } from "./index.type";

function AuthSocialButton({ icon, color, socialName, onClick }: AuthSocial) {
  return (
    // CSS in CSS를 사용해서 Color를 유동적으로 변경하는데 무리가 있어서 inline style로 적용
    <button
      className={style["button"]}
      title={`${socialName}로 로그인`}
      onClick={onClick}
      style={{ color: color }}
    >
      {icon}
    </button>
  );
}

export default AuthSocialButton;
