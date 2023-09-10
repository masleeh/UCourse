import type { Preview } from "@storybook/react";
import '../../src/app/styles/style.scss'
// import {LightThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (StoryComponent) => (
            <RouterDecorator>
                <StoryComponent />
            </RouterDecorator>
        ),

    ]
};

export default preview;
