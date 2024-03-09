import TextInputProps from "@/components/Atoms/Input/TextInput/index.type";
import InputWithLabel from "@/components/Molecules/InputWithLabel";
import { useContext, useEffect } from "react";
import { UserInfoFormContext } from "../..";

interface UserInfoFormProps extends TextInputProps {
  // 3개는 반드시 존재해야한다.
  name: string;
  required: true;
  placeholder: string;
}

function UserInfoForm({
  type,
  placeholder,
  name,
  required,
  ...props
}: UserInfoFormProps) {
  const value = useContext(UserInfoFormContext);
  const loadingStatus = value?.loading;

  value.formData.current[name] = "";

  return (
    <InputWithLabel.Text
      type={type}
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

export default UserInfoForm;
