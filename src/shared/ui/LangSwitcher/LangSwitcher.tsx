import { classNames } from 'shared/lib/classNames/classNames'
import style from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';

interface ILangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({
    className
}:ILangSwitcherProps) => {
    const {i18n} = useTranslation()

    console.log(__IS_DEV__)

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'ru' : 'en')
    }

    return (
            <Button 
                onClick={toggleLanguage}
                className={classNames(style.LangSwitcher, {}, [className])}
            >{i18n.resolvedLanguage.toUpperCase()}</Button>
    )
}

export default LangSwitcher