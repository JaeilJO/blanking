import classNames from "classnames/bind";
import style from "./index.module.scss";
import ColumnFlexBoxProps from "./index.type";

const cn = classNames.bind(style);

function ColumnFlexBox({
  children,

  display = "block",

  flexWrap,
  justifyContent,
  alignItems,

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
  style,
}: ColumnFlexBoxProps) {
  const flexColumnStyle = {
    flexWrap,
    justifyContent,
    alignItems,
    style,
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

    display,
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
