"use client";

import useForm from "@/hooks/useForm";
import useSignUp from "./useSignUp.hook";
import AuthWrapper from "@/components/Molecules/AuthComponent/AuthWrapper";
import TitleWithSubtitle from "@/components/Molecules/AuthComponent/TitleWithSubTitle";
import Form from "@/components/Atoms/Form";
import InputWithLabel from "@/components/Molecules/AuthComponent/InputWithLabel";
import Button from "@/components/Atoms/Button";
import SocilaAccountSignInButtons from "@/components/Organisms/AuthComponent/SocialAccountSignInButtons";
import { BsGoogle } from "react-icons/bs";
import Text from "@/components/Atoms/Text";

function AuthSignUpTemplate() {
  const { register, handleSubmit } = useForm({
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
