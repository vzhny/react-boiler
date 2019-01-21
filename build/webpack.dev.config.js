/* eslint-disable */
const merge = require('webpack-merge');
const chalk = require('chalk');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

const host = 'localhost';
const port = '8080';

const message = chalk.bold(
  `Dev server running on http://${chalk.green(host)}:${chalk.green(port)}!

Press ${chalk.yellow('Ctrl + C')} to stop the server.
  `
);

module.exports = merge(webpackBaseConfig, {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    noInfo: true,
  },
  plugins: [
    new CleanTerminalPlugin({
      message,
    }),
  ],
});
