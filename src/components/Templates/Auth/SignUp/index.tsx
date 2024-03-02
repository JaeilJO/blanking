"use client";

// Components
import AuthWrapper from "@/components/Molecules/AuthComponent/AuthWrapper";
import TitleWithSubtitle from "@/components/Molecules/AuthComponent/TitleWithSubTitle";
import Form from "@/components/Atoms/Form";
import InputWithLabel from "@/components/Molecules/AuthComponent/InputWithLabel";
import Button from "@/components/Atoms/Button";
import SocilaAccountSignInButtons from "@/components/Organisms/AuthComponent/SocialAccountSignInButtons";
import Text from "@/components/Atoms/Text";

import useForm from "@/hooks/useForm";
import useSignUp from "./useSignUp.hook";
import { BsGoogle } from "react-icons/bs";

function AuthSignUpTemplate() {
  const { register, handleSubmit } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { isLoading, onSubmit } = useSignUp();

  return (
    <AuthWrapper>
      <TitleWithSubtitle title="Sign Up" subtitle="환영합니다" />

      <Form.ColoumForm gap={4} onSubmit={handleSubmit(onSubmit)}>
        <InputWithLabel
          {...register("name")}
          theme="primary"
          label="Name"
          name="name"
          disabled={isLoading}
        />
        <InputWithLabel
          {...register("email")}
          theme="primary"
          label="E-mail"
          name="email"
          disabled={isLoading}
        />
        <InputWithLabel
          {...register("password")}
          theme="primary"
          label="Password"
          type="password"
          name="password"
          disabled={isLoading}
        />
        <Button.FillButton type="submit" theme="primary" disabled={isLoading}>
          <Text.Body level="01" weight="bold" theme="white" textAlign="center">
            Sign Up
          </Text.Body>
        </Button.FillButton>
      </Form.ColoumForm>

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
        href={"/auth/signin"}
        disabled={isLoading}
      >
        계정이 이미 있으신가요?
      </Button.TextBodyButton>
    </AuthWrapper>
  );
}

export default AuthSignUpTemplate;
