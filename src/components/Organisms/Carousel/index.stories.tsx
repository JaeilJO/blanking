import type { Meta, StoryObj } from "@storybook/react";
import Carousel from ".";

const meta: Meta = {
  title: "Templates/Carousel",
};

export default meta;
type Story = StoryObj;

const LogoSection = () => {
  return <div style={{ backgroundColor: "red" }}>Hello</div>;
};

export const Primary: Story = {
  render: () => (
    <Carousel startSectionId={"logo"} sectionIds={["logo"]}>
      <Carousel.Container>
        <Carousel.Section sectionId="logo" content={<LogoSection />} />
      </Carousel.Container>
    </Carousel>
  ),
};
