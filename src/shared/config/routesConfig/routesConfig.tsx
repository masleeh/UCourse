import { AboutPage } from "pages/AboutPage"
import { IndexPage } from "pages/IndexPage"
import { RouteProps } from "react-router-dom"

export enum EAppRoutes {
    main = 'main',
    about = 'about'
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.main]: '/',
    [EAppRoutes.about]: '/about'
}

export const routesConfig: Record<EAppRoutes, RouteProps> = {
    [EAppRoutes.main]: {
        path: RoutePath.main,
        element: <IndexPage />
    },
    [EAppRoutes.about]: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}