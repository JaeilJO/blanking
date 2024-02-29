import type { Meta, StoryObj } from "@storybook/react";

import UnderLineInput from ".";

const meta: Meta<typeof UnderLineInput> = {
  component: UnderLineInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof UnderLineInput>;

export const Primary: Story = {
  args: {
    placeholder: "PlaceHolder",
  },
};
