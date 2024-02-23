"use client";

// Utils
import socialButtons from "@/utils/socialButtons";

//Components
import AuthTextLink from "../../Atoms/AuthTextLink";
import AuthTitle from "../../Atoms/AuthTitle";
import AuthWrapper from "../../Atoms/AuthWrapper";
import AuthSignUpForm from "../../Containers/AuthSignUpForm";
import AuthSocialButtons from "../../Containers/AuthSocialButtons";

function SignUpTemplate() {
  return (
    <AuthWrapper>
      <AuthTitle title="Sign up" subtitle="환영합니다" />

      <AuthSignUpForm />

      <AuthSocialButtons buttons={socialButtons} />

      <AuthTextLink href={"/auth/signin"} text={"계정이 이미 있으신가요?"} />
    </AuthWrapper>
  );
}

export default SignUpTemplate;
