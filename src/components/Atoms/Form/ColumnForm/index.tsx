import { LegacyRef, forwardRef } from "react";

import FlexBox from "../../FlexBox";
import { ColumnFlexBoxProps } from "../../FlexBox/ColumnFlexBox";

export type ColumnFormProps = ColumnFlexBoxProps &
  React.FormHTMLAttributes<HTMLFormElement>;

const ColumnForm = forwardRef((props: ColumnFormProps, ref) => {
  return (
    <form ref={ref as LegacyRef<HTMLFormElement>} {...props}>
      <FlexBox.Column {...props}>{props.children}</FlexBox.Column>
    </form>
  );
});

ColumnForm.displayName = "ColumnForm";
export default ColumnForm;
