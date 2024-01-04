import type { Meta, StoryObj } from '@storybook/react';
import ButtonComponent from '.';

const meta: Meta<typeof ButtonComponent> = {
    component: ButtonComponent,

    tags: ['autodocs'],

    argTypes: {
        color: {
            options: ['red', 'blue'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Primary: Story = {
    args: {
        color: 'red',
    },
};
