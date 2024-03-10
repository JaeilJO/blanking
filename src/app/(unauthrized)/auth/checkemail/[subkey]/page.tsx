"use client";

import FlexBox from "@/components/Atoms/FlexBox";
import Link from "@/components/Atoms/Link";
import Text from "@/components/Atoms/Text";
import AuthWrapper from "@/components/Atoms/Wrappers/AuthWrapper";

import HeadingWithDescription from "@/components/Molecules/HeadingWithDescription";

import useChangePassword from "@/components/Templates/Auth/ChangePassword/useChangePassword";
import UserInfoForm from "@/components/Templates/UserInfoForm";

function Page({ params }: { params: { subkey: string } }) {
  const { isLoading, onSubmit } = useChangePassword({ subkey: params.subkey });
  return (
    <AuthWrapper>
      <HeadingWithDescription
        title="Change Password"
        description="비밀번호는 영문 대문자,소문자 하나 그리고 숫자를 조합시켜주세요"
        alignText="left"
        gap="gap-3"
        titleSize="tit-03"
        titleFontWeight="font-bold"
        descriptionFontWeight="font-regular"
      />

      {/* Form */}
      <UserInfoForm>
        <UserInfoForm.Form onSubmit={onSubmit} gap="gap-4">
          <UserInfoForm.Input.Password
            name="password"
            type="password"
            placeholder="Password"
            required
            disabled={isLoading}
          />
          <UserInfoForm.SubmitButton>Change Password</UserInfoForm.SubmitButton>
        </UserInfoForm.Form>
      </UserInfoForm>

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
