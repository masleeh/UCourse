import { classNames } from 'shared/lib/classNames/classNames'
import style from './SideBar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import ArrowRightIcon from 'shared/assets/icons/arrow-right.svg'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface ISideBarProps {
    className?: string;
}

const SideBar = ({
    className
}:ISideBarProps) => {
    const {t} = useTranslation("common")
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar" 
            className={classNames(style.SideBar, {[style.collapsed]: collapsed}, [className])}
        >
            <div 
                className={style.toggle}
                onClick={onToggle}
            >
                <ArrowRightIcon 
                    width={25} 
                    height={25} 
                    className={classNames(style.toggle_icon, {[style.icon_collapsed]: collapsed}, [])}/>
            </div>

            <AppLink theme={AppLinkTheme.secondary} to="/">{t("link-main")}</AppLink>
            <AppLink theme={AppLinkTheme.secondary} to="/about">{t("link-about")}</AppLink>
            
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}

export default SideBar