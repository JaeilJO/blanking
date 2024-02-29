import style from "./index.module.scss";
import classNames from "classnames/bind";
import { UnderLineInputProps } from "./index.type";

const cn = classNames.bind(style);

function UnderLineInput({
  name,
  type = "text",
  required = true,
  placeholder,
  disabled = false,
  textAlign = "left",
  ...props
}: UnderLineInputProps) {
  const underLineInputClassName = cn("input", textAlign);
  return (
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      disabled={disabled}
      className={underLineInputClassName}
      {...props}
    />
  );
}

export default UnderLineInput;
