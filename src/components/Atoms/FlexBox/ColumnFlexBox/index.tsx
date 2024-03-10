import classNames from "classnames/bind";
import style from "./index.module.scss";
import ColumnFlexBoxProps from "./index.type";

const cn = classNames.bind(style);

function ColumnFlexBox({
  children,
  display = "flex",
  flexWrap = "wrap",
  justifyContent = "flex-start",
  alignItems = "stretch",
  backgroundColor,
  borderRadius = false,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  gap,
}: ColumnFlexBoxProps) {
  const flexColumnStyle = {
    display,
    flexWrap,
    justifyContent,
    alignItems,
  };

  const flexColumnClassName = cn(
    "flex-column",
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    backgroundColor,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    gap,
    {
      "border-radius": borderRadius,
    }
  );

  return (
    <div style={flexColumnStyle} className={flexColumnClassName}>
      {children}
    </div>
  );
}

export default ColumnFlexBox;
