import { useContext } from "react";
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./Theme.context";


export interface IUseThemeResult {
    toggleTheme: () => void;
    theme: ETheme
}

export const useTheme = ():IUseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
        const newTheme = theme === ETheme.light ? ETheme.dark : ETheme.light
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    } 

    return {
        theme,
        toggleTheme
    }
}