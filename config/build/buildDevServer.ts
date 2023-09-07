import { IBuildOptions } from "./types/config"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"

const buildDevServer = (options: IBuildOptions):DevServerConfiguration => {
    return {
        port: options.port,
        historyApiFallback: true
    }
}

export default buildDevServer