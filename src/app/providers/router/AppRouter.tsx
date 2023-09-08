import { IndexPage } from 'pages/IndexPage'
import { AboutPage } from 'pages/AboutPage'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'shared/config/routesConfig/routesConfig'

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routesConfig).map(({element, path}) => (
                <Route key={path} path={path} element={
                    <div className="page-wrapper">
                        {element}
                    </div>
                }/>
            ))}
        </Routes>
    )
}

export default AppRouter