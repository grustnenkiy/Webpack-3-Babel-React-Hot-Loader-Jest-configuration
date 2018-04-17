import path from 'path';
import webpack from 'webpack';
import config from './webpack.config.base';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  ...config,
  devtool: 'eval',

  output: {
    ...config.output,
    path: path.join(__dirname, "dev"),
  },

  devServer: {
    hot: true,
    port: 3000
  },

  plugins: [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: true
    })
  ]
}