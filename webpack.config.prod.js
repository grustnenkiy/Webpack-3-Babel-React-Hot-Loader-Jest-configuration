import path from 'path';
import webpack from 'webpack';
import config from './webpack.config.base';

module.exports = {
  ...config,

  output: {
    ...config.output,
    path: path.join(__dirname, "built")
  },

  plugins: [
    ...config.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false
    })
  ]
}