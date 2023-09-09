import { classNames } from 'shared/lib/classNames/classNames';
import style from './PageLoader.module.scss';
import Spinner from 'shared/ui/Spinner/Spinner';

interface IPageLoaderProps {
    className?: string;
}

const PageLoader = ({
    className
}:IPageLoaderProps) => {
    return (
        <div className={classNames(style.PageLoader, {}, [className])}>
            <Spinner />
        </div>
    )
}

export default PageLoader