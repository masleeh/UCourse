import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal'

const meta = {
    title: 'ui/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Авторизуйтеся",
        isOpen: true,
        onClose: () => {}
    },
    decorators: [
        
    ]
};