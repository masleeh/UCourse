import webpack from "webpack"
import { IBuildOptions } from "./types/config"

const buildResolvers = (options: IBuildOptions):webpack.ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            options.paths.src,
            'node_modules'
        ],
        mainFiles: ['index'],
        alias: {}
    }
}

export default buildResolvers