import type { Meta, StoryObj } from "@storybook/react";

import TextButton from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof TextButton> = {
  component: TextButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Custom: Story = {
  args: {
    children: "TextButton",
  },
};

export const Theme: Story = {
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
export const Display: Story = {
  render: () => (
    <>
      <TextButton display="block" theme="primary">
        Primary
      </TextButton>
      <TextButton display="inline" theme="gray">
        Gray
      </TextButton>
    </>
  ),
};
export const FontSize: Story = {
  render: () => {
    return (
      <div>
        <TextButton
          display="inline"
          marginLeft="ml-3"
          fontSize="tit-01"
          theme="primary"
        >
          tit-01
        </TextButton>
        <TextButton
          display="inline"
          marginLeft="ml-3"
          fontSize="tit-02"
          theme="primary"
        >
          tit-02
        </TextButton>
        <TextButton
          display="inline"
          marginLeft="ml-3"
          fontSize="tit-03"
          theme="primary"
        >
          tit-03
        </TextButton>
        <TextButton
          display="inline"
          marginLeft="ml-3"
          fontSize="sub-01"
          theme="primary"
        >
          sub-01
        </TextButton>
        <TextButton
          display="inline"
          marginLeft="ml-3"
          fontSize="sub-02"
          theme="primary"
        >
          sub-02
        </TextButton>
        <TextButton
          display="inline"
          marginLeft="ml-3"
          fontSize="body-01"
          theme="primary"
        >
          body-01
        </TextButton>
        <TextButton
          display="inline"
          marginLeft="ml-3"
          fontSize="body-02"
          theme="primary"
        >
          body-02
        </TextButton>
      </div>
    );
  },
};
export const TextAlign: Story = {
  render: () => (
    <>
      <TextButton textAlign="text-left" theme="primary">
        Left
      </TextButton>
      <TextButton textAlign="text-center" theme="primary">
        Center
      </TextButton>
      <TextButton textAlign="text-right" theme="primary">
        Right
      </TextButton>
    </>
  ),
};

export const Disabled: Story = {
  render: () => (
    <>
      <TextButton disabled>Disabled</TextButton>
    </>
  ),
};
