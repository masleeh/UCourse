import { classNames } from 'shared/lib/classNames/classNames'
import style from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';

interface INavbarProps {
    className?: string;
}

const Navbar = ({
    className
}:INavbarProps) => {
    const {t} = useTranslation("common")

    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <AppLink theme={AppLinkTheme.secondary} to="/">{t("Main")}</AppLink>
            <AppLink theme={AppLinkTheme.secondary} to="/">{t("About")}</AppLink>
        </div>
    )
}

export default Navbar
