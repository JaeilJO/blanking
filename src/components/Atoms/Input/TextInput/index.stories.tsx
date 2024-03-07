import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import TextInput from ".";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Custom: Story = {
  args: {
    placeholder: "placeholder",
  },
};

export const Type: Story = {
  render: () => (
    <>
      <TextInput placeholder="Email" type="email" marginBottom="mb-3" />
      <TextInput placeholder="text" type="text" />
    </>
  ),
};

export const Display: Story = {
  render: () => (
    <>
      <TextInput placeholder="inline" display="inline" />
      <TextInput placeholder="inline" display="inline" />

      <TextInput placeholder="block" display="block" />
    </>
  ),
};

export const Placeholder: Story = {
  args: {
    placeholder: "Custom Placeholder",
  },
};

export const FontSize: Story = {
  render: () => (
    <>
      <TextInput placeholder="tit-01" fontSize="tit-01" marginBottom="mb-3" />
      <TextInput placeholder="tit-02" fontSize="tit-02" marginBottom="mb-3" />
      <TextInput placeholder="tit-03" fontSize="tit-03" marginBottom="mb-3" />
      <TextInput placeholder="sub-01" fontSize="sub-01" marginBottom="mb-3" />
      <TextInput placeholder="sub-02" fontSize="sub-02" marginBottom="mb-3" />
      <TextInput placeholder="body-01" fontSize="body-01" marginBottom="mb-3" />
      <TextInput placeholder="body-02" fontSize="body-02" marginBottom="mb-3" />
    </>
  ),
};

export const FontWeight: Story = {
  render: () => (
    <>
      <TextInput
        placeholder="bold"
        fontWeight="font-bold"
        marginBottom="mb-3"
      />
      <TextInput
        placeholder="regular"
        fontWeight="font-regular"
        marginBottom="mb-3"
      />
      <TextInput
        placeholder="light"
        fontWeight="font-light"
        marginBottom="mb-3"
      />
    </>
  ),
};

export const BorderWidth: Story = {
  render: () => (
    <>
      <TextInput
        placeholder="thin"
        borderWidth="border-thin"
        marginBottom="mb-3"
      />
      <TextInput
        placeholder="medium"
        borderWidth="border-medium"
        marginBottom="mb-3"
      />
      <TextInput
        placeholder="thick"
        borderWidth="border-thick"
        marginBottom="mb-3"
      />
    </>
  ),
};

export const Theme: Story = {
  render: () => (
    <>
      <TextInput placeholder="primary" theme="primary" marginBottom="mb-3" />
      <TextInput placeholder="gray" theme="gray" marginBottom="mb-3" />
      <TextInput
        placeholder="light-gray"
        theme="light-gray"
        marginBottom="mb-3"
      />
      <TextInput placeholder="red" theme="red" marginBottom="mb-3" />
      <TextInput placeholder="green" theme="green" marginBottom="mb-3" />
      <TextInput placeholder="yellow" theme="yellow" marginBottom="mb-3" />
      <TextInput placeholder="black" theme="black" marginBottom="mb-3" />
      <TextInput placeholder="white" theme="white" marginBottom="mb-3" />
    </>
  ),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = canvas.getAllByRole("textbox");

    for (const input of inputs) {
      await userEvent.type(input, "test", {
        delay: 100,
      });
    }
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    disabled: true,
  },
};
