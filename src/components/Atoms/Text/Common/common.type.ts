type CommonTextTypes = {
  children: React.ReactNode;
  block?: boolean;
  weight?: "light" | "regular" | "bold";
  textAlign?: "left" | "center" | "right";
  theme?: "default" | "primary" | "gray " | "warn" | "light-gray";
  noDrag?: boolean;
};

export default CommonTextTypes;
