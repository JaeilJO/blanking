"use client";

import style from "./index.module.scss";
import { AuthSocial } from "../../Atoms/AuthSocialButton/index.type";
import AuthSocialButton from "../../Atoms/AuthSocialButton";

interface AuthSocilaButtonsProps {
  buttons: AuthSocial[];
}

function AuthSocialButtons({ buttons }: AuthSocilaButtonsProps) {
  return (
    <div>
      <div className={style["title"]}>Continue with Social Accounts</div>
      <div className={style["social-buttons"]}>
        {buttons.map((button) => (
          <AuthSocialButton
            key={button.socialName}
            icon={button.icon}
            color={button.color}
            socialName={button.socialName}
            onClick={button.onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default AuthSocialButtons;
