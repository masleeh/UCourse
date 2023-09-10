import type { Meta, StoryObj } from '@storybook/react';
import IndexPage from './IndexPage'

const meta = {
    title: 'pages/IndexPage',
    component: IndexPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof IndexPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        
    },
    decorators: [
        
    ]
};