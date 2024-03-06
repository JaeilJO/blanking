import type { Meta, StoryObj } from "@storybook/react";

import TextLink from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof TextLink> = {
  component: TextLink,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Custom: Story = {
  args: {
    children: "TextLink",
    href: "/",
  },
};

export const Theme: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <TextLink theme="primary" href="/">
        Primary
      </TextLink>
      <TextLink theme="gray" href="/">
        Gray
      </TextLink>
      <TextLink theme="black" href="/">
        Black
      </TextLink>
      <TextLink theme="light-gray" href="/">
        Light Gray
      </TextLink>
      <TextLink theme="red" href="/">
        Red
      </TextLink>
      <TextLink theme="yellow" href="/">
        Yellow
      </TextLink>
      <TextLink theme="green" href="/">
        Green
      </TextLink>
      <TextLink theme="white" href="/">
        White
      </TextLink>
    </div>
  ),
};
export const Display: Story = {
  render: () => (
    <>
      <TextLink display="block" theme="primary" href="/">
        Primary
      </TextLink>
      <TextLink display="inline" theme="gray" href="/">
        Gray
      </TextLink>
    </>
  ),
};
export const FontSize: Story = {
  render: () => {
    return (
      <div>
        <TextLink
          display="inline"
          marginLeft="ml-3"
          fontSize="tit-01"
          theme="primary"
          href="/"
        >
          tit-01
        </TextLink>
        <TextLink
          display="inline"
          marginLeft="ml-3"
          fontSize="tit-02"
          theme="primary"
          href="/"
        >
          tit-02
        </TextLink>
        <TextLink
          display="inline"
          marginLeft="ml-3"
          fontSize="tit-03"
          theme="primary"
          href="/"
        >
          tit-03
        </TextLink>
        <TextLink
          display="inline"
          marginLeft="ml-3"
          fontSize="sub-01"
          theme="primary"
          href="/"
        >
          sub-01
        </TextLink>
        <TextLink
          display="inline"
          marginLeft="ml-3"
          fontSize="sub-02"
          theme="primary"
          href="/"
        >
          sub-02
        </TextLink>
        <TextLink
          display="inline"
          marginLeft="ml-3"
          fontSize="body-01"
          theme="primary"
          href="/"
        >
          body-01
        </TextLink>
        <TextLink
          display="inline"
          marginLeft="ml-3"
          fontSize="body-02"
          theme="primary"
          href="/"
        >
          body-02
        </TextLink>
      </div>
    );
  },
};
export const TextAlign: Story = {
  render: () => (
    <>
      <TextLink textAlign="text-left" theme="primary" href="/">
        Left
      </TextLink>
      <TextLink textAlign="text-center" theme="primary" href="/">
        Center
      </TextLink>
      <TextLink textAlign="text-right" theme="primary" href="/">
        Right
      </TextLink>
    </>
  ),
};

export const Disabled: Story = {
  render: () => (
    <>
      <TextLink disabled href="/">
        Disabled
      </TextLink>
    </>
  ),
};
