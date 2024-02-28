export interface TextTitleProps {
  children: React.ReactNode;
  weight?: "light" | "regular" | "bold";
  textAlign?: "left" | "center" | "right";
  display?: "block" | "inline";
  level?: "01" | "02" | "03";
  color?: "default" | "primary" | "light-gray" | "gray";
  noDrag?: boolean;
}
