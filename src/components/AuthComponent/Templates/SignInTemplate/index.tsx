"use client";

// Utils
import socialButtons from "@/utils/socialButtons";

// Components
import AuthTextLink from "../../Atoms/AuthTextLink";
import AuthTitle from "../../Atoms/AuthTitle";
import AuthSocialButtons from "../../Molecules/AuthSocialButtons";
import AuthWrapper from "../../Atoms/AuthWrapper";
import AuthSignInForm from "../../Organisms/AuthSignInForm";

function SignInTemplate() {
  return (
    <AuthWrapper>
      <AuthTitle title="Sign in" subtitle="다시 찾아주셔서 감사합니다" />

      <AuthSignInForm />

      <AuthTextLink
        href={"/auth/checkemail"}
        text={"비밀번호를 잊어버리셨나요?"}
      />

      <AuthSocialButtons buttons={socialButtons} />

      <AuthTextLink href={"/auth/signup"} text={"계정이 없으신가요?"} />
    </AuthWrapper>
  );
}

export default SignInTemplate;
