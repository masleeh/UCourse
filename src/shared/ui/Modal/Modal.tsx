import { classNames } from 'shared/lib/classNames/classNames';
import style from './Modal.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import Portal from '../Portal/Portal';

interface IModalProps {
    className?: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const ANIMATION_TIMER = 300

const Modal = (props:IModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose
    } = props

    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const mods: Record<string, boolean> = {
        [style.open]: isOpen,
        [style.isClosing]: isClosing
    }

    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_TIMER)
        }
    }, [onClose])

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') closeHandler()
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) window.addEventListener('keydown', onKeyDown)
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return (
        <Portal>
            <div className={classNames(style.Modal, mods, [className])}>
                <div className={style.overlay} onClick={closeHandler}>
                    <div 
                        className={classNames(style.content, mods, [])} onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default Modal