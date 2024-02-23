import type { Meta, StoryObj } from "@storybook/react";

import AuthButton from ".";
import { BsGoogle } from "react-icons/bs";

const meta: Meta<typeof AuthButton> = {
  component: AuthButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AuthButton>;

export const Primary: Story = {
  args: {
    icon: <BsGoogle />,
    value: "Example",
  },
};

export const Disable: Story = {
  args: {
    icon: <BsGoogle />,
    value: "Example",
    disabled: true,
  },
};
