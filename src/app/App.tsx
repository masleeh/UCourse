import './styles/style.scss'

import { useTheme } from 'app/providers/theme/index'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/Sidebar'
import { Suspense } from 'react'



const App = () => {
    const {
        theme
    } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App