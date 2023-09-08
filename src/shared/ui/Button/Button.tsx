import { classNames } from 'shared/lib/classNames/classNames'
import style from './Button.module.scss'
import { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button = (props:IButtonProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    return (
        <button 
            className={classNames(style.Button, {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button