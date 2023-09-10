import { classNames } from 'shared/lib/classNames/classNames';
import style from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import { Spinner } from '../Spinner';

interface ILangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({
    className
}: ILangSwitcherProps) => {
    const { i18n } = useTranslation()

    const toggleLanguage = async () => {
        i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'ru' : 'en')
    }

    return (
        <Button
            onClick={toggleLanguage}
            className={classNames(style.LangSwitcher, {}, [className])}
        >
            {i18n.resolvedLanguage ? (
                i18n.resolvedLanguage.toUpperCase()
            ) : (
                <Spinner className={style.spinner}/>
            )}
        </Button>
    )
}

export default LangSwitcher