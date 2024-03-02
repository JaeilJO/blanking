import style from "./index.module.scss";

export interface BoxSkeletonProps {
  width: string;
  height: string;
}

function BoxSkeleton({ width, height }: BoxSkeletonProps) {
  return <div style={{ width, height }} className={style["skeleton"]} />;
}

export default BoxSkeleton;
