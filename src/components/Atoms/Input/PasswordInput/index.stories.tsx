import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import PasswordInput from ".";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  tags: ["autodocs"],
  title: "Atoms/Input/PasswordInput",
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
