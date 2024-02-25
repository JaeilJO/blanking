import type { Meta, StoryObj } from "@storybook/react";

import PageTitleButton from ".";

const meta: Meta<typeof PageTitleButton> = {
  component: PageTitleButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageTitleButton>;

export const Primary: Story = {
  args: {
    pagename: "PageName",
  },
};
