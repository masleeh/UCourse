import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { IBuildOptions } from "./types/config"

const buildLoaders = ({isDev}: IBuildOptions): webpack.RuleSetRule[] => {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }

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

    const styleLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                    },
                }
            },
            "sass-loader",
        ],
    }

    return [
        svgLoader,
        fileLoader,
        typescriptLoader,
        styleLoaders
    ]
}


export default buildLoaders