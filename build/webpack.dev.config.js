/* eslint-disable */
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
  devtool: 'source-map',
  devServer: {
    open: true,
  },
});
