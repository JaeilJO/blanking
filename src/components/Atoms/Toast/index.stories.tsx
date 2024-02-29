import type { Meta, StoryObj } from "@storybook/react";

import Toast from ".";
import { useAlertStore } from "@/zustand/alertStore";

interface ToastArgs {
  status: "success" | "error" | "loading";
  message: string;
}

const meta: Meta<typeof Toast> = {
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    status: {
      options: ["success", "error", "loading"],
      control: {
        type: "select",
      },
    },
    message: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<ToastArgs>;

export const Primary: Story = {
  args: {
    message: "Text",
    status: "success",
  },
  decorators: [
    (Story, { args }) => {
      console.log(args);
      useAlertStore.setState({ status: args.status, message: args.message });
      return (
        <div style={{ height: "500px" }}>
          <Story />
        </div>
      );
    },
  ],
};
