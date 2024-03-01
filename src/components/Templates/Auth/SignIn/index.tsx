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
import { useAlertStore } from "@/zustand/alertStore";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";

function AuthSignInTemplate() {
  const { register, handleSubmit } = useForm({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const { error, loading, success } = useAlertStore((state) => state);

  const onSubmit = async (data: { [key: string]: string }) => {
    loading("로그인 중 입니다.");
    setIsLoading(true);
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res?.ok) {
      success(`환영합니다`);

      router.replace(`/user/`);
    }

    if (!res?.ok) {
      error("이메일 혹은 비밀번호를 확인해주세요");
      setIsLoading(false);
    }
  };

  return (
    <AuthWrapper>
      <TitleWithSubtitle
        title="Sign In"
        subtitle="다시 찾아주셔서 감사합니다"
      />

      <Form.ColoumForm gap={20} onSubmit={handleSubmit(onSubmit)}>
        <InputWithLabel label="E-mail" name="email" {...register("email")} />
        <InputWithLabel
          label="Password"
          type="password"
          name="password"
          {...register("password")}
        />
        <Button.FillButton type="submit" theme="primary">
          <Text.Body level="01" weight="bold" theme="white" textAlign="center">
            Sign In
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
        href={"/auth/signup"}
      >
        계정이 없으신가요?
      </Button.TextBodyButton>
    </AuthWrapper>
  );
}

export default AuthSignInTemplate;
