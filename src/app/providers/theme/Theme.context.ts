import { createContext } from "react";

export enum ETheme {
    light = 'light',
    dark = 'dark'
}

export interface IThemeContext {
    theme?: ETheme;
    setTheme?: (theme: ETheme) => void;
}

export const ThemeContext = createContext<IThemeContext>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'