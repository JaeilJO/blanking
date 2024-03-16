"use client";

import { UserInfoFormContext } from "../..";
import { useContext } from "react";

import TextField from "@/components/Atoms/TextField";
import { TextFieldTextProps } from "@/components/Atoms/TextField/Text";

interface NoLabelProps extends TextFieldTextProps {
  name: string;
  required: true;
  placeholder: string;
  type: "text" | "email";
}

function NoLabel({ placeholder, name, type }: NoLabelProps) {
  const value = useContext(UserInfoFormContext);
  const { loading } = value!;

  value.formData.current[name] = "";
  return (
    <TextField.Text
      placeholder={placeholder}
      theme={"primary"}
      type={type}
      name={name}
      textAlign={"center"}
      disabled={loading}
      label={false}
      onChange={(e) => {
        value.formData.current[name] = e.target.value;
      }}
    />
  );
}

export default NoLabel;
