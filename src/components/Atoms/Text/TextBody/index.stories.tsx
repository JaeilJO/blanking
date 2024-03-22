import type { Meta, StoryObj } from "@storybook/react";

import TextBody from ".";

const meta: Meta<typeof TextBody> = {
  component: TextBody,
  tags: ["autodocs"],
  title: "Atoms/Text/TextBody",
};

export default meta;
type Story = StoryObj<typeof TextBody>;

export const Custom: Story = {
  args: { children: "TextBody" },
};

export const TextAlign: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <TextBody textAlign="text-left" fontSize="body-01">
        Left
      </TextBody>
      <TextBody textAlign="text-center" fontSize="body-01">
        Center
      </TextBody>
      <TextBody textAlign="text-right" fontSize="body-01">
        Right
      </TextBody>
    </div>
  ),
};

export const FontSize: Story = {
  render: () => (
    <div>
      <TextBody fontSize="body-01">Font Size 01</TextBody>
      <TextBody fontSize="body-02">Font Size 02</TextBody>
    </div>
  ),
};

export const FontWeight: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <TextBody
        fontWeight="font-light"
        textAlign="text-center"
        fontSize="body-01"
      >
        Light
      </TextBody>
      <TextBody
        fontWeight="font-regular"
        textAlign="text-center"
        fontSize="body-01"
      >
        Regular
      </TextBody>
      <TextBody
        fontWeight="font-bold"
        textAlign="text-center"
        fontSize="body-01"
      >
        Bold
      </TextBody>
    </div>
  ),
};

export const Color: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <TextBody color="primary" textAlign="text-center" fontSize="body-01">
        Primary
      </TextBody>
      <TextBody color="gray" textAlign="text-center" fontSize="body-01">
        Gray
      </TextBody>
      <TextBody color="light-gray" textAlign="text-center" fontSize="body-01">
        Light Gray
      </TextBody>
      <TextBody color="red" textAlign="text-center" fontSize="body-01">
        Red
      </TextBody>
      <TextBody color="green" textAlign="text-center" fontSize="body-01">
        Green
      </TextBody>
      <TextBody color="yellow" textAlign="text-center" fontSize="body-01">
        Yellow
      </TextBody>
      <TextBody color="black" textAlign="text-center" fontSize="body-01">
        Black
      </TextBody>
      <TextBody color="white" textAlign="text-center" fontSize="body-01">
        White
      </TextBody>
    </div>
  ),
};
