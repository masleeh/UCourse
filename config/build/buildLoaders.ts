import webpack from "webpack"
import { IBuildOptions } from "./types/config"
import buildCssLoader from "./loaders/buildCssLoaders"
import buildSVGLoader from "./loaders/buildSVGLoaders"

const buildLoaders = ({isDev}: IBuildOptions): webpack.RuleSetRule[] => {
    const svgLoader = buildSVGLoader()

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }


    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const styleLoaders = buildCssLoader(isDev)

    return [
        svgLoader,
        fileLoader,
        typescriptLoader,
        styleLoaders
    ]
}


export default buildLoaders