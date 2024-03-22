import type { Meta, StoryObj } from "@storybook/react";

import SocialSignInButton from ".";
import { BsGoogle } from "react-icons/bs";

const meta: Meta<typeof SocialSignInButton> = {
  component: SocialSignInButton,
  tags: ["autodocs"],
  title: "Molecules/SocialSignInButton",
};

export default meta;
type Story = StoryObj<typeof SocialSignInButton>;

export const Primary: Story = {
  args: {
    icon: <BsGoogle />,
  },
};
