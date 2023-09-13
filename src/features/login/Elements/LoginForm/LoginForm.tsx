import { classNames } from 'shared/lib/classNames/classNames';
import style from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';

interface ILoginFormProps {
    className?: string;
}

const LoginForm = ({
    className
}:ILoginFormProps) => {
    const {t} = useTranslation("auth")

    return (
        <div className={classNames(style.LoginForm, {}, [className])}>
            <Input title={t("title_username")}/>
            <Input title={t("title_password")}/>
            <Button>{t("log_in")}</Button>
        </div>
    )
}

export default LoginForm