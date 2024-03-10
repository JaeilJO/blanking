"use client";

import FlexBox from "@/components/Atoms/FlexBox";
import Link from "@/components/Atoms/Link";

import AuthWrapper from "@/components/Atoms/Wrappers/AuthWrapper";
import HeadingWithDescription from "@/components/Molecules/HeadingWithDescription";
import useCheckEmail from "@/components/Templates/Auth/CheckEmail/useCheckEmail.hook";

import UserInfoForm from "@/components/Templates/UserInfoForm";

function Page() {
  const { isLoading, onSubmit } = useCheckEmail();

  return (
    <AuthWrapper>
      <HeadingWithDescription
        title="Check Email"
        description="이메일 확인 후 비밀번호 변경을 진행합니다."
        alignText="left"
        gap="gap-3"
        titleSize="tit-03"
        titleFontWeight="font-bold"
        descriptionFontWeight="font-regular"
      />

      {/* Form */}
      <UserInfoForm>
        <UserInfoForm.Form onSubmit={onSubmit} gap="gap-4">
          <UserInfoForm.Input.Text
            name="email"
            type="email"
            placeholder="E-mail"
            required
            disabled={isLoading}
          />
          <UserInfoForm.SubmitButton>Check Email</UserInfoForm.SubmitButton>
        </UserInfoForm.Form>
      </UserInfoForm>

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
