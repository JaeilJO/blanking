import { useContext } from "react";
import { TextFieldContext } from "..";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import classNames from "classnames/bind";
import style from "./index.module.scss";

const cn = classNames.bind(style);

// type이 Password인 경우에만 사용해주세요
function TextFieldPasswordButton() {
  const value = useContext(TextFieldContext);

  const { inputType, setInputType, disabled, theme } = value!;

  const onClick = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const buttonClassName = cn("button", `text-${theme}`);

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {inputType === "password" ? <BsEye /> : <BsEyeSlash />}
    </button>
  );
}

export default TextFieldPasswordButton;
