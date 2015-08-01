/* eslint no-var: 0 */
var webpack = require('webpack')
var yargs = require('yargs')

var options = yargs
  .alias('p', 'production')
  .argv

var jsLoader = 'babel?cacheDirectory'

var baseConfig = {
  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
  entry: undefined,

  output: undefined,

  externals: undefined,

  module: {
    preLoaders: [],
    loaders: [{
      // JS LOADER
      // Reference: https://github.com/babel/babel-loader
      // Transpile .js files using babel-loader
      // Compiles ES6 and ES7 into ES5 code
      test: /\.js$/,
      loader: jsLoader,
      exclude: /node_modules/
    }, {
      // JSX LOADER
      // Transpile .jsx files using babel-loader
      test: /\.jsx$/,
      loader: options.production ? jsLoader : 'react-hot!' + jsLoader,
      exclude: /node_modules/
    }, {
      // ASSET LOADER
      // Reference: https://github.com/webpack/file-loader
      // Copy png, jpg, jpeg, gif, svg, woff, ttf, eot files to output
      // Rename the file using the asset hash
      // Pass along the updated reference to your code
      // You can add here any file extension you want to get copied to your output
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(options.production ? 'production' : 'development')
    })
  ],

  /**
   * Resolve
   * Reference: http://webpack.github.io/docs/configuration.html#resolve
   * Use this to tweak how webpack should handle module resolution
   */
  resolve: {
    // Reference: http://webpack.github.io/docs/configuration.html#resolve-extensions
    // Allows you to require files that end with .jsx without typing it
    // For example, if you have file.jsx, you can type: require('./file')
    extensions: ['', '.js', '.jsx']
  },

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  devServer: {
    contentBase: './public',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  },

  devtool: options.production ? 'source-map' : 'eval'
}

module.exports = {
  baseConfig: baseConfig,
  jsLoader: jsLoader,
  options: options
}
