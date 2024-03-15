import type { Meta, StoryObj } from "@storybook/react";

import OutLineLink from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof OutLineLink> = {
  component: OutLineLink,
  tags: ["autodocs"],
  title: "Atoms/Link/OutLineLink",
};

export default meta;
type Story = StoryObj<typeof OutLineLink>;

export const Custom: Story = {
  args: {
    children: "OutLineLink",
    href: "/",
  },
};

export const Theme: Story = {
  render: () => (
    <div>
      <OutLineLink theme="primary" href="/" marginBottom="mb-3">
        Primary
      </OutLineLink>
      <OutLineLink theme="gray" href="/" marginBottom="mb-3">
        Gray
      </OutLineLink>
      <OutLineLink theme="black" href="/" marginBottom="mb-3">
        Black
      </OutLineLink>
      <OutLineLink theme="light-gray" href="/" marginBottom="mb-3">
        Light Gray
      </OutLineLink>
      <OutLineLink theme="red" href="/" marginBottom="mb-3">
        Red
      </OutLineLink>
      <OutLineLink theme="yellow" href="/" marginBottom="mb-3">
        Yellow
      </OutLineLink>
      <OutLineLink theme="green" href="/" marginBottom="mb-3">
        Green
      </OutLineLink>
      <OutLineLink theme="white" href="/" marginBottom="mb-3">
        White
      </OutLineLink>
    </div>
  ),
};
