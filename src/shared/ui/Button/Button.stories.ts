import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button'

const meta = {
    title: 'ui/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // children: {control: "Button"},
    },
} satisfies Meta<typeof Button>;
  
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        className: '',
        children: 'Button',
        variant: 'contained'
    },
};

export const Secondary: Story = {
    args: {
        className: '',
        children: 'Button',
        variant: 'outlined'
    },
};