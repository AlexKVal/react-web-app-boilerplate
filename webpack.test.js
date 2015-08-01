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

module.exports = baseConfig
