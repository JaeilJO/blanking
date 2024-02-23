"use client";

// Components
import AuthTextLink from "../../Atoms/AuthTextLink";
import AuthTitle from "../../Atoms/AuthTitle";
import AuthWrapper from "../../Atoms/AuthWrapper";
import AuthChangePasswordForm from "../../Organisms/AuthChangePasswordForm";

function ChangePasswordTemplate({ subkey }: { subkey: string }) {
  return (
    <AuthWrapper>
      <AuthTitle title="비밀번호 변경" subtitle="비밀번호를 변경하겠습니다." />

      <AuthChangePasswordForm subkey={subkey} />

      <AuthTextLink href={"/auth/signin"} text={"비밀번호가 기억났습니다"} />
    </AuthWrapper>
  );
}

export default ChangePasswordTemplate;
