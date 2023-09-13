import { classNames } from 'shared/lib/classNames/classNames';
import style from './Input.module.scss';
import { InputHTMLAttributes, memo } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>

interface IInputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    title: string;
}

const Input = memo(({
    className,
    value,
    title,
    type = 'text',
    ...otherProps
}:IInputProps) => {

    return (
        <div 
            className={classNames(style.Input, {}, [className])}
        >
            <h3 className={style.title}>{title}</h3>
            <input
                className={style.input}
                type={type}
                value={value}
                {...otherProps}
            />
        </div>
    )
})

export default Input