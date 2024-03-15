import { ForwardedRef, forwardRef } from "react";
import FlexBox from "../../FlexBox";
import { RowFlexBoxProps } from "../../FlexBox/RowFlexBox";

export type RowFormProps = RowFlexBoxProps &
  React.FormHTMLAttributes<HTMLFormElement>;

const RowForm = forwardRef(
  (props: RowFormProps, ref: ForwardedRef<HTMLFormElement>) => {
    return (
      <form ref={ref} {...props}>
        <FlexBox.Row {...props}>{props.children}</FlexBox.Row>
      </form>
    );
  }
);

RowForm.displayName = "RowForm";
export default RowForm;
