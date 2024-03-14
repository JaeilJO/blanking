export default interface IndicatorButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * 현재 Carousel이 보여지는지 여부
   */
  isCurrent: boolean;
}
