var webpackBase = require('./webpack.base')
var baseConfig = webpackBase.baseConfig

baseConfig.output = {
  pathinfo: true
}

baseConfig.module.preLoaders.push({
  test: /\.jsx?$/,
  exclude: [
    /node_modules/,
    /\.test\.jsx?$/
  ],
  loader: 'isparta-instrumenter'
})

baseConfig.module.loaders.push({
  // Skip loading css in test mode
  // Reference: https://github.com/webpack/null-loader
  test: /\.css$/, loader: 'null'
})

baseConfig.devtool = 'inline-source-map'

module.exports = baseConfig
