import { classNames } from 'shared/lib/classNames/classNames'
import style from './Navbar.module.scss'
import { Link } from 'react-router-dom';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface INavbarProps {
    className?: string;
}

const Navbar = ({
    className
}:INavbarProps) => {
    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.secondary} to="/">Main</AppLink>
            <AppLink theme={AppLinkTheme.secondary} to="/">About</AppLink>
        </div>
    )
}

export default Navbar
