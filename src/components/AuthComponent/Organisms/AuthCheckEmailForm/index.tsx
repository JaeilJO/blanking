// Utils
import useForm from "@/hooks/useForm";
import useCheckEmail from "./logic/useCheckEmail";

// Components
import AuthButton from "../../Atoms/AuthButton";
import AuthInput from "../../Atoms/AuthInput";
import AuthForm from "../../Atoms/AuthForm";

// Icons
import { MdOutlineMail } from "react-icons/md";

function AuthCheckEmailForm() {
  const { onSubmit, isLoading } = useCheckEmail();

  const { register, handleSubmit } = useForm({
    email: "",
  });

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        {...register("email")}
        type="email"
        name="email"
        placeholder="E-mail"
        disabled={isLoading}
      />
      <AuthButton
        type="submit"
        value="Email 확인 하기"
        icon={<MdOutlineMail />}
        disabled={isLoading}
      />
    </AuthForm>
  );
}

export default AuthCheckEmailForm;
