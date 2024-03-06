import type { Meta, StoryObj } from "@storybook/react";

import LineLink from ".";
import { BsGoogle } from "react-icons/bs";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LineLink> = {
  component: LineLink,
  tags: ["autodocs"],
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
    <div style={{ display: "flex", gap: "24px" }}>
      <LineLink theme="primary" href="/">
        Primary
      </LineLink>
      <LineLink theme="gray" href="/">
        Gray
      </LineLink>
      <LineLink theme="black" href="/">
        Black
      </LineLink>
      <LineLink theme="light-gray" href="/">
        Light Gray
      </LineLink>
      <LineLink theme="red" href="/">
        Red
      </LineLink>
      <LineLink theme="yellow" href="/">
        Yellow
      </LineLink>
      <LineLink theme="green" href="/">
        Green
      </LineLink>
      <LineLink theme="white" href="/">
        White
      </LineLink>
    </div>
  ),
};

export const Display: Story = {
  render: () => (
    <>
      <LineLink display="block" marginBottom="mb-3" theme="primary" href="/">
        Primary
      </LineLink>

      <LineLink display="inline" theme="gray" href="/">
        Gray
      </LineLink>
    </>
  ),
};

export const Icon: Story = {
  args: {
    icon: <BsGoogle />,
    href: "/",
    children: "Icon Text",
  },
};

export const BorderWidth: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
      <LineLink theme="primary" borderWidth="border-thin" href="/">
        Thin Border
      </LineLink>
      <LineLink theme="primary" borderWidth="border-medium" href="/">
        Medium Border
      </LineLink>
      <LineLink theme="primary" borderWidth="border-thick" href="/">
        Thick Border
      </LineLink>
    </div>
  ),
};

export const FontSize: Story = {
  render: () => {
    return (
      <div>
        <LineLink
          display="inline"
          marginLeft="ml-3"
          fontSize="tit-01"
          theme="primary"
          href="/"
        >
          tit-01
        </LineLink>
        <LineLink
          display="inline"
          marginLeft="ml-3"
          fontSize="tit-02"
          theme="primary"
          href="/"
        >
          tit-02
        </LineLink>
        <LineLink
          display="inline"
          marginLeft="ml-3"
          fontSize="tit-03"
          theme="primary"
          href="/"
        >
          tit-03
        </LineLink>
        <LineLink
          display="inline"
          marginLeft="ml-3"
          fontSize="sub-01"
          theme="primary"
          href="/"
        >
          sub-01
        </LineLink>
        <LineLink
          display="inline"
          marginLeft="ml-3"
          fontSize="sub-02"
          theme="primary"
          href="/"
        >
          sub-02
        </LineLink>
        <LineLink
          display="inline"
          marginLeft="ml-3"
          fontSize="body-01"
          theme="primary"
          href="/"
        >
          body-01
        </LineLink>
        <LineLink
          display="inline"
          marginLeft="ml-3"
          fontSize="body-02"
          theme="primary"
          href="/"
        >
          body-02
        </LineLink>
      </div>
    );
  },
};

export const FontWeight: Story = {
  render: () => (
    <div>
      <LineLink
        marginLeft="ml-3"
        display="inline"
        fontWeight="font-bold"
        theme="primary"
        href="/"
      >
        Bold
      </LineLink>
      <LineLink
        marginLeft="ml-3"
        display="inline"
        fontWeight="font-light"
        theme="primary"
        href="/"
      >
        Light
      </LineLink>
      <LineLink
        marginLeft="ml-3"
        display="inline"
        fontWeight="font-regular"
        theme="primary"
        href="/"
      >
        Regular
      </LineLink>
    </div>
  ),
};
export const TextAlign: Story = {
  render: () => (
    <div>
      <LineLink
        marginBottom="mb-3"
        display="block"
        textAlign="text-left"
        theme="primary"
        href="/"
      >
        Left Align
      </LineLink>
      <LineLink
        marginBottom="mb-3"
        display="block"
        textAlign="text-center"
        theme="primary"
        href="/"
      >
        Center Align
      </LineLink>
      <LineLink
        marginBottom="mb-3"
        display="block"
        textAlign="text-right"
        theme="primary"
        href="/"
      >
        Right Align
      </LineLink>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    href: "/",
    disabled: true,
  },
};
