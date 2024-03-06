import type { Meta, StoryObj } from "@storybook/react";

import SolidLink from ".";
import { BsGoogle } from "react-icons/bs";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SolidLink> = {
  component: SolidLink,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SolidLink>;

export const Custom: Story = {
  args: {
    children: "Solid Link",
    href: "/",
  },
};

export const Theme: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <SolidLink theme="primary" href="/">
        Primary
      </SolidLink>
      <SolidLink theme="gray" href="/">
        Gray
      </SolidLink>
      <SolidLink theme="black" href="/">
        Black
      </SolidLink>
      <SolidLink theme="light-gray" href="/">
        Light Gray
      </SolidLink>
      <SolidLink theme="red" href="/">
        Red
      </SolidLink>
      <SolidLink theme="yellow" href="/">
        Yellow
      </SolidLink>
      <SolidLink theme="green" href="/">
        Green
      </SolidLink>
      <SolidLink theme="white" href="/">
        White
      </SolidLink>
    </div>
  ),
};

export const Display: Story = {
  render: () => (
    <div>
      <SolidLink display="block" theme="primary" href="/">
        Blcok
      </SolidLink>
      <SolidLink display="inline" theme="gray" href="/">
        Inline
      </SolidLink>
    </div>
  ),
};

export const Icon: Story = {
  render: () => (
    <div>
      <SolidLink theme="primary" icon={<BsGoogle />} href="/">
        Google
      </SolidLink>
    </div>
  ),
};

export const FontSize: Story = {
  render: () => {
    return (
      <div>
        <SolidLink
          display="inline"
          fontSize="tit-01"
          theme="primary"
          marginLeft="ml-3"
          href="/"
        >
          tit-01
        </SolidLink>
        <SolidLink
          display="inline"
          fontSize="tit-02"
          theme="primary"
          marginLeft="ml-3"
          href="/"
        >
          tit-02
        </SolidLink>
        <SolidLink
          display="inline"
          fontSize="tit-03"
          theme="primary"
          marginLeft="ml-3"
          href="/"
        >
          tit-03
        </SolidLink>
        <SolidLink
          display="inline"
          fontSize="sub-01"
          theme="primary"
          marginLeft="ml-3"
          href="/"
        >
          sub-01
        </SolidLink>
        <SolidLink
          display="inline"
          fontSize="sub-02"
          theme="primary"
          marginLeft="ml-3"
          href="/"
        >
          sub-02
        </SolidLink>
        <SolidLink
          display="inline"
          fontSize="body-01"
          theme="primary"
          marginLeft="ml-3"
          href="/"
        >
          body-01
        </SolidLink>
        <SolidLink
          display="inline"
          fontSize="body-02"
          theme="primary"
          marginLeft="ml-3"
          href="/"
        >
          body-02
        </SolidLink>
      </div>
    );
  },
};

export const FontWeight: Story = {
  render: () => (
    <div>
      <SolidLink
        display="inline"
        marginLeft="ml-3"
        fontWeight="font-bold"
        theme="primary"
        href="/"
      >
        Bold
      </SolidLink>
      <SolidLink
        display="inline"
        marginLeft="ml-3"
        fontWeight="font-light"
        theme="primary"
        href="/"
      >
        Light
      </SolidLink>
      <SolidLink
        display="inline"
        marginLeft="ml-3"
        fontWeight="font-regular"
        theme="primary"
        href="/"
      >
        Regular
      </SolidLink>
    </div>
  ),
};

export const TextAlign: Story = {
  render: () => (
    <div>
      <SolidLink
        marginBottom="mb-3"
        textAlign="text-left"
        theme="primary"
        href="/"
      >
        Left
      </SolidLink>
      <SolidLink
        marginBottom="mb-3"
        textAlign="text-center"
        theme="primary"
        href="/"
      >
        Center
      </SolidLink>
      <SolidLink
        marginBottom="mb-3"
        textAlign="text-right"
        theme="primary"
        href="/"
      >
        Right
      </SolidLink>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div>
      <SolidLink disabled theme="primary" href="/">
        Disabled Button
      </SolidLink>
    </div>
  ),
};
