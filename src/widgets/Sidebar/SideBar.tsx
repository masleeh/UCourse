import { classNames } from 'shared/lib/classNames/classNames'
import style from './SideBar.module.scss'
import { useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

interface ISideBarProps {
    className?: string;
}

const SideBar = ({
    className
}:ISideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar" 
            className={classNames(style.SideBar, {[style.collapsed]: collapsed}, [className])}
        >
            <Button 
                onClick={onToggle}
                data-testid="sidebar-toggle"
            >123</Button>
            
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}

export default SideBar