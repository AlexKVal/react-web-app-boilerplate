var webpackConfig = require('./webpack.test')

// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-mocha
      'mocha',
      // Reference: https://github.com/domenic/sinon-chai
      'sinon-chai'
    ],

    reporters: [
      // Reference: https://github.com/litixsoft/karma-mocha-reporter
      'mocha',

      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      'coverage'
    ],

    files: [
      // polyfill. Needed because of React.js
      'node_modules/es5-shim/es5-shim.js',

      // Grab all files in the src folder that contain .test.
      'src/**/*.test.*'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'src/**/*.test.*': ['webpack', 'sourcemap']
    },

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      dir: 'coverage/',
      type: 'html'
    },

    webpack: webpackConfig,

    captureTimeout: 60000,
    browserNoActivityTimeout: 45000,

    browsers: [ process.env.CONTINUOUS_INTEGRATION === 'true' ? 'ChromeTravisCI' : 'Chrome' ],

    customLaunchers: {
      ChromeTravisCI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    mochaReporter: {
      output: 'autowatch'
    }
  })
}
