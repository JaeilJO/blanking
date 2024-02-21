"use client";

// Utils
import { useRef, useState } from "react";
import { ChangeEventHandler } from "react";
import classNames from "classnames/bind";

// Style
import style from "./index.module.scss";

// Icons
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface AuthInputProps {
  disabled?: boolean | undefined;

  /**
   * name은 반드시 소문자와 띄어쓰기 없이 작성해야 합니다.
   */
  name: string;
  type: "text" | "password" | "email";
  placeholder?: string | undefined;
  required?: boolean | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

const cn = classNames.bind(style);

function AuthInput({
  disabled = false,
  name,
  placeholder = "Default",
  required = true,
  type,
  onChange,
}: AuthInputProps) {
  const [isHide, setIsHide] = useState(false);
  const [onText, setOnText] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const passwordToggleHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsHide(!isHide);
  };

  const onBlur = () => {
    if (inputRef.current?.value) {
      setOnText(true);
    } else {
      setOnText(false);
    }
  };

  return (
    <div className={style["input-wrapper"]}>
      <label className={cn("label", { "on-text": onText })}>
        {placeholder}
      </label>
      <div className={cn("input-box", { "on-text": onText })}>
        <input
          className={cn("input")}
          ref={inputRef}
          type={type === "password" ? (isHide ? "text" : "password") : type}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
        />

        {type === "password" && (
          <button
            className={style["password-toggle-button"]}
            onClick={passwordToggleHandler}
          >
            {isHide ? <BsEyeSlash /> : <BsEye />}
          </button>
        )}
      </div>
    </div>
  );
}

export default AuthInput;
