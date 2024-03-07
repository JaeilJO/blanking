import type { Meta, StoryObj } from "@storybook/react";

import InputWithLabelTextInput from ".";

const meta: Meta<typeof InputWithLabelTextInput> = {
  component: InputWithLabelTextInput,
};

export default meta;
type Story = StoryObj<typeof InputWithLabelTextInput>;

export const Primary: Story = {
  args: {},
};
