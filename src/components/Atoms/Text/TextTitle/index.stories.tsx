import type { Meta, StoryObj } from "@storybook/react";

import TextTitle from ".";

const meta: Meta<typeof TextTitle> = {
  component: TextTitle,
  tags: ["autodocs"],
  title: "Atoms/Text/TextTitle",
};

export default meta;
type Story = StoryObj<typeof TextTitle>;

export const Custom: Story = {
  args: { children: "TextTitle" },
};

export const TextAlign: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <TextTitle textAlign="text-left" fontSize="tit-01">
        Left
      </TextTitle>
      <TextTitle textAlign="text-center" fontSize="tit-01">
        Center
      </TextTitle>
      <TextTitle textAlign="text-right" fontSize="tit-01">
        Right
      </TextTitle>
    </div>
  ),
};

export const FontSize: Story = {
  render: () => (
    <>
      <TextTitle fontSize="tit-01">Font Size 01</TextTitle>
      <TextTitle fontSize="tit-02">Font Size 02</TextTitle>
      <TextTitle fontSize="tit-03">Font Size 03</TextTitle>
    </>
  ),
};

export const FontWeight: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <TextTitle
        fontWeight="font-light"
        textAlign="text-center"
        fontSize="tit-01"
      >
        Light
      </TextTitle>
      <TextTitle
        fontWeight="font-regular"
        textAlign="text-center"
        fontSize="tit-01"
      >
        Regular
      </TextTitle>
      <TextTitle
        fontWeight="font-bold"
        textAlign="text-center"
        fontSize="tit-01"
      >
        Bold
      </TextTitle>
    </div>
  ),
};

export const Color: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <TextTitle color="primary" textAlign="text-center" fontSize="tit-01">
        Primary
      </TextTitle>
      <TextTitle color="gray" textAlign="text-center" fontSize="tit-01">
        Gray
      </TextTitle>
      <TextTitle color="light-gray" textAlign="text-center" fontSize="tit-01">
        Light Gray
      </TextTitle>
      <TextTitle color="red" textAlign="text-center" fontSize="tit-01">
        Red
      </TextTitle>
      <TextTitle color="green" textAlign="text-center" fontSize="tit-01">
        Green
      </TextTitle>
      <TextTitle color="yellow" textAlign="text-center" fontSize="tit-01">
        Yellow
      </TextTitle>
      <TextTitle color="black" textAlign="text-center" fontSize="tit-01">
        Black
      </TextTitle>
      <TextTitle color="white" textAlign="text-center" fontSize="tit-01">
        White
      </TextTitle>
    </div>
  ),
};
