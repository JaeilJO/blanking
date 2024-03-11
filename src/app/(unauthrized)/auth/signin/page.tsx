"use client";

import Button from "@/components/Atoms/Button";
import FlexBox from "@/components/Atoms/FlexBox";
import Link from "@/components/Atoms/Link";
import Text from "@/components/Atoms/Text";
import AuthWrapper from "@/components/Atoms/Wrappers/AuthWrapper";
import HeadingWithDescription from "@/components/Molecules/HeadingWithDescription";
import useSignIn from "@/components/Templates/Auth/SignIn/useSignIn.hook";
import UserInfoForm from "@/components/Templates/UserInfoForm";

import { BsGoogle } from "react-icons/bs";

function Page() {
  const { isLoading, onSubmit } = useSignIn();

  const googleColor = "#E55C28";

  return (
    <AuthWrapper>
      <HeadingWithDescription
        title="Sign In"
        description="다시 찾아와 주셔서 감사합니다"
        alignText="left"
        gap="gap-3"
        titleSize="tit-02"
        titleFontWeight="font-bold"
        descriptionSize="body-02"
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
          <UserInfoForm.Input.Password
            name="password"
            placeholder="Password"
            disabled={isLoading}
            required
          />
          <UserInfoForm.SubmitButton>Sign In</UserInfoForm.SubmitButton>
        </UserInfoForm.Form>
      </UserInfoForm>

      <Link.Text
        href={"/auth/checkemail"}
        fontSize="body-01"
        fontWeight="font-bold"
      >
        비밀번호를 잊어버리셨나요?
      </Link.Text>

      {/* Social */}
      <FlexBox.Row alignItems="center" justifyContent="space-between">
        <Text.Body fontSize="body-01" color="gray" fontWeight="font-regular">
          Continue with Social
        </Text.Body>
        <Button.Square color={googleColor}>
          <BsGoogle />
        </Button.Square>
      </FlexBox.Row>

      <Link.Text
        href={"/auth/signup"}
        fontSize="body-01"
        fontWeight="font-bold"
      >
        계정이 없으신가요?
      </Link.Text>
    </AuthWrapper>
  );
}

export default Page;
