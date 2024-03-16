import { useContext } from "react";
import { UserInfoFormContext } from "../..";
import TextField from "@/components/Atoms/TextField";
import { TextFieldTextProps } from "@/components/Atoms/TextField/Text";

interface UserInfoFormProps extends TextFieldTextProps {
  name: string;
  placeholder: string;
}

function UserInfoForm({ type, placeholder, name }: UserInfoFormProps) {
  const value = useContext(UserInfoFormContext);
  const { loading } = value!;

  value.formData.current[name] = "";

  return (
    <TextField.Text
      placeholder={placeholder}
      theme={"primary"}
      type={type}
      name={name}
      textAlign={"left"}
      disabled={loading}
      label={true}
      onChange={(e) => {
        value.formData.current[name] = e.target.value;
      }}
    />
  );
}

export default UserInfoForm;
