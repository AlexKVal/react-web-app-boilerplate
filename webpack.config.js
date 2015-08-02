var webpack = require('webpack')
var autoprefixer = require('autoprefixer-core')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
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

// CSS LOADER
// Reference: https://github.com/webpack/css-loader
// Allow loading css through js
// Reference: https://github.com/postcss/postcss-loader
// Postprocess your css with PostCSS plugins
var cssLoader = {
  test: /\.css$/,
  // Reference: https://github.com/webpack/extract-text-webpack-plugin
  // Extract css files in production builds
  //
  // Reference: https://github.com/webpack/style-loader
  // Use style-loader in development for hot-loading
  loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
}
// Add cssLoader to the loader list
baseConfig.module.loaders.push(cssLoader)

baseConfig.plugins.push(
  // Reference: https://github.com/webpack/extract-text-webpack-plugin
  // Extract css files
  new ExtractTextPlugin('[name].[hash].css')
)

/**
 * PostCSS
 * Reference: https://github.com/postcss/autoprefixer-core
 * Add vendor prefixes to your css
 */
baseConfig.postcss = function postcss () {
  return [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
}

// Reference: https://github.com/ampedandwired/html-webpack-plugin
// Render index.html
baseConfig.plugins.push(
  new HtmlWebpackPlugin({
    title: 'Web application',
    minify: options.production
  })
)

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
