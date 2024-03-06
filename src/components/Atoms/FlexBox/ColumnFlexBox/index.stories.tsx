import type { Meta, StoryObj } from "@storybook/react";

import RowFlexBox from ".";
import Button from "../../Button";

const meta: Meta<typeof RowFlexBox> = {
  component: RowFlexBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RowFlexBox>;

export const Custom: Story = {
  args: {
    backgroundColor: "primary",
    children: (
      <>
        <Button.Line theme="primary">Hello</Button.Line>
        <Button.Line theme="primary">Hello</Button.Line>
        <Button.Line theme="primary">Hello</Button.Line>
      </>
    ),
  },
};

export const Display: Story = {
  render: () => (
    <>
      <RowFlexBox
        display="flex"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Flex</Button.Line>
        <Button.Line theme="primary">Flex</Button.Line>
        <Button.Line theme="primary">Flex</Button.Line>
      </RowFlexBox>
      <RowFlexBox display="inline-flex" backgroundColor="light-gray">
        <Button.Line theme="primary">Inline</Button.Line>
        <Button.Line theme="primary">Inline</Button.Line>
        <Button.Line theme="primary">Inline</Button.Line>
      </RowFlexBox>
    </>
  ),
};

export const JustifyContent: Story = {
  render: () => (
    <>
      <RowFlexBox
        justifyContent="flex-start"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Flex Start</Button.Line>
        <Button.Line theme="primary">Flex Start</Button.Line>
        <Button.Line theme="primary">Flex Start</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        justifyContent="center"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Center</Button.Line>
        <Button.Line theme="primary">Center</Button.Line>
        <Button.Line theme="primary">Center</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        justifyContent="flex-end"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Flex End</Button.Line>
        <Button.Line theme="primary">Flex End</Button.Line>
        <Button.Line theme="primary">Flex End</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        justifyContent="space-between"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Space Between</Button.Line>
        <Button.Line theme="primary">Space Between</Button.Line>
        <Button.Line theme="primary">Space Between</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        justifyContent="space-around"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Space Around</Button.Line>
        <Button.Line theme="primary">Space Around</Button.Line>
        <Button.Line theme="primary">Space Around</Button.Line>
      </RowFlexBox>
    </>
  ),
};

export const BackgroundColor: Story = {
  render: () => (
    <>
      <RowFlexBox
        backgroundColor="black"
        paddingBottom="pb-2"
        paddingTop="pt-2"
        marginBottom="mb-3"
      >
        <Button.Line theme="light-gray">black</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        backgroundColor="primary"
        paddingBottom="pb-2"
        paddingTop="pt-2"
        marginBottom="mb-3"
      >
        <Button.Line theme="light-gray">primary</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        backgroundColor="gray"
        paddingBottom="pb-2"
        paddingTop="pt-2"
        marginBottom="mb-3"
      >
        <Button.Line theme="light-gray">gray</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        backgroundColor="white"
        paddingBottom="pb-2"
        paddingTop="pt-2"
        marginBottom="mb-3"
      >
        <Button.Line theme="light-gray">white</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        backgroundColor="none"
        paddingBottom="pb-2"
        paddingTop="pt-2"
        marginBottom="mb-3"
      >
        <Button.Line theme="light-gray">none</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        backgroundColor="light-gray"
        paddingBottom="pb-2"
        paddingTop="pt-2"
        marginBottom="mb-3"
      >
        <Button.Line theme="black">light-gray</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        backgroundColor="green"
        paddingBottom="pb-2"
        paddingTop="pt-2"
        marginBottom="mb-3"
      >
        <Button.Line theme="light-gray">green</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        backgroundColor="red"
        paddingBottom="pb-2"
        paddingTop="pt-2"
        marginBottom="mb-3"
      >
        <Button.Line theme="light-gray">red</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        backgroundColor="yellow"
        paddingBottom="pb-2"
        paddingTop="pt-2"
        marginBottom="mb-3"
      >
        <Button.Line theme="light-gray">yellow</Button.Line>
      </RowFlexBox>
    </>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <>
      <RowFlexBox
        backgroundColor="gray"
        marginBottom="mb-3"
        borderRadius={true}
        justifyContent="center"
        paddingTop="pt-2"
        paddingBottom="pb-2"
      >
        <Button.Line theme="white">Rounded</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        backgroundColor="gray"
        marginBottom="mb-3"
        borderRadius={false}
        justifyContent="center"
        paddingTop="pt-2"
        paddingBottom="pb-2"
      >
        <Button.Line theme="white">None Round</Button.Line>
      </RowFlexBox>
    </>
  ),
};

export const Gap: Story = {
  render: () => (
    <>
      <RowFlexBox
        display="flex"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Gap-0</Button.Line>
        <Button.Line theme="primary">Gap-0</Button.Line>
        <Button.Line theme="primary">Gap-0</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        display="flex"
        gap="gap-1"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Gap-1</Button.Line>
        <Button.Line theme="primary">Gap-1</Button.Line>
        <Button.Line theme="primary">Gap-1</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        display="flex"
        gap="gap-2"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Gap-2</Button.Line>
        <Button.Line theme="primary">Gap-2</Button.Line>
        <Button.Line theme="primary">Gap-2</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        display="flex"
        gap="gap-3"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Gap-3</Button.Line>
        <Button.Line theme="primary">Gap-3</Button.Line>
        <Button.Line theme="primary">Gap-3</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        display="flex"
        gap="gap-4"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Gap-4</Button.Line>
        <Button.Line theme="primary">Gap-4</Button.Line>
        <Button.Line theme="primary">Gap-4</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        display="flex"
        gap="gap-5"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Gap-5</Button.Line>
        <Button.Line theme="primary">Gap-5</Button.Line>
        <Button.Line theme="primary">Gap-5</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        display="flex"
        gap="gap-6"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Gap-6</Button.Line>
        <Button.Line theme="primary">Gap-6</Button.Line>
        <Button.Line theme="primary">Gap-6</Button.Line>
      </RowFlexBox>
      <RowFlexBox
        display="flex"
        gap="gap-7"
        backgroundColor="light-gray"
        marginBottom="mb-3"
      >
        <Button.Line theme="primary">Gap-7</Button.Line>
        <Button.Line theme="primary">Gap-7</Button.Line>
        <Button.Line theme="primary">Gap-7</Button.Line>
      </RowFlexBox>
    </>
  ),
};
