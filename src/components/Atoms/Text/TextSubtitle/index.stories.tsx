import type { Meta, StoryObj } from "@storybook/react";

import TextSubtitle from ".";

const meta: Meta<typeof TextSubtitle> = {
  component: TextSubtitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextSubtitle>;

export const Custom: Story = {
  args: { children: "TextSubtitle" },
};

export const TextAlign: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <TextSubtitle textAlign="text-left" fontSize="sub-01">
        Left
      </TextSubtitle>
      <TextSubtitle textAlign="text-center" fontSize="sub-01">
        Center
      </TextSubtitle>
      <TextSubtitle textAlign="text-right" fontSize="sub-01">
        Right
      </TextSubtitle>
    </div>
  ),
};

export const FontSize: Story = {
  render: () => (
    <>
      <TextSubtitle fontSize="sub-01">Font Size 01</TextSubtitle>
      <TextSubtitle fontSize="sub-02">Font Size 02</TextSubtitle>
    </>
  ),
};

export const FontWeight: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <TextSubtitle
        fontWeight="font-light"
        textAlign="text-center"
        fontSize="sub-01"
      >
        Light
      </TextSubtitle>
      <TextSubtitle
        fontWeight="font-regular"
        textAlign="text-center"
        fontSize="sub-01"
      >
        Regular
      </TextSubtitle>
      <TextSubtitle
        fontWeight="font-bold"
        textAlign="text-center"
        fontSize="sub-01"
      >
        Bold
      </TextSubtitle>
    </div>
  ),
};

export const Color: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <TextSubtitle color="primary" textAlign="text-center" fontSize="sub-01">
        Primary
      </TextSubtitle>
      <TextSubtitle color="gray" textAlign="text-center" fontSize="sub-01">
        Gray
      </TextSubtitle>
      <TextSubtitle
        color="light-gray"
        textAlign="text-center"
        fontSize="sub-01"
      >
        Light Gray
      </TextSubtitle>
      <TextSubtitle color="red" textAlign="text-center" fontSize="sub-01">
        Red
      </TextSubtitle>
      <TextSubtitle color="green" textAlign="text-center" fontSize="sub-01">
        Green
      </TextSubtitle>
      <TextSubtitle color="yellow" textAlign="text-center" fontSize="sub-01">
        Yellow
      </TextSubtitle>
      <TextSubtitle color="black" textAlign="text-center" fontSize="sub-01">
        Black
      </TextSubtitle>
      <TextSubtitle color="white" textAlign="text-center" fontSize="sub-01">
        White
      </TextSubtitle>
    </div>
  ),
};

export const Display: Story = {
  render: () => (
    <>
      <TextSubtitle display="inline" fontSize="sub-01">
        Inline
      </TextSubtitle>
      <TextSubtitle display="block" fontSize="sub-01">
        Block
      </TextSubtitle>
    </>
  ),
};
