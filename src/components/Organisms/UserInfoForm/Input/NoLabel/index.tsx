"use client";

import Input from "@/components/Atoms/Input";
import { UserInfoFormContext } from "../..";
import { useContext } from "react";
import TextInputProps from "@/components/Atoms/Input/TextInput/index.type";

interface NoLabelProps extends TextInputProps {
  name: string;
  required: true;
  placeholder: string;
}

function NoLabel(props: NoLabelProps) {
  const value = useContext(UserInfoFormContext);
  const loadingStatus = value?.loading;

  value.formData.current[props.name] = "";
  return (
    <Input.Text
      {...props}
      onChange={(e) => {
        value.formData.current[props.name] = e.target.value;
      }}
    />
  );
}

export default NoLabel;
