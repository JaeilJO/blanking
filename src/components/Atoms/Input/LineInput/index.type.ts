import InputCommonProps from "../Common/common.type";

export interface LineInputProps extends InputCommonProps {
  /**
   * Name은 DB에 저장될 때 사용될 이름입니다.
   */
  type?: "text" | "password" | "email";
  theme?: "default" | "primary" | "gray" | "warn";
}
