import { classNames } from 'shared/lib/classNames/classNames'
import style from './Navbar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import {Modal} from 'shared/ui/Modal';
import { useCallback, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

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
            <Modal isOpen={authModal} onClose={handleCloseModal}>

            </Modal>
        </div>
    )
}

export default Navbar
