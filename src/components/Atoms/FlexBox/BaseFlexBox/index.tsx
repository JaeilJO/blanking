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

    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,

    marginTop,
    marginRight,
    marginBottom,
    marginLeft,

    ...otherProps
  } = props;

  const flexClassName = cn(
    "flex-box",
    flexDirection,
    gap,
    justfyContent,
    alignItems,

    backgroundColor,

    marginTop,
    marginRight,
    marginBottom,
    marginLeft,

    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  );

  return (
    <div className={flexClassName} style={otherProps.style}>
      {otherProps.children}
    </div>
  );
}

export default BaseFlexBox;
