import style from "./index.module.scss";
import classNames from "classnames/bind";
import ColoumFormProps from "./index.type";

const cn = classNames.bind(style);

function ColumnForm({
  children,
  gap = "gap-0",
  display = "block",
  alignItems,
  justifyContent = "flex-start",
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  ...props
}: ColoumFormProps) {
  const formClass = cn(
    "form",
    gap,
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    paddingBottom,
    paddingTop,
    paddingLeft,
    paddingRight
  );
  return (
    <form
      className={formClass}
      style={{ justifyContent, alignItems }}
      {...props}
    >
      {children}
    </form>
  );
}

export default ColumnForm;
