var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
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

// Reference: https://github.com/ampedandwired/html-webpack-plugin
// Render index.html
baseConfig.plugins.push(
  new HtmlWebpackPlugin({
    title: 'Web application',
    minify: options.production
  })
)

// Add build specific plugins
if (!options.production) {
  baseConfig.plugins.push(
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    // Only emit files when there are no errors
    new webpack.NoErrorsPlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    // Dedupe modules in the output
    new webpack.optimize.DedupePlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = baseConfig
