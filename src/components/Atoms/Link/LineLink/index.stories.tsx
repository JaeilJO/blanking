import type { Meta, StoryObj } from "@storybook/react";

import LineLink from ".";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LineLink> = {
  component: LineLink,
};

export default meta;
type Story = StoryObj<typeof LineLink>;

export const FirstStory: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <LineLink href="/" fontSize="body-01" theme="primary">
        Primary
      </LineLink>
      <LineLink href="/" fontSize="body-01" theme="gray">
        Gray
      </LineLink>
      <LineLink href="/" fontSize="body-01" theme="black">
        Black
      </LineLink>
      <LineLink href="/" fontSize="body-01" theme="light-gray">
        Light Gray
      </LineLink>
      <LineLink href="/" fontSize="body-01" theme="red">
        Red
      </LineLink>
      <LineLink href="/" fontSize="body-01" theme="yellow">
        Yellow
      </LineLink>
      <LineLink href="/" fontSize="body-01" theme="green">
        Green
      </LineLink>
      <LineLink href="/" fontSize="body-01" theme="white">
        White
      </LineLink>
    </div>
  ),
};
export const Block: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        height: "500px",
      }}
    >
      <LineLink href="/" fontSize="body-01" display="block" theme="primary">
        Primary
      </LineLink>
      <LineLink href="/" fontSize="body-01" display="block" theme="gray">
        Gray
      </LineLink>
      <LineLink href="/" fontSize="body-01" display="block" theme="black">
        Black
      </LineLink>
      <LineLink href="/" fontSize="body-01" display="block" theme="light-gray">
        Light Gray
      </LineLink>
      <LineLink href="/" fontSize="body-01" display="block" theme="red">
        Red
      </LineLink>
      <LineLink href="/" fontSize="body-01" display="block" theme="yellow">
        Yellow
      </LineLink>
      <LineLink href="/" fontSize="body-01" display="block" theme="green">
        Green
      </LineLink>
      <LineLink href="/" fontSize="body-01" display="block" theme="white">
        White
      </LineLink>
    </div>
  ),
};
export const FontSize: Story = {
  render: () => {
    return (
      <div>
        <LineLink href="/" fontSize="tit-01" theme="primary">
          tit-01
        </LineLink>
        <LineLink href="/" fontSize="tit-02" theme="primary">
          tit-02
        </LineLink>
        <LineLink href="/" fontSize="tit-03" theme="primary">
          tit-03
        </LineLink>
        <LineLink href="/" fontSize="sub-01" theme="primary">
          sub-01
        </LineLink>
        <LineLink href="/" fontSize="sub-02" theme="primary">
          sub-02
        </LineLink>
        <LineLink href="/" fontSize="body-01" theme="primary">
          body-01
        </LineLink>
        <LineLink href="/" fontSize="body-02" theme="primary">
          body-02
        </LineLink>
      </div>
    );
  },
};

export const BorderWidth: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
      <LineLink
        theme="primary"
        borderWidth="border-thin"
        fontSize="body-01"
        href="/"
      >
        Thin Border
      </LineLink>
      <LineLink
        theme="primary"
        borderWidth="border-medium"
        fontSize="body-01"
        href="/"
      >
        Medium Border
      </LineLink>
      <LineLink
        theme="primary"
        borderWidth="border-thick"
        fontSize="body-01"
        href="/"
      >
        Thick Border
      </LineLink>
    </div>
  ),
};
