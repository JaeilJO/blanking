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
import useCheckEmail from "./useCheckEmail.hook";

function CheckEmailTemplate() {
  const { register, handleSubmit } = useForm({
    email: "",
  });

  const { isLoading, onSubmit } = useCheckEmail();

  return (
    <AuthWrapper>
      <TitleWithSubtitle
        title="Check Email"
        subtitle="이메일 확인 후 비밀번호 변경을 진행합니다."
      />

      <Form.ColoumForm gap={4} onSubmit={handleSubmit(onSubmit)}>
        <InputWithLabel
          label="E-mail"
          theme="primary"
          name="email"
          disabled={isLoading}
          {...register("email")}
        />

        <Button.FillButton type="submit" theme="primary" disabled={isLoading}>
          <Text.Body level="01" weight="bold" theme="white" textAlign="center">
            Check Email
          </Text.Body>
        </Button.FillButton>
      </Form.ColoumForm>

      <FlexBox flexDirection="column" gap={1}>
        <Button.TextBodyButton
          block={true}
          level="01"
          textAlign="left"
          theme="primary"
          weight="bold"
          type={"link"}
          href={"/auth/signup"}
          disabled={isLoading}
        >
          계정이 없으신가요?
        </Button.TextBodyButton>
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
          비밀번호를 찾으셨나요?
        </Button.TextBodyButton>
      </FlexBox>
    </AuthWrapper>
  );
}

export default CheckEmailTemplate;
