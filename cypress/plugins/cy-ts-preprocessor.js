const wp = require('@cypress/webpack-preprocessor');

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [
          '/node_modules/',
          '/cypress/plugins/index',
          '/cypress/support/index'
        ],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader'
          }
        ]
      },
      {
        test: /\.features$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/lib/featuresLoader'
          }
        ]
      }
    ]
  },
  node: {
    fs: 'empty',
    child_process: 'empty',
    readline: 'empty'
  }
};

const options = {
  webpackOptions
};

module.exports = wp(options);
