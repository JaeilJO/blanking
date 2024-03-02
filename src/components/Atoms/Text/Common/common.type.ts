type CommonTextTypes = {
  children: React.ReactNode;
  block?: boolean;
  weight?: "light" | "regular" | "bold";
  textAlign?: "left" | "center" | "right";
  theme?: "default" | "primary" | "gray " | "warn" | "white" | "light-gray";
  noDrag?: boolean;
  whiteSpace?: boolean;
  style?: React.CSSProperties;
};

export default CommonTextTypes;
