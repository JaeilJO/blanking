import style from "./index.module.scss";

interface ColoumFormProps extends React.HTMLAttributes<HTMLFormElement> {
  /**
   * px단위로 간격을 설정합니다.
   */
  gap: number;
}

function ColoumForm({ children, gap, ...props }: ColoumFormProps) {
  return (
    <form style={{ gap: gap }} className={style["form"]} {...props}>
      {children}
    </form>
  );
}

export default ColoumForm;
