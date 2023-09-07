import { Link, Route, Routes } from 'react-router-dom'
import './styles/style.scss'
import { IndexPageAsync } from './pages/IndexPage/IndexPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { Suspense } from 'react'
import { useTheme } from './theme/Theme.utils'
import { classNames } from './helpers/classNames/classNames'



const App = () => {
    const {
        theme, toggleTheme
    } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to="/">Main page </Link>
            <Link to="/about">About page</Link>
            <button onClick={toggleTheme}>{theme}</button>
            
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<IndexPageAsync />}/>
                    <Route path="/about" element={<AboutPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App