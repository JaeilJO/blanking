import type { Meta, StoryObj } from "@storybook/react";

import SocialButtons from ".";
import { BsGoogle } from "react-icons/bs";

const meta: Meta<typeof SocialButtons> = {
  component: SocialButtons,
};

export default meta;
type Story = StoryObj<typeof SocialButtons>;

export const Primary: Story = {
  args: {
    buttons: [
      {
        icon: <BsGoogle />,
        color: "red",
        socialName: "Gooogle",
        onClick: () => {},
      },
      {
        icon: <BsGoogle />,
        color: "red",
        socialName: "Gooogle",
        onClick: () => {},
      },
      {
        icon: <BsGoogle />,
        color: "red",
        socialName: "Gooogle",
        onClick: () => {},
      },
      {
        icon: <BsGoogle />,
        color: "red",
        socialName: "Gooogle",
        onClick: () => {},
      },
      {
        icon: <BsGoogle />,
        color: "red",
        socialName: "Gooogle",
        onClick: () => {},
      },
    ],
  },
};
