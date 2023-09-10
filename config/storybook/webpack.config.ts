import path from "path"
import { TBuildPath } from "../build/types/config"
import webpack, { RuleSetRule } from "webpack"
import buildCssLoader from "../build/loaders/buildCssLoaders"
import buildSVGLoader from "../build/loaders/buildSVGLoaders"

export default ({config}: {config: webpack.Configuration}) => {
    const paths: TBuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)){
            return {...rule, exclude: /\.svg$/i}
        }

        return rule
    })


    config.module.rules.push(buildSVGLoader())
    config.module.rules.push(buildCssLoader(true))


    return config
}