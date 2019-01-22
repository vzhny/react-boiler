/* eslint-disable */
const merge = require('webpack-merge');
const chalk = require('chalk');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

const url = chalk.bold(chalk.blue('http://localhost:8080'));
const sigInt = chalk.bold(chalk.white('Ctrl + C'));

module.exports = merge(webpackBaseConfig, {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    quiet: true,
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Dev server is successfully running on ${url}!`],
        notes: [`Press ${sigInt} to stop the server.`],
      },
    }),
  ],
});
