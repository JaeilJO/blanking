"use client";

import { UserInfoFormContext } from "../..";
import { useContext } from "react";

import TextField from "@/components/Atoms/TextField";

import { buttonColorTheme } from "@/components/Atoms/Button/BaseButton/index.type";

interface NoLabelProps {
  name: string;
  placeholder: string;
  type: "text" | "email";
  theme: buttonColorTheme;
}

function NoLabel({ placeholder, name, type, theme }: NoLabelProps) {
  const value = useContext(UserInfoFormContext);
  const { loading, formData } = value!;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formData.current[name] = e.target.value;
  };

  return (
    <TextField.Text
      placeholder={placeholder}
      theme={theme}
      type={type}
      name={name}
      textAlign={"center"}
      disabled={loading}
      label={false}
      onChange={onChange}
    />
  );
}

export default NoLabel;
