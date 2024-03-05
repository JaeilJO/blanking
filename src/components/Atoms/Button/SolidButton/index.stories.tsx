import type { Meta, StoryObj } from "@storybook/react";

import SolidButton from ".";
import { BsGoogle } from "react-icons/bs";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SolidButton> = {
  component: SolidButton,
};

export default meta;
type Story = StoryObj<typeof SolidButton>;

export const FirstStory: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <SolidButton theme="primary">Primary</SolidButton>
      <SolidButton theme="gray">Gray</SolidButton>
      <SolidButton theme="black">Black</SolidButton>
      <SolidButton theme="light-gray">Light Gray</SolidButton>
      <SolidButton theme="red">Red</SolidButton>
      <SolidButton theme="yellow">Yellow</SolidButton>
      <SolidButton theme="green">Green</SolidButton>
      <SolidButton theme="white">White</SolidButton>
    </div>
  ),
};
