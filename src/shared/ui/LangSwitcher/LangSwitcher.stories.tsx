import type { Meta, StoryObj } from '@storybook/react';
import LangSwitcher from './LangSwitcher'

const meta = {
    title: 'ui/LangSwitcher',
    component: LangSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        className: '',
    },
    decorators: [
        
    ]
};