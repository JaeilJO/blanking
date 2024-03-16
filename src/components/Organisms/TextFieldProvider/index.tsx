"use client";

// Utils
import { createContext, useState } from "react";

// Type
import { TextFiedlContextType, TextFieldProps } from "./index.type";

// Components
import TextFieldPasswordButton from "./TextFieldPasswordButton";
import TextFieldWrapper from "./TextFieldWrapper";
import TextFieldInput from "./TextFieldInput";
import TextFieldLabel from "./TextFieldLabel";

// Context
export const TextFieldContext = createContext<TextFiedlContextType | undefined>(
  undefined
);

/**
 * TextField를 만들기위한 Component

 ** input에 관련된 Event는 TextFieldInput에서 처리 **

 * name
  - 소문자로 입력

 * label
  - label은 true인 경우 자체 placeholder가 아닌 애니메이션이 있는 label이 생성
  - label을 사용하기 위해서는 TextFieldLabel을 사용해야함

 * textAlign
  - input의 text-align을 지정
  - left, center, right
  - label이 있을 경우 placeholder에 text-align가 적용되지 않음
  - label이 없는 경우 사용을 권장
 */
function TextFieldProvider({
  placeholder,
  theme,
  type,
  name,
  textAlign,
  disabled,
  label,
  children,
}: TextFieldProps) {
  const [isFocus, setIsFocus] = useState(false);

  const [inputType, setInputType] = useState(type);

  return (
    <TextFieldContext.Provider
      value={{
        // Context에서 사용하는 value들
        isFocus,
        setIsFocus,

        // TextFieldContext에서 props로 받아온 값들
        placeholder,
        theme,
        inputType,
        setInputType,
        name,
        textAlign,
        disabled,
        label,
      }}
    >
      <TextFieldWrapper>{children}</TextFieldWrapper>
    </TextFieldContext.Provider>
  );
}

TextFieldProvider.Input = TextFieldInput;
TextFieldProvider.Label = TextFieldLabel;
TextFieldProvider.PasswordButton = TextFieldPasswordButton;

export default TextFieldProvider;
