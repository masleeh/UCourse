import { classNames } from 'shared/lib/classNames/classNames'
import style from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/theme';
import LightThemeIcon from 'shared/assets/icons/light-theme.svg'
import DarkThemeIcon from 'shared/assets/icons/dark-theme.svg'

interface IThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({
    className
}:IThemeSwitcherProps) => {

    const {
        theme,
        toggleTheme
    } = useTheme()
    
    return (
        <button 
            onClick={toggleTheme} 
            className={classNames(style.ThemeSwitcher, {}, [className, style[theme]])}
        >
            {theme === "dark" ? <DarkThemeIcon width={25} height={25}/> : <LightThemeIcon width={25} height={25}/>}
        </button>
    )
}

export default ThemeSwitcher