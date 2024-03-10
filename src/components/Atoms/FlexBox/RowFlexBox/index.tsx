import classNames from "classnames/bind";
import style from "./index.module.scss";
import RowFlexBoxProps from "./index.type";

const cn = classNames.bind(style);

function RowFlexBox({
  children,
  display = "flex",
  flexWrap = "nowrap",
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
}: RowFlexBoxProps) {
  const flexRowStyle = {
    display,
    flexWrap,
    justifyContent,
    alignItems,
  };

  const flexRowClassName = cn(
    "flex-row",
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
    <div style={flexRowStyle} className={flexRowClassName}>
      {children}
    </div>
  );
}

export default RowFlexBox;
