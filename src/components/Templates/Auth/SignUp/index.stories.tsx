import type { Meta, StoryObj } from "@storybook/react";

import AuthSignUpTemplate from ".";
import useSignUp from "./useSignUp.hook";

const meta: Meta<typeof AuthSignUpTemplate> = {
  component: AuthSignUpTemplate,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AuthSignUpTemplate>;

export const Primary: Story = {
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "1000px",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};
