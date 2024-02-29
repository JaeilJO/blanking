import { InputHTMLAttributes } from "react";

interface InputCommonProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  textAlign?: "left" | "center" | "right";
  disabled?: boolean;
}

export default InputCommonProps;
