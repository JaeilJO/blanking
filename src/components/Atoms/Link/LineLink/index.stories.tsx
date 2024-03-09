import type { Meta, StoryObj } from "@storybook/react";

import LineLink from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LineLink> = {
  component: LineLink,
  tags: ["autodocs"],
  title: "Atoms/Link/LineLink",
};

export default meta;
type Story = StoryObj<typeof LineLink>;

export const Custom: Story = {
  args: {
    children: "LineLink",
    href: "/",
  },
};

export const Theme: Story = {
  render: () => (
    <div>
      <LineLink theme="primary" href="/" marginBottom="mb-3">
        Primary
      </LineLink>
      <LineLink theme="gray" href="/" marginBottom="mb-3">
        Gray
      </LineLink>
      <LineLink theme="black" href="/" marginBottom="mb-3">
        Black
      </LineLink>
      <LineLink theme="light-gray" href="/" marginBottom="mb-3">
        Light Gray
      </LineLink>
      <LineLink theme="red" href="/" marginBottom="mb-3">
        Red
      </LineLink>
      <LineLink theme="yellow" href="/" marginBottom="mb-3">
        Yellow
      </LineLink>
      <LineLink theme="green" href="/" marginBottom="mb-3">
        Green
      </LineLink>
      <LineLink theme="white" href="/" marginBottom="mb-3">
        White
      </LineLink>
    </div>
  ),
};
