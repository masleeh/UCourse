import { classNames } from 'shared/lib/classNames/classNames';
import './Spinner.scss'

interface ISpinnerProps {
    className?: string;
}

const Spinner = ({
    className
}:ISpinnerProps) => {
    return (
        <div className={classNames('loader', {}, [className])}>
        </div>
    )
}

export default Spinner