import classNames from "classnames/bind";
import style from "./index.module.scss";

import TextButtonProps from "./index.type";

const cn = classNames.bind(style);

function TextButton(props: TextButtonProps) {
  //Props
  const {
    display = "block",

    fontSize = "body-01",
    fontWeight = "font-light",
    textAlign = "text-center",

    theme = "primary",

    type = "button",

    marginTop,
    marginRight,
    marginBottom,
    marginLeft,

    textOverflow = false,

    ...otherProps
  } = props;

  const buttonClass = cn(
    "button",

    display,

    fontSize,
    fontWeight,
    textAlign,

    theme,

    marginTop,
    marginRight,
    marginBottom,
    marginLeft,

    { "text-overflow": textOverflow }
  );

  return (
    <button
      disabled={otherProps.disabled}
      type={type}
      className={buttonClass}
      {...otherProps}
    >
      {otherProps.children}
    </button>
  );
}

export default TextButton;
