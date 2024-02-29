import InputCommonProps from "../Common/common.type";

export interface UnderLineInputProps extends InputCommonProps {
  /**
   * UnderLineInput은 text와 email 타입을 지원합니다.
   */
  type?: "text" | "email";
}
