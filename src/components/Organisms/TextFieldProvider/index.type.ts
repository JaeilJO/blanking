import { Dispatch, SetStateAction } from "react";

export interface TextFieldProps {
  placeholder: string;
  theme:
    | "primary"
    | "black"
    | "gray"
    | "yellow"
    | "green"
    | "red"
    | "white"
    | "light-gray";
  type: "text" | "email" | "password";
  name: string;
  textAlign: "left" | "center" | "right";
  disabled: boolean;
  label: boolean;
  children: React.ReactNode;
}

export interface TextFiedlContextType
  extends Omit<TextFieldProps, "children" | "type"> {
  isFocus: boolean;
  setIsFocus: Dispatch<SetStateAction<boolean>>;

  inputType: "text" | "email" | "password";

  setInputType: Dispatch<SetStateAction<"text" | "email" | "password">>;
}
