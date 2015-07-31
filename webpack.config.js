var webpackBase = require('./webpack.base')
var baseConfig = webpackBase.baseConfig
var options = webpackBase.options

/**
 * Entry
 * Reference: http://webpack.github.io/docs/configuration.html#entry
 */
baseConfig.entry = {
  app: './src'
}

baseConfig.output = {
  // Absolute output directory
  path: __dirname + '/public',

  // Output path from the view of the page
  // Uses webpack-dev-server in development
  publicPath: options.production ? '/' : 'http://localhost:8080/',

  // Filename for entry points
  // Only adds hash in build mode
  filename: options.production ? '[name].[hash].js' : '[name].bundle.js',

  // Filename for non-entry points
  // Only adds hash in build mode
  chunkFilename: options.production ? '[name].[hash].js' : '[name].bundle.js'
}

module.exports = baseConfig
