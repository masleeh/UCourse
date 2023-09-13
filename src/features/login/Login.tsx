import { Modal } from 'shared/ui/Modal';
import LoginForm from './Elements/LoginForm/LoginForm';

interface ILoginProps {
    isOpen: boolean;
    onClose: () => void;
}

const Login = ({
    isOpen,
    onClose
}:ILoginProps) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </Modal>
    )
}

export default Login