export interface TextSubTitleProps {
  children: React.ReactNode;
  weight?: "light" | "regular";
  textAlign?: "left" | "center" | "right";
  display?: "block" | "inline";
  level: "01" | "02";
  color?: "default" | "primary" | "light-gray" | "gray";
  noDrag?: boolean;
}
