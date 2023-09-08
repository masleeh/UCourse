import './styles/style.scss'

import { useTheme } from 'app/providers/theme/index'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'



const App = () => {
    const {
        theme
    } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}

export default App