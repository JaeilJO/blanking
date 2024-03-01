import style from "./index.module.scss";

interface RowFormProps extends React.HTMLAttributes<HTMLFormElement> {
  /**
   * px단위로 간격을 설정합니다.
   */
  gap: number;
}

function RowForm({ children, gap, ...props }: RowFormProps) {
  return (
    <form style={{ gap: gap }} className={style["form"]} {...props}>
      {children}
    </form>
  );
}

export default RowForm;
