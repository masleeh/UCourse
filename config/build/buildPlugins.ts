import HTMLWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type { IBuildOptions } from "./types/config"
// @ts-ignore BundleAnalyzer types are not supported for Webpack5
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const buildPlugins = ({paths, isDev}: IBuildOptions):webpack.WebpackPluginInstance[] => {
    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ]

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
    }

    return plugins
}


export default buildPlugins