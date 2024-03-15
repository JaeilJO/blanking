import { Gap, backgroundColor } from "@/style/style.type";

export default interface BaseFlexBoxProps
  extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: backgroundColor;

  flexDirection: "flex-row" | "flex-column";

  gap?: Gap;

  justfyContent?:
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
}
