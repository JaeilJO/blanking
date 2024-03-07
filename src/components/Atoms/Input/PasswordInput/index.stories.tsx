import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import PasswordInput from ".";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

const showIcon = <FaRegEye />;
const hideIcon = <FaRegEyeSlash />;

export const Custom: Story = {
  args: {
    placeholder: "placeholder",
    showIcon,
    hideIcon,
  },
};

export const Display: Story = {
  render: () => (
    <>
      <PasswordInput
        placeholder="inline"
        display="inline"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
      <PasswordInput
        placeholder="inline"
        display="inline"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />

      <PasswordInput
        placeholder="block"
        display="block"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
    </>
  ),
};

export const Placeholder: Story = {
  args: {
    placeholder: "Custom Placeholder",
    showIcon,
    hideIcon,
  },
};

export const FontSize: Story = {
  render: () => (
    <>
      <PasswordInput
        placeholder="tit-01"
        fontSize="tit-01"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
      <PasswordInput
        placeholder="tit-02"
        fontSize="tit-02"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
      <PasswordInput
        placeholder="tit-03"
        fontSize="tit-03"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
      <PasswordInput
        placeholder="sub-01"
        fontSize="sub-01"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
      <PasswordInput
        placeholder="sub-02"
        fontSize="sub-02"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
      <PasswordInput
        placeholder="body-01"
        fontSize="body-01"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
      <PasswordInput
        placeholder="body-02"
        fontSize="body-02"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
    </>
  ),
};

export const FontWeight: Story = {
  render: () => (
    <>
      <PasswordInput
        placeholder="bold"
        fontWeight="font-bold"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
      <PasswordInput
        placeholder="regular"
        fontWeight="font-regular"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
      <PasswordInput
        placeholder="light"
        fontWeight="font-light"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
    </>
  ),
};

export const BorderWidth: Story = {
  render: () => (
    <>
      <PasswordInput
        placeholder="thin"
        borderWidth="border-thin"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
      <PasswordInput
        placeholder="medium"
        borderWidth="border-medium"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
      <PasswordInput
        placeholder="thick"
        borderWidth="border-thick"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
      />
    </>
  ),
};

export const Theme: Story = {
  render: () => (
    <>
      <PasswordInput
        placeholder="primary"
        theme="primary"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
        data-testid="password"
      />
      <PasswordInput
        placeholder="gray"
        theme="gray"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
        data-testid="password"
      />
      <PasswordInput
        placeholder="light-gray"
        theme="light-gray"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
        data-testid="password"
      />
      <PasswordInput
        placeholder="red"
        theme="red"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
        data-testid="password"
      />
      <PasswordInput
        placeholder="green"
        theme="green"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
        data-testid="password"
      />
      <PasswordInput
        placeholder="yellow"
        theme="yellow"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
        data-testid="password"
      />
      <PasswordInput
        placeholder="black"
        theme="black"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
        data-testid="password"
      />
      <PasswordInput
        placeholder="white"
        theme="white"
        marginBottom="mb-3"
        showIcon={showIcon}
        hideIcon={hideIcon}
        data-testid="password"
      />
    </>
  ),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = canvas.getAllByTestId("password");

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
    showIcon,
    hideIcon,
  },
};

export const Icon: Story = {
  args: {
    placeholder: "Icon",
    showIcon,
    hideIcon,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByPlaceholderText("Icon");

    await userEvent.type(input, "test", {
      delay: 100,
    });

    const button = canvas.getByRole("button");

    await userEvent.click(button);
  },
};
