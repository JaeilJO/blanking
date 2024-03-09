import FlexBox from "@/components/Atoms/FlexBox";
import Text from "@/components/Atoms/Text";
import {
  FontWeight,
  Gap,
  MarginBottom,
  MarginLeft,
  MarginRight,
  MarginTop,
} from "@/style/style.type";

interface HeadingWithDescriptionProps {
  title: string;
  description?: string;
  alignText?: "left" | "center" | "right";
  titleSize?: "tit-01" | "tit-02" | "tit-03";
  descriptionSize?: "body-01" | "body-02";
  titleFontWeight?: FontWeight;
  descriptionFontWeight?: FontWeight;
  gap?: Gap;
  marginLeft?: MarginLeft;
  marginRight?: MarginRight;
  marginTop?: MarginTop;
  marginBottom?: MarginBottom;
}

function HeadingWithDescription({
  title,
  description,
  alignText = "left",
  titleSize = "tit-03",
  descriptionSize = "body-01",
  titleFontWeight = "font-regular",
  descriptionFontWeight = "font-regular",
  gap = "gap-2",
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: HeadingWithDescriptionProps) {
  const getAlign = (alignText: "left" | "center" | "right") => {
    switch (alignText) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";

      case "right":
        return "text-right";
    }
  };
  return (
    <FlexBox.Column
      gap={gap}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
    >
      <Text.Title
        color="black"
        fontWeight={titleFontWeight}
        fontSize={titleSize}
        textAlign={getAlign(alignText)}
      >
        {title}
      </Text.Title>
      <Text.Body
        color="gray"
        fontWeight={descriptionFontWeight}
        fontSize={descriptionSize}
        textAlign={getAlign(alignText)}
      >
        {description}
      </Text.Body>
    </FlexBox.Column>
  );
}

export default HeadingWithDescription;
