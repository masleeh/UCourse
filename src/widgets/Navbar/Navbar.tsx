import { classNames } from 'shared/lib/classNames/classNames'
import style from './Navbar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface INavbarProps {
    className?: string;
}

const Navbar = ({
    className
}:INavbarProps) => {

    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            <ThemeSwitcher />
            
        </div>
    )
}

export default Navbar
