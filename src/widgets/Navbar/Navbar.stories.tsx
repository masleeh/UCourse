import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar'
import { DarkThemeDecorator, LightThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
    args: {
        className: '',
    },
    decorators: [
        (StoryComponent) => (
            <LightThemeDecorator>
                <StoryComponent />
            </LightThemeDecorator>
        ),
    ]
};

export const DarkTheme: Story = {
    args: {
        className: '',
    },
    decorators: [
        (StoryComponent) => (
            <DarkThemeDecorator>
                <StoryComponent />
            </DarkThemeDecorator>
        ),
    ]
};