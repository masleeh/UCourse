import { classNames } from 'shared/lib/classNames/classNames'
import style from './Button.module.scss'
import { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: 'contained' | 'outlined'
}

const Button = (props:IButtonProps) => {
    const {
        className,
        children,
        variant = 'contained',
        ...otherProps
    } = props

    return (
        <button 
            className={classNames(style.Button, {}, [className, style[variant]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button