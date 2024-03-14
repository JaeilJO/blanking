// Utils
import classNames from "classnames/bind";

// Style
import style from "./index.module.scss";
import IndicatorButtonProps from "./index.type";

const cn = classNames.bind(style);

function IndicatorButton(props: IndicatorButtonProps) {
  const { isCurrent, ...otherProps } = props;

  return (
    <button
      style={otherProps.style}
      className={cn("button", { "is-current": isCurrent })}
      {...otherProps}
    />
  );
}

export default IndicatorButton;
