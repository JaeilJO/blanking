import FlexBox from "@/components/Atoms/FlexBox";
import Link from "@/components/Atoms/Link";
import Text from "@/components/Atoms/Text";
import AuthWrapper from "@/components/Atoms/Wrappers/AuthWrapper";

import AuthPageHeader from "@/components/Organisms/AuthPageHeader";

import UserPasswordResetForm from "@/components/Templates/UserPasswordResetForm";

function Page({ params }: { params: { subkey: string } }) {
  return (
    <AuthWrapper>
      <AuthPageHeader
        title="Password Reset"
        description="새로운 비밀번호를 입력해주세요."
      />

      <FlexBox.Column gap="gap-3">
        {/* Form */}
        <UserPasswordResetForm subkey={params.subkey} />

        <Text.Body fontSize="body-02" color="primary" textAlign="text-center">
          영문 대문자,소문자 그리고 숫자를 조합시켜주세요
        </Text.Body>
      </FlexBox.Column>

      <Link.Text
        href={"/auth/signin"}
        fontSize="body-01"
        fontWeight="font-bold"
        textAlign="text-left"
      >
        처음으로 돌아가기
      </Link.Text>
    </AuthWrapper>
  );
}

export default Page;
