import type { Meta, StoryObj } from "@storybook/react";

import PageCard from ".";

const meta: Meta<typeof PageCard> = {
  component: PageCard,
  title: "Organisms/PageCard",
};

export default meta;
type Story = StoryObj<typeof PageCard>;

export const Primary: Story = {
  args: {
    pagename: "페이지 이름",
  },
};
