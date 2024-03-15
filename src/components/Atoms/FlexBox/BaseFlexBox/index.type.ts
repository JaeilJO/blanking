import {
  Gap,
  MarginBottom,
  MarginLeft,
  MarginRight,
  MarginTop,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
  backgroundColor,
} from "@/style/style.type";

export default interface BaseFlexBoxProps
  extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: backgroundColor;

  flexDirection: "flex-row" | "flex-column";

  gap?: Gap;

  flexWrap?: "flex-wrap" | "flex-nowrap";

  justifyContent?:
    | "justify-flex-start"
    | "justify-flex-end"
    | "justify-center"
    | "justify-space-between"
    | "justify-space-around";

  alignItems?:
    | "align-items-start"
    | "align-items-center"
    | "align-items-end"
    | "align-items-stretch"
    | "align-items-baseline";

  marginTop?: MarginTop;
  marginRight?: MarginRight;
  marginBottom?: MarginBottom;
  marginLeft?: MarginLeft;

  paddingTop?: PaddingTop;
  paddingRight?: PaddingRight;
  paddingBottom?: PaddingBottom;
  paddingLeft?: PaddingLeft;
}
