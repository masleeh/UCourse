import type { Meta, StoryObj } from '@storybook/react';
import AppLink, { AppLinkTheme } from './AppLink'
import { LightThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'ui/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        
    },
    decorators: [
        (StoryComponent) => (
            <LightThemeDecorator>
                <StoryComponent />
            </LightThemeDecorator>
        ),
    ]
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        className: '',
        children: 'Link Button',
        to: '/',
        theme: AppLinkTheme.primary
    },
    decorators: [
        
    ]
};

export const Secondary: Story = {
    args: {
        className: '',
        children: 'Link Button',
        to: '/',
        theme: AppLinkTheme.secondary
    },
    decorators: [
        
    ]
};