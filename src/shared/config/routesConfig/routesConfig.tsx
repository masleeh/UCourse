import { AboutPage } from "pages/AboutPage"
import { IndexPage } from "pages/IndexPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"

export enum EAppRoutes {
    main = 'main',
    about = 'about',
    notFound = 'notFound'
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.main]: '/',
    [EAppRoutes.about]: '/about',
    [EAppRoutes.notFound]: '/*'
}

export const routesConfig: Record<EAppRoutes, RouteProps> = {
    [EAppRoutes.main]: {
        path: RoutePath.main,
        element: <IndexPage />
    },
    [EAppRoutes.about]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [EAppRoutes.notFound]: {
        path: RoutePath.notFound,
        element: <NotFoundPage />
    }
}