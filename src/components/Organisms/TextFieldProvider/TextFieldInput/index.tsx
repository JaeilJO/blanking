"use client";

// Utils
import { useCallback, useContext, useRef } from "react";
import classNames from "classnames/bind";
import { TextFieldContext } from "..";

// Style
import style from "./index.module.scss";

const cn = classNames.bind(style);

/**
 * Input에 onChange같은 이벤트를 넣어주기 위해서 Input Attribute를 상속받음
 * TextField 안에서 사용하는 이벤트와의 충돌을 없애기 위해 Omit 사용
 */
type TextFieldInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onBlur" | "onFocus" | "disabled" | "placeholder" | "name"
>;

function TextFieldInput(props: TextFieldInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const value = useContext(TextFieldContext);
  const {
    setIsFocus,
    inputType,
    textAlign,
    disabled,
    label,
    placeholder,
    name,
  } = value!;

  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    const $input = inputRef.current;

    setIsFocus(false);

    // input에 값이 있을 경우 focus 유지
    if ($input?.value) {
      setIsFocus(true);
    }
  }, []);

  // label이 있을 경우 input 자체 placeholder를 없애준다.
  const inputPlaceHolder = label ? undefined : placeholder;

  const inputClassName = cn("input", `text-${textAlign}`, {
    hide: inputType === "password",
  });

  return (
    <input
      ref={inputRef}
      className={inputClassName}
      type={inputType}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      placeholder={inputPlaceHolder}
      name={name}
      required
      {...props}
    />
  );
}

export default TextFieldInput;
