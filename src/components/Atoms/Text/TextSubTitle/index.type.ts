import CommonTextTypes from "../Common/common.type";

export interface TextSubTitleProps extends CommonTextTypes {
  weight?: "light" | "regular" | "bold";
  textAlign?: "left" | "center" | "right";
  level?: "01" | "02";
}
