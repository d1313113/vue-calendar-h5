const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.common');

const devConfig = merge(config, {
  mode: 'development',
  target: 'web',
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../static/index.html')
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 8080,
    open: false,
    hot: true,
    hotOnly: true,
    clientLogLevel: 'silent',
    stats: 'errors-only',
    noInfo: true
  }
});

module.exports = devConfig;
