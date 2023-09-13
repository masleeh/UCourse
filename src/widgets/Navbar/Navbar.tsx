import { classNames } from 'shared/lib/classNames/classNames'
import style from './Navbar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useCallback, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Login } from 'features/login';

interface INavbarProps {
    className?: string;
}

const Navbar = ({
    className
}:INavbarProps) => {
    const {t} = useTranslation('common')

    const [authModal, setAuthModal] = useState(false)

    const handleCloseModal = useCallback(() => setAuthModal(false), [])
    const handleOpenModal = useCallback(() => setAuthModal(true), [])

    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <Button onClick={handleOpenModal}>{t("login_button")}</Button>
            <Login onClose={handleCloseModal} isOpen={authModal}/>
        </div>
    )
}

export default Navbar
