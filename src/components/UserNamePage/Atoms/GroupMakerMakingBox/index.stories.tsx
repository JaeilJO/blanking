import type { Meta, StoryObj } from "@storybook/react";

import GroupMakerMakingBox from ".";

const meta: Meta<typeof GroupMakerMakingBox> = {
  component: GroupMakerMakingBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GroupMakerMakingBox>;

export const Primary: Story = {
  args: {
    onSubmit: () => {},
    register: () => {},
  },
};
