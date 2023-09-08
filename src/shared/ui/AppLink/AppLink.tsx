import { classNames } from 'shared/lib/classNames/classNames'
import style from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    primary = 'primary',
    secondary = 'secondary'
}

interface IAppLinkProps extends LinkProps {
    className?: string;
    children: React.ReactNode;
    theme?: AppLinkTheme
}

const AppLink: React.FC<IAppLinkProps> = (props) => {
    const {
        className, 
        children, 
        to, 
        theme = AppLinkTheme.primary, 
        ...otherProps
    } = props;

    return (
        <Link 
            to={to} 
            className={classNames(style.AppLink, {}, [className, style[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}

export default AppLink