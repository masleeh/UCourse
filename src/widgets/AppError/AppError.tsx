import { classNames } from 'shared/lib/classNames/classNames';
import style from './AppError.module.scss';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';

interface IAppErrorProps {
    className?: string;
}

const AppError = ({
    className
}:IAppErrorProps) => {
    const {t} = useTranslation("common")

    const refreshPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(style.AppError, {}, [className])}>
            {t("app-error-page")}
            <Button onClick={refreshPage}>{t("refresh-page")}</Button>
        </div>
    )
}

export default AppError