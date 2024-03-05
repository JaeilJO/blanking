import type { Meta, StoryObj } from "@storybook/react";

import TextButton from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof TextButton> = {
  component: TextButton,
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const FirstStory: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <TextButton theme="primary">Primary</TextButton>
      <TextButton theme="gray">Gray</TextButton>
      <TextButton theme="black">Black</TextButton>
      <TextButton theme="light-gray">Light Gray</TextButton>
      <TextButton theme="red">Red</TextButton>
      <TextButton theme="yellow">Yellow</TextButton>
      <TextButton theme="green">Green</TextButton>
      <TextButton theme="white">White</TextButton>
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
      <TextButton display="block" theme="primary">
        Primary
      </TextButton>
      <TextButton display="block" theme="gray">
        Gray
      </TextButton>
      <TextButton display="block" theme="black">
        Black
      </TextButton>
      <TextButton display="block" theme="light-gray">
        Light Gray
      </TextButton>
      <TextButton display="block" theme="red">
        Red
      </TextButton>
      <TextButton display="block" theme="yellow">
        Yellow
      </TextButton>
      <TextButton display="block" theme="green">
        Green
      </TextButton>
      <TextButton display="block" theme="white">
        White
      </TextButton>
    </div>
  ),
};
export const FontSize: Story = {
  render: () => {
    return (
      <div>
        <TextButton fontSize="tit-01" theme="primary">
          tit-01
        </TextButton>
        <TextButton fontSize="tit-02" theme="primary">
          tit-02
        </TextButton>
        <TextButton fontSize="tit-03" theme="primary">
          tit-03
        </TextButton>
        <TextButton fontSize="sub-01" theme="primary">
          sub-01
        </TextButton>
        <TextButton fontSize="sub-02" theme="primary">
          sub-02
        </TextButton>
        <TextButton fontSize="body-01" theme="primary">
          body-01
        </TextButton>
        <TextButton fontSize="body-02" theme="primary">
          body-02
        </TextButton>
      </div>
    );
  },
};
