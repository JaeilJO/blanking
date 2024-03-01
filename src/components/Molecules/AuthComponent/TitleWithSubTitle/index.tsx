import FlexBox from "@/components/Atoms/FlexBox";
import Text from "@/components/Atoms/Text";

interface TitleWithSubtitleProps {
  title: string;
  subtitle: string;
}

function TitleWithSubtitle({ title, subtitle }: TitleWithSubtitleProps) {
  return (
    <FlexBox flexDirection="column" gap={2}>
      <Text.Title level="02" weight="bold">
        {title}
      </Text.Title>
      <Text.SubTitle level="02" weight="light">
        {subtitle}
      </Text.SubTitle>
    </FlexBox>
  );
}

export default TitleWithSubtitle;
