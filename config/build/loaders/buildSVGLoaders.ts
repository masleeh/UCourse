const buildSVGLoader = () => {
    return {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }
}

export default buildSVGLoader