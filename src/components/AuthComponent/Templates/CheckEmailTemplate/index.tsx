"use client";

// Components
import AuthTextLink from "../../Atoms/AuthTextLink";
import AuthTitle from "../../Atoms/AuthTitle";
import AuthWrapper from "../../Atoms/AuthWrapper";
import AuthCheckEmailForm from "../../Containers/AuthCheckEmailForm";

function CheckEmailTemplate() {
  return (
    <AuthWrapper>
      <AuthTitle
        title="비밀번호 찾기"
        subtitle="비밀번호를 찾기 위해서는 이메일 확인이 필요합니다."
      />

      <AuthCheckEmailForm />

      <div>
        <AuthTextLink href={"/auth/signup"} text={"계정이 없습니다."} />
        <AuthTextLink href={"/auth/signin"} text={"비밀번호가 기억났습니다"} />
      </div>
    </AuthWrapper>
  );
}

export default CheckEmailTemplate;
