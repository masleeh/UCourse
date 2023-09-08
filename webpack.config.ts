import path from 'path'
import webpack from "webpack"
import buildWebpackConfig from './config/build/buildWebpackOptions'
import { IBuildEnv, TBuildPath } from './config/build/types/config'


export default (env: IBuildEnv) => {
    const paths: TBuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const mode = env.mode || 'development'
    const port = env.port || 3000

    const isDev = mode === 'development'

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    })

    return config
}