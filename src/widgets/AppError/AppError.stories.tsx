import type { Meta, StoryObj } from '@storybook/react';
import AppError from './AppError'
import { DarkThemeDecorator, LightThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'widget/AppError',
    component: AppError,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof AppError>;

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
        )
    ]
};