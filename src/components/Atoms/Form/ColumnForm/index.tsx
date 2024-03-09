import style from "./index.module.scss";
import classNames from "classnames/bind";
import ColoumFormProps from "./index.type";
import { LegacyRef, forwardRef } from "react";

const cn = classNames.bind(style);

const ColumnForm = forwardRef(
  (
    {
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
    }: ColoumFormProps,
    ref
  ) => {
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
        ref={ref as LegacyRef<HTMLFormElement>}
        className={formClass}
        style={{ justifyContent, alignItems }}
        {...props}
      >
        {children}
      </form>
    );
  }
);

export default ColumnForm;
