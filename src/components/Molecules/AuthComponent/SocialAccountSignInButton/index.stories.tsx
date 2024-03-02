import type { Meta, StoryObj } from "@storybook/react";

import SocialAccountSignInButton from ".";
import { BsGoogle } from "react-icons/bs";

const meta: Meta<typeof SocialAccountSignInButton> = {
  component: SocialAccountSignInButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SocialAccountSignInButton>;

export const Primary: Story = {
  args: {
    social: "google",
    icon: <BsGoogle />,
  },
};
