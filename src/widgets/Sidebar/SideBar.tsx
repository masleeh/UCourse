import { classNames } from 'shared/lib/classNames/classNames'
import style from './SideBar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import ArrowRightIcon from 'shared/assets/icons/arrow-right.svg'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/icons/home-icon.svg'
import AboutIcon from 'shared/assets/icons/about-icon.svg'

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
                data-testid="sidebar-toggle"
                className={style.toggle}
                onClick={onToggle}
            >
                <ArrowRightIcon 
                    width={25} 
                    height={25} 
                    className={classNames(style.toggle_icon, {[style.icon_collapsed]: collapsed}, [])}/>
            </div>

            <AppLink
                className={classNames(style.icon_container, {}, [])} 
                theme={AppLinkTheme.secondary} 
                to="/"
            >
                <HomeIcon width={30} height={30} className={style.icon_link_home}/>
                <span className={classNames('', {[style.hide]: collapsed}, [])}>{t("link-main")}</span>
            </AppLink>

            <AppLink 
                className={classNames(style.icon_container, {}, [])} 
                theme={AppLinkTheme.secondary} 
                to="/about"
            >
                <AboutIcon width={30} height={30} className={style.icon_link_about}/>
                <span className={classNames('', {[style.hide]: collapsed}, [])}>{t("link-about")}</span>
            </AppLink>
            
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}

export default SideBar