import type { Meta, StoryObj } from "@storybook/react";

import HeadingWithDescription from ".";

const meta: Meta<typeof HeadingWithDescription> = {
  component: HeadingWithDescription,
  tags: ["autodocs"],
  title: "Molecules/HeadingWithDescription",
};

export default meta;
type Story = StoryObj<typeof HeadingWithDescription>;

export const Primary: Story = {
  args: {
    title: "Title",
    description: "Description",
  },
};
