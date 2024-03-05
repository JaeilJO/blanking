import type { Meta, StoryObj } from "@storybook/react";

import SolidLink from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SolidLink> = {
  component: SolidLink,
};

export default meta;
type Story = StoryObj<typeof SolidLink>;

export const FirstStory: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <SolidLink fontSize="body-01" theme="primary" href="/">
        Primary
      </SolidLink>
      <SolidLink fontSize="body-01" theme="gray" href="/">
        Gray
      </SolidLink>
      <SolidLink fontSize="body-01" theme="black" href="/">
        Black
      </SolidLink>
      <SolidLink fontSize="body-01" theme="light-gray" href="/">
        Light Gray
      </SolidLink>
      <SolidLink fontSize="body-01" theme="red" href="/">
        Red
      </SolidLink>
      <SolidLink fontSize="body-01" theme="yellow" href="/">
        Yellow
      </SolidLink>
      <SolidLink fontSize="body-01" theme="green" href="/">
        Green
      </SolidLink>
      <SolidLink fontSize="body-01" theme="white" href="/">
        White
      </SolidLink>
    </div>
  ),
};
export const Block: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        height: "500px",
      }}
    >
      <SolidLink fontSize="body-01" display="block" theme="primary" href="/">
        Primary
      </SolidLink>
      <SolidLink fontSize="body-01" display="block" theme="gray" href="/">
        Gray
      </SolidLink>
      <SolidLink fontSize="body-01" display="block" theme="black" href="/">
        Black
      </SolidLink>
      <SolidLink fontSize="body-01" display="block" theme="light-gray" href="/">
        Light Gray
      </SolidLink>
      <SolidLink fontSize="body-01" display="block" theme="red" href="/">
        Red
      </SolidLink>
      <SolidLink fontSize="body-01" display="block" theme="yellow" href="/">
        Yellow
      </SolidLink>
      <SolidLink fontSize="body-01" display="block" theme="green" href="/">
        Green
      </SolidLink>
      <SolidLink fontSize="body-01" display="block" theme="white" href="/">
        White
      </SolidLink>
    </div>
  ),
};
export const FontSize: Story = {
  render: () => {
    return (
      <div>
        <SolidLink fontSize="tit-01" theme="primary" href="/">
          tit-01
        </SolidLink>
        <SolidLink fontSize="tit-02" theme="primary" href="/">
          tit-02
        </SolidLink>
        <SolidLink fontSize="tit-03" theme="primary" href="/">
          tit-03
        </SolidLink>
        <SolidLink fontSize="sub-01" theme="primary" href="/">
          sub-01
        </SolidLink>
        <SolidLink fontSize="sub-02" theme="primary" href="/">
          sub-02
        </SolidLink>
        <SolidLink fontSize="body-01" theme="primary" href="/">
          body-01
        </SolidLink>
        <SolidLink fontSize="body-02" theme="primary" href="/">
          body-02
        </SolidLink>
      </div>
    );
  },
};
