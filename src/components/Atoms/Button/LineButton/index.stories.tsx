import type { Meta, StoryObj } from "@storybook/react";

import LineButton from ".";
import { BsGoogle } from "react-icons/bs";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LineButton> = {
  component: LineButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LineButton>;

export const Custom: Story = {
  args: {
    children: "LineButton",
  },
};

export const Theme: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <LineButton theme="primary">Primary</LineButton>
      <LineButton theme="gray">Gray</LineButton>
      <LineButton theme="black">Black</LineButton>
      <LineButton theme="light-gray">Light Gray</LineButton>
      <LineButton theme="red">Red</LineButton>
      <LineButton theme="yellow">Yellow</LineButton>
      <LineButton theme="green">Green</LineButton>
      <LineButton theme="white">White</LineButton>
    </div>
  ),
};

export const Display: Story = {
  render: () => (
    <>
      <LineButton display="block" marginBottom="mb-3" theme="primary">
        Primary
      </LineButton>

      <LineButton display="inline" theme="gray">
        Gray
      </LineButton>
    </>
  ),
};

export const Icon: Story = {
  args: {
    icon: <BsGoogle />,
    children: "Icon Text",
  },
};

export const BorderWidth: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
      <LineButton theme="primary" borderWidth="border-thin">
        Thin Border
      </LineButton>
      <LineButton theme="primary" borderWidth="border-medium">
        Medium Border
      </LineButton>
      <LineButton theme="primary" borderWidth="border-thick">
        Thick Border
      </LineButton>
    </div>
  ),
};

export const FontSize: Story = {
  render: () => {
    return (
      <div>
        <LineButton
          display="inline"
          marginLeft="ml-3"
          fontSize="tit-01"
          theme="primary"
        >
          tit-01
        </LineButton>
        <LineButton
          display="inline"
          marginLeft="ml-3"
          fontSize="tit-02"
          theme="primary"
        >
          tit-02
        </LineButton>
        <LineButton
          display="inline"
          marginLeft="ml-3"
          fontSize="tit-03"
          theme="primary"
        >
          tit-03
        </LineButton>
        <LineButton
          display="inline"
          marginLeft="ml-3"
          fontSize="sub-01"
          theme="primary"
        >
          sub-01
        </LineButton>
        <LineButton
          display="inline"
          marginLeft="ml-3"
          fontSize="sub-02"
          theme="primary"
        >
          sub-02
        </LineButton>
        <LineButton
          display="inline"
          marginLeft="ml-3"
          fontSize="body-01"
          theme="primary"
        >
          body-01
        </LineButton>
        <LineButton
          display="inline"
          marginLeft="ml-3"
          fontSize="body-02"
          theme="primary"
        >
          body-02
        </LineButton>
      </div>
    );
  },
};

export const FontWeight: Story = {
  render: () => (
    <div>
      <LineButton
        marginLeft="ml-3"
        display="inline"
        fontWeight="font-bold"
        theme="primary"
      >
        Bold
      </LineButton>
      <LineButton
        marginLeft="ml-3"
        display="inline"
        fontWeight="font-light"
        theme="primary"
      >
        Light
      </LineButton>
      <LineButton
        marginLeft="ml-3"
        display="inline"
        fontWeight="font-regular"
        theme="primary"
      >
        Regular
      </LineButton>
    </div>
  ),
};
export const TextAlign: Story = {
  render: () => (
    <div>
      <LineButton
        marginBottom="mb-3"
        display="block"
        textAlign="text-left"
        theme="primary"
      >
        Left Align
      </LineButton>
      <LineButton
        marginBottom="mb-3"
        display="block"
        textAlign="text-center"
        theme="primary"
      >
        Center Align
      </LineButton>
      <LineButton
        marginBottom="mb-3"
        display="block"
        textAlign="text-right"
        theme="primary"
      >
        Right Align
      </LineButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
