"use client";

import Button from "@/components/Atoms/Button";
import Form from "@/components/Atoms/Form";
import Text from "@/components/Atoms/Text";
import InputWithLabel from "@/components/Molecules/AuthComponent/InputWidthLabel";

import useForm from "@/hooks/useForm";

import TitleWithSubtitle from "@/components/Molecules/AuthComponent/TitleWithSubTitle";
import SocilaAccountSignInButtons from "@/components/Organisms/AuthComponent/SocialAccountSignInButtons";
import { BsGoogle } from "react-icons/bs";
import useSignUp from "@/components/AuthComponent/Organisms/AuthSignUpForm/logic/useSignUp";
import AuthWrapper from "@/components/Molecules/AuthComponent/AuthWrapper";

function AuthSignUpTemplate() {
  const { register, handleSubmit, values } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { onSubmit } = useSignUp();

  return (
    <AuthWrapper>
      <TitleWithSubtitle title="Sign Up" subtitle="환영합니다" />

      <Form.ColoumForm gap={20} onSubmit={handleSubmit(onSubmit)}>
        <InputWithLabel {...register("name")} label="Name" name="name" />
        <InputWithLabel {...register("email")} label="E-mail" name="email" />
        <InputWithLabel
          {...register("password")}
          label="Password"
          type="password"
          name="password"
        />
        <Button.FillButton type="submit" theme="primary">
          <Text.Body level="01" weight="bold" theme="white" textAlign="center">
            Sign Up
          </Text.Body>
        </Button.FillButton>
      </Form.ColoumForm>

      <SocilaAccountSignInButtons
        socials={[{ social: "google", icon: <BsGoogle /> }]}
      />

      <Button.TextBodyButton
        block={true}
        level="01"
        textAlign="left"
        theme="primary"
        weight="bold"
        type={"link"}
        href={"/auth/signin"}
      >
        계정이 이미 있으신가요?
      </Button.TextBodyButton>
    </AuthWrapper>
  );
}

export default AuthSignUpTemplate;
