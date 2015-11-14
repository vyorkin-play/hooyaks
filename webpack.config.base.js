'use strict';

var webpack = require('webpack');

module.exports = {
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    library: 'hooyaks',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', 'js']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]
}
