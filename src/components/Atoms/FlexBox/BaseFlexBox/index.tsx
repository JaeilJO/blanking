// Utils
import classNames from "classnames/bind";

// Style
import style from "./index.module.scss";

// Type
import BaseFlexBoxProps from "./index.type";

const cn = classNames.bind(style);

function BaseFlexBox(props: BaseFlexBoxProps) {
  //Props
  const {
    //flex관련 스타일
    flexDirection,
    gap,
    justfyContent,
    alignItems,

    backgroundColor,
    ...otherProps
  } = props;

  const flexClassName = cn(
    "flex-box",
    backgroundColor,
    flexDirection,
    gap,
    justfyContent,
    alignItems
  );

  return (
    <div className={flexClassName} style={otherProps.style}>
      {otherProps.children}
    </div>
  );
}

export default BaseFlexBox;
