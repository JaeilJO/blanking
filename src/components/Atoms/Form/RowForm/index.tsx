import style from "./index.module.scss";
import classNames from "classnames/bind";
import RowFormProps from "./index.type";

const cn = classNames.bind(style);

function RowForm({
  children,
  gap = "gap-0",
  display = "block",
  justifyContent = "flex-start",
  alignItems,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  ...props
}: RowFormProps) {
  const formClass = cn(
    "form",
    gap,
    display,
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

export default RowForm;
