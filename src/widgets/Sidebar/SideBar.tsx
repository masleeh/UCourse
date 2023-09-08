import { classNames } from 'shared/lib/classNames/classNames'
import style from './SideBar.module.scss'
import { useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';

interface ISideBarProps {
    className?: string;
}

const SideBar = ({
    className
}:ISideBarProps) => {
    const {t} = useTranslation('common')
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(style.SideBar, {[style.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>Toggle</Button>
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}

export default SideBar