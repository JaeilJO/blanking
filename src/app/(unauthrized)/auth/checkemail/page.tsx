import FlexBox from "@/components/Atoms/FlexBox";
import Link from "@/components/Atoms/Link";

import AuthWrapper from "@/components/Atoms/Wrappers/AuthWrapper";

import AuthPageHeader from "@/components/Organisms/AuthPageHeader";

import UserCheckEmailForm from "@/components/Templates/UserCheckEmailForm";

function Page() {
  return (
    <AuthWrapper>
      <AuthPageHeader
        title="Check Email"
        description="이메일 확인 후 비밀번호 변경을 진행합니다."
      />

      {/* Form */}
      <UserCheckEmailForm />

      <FlexBox.Column gap="gap-3">
        <Link.Text
          href={"/auth/signup"}
          fontSize="body-01"
          fontWeight="font-bold"
          textAlign="text-left"
        >
          계정이 없으신가요?
        </Link.Text>

        <Link.Text
          href={"/auth/signin"}
          fontSize="body-01"
          fontWeight="font-bold"
          textAlign="text-left"
        >
          비밀번호가 생각나셨나요?
        </Link.Text>
      </FlexBox.Column>
    </AuthWrapper>
  );
}

export default Page;
