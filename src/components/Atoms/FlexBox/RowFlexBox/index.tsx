import BaseFlexBox from "../BaseFlexBox";
import BaseFlexBoxProps from "../BaseFlexBox/index.type";

type RowFlexBoxProps = Omit<BaseFlexBoxProps, "flexDirection">;

function RowFlexBox(props: RowFlexBoxProps) {
  return (
    <BaseFlexBox // Direction 고정
      flexDirection="flex-row"
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
    >
      {props.children}
    </BaseFlexBox>
  );
}

export default RowFlexBox;
