import type { Meta, StoryObj } from "@storybook/react";

import SocilaAccountSignInButtons from ".";
import { BsGoogle } from "react-icons/bs";

const meta: Meta<typeof SocilaAccountSignInButtons> = {
  component: SocilaAccountSignInButtons,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SocilaAccountSignInButtons>;

export const Primary: Story = {
  args: {
    socials: [
      { social: "google", icon: <BsGoogle /> },
      { social: "google", icon: <BsGoogle /> },
    ],
  },
};
