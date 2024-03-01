import type { Meta, StoryObj } from "@storybook/react";

import AuthSignInTemplate from ".";

const meta: Meta<typeof AuthSignInTemplate> = {
  component: AuthSignInTemplate,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AuthSignInTemplate>;

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
