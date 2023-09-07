import HTMLWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from "./types/config"

const buildPlugins = ({paths}: IBuildOptions):webpack.WebpackPluginInstance[] => [
    new HTMLWebpackPlugin({
        template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
    })
]

export default buildPlugins