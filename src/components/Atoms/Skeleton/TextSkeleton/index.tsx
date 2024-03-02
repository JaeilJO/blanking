import classNames from "classnames/bind";
import style from "./index.module.scss";

export interface TextSkeletonProps {
  width: number;
  fontSize:
    | "title-01"
    | "title-02"
    | "title-03"
    | "subTitle-01"
    | "subTitle-02"
    | "body-01"
    | "body-02";
}

const cn = classNames.bind(style);

function TextSkeleton({ width, fontSize }: TextSkeletonProps) {
  const textSkeletonClassName = cn("skeleton", fontSize);
  return (
    <div style={{ width: `${width}px` }} className={textSkeletonClassName} />
  );
}

export default TextSkeleton;
