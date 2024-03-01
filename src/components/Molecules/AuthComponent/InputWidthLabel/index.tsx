import Input from "@/components/Atoms/Input";
import { LineInputProps } from "@/components/Atoms/Input/LineInput/index.type";
import classNames from "classnames/bind";
import style from "./index.module.scss";

interface InputWithLabelProps extends LineInputProps {
  label: string;
}

const cn = classNames.bind(style);

function InputWithLabel({
  name,
  label,
  type = "text",
  required = true,
  textAlign = "left",
  disabled = false,
  theme = "default",
  ...props
}: InputWithLabelProps) {
  const labelClassName = cn("label", textAlign, {
    disabled: disabled,
  });

  return (
    <div>
      <label className={labelClassName}>{label}</label>
      <Input.LineInput
        name={name}
        type={type}
        placeholder={label}
        disabled={disabled}
        textAlign={textAlign}
        required={required}
        theme={theme}
        {...props}
      />
    </div>
  );
}

export default InputWithLabel;
