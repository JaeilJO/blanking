"use client";

// Components
import Button from "@/components/Atoms/Button";
import FlexBox from "@/components/Atoms/FlexBox";
import Form from "@/components/Atoms/Form";
import Text from "@/components/Atoms/Text";
import AuthWrapper from "@/components/Molecules/AuthComponent/AuthWrapper";
import InputWithLabel from "@/components/Molecules/AuthComponent/InputWithLabel/index";
import TitleWithSubtitle from "@/components/Molecules/AuthComponent/TitleWithSubTitle";

import useForm from "@/hooks/useForm";
import useChangePassword from "./useChangePassword";

function ChangePasswordTemplate({ subkey }: { subkey: string }) {
  const { register, handleSubmit } = useForm({
    password: "",
  });

  const { isLoading, onSubmit } = useChangePassword({ subkey });

  return (
    <AuthWrapper>
      <TitleWithSubtitle
        title="Change Password"
        subtitle="비밀번호 변경을 진행합니다."
      />

      <FlexBox flexDirection="column" gap={4}>
        <Form.ColoumForm gap={4} onSubmit={handleSubmit(onSubmit)}>
          <InputWithLabel
            label="Password"
            theme="primary"
            name="password"
            type="password"
            disabled={isLoading}
            {...register("password")}
          />

          <Button.FillButton type="submit" theme="primary" disabled={isLoading}>
            <Text.Body
              level="01"
              weight="bold"
              theme="white"
              textAlign="center"
            >
              Change Password
            </Text.Body>
          </Button.FillButton>
        </Form.ColoumForm>

        <Text.Body theme="warn" level="02" textAlign="center">
          비밀번호는 영문 대문자,소문자 하나 그리고 숫자를 조합시켜주세요
        </Text.Body>
      </FlexBox>

      <Button.TextBodyButton
        block={true}
        level="01"
        textAlign="left"
        theme="primary"
        weight="bold"
        type={"link"}
        href={"/auth/signin"}
        disabled={isLoading}
      >
        처음으로 되돌아가기
      </Button.TextBodyButton>
    </AuthWrapper>
  );
}

export default ChangePasswordTemplate;
