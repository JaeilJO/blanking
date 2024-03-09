import style from "./index.module.scss";
import classNames from "classnames/bind";
import RowFormProps from "./index.type";
import { ForwardedRef, forwardRef } from "react";

const cn = classNames.bind(style);

const RowForm = forwardRef(
  (
    {
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
    }: RowFormProps,
    ref: ForwardedRef<HTMLFormElement>
  ) => {
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
        ref={ref}
        className={formClass}
        style={{ justifyContent, alignItems }}
        {...props}
      >
        {children}
      </form>
    );
  }
);

export default RowForm;
