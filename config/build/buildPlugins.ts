import HTMLWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type { IBuildOptions } from "./types/config"
// @ts-ignore BundleAnalyzer types are not supported for Webpack5
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const buildPlugins = ({paths, isDev}: IBuildOptions):webpack.WebpackPluginInstance[] => [
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
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
        openAnalyzer: false
    })
]

export default buildPlugins