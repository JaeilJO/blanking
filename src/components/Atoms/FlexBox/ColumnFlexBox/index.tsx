import BaseFlexBox from "../BaseFlexBox";
import BaseFlexBoxProps from "../BaseFlexBox/index.type";

export type ColumnFlexBoxProps = Omit<BaseFlexBoxProps, "flexDirection">;

function ColumnFlexBox(props: ColumnFlexBoxProps) {
  return (
    <BaseFlexBox
      // Direction 고정
      flexDirection="flex-column"
      backgroundColor={props.backgroundColor}
      // FlexBox 스타일
      gap={props.gap}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      flexWrap={props.flexWrap}
      // Margin, Padding
      marginTop={props.marginTop}
      marginRight={props.marginRight}
      marginBottom={props.marginBottom}
      marginLeft={props.marginLeft}
      paddingTop={props.paddingTop}
      paddingRight={props.paddingRight}
      paddingBottom={props.paddingBottom}
      paddingLeft={props.paddingLeft}
      {...props}
    >
      {props.children}
    </BaseFlexBox>
  );
}

export default ColumnFlexBox;
