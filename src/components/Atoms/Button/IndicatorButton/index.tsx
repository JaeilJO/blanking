import classNames from "classnames/bind";
import style from "./index.module.scss";

const cn = classNames.bind(style);

interface IndicatorButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isCurrent: boolean;
}

function IndicatorButton({ isCurrent, ...props }: IndicatorButtonProps) {
  return (
    <button className={cn("button", { "is-current": isCurrent })} {...props} />
  );
}

export default IndicatorButton;
