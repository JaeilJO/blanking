import InputWithLabel from "@/components/Molecules/InputWithLabel";
import { useContext } from "react";
import PasswordInputProps from "@/components/Atoms/Input/PasswordInput/index.type";
import { UserInfoFormContext } from "../..";

interface AuthPasswordInputProps extends PasswordInputProps {
  // 3개는 반드시 존재해야한다.
  name: string;
  required: true;
  placeholder: string;
}

function AuthFormPasswordInput({
  type,
  placeholder,
  name,
  required,
  ...props
}: AuthPasswordInputProps) {
  const value = useContext(UserInfoFormContext);
  const loadingStatus = value?.loading;

  value.formData.current[name] = "";

  return (
    <InputWithLabel.Password
      type="password"
      placeholder={placeholder}
      name={name}
      required={required}
      disabled={loadingStatus}
      onChange={(e) => {
        value.formData.current[name] = e.target.value;
      }}
      {...props}
    />
  );
}

export default AuthFormPasswordInput;
