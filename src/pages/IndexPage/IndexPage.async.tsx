import { lazy } from 'react'

export const IndexPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import ('./IndexPage')), 1500)
}))