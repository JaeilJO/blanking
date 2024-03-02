"use client";

// Components
import Button from "@/components/Atoms/Button";
import Form from "@/components/Atoms/Form";
import Text from "@/components/Atoms/Text";
import AuthWrapper from "@/components/Molecules/AuthComponent/AuthWrapper";
import InputWithLabel from "@/components/Molecules/AuthComponent/InputWithLabel/index";
import TitleWithSubtitle from "@/components/Molecules/AuthComponent/TitleWithSubTitle";
import SocilaAccountSignInButtons from "@/components/Organisms/AuthComponent/SocialAccountSignInButtons";

import useForm from "@/hooks/useForm";
import { BsGoogle } from "react-icons/bs";
import useSignIn from "./useSignIn.hook";
import FlexBox from "@/components/Atoms/FlexBox";

function AuthSignInTemplate() {
  const { register, handleSubmit } = useForm({
    email: "",
    password: "",
  });
  const { isLoading, onSubmit } = useSignIn();

  return (
    <AuthWrapper>
      <TitleWithSubtitle
        title="Sign In"
        subtitle="다시 찾아주셔서 감사합니다"
      />
      <FlexBox flexDirection="column" gap={4}>
        <Form.ColoumForm gap={2} onSubmit={handleSubmit(onSubmit)}>
          <InputWithLabel
            theme="primary"
            label="E-mail"
            name="email"
            {...register("email")}
            disabled={isLoading}
          />
          <InputWithLabel
            theme="primary"
            label="Password"
            type="password"
            name="password"
            {...register("password")}
            disabled={isLoading}
          />
          <Button.FillButton type="submit" theme="primary" disabled={isLoading}>
            <Text.Body
              level="01"
              weight="bold"
              theme="white"
              textAlign="center"
            >
              Sign In
            </Text.Body>
          </Button.FillButton>
        </Form.ColoumForm>

        <Button.TextBodyButton
          block={true}
          level="01"
          textAlign="center"
          theme="primary"
          weight="bold"
          type={"link"}
          href={"/auth/checkemail"}
          disabled={isLoading}
        >
          비밀번호를 잊어버리셨나요?
        </Button.TextBodyButton>
      </FlexBox>

      <SocilaAccountSignInButtons
        socials={[{ social: "google", icon: <BsGoogle /> }]}
        disabled={isLoading}
      />

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
    </AuthWrapper>
  );
}

export default AuthSignInTemplate;
