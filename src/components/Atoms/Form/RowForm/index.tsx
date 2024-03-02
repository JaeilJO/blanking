import SpacingTypes from "@/style/designSystem/spacing/spacing.type";
import style from "./index.module.scss";
import classNames from "classnames/bind";

interface RowFormProps extends React.HTMLAttributes<HTMLFormElement> {
  /**
   * px단위로 간격을 설정합니다.
   */
  gap: SpacingTypes;
}

const cn = classNames.bind(style);

function RowForm({ children, gap, ...props }: RowFormProps) {
  const formClass = cn("form", `gap-${gap}`);
  return (
    <form className={formClass} {...props}>
      {children}
    </form>
  );
}

export default RowForm;
