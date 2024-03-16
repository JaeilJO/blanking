import { useContext } from "react";

import { UserInfoFormContext } from "../..";
import TextField from "@/components/Atoms/TextField";

function AuthFormPasswordInput() {
  const value = useContext(UserInfoFormContext);
  const { loading } = value!;

  value.formData.current["password"] = "";

  return (
    <TextField.Password
      theme={"primary"}
      textAlign={"left"}
      disabled={loading}
      label={true}
      onChange={(e) => {
        value.formData.current["password"] = e.target.value;
      }}
    />
  );
}

export default AuthFormPasswordInput;
