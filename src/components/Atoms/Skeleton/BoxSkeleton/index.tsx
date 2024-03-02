import style from "./index.module.scss";

export interface BoxSkeletonProps {
  /**
   * 기존의 widht값과 똑같이 적용됩니다
   * 100%, 100dvh 등 적용가능
   */
  width: string;
  height: string;
}

function BoxSkeleton({ width, height }: BoxSkeletonProps) {
  return <div style={{ width, height }} className={style["skeleton"]} />;
}

export default BoxSkeleton;
