const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: '3000',
    historyApiFallback: true,
    proxy: { '/api/**': { target: 'http://localhost:3000', secure: false } },
  },
  devtool: 'inline-source-map',
});
