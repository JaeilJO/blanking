import type { Meta, StoryObj } from "@storybook/react";
import { FaGoogle } from "react-icons/fa";

import AuthSocialButton from ".";

const meta: Meta<typeof AuthSocialButton> = {
  component: AuthSocialButton,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AuthSocialButton>;

export const Primary: Story = {
  args: {
    color: "red",
    icon: <FaGoogle />,
    socialName: "Google",
  },
};
