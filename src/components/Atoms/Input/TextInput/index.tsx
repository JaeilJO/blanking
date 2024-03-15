import style from "./index.module.scss";

import classNames from "classnames/bind";
import TextInputProps from "./index.type";

const cn = classNames.bind(style);

function TextInput({
  //공통
  theme = "primary",
  fontSize = "body-01",
  disabled,

  // input props
  type = "text",
  name,
  placeholder,
  required,
  fontWeight = "font-light",

  // wrapper props
  display = "block",
  borderWidth = "border-thin",

  marginRight,
  marginLeft,
  marginTop,
  marginBottom,

  paddingRight,
  paddingLeft,
  paddingTop,
  paddingBottom,

  ...props
}: TextInputProps) {
  return (
    <div
      className={cn(
        "input-wrapper",
        "pr-2",
        "pl-2",
        "pt-2",
        "pb-2",

        display,

        borderWidth,

        marginRight,
        marginLeft,
        marginTop,
        marginBottom,

        paddingRight,
        paddingLeft,
        paddingTop,
        paddingBottom,

        theme,

        fontSize,

        { disabeld: disabled }
      )}
    >
      <input
        className={cn("input", fontSize, theme, fontWeight)}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        {...props}
      />
    </div>
  );
}

export default TextInput;
