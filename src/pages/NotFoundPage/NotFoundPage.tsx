import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './NotFoundPage.module.scss'

interface INotFoundPageProps {
    className?: string;
}

const NotFoundPage = ({
    className
}:INotFoundPageProps) => {
    const {t} = useTranslation("common")
    return (
        <div className={classNames(style.NotFoundPage, {}, [className])}>
            {t("page-not-found")}
        </div>
    )
}

export default NotFoundPage