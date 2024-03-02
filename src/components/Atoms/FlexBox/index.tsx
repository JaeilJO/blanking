import classNames from "classnames/bind";
import style from "./index.module.scss";
import SpacingTypes from "@/style/designSystem/spacing/spacing.type";

interface FlexBoxProps {
  children: React.ReactNode;

  /**
   * 'display', 'flexDirection', 'flexWrap', 'justifyContent', 'alignItems', 'alignContent', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'gap','bacground','border'
   * 이 외의 스타일을 적용하고 싶을 때 사용해야합니다
   * 만약 위의 스타일을 넣는다면 예상하지 못한 결과가 나올 수 있습니다
   */
  customStyle?: React.CSSProperties;

  display?: "flex" | "inline-flex";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  alignContent?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

  boxShadow?: boolean;
  backgroundColor?: "default" | "primary" | "gray" | "white" | "none";
  borderColor?: "default" | "primary" | "gray" | "light-gray" | "none";
  borderRadius?: boolean;
  paddingVertical?: SpacingTypes;
  paddingHorizontal?: SpacingTypes;
  gap?: SpacingTypes;
}

const cn = classNames.bind(style);

function FlexBox({
  children,
  display = "flex", // Default value
  flexDirection = "row",
  flexWrap = "nowrap",
  justifyContent = "flex-start",
  alignItems,
  alignContent,
  boxShadow = false,
  backgroundColor = "none",
  borderColor = "none",
  borderRadius = false,
  paddingVertical = 0,
  paddingHorizontal = 0,
  gap = 0,
  customStyle,
}: FlexBoxProps) {
  const boxStyles: React.CSSProperties = {
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    ...customStyle,
  };

  const flexBoxClassName = cn(
    "flex-box",
    `spacing-vertical-${paddingVertical}`,
    `spacing-horizontal-${paddingHorizontal}`,
    `gap-${gap}`,
    `bg-${backgroundColor}`,
    `border-${borderColor}`,
    {
      "box-shadow": boxShadow,
      "border-radius": borderRadius,
    }
  );
  return (
    <div style={boxStyles} className={flexBoxClassName}>
      {children}
    </div>
  );
}

export default FlexBox;
